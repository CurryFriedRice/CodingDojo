using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using the_wall.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace the_wall.Controllers
{
    public class MessagesController : Controller
    {
        // private readonly ILogger<HomeController> _logger;

        // public MessagesController(ILogger<HomeController> logger)
        // {
        //     _logger = logger;
        // }

        int? UserID{get{
            return HttpContext.Session.GetInt32("uid");
        }}
        
        bool LoggedIn{get{
            return UserID != null;
        }}


        private WallContext DbConnection;

        // here we can "inject" our context service into the constructor
        public MessagesController(WallContext context)
        {
            DbConnection = context;
        }


        [HttpGet("Messages")]
        public IActionResult Index()
        {
            if(!LoggedIn) return RedirectToAction("Index","User");

            ViewBag.Messages = DbConnection.Messages
                .Include(M => M.UserComments)
                    .ThenInclude(C => C.User)
                .Include(M => M.User)
                .ToList();
            
            ViewBag.Comments = DbConnection.Comments.ToList();
            foreach(var Message in ViewBag.Messages)
            {
                Console.WriteLine($"Message Count: {Message.UserComments.Count}");
            }

            ViewBag.UserID = UserID;
            foreach(var Message in ViewBag.Messages)
            {
                Console.WriteLine(Message.UserID == UserID);
            }
            // ViewBag.Messages = DbConnection.Messages
            //         .Include(msg => msg.User)
            //         .Include(msg => msg.Comments)
            //             .ThenInclude(com => com.User)
            //         .ToList();
            return View();
        }

        [HttpPost("Messages/New")]
        public IActionResult New(SubmissionModel newSubmission)
        {

            if(!ModelState.IsValid)
            {
                ViewBag.Messages = DbConnection.Messages.ToList();
                return View("Index");
            }
            Console.WriteLine($"USERID {UserID}");

            newSubmission.UserID = (int)UserID;
            Messages newMessage = new Messages();
            newMessage.Setup(newSubmission);

            Console.WriteLine(newMessage.Message);


            DbConnection.Messages.Add(newMessage);
            DbConnection.SaveChanges();
            return RedirectToAction("Index", "Messages");
        }

        [HttpPost("Messages/delete")]
        public IActionResult Delete(SubmissionModel target)
        {
            Messages message = DbConnection.Messages.FirstOrDefault(mess => mess.MessageID == target.MessageID);
            // Console.WriteLine(message);
            // Console.WriteLine(message.Message);
            // Console.WriteLine(message.MessageID);

            DbConnection.Messages.Remove(message);
            DbConnection.SaveChanges();
            return RedirectToAction("Index", "Messages");

        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

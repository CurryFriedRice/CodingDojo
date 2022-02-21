using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using the_wall.Models;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
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
            ViewBag.Messages = DbConnection.Messages.ToList();
            return View();
        }

        [HttpPost("Messages/New")]
        public IActionResult New(SubmissionModel newSubmission)
        {
            newSubmission.UserID = (int)UserID;
            Messages newMessage = new Messages();
            newMessage.Setup(newSubmission);
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

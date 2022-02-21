using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using the_wall.Models;


using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace the_wall.Controllers
{
    public class CommentsController : Controller
    {
        // private readonly ILogger<HomeController> _logger;

        // public CommentsController(ILogger<HomeController> logger)
        // {
        //     _logger = logger;
        // }

        // public IActionResult Index()
        // {
        //     return View();
        // }
        int? UserID{get{
            return HttpContext.Session.GetInt32("uid");
        }}
        
        bool LoggedIn{get{
            return UserID != null;
        }}
        private WallContext DbConnection;

        // here we can "inject" our context service into the constructor
        public CommentsController(WallContext context)
        {
            DbConnection = context;
        }



        [HttpPost("Comments/new")]
        public IActionResult New(SubmissionModel newSubmission)
        {
            newSubmission.UserID = (int)UserID;
            Comments newComment = new Comments();
            newComment.Setup(newSubmission);

            DbConnection.Comments.Add(newComment);
            DbConnection.SaveChanges();
            return RedirectToAction("Index","Messages");
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

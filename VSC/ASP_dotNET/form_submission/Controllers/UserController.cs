using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using form_submission.Models;


namespace form_submission.Controllers
{
    public class UserController : Controller
    {

        [HttpPost("user/create")]
        public IActionResult Validate(User user)
        {
            if(ModelState.IsValid)
            {
                //Do stuff with the user data
                return RedirectToAction("Success");
            }
            return RedirectToAction("Index","Home");
        }


        public IActionResult Success()
        {
            return View();
        }
        // private readonly ILogger<HomeController> _logger;

        // public HomeController(ILogger<HomeController> logger)
        // {
        //     _logger = logger;
        // }

        // public IActionResult Index()
        // {
        //     return View();
        // }

        // public IActionResult Privacy()
        // {
        //     return View();
        // }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        // }
    }
}

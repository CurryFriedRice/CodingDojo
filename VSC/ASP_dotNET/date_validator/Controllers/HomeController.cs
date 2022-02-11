using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using date_validator.Models;

namespace date_validator.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet("")]
        public IActionResult DateForm()
        {
            return View();
        }

        [HttpPost("Home/Validate")]
        public IActionResult Validate(PastDate PD)
        {
            if(ModelState.IsValid)
            {
                return RedirectToAction("Success");
            }
            return View("DateForm");
        }

        [HttpGet("home/success")]
        public IActionResult Success()
        {
            return View();
        }
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
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

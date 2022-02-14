using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dojodachi.Models;
using Microsoft.AspNetCore.Http;


namespace dojodachi.Controllers
{
    public class HomeController : Controller
    {
        static Pet Pet = new Pet(); 

        [HttpGet("")]
        public IActionResult Index()
        {
            Pet = new Pet();
            return View(Pet);
        }

        [HttpGet("home/feed")]
        public IActionResult Feed()
        {   
            
            if(Pet.meals <= 0)
                return Json(new PetErr("Not Enough Food"));
            int amt = Pet.Feed();
            var resJson = new {amount = amt, pet = Pet};
            return Json(resJson);
        }

        [HttpGet("home/play")]
        public IActionResult Play()
        {
            int amt = Pet.Play();
            var resJson = new {amount = amt, pet = Pet};
            return Json(resJson);
        }

        [HttpGet("home/work")]
        public IActionResult Work()
        {
            int amt = Pet.work();
            var resJson = new {amount = amt, pet = Pet};
            return Json(resJson);
        }
        
        [HttpGet("home/sleep")]
        public IActionResult Sleep()
        {
            int amt = Pet.sleep();
            var resJson = new {amount = amt, pet = Pet};
            return Json(resJson);
        }

        [HttpGet("home/checkState")]
        public IActionResult State()
        {
            var resJson = new {win = Pet.win(), lose = Pet.lose()};
            return Json(resJson);
        }
        
        [HttpGet("home/restart")]
        public IActionResult Restart()
        {
            
            return RedirectToAction("Index");
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

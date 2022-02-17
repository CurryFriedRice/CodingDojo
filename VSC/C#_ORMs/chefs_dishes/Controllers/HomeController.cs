using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using chefs_dishes.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace chefs_dishes.Controllers
{
    public class HomeController : Controller
    {
        private ChefDishContext DbContext;
        public HomeController(ChefDishContext context)
        {
            DbContext = context;
        }


        [HttpGet("")]
        public IActionResult Index()
        {
            return RedirectToAction("Chef");
        }

        [HttpGet("Chef")]
        public IActionResult Chef()
        {
            List<Chef> Chefs = DbContext.Chefs.Include(C => C.DishesCooked).ToList();
            return View(Chefs);
        }
        [HttpGet("Chef/Form")]
        public IActionResult ChefForm()
        {
            return View();
        }

        [HttpPost("Chef/Validate")]
        public IActionResult ChefValidate(Chef newChef)
        {
            if(ModelState.IsValid)
            {
                DbContext.Chefs.Add(newChef);
                DbContext.SaveChanges();
                return RedirectToAction("Chef");
            }
            return View("ChefForm");
        }

        [HttpGet("Dish")]
        public IActionResult Dish()
        {
            List<Dish> Dish = DbContext.Dishes.Include(D => D.Creator).ToList();
            return View(Dish);
        }

        [HttpGet("Dish/Form")]
        public IActionResult DishForm()
        {
            ViewBag.Chefs = DbContext.Chefs.ToList();
            return View();
        }
        [HttpPost("Dish/Validate")]
        public IActionResult DishValidate(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                DbContext.Dishes.Add(newDish);
                DbContext.SaveChanges();
                return RedirectToAction("Dish");
            }

            return View("DishForm");
        }


    //     private readonly ILogger<HomeController> _logger;

    //     public HomeController(ILogger<HomeController> logger)
    //     {
    //         _logger = logger;
    //     }

    //     public IActionResult Index()
    //     {
    //         return View();
    //     }

    //     public IActionResult Privacy()
    //     {
    //         return View();
    //     }

    //     [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    //     public IActionResult Error()
    //     {
    //         return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    //     }
    }
}

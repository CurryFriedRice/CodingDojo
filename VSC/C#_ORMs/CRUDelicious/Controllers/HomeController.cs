using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;
using CRUDelicious.Models;
using System.Linq;


namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private DishContext _context;

        // here we can "inject" our context service into the constructor
        public HomeController(DishContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            List<DishModel> AllDishes = _context.Dishes.ToList();

            return View(AllDishes);
        }

        [HttpGet("dish/form")]
        public IActionResult DishForm()
        {
            return View();
        }

        
        [HttpPost("dish/delete")]
        public IActionResult DishDelete(int id)
        {
            DishModel RetrievedUser = _context.Dishes
                    .SingleOrDefault(Dish => Dish.id == (id+1));
            _context.Dishes.Remove(RetrievedUser);
            _context.SaveChanges();

            return RedirectToAction("");
        }

        [HttpGet("dish/{id}")]
        public IActionResult DishView(int id)
        {
            DishModel Dish = _context.Dishes
                .FirstOrDefault(d => d.id == id);
            Console.WriteLine(Dish.Tastiness);
            return View(Dish);
        }

        [HttpGet("dish/{id}/edit")]
        public IActionResult DishEdit(int id)
        {
            
            DishModel Dish = _context.Dishes
                .FirstOrDefault(d => d.id == id);
                Console.WriteLine(Dish.Tastiness);
            return View(Dish);
        }

        [HttpPost("dish/update")]
        public IActionResult UpdateDish(DishModel UpdatedDish)
        {
            Console.WriteLine(UpdatedDish.id);
            DishModel RetrievedDish =  _context.Dishes
            .SingleOrDefault(d=> d.id == (UpdatedDish.id));

            RetrievedDish.Name = UpdatedDish.Name;
            RetrievedDish.Chef = UpdatedDish.Chef;
            RetrievedDish.Tastiness = UpdatedDish.Tastiness;
            RetrievedDish.Calories = UpdatedDish.Calories;
            RetrievedDish.Description = UpdatedDish.Description;
            RetrievedDish.UpdatedAt = DateTime.Now;

            _context.SaveChanges();

            return Redirect($"{RetrievedDish.id}");
        }


        [HttpPost("dish/create")]
        public IActionResult CreateDish(DishModel Dish)
        {
            _context.Add(Dish);
            _context.SaveChanges();
            int id = _context.Dishes.FirstOrDefault(d=>d.Name == Dish.Name).id;
            Console.WriteLine("Dish Made!");
            return Redirect($"/dish/{id}");
        }
    }
}

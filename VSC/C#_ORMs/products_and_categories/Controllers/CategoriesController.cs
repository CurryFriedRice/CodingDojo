using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using products_and_categories.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace products_and_categories.Controllers
{
    public class CategoriesController : Controller
    {
        // private readonly ILogger<CategoriesController> _logger;

        // public CategoriesController(ILogger<CategoriesController> logger)
        // {
        //     _logger = logger;
        // }
        
        public List<Categories> AllCategories {get{
            return DbConnection.Categories.ToList();
        }}

        private ProductsAndCategoriesContext DbConnection;

        // here we can "inject" our context service into the constructor
        public CategoriesController(ProductsAndCategoriesContext context)
        {
            DbConnection = context;
        }

        [HttpGet("categories")]
        public IActionResult Index()
        {
            ViewBag.Categories = DbConnection.Categories.ToList();
            return View();
        }


        [HttpGet("categories/{CategoryName}")]
        public IActionResult Details(string CategoryName)
        {
            Categories category = DbConnection.Categories
                .Include(Category => Category.ProdCat)
                    .ThenInclude(ProdCat => ProdCat.Product)
                .SingleOrDefault(Category => Category.Name == CategoryName);

            return View(category);
        }

        [HttpPost("categories/add")]
        public IActionResult Add(Categories newCategory)
        {
            if(ModelState.IsValid)
            {
                if(DbConnection.Categories.Any(categ=> categ.Name.ToLower() == newCategory.Name.ToLower()))
                {
                    ModelState.AddModelError("Name", "Category is already in database");
                    ViewBag.Categories = AllCategories;
                    return View("Index");
                }
                DbConnection.Categories.Add(newCategory);
                DbConnection.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Categories = AllCategories;
            return View("index");
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

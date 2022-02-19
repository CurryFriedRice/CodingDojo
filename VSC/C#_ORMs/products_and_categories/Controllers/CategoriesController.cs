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


        [HttpGet("categories/{CategoryID}")]
        public IActionResult Details(int CategoryID)
        {
            ViewBag.Category = DbConnection.Categories
                .Include(Category => Category.ProdCat)
                    .ThenInclude(ProdCat => ProdCat.Product)
                .SingleOrDefault(Category => Category.CategoryID == CategoryID);

            ViewBag.ValidProducts = DbConnection.Products
                .Where(prod => prod.ProdCat.FirstOrDefault(prodCat => prodCat.CategoryID == CategoryID) == null)
                .ToList();//Select(ProdCat => ProdCat.Name);
            

            return View();
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

        [HttpPost("categories/product")]
        public IActionResult Product(ProductCategories NewRelation)
        {
            ProductCategories Exists = DbConnection.ProductCategories.FirstOrDefault(prodCat => prodCat.ProductID == NewRelation.ProductID && prodCat.CategoryID == NewRelation.CategoryID);
            if(Exists != null)
            {
                ModelState.AddModelError("ProductID", "Already Related");
                ViewBag.Product = DbConnection.Products
                .Include(Prod => Prod.ProdCat)
                    .ThenInclude(ProdCat => ProdCat.Category)
                .FirstOrDefault(prod => prod.ProductID == NewRelation.ProductID);

                ViewBag.ValidCategories = DbConnection.Categories.ToList();//Select(ProdCat => ProdCat.Name);
                return View("Details");
            }
            DbConnection.ProductCategories.Add(NewRelation);
            DbConnection.SaveChanges();
            return RedirectToAction($"{NewRelation.CategoryID}", "categories");
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

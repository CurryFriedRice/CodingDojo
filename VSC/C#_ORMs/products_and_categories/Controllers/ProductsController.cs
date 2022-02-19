using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using products_and_categories.Models;

namespace products_and_categories.Controllers
{
    public class ProductsController : Controller
    {
        // private readonly ILogger<ProductsController> _logger;

        // public ProductsController(ILogger<ProductsController> logger)
        // {
        //     _logger = logger;
        // }

        List<Products> AllProducts{get{
            return DbConnection.Products.ToList();
        }}
        private ProductsAndCategoriesContext DbConnection;

        // here we can "inject" our context service into the constructor
        public ProductsController(ProductsAndCategoriesContext context)
        {
            DbConnection = context;
        }

        [HttpGet("products")]
        public IActionResult Index()
        {
            ViewBag.Products = AllProducts;
            return View();
        }

        [HttpGet("products/{ProductID}")]
        public IActionResult Details(int ProductID)
        {
            Products Product = DbConnection.Products.FirstOrDefault(prod => prod.ProductID == ProductID);
            return View(Product);
        }

        [HttpPost("products/add")]
        public IActionResult Add(Products newProduct)
        {
            if(ModelState.IsValid)
            {
                if(DbConnection.Products.FirstOrDefault(prod => prod.Name.ToLower() == newProduct.Name.ToLower()) != null)
                {
                    //So if one is not found with a matching name
                    ModelState.AddModelError("Name", "Product already in database");
                    ViewBag.Products = AllProducts;
                    return View("Index");
                }
                DbConnection.Products.Add(newProduct);
                DbConnection.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Products = AllProducts;
            return View("Index");
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

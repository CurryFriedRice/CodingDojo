using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using e_commerce.Models;

using Stripe;

namespace e_commerce.Controllers
{
    public class ProductsController : Controller
    {
    
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Products")]
        public IActionResult Index()
        {
            // StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";

            ProductService service = new ProductService();

            StripeList<Product> products = service.List();
            //Console.WriteLine(invoices);
            ViewBag.Products = products;
            return View();
        }
        
        [HttpPost("Products/add")]
        public IActionResult Add(ProductModel newProduct)
        {
            // StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";
            if(!ModelState.IsValid)
            {
                ProductService prodService = new ProductService();

                StripeList<Product> products = prodService.List();
                //Console.WriteLine(invoices);
                
                ViewBag.Products = products;
                return View("index");
            }
            
            
            // Dictionary<string, string> metadata = new Dictionary<string,string>();
            // metadata.Add("Stock", newProduct.Quantity.ToString());
            
            ProductCreateOptions options = new ProductCreateOptions{
                Name = newProduct.Name,    
                Metadata = new Dictionary<string, string>
                {
                    {"Stock", newProduct.Quantity.ToString()}
                }
            };

            if(newProduct.ImageUrl != null)
                options.Images = new List<string>(){newProduct.ImageUrl};

            var service = new ProductService();
            service.Create(options);

            return RedirectToAction("Index");
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

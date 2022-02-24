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
            StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";

            ProductService service = new ProductService();

            StripeList<Product> products = service.List();
            //Console.WriteLine(invoices);
            ViewBag.Products = products;
            return View();
        }
        
        [HttpPost("Products/add")]
        public IActionResult Add(OrderModel newOrder)
        {
            StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";

            var prodService = new ProductService();
            var prod = prodService.Get(newOrder.ProductID);
            Console.WriteLine(prod);
  
            var custService = new CustomerService();
            var cust = custService.Get(newOrder.CustomerID);
           
            var priceService = new PriceService();
            var allPrices = priceService.List();

            var iiOptions = new InvoiceItemCreateOptions
            {
                Customer =  newOrder.CustomerID,
                Quantity = newOrder.Quantity,
                Description = prod.Name,
                Price = allPrices.FirstOrDefault(price => price.ProductId == newOrder.ProductID).Id
            };
            var iiService = new InvoiceItemService();
            iiService.Create(iiOptions);

            var invoiceOptions = new InvoiceCreateOptions
            {
                Customer = newOrder.CustomerID,
            };
            var service = new InvoiceService();
            service.Create(invoiceOptions);

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

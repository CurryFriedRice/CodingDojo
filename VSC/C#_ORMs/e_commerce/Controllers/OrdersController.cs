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
    public class OrdersController : Controller
    {
    
        private readonly ILogger<OrdersController> _logger;

        public OrdersController(ILogger<OrdersController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Orders")]
        public IActionResult Index()
        {
            InvoiceService service = new InvoiceService();
            var requestOptions = new RequestOptions
            {
                ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq"
            };
            StripeList<Invoice> invoices = service.List(null, requestOptions);
            //Console.WriteLine(invoices);
            ViewBag.Invoices = invoices;
            ViewBag.Customers = new CustomerService().List(null,requestOptions);
            ViewBag.Products = new ProductService().List(null, requestOptions);
            return View();
        }
        
        [HttpPost("orders/add")]
        public IActionResult Add(OrderModel newOrder)
        {
            StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";

            var prodService = new ProductService();
            var prod = prodService.Get(newOrder.ProductID);
            Console.WriteLine(prod);
            
            int amountLeft = int.Parse(prod.Metadata["Stock"])-newOrder.Quantity;
            if(amountLeft < 0)
            {
                ModelState.AddModelError("Quantity", "Attempting to order more than available stock");
                ViewBag.Invoices = new InvoiceService().List();
                ViewBag.Customers = new CustomerService().List();
                ViewBag.Products = new ProductService().List();
                return View("Index");
            }
            var prodOptions = new ProductUpdateOptions
            {
                Metadata = new Dictionary<string, string>
                {
                    {"Stock", amountLeft.ToString()}
                }
            };
           
            var custService = new CustomerService();
            var cust = custService.Get(newOrder.CustomerID);
           
            var priceService = new PriceService();
            var allPrices = priceService.List();

            var iiOptions = new InvoiceItemCreateOptions
            {
                Customer =  newOrder.CustomerID,
                Quantity = newOrder.Quantity,
                Description = prod.Name,
                // Price = allPrices.FirstOrDefault(price => price.ProductId == newOrder.ProductID).Id
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

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
    public class HomeController : Controller
    {
    
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            var customerService = new CustomerService();
            var customerOptions = new CustomerListOptions
            {
                Limit = 5,
            };
            ViewBag.Customers = customerService.List(customerOptions);
            
            var invoiceService = new InvoiceService();

            var invoiceOptions = new InvoiceListOptions
            {
                Limit = 3,
            };
            ViewBag.Invoices = invoiceService.List(invoiceOptions);

            var productService = new ProductService();
            var productOptions = new ProductListOptions
            {
                Limit = 3,
            };

            ViewBag.Products = productService.List(productOptions);
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

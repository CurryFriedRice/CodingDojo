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

        [HttpGet("customers/new")]
        public IActionResult New()
        {
            return View();
        }
        
        [HttpPost("customers/add")]
        public IActionResult Add(Customer customer)
        {   
        var requestOptions = new RequestOptions
        {
            ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq"
        };

        CustomerCreateOptions options = new CustomerCreateOptions
        {
            Name = customer.Name,
            Description = "My First Test Customer (created for API docs)"
        };
        var service = new CustomerService();
        service.Create(options);

        return View("Success");
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

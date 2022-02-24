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
    public class CustomersController : Controller
    {
    
        private readonly ILogger<CustomersController> _logger;

        public CustomersController(ILogger<CustomersController> logger)
        {
            _logger = logger;
        }

        [HttpGet("customers")]
        public IActionResult Index()
        {
         
            var service = new CustomerService();

            ViewBag.Customers = new CustomerService().List();
            // ViewBag.Products = new ProductService().List(null, requestOptions);
            return View();
        }

        // [HttpGet("customers/new")]
        // public IActionResult New()
        // {
        //     //Get the form for a new Customer
        //     CustomerService service = new CustomerService();
        //     var requestOptions = new RequestOptions
        //     {
        //         ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq"
        //     };
        //     StripeList<Customer> customers = service.List(null, requestOptions);
        //     Console.WriteLine(customers);
        //     return View(customers);
        // }

        [HttpGet("customers/edit")]
        public IActionResult Edit()
        {

            return View();
        }

        [HttpPost("customers/add")]
        public IActionResult Add(CustomerModel newCustomer)
        {
            // StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";
            CustomerService service = new CustomerService();
            var existingCustomers = service.List();
            if(existingCustomers.FirstOrDefault(cust=> cust.Name.ToLower() == newCustomer.Name.ToLower()) != null)
            {
                ModelState.AddModelError("Name", "User with that name already exists");
            }
            
            var options = new CustomerCreateOptions
            {
                Name = newCustomer.Name
            };   
            service.Create(options);
            return RedirectToAction("Index");
        }

        [HttpPost("customers/delete")]
        public IActionResult Delete(CustomerModel targetCustomer)
        {
            // StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";

            var Service = new CustomerService();
            Service.Delete(targetCustomer.Name);
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

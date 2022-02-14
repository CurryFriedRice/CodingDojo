using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using quoting_dojo.Models;
using DbConnection;


namespace quoting_dojo.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("home/validate")]
        public IActionResult Validate(QuoteModel Quote)
        {
            Console.WriteLine(Quote);
            Console.WriteLine("BLAH");
            if(ModelState.IsValid)
            {
                Console.WriteLine("VALID MODEL");
                string query = $"INSERT INTO quotes (creator_name, quote) VALUES ('{Quote.Creator}','{Quote.Content}');";
                DbConnector.Execute(query);
                return RedirectToAction("Quotes");
            }
            return View("index");
        }
        [HttpPost("home/Create")]
        public IActionResult Create(QuoteModel Quote)
        {
           
            return RedirectToAction("Create", Quote);
        }

        [HttpGet("home/quotes")]
        public IActionResult Quotes()
        {
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM quotes");
            ViewBag.AllQuotes = AllQuotes;

            return View();
        }

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // public IActionResult Index()
        // {
        //     return View();
        // }

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

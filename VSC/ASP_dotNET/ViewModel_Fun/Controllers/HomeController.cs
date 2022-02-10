using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ViewModel_Fun.Models;

namespace ViewModel_Fun.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            string quote = "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful -L. R. Ellert";
            return View("Index", quote);
        }

        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            Random rand = new Random();
            int[] numbers = new int[rand.Next(100)];
            for (int i= 0; i<numbers.Length; i++)
            {
                numbers[i] = rand.Next(1000);
            }
            return View(numbers);
        }

        [HttpGet("users")]
        public IActionResult Users()
        {
            Random rand = new Random();
            List<string> First_Names = new List<string>(){"Alex", "NAthan", "Sam", "Liam", "Carlos", "Felipe", "Spencer", "Tristen", "Cooper"};
            List<string> Last_names = new List<string>(){"Gibson", "Robertson", "Morris", "Matthews", "Simpson", "Workman", "Curtis", "Moon", "Scott", "Dunlap"};
            
            List<User> UserList = new List<User>();
            int Limit = rand.Next(20);
            for(int i= 0; i< Limit; i++){
                UserList.Add(new Models.User(){firstName = First_Names[rand.Next(First_Names.Count)], lastName = Last_names[rand.Next(Last_names.Count)]});
            }
            return View(UserList);
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            User user = new User(){firstName= "Timothy", lastName="Jones"};

            return View(user);
        }

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
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

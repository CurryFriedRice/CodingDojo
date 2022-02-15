using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using login_registration.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;


namespace login_registration.Controllers
{
    public class HomeController : Controller
    {
        private UserContext DbConnection;

        // here we can "inject" our context service into the constructor
        public HomeController(UserContext context)
        {
            DbConnection = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.UUID = HttpContext.Session.GetString("UserId");
            return View();
        }

        [HttpPost("home/register")]
        public IActionResult Register(UserModel Credentials)
        {
            if(ModelState.IsValid)
            {
                if(DbConnection.Users.Any(u => u.Email == Credentials.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use");
                    return View("Index");
                }
                PasswordHasher<UserModel> Hasher = new PasswordHasher<UserModel>();
                Credentials.Password = Hasher.HashPassword(Credentials, Credentials.Password);

                DbConnection.Add(Credentials);
                DbConnection.SaveChanges();
                UserModel user = DbConnection.Users.FirstOrDefault(u => u.Email == Credentials.Email);
                //Should be using a UUID
                HttpContext.Session.SetString("UserId", user.id.ToString());
                ViewBag.UUID = HttpContext.Session.GetString("UserId");
                return View("Success");
            }
            return View("Index");
        }

        [HttpGet("login")]
        public IActionResult Login()
        {
            ViewBag.UUID = HttpContext.Session.GetString("UserId");

            return View();
        }
        [HttpPost("validate")]
        public IActionResult validate(LoginUser Credentials)
        {
            if(ModelState.IsValid){

                UserModel user = DbConnection.Users
                    .FirstOrDefault(u => (u.Email == Credentials.Email));
                    if(user == null)
                    {
                        ModelState.AddModelError("Email", "Invalid Email/Password");
                        return View("Login");
                    }
                    var hasher = new PasswordHasher<LoginUser>();

                    var result = hasher.VerifyHashedPassword(Credentials, user.Password, Credentials.Password);
                    if(result == 0)
                    {
                        ModelState.AddModelError("Email", "Invalid Email/Password");
                        return View("Login");
                    }
                //Should be using a UUID
                HttpContext.Session.SetString("UserId", user.id.ToString());
                ViewBag.UUID = HttpContext.Session.GetString("UserId");
                return View("Success");
            } 
            return View("Login");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        // private readonly ILogger<HomeController> _logger;

        // public HomeController(ILogger<HomeController> logger)
        // {
        //     _logger = logger;
        // }

        // public IActionResult Index()
        // {
        //     return View();
        // }

        // public IActionResult Privacy()
        // {
        //     return View();
        // }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        // }
    }
}

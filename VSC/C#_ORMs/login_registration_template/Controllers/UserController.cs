using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using login_registration_template.Models;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;


namespace login_registration_template.Controllers
{
    public class UserController : Controller
    {
        // private readonly ILogger<HomeController> _logger;

        // public HomeController(ILogger<HomeController> logger)
        // {
        //     _logger = logger;
        // }

        int? UserId{get{
            return HttpContext.Session.GetInt32("uid");
        }}
        
        bool LoggedIn{get{
            return UserId != null;
        }}


        private ProjectContext DbConnection;

        // here we can "inject" our context service into the constructor
        public UserController(ProjectContext context)
        {
            DbConnection = context;
        }


        [HttpGet("User")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("user/register")]
        public IActionResult Register(Users NewUser)
        {
            if(ModelState.IsValid)
            {
                if(DbConnection.Users.FirstOrDefault(u => u.Email == NewUser.Email) != null)
                {
                    ModelState.AddModelError("Email", "Email is in use!");
                    return View("Index");
                }
                PasswordHasher<Users> Hasher = new PasswordHasher<Users>();
                NewUser.Password = Hasher.HashPassword(NewUser, NewUser.Password);

                DbConnection.Add(NewUser);
                DbConnection.SaveChanges();
                
                int uid = DbConnection.Users.FirstOrDefault(user => user.Email == NewUser.Email).UserID;
                HttpContext.Session.SetInt32("uid", uid);

                return RedirectToAction("Success");
            }

            return View("Index");
        }

        [HttpPost("user/login")]
        public IActionResult Login(Login Login)
        {
            if(ModelState.IsValid)
            {
                Users user = DbConnection.Users
                    .FirstOrDefault(u => (u.Email == Login.Login_Email));
                if(user == null)
                {
                    ModelState.AddModelError("Login_Email", "Invalid Email/Password");
                    return View("Index");
                }
                var hasher = new PasswordHasher<Users>();

                var result = hasher.VerifyHashedPassword(user, user.Password, Login.Login_Password);
                if(result == 0)
                {
                    ModelState.AddModelError("Login_Email", "Invalid Email/Password");
                    return View("Index");
                }
                //Should be using a UUID
                HttpContext.Session.SetInt32("uid", user.UserID);
                //ViewBag.UUID = HttpContext.Session.getU("UserId");

                return RedirectToAction("Success");
            }

            return View("Index");
        }

        [HttpPost("user/logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Remove("uid");
            return View("index");
        }
        
        [HttpGet("user/Success")]
        public IActionResult Success()
        {
            if(!LoggedIn) return RedirectToAction("Index");
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

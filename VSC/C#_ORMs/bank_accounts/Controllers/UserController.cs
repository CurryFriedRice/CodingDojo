using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using bank_accounts.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;


namespace bank_accounts.Controllers
{
    public class UserController : Controller
    {

        private BankContext DbConnection;

        // here we can "inject" our context service into the constructor
        public UserController(BankContext context)
        {
            DbConnection = context;
        }

        // private readonly ILogger<UserController> _logger;

        // public UserController(ILogger<UserController> logger)
        // {
        //     _logger = logger;
        // }



        [HttpGet("user")]
        public IActionResult Index()
        {
            int? id = HttpContext.Session.GetInt32("UserId");
            if(id != null) return RedirectToAction($"{id}");
            return View();
        }
        [HttpGet("user/login")]
        public IActionResult Login()
        {
            int? id = HttpContext.Session.GetInt32("UserId");
            if(id != null) return RedirectToAction($"{id}");
            return View();
        }
        
        [HttpPost("user/logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Remove("UserId");
            return View("Index");
        }
        
        [HttpPost("user/ValidateLogin")]
        public IActionResult ValidateLogin(UserLogin Login)
        {   
            if(ModelState.IsValid)
            {
                User user = DbConnection.Users
                    .FirstOrDefault(u => u.Email == Login.Email);
                if(user == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Login");
                }
                var Hasher = new PasswordHasher<UserLogin>();
                var result = Hasher.VerifyHashedPassword(Login, user.Password, Login.Password);

                if(result == 0)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Login");
                }
                //Should be using a UUID
                HttpContext.Session.SetInt32("UserId", user.UserId);
                ViewBag.UUID = HttpContext.Session.GetInt32("UserId");
                return RedirectToAction($"user/{ViewBag.UUID}");
            }
            return View("Login");
        }
        
        [HttpPost("user/new")]
        public IActionResult Validate(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(DbConnection.Users.Any(u => u.Email.ToLower() == newUser.Email.ToLower())){
                    ModelState.AddModelError("Email", "Email is already in use");
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

                DbConnection.Add(newUser);
                DbConnection.SaveChanges();
                
                User user = DbConnection.Users.FirstOrDefault(u => u.Email == newUser.Email);
                HttpContext.Session.SetInt32("UserId", user.UserId);
                ViewBag.UUID = HttpContext.Session.GetInt32("UserId");
                
                return RedirectToAction("", "BankAccount");
            }
            return View("Index");
        }

        [HttpGet("user/{userId}")]
        public IActionResult UserPage(int userId)
        {
            User user = DbConnection.Users
                        //.Include(u => u.Transactions)
                        .FirstOrDefault(u => u.UserId == userId);
            int? sessionUser = HttpContext.Session.GetInt32("UserId");
            
            if (sessionUser == null)
            {
                return RedirectToAction("index");
            }
            else if(user == null)
            {
                //the user does not exist.... What should happen
                return RedirectToAction($"{sessionUser}");
            }
            else if (sessionUser != user.UserId)
            {
                //the session doesn't match the other user
                return RedirectToAction($"{sessionUser}");
            }
            ViewBag.User = DbConnection.Users
                        .Include(u => u.MyTransactions)
                        .FirstOrDefault(u => u.UserId == userId);
            return View();
        }

        [HttpPost("user/add")]
        public IActionResult AddTransaction(Transaction newTransaction)
        {

            int? sessionUID = HttpContext.Session.GetInt32("UserId");
            if(sessionUID == null) return RedirectToAction("index");
            else if(newTransaction.UserId != sessionUID)
            {
                return RedirectToAction("Index");
            }
            
            //Console.WriteLine("Add a transaction Plz");
            //Console.WriteLine(newTransaction.Amount);
            //Console.WriteLine(newTransaction.UserId);
            User user = DbConnection.Users.Include(u => u.MyTransactions).FirstOrDefault(u => u.UserId == newTransaction.UserId);
            if (user.CurrentBalance + newTransaction.Amount < 0)
            {
                ModelState.AddModelError("Amount", "You cannot overdraw into the negative");
                ViewBag.User = user;
                return View("UserPage");
            }

            DbConnection.Transactions.Add(newTransaction);
            DbConnection.SaveChanges();
            return RedirectToAction("UserPage", sessionUID);
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

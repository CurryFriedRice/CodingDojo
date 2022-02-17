// using System;
// using System.Collections.Generic;
// using System.Diagnostics;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Logging;
// using bank_accounts.Models;
// using Microsoft.AspNetCore.Identity;
// using Microsoft.AspNetCore.Http;

// namespace bank_accounts.Controllers
// {
//     public class BankAccountController : Controller
//     {
        
//         private BankContext DbConnection;

//         // here we can "inject" our context service into the constructor
//         public BankAccountController(BankContext context)
//         {
//             DbConnection = context;
//         }
        
        
//         [HttpGet("BankAccount")]
//         public IActionResult Index()
//         {
//             int? UserId = HttpContext.Session.GetInt32("UserId");
//             if(UserId == null)
//             {  
//                 return RedirectToAction("Login", "User");
//             }
//             BankAccount Account = DbConnection.BankAccount
//                                         .FirstOrDefault(a => a.UserId == UserId);

//             return View(Account);
//         }
        
        
//         [HttpPost("BankAccount/Add")]
//         public IActionResult AddTransaction(Transaction newTransaction)
//         {

//             return View("Index");
//         }
//         // private readonly ILogger<BankAccountController> _logger;

//         // public BankAccountController(ILogger<BankAccountController> logger)
//         // {
//         //     _logger = logger;
//         // }



//         // public IActionResult Privacy()
//         // {
//         //     return View();
//         // }

//         // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
//         // public IActionResult Error()
//         // {
//         //     return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
//         // }
//     }
// }

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using wedding_planner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace wedding_planner.Controllers
{
    public class WeddingController : Controller
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

        private WeddingPlannerContext DbConnection;

        // here we can "inject" our context service into the constructor
        public WeddingController(WeddingPlannerContext context)
        {
            DbConnection = context;
        }

        [HttpGet("weddings")]
        public IActionResult Index()
        {
            if(!LoggedIn) return RedirectToAction("Index","User");
            foreach(Weddings wedding in DbConnection.Weddings.Where(wedding=> wedding.WeddingDate < DateTime.Now).ToList()){
                DbConnection.Weddings.Remove(wedding);
            }
            DbConnection.SaveChanges();
            //List<Weddings> Weddings = DbConnection.Weddings
            ViewBag.Weddings = DbConnection.Weddings 
                    .Include(wed => wed.UsersRSVP)
                        .ThenInclude(rsvp => rsvp.User)
                    .ToList();
            ViewBag.User = DbConnection.Users.FirstOrDefault(User => User.UserID == UserId);
            
            return View();
        }

        [HttpGet("weddings/{weddingId}")]
        public IActionResult Details(int weddingId)
        {
            if(!LoggedIn) return RedirectToAction("Index","User");
            Weddings wedding = DbConnection.Weddings
            //ViewBag.Weddings = DbConnection.Weddings
                .Include(wed => wed.UsersRSVP)
                    .ThenInclude(rsvp => rsvp.User)
                .FirstOrDefault(wed => wed.WeddingID == weddingId);
            //ViewBag.UserAttending = wedding.UsersRSVP.FirstOrDefault(rsvp => rsvp.User.UserID == ViewBag.User.UserId) == null;
            return View(wedding);
        }

        [HttpGet("weddings/new")]
        public IActionResult Form()
        {
            return View("Form");
        }

        [HttpPost("weddings/submit")]
        public IActionResult Submit(Weddings newWedding)
        {   
            if(!LoggedIn) return RedirectToAction("Index","User");
            if(ModelState.IsValid)
            {
                if(newWedding.WeddingDate < DateTime.Now)
                {
                    //This should be in a validator....
                    ModelState.AddModelError("WeddingDate", "Date Must be in a future time");
                    return View("Form");
                }
                DbConnection.Add(newWedding);
                DbConnection.SaveChanges();
                Console.WriteLine( newWedding.WeddingID);
                return RedirectToAction("Index");
            }
            return View("Form");
        }

        [HttpPost("weddings/rsvp/{id}")]
        public IActionResult RSVP(int id)
        {   
            //Console.WriteLine($"Wedding: {newRSVP.WeddingID} | User: {newRSVP.UserID}");
            Console.WriteLine($"Wedding {id} | UserId {UserId}");
            RSVP newRSVP = new RSVP();
            Console.WriteLine(newRSVP.UserID);
            newRSVP.UserID = (int)UserId;
            newRSVP.WeddingID = id;
            DbConnection.RSVPs.Add(newRSVP);
            DbConnection.SaveChanges();
            return RedirectToAction("Index");
        }
        
        [HttpPost("weddings/unrsvp/{id}")]
        public IActionResult UnRSVP(int id)
        {   
            //Console.WriteLine($"Wedding: {newRSVP.WeddingID} | User: {newRSVP.UserID}");
            
            DbConnection.RSVPs.Remove(DbConnection.RSVPs.FirstOrDefault(single=>single.UserID==UserId && single.WeddingID==id));
            DbConnection.SaveChanges();
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

using System;
using Microsoft.AspNetCore.Mvc;


namespace YourNamespace.Controllers     //be sure to use your own project's namespace!
{
    public class ClockController : Controller   //remember inheritance??
    {
        // Other code
        [HttpGet]
        [Route("")]
        // GET requests to "localhost:5000" go here
        public IActionResult Time()
        {
            DateTime CurrentTime = DateTime.Now;
            string date = CurrentTime.ToString("MMM dd yyyy");
            string time = CurrentTime.ToString("hh:mm tt");
            
            ViewBag.date = date;
            ViewBag.time = time;
            //string date= $"{CurrentTime.ToString("MMM")} {CurrentTime.Day}, {CurrentTime.Year}";
            //string time= $"{CurrentTime.Hour}:{CurrentTime.Minute} {CurrentTime.}";
            Console.WriteLine(date);
            Console.WriteLine(time);
            Console.WriteLine(CurrentTime);
            return View();
        }
    }

}
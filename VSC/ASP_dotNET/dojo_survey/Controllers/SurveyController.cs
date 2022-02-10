using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace dojo_survey.Controllers     //be sure to use your own project's namespace!
{
    public class SurveyController : Controller   //remember inheritance??
    {
        // Other code
        [HttpGet]
        [Route("")]
        // GET requests to "localhost:5000" go here
        public IActionResult SurveyForm(string name, string location, int age)
        {
            ViewBag.Locations= new string[]{"--Select A Location--",
                                        "Chateau Processing Unit",
                                        "Solid State Depots", 
                                        "Random Access Mall",
                                        "Graphics Processing Pagoda",
                                        "Universal Seriel Bridge"};
            
            ViewBag.Activities = new List<string>(){"--Select an Activity--",
                                                    "Arcade",
                                                    "Antique Hunting", 
                                                    "Food", 
                                                    "Shopping", 
                                                    "Hanging Out",
                                                    "Building Gunpla",
                                                    "Photo Op",
                                                    "Dancing in the moonlight"};
            return  View();
        }

        [HttpPost("result")]
        public IActionResult Result(string name, string place, string activity, string comment)
        {
            ViewBag.Name = name;
            ViewBag.Place = place;
            ViewBag.Activity = activity;
            ViewBag.Comment = comment;
            
            return View();
        }
    }




}
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using dojo_survey.Models;

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
            ViewBag.Locations= new string[]{
                                        "Chateau Processing Unit",
                                        "Solid State Depots", 
                                        "Random Access Mall",
                                        "Graphics Processing Pagoda",
                                        "Universal Seriel Bridge"};
            
            ViewBag.Activities = new List<string>(){
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

        [HttpPost("Survey/result")]
        public IActionResult Result(SurveyResponse Res)
        {

            if(ModelState.IsValid)
            {
                return View(Res);
            }
            ViewBag.Locations= new string[]{
                                        "Chateau Processing Unit",
                                        "Solid State Depots", 
                                        "Random Access Mall",
                                        "Graphics Processing Pagoda",
                                        "Universal Seriel Bridge"};
            
            ViewBag.Activities = new List<string>(){
                                                    "Arcade",
                                                    "Antique Hunting", 
                                                    "Food", 
                                                    "Shopping", 
                                                    "Hanging Out",
                                                    "Building Gunpla",
                                                    "Photo Op",
                                                    "Dancing in the moonlight"};
                                                    
            return View("SurveyForm"); 
        }
    }
}




//string name, string place, string activity, string comment
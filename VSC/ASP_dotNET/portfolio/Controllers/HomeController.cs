using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Html;
using System.Collections.Generic;
using System;
namespace portfolio.Controllers
{
    public class HomeController : Controller
    {
        // Reqests
        // localhost:5000
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        // localhost:5000
        [Route("projects")]
        [HttpGet]
        public IActionResult Projects()
        {
            List<Project> ProjList = new List<Project>();
            ProjList.Add(new Project("Poyodoro", "A Pomodoro App that's themed pink with a little friend in mind", "KirbyCircle", "https://codepen.io/Chaowei/pen/BaNwpBP"));
            ProjList.Add(new Project("Drum Machine", "A Drum Set application that uses keyboard imput to play sound", "DrumkitLogo", "https://codepen.io/Chaowei/pen/xxGdgaQ"));
            ProjList.Add(new Project("Exercise Tracker", "An exercise API allows users to post and add exercises to a localized List", "ExerciseTrackerLogo", "https://replit.com/@CurryFriedRice/FreeCodeCampExerciseTracker#index.js"));
            ProjList.Add(new Project("Meta Data Parser", "Using Javascript to read a file's meta data and present it to the user", "FileParserLogo", "https://replit.com/@CurryFriedRice/FreeCodeCampFileMetaData#.replit"));
            ProjList.Add(new Project("Sudoku Solver", "A sudoku solver that uses loops and recursion to solve the board", "Sudoku", "https://replit.com/@CurryFriedRice/FCCSudokuSolver#.replit"));
            ViewBag.Poyodoro = Json(ProjList[0]);
            return View();
        }

        [Route("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpGet("Projects/json")]
        public JsonResult ProjJson()
        {
            List<Project> ProjList = new List<Project>();
            ProjList.Add(new Project("Poyodoro", "A Pomodoro App that's themed pink with a little friend in mind", "KirbyCircle", "https://codepen.io/Chaowei/pen/BaNwpBP"));
            ProjList.Add(new Project("Drum Machine", "A Drum Set application that uses keyboard imput to play sound", "DrumkitLogo", "https://codepen.io/Chaowei/pen/xxGdgaQ"));
            ProjList.Add(new Project("Exercise Tracker", "An exercise API allows users to post and add exercises to a localized List", "ExerciseTrackerLogo", "https://replit.com/@CurryFriedRice/FreeCodeCampExerciseTracker#index.js"));
            ProjList.Add(new Project("Meta Data Parser", "Using Javascript to read a file's meta data and present it to the user", "FileParserLogo", "https://replit.com/@CurryFriedRice/FreeCodeCampFileMetaData#.replit"));
            ProjList.Add(new Project("Sudoku Solver", "A sudoku solver that uses loops and recursion to solve the board", "Sudoku", "https://replit.com/@CurryFriedRice/FCCSudokuSolver#.replit"));
            return Json(ProjList);
        }
    }


    public class Project
    {
        public string Title;
        public string Description;
        public string Thumbnail;
        public string Link;

        public Project(string title, string description, string thumbnail, string link)
        {
            Title = title;
            Description = description;
            Thumbnail = thumbnail;
            Link = link;
        }
        public string toString()
        {
            return Title;
        }
    }


}
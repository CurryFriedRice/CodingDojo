using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;
using Microsoft.EntityFrameworkCore;

namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Womens"))
                .ToList();
            ViewBag.HockeyLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Hockey"))
                .ToList();
            ViewBag.NotFootball = _context.Leagues
                .Where(l => (l.Sport != "football"))
                .ToList();
            ViewBag.ConferenceLeagues = _context.Leagues
                .Where(l => l.Name.ToLower().Contains("Conference"))
                .ToList();
            ViewBag.AtlanticRegion = _context.Leagues
                .Where(l => l.Name.Contains("Atlantic"))
                .ToList();
            
            ViewBag.DallasTeams = _context.Teams
                .Where(t => t.Location == "Dallas")
                .ToList();
            ViewBag.Raptors = _context.Teams
                .Where(t => t.TeamName.Contains("Raptors"))
                .ToList();
            ViewBag.LocationCities = _context.Teams
                .Where(t => t.Location.Contains("City"))
                .ToList();
            ViewBag.BeginsWithT = _context.Teams
                .Where(t => t.TeamName.StartsWith("T"))
                .ToList();
            ViewBag.AlphaLocation = _context.Teams
                .OrderBy(t => t.Location)
                .ToList();
            ViewBag.ReverseAlphaTeamName = _context.Teams
                .OrderByDescending(t => t.TeamName)
                .ToList();

            ViewBag.Coopers = _context.Players
                .Where(p => p.LastName =="Cooper")
                .ToList();
            ViewBag.Joshuas = _context.Players
                .Where(p => p.FirstName == "Joshua")
                .ToList();
            
            ViewBag.CoopersNotJosh = _context.Players
                .Where(p => p.LastName == "Cooper")
                .Where(p => p.FirstName !=  "Joshua")
                .ToList();

            ViewBag.AlexanderOrWyatt = _context.Players
                .Where(p => (p.FirstName == "Alexander" || p.FirstName == "Wyatt"))
                .ToList();

            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {

       
            ViewBag.AtlanticConferenceTeams = _context.Teams
                .Include(t => t.CurrLeague)
                .Where(Tea => Tea.CurrLeague.Name == "Atlantic Soccer Conference").ToList();

            ViewBag.BostonPenguins = _context.Players
                .Include(Pla => Pla.CurrentTeam)
                .Where(Pla => Pla.CurrentTeam.TeamName == "Penguins").ToList();
            
            ViewBag.ICBCPlayers = _context.Players
                .Include(Pla => Pla.CurrentTeam)
                .Include(Pla => Pla.CurrentTeam.CurrLeague)
                .OrderBy(Pla => Pla.TeamId)
                .Where(Pla => Pla.CurrentTeam.CurrLeague.Name.Contains("International Collegiate Baseball Conference")).ToList();

            ViewBag.FootballLopez = _context.Players
                //.Include(Pla => Pla.CurrentTeam)
                .Include(Pla => Pla.CurrentTeam.CurrLeague)
                .Where(Pla => Pla.LastName == "Lopez" && Pla.CurrentTeam.CurrLeague.Name == "American Conference of Amateur Football").ToList();
            
            ViewBag.AllFootball = _context.Players
                .Include(Pla => Pla.CurrentTeam.CurrLeague)
                .Where(Pla => Pla.CurrentTeam.CurrLeague.Sport == "Football")
                .ToList();

            ViewBag.TeamsWithSophia = _context.Teams
                .Include(T=> T.CurrentPlayers)
                .Where(T => T.CurrentPlayers.FirstOrDefault(Player => Player.FirstName == "Sophia") != null)
                .ToList();

            ViewBag.LeaguesWithSophia = _context.Leagues
                .Include(L => L.Teams)
                .Where(L=> L.Teams
                            .FirstOrDefault( T => T.CurrentPlayers.FirstOrDefault(P => P.FirstName == "Sophia") != null) != null
                        ).ToList();

            ViewBag.FloresNotRider = _context.Players
                .Include(P => P.CurrentTeam)
                .Where(P => P.CurrentTeam.TeamName != "Washington Roughriders" && P.LastName == "Flores")
                .ToList();


            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}
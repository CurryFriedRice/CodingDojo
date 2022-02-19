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
            Player SamuelEvans = _context.Players.FirstOrDefault(p => (p.FirstName == "Samuel") && (p.LastName=="Evans"));
            ViewBag.AllTeamsWithSamuelEvans = _context.PlayerTeams
                .Include(t => t.TeamOfPlayer)
                .Where(p => p.PlayerId == SamuelEvans.PlayerId)
                .ToList();

            ViewBag.AllTigerCats = _context.Teams
                .Include(t=>t.AllPlayers)
                    .ThenInclude(p => p.PlayerOnTeam)
                .FirstOrDefault(t => t.TeamName == "Tiger-Cats");
            // Console.WriteLine(ViewBag.AllTigerCats.allPlayers);

            ViewBag.AllFormerVikings = _context.Teams
                .Include(t=> t.AllPlayers)
                    .ThenInclude(p => p.PlayerOnTeam)
                    .ThenInclude(PoT => PoT.CurrentTeam)
                .Where(t => t.AllPlayers.FirstOrDefault(p => p.PlayerOnTeam.CurrentTeam.TeamName.Contains("Vikings")) == null)
                .FirstOrDefault(t => t.TeamName.Contains("Vikings"));


            ViewBag.AllCurrentVikings = _context.Teams
                .Include(t => t.CurrentPlayers)
                .FirstOrDefault(t=> t.TeamName == "Vikings");
            
            ViewBag.JacobGray = _context.Players
                .Include(Pla => Pla.AllTeams)
                    .ThenInclude(PT => PT.TeamOfPlayer)
                .Include(Pla => Pla.CurrentTeam)
                .FirstOrDefault(p=> p.FirstName =="Jacob" && p.LastName=="Gray");

            // ViewBag.JoshuasAmateur = _context.Leagues
            //     // .Include(l => l.Teams)
            //     //     .ThenInclude(t => t.AllPlayers)
            //     //         .ThenInclude(p => p.PlayerOnTeam)
            //     .Where(l => l.Name.Contains("Federation of Amateur"))
            //     .ToList();

            ViewBag.AllJoshuas = _context.Players
                .Include(p => p.AllTeams)
                    .ThenInclude(AT => AT.TeamOfPlayer)
                        .ThenInclude(ToP => ToP.CurrLeague)
                .Where(p => p.FirstName=="Joshua")
                //.Where(p => p.AllTeams.FirstOrDefault(AT => AT.TeamOfPlayer.CurrLeague.Name.Contains( "Federation of Amateur Baseball Players"))!= null)
                .ToList();

            ViewBag.JoshuasAmateur = _context.Players
                .Include(p => p.AllTeams)
                    .ThenInclude(AT => AT.TeamOfPlayer)
                        .ThenInclude(ToP => ToP.CurrLeague)
                .Where(p => p.FirstName=="Joshua")
                .Where(p => p.AllTeams.FirstOrDefault(AT => AT.TeamOfPlayer.CurrLeague.Name.Contains( "Federation of Amateur Baseball Players"))!= null)
                .ToList();

            ViewBag.TeamsWith12PlusPlayers = _context.Teams
                .Include(T => T.AllPlayers)
                    .ThenInclude(AT => AT.PlayerOnTeam)
                .Where(T => T.AllPlayers.Count > 12)
                .ToList();

            ViewBag.AllPlayersByTeam = _context.Players
                .Include(p=>p.AllTeams)
                    .ThenInclude(AT => AT.TeamOfPlayer)
                .OrderByDescending(p => p.AllTeams.Count)
                .ToList();

            return View();
        }

    }
}
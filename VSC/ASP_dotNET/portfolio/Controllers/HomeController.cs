using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Html;


namespace portfolio.Controllers
{
    public class HomeController : Controller
    {
        // Reqests
        // localhost:5000
        [Route("")]
        [HttpGet]
        public ViewResult Index()
        {
            return View();
        }
                // localhost:5000
        [Route("projects")]
        [HttpGet]
        public ViewResult Projects()
        {
            return View();
        }

        [Route("contact")]
        public ViewResult contact()
        {
            return View();
        }

    }
}
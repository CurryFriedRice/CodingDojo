using Microsoft.AspNetCore.Mvc;

namespace portfolio
{
    public class HomeController : Controller
    {
        // Reqests
        // localhost:5000
        [Route("")]
        [HttpGet]
        public string Index()
        {
            return "This is my Index";
        }
                // localhost:5000
        [Route("projects")]
        [HttpGet]
        public string Projects()
        {
            return "These are my Projects";
        }

        [Route("contact")]
        public string contact()
        {
            return "This is my Contact";
        }

    }
}
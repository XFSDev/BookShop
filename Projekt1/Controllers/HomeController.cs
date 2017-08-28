using Projekt1.DAL;
using Projekt1.Infrastructure;
using Projekt1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projekt1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {      
            return View();
        }
    }
}
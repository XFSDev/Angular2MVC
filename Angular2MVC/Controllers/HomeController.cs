using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Net.Http;
using System.Web.Mvc;
using NHibernate;
using NHibernate.Linq;
using  Angular2MVC.Models;
using System.Text;
using System.Web.Script.Serialization;
using Angular2MVC.Service;

namespace Angular2MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {

            return View();
        }

        public ActionResult Index()
        {
            
            return View();
        }

        [HttpPost]
        public JsonResult Login( User user)
        {
            Dictionary<string, string> dict = new Dictionary<string, string>();
            dict.Add("response", UserService.VidateUser(user));
            
            return Json(dict, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
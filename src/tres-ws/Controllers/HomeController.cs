using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace tres_ws.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }

    public IActionResult Node()
    {
      return View();
    }
    public IActionResult Terminal()
    {
      return View();
    }

    public IActionResult Error()
    {
      return View();
    }
  }
}

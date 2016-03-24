using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using React;

namespace tres_ws
{
  public static class ReactConfig
  {
    public static void Configure()
    {
      ReactSiteConfiguration.Configuration = new ReactSiteConfiguration()
          .AddScript("~/js/test.jsx");
    }
  }
}

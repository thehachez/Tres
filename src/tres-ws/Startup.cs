using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using React.AspNet;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace tres_ws
{
  public class Startup
  {
    public Startup(IHostingEnvironment env)
    {

      // Set up configuration sources.
      var builder = new ConfigurationBuilder()
          .AddJsonFile("appsettings.json")
          .AddEnvironmentVariables();

      if (env.IsDevelopment())
      {
        // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
        builder.AddApplicationInsightsSettings(developerMode: true);
      }
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; set; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add framework services.
      services.AddApplicationInsightsTelemetry(Configuration);

      services.AddMvc();
      services.AddReact();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

      app.UseApplicationInsightsRequestTelemetry();

      if (env.IsDevelopment())
      {
        app.UseBrowserLink();
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Main/Error");
      }

      app.UseIISPlatformHandler();

      app.UseApplicationInsightsExceptionTelemetry();

      app.UseStaticFiles();

      // Initialise ReactJS.NET. Must be before static files.
      app.UseReact(config =>
      {
        // If you want to use server-side rendering of React components,
        // add all the necessary JavaScript files here. This includes
        // your components as well as all of their dependencies.
        // See http://reactjs.net/ for more information. Example:
        //config
        //      .AddScript("~/js/test.jsx");

        // If you use an external build too (for example, Babel, Webpack,
        // Browserify or Gulp), you can improve performance by disabling
        // ReactJS.NET's version of Babel and loading the pre-transpiled
        // scripts. Example:
        config
              .SetLoadBabel(true);
        //    .AddScriptWithoutTransform("~/Scripts/bundle.server.js");
      });

      app.UseMvc(routes =>
            {
              routes.MapRoute(
                  "default",
                  "{*url}",
                  new { controller = "Home", action = "Index" });
            });
    }

    // Entry point for the application.
    public static void Main(string[] args) => WebApplication.Run<Startup>(args);
  }
}

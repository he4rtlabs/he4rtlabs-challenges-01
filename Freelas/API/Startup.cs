using Microsoft.AspNetCore.Builder;

namespace API
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app, IHostEnvironment env)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run( async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}

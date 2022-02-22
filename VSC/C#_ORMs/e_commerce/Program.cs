using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using Stripe;

namespace e_commerce
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //GLOBALLY SET API KEY
            // StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";
            // var service = new CustomerService();
            // var customers = service.List();
            // Console.WriteLine(customers);

            //Per Request
            // var service = new CustomerService();
            // var requestOptions = new RequestOptions
            // {
            //     ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq"
            // };
            // var customer = service.Get("cus_LCViLKMDcHExWJ" ,null, requestOptions);
            // Console.WriteLine(customer.Balance);

            //With Connect
            // StripeConfiguration.ApiKey = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq";
            // var service = new CustomerService();
            // var requestOptions = new RequestOptions
            // {
            //     StripeAccount = "sk_test_51KW5uZFBXJzgkFoluhW0nVcnAPNkdE5sfHkMiVIDzMBzNbDY0G1ppEHlWpAEzWmWDW6vV27xYJldoLvR5DQY0kFM00GDXz75Oq"
            // };
            // var customers = service.List(null, requestOptions);
            // Console.WriteLine(customers)
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

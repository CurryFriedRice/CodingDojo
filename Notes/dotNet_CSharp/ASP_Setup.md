# ASP Setup
So you want to setup another ASP project! Well here's what you have to do


# Navigate to the Project Location (Not the folder)

# Create the project
Open up Gitbash by Right Clicking the folder location
--no-https means no certification generate https certs for your

```
dotnet new web --no-https -o ProjectName

//Still need to edit the Startup CS to use statics
dotnet new mvc --no-https -o ProjectName 

```

# Update the Files

Inside the Program.cs of the project update it so it has the following
Program.CS
```C#
public class Program
{
    
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
        if (env.IsDevelopment())
        {
        app.UseDeveloperExceptionPage();
        }
    }
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });
}
```
Startup.cs
```C#
    public void ConfigureServices(IServiceCollection services) {
    services.AddMvc(options => options.EnableEndpointRouting = false);  //add this line    
    }
    
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {        
        // some code removed for brevity        
        app.UseStaticFiles();
        app.UseMvc();    //add this line, replacing the app.UseRouting() and app.UseEndpoints() lines of code    
    }
```
# Open the Project Folder using VS code
```
    setx ASPNETCORE_ENVIRONMENT Development
    dotnet watch run
```
dotnet watch Run => Runs the code whenever there's an update

# In Program.CS
```C#
public class Startup {        
    // other code in Startup        
    public Startup(IWebHostEnvironment env) {            
        // run this in the debugger, and inspect the "env" object! You can use this object to tell you 
        // the root path of your application, for the purposes of reading from local files, and for            
        // checking environment variables - such as if you are running in Development or Production 
        Console.WriteLine(env.ContentRootPath);            
        Console.WriteLine(env.IsDevelopment());
    }
}
```


# Create your Controllers Folder
Create a Controllers folder

Controllers should be named {NAME}Controller.cs
When returning a View() if you don't use a string it'll look for the same cshtml file under views
```C#
using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers     //be sure to use your own project's namespace!
{
    public class HelloController : Controller   //remember inheritance??
    {
        // Other code
        [HttpGet]
        [Route("")]
        // GET requests to "localhost:5000" go here
        public IActionResult  Index()
        {
            // Method body
        }
        [HttpGet("about")]
        // GET requests to "localhost:5000/about" go here
        public IActionResult  About()
        {
            // Method body
        }
        [HttpPost]
        [Route("submission")]
        // POST requests to "localhost:5000/submission" go here
        // (Don't worry about form submissions for now, we will get to those later!)
        public IActionResult  FormSubmission(string formInput)
        {
            // Method body
        }
        [HttpGet]
        [Route("{name}")]
        public IActionResult  Index(string name)
        {
            return $"Hello {name}!";
        }
        [HttpGet]
        [Route("pizza/{topping}")]
        public IActionResult  PizzaParty(string topping)
        {
            return $"Who's ready for a {topping} Pizza!";
        }
        [HttpGet]
        [Route("user/{name}/{location}/{age}")]
        public IActionResult  UserInfo(string name, string location, int age)
        {
        return  $"{name}, aged {age}, is from {location}";
        
        }
          [HttpGet("")]
        public JsonResult Example()
        {
            // The Json method converts the object passed to it into JSON
            return Json(SomeObject);
			// SomeObject can be a simple variable like a number or a string
			// it can also be something more complicated like a User Object or 
			// a list of Product
        }
}
```
# csHtml
Inside the cshtml  
@ allows you to call into the C# Language and combining both HTML and C# 
```html
<body>
@{
    var StringList = new List<string>
    {
        "one",
        "two",
        "three",
        "four"
    };
        
    foreach(var word in StringList)
    {
        <div>
            <p>@word</p>
            @if(word.Length < 4)
            {
                 <p>@word is a short word</p>
            }
       </div>
    }
}
</body>
```

# Static Files
- Static files are found in the 'wwwroot' folder
- To access them in cshtml files you need to use ~


# View Bag
It's basically session....

```CS
In the controller
[HttpGet]
[Route("")]
public IActionResult Index()
{
    // Here we assign the value "Hello World!" to the property .Example
    // Property names are arbitrary and can be whatever you like
    ViewBag.Example = "Hello World!";
    return View();
}

In the HTML
<h1>@ViewBag.Example</h1>

OR 

@{
    string LocalString = ViewBag.Example + " Good to see you!";
}
<h1>@LocalString</h1>

```

# File Structure

```
Project Root Folder
|-> bin
|-> Controllers
|   |-> {NAME}Controller.cs
|-> obj
|-> Properties
|-> Views
|   |-> {CONTROLLER_NAME}
|   |   |-> View/Function Call IN the controller .cshtml
|   |-> Shared
|-> wwwroot
|   |-> css
|   |-> img
|   |-> js
|-> Program.cs
```

# REdirection
- How to redirect from one route to another
```CS
public RedirectToActionResult Method()
{
    // The anonymous object consists of keys and values
    // The keys should match the parameter names of the method being redirected to
    return RedirectToAction("OtherMethod", new { Food = "sandwiches", Quantity = 5 });
}
 
[HttpGet]
[Route("other/{Food}/{Quantity}")]
public ViewResult OtherMethod(string Food, int Quantity)
{
    Console.WriteLine($"I ate {Quantity} {Food}.");
    // Writes "I ate 5 sandwiches."
}
```

- How to redirect from one controller to another
```CS
public class FirstController : Controller
{
    public RedirectToActionResult Method()
    {
        return RedirectToAction("OtherMethod", "Second");
    }
}

public class SecondController : Controller
{
    public ViewResult OtherMethod()
    {
        return View();
    }
}
```
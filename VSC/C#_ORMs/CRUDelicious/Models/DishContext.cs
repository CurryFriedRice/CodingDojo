using Microsoft.EntityFrameworkCore;
using System;

namespace CRUDelicious.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class DishContext : DbContext 
    { 
        public DishContext(DbContextOptions options) : base(options) { }

        public DbSet<DishModel> Dishes {get;set;}
    }
}
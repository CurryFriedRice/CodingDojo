using Microsoft.EntityFrameworkCore;
using System;

namespace chefs_dishes.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class ChefDishContext : DbContext 
    { 
        public ChefDishContext(DbContextOptions options) : base(options) { }


        public DbSet<Chef> Chefs {get;set;}
        public DbSet<Dish> Dishes {get;set;}
    }
}
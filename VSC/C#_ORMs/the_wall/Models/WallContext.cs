using Microsoft.EntityFrameworkCore;
using System;

namespace the_wall.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class WallContext : DbContext 
    { 
        public WallContext(DbContextOptions options) : base(options) { }
        //public DbSet<BankAccount>BankAccount {get;set;}
        public DbSet<Users> Users {get;set;}
        public DbSet<Messages> Messages{get;set;}
        public DbSet<Comments> Comments{get;set;}
    }
}
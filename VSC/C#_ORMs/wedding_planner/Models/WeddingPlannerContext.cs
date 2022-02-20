using Microsoft.EntityFrameworkCore;
using System;

namespace wedding_planner.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class WeddingPlannerContext : DbContext 
    { 
        public WeddingPlannerContext(DbContextOptions options) : base(options) { }
        //public DbSet<BankAccount>BankAccount {get;set;}
        public DbSet<Weddings> Weddings {get;set;}
        public DbSet<Users> Users {get;set;}
        public DbSet<RSVP> RSVPs {get;set;}
    }
}
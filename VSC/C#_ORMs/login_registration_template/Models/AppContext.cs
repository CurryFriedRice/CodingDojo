using Microsoft.EntityFrameworkCore;
using System;

namespace login_registration_template.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class ProjectContext : DbContext 
    { 
        public ProjectContext(DbContextOptions options) : base(options) { }
        //public DbSet<BankAccount>BankAccount {get;set;}
        public DbSet<Users> Users {get;set;}
    }
}
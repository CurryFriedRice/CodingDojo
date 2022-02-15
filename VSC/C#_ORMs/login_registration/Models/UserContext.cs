using Microsoft.EntityFrameworkCore;
using System;
using login_registration.Models;

namespace login_registration.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class UserContext : DbContext 
    { 
        public UserContext(DbContextOptions options) : base(options) { }

        public DbSet<UserModel> Users {get;set;}
    }
}
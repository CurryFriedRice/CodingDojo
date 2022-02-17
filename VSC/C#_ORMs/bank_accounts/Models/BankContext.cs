using Microsoft.EntityFrameworkCore;
using System;

namespace bank_accounts.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class BankContext : DbContext 
    { 
        public BankContext(DbContextOptions options) : base(options) { }
        //public DbSet<BankAccount>BankAccount {get;set;}
        public DbSet<User> Users {get;set;}
        public DbSet<Transaction> Transactions{get;set;}
    }
}
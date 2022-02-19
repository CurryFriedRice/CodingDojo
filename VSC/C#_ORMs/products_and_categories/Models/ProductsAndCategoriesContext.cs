using Microsoft.EntityFrameworkCore;
using System;

namespace products_and_categories.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class ProductsAndCategoriesContext : DbContext 
    { 
        public ProductsAndCategoriesContext(DbContextOptions options) : base(options) { }
        //public DbSet<BankAccount>BankAccount {get;set;}
        public DbSet<Products> Products {get;set;}
        public DbSet<Categories> Categories {get;set;}
        public DbSet<ProductCategories> ProductCategories {get;set;}
    }
}
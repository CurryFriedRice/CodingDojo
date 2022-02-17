using System;
using System.ComponentModel.DataAnnotations;
namespace chefs_dishes.Models
{
    public class Dish
    {
        [Key]
        public int id{get;set;}
        [Required]
        public string Name{get;set;}
        [Required]
        [Range(1, int.MaxValue)]
        public int Calories{get;set;}
        [Required]
        [Range(1,5)]
        public int Tastiness{get;set;}
        [Required]
        public string Descripiton{get;set;}

        public int ChefId{get;set;}

        public Chef Creator{get;set;}
    }
}

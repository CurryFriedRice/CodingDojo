using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace chefs_dishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId{get;set;}
        [Required]
        public string FirstName{get;set;}
        [Required]
        public string LastName{get;set;}

        [Required]
        [DataType(DataType.DateTime)]
        [OlderThanEighteen]
        [Display(Name ="Date of Birth")]
        public DateTime DoB{get;set;}

        public List<Dish> DishesCooked{get;set;}

        public int Age{get{
            return DateTime.Now.Year - DoB.Year;
        }}
        public int DishCount {get{
            return DishesCooked.Count;
        }}
    }

    public class OlderThanEighteenAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            DateTime date = ((DateTime)value);

            if(olderThanEighteen(date.Day, date.Month,date.Year))
            {
                return ValidationResult.Success;
            }
            return new ValidationResult("Must be older than 18");
        }

        static bool olderThanEighteen(int day, int month,int year) {
            DateTime Dt = new DateTime(year, month, day);
            DateTime Dt18 = new DateTime(DateTime.Now.Year-18, DateTime.Now.Month-1, DateTime.Now.Day);
            //Console.WriteLine(Dt);
            //Console.WriteLine(Dt18);
            //Console.WriteLine(Dt <= Dt18);

            return Dt <= Dt18;
        }
    }
}

using System;
using System.ComponentModel.DataAnnotations;
using Stripe;

namespace e_commerce.Models 
{
    public class ProductModel
    {
        [Required]
        [MinLength(2, ErrorMessage = "Product Name must be at least 2 characters long")]
        public string Name{get;set;}
        // public Customer Customer{get;set;}
        public string ImageUrl{get;set;}
        public string Description{get;set;}
        [Required]
        [GreaterThanOne]
        public int Quantity{get;set;}
    }

    public class GreaterThanOneAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((int)value <= 0)
                return new ValidationResult("Products must be greater than zero!");
            return ValidationResult.Success;
        }
    }
}

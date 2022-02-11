using System;
using System.ComponentModel.DataAnnotations;


namespace date_validator.Models
{
    public class PastDate
    {
        [Required]
        [FutureDate]
        public DateTime NewDateTime{get; set;}

    }
    public class FutureDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // You first may want to unbox "value" here and cast to to a DateTime variable!
            
            if(!(value is DateTime))
            {
                return new ValidationResult("Hey this isn't a datetime!");
            }
            DateTime DT =(DateTime) value;
            if(DT > DateTime.Now) return new ValidationResult("That's a future time! NONE OF THAT!");
            return ValidationResult.Success;
        }
    }
}

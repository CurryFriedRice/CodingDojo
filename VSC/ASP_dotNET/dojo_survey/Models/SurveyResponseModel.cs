    using System.ComponentModel.DataAnnotations;

namespace dojo_survey.Models
{
    public class SurveyResponse
    {
        [Required]
        [MinLength(2)]
        public string Name { get; set; }

        [Required]
        [ValidPlace]
        public string Place { get; set; }
        [Required]
        [ValidActivity]
        public string Activity { get; set; }

        [MinLength(20)]
        public string Comment { get; set; }
    }


    public class ValidPlaceAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // You first may want to unbox "value" here and cast to to a DateTime variable!
            if(!(value is string))
            {
                return new ValidationResult("What the heck that's not an option!");
            }
            else if((value as string) == "NONE")
            {
                return new ValidationResult("Invalid Location: Please pick a location");
            }
            return ValidationResult.Success;
        }
    }
    public class ValidActivityAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // You first may want to unbox "value" here and cast to to a DateTime variable!
            if(!(value is string))
            {
                return new ValidationResult("What the heck that's not an option!");
            }
            else if((value as string) == "NONE")
            {
                return new ValidationResult("Invalid Activity: Please pick an activity");
            }
            return ValidationResult.Success;
        }
    }



}
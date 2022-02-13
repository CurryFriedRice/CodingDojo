using System;
using System.ComponentModel.DataAnnotations;

namespace login_registration.Models
{
    public class Register
    {
        [Required]
        [EmailAddress]
        [Compare("Email")]
        public string Email{get;set;}
        [Display(Name="Confirm Email")]
        [Compare("Email")]
        public string Email_Confirm{get;set;}
        
        
        [Required]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string Password{get;set;}
        [Display(Name="Confirm Password")]
        [Compare("Password")]
        [DataType(DataType.Password)]
        public string Password_Confirm{get;set;}

        [Required]
        [MinLength(2)]
        [Display(Name="First Name")]
        public string FirstName{get;set;}
        [Required]
        [MinLength(2)]
        [Display(Name="Last Name")]
        public string LastName{get;set;}
    }

}

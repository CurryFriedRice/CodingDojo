using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace login_registration_template.Models
{
    public class Users
    {
        [Key]
        public int UserID{get;set;}
        
        [Required]
        [EmailAddress]
        public string Email{get;set;}
        [Required]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage ="Password needs to be at least 8 characters long")]
        public string Password{get;set;}
        [Required]
        [MinLength(2, ErrorMessage ="First Name Must be at least 2 characters long")]
        public string FirstName{get;set;}
        [Required]
        [MinLength(2, ErrorMessage = "Last name must be at least 2 characters long")]
        public string LastName {get;set;}


        [NotMapped]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Passwords do not match")]
        [Display(Name = "Confirm Password")]
        public string Password_confirm{get;set;}
        [NotMapped]
        [Compare("Email", ErrorMessage = "Emails do not match")]
        [Display(Name = "Confirm Email")]
        public string Email_confirm{get;set;}

        public string FullName{get{
            return $"{FirstName} {LastName}"; 
        }}
        
    }
}

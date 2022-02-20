using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding_planner.Models
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
        public string Password_confirm{get;set;}
        [NotMapped]
        [Compare("Email", ErrorMessage = "Emails do not match")]
        public string Email_confirm{get;set;}

        public List<RSVP> WeddingsRSVP {get;set;}

        public string FullName{get{
            return $"{FirstName} {LastName}"; 
        }}

    }
}

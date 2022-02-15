using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace login_registration.Models
{
    public class UserModel
    {
        [Key]
        public int id {get;set;}
        [Required]
        [MinLength(2)]
        public string FirstName {get;set;}
        [Required]
        [MinLength(2)]
        public string LastName {get;set;}
        [Required]
        [EmailAddress]
        public string Email {get;set;}
        [DataType(DataType.Password)]
        [Required]
        [MinLength(8, ErrorMessage ="Password must be 8 characters or longer!")]
        public string Password{get;set;}
        public DateTime CreatedAt{get;set;} = DateTime.Now;
        public DateTime UpdatedAt{get;set;} = DateTime.Now;
    
        [NotMapped]
        [Compare("Password", ErrorMessage ="Passwords do not match")]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm Password:")] 
        public string Password_Confirm{get;set;}
        [NotMapped]
        [Compare("Email", ErrorMessage ="Emails do not match")]
        [EmailAddress]
        [Display(Name = "Confirm Email:")] 
        public string Email_Confirm{get;set;}
    }
}

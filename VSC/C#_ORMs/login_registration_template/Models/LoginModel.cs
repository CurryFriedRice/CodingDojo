using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding_planner.Models
{
    public class Login
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email Addresss")]
        public string Login_Email{get;set;}
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Login_Password{get;set;}
    }
}

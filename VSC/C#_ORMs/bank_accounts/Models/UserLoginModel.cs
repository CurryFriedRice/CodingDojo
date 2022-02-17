using System;
using System.ComponentModel.DataAnnotations;

namespace bank_accounts.Models
{
    public class UserLogin
    {
      
        [Required]
        [EmailAddress]
        [Display(Name = "Email Address")]
        public string Email{get;set;}

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password{get;set;}
    }
}

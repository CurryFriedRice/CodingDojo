using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Collections.Generic;
namespace bank_accounts.Models
{
    public class User
    {
        [Key]
        public int UserId{get;set;}
        [Required]
        [MinLength(2, ErrorMessage = "First Name Must be at least 2 characters")]
        [MaxLength(100, ErrorMessage = "First Name must be less than 100 characters")]
        [Display(Name = "First name")]
        public string FirstName{get;set;}
        [Required]
        [MinLength(2, ErrorMessage = "Last Name Must be at least 2 characters")]
        [MaxLength(100, ErrorMessage = "Last Name must be less than 100 characters")]
        [Display(Name = "Last name")]
        public string LastName{get;set;}

        [Required]
        [EmailAddress]
        [Display(Name = "Email Address")]
        public string Email{get;set;}

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        [MinLength(8, ErrorMessage = "Password Must Be At least 8 Characters Long")]
        public string Password{get;set;}
        
        
        [Compare("Password")]
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        [NotMapped]
        public string Password_Confirm{get;set;}
        [Compare("Email")]
        [Display(Name = "Confirm Email")]
        [NotMapped]
        public string Email_Confirm{get;set;}

        public List<Transaction> MyTransactions{get;set;}
        //public int BankAccountID{get;set;}
        //public BankAccount Account{get;set;}
        [NotMapped]
        public int CurrentBalance {get{
            int total = 0;
            foreach(Transaction transaction in MyTransactions)
            {
                total = total + transaction.Amount;
            }
            return total;
        }}

    }
}

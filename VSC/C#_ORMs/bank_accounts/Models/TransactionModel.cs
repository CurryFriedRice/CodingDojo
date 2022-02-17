using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Collections.Generic;


namespace bank_accounts.Models
{

    public enum TransactionAction {
        Withdraw, Deposit, Transfer
    }
    public class Transaction
    {

        [Key]
        public int TransactionId{get;set;} 
        [Required]
        [Display(Name = "Withdraw/Deposit")]
        public int Amount{get;set;}
        public DateTime CreatedAt{get;set;} = DateTime.Now;
        
        // [NotMapped]
        // //public BankAccount BankAccount;
        // //public int BankAccountId{get;set;}
        public int UserId{get; set;}
        

    }
}

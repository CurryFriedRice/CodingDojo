// using System;
// using System.Collections.Generic;
// using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

// namespace bank_accounts.Models
// {
//     public class BankAccount
//     {
//         [Key]
//         public int BankId{get;set;}
//         public int Funds{get;set;}

//         public int UserId{get;set;}

//         [NotMapped]
//         public User Creator{get;set;}

//         [NotMapped]
//         public List<Transaction> Transactions{get;set;}


//     }
// }

using System;
using System.ComponentModel.DataAnnotations;

namespace form_submission.Models
{
    public class User
    {
        [Required]
        [MinLength(4)]
        public string FirstName{get; set;}
        
        [Required]
        [MinLength(4)]
        public string LastName{get; set;}

        [Required]
        [Range(0,int.MaxValue)]
        public int Age{get;set;}
    
        [Required]
        [EmailAddress]
        public string EmailAddress{get;set;}

        [Required]
        [DataType(DataType.Password)]
        [MinLength(4)] //I'd Want this to be a regex
        public string Password{get; set;}
    }
}

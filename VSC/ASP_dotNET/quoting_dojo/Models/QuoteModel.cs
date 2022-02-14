using System;
using System.ComponentModel.DataAnnotations;

namespace quoting_dojo.Models
{
    public class QuoteModel
    {
        [Required]
        [MinLength(2)]
        public string Creator{get;set;}
        
        [Required]
        [MinLength(2)]
        public string Content{get;set;}
        
    }
}

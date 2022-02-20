using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding_planner.Models
{
    public class Weddings
    {
        [Key]
        public int WeddingID{get;set;}
        
        [Required]
        [MinLength(2, ErrorMessage = "Wedder Name must be at least 2 chracters long")]
        public string WedderOne{get;set;}
        [Required]
        [MinLength(2, ErrorMessage = "Wedder Name must be at least 2 chracters long")]
        public string WedderTwo{get;set;}

        [Required]
        public DateTime WeddingDate{get;set;}

        [Required]
        [MinLength(2,ErrorMessage ="Address must Must be at least 2 characters long")]
        public string WeddingAddress {get;set;}
        
        public List<RSVP> UserRSVP{get;set;}
    }
}

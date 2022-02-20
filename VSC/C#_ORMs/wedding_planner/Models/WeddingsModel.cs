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
        [Display(Name = "Wedder One")]
        public string WedderOne{get;set;}
        [Required]
        [MinLength(2, ErrorMessage = "Wedder Name must be at least 2 chracters long")]
        [Display(Name = "Wedder Two")]
        public string WedderTwo{get;set;}

        [Required]
        [DataType(DataType.DateTime)]
        [Display(Name = "Date")]
        public DateTime WeddingDate{get;set;}

        [Required]
        [MinLength(2,ErrorMessage ="Address must Must be at least 2 characters long")]
        [Display(Name = "Address")]
        public string WeddingAddress {get;set;}
        
        public List<RSVP> UsersRSVP{get;set;}

        public string Partners{get{
            return $"{WedderOne} and {WedderTwo}";
        }}

        public string DateFormatted{get{
            return WeddingDate.ToString("MMMM dd, yyyy");
        }}
    }
}

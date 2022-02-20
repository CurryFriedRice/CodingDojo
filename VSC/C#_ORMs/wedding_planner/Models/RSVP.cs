using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wedding_planner.Models
{
    public class RSVP
    {
        [Key]
        public int RSVPID{get;set;}
        public int WeddingID{get;set;}
        public int UserID{get;set;}
        
        [NotMapped]
        public Weddings Wedding{get;set;}
        [NotMapped]
        public Users User{get;set;}
        
    }
}

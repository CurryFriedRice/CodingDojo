using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace the_wall.Models
{
    [NotMapped]
    public class SubmissionModel
    {
        //If it's a comment then we need the ID of the message it's commenting to
        public int UserID{get;set;}
        public int MessageID{get;set;}
        
        //If it's NOT a comment then it's a message and just needs a new Text
        public string Message{get;set;}
    }
}

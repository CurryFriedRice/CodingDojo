using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace the_wall.Models
{
    public class Messages
    {
        [Key]
        public int MessageID{get;set;}
        
        public int UserID{get;set;}
        public string Message{get;set;}
        
        public DateTime Created_At{get;set;} = DateTime.Now;
        public DateTime Updated_At{get;set;} = DateTime.Now;

        public Users User {get;set;}
        public List<Comments> UserComments{get;set;}

        public string DateFormatted()
        {
            return Updated_At.ToString("MMMM dd, yyyy");
        }

        public void Setup(SubmissionModel newSubmission)
        {
            UserID = newSubmission.UserID;
            Message = newSubmission.Message;
        }
    }
}

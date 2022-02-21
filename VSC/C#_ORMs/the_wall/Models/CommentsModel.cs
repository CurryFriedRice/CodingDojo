using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace the_wall.Models
{
    public class Comments
    {

        [Key]
        public int CommentID{get;set;}
        public int MessageID{get;set;}
        public int UserID{get;set;}
        public string Message{get;set;}
        
        public DateTime Created_At{get;set;} = DateTime.Now;
        public DateTime Updated_At{get;set;} = DateTime.Now;

        public Users User{get;set;}
        

        public string DateFormatted()
        {
            return Updated_At.ToString("MMMM dd, yyyy");
        }

        
        public void Setup (SubmissionModel newSubmission)
        {
            UserID = newSubmission.UserID;
            MessageID = newSubmission.MessageID;
            Message = newSubmission.Message;
        }

    }
}

using System;
using System.ComponentModel.DataAnnotations;
namespace CRUDelicious.Models
{
    public class DishModel
    {
        [Key]
        public int id {get;set;}
        public string Name {get;set;}
        public string Chef {get;set;}
        public int Tastiness {get;set;}
        public int Calories {get;set;}
        public string Description{get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}

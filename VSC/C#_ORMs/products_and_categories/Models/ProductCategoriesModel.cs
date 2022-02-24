using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using products_and_categories.Models;

namespace products_and_categories.Models
{
    public class ProductCategories
    {
        [Key]
        public int AssociationID { get; set; }
        public int ProductID { get; set; }
        public int CategoryID { get; set; }

        public DateTime CreatedAt{get;set;} = DateTime.Now;
        public DateTime UpdatedAt{get;set;} = DateTime.Now;

        public Products Product{get;set;}

        public Categories Category{get;set;}
    }
}

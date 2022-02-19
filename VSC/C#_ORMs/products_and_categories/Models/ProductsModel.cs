using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Collections.Generic;


namespace products_and_categories.Models
{
    public class Products
    {
        [Key]
        public int ProductID{get;set;}
        [Required]
        [MinLength(2, ErrorMessage ="Product Name must be at least 2 characters Long")]
        public string Name{get;set;}
        [MaxLength(255, ErrorMessage ="Product must be at least 2 characters Long")]
        public string Description{get;set;}
        public double Price{get;set;}
        public DateTime CreatedAt{get;set;}
        public DateTime UpdatedAt{get;set;}

        public List<ProductCategories> ProdCat{get;set;}

    }
}

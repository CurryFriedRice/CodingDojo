using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace products_and_categories.Models
{
    public class Categories
    {
        [Key]
        public int CategoryID { get; set; }
        [Required]
        [MinLength(2, ErrorMessage = "Category Name must be at least 2 Characters Long")]
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public List<ProductCategories> ProdCat{get;set;}
    }
}

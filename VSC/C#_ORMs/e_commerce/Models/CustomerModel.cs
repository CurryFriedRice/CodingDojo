using System;
using System.ComponentModel.DataAnnotations;

namespace e_commerce.Models
{
    public class CustomerModel
    {
        [Required]
        [MinLength(2, ErrorMessage = "Customer Name must be at least 2 characters long")]
        public string Name{get;set;}

    }
}

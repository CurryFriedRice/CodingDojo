using System;
using System.ComponentModel.DataAnnotations;
using Stripe;

namespace e_commerce.Models 
{
    public class AddOrder
    {
        public string CustomerID{get;set;}
        // public Customer Customer{get;set;}
        public string ProductID{get;set;}
        public int Quantity{get;set;}

    }
}

﻿
namespace OnlineShop.Data.Entities.Identity
{
    public class Contact
    {
   
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public string Address { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastUpdatedAt { get; set; }
    }
}

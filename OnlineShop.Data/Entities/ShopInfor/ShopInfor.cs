using OnlineShop.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Data.Entities.ShopInfor
{
    public class ShopInfor :BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
        public string OpenTime { get; set; }
    }
}

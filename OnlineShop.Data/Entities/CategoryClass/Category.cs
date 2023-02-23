using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.Data.Entities.Product;

namespace OnlineShop.Data.Entities.CategoryClass
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public int SortOrder { set; get; }
        public bool IsShowOnHome { set; get; }
        public ICollection<Products> Products { get; set; }
    }
}

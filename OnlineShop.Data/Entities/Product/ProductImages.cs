using OnlineShop.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Data.Entities.Product
{
    public class ProductImages: BaseEntity
    {

        public string ImagePath { get; set; }

        public string Caption { get; set; }

        public bool IsDefault { get; set; }

        public int SortOrder { get; set; }

        public long FileSize { get; set; }

        public Products Product { get; set; }

        public long ProductId { get; set; }
    }
}

using OnlineShop.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Data.Entities.ManufacturerEntities
{
    public class Manufacturer : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

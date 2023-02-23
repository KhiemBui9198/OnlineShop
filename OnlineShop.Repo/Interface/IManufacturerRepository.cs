using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.DTO.ViewModels;

namespace OnlineShop.Repo.Interfaces
{
    public interface IManufacturerRepository
    {
        Task<IEnumerable<Manufacturer>> GetAllManufacturer();
        Task<Manufacturer> UpdateManufacturer(long id, ManufacturerViewModel manufacturer);
        Task<Manufacturer> GetManufacturerById(long id);
        Task<Manufacturer> AddManufacturer(ManufacturerViewModel manufacturer);
        Task<bool> DeleteManufacturer(long id);
    }
}

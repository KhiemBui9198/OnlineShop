using Microsoft.EntityFrameworkCore;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.Data.Entities.Product;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Repository
{
    public class ManufacturerRepository : IManufacturerRepository
    {
        private readonly DataBaseContext _dataBaseContext;
        public ManufacturerRepository(DataBaseContext dbContext)
        {
            _dataBaseContext = dbContext;
        }
        public async Task<Manufacturer> AddManufacturer(ManufacturerViewModel manufacturer)
        {
            var model = new Manufacturer()
            {
                Name = manufacturer.Name,
                Description = manufacturer.Description,
                CreatedAt = DateTime.Now,
                LastUpdatedAt = DateTime.Now,

            };
            _dataBaseContext.Manufacturer.Add(model);
            await _dataBaseContext.SaveChangesAsync();
            return model;
        }

        public async Task<bool> DeleteManufacturer(long id)
        {
            var manufacturers = await _dataBaseContext.Manufacturer.FirstOrDefaultAsync(item => item.Id == id);
            if (manufacturers != null)
            {
                _dataBaseContext.Remove(manufacturers);
                await _dataBaseContext.SaveChangesAsync();
                return true;
            }
            throw new Exception($"Can not find item with id {id}");
        }

        public async Task<IEnumerable<Manufacturer>> GetAllManufacturer()
        {
            var query = await _dataBaseContext.Manufacturer.ToListAsync();
            return query;
        }

        public async Task<Manufacturer> GetManufacturerById(long id)
        {
            var query = await _dataBaseContext.Manufacturer.FirstOrDefaultAsync(item => item.Id == id);
            return query;
        }

        public async Task<Manufacturer> UpdateManufacturer(long id, ManufacturerViewModel manufacturer)
        {
            var model = await _dataBaseContext.Manufacturer.FindAsync(id);
            if (model != null)
            {
                model.Name = manufacturer.Name;
                model.Description = manufacturer.Description;
                model.LastUpdatedAt = DateTime.Now;

                await _dataBaseContext.SaveChangesAsync();
                return model;
            }
            throw new Exception($"Can not find item with id {id}");
        }
    }
}

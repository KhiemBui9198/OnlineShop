using Microsoft.EntityFrameworkCore;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.Data.Entities.ShopInfor;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Repository
{
    public class ShopInforRepository : IShopInforRepository
    {
        private readonly DataBaseContext _dataBaseContext;
        public ShopInforRepository(DataBaseContext dbContext)
        {
            _dataBaseContext = dbContext;
        }

        public async Task<ShopInfor> AddShop(ShopInforViewModel shopInfor)
        {
            var model = new ShopInfor()
            {
                Name = shopInfor.Name,
                Description = shopInfor.Description,
                Address = shopInfor.Address,
                Phone = shopInfor.Phone,
                Email = shopInfor.Email,
                OpenTime= shopInfor.OpenTime,
                CreatedAt = DateTime.Now,
                LastUpdatedAt = DateTime.Now,
            };
            _dataBaseContext.ShopInfor.Add(model);
            await _dataBaseContext.SaveChangesAsync();
            return model;
        }

        public async Task<bool> DeleteShop(long id)
        {
            var model = await _dataBaseContext.ShopInfor.FirstOrDefaultAsync(item => item.Id == id);
            if (model != null)
            {
                _dataBaseContext.Remove(model);
                await _dataBaseContext.SaveChangesAsync();
                return true;
            }
            throw new Exception($"Can not find item with id {id}");
        }

        public async Task<IEnumerable<ShopInfor>> GetAllShop()
        {
            var query = await _dataBaseContext.ShopInfor.ToListAsync();
            return query;
        }

        public async Task<ShopInfor> GetShopById(long id)
        {
            var query = await _dataBaseContext.ShopInfor.FirstOrDefaultAsync(item => item.Id == id);
            return query;
        }

        public async Task<ShopInfor> UpdateShop(long id, ShopInforViewModel shopInfor)
        {
            var model = await _dataBaseContext.ShopInfor.FindAsync(id);
            if (model != null)
            {
                model.Name = shopInfor.Name;
                model.Description = shopInfor.Description;
                model.Address = shopInfor.Address;
                model.Phone = shopInfor.Phone;
                model.Email = shopInfor.Email;
                model.OpenTime= shopInfor.OpenTime;

                model.LastUpdatedAt = DateTime.Now;

                await _dataBaseContext.SaveChangesAsync();
                return model;
            }
            throw new Exception($"Can not find item with id {id}");
        }
    }
}

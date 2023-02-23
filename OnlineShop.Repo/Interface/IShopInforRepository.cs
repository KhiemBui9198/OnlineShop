using OnlineShop.Data.Entities.CategoryClass;
using OnlineShop.Data.Entities.ShopInfor;
using OnlineShop.DTO.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Interface
{
    public interface IShopInforRepository
    {
        Task<IEnumerable<ShopInfor>> GetAllShop();
        Task<ShopInfor> UpdateShop(long id, ShopInforViewModel shopInfor);
        Task<ShopInfor> GetShopById(long id);
        Task<ShopInfor> AddShop(ShopInforViewModel shopInfor);
        Task<bool> DeleteShop(long id);
    }
}
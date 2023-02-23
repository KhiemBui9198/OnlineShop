using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Data.Entities.Product;
using OnlineShop.DTO.ViewModels;

namespace OnlineShop.Repo.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Products>> GetAllProducts();
        Task<Products> UpdateProduct(long id, ProductViewModel product);
        Task<Products> GetProductById(long id);
        Task<Products> AddProduct(ProductViewModel product);
        Task<bool> DeleteProduct(long id);
    }
}

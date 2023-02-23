using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OnlineShop.Data.Entities.Product;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Interfaces;
using OnlineShop.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnlineShop.Data.Entities.Identity;

namespace OnlineShop.Repo.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataBaseContext _dataBaseContext;
        public ProductRepository(DataBaseContext dbContext)
        {
            _dataBaseContext = dbContext;
        }
        public async Task<Products> AddProduct(ProductViewModel product)
        {
            var products = new Products()
            {
                Name = product.Name,
                Price = product.Price,
                ViewCount = product.ViewCount,
                OriginalPrice = product.OriginalPrice,
                Stock = product.Stock,
                ManufacturerId = product.ManufacturerId,
                CategoryId = product.CategoryId,
                CreatedAt = DateTime.Now,
                LastUpdatedAt = DateTime.Now,

            };
            _dataBaseContext.Products.Add(products);
            await _dataBaseContext.SaveChangesAsync();
            return products;
        }

        public async Task<bool> DeleteProduct(long id)
        {
            var products = await _dataBaseContext.Products.FirstOrDefaultAsync(item => item.Id == id);
            if (products != null)
            {
                _dataBaseContext.Remove(products);
                await _dataBaseContext.SaveChangesAsync();
                return true;
            }
            throw new Exception($"Can not find item with id {id}");
        }

        public async Task<IEnumerable<Products>> GetAllProducts()
        {
            //var query = new Products();
           
         //    query = await _dataBaseContext.Products.ToListAsync();

        //    foreach(var product in query)
        //    {
          //      product.Category = await _categoryRepository.GetCategoryById(product.CategoryId);
         //   }
            var query = await _dataBaseContext.Products.ToListAsync();
         //   foreach (var product in query)
            //        {
          //
          //product.CategoryName = await _dataBaseContext.Category.FirstOrDefaultAsync(item => item.Id == product.CategoryId);
           // }
                return query;
        }

        public async Task<Products> GetProductById(long id)
        {
            var query = await _dataBaseContext.Products.FirstOrDefaultAsync(item => item.Id == id);
            return query;
        }

        public async Task<Products> UpdateProduct(long id, ProductViewModel product)
        {
            var model = await _dataBaseContext.Products.FindAsync(id);
            if (model != null)
            {
                model.Name = product.Name;
                model.Price = product.Price;
                model.ViewCount = product.ViewCount;
                model.OriginalPrice = product.OriginalPrice;
                model.Stock = product.Stock;
                model.ManufacturerId = product.ManufacturerId;
                model.CategoryId = product.CategoryId;
                model.LastUpdatedAt = DateTime.Now;

                await _dataBaseContext.SaveChangesAsync();
                return model;
            }
            throw new Exception($"Can not find item with id {id}");
        }
    }
}

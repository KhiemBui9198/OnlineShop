using Microsoft.EntityFrameworkCore;
using OnlineShop.Data.Entities.CategoryClass;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Repository
{
    public class CategoryRespository : ICategoryRepository
    {

        private readonly DataBaseContext _dataBaseContext;
        public CategoryRespository(DataBaseContext dbContext)
        {
            _dataBaseContext = dbContext;
        }
        public async Task<Category> AddCategory(CategoryViewModel category)
        {
            var model = new Category()
            {
                Name = category.Name,
                SortOrder = category.SortOrder,
                IsShowOnHome = category.IsShowOnHome,
                CreatedAt = DateTime.Now,
                LastUpdatedAt = DateTime.Now,

            };
            _dataBaseContext.Category.Add(model);
            await _dataBaseContext.SaveChangesAsync();
            return model;
        }

        public async Task<bool> DeleteCategory(long id)
        {
            var model = await _dataBaseContext.Category.FirstOrDefaultAsync(item => item.Id == id);
            if (model != null)
            {
                _dataBaseContext.Remove(model);
                await _dataBaseContext.SaveChangesAsync();
                return true;
            }
            throw new Exception($"Can not find item with id {id}");
        }

        public async Task<IEnumerable<Category>> GetAllCategory()
        {
            var query = await _dataBaseContext.Category.ToListAsync();
            return query;
        }

        public async Task<Category> GetCategoryById(long id)
        {
            return await _dataBaseContext.Category
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id.Equals(id));

        }

        public async Task<Category> UpdateCategory(long id, CategoryViewModel category)
        {
            var model = await _dataBaseContext.Category.FindAsync(id);
            if (model != null)
            {
                model.Name = category.Name;
                model.SortOrder = category.SortOrder;
                model.IsShowOnHome = category.IsShowOnHome;
                model.LastUpdatedAt = DateTime.Now;
                await _dataBaseContext.SaveChangesAsync();
                return model;
            }
            throw new Exception($"Can not find item with id {id}");
        }
    }
}

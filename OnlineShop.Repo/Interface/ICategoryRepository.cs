using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Data.Entities.CategoryClass;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.DTO.ViewModels;

namespace OnlineShop.Repo.Interfaces
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetAllCategory();
        Task<Category> UpdateCategory(long id, CategoryViewModel category);
        Task<Category> GetCategoryById(long id);
        Task<Category> AddCategory(CategoryViewModel category);
        Task<bool> DeleteCategory(long id);
    }
}

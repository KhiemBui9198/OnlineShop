using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop.Repo.Interfaces;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Repo;
using OnlineShop.DTO.ViewModels;


namespace Net6_Angular.Controllers
{

    [ApiController]
    [Route("[Controller]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(
            ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllCategory()
        {
            var categories = await _categoryRepository.GetAllCategory().ConfigureAwait(false);
            return Ok(categories);
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetCategoryById(long id)
        {
            var result = await _categoryRepository.GetCategoryById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> AddCategory(CategoryViewModel model)
        {
            await _categoryRepository.AddCategory(model);
            return Ok(model);
        }
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> UpdateCategory(long id, CategoryViewModel model)
        {
            await _categoryRepository.UpdateCategory(id, model);
            return Ok(model);
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCategory(long id)
        {
            await _categoryRepository.DeleteCategory(id);
            return Ok();

        }
    }
}

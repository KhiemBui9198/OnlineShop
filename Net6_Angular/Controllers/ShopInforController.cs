using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop.Repo.Interfaces;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Repo;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Interface;
using OnlineShop.Repo.Repository;

namespace Net6_Angular.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class ShopInforController : Controller
    {
        private readonly IShopInforRepository _shopInforRepository;
        public ShopInforController(
            IShopInforRepository shopInforRepository)
        {
            _shopInforRepository = shopInforRepository;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllShop()
        {
            var categories = await _shopInforRepository.GetAllShop().ConfigureAwait(false);
            return Ok(categories);
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetShopById(long id)
        {
            var result = await _shopInforRepository.GetShopById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> AddShop(ShopInforViewModel model)
        {
            await _shopInforRepository.AddShop(model);
            return Ok(model);
        }
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> UpdateShop(long id, ShopInforViewModel model)
        {
            await _shopInforRepository.UpdateShop(id, model);
            return Ok(model);
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteShop(long id)
        {
            await _shopInforRepository.DeleteShop(id);
            return Ok();

        }
    }
}

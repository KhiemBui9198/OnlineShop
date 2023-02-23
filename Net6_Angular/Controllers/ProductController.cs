using OnlineShop.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop.Repo.Interfaces;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Repository;

namespace Net6_Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly IProductRepository _productRepositoryService;
        public ProductController(
          IProductRepository productRepository)
        {
            _productRepositoryService = productRepository;
        }

        [HttpGet ("[action]")]
        public async Task<IActionResult> GetAllProduct()
        {
            var products = await _productRepositoryService.GetAllProducts().ConfigureAwait(false);
            return Ok(products);
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetProductById(long id)
        {
            var result = await _productRepositoryService.GetProductById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        [HttpPost ("[action]")]
        public async Task<IActionResult> AddProduct(ProductViewModel model)
        {
            await _productRepositoryService.AddProduct(model);
            return Ok(model);
        }
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> UpdateProduct(long id, ProductViewModel model)
        {
            await _productRepositoryService.UpdateProduct(id, model);
            return Ok(model);
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteProduct(long id)
        {
            await _productRepositoryService.DeleteProduct(id);
            return Ok();

        }
    }
}

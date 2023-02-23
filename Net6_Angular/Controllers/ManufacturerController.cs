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
    public class ManufacturerController : Controller
    {
        private readonly IManufacturerRepository _manufacturerRepository;
        public ManufacturerController(
            IManufacturerRepository manufacturerRepository)
        {
            _manufacturerRepository = manufacturerRepository;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllManufacturer()
        {
            var manufacturers = await _manufacturerRepository.GetAllManufacturer().ConfigureAwait(false);
            return Ok(manufacturers);
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetManufacturerId(long id)
        {
            var result = await _manufacturerRepository.GetManufacturerById(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> AddManufacturer(ManufacturerViewModel model)
        {
            await _manufacturerRepository.AddManufacturer(model);
            return Ok(model);
        }
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> UpdateManufacturer(long id, ManufacturerViewModel model)
        {
            await _manufacturerRepository.UpdateManufacturer(id, model);
            return Ok(model);
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteManufacturer(long id)
        {
            await _manufacturerRepository.DeleteManufacturer(id);
            return Ok();

        }
    }
}

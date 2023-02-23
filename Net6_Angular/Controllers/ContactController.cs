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
    public class ContactController : Controller
    {
        private readonly IContactRepository _contactRepository;
        public ContactController(
            IContactRepository contactRepository, DataBaseContext dbContext)
        {
            _contactRepository = contactRepository;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetContact()
        {
              var result =  _contactRepository.GetContacts();
             return Ok( await result);

        }
        [HttpGet("[action]/{id:guid}")]
        public async Task<IActionResult> GetContact([FromRoute] Guid id)
        {
            var result = await _contactRepository.GetContactById(id);
            if(result == null)
            {
                return NotFound();
            }    
            return Ok(result);
        }
       [HttpPost("[action]")]
        public async Task<IActionResult> AddContact(ContactViewModel model)
        {
            await _contactRepository.AddContact(model);
            return Ok(model);
        }
        [HttpPut("[action]/{id:guid}")]
        public async Task<IActionResult> UpdateContact([FromRoute] Guid id, ContactViewModel model)
        {
            await _contactRepository.UpdateContact(id, model);
            return Ok(model);
        }
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteContact([FromRoute] Guid id)
        {
            await _contactRepository.DeleteContact(id);
            return Ok();

        }
    }
}

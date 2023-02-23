using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using OnlineShop.DTO.ViewModels.Identiry;
using OnlineShop.Repo.Interface;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.DTO.ViewModels;

namespace Net6_Angular.Controllers.Identity
{
    [ApiController]
    [Route("[controller]")]
    public class IdentityAppRoleController : ControllerBase
    {
        private readonly IAppRoleRepository iAppRoleRepository;
        public IdentityAppRoleController(IAppRoleRepository _iAppRoleRepository)
        {
            iAppRoleRepository = _iAppRoleRepository;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllRole()
        {
            var query = await iAppRoleRepository.GetAllRole();
            return Ok(query);
        }
    }
}

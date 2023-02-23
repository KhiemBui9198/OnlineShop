using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShop.DTO.ViewModels.Identiry;
using OnlineShop.Repo.Interface;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.DTO.ViewModels;
using Microsoft.VisualStudio.Services.TestManagement.TestPlanning.WebApi;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Net6_Angular.Controllers.Identity
{ 
    [ApiController]
    [Route("[controller]")]
    public class IdentityController : ControllerBase
    {
        private readonly IIdentityRepository iIdentityRepository;
        public IdentityController(IIdentityRepository _iIdentityRepository)
        {
            iIdentityRepository = _iIdentityRepository;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> SignUp( [FromBody]SignUpModel signUpModel, string role)
        {
            var result = await iIdentityRepository.SignUpAsync(signUpModel,role);
            if(result.Succeeded)
            {
              //  return Ok(result.Succeeded);
                return StatusCode(StatusCodes.Status403Forbidden,
                    new Response { Status = "Success", Message = "Create Successfull !" });
            }
            return Unauthorized();
        }
        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(SignInModel signInModel)
        {
            var result = await iIdentityRepository.SignInAsync(signInModel);
            if(string.IsNullOrEmpty(result))
            {
                return StatusCode(StatusCodes.Status403Forbidden,
       new Response { Status = "Faid", Message = "Login UnSuccessfull !" });
            }
           // return Ok();
            return StatusCode(StatusCodes.Status200OK,
          new Response { Status = "Success", Message = "Login Successfull !" });
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetAllUser()
        {
            var query = await iIdentityRepository.GetAllUser();
            return Ok(query);
        }
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetUserById(String id)
        {
            var query = await iIdentityRepository.GetUserById(id);
            if (query == null)
            {
                return NotFound();
            }
            return Ok(query);
        }

        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> UpdateUser(String id, ContactInformationModel userData, string role)
        {
            var result = await iIdentityRepository.UpdateUser(id, userData);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }


    }
}

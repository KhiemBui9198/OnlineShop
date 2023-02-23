using OnlineShop.Repo.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Repo.Interfaces;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.DTO.ViewModels.Identiry;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShop.DTO;
using System.Text.Encodings.Web;
using Microsoft.VisualStudio.Services.Identity;
using Microsoft.VisualStudio.Services.Common.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Security;

namespace OnlineShop.Repo.Repository
{
    public class IdentityRespository : IIdentityRepository
    {
        private readonly UserManager<AppUserIdentity> userManager;
        private readonly SignInManager<AppUserIdentity> SignInManager;
        private readonly RoleManager <AppRoleIdentity> roleManager;
        private readonly IConfiguration configuration;
        public IdentityRespository (UserManager<AppUserIdentity> userManager, RoleManager<AppRoleIdentity> roleManager,
            SignInManager<AppUserIdentity>  signInManager, IConfiguration configuration)
        {
            this.roleManager = roleManager;
            this.userManager = userManager;
            this.SignInManager= signInManager;
            this.configuration = configuration;

        }
        public async Task<IEnumerable<AppUserIdentity>> GetAllUser()
        {
            var query = await userManager.Users.ToListAsync();
            return query;
        }

        public async Task<AppUserIdentity> GetUserById(string id)
        {
            var contact = await userManager.Users.FirstOrDefaultAsync(u => u.Id == id);
            return contact;
        }

        public async Task<string> SignInAsync(SignInModel model)
        {
            var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (!result.Succeeded)
            {
                return String.Empty;
            }
            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, model.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

            };
            var authenKey = new SymmetricSecurityKey( Encoding.UTF8.GetBytes(
                configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: configuration["JWT:ValidIssuer"],
                audience: configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddMinutes(20),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authenKey,SecurityAlgorithms.HmacSha512Signature)
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<IdentityResult> SignUpAsync(SignUpModel model, string role)
        {
            AppUserIdentity User = new ()
            { 
                PhoneNumber= model.PhoneNumber,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.UserName,
            };
            if(await roleManager.RoleExistsAsync(role)){
                var result = await userManager.CreateAsync(User,model.Password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(User,role);
                    return result;
                }
                else {
                    throw new Exception($" User Faild to Create!");
                }
            }
            else
            {

                throw new Exception($" Role does not exist  !");
            }

        }

        public async Task<AppUserIdentity> UpdateUser(string id, ContactInformationModel user)
        {
            var model = await userManager.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (model != null)
            {
                model.PhoneNumber = user.PhoneNumber;
                model.FirstName = user.FirstName;
                model.LastName = user.LastName;
                model.Email = user.Email;
                model.UserName = user.UserName;
                await userManager.UpdateAsync(model);
                return model;
            }
            throw new Exception($"Can not find item with id {id}");
        }
    }
}
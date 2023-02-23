using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OnlineShop.Data.Entities.CategoryClass;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Repo.Interface;
using OnlineShop.Repo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Repository
{
    public class AppRespository : IAppRoleRepository
    {
        private readonly UserManager<AppUserIdentity> userManager;
        private readonly RoleManager<AppRoleIdentity> roleManager;
        private readonly IConfiguration configuration;
        public AppRespository(UserManager<AppUserIdentity> userManager, RoleManager<AppRoleIdentity> roleManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.configuration = configuration;
            this.roleManager = roleManager;

        }

        public async Task<IEnumerable<AppRoleIdentity>> GetAllRole()
        {
            var query = await roleManager.Roles.ToListAsync();
            return query;
        }
    }
}

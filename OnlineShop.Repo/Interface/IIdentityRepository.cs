using Microsoft.AspNetCore.Identity;
using OnlineShop.Data.Entities.CategoryClass;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Data.Entities.Product;
using OnlineShop.DTO.ViewModels;
using OnlineShop.DTO.ViewModels.Identiry;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Interface
{
    public interface IIdentityRepository
    {
        public Task<IdentityResult> SignUpAsync(SignUpModel model, String role);

        public Task<string> SignInAsync(SignInModel model);

        public Task<IEnumerable<AppUserIdentity>> GetAllUser();

        public Task<AppUserIdentity> GetUserById(String id);

        public Task<AppUserIdentity> UpdateUser(String id, ContactInformationModel model);

    }
}

using OnlineShop.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Repo.Interface
{
    public interface IAppRoleRepository
    {

        public Task<IEnumerable<AppRoleIdentity>> GetAllRole();
    }
}

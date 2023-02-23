using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.DTO.ViewModels;

namespace OnlineShop.Service.Interfaces
{
    public interface IContactService
    {
        Task<List<Contact>> GetContact();
        Task<Contact> GetContactById(Guid id);
        Task <Contact> AddContact(Contact contact);
        Task<Contact> EditContact(Contact contact);
        Task<Contact> DeleteContact(Guid id);
    }
}

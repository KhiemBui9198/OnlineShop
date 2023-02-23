using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.DTO.ViewModels;

namespace OnlineShop.Repo.Interfaces
{
    public interface IContactRepository
    {
        Task<IEnumerable<Contact>> GetContacts();
        Task<Contact> UpdateContact(Guid id, ContactViewModel contact);
        Task<Contact> GetContactById(Guid id);
        Task<Contact> AddContact(ContactViewModel contact);
        Task<bool> DeleteContact(Guid id);
    }
}

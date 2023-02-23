using OnlineShop.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineShop.Repo.Interfaces;
using OnlineShop.DTO.ViewModels;
using OnlineShop.Data.Entities.Identity;

namespace OnlineShop.Repo.Repository
{

    public class ContactRepository : IContactRepository
    {
        private readonly DataBaseContext _dataBaseContext;
        public ContactRepository(DataBaseContext dbContext)
        {
            _dataBaseContext = dbContext;
        }

        public async Task<IEnumerable<Contact>> GetContacts()
        {
            var query = await _dataBaseContext.Contacts.ToListAsync();
            return query;
        }
        public async Task<Contact> AddContact(ContactViewModel contact)
        {
            var contacts = new Contact()
            {
                Id = Guid.NewGuid(),
                Address = contact.Address,
                Email = contact.Email,
                FullName = contact.FullName,
                Phone = contact.Phone,
                CreatedAt = DateTime.Now,
                LastUpdatedAt = DateTime.Now,
            };
            _dataBaseContext.Contacts.Add(contacts);
            await _dataBaseContext.SaveChangesAsync();
            return contacts;
        }

        public async Task<bool> DeleteContact(Guid id)
        {
            var contact = await _dataBaseContext.Contacts.FirstOrDefaultAsync(item => item.Id == id);
            if (contact != null)
            {
                _dataBaseContext.Remove(contact);
                await _dataBaseContext.SaveChangesAsync();
                return true;
            }
            throw new Exception($"Can not find item with id {id}");
        }

        public async Task<Contact> UpdateContact(Guid id, ContactViewModel contact)
        {
            var model = await _dataBaseContext.Contacts.FirstOrDefaultAsync(item => item.Id == id);
            if (model != null)
            {
                model.FullName = contact.FullName;
                model.Email = contact.Email;
                model.Phone = contact.Phone;
                model.Address = contact.Address;
                model.LastUpdatedAt = DateTime.Now;
                await _dataBaseContext.SaveChangesAsync();
                return model;
            }
            throw new Exception($"Can not find item with id {id}");

        }
        public async Task<Contact> GetContactById(Guid id)
        {
            var contact = await _dataBaseContext.Contacts.FirstOrDefaultAsync(item => item.Id == id);
            return contact;
        }


    }
}

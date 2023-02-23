using Microsoft.EntityFrameworkCore;
using OnlineShop.Data.Entities.Product;
using OnlineShop.Data.Entities.Identity;
using OnlineShop.Data.Entities.CategoryClass;
using OnlineShop.Data.Entities.ManufacturerEntities;
using OnlineShop.Data.Entities.ShopInfor;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using OnlineShop.Data.Configurations;
using Microsoft.VisualStudio.Services.Aad;

namespace OnlineShop.Repo
{
    public class DataBaseContext : IdentityDbContext<AppUserIdentity, IdentityRole,string>
    {

        public DataBaseContext(
            DbContextOptions<DataBaseContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new AppRoleConfiguration());
            modelBuilder.ApplyConfiguration(new AppUserConfiguration());
            modelBuilder.Entity<AppRoleIdentity >().HasData(
               new AppRoleIdentity() { Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "ADMIN", Description="Admin" },
               new AppRoleIdentity() { Name = "Customer", ConcurrencyStamp = "2", NormalizedName = "CUSTOMER", Description="Customer" }
               );
        }

        public DbSet<ShopInfor> ShopInfor { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Manufacturer> Manufacturer { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<ProductImages> ProductImages { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}

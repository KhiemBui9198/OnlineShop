using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShop.Data.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShop.Data.Configurations
{
    public class AppUserConfiguration : IEntityTypeConfiguration<AppUserIdentity>
    {
        public void Configure(EntityTypeBuilder<AppUserIdentity> builder)
        {
            builder.ToTable("AppUsers");
            builder.Property(x => x.FirstName)
                .HasMaxLength(200)
                .IsRequired();
            builder.Property(x => x.LastName)
               .HasMaxLength(200)
               .IsRequired();
            builder.Property(x => x.DateOfBirth)
               .IsRequired();

        }
    }
}

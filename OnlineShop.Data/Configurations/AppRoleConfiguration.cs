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
    public class AppRoleConfiguration: IEntityTypeConfiguration<AppRoleIdentity>
    {
        public void Configure (EntityTypeBuilder<AppRoleIdentity> builder)
        {
            builder.ToTable("AspNetRoles");
            builder.Property(x=> x.Description)
                .HasMaxLength(255)
                .IsRequired();

        }
    }
}

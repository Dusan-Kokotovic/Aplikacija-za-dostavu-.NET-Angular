using Common.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Infrastructure.Configurations
{
    public class JeloConfiguration : IEntityTypeConfiguration<Jelo>
    {
        public void Configure(EntityTypeBuilder<Jelo> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder.Property(x => x.Naziv).HasMaxLength(30);

            builder.Property(x => x.Sastojci).HasMaxLength(100);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();

        }
    }
}

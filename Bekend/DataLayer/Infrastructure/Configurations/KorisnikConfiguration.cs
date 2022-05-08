using Common.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace DataLayer.Infrastructure.Configurations
{
    public class KorisnikConfiguration : IEntityTypeConfiguration<Korisnik>
    {
        public void Configure(EntityTypeBuilder<Korisnik> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            builder.HasIndex(x => x.Username).IsUnique();

            builder.HasMany(x => x.PorudzbineDostavljaca)
                  .WithOne(x => x.Deliverer)
                  .IsRequired(false);
            builder.HasMany(x => x.PorudzbineKupca)
                  .WithOne(x => x.Client)
                  .IsRequired(false);
        }
    }
}

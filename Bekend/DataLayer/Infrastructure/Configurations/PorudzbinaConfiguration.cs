using Common.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace DataLayer.Infrastructure.Configurations
{
    public class PorudzbinaConfiguration : IEntityTypeConfiguration<Porudzbina>
    {
        public void Configure(EntityTypeBuilder<Porudzbina> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();

            //builder.Property(x => x.Adress).HasMaxLength(30);

            //builder.Property(x => x.Status).HasMaxLength(30);

            //builder.Property(x => x.Comment).HasMaxLength(150);

            builder.HasOne(x => x.Deliverer)
                   .WithMany(x => x.PorudzbineDostavljaca)
                   .HasForeignKey(x => x.DelivererId).IsRequired(false);


            builder.HasOne(x => x.Client)
                   .WithMany(x => x.PorudzbineKupca)
                   .HasForeignKey(x => x.ClientId).IsRequired(false);



        }
    }
}

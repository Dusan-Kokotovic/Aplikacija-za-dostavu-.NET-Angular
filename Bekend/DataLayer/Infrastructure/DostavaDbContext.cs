using Common.Models;
using Microsoft.EntityFrameworkCore;


namespace DataLayer.Infrastructure
{
    public class DostavaDbContext : DbContext
    {

        //Ovde definisemo DbSetove (tabele)
        public DbSet<Korisnik> Korisnici { get; set; }
        public DbSet<Jelo> Jela { get; set; }
        public DbSet<Porudzbina> Porudzbine { get; set; }
        public DostavaDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DostavaDbContext).Assembly);
        }
    }
}

using Common.Models;
using Contracts.RepositoryInterfaces;
using DataLayer.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class KorisnikRepository : IKorisnikRepository
    {
        private readonly DostavaDbContext _dbContext;

        public KorisnikRepository(DostavaDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Korisnik Add(Korisnik newModel)
        {
            _dbContext.Korisnici.Add(newModel);
            _dbContext.SaveChanges();
            return newModel;
        }

        public Korisnik Delete(int id)
        {
            Korisnik korisnik = _dbContext.Korisnici.Find((int)id);
            _dbContext.Korisnici.Remove(korisnik);
            _dbContext.SaveChanges();
            return korisnik;
        }

        public IEnumerable<Korisnik> Get()
        {
            List<Korisnik> lista = _dbContext.Korisnici.ToList();
            return _dbContext.Korisnici.ToList();
        }

        public Korisnik GetById(long id)
        {
            return _dbContext.Korisnici.Find((int)id);
        }

        //public IEnumerable<Porudzbina> GetPorudzbine(int id)
        //{
        //    Korisnik korisnik = _dbContext.Korisnici.Find((int)id);
        //    return korisnik.PorudzbineKupca;
        //}

        //UPDATE BEZ PORUDZBINA
        public Korisnik Update(long id, Korisnik newModelData)
        {
            Korisnik korisnik = _dbContext.Korisnici.Find((int)id);
            korisnik.Username = newModelData.Username;
            korisnik.Role = newModelData.Role;
            korisnik.Email = newModelData.Email;
            korisnik.Adress = newModelData.Adress;
            korisnik.Status = newModelData.Status;
            korisnik.Date = newModelData.Date;
            korisnik.Image = newModelData.Image;
            korisnik.Token = newModelData.Token;
            korisnik.Password = newModelData.Password;
            //korisnik.PorudzbineDostavljaca = newModelData.PorudzbineDostavljaca;
            //korisnik.PorudzbineKupca = newModelData.PorudzbineKupca;
            _dbContext.SaveChanges();
            return korisnik;
        }
    }
}

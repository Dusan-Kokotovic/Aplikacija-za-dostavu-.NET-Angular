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
    public class PorudzbinaRepository : IPorudzbinaRepository
    {
        private readonly DostavaDbContext _dbContext;

        public PorudzbinaRepository(DostavaDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Porudzbina Add(Porudzbina newModel)
        {
            _dbContext.Porudzbine.Add(newModel);
            _dbContext.SaveChanges();
            return newModel;
        }

        public Porudzbina Delete(int id)
        {
            Porudzbina porudzbina = _dbContext.Porudzbine.Find((int)id);
            _dbContext.Porudzbine.Remove(porudzbina);
            _dbContext.SaveChanges();
            return porudzbina;
        }

        public IEnumerable<Porudzbina> Get()
        {
            List<Porudzbina> porudzbine = _dbContext.Porudzbine.ToList();
            foreach (Porudzbina porudzbina in porudzbine)
            {
                if (porudzbina.DeliveryTime < DateTime.Now)
                {
                    porudzbina.Status = "Dostavljeno";
                }
            }
            _dbContext.SaveChanges();
            return porudzbine;
        }

        public Porudzbina GetById(long id)
        {
            return _dbContext.Porudzbine.Find((int)id);
        }

        public IEnumerable<Porudzbina> GetPorudzbineKorisnika(int id)
        {
            List<Porudzbina> porudzbine = _dbContext.Porudzbine.ToList();
            List<Porudzbina> povratna = new List<Porudzbina>();
            foreach(Porudzbina porudzbina in porudzbine)
            {
                if (porudzbina.DeliveryTime < DateTime.Now)
                {
                    porudzbina.Status = "Dostavljeno";
                }
                if (porudzbina.ClientId == id || porudzbina.DelivererId == id)
                {
                    povratna.Add(porudzbina);
                }
            }
            _dbContext.SaveChanges();
            return povratna;
        }

        public IEnumerable<Porudzbina> GetPorudzbineZaDostavu()
        {
            List<Porudzbina> porudzbine = _dbContext.Porudzbine.ToList();
            List<Porudzbina> povratna = new List<Porudzbina>();
            foreach (Porudzbina porudzbina in porudzbine)
            {
                if(porudzbina.DeliveryTime < DateTime.Now)
                {
                    porudzbina.Status = "Dostavljeno";
                }
                if (porudzbina.Status == "Aktivna")
                {
                    povratna.Add(porudzbina);
                }
            }
            _dbContext.SaveChanges();
            return povratna;
        }

        public Porudzbina Update(long id, Porudzbina newModelData)
        {
            Porudzbina porudzbina = _dbContext.Porudzbine.Find((int)id);
            porudzbina.Price = newModelData.Price;
            porudzbina.DeliveryTime = newModelData.DeliveryTime;
            porudzbina.Articles = newModelData.Articles;
            porudzbina.Adress = newModelData.Adress;
            porudzbina.Status = newModelData.Status;
            porudzbina.Comment = newModelData.Comment;
            porudzbina.Client = newModelData.Client;
            porudzbina.ClientId = newModelData.ClientId;
            porudzbina.Deliverer = newModelData.Deliverer;
            porudzbina.DelivererId = newModelData.DelivererId;
            _dbContext.SaveChanges();
            return porudzbina;
        }

        public Porudzbina Prihvati(int id, int newModelData)
        {
            Porudzbina porudzbina = _dbContext.Porudzbine.Find(newModelData);
            porudzbina.Status = "Dostavlja se";
            porudzbina.DelivererId = id;
            porudzbina.DeliveryTime = DateTime.Now.AddMinutes(10);
            _dbContext.SaveChanges();
            return porudzbina;

        }

        public Porudzbina Add1(Porudzbina porudzbina)
        {
            _dbContext.Porudzbine.Add(porudzbina);
            _dbContext.SaveChanges();
            return porudzbina;
        }

        public IEnumerable<Porudzbina> GetTekuce(int id)
        {
            List<Porudzbina> porudzbine = _dbContext.Porudzbine.ToList();
            List<Porudzbina> povratna = new List<Porudzbina>();
            foreach (Porudzbina porudzbina in porudzbine)
            {
                if (porudzbina.DeliveryTime < DateTime.Now)
                {
                    porudzbina.Status = "Dostavljeno";
                }
                if ((porudzbina.ClientId == id || porudzbina.DelivererId == id) && porudzbina.Status == "Dostavlja se")
                {
                    povratna.Add(porudzbina);
                }
            }
            _dbContext.SaveChanges();
            return povratna;
        }
    }
}

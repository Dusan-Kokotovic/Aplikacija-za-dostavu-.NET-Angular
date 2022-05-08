using Common.Models;
using Contracts.RepositoryInterfaces;
using DataLayer.Infrastructure;

namespace DataLayer
{
    public class JeloRepository : IJeloRepository
    {
        private readonly DostavaDbContext _dbContext;

        public JeloRepository(DostavaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Jelo Add(Jelo newModel)
        {
            _dbContext.Jela.Add(newModel);
            _dbContext.SaveChanges();
            return newModel;
        }

        public Jelo Delete(int id)
        {
            Jelo jelo = _dbContext.Jela.Find((int)id);
            _dbContext.Jela.Remove(jelo);
            _dbContext.SaveChanges();
            return jelo;
        }

        public IEnumerable<Jelo> Get()
        {
            return _dbContext.Jela.ToList();
        }

        public Jelo GetById(long id)
        {
            return _dbContext.Jela.Find((int)id);
        }

        public Jelo Update(long id, Jelo newModelData)
        {
            Jelo jelo = _dbContext.Jela.Find((int)id);
            jelo.Naziv = newModelData.Naziv;
            jelo.Sastojci = newModelData.Sastojci;
            jelo.Cijena = newModelData.Cijena;
            _dbContext.SaveChanges();
            return jelo;
        }
    }
}

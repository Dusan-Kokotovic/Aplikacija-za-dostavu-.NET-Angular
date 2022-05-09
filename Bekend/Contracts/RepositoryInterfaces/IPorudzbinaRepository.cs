using Common.Dto;
using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.RepositoryInterfaces
{
    public interface IPorudzbinaRepository : ICrudInterface<Porudzbina>
    {
        IEnumerable<Porudzbina> GetPorudzbineKorisnika(int id);

        IEnumerable<Porudzbina> GetTekuce(int id);


        IEnumerable<Porudzbina> GetPorudzbineZaDostavu();

        Porudzbina Prihvati(int id, int porudzbina);

        Porudzbina Add1(Porudzbina porudzbina);
    }
}

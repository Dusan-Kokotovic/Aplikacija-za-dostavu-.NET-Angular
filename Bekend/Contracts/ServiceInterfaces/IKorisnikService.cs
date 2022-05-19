using Common.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.ServiceInterfaces
{
    public interface IKorisnikService : ICrudInterface<KorisnikDto>
    {
        KorisnikDto Login(KorisnikDto korisnik);
        KorisnikDto Prihvati(int id);
    }
}

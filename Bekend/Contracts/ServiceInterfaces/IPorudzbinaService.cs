using Common.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.ServiceInterfaces
{
    public interface IPorudzbinaService : ICrudInterface<PorudzbinaDto>
    {
        IEnumerable<PorudzbinaDto> GetPorudzbineKorisnika(int id);
        IEnumerable<PorudzbinaDto> GetPorudzbineZaDostavu();
        
        PorudzbinaDto Prihvati(int id, int porudzbina);

        PorudzbinaDto2 Add1(PorudzbinaDto2 porudzbina);
    }
}

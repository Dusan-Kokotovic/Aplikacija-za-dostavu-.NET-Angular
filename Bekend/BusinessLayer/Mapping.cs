using AutoMapper;
using Common.Dto;
using Common.Models;
using System.Text;

namespace BussinesLayer
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            //CreateMap<Korisnik, KorisnikDto>().ReverseMap();
            CreateMap<Jelo, JeloDto>().ReverseMap();
            CreateMap<Porudzbina, PorudzbinaDto>().ReverseMap();
        }

    }
}

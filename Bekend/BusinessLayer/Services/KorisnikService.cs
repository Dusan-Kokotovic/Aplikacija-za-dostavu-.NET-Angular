using AutoMapper;
using Common.Dto;
using Common.Models;
using Contracts.RepositoryInterfaces;
using Contracts.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class KorisnikService : IKorisnikService
    {
        private readonly IKorisnikRepository _repository;
        private readonly IMapper _mapper;
        public KorisnikService(IKorisnikRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public KorisnikDto Add(KorisnikDto newModel)
        {
            return MapKorisnikDto(_repository.Add(MapKorisnik(newModel)));
        }

        public KorisnikDto Delete(int id)
        {
            return MapKorisnikDto(_repository.Delete(id));
        }

        public IEnumerable<KorisnikDto> Get()
        {
            return MapList(_repository.Get());
        }

        public KorisnikDto GetById(long id)
        {
            KorisnikDto kor = MapKorisnikDto(_repository.GetById(id));
            return kor;//MapKorisnikDto(_repository.GetById(id));
        }

        public KorisnikDto Update(long id, KorisnikDto newModelData)
        {
            return MapKorisnikDto(_repository.Update(id,MapKorisnik(newModelData)));
        }

        public Korisnik MapKorisnik(KorisnikDto dto)
        {
            Korisnik korisnik = new Korisnik
            {
                Id = dto.Id,
                Name = dto.Name,
                Username = dto.Username,
                Password = dto.Password,
                Email = dto.Email,
                Role = dto.Role,
                Date = dto.Date,
                Adress = dto.Adress,
                Token = dto.Token,
                Image = Encoding.ASCII.GetBytes(dto.Image),
                Status = dto.Status,
                PorudzbineDostavljaca = (dto.Role == "Dostavljac") ? dto.Porudzbine : null,
                PorudzbineKupca = (dto.Role == "Potrosac") ? dto.Porudzbine : null
            };
            return korisnik;
        }

        public KorisnikDto MapKorisnikDto(Korisnik k)
        {
            KorisnikDto korisnik = new KorisnikDto
            {
                Id = k.Id,
                Name = k.Name,
                Username = k.Username,
                Password = k.Password,
                Email = k.Email,
                Role = k.Role,
                Date = k.Date,
                Adress = k.Adress,
                Token = k.Token,
                Image = Encoding.Default.GetString(k.Image),
                Status = k.Status,
                Porudzbine = (k.Role == "Dostavljac") ? k.PorudzbineDostavljaca : k.PorudzbineKupca
            };
            return korisnik;
        }

        public IEnumerable<KorisnikDto> MapList(IEnumerable<Korisnik> korisnici)
        {
            List<KorisnikDto> value = new List<KorisnikDto>();
            foreach(Korisnik k in korisnici)
            {
                KorisnikDto korisnik = new KorisnikDto
                {
                    Id = k.Id,
                    Name = k.Name,
                    Username = k.Username,
                    Password = k.Password,
                    Email = k.Email,
                    Role = k.Role,
                    Date = k.Date,
                    Adress = k.Adress,
                    Status = k.Status,
                    Token = k.Token,
                    Image = Encoding.Default.GetString(k.Image),
                    Porudzbine = new List<Porudzbina>() 
                };
                value.Add(korisnik);
            }
            return value;
        }
    }
}

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
    public class PorudzbinaService : IPorudzbinaService
    {
        private readonly IPorudzbinaRepository _repository;
        private readonly IMapper _mapper;
        public PorudzbinaService(IPorudzbinaRepository reposiroty, IMapper mapper)
        {
            _repository = reposiroty;
            _mapper = mapper;
        }
        public PorudzbinaDto Add(PorudzbinaDto newModel)
        {
            return _mapper.Map<PorudzbinaDto>(_repository.Add(_mapper.Map<Porudzbina>(newModel)));
        }

        public PorudzbinaDto Delete(int id)
        {
            return _mapper.Map<PorudzbinaDto>(_repository.Delete(id));
        }

        public IEnumerable<PorudzbinaDto> Get()
        {
            return _mapper.Map<IEnumerable<PorudzbinaDto>>(_repository.Get());
        }

        public PorudzbinaDto GetById(long id)
        {
            return _mapper.Map<PorudzbinaDto>(_repository.GetById(id));
        }

        public IEnumerable<PorudzbinaDto> GetPorudzbineKorisnika(int id)
        {
            return _mapper.Map<IEnumerable<PorudzbinaDto>>(_repository.GetPorudzbineKorisnika(id));
        }

        public IEnumerable<PorudzbinaDto> GetPorudzbineZaDostavu()
        {
            return _mapper.Map<IEnumerable<PorudzbinaDto>>(_repository.GetPorudzbineZaDostavu());
        }

        public PorudzbinaDto Update(long id, PorudzbinaDto newModelData)
        {
            return _mapper.Map<PorudzbinaDto>(_repository.Update(id, _mapper.Map<Porudzbina>(newModelData)));
        }

        public PorudzbinaDto Prihvati(int id, int newModelData)
        {
            return _mapper.Map<PorudzbinaDto>(_repository.Prihvati(id, newModelData));
        }

        public PorudzbinaDto2 Add1(PorudzbinaDto2 porudzbina)
        {
            Porudzbina value = ConvertPorudzbina(porudzbina);
            return ConvertPorudzbinaDto(_repository.Add1(value));
        }

        public Porudzbina ConvertPorudzbina(PorudzbinaDto2 porudzbina)
        {
            Porudzbina value = new Porudzbina
            {
                Id = porudzbina.Id,
                Price = porudzbina.Price,
                DeliveryTime = DateTime.MaxValue,
                Articles = porudzbina.Articles,
                Adress = porudzbina.Adress,
                Status = porudzbina.Status,
                Comment = porudzbina.Comment,
                ClientId = porudzbina.ClientId
            };
            return value;

        }

        public PorudzbinaDto2 ConvertPorudzbinaDto(Porudzbina porudzbina)
        { 
            PorudzbinaDto2 value = new PorudzbinaDto2
            {
                Id = porudzbina.Id,
                Price = porudzbina.Price,
                DeliveryTime = DateTime.MaxValue,
                Articles = porudzbina.Articles,
                Adress = porudzbina.Adress,
                Status = porudzbina.Status,
                Comment = porudzbina.Comment,
                ClientId = porudzbina.ClientId
            };
            return value;

        }
    }
}

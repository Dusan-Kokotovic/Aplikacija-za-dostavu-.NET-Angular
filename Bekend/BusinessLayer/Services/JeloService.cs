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
    public class JeloService : IJeloService
    {
        private readonly IJeloRepository _repository;
        private readonly IMapper _mapper;
        public JeloService(IJeloRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public JeloDto Add(JeloDto newModel)
        {
           return _mapper.Map<JeloDto>(_repository.Add(_mapper.Map<Jelo>(newModel)));
        }

        public JeloDto Delete(int id)
        {
            return _mapper.Map<JeloDto>(_repository.Delete(id));
        }

        public IEnumerable<JeloDto> Get()
        {
            return _mapper.Map<IEnumerable<JeloDto>>(_repository.Get());
        }

        public JeloDto GetById(long id)
        {
           return _mapper.Map<JeloDto>(_repository.GetById(id));
        }

        public JeloDto Update(long id, JeloDto newModelData)
        {
            return _mapper.Map<JeloDto>(_repository.Update(id, _mapper.Map<Jelo>(newModelData)));
        }
    }
}

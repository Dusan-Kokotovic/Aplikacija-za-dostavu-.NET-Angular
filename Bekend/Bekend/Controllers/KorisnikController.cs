using Common.Dto;
using Contracts.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bekend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnikController : ControllerBase
    {
        private readonly IKorisnikService _korisnikService;
        public KorisnikController(IKorisnikService korisnikService)
        {
            _korisnikService = korisnikService;
        }
        // GET: api/<KorisnikController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_korisnikService.Get());
        }

        // GET api/<KorisnikController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_korisnikService.GetById(id));
        }

        // POST api/<KorisnikController>
        [HttpPost]
        public IActionResult Post([FromBody] KorisnikDto korisnik)
        {
            return Ok(_korisnikService.Add(korisnik));

        }

        // PUT api/<KorisnikController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] KorisnikDto korisnik)
        {
            return Ok(_korisnikService.Update(id,korisnik));

        }

        // DELETE api/<KorisnikController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_korisnikService.Delete(id));

        }
    }
}

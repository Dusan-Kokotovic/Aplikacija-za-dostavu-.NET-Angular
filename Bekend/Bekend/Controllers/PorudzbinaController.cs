using Common.Dto;
using Contracts.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bekend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorudzbinaController : ControllerBase
    {
        private readonly IPorudzbinaService _porudzbinaService;
        public PorudzbinaController(IPorudzbinaService porudzbinaService)
        {
            _porudzbinaService = porudzbinaService;
        }
        // GET: api/<PorudzbinaController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_porudzbinaService.Get());
        }

        // GET api/<PorudzbinaController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_porudzbinaService.GetById(id));
        }


        [HttpGet("Korisnik/{id}")]
        [Authorize(Roles = "Potrosac,Dostavljac")]
        public IActionResult GetPorudzbineKorisnika(int id)
        {
            return Ok(_porudzbinaService.GetPorudzbineKorisnika(id));
        }

        [HttpGet("Dostava")]
        [Authorize(Roles = "Dostavljac")]
        public IActionResult GetPorudzbineZaDostavu()
        {
            return Ok(_porudzbinaService.GetPorudzbineZaDostavu());
        }

        [HttpGet("TekuceDostave/{id}")]
        [Authorize(Roles = "Potrosac,Dostavljac")]
        public IActionResult GetTekuce(int id)
        {
            return Ok(_porudzbinaService.GetTekuce(id));
        }

        // POST api/<PorudzbinaController>
        [HttpPost]
        [Authorize(Roles = "Potrosac")]
        public IActionResult Post([FromBody] PorudzbinaDto2 porudzbina)
        {
            return Ok(_porudzbinaService.Add1(porudzbina));
        }

        // PUT api/<PorudzbinaController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] PorudzbinaDto porudzbina)
        {
            return Ok(_porudzbinaService.Update(id,porudzbina));
        }

        [HttpPut("Prihvati/{id}")]
        [Authorize(Roles = "Dostavljac")]
        public IActionResult Prihvati(int id, [FromBody] int porudzbina)
        {
            return Ok(_porudzbinaService.Prihvati(id, porudzbina));
        }

        // DELETE api/<PorudzbinaController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return NotFound();
        }
    }
}

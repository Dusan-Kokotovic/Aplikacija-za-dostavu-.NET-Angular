using BusinessLayer;
using Common.Dto;
using Contracts.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bekend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnikController : ControllerBase
    {
        private readonly IKorisnikService _korisnikService;
        private readonly IEmailSender _emailSender;
        public KorisnikController(IKorisnikService korisnikService,IEmailSender emailSender)
        {
            _korisnikService = korisnikService;
            _emailSender = emailSender;
        }
        // GET: api/<KorisnikController>
        [HttpGet]
        [Authorize(Roles = "Admin")]
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
        [HttpGet("Prihvati/{id}")]
        [Authorize(Roles = "Dostavljac")]
        public IActionResult Prihvati(int id)
        {
            return Ok(_korisnikService.Prihvati(id));

        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] KorisnikDto dto)
        {
            return Ok(_korisnikService.Login(dto));
        }


        // POST api/<KorisnikController>
        [HttpGet("Mail/{mail}")]
        [Authorize(Roles = "Admin")]
        public IActionResult Post(string mail)
        {
            var message = new Message(new string[] { mail }, "Test email", "Vas nalog je verifikovan, sportski pozdrav.");
            _emailSender.SendEmail(message);
            return Ok();

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
            return NotFound();

        }
    }
}

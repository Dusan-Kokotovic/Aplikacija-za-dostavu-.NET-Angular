using Common.Dto;
using Contracts.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bekend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JeloController : ControllerBase
    {
        private readonly IJeloService _jeloService;
        public JeloController(IJeloService jeloService)
        {
            _jeloService = jeloService;
        }
        // GET: api/<JeloController>
        [HttpGet]
        [Authorize(Roles = "Admin,Potrosac")]
        public IActionResult Get()
        {
            return Ok(_jeloService.Get());
        }

        // GET api/<JeloController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return NotFound();
        }

        // POST api/<JeloController>
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public IActionResult Post([FromBody] JeloDto jelo)
        {
            return Ok(_jeloService.Add(jelo));
        }

        // PUT api/<JeloController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] JeloDto jelo)
        {
            return NotFound();
        }

        // DELETE api/<JeloController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return NotFound();
        }
    }
}

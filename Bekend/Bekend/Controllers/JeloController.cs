using Common.Dto;
using Contracts.ServiceInterfaces;
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
        public IActionResult Get()
        {
            return Ok(_jeloService.Get());
        }

        // GET api/<JeloController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_jeloService.GetById(id));
        }

        // POST api/<JeloController>
        [HttpPost]
        public IActionResult Post([FromBody] JeloDto jelo)
        {
            return Ok(_jeloService.Add(jelo));
        }

        // PUT api/<JeloController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] JeloDto jelo)
        {
            return Ok(_jeloService.Update(id,jelo));
        }

        // DELETE api/<JeloController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_jeloService.Delete(id));
        }
    }
}

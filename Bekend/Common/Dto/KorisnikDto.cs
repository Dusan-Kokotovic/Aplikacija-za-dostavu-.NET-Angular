using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class KorisnikDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public DateTime Date { get; set; }
        public string Image { get; set; }
        public string Adress { get; set; }
        public string Token { get; set; }
        public string Status { get; set; }

        public List<Porudzbina> Porudzbine { get; set; }
    }
}

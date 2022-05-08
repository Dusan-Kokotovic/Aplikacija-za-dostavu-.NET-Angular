using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    public class Korisnik
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public DateTime Date { get; set; }
        public byte[] Image { get; set; }
        public string Adress { get; set; }
        public string Token { get; set; }
        public string Status { get; set; }
        public List<Porudzbina> PorudzbineKupca { get; set; }
        public List<Porudzbina> PorudzbineDostavljaca { get; set; }
    }
}

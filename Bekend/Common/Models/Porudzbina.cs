using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    public class Porudzbina
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public DateTime DeliveryTime { get; set; }
        public string Articles { get; set; }
        public string Adress { get; set; }
        public string Status { get; set; }
        public string Comment { get; set; }
        public Korisnik Client { get; set; }
        public int? ClientId { get; set; }
        public Korisnik Deliverer { get; set; }
        public int? DelivererId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Models
{
    public class Jelo
    {
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Sastojci { get; set; }
        public int Cijena { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class PorudzbinaDto2
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public DateTime DeliveryTime { get; set; }
        public string Articles { get; set; }
        public string Adress { get; set; }
        public string Status { get; set; }
        public string Comment { get; set; }
        public int? ClientId { get; set; }

    }
}

﻿using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.RepositoryInterfaces
{
    public interface IKorisnikRepository : ICrudInterface<Korisnik>
    {
        Korisnik Prihvati(int id);
    }
}

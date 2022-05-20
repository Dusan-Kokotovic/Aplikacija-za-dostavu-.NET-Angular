using AutoMapper;
using Common.Dto;
using Common.Models;
using Contracts.RepositoryInterfaces;
using Contracts.ServiceInterfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BusinessLayer
{
    public class KorisnikService : IKorisnikService
    {
        private readonly IKorisnikRepository _repository;
        private readonly IPorudzbinaRepository _porudzbinaRepository;
        private readonly IMapper _mapper;
        private readonly IConfigurationSection _secretKey;

        public KorisnikService(IKorisnikRepository repository, IPorudzbinaRepository porudzbinaRepository, IMapper mapper, IConfiguration config)
        {
            _repository = repository;
            _mapper = mapper;
            _porudzbinaRepository = porudzbinaRepository;
            _secretKey = config.GetSection("SecretKey");
        }
        public KorisnikDto Add(KorisnikDto newModel)
        {
            if (newModel.Name == "" || newModel.Adress == "" || newModel.Status == "" || newModel.Password == "" || newModel.Role == "" || newModel.Username == "" || newModel.Email == "")
            {
                return null;
            }
            newModel.Password = BCrypt.Net.BCrypt.HashPassword(newModel.Password);
            return MapKorisnikDto(_repository.Add(MapKorisnik(newModel)));
            
        }

        public KorisnikDto Delete(int id)
        {
            return MapKorisnikDto(_repository.Delete(id));
        }

        public IEnumerable<KorisnikDto> Get()
        {
            return MapList(_repository.Get());
        }

        public KorisnikDto GetById(long id)
        {
            KorisnikDto kor = MapKorisnikDto(_repository.GetById(id));
            return kor;//MapKorisnikDto(_repository.GetById(id));
        }

        public KorisnikDto Update(long id, KorisnikDto newModel)
        {
            if (newModel.Name == "" || newModel.Adress == "" || newModel.Status == "" || newModel.Password == "" || newModel.Role == "" || newModel.Username == "" || newModel.Email == "")
            {
                return null;
            }
            newModel.Password = BCrypt.Net.BCrypt.HashPassword(newModel.Password);
            return MapKorisnikDto(_repository.Update(id, MapKorisnik(newModel)));

        }

        public Korisnik MapKorisnik(KorisnikDto dto)
        {
            Korisnik korisnik = new Korisnik
            {
                Id = dto.Id,
                Name = dto.Name,
                Username = dto.Username,
                Password = dto.Password,
                Email = dto.Email,
                Role = dto.Role,
                Date = dto.Date,
                Adress = dto.Adress,
                Token = dto.Token,
                Image = Encoding.ASCII.GetBytes(dto.Image),
                Status = dto.Status,
                PorudzbineDostavljaca = (dto.Role == "Dostavljac") ? dto.Porudzbine : null,
                PorudzbineKupca = (dto.Role == "Potrosac") ? dto.Porudzbine : null
            };
            return korisnik;
        }

        public KorisnikDto MapKorisnikDto(Korisnik k)
        {
            KorisnikDto korisnik = new KorisnikDto
            {
                Id = k.Id,
                Name = k.Name,
                Username = k.Username,
                Password = k.Password,
                Email = k.Email,
                Role = k.Role,
                Date = k.Date,
                Adress = k.Adress,
                Token = k.Token,
                Image = Encoding.Default.GetString(k.Image),
                Status = k.Status,
                Porudzbine = (k.Role == "Dostavljac") ? k.PorudzbineDostavljaca : k.PorudzbineKupca
            };
            return korisnik;
        }

        public IEnumerable<KorisnikDto> MapList(IEnumerable<Korisnik> korisnici)
        {
            List<KorisnikDto> value = new List<KorisnikDto>();
            foreach(Korisnik k in korisnici)
            {
                KorisnikDto korisnik = new KorisnikDto
                {
                    Id = k.Id,
                    Name = k.Name,
                    Username = k.Username,
                    Password = k.Password,
                    Email = k.Email,
                    Role = k.Role,
                    Date = k.Date,
                    Adress = k.Adress,
                    Status = k.Status,
                    Token = k.Token,
                    Image = Encoding.Default.GetString(k.Image),
                    Porudzbine = new List<Porudzbina>() 
                };
                value.Add(korisnik);
            }
            return value;
        }

        public KorisnikDto Login(KorisnikDto dto)
        {
            Korisnik user = new Korisnik();
            try
            {
                 user = _repository.Get().First(x => x.Username == dto.Username);
            }
            catch(Exception e)
            {
                return null;
            }

            if (BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))//Uporedjujemo hes pasvorda iz baze i unetog pasvorda
            {
                List<Claim> claims = new List<Claim>();
                //Mozemo dodati Claimove u token, oni ce biti vidljivi u tokenu i mozemo ih koristiti za autorizaciju
                if (user.Role == "Admin")
                    claims.Add(new Claim(ClaimTypes.Role, "Admin")); //Add user type to claim
                if (user.Role == "Potrosac")
                    claims.Add(new Claim(ClaimTypes.Role, "Potrosac")); //Add user type to claim
                if (user.Role == "Dostavljac")
                    claims.Add(new Claim(ClaimTypes.Role, "Dostavljac")); //Add user type to claim
                //Kreiramo kredencijale za potpisivanje tokena. Token mora biti potpisan privatnim kljucem
                //kako bi se sprecile njegove neovlascene izmene
                SymmetricSecurityKey secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secretKey.Value));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:44336",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(20), 
                    signingCredentials: signinCredentials 
                );
                string tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return new KorisnikDto() { Username = dto.Username, Id = user.Id, Token = tokenString,Role = user.Role};
            }
            else
            {
                return null;
            }
        }

        public KorisnikDto Prihvati(int id)
        {
            return MapKorisnikDto(_repository.Prihvati(id));
        }

       
    }
}

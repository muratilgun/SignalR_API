using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR.API.Models
{
    public class Team
    {
        
        public Team()
        {
            Users = new List<User>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        // Bunun virtual yapılma sebebi Lazy Loading desteği
        // Ayrıca entity üzerindeki değişiklikleri yakalayabilsin diye
        // ICollection ile beraber gelen Add Contains gibi metotlarını
        // kullanmak için ICollection tanımlandı.

        public virtual ICollection<User> Users { get; set; }
    }
}

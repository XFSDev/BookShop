using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projekt1.Models
{
    public class Ksiazka
    {
        public int Id { get; set; }
        public string Nazwa { get; set; }
        public DateTime DataWydania { get; set; }
        public decimal Cena { get; set; }
        public string Autor { get; set; }
        public string Wydawnictwo { get; set; }
        public bool Audiobook { get; set; }
        public bool Ebook { get; set; }
        public bool Okazja { get; set; }
        
        public virtual ICollection<Nosnik> Nosniki { get; set; }
    }
}
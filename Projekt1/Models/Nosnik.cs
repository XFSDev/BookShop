using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Projekt1.Models
{
    public class Nosnik
    {
        public int Id { get; set; }       
        public string Rodzaj { get; set; }      
        public virtual ICollection<Ksiazka> ksiazki { get; set; }
    }
}
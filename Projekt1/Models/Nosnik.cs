using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Projekt1.Models
{
    public class Nosnik
    {
        [Key, ForeignKey("ksiazka")]
        public int Id { get; set; }       
        public bool PenDrive { get; set; }
        public bool CD { get; set; }
        public bool DVD { get; set; }
        public Ksiazka ksiazka { get; set; }
    }
}
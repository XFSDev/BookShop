using Projekt1.DAL;
using Projekt1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projekt1.Infrastructure
{
    public class CarrierManager : IGetCarriers
    {
        KsiegarniaContext db = null;
        public CarrierManager()
        {
            this.db = new KsiegarniaContext();
        }

        public CarrierManager(KsiegarniaContext context)
        {
            this.db = context;
        }

        public List<string> GetCarrierByBookId(int id)
        {
            Ksiazka ksiazka = db.Ksiazki.Where(m => m.Id == id).First();
            var nosnikList = ksiazka.Nosniki;
            List<string> data= new List<string>();
            foreach (Nosnik item in nosnikList)
            {
                data.Add(item.Rodzaj);
            }
            //var data= db.Nosniki.Where(m => m.ksiazki.Select( n=> n.Id).Contains(id));
            return data;            
        }
    }
}
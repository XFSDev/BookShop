using Projekt1.DAL;
using Projekt1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projekt1.Infrastructure
{
    public class CarrierManager : IGetCarriers<Nosnik>
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

        public Nosnik GetCarrierByBookId(int id)
        {
            return db.Nosniki.Where(m =>m.Id==id).First();
             
        }
    }
}
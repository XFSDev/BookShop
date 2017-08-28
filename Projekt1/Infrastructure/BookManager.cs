using Newtonsoft.Json;
using Projekt1.DAL;
using Projekt1.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projekt1.Infrastructure
{
    public class BookManager : IGetBooks<Ksiazka>
    {
        KsiegarniaContext db = null;
        public BookManager()
        {
            this.db = new KsiegarniaContext();
        }

        public BookManager(KsiegarniaContext context)
        {
            this.db = context;
        }
        public IEnumerable<Ksiazka> GetAllBooks()
        {
            return db.Ksiazki.OrderBy(m => m.Nazwa);
        }

        public IEnumerable<Ksiazka> GetAllEbooks()
        {
            return db.Ksiazki.Where(m => m.Ebook == true).OrderBy(m => m.Nazwa);
        }

        public IEnumerable<Ksiazka> GetAllAudiobooks()
        {
            return db.Ksiazki.Where(m => m.Audiobook == true).OrderBy(m => m.Nazwa);
        }

        public IEnumerable<Ksiazka> GetAllNews()
        {
            DateTime timeAdd = DateTime.Now.AddDays(-14);
            DateTime timeNow = DateTime.Now;           
            return db.Ksiazki.Where(m => m.DataWydania <timeNow && m.DataWydania> timeAdd)
                .OrderBy(m => m.Nazwa);
        }

        public IEnumerable<Ksiazka> GetAllPreviews()
        {
            DateTime timeNow = DateTime.Now;
            DateTime timetoAdd = DateTime.Now.AddDays(14);
            return db.Ksiazki.Where(m => m.DataWydania > timeNow && m.DataWydania < timetoAdd)
                .OrderBy(m => m.Nazwa);
        }

        public IEnumerable<Ksiazka> GetAllopportunitys()
        {
            return db.Ksiazki.Where(m => m.Okazja == true).OrderBy(m => m.Nazwa);          
        }

        public Ksiazka GetBookById(int id)
        {
            return db.Ksiazki.Where(m=> m.Id == id).First();
        }
    }
}
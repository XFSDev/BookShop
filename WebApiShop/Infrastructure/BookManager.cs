using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiShop.Models;

namespace WebApiShop.Infrastructure
{
    public class BookManager:IRepository<Ksiazka>
    {
        Entities db = null;
        public BookManager()
        {
            this.db = new Entities();
        }

        public BookManager(Entities context)
        {
            this.db = context;
        }
        public IEnumerable<Ksiazka> GetAllBooks()
        {   
            return db.Ksiazka.OrderBy(m => m.Nazwa);
        }

        public IEnumerable<Ksiazka> Get(string type, string tytle, string publishinghouse)
        {
            string Ebook = "Ebook";
            string Audiobook = "Audiobook";
            if (Ebook.Equals(type, StringComparison.OrdinalIgnoreCase)) return
                         db.Ksiazka.Where(m => m.Ebook == true && m.Nazwa.Equals(tytle, StringComparison.OrdinalIgnoreCase) &&
                         m.Wydawnictwo.Equals(publishinghouse, StringComparison.OrdinalIgnoreCase)).OrderBy(m => m.Nazwa);
            else if (Audiobook.Equals(type, StringComparison.OrdinalIgnoreCase)) return
                         db.Ksiazka.Where(m => m.Audiobook == true && m.Nazwa.Equals(tytle, StringComparison.OrdinalIgnoreCase) &&
                         m.Wydawnictwo.Equals(publishinghouse, StringComparison.OrdinalIgnoreCase)).OrderBy(m => m.Nazwa);
            else return null;





        }
    }
}
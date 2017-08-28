using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace Projekt1.Infrastructure
{
    public interface IGetBooks<T> where T : class
    {
        IEnumerable<T> GetAllBooks();
        IEnumerable<T> GetAllEbooks();
        IEnumerable<T> GetAllAudiobooks();
        IEnumerable<T> GetAllNews();
        IEnumerable<T> GetAllPreviews();
        IEnumerable<T> GetAllopportunitys();
        T GetBookById(int id);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiShop.Infrastructure
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAllBooks();
        IEnumerable<T> Get(string par1, string par2, string par3);
    }
}
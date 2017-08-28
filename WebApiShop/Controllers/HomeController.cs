using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiShop.Infrastructure;

namespace WebApiShop.Controllers
{
    public class BookController : BaseApiController
    {
        BookManager _BookManager = null;
        private BookController()
        {
            _BookManager = new BookManager();
        }
        public HttpResponseMessage GetAllBooks()
        {

            return ToJson(_BookManager.GetAllBooks());
        }
        public HttpResponseMessage Get(string type, string tytle, string publishinghouse)
        {
            return ToJson(_BookManager.Get(type,tytle,publishinghouse));
        }
    }
}

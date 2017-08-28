using Newtonsoft.Json;
using Projekt1.Infrastructure;
using Projekt1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace Projekt1.Controllers
{   
    
    public class BookApiController : BaseApiController
    {
        BookManager _BookManager = null;
        CarrierManager _CarrierManager = null;
        private BookApiController()
        {
            _BookManager = new BookManager();
            _CarrierManager = new CarrierManager();
        }
        public HttpResponseMessage GetAllBooks()
        {

            return ToJson(_BookManager.GetAllBooks());
        }
        public HttpResponseMessage GetAllEbooks()
        {

            return ToJson(_BookManager.GetAllEbooks());
        }
        public HttpResponseMessage GetAllAudiobooks()
        {

            return ToJson(_BookManager.GetAllAudiobooks());
        }
        public HttpResponseMessage GetAllNews()
        {

            return ToJson(_BookManager.GetAllNews());
        }
        public HttpResponseMessage GetAllPreviews()
        {

            return ToJson(_BookManager.GetAllPreviews());
        }
        public HttpResponseMessage GetAllopportunitys()
        {

            return ToJson(_BookManager.GetAllopportunitys());
        }
        public HttpResponseMessage GetCarrierByBookId(int id)
        {             
            return ToJson(_CarrierManager.GetCarrierByBookId(id));
        }
        public HttpResponseMessage GetBookById(int id)
        {

            return ToJson(_BookManager.GetBookById(id));
        }
    }
}

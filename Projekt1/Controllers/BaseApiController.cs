using Newtonsoft.Json;
using Projekt1.DAL;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Projekt1.Controllers
{
    public class BaseApiController : ApiController
    {
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            }), Encoding.UTF8, "application/json");
            return response;
        }

    }
}

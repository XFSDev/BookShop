using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace WebApiConsoleTest
{
    class BookService
    {
        public void GetAllBooks()
        {
            Console.WriteLine("Pobieram dane... Proszę czekać..");
            using (var client = new WebClient())
            {
                client.Headers.Add("Content-Type:application/json");
                client.Headers.Add("Accept:application/json");
                var result = client.DownloadString("http://localhost:56944/api/Book/GetAllBooks");
                Console.WriteLine(Environment.NewLine + result);
                Console.ReadLine();
                Console.WriteLine("Wczytywanie danych zakończone");
            }
        }
        public void Get()
        {
            Console.WriteLine("Wprowadź parametr: Audiobook lub Ebook ");
            string par1 = Console.ReadLine();
            Console.WriteLine("Wprowadź parametr tytuł ");
            string par2 = Console.ReadLine();
            Console.WriteLine("Wprowadź parametr wydawnictwo ");
            string par3 = Console.ReadLine();
            Console.WriteLine("Pobieram dane... Proszę czekać..");
            string url = string.Format("http://localhost:56944/api/Book/Get/{0}/{1}/{2}", par1, par2, par3);
            using (var client = new WebClient())
            {
                client.Headers.Add("Content-Type:application/json");
                client.Headers.Add("Accept:application/json");
                var result = client.DownloadString(url);
                Console.WriteLine(Environment.NewLine + result);
                Console.ReadLine();
                Console.WriteLine("Wczytywanie danych zakończone");
            }
        }
    }
}

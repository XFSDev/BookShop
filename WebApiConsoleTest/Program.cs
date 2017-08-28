using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiConsoleTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Aby wyświetlić wszystkie książki wpisz GetAll, jeśli chcesz wyszukać z parametrami wprować GetParam.");
            string input = Console.ReadLine();
            if(input=="GetAll")
            { BookService _BookService = new BookService();
                _BookService.GetAllBooks();
            }
            else if (input == "GetParam")
            {
                BookService _BookService = new BookService();
                _BookService.Get();
            }
            else  Console.WriteLine("Wybrałeś złą funkcję!");
        }
    }
}

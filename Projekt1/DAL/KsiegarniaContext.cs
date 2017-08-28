using Projekt1.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Projekt1.DAL
{
    public class KsiegarniaContext : DbContext
    {
        public KsiegarniaContext() : base("KsiegarniaContext")
        { }
        public DbSet<Ksiazka> Ksiazki { get; set; }
        public DbSet<Nosnik> Nosniki { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
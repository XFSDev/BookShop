namespace Projekt1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ksiazka",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nazwa = c.String(),
                        DataWydania = c.DateTime(nullable: false),
                        Cena = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Autor = c.String(),
                        Wydawnictwo = c.String(),
                        Audiobook = c.Boolean(nullable: false),
                        Ebook = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Ksiazka");
        }
    }
}

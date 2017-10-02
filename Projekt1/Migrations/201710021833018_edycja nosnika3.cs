namespace Projekt1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class edycjanosnika3 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.NosnikKsiazka",
                c => new
                    {
                        Nosnik_Id = c.Int(nullable: false),
                        Ksiazka_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Nosnik_Id, t.Ksiazka_Id })
                .ForeignKey("dbo.Nosnik", t => t.Nosnik_Id, cascadeDelete: true)
                .ForeignKey("dbo.Ksiazka", t => t.Ksiazka_Id, cascadeDelete: true)
                .Index(t => t.Nosnik_Id)
                .Index(t => t.Ksiazka_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.NosnikKsiazka", "Ksiazka_Id", "dbo.Ksiazka");
            DropForeignKey("dbo.NosnikKsiazka", "Nosnik_Id", "dbo.Nosnik");
            DropIndex("dbo.NosnikKsiazka", new[] { "Ksiazka_Id" });
            DropIndex("dbo.NosnikKsiazka", new[] { "Nosnik_Id" });
            DropTable("dbo.NosnikKsiazka");
        }
    }
}

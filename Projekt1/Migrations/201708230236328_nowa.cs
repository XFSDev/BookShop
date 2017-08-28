namespace Projekt1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class nowa : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Nosnik",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        PenDrive = c.Boolean(nullable: false),
                        CD = c.Boolean(nullable: false),
                        DVD = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Ksiazka", t => t.Id)
                .Index(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Nosnik", "Id", "dbo.Ksiazka");
            DropIndex("dbo.Nosnik", new[] { "Id" });
            DropTable("dbo.Nosnik");
        }
    }
}

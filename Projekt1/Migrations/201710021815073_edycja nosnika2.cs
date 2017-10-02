namespace Projekt1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class edycjanosnika2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Nosnik", "Id", "dbo.Ksiazka");
            DropIndex("dbo.Nosnik", new[] { "Id" });
            DropPrimaryKey("dbo.Nosnik");
            AlterColumn("dbo.Nosnik", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Nosnik", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Nosnik");
            AlterColumn("dbo.Nosnik", "Id", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Nosnik", "Id");
            CreateIndex("dbo.Nosnik", "Id");
            AddForeignKey("dbo.Nosnik", "Id", "dbo.Ksiazka", "Id");
        }
    }
}

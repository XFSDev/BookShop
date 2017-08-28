namespace Projekt1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dodaniepolaokazja : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Ksiazka", "Okazja", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Ksiazka", "Okazja");
        }
    }
}

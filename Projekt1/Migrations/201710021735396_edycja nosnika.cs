namespace Projekt1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class edycjanosnika : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Nosnik", "Rodzaj", c => c.String());
            DropColumn("dbo.Nosnik", "PenDrive");
            DropColumn("dbo.Nosnik", "CD");
            DropColumn("dbo.Nosnik", "DVD");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Nosnik", "DVD", c => c.Boolean(nullable: false));
            AddColumn("dbo.Nosnik", "CD", c => c.Boolean(nullable: false));
            AddColumn("dbo.Nosnik", "PenDrive", c => c.Boolean(nullable: false));
            DropColumn("dbo.Nosnik", "Rodzaj");
        }
    }
}

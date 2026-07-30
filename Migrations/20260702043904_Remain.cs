using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Course.Migrations
{
    /// <inheritdoc />
    public partial class Remain : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Remainingdays",
                table: "Tasks",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Remainingdays",
                table: "Tasks");
        }
    }
}

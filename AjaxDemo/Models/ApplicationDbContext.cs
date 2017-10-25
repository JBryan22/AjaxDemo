using AjaxDemo.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AjaxDemo.Models
{
    public class ApplicationDbContext : DbContext
	{
        public virtual DbSet<Destination> Destinations { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		=> optionsBuilder
			.UseMySql(@"Server=localhost;Port=8889;database=ajaxdemo;uid=root;pwd=root;");
	}
}
using Course.Models;
using Microsoft.EntityFrameworkCore;

namespace Course.Data
{
    public class CourseContext : DbContext
    {

        public CourseContext(DbContextOptions<CourseContext> options)
            : base(options)
        {
        }

        //public DbSet<Student> Students { get; set; }

        //public DbSet<AvlCourse> Courses { get; set; }

        //public DbSet<Enrollment> Enrollments { get; set; }

        public DbSet<Register> Registers { get; set; }

   

        public DbSet<TodoTask> Tasks { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Course)
                .WithMany(e => e.Enrollments)
                .HasForeignKey(e => e.CourseenrolledId);

            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Student)
                .WithMany(e => e.Enrollments)
                .HasForeignKey(e => e.StudentenrolledId);   
        }
    }
}

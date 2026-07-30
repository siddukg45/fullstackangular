namespace Course.Models
{
    public class Enrollment
    {
        public int? EnrollmentId { get; set; }
        public DateTime? EnrolledDate { get; set; }
        public int CourseenrolledId { get; set; }
        public AvlCourse Course { get; set; }

        public int StudentenrolledId { get; set; }

        public Student Student { get; set; }
    }
}

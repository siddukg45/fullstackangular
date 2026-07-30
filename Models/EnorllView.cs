namespace Course.Models
{
    public class EnorllView
    {



        public Student student { get; set; }

        public IEnumerable<AvlCourse> courses { get; set; }

        public IEnumerable<Enrollment> enrollments { get; set; }
    }
}

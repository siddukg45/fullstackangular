namespace Course.Models
{
    public class AvlCourse
    {
        public int? Id { get; set; }   
        public string CourseName { get; set; }

        public string Description { get; set; }

        public List<Enrollment> Enrollments { get; set; }
        


    }
}

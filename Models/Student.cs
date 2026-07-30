namespace Course.Models
{
    public class Student
    {
        public int? StudentId { get; set; } 
        public string StudentName { get; set; }

        public string StudentUsn { get; set; }

        public string StudentGrade { get; set; }

        public List<Enrollment> Enrollments { get; set; }
    }
}

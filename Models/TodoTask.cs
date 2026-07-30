namespace Course.Models
{
    public class TodoTask

    {
        public int? Id { get; set; }

        public string? Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        

        public string Status { get; set; } = "Pending";

        public DateTime Duedate { get; set; }


        public int? PersonId { get; set; }

       


    }
}

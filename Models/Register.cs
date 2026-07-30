using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Course.Models
{
    public class Register
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Email { get; set; }

        public int? PhoneNumber { get; set; }

        public string Password  { get; set; } = string.Empty;
    }
}

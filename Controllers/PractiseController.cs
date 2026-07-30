using Course.Data;
using Course.Models;
using Course.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Course.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class PractiseController : ControllerBase
    {
        private readonly CourseContext _context;
        private readonly IPractiseService _service;
    
        public PractiseController(CourseContext context,IPractiseService service)
        {
            _context = context;
            _service = service;
        }
        [HttpGet]
        public IActionResult Test()
        {
            return Ok("API Working");
        }

        [HttpPost]
        public async Task<IActionResult> FirstRegister(Register register)
        {
            var find = await _context.Registers.FirstOrDefaultAsync(x => x.Email == register.Email);
            if(find != null)
            {
                return BadRequest("Email already exists");
            }
            var first = await _service.FirstRegister(register);
            return Ok(first);


        }
        [HttpGet("Login")]
        public IActionResult Page()
        {
            return Ok("Login Page");
        }
        [HttpPost("Loginss")]
        public async Task<IActionResult> Login(Register ldto)
        {
            var login = await _service.Login(ldto);
            if (login == null)
            {
                return BadRequest("Invalid Email or Password");
            }
            return Ok(login);
        }
        [HttpGet("Profile/{id}")]
        public async Task<IActionResult> Profile(int id)
        {
            var search = await _service.GetProfile(id);
            if (search == null)
            {
                return NotFound("No ");
            }
            return Ok(search);

        }

        [HttpPost("AddTodo")]

        public async Task<IActionResult> AddToDo(TodoTask todo)
        {
            var add = await _service.Addtodo(todo);
            return Ok(add);
        }

        [HttpGet("GetTodo/{id}")]
            public async Task<IActionResult> GetTodo(int id)
        {
            var find = await _service.GetTodo(id);
            if (find == null)
            {
                return NotFound("No task found");
            }
            return Ok(find);
        }

        [HttpGet("EditTodo/{id}")]

        public async Task<IActionResult> EditTodo(int id)
        {
            var find = await _context.Tasks.FirstOrDefaultAsync(x => x.Id == id);
            if (find == null)
            {
                return NotFound("No task found");
            }
            return Ok(find);
        }

        [HttpPut("saveTodo/{id}")]
        public async Task<IActionResult> SaveTodo(int id, TodoTask todo)
        {
            var save = await _service.Edittodo(todo);
            if (save == null)
            {
                return NotFound("No task found");
            }
            return Ok(save);
        }

        [HttpDelete("DeleteTodo/{id}")]

        public async Task<IActionResult> Deletetodo(int id)
        {
            var find = await _service.DeleteTodo(id);
            if (find == null)
            {
                return NotFound("No task found");
            }
            return Ok(find);
        }

        [HttpGet("Getdelete/{id}")]
        public async Task<IActionResult> Getdel(int id)
        {
            var find = await _context.Tasks.FirstOrDefaultAsync(x => x.Id == id);
            if (find == null) return NotFound("No tasks found");
            return Ok(find);
            
        }
    }
}

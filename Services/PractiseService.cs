using Course.Data;
using Course.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace Course.Services
{
    public class PractiseService : IPractiseService
    {
        private readonly CourseContext _context;

        public PractiseService(CourseContext context)
        {
            _context = context;
        }

        public async Task<Register> FirstRegister(Register register)
        {
            await _context.Registers.AddAsync(register);
            await _context.SaveChangesAsync();
            return register;
        }
        public async Task<Register> Login(Register ldto)
        {
            var user = await _context.Registers.FirstOrDefaultAsync(x => x.Email == ldto.Email && x.Password == ldto.Password);                          
            if (user == null)         
            {                      
                return null;                   
            }                                                            
            return user ;                                           
        }                                                          
                                                            
        public async Task<Register?> GetProfile(int id)
        {
            return await _context.Registers
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<TodoTask> Addtodo(TodoTask todo)
        {
            //var id = _context.Tasks.Max(x => x.Id);
            //todo.Id = id + 1;

            await _context.Tasks.AddAsync(todo);
             await _context.SaveChangesAsync();
            return todo;
        }

        public async Task<List<TodoTask>> GetTodo(int personId)
        {
            var find = await _context.Tasks.Where(x => x.PersonId == personId).ToListAsync();
            if (find == null) return null;
            return find;
        }

        public async Task<TodoTask> Edittodo(TodoTask todo)
        {
            var edit = await _context.Tasks.FindAsync(todo.Id);
            if (edit == null) return null;
            edit.Title = todo.Title;
            edit.Description = todo.Description;
            edit.Duedate = todo.Duedate;
            edit.Status = todo.Status;
       
            await _context.SaveChangesAsync();


            return edit;
        }

        public async Task<TodoTask> DeleteTodo(int id)
        {
            var del = await _context.Tasks.FindAsync(id);
            if (del == null) return null;
            _context.Tasks.Remove(del);
            await _context.SaveChangesAsync();
            return del;
        }
        //public async Task dashcount(int id)
        //{
        //    var 

        //}


    }
    }
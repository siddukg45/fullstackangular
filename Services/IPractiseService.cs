using Course.Models;

namespace Course.Services
{
    public interface IPractiseService
    {
        Task<Register> FirstRegister(Register register);

        Task<Register> Login(Register ldto);

        Task<Register> GetProfile(int id);

        Task<TodoTask> Addtodo(TodoTask todo);

        Task<List<TodoTask>> GetTodo(int id);

        Task<TodoTask> Edittodo(TodoTask todo);

        Task<TodoTask> DeleteTodo(int id);
    }
}                                                                                              

//using Course.Data;
//using Course.Models;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;

//namespace Course.Controllers
//{
//    public class StudentController : Controller
//    {
//        private readonly CourseContext _context;
//        StudentController(CourseContext context)
//        {
//            _context = context;
//        }
//        [HttpGet]
//        public IActionResult StudentIndex()
//        {
//            var students = _context.Students.ToList();
//            return View(students);
//        }

//        [HttpPost]

//        public async Task<IActionResult> StudentCreate(Student student)
//        {
//            if (student == null)
//            {
//                return NotFound();

//            }

//            await _context.Students.AddAsync(student);
//            await _context.SaveChangesAsync();  
//            return RedirectToAction("StudentIndex");
//        }
//        [HttpGet]

//        public  IActionResult CourseIndex()
//        {
//            var courses =  _context.Courses.ToList();
//            return View(courses);
//        }

//        [HttpPost]

//        public async Task<IActionResult> CourseCreate(AvlCourse course)
//        {
//            if (course == null)
//            {
//                return NotFound();
//            }
//            await _context.Courses.AddAsync(course);
//            await _context.SaveChangesAsync();
//            return RedirectToAction("CourseIndex");
//        }

//        [HttpGet("select")]
//        public IEnumerable<object> SelectMany()
//        {
//            return _context.Students.SelectMany(s => s.Enrollments);
//        }
//    }
//}

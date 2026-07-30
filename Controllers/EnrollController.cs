//using Course.Data;
//using Course.Models;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace Course.Controllers
//{
//    public class EnrollController : Controller
//    {
//        private readonly CourseContext _enrollcontext;

//        public EnrollController(CourseContext context)
//        {
//            _enrollcontext = context;
//        }

//        [HttpGet]
//        public IActionResult Index()
//        {
//            return View();
//        }
//        [HttpPost]

//        public async Task<IActionResult> Index(string name, string usn)
//        {
//            var stu = await _enrollcontext.Students.FirstOrDefaultAsync(s => s.StudentUsn == usn);

//            if (stu == null)
//            {
//                ViewBag.Message = "Student not found. Please check the USN and try again.";
//                return View();
//            }

//            return RedirectToAction("Enrollindex", new { studentId = stu.StudentId });


//        }

//        [HttpGet]
//        public async Task<IActionResult> Enrollindex(int studentId)
//        {
//            var student = await _enrollcontext.Students.FirstOrDefaultAsync(s => s.StudentId == studentId);
//            var courses = await _enrollcontext.Courses.ToListAsync();
//            var enrollments = await _enrollcontext.Enrollments
//                .Include(e => e.Course)
//                .Include(e => e.Student)
//                .Where(e => e.StudentenrolledId == studentId)
//                .ToListAsync();

//            var vm = new EnorllView
//            {
//                student = student,
//                courses = courses,
//                enrollments = enrollments
//            };

//            ViewBag.StudentId = studentId;
//            return View(vm);
//        }

//        //[HttpPost]
//        //public IActionResult EnrollIndex(int studentId, int courseId)
//        //{
//        //    var enrollment = new Enrollment
//        //    {
//        //        StudentenrolledId = studentId,
//        //        CourseenrolledId = courseId
//        //    };

//        //    _enrollcontext.Enrollments.Add(enrollment);
//        //    _enrollcontext.SaveChanges();

//        //    return RedirectToAction("Enrollindex", new { studentId = studentId });
//        //}
       

//        [HttpPost]

//        public async Task<IActionResult> EnrollIndex(int studentId, int courseId)
//        {
//            var enroll = new Enrollment
//            {
//                StudentenrolledId = studentId,
//                CourseenrolledId = courseId,
//                EnrolledDate = DateTime.Now
//            };
//            await _enrollcontext.Enrollments.AddAsync(enroll);
//            await _enrollcontext.SaveChangesAsync();
//            return RedirectToAction("Enrollindex", new { studentId = studentId });
//        }
//        [HttpGet]

//        public async Task<IActionResult> EnrolledCourses(int studentId)
//        {
//            var find = await _enrollcontext.Enrollments
//                .Include(e => e.Course)
//                .Include(e => e.Student)
//                .Where(e => e.StudentenrolledId == studentId)
//                .ToListAsync();

//            if (find == null || find.Count == 0)
//            {
//                ViewBag.Message = "No courses found for the student.";
//                return View(new List<Enrollment>());
//            }

//            //// Pass student's name to the view for heading (if available)
//            //ViewBag.StudentName = find.FirstOrDefault()?.Student?.StudentName;
//            //ViewBag.StudentId = studentId;

//            return View(find);
//        }
//    }
//}

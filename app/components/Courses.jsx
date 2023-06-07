import Link from "next/link"

// async function fetchCourses() {
//   const res = await fetch("http://localhost:3000/api/courses")
//   const data = await res.json()

//   return data
// }

const Courses = ({ courses }) => {

    // const courses = await fetchCourses();
  return (
    <div className="courses">
        {courses.map((course) => (
            <div key={course.id} className="card">
                <h2>{course.title}</h2>
                <small>Level: {course.level}</small>
                <p>{course.description}</p>
                <Link target="_blank" className="btn" href={course.link}>Go To Course</Link>
            </div>
        ))}
    </div>
  )
}

export default Courses
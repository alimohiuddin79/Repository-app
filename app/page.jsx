'use client';
import { useState, useEffect } from "react";
import Loading from "./loading";
import Link from "next/link"
import Courses from "./components/Courses"
import Search from "./components/Search";

const HomePage = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);

      setLoading(false);
    }

    fetchCourses();

  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <Search getSearchResults={(results => setCourses(results))}/>
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage
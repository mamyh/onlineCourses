import { useState, useEffect } from "react";
const useCourse = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./fakeDb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);
    return [courses];
}
export default useCourse;
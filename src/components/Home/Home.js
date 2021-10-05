import React from 'react';
import { useHistory } from 'react-router';
import useCourse from '../../utility/useCourse';
import Banner from '../banner/Banner';
import Course from '../courses/course/Course';
import ToolContent from '../tool/ToolContent';
import ToolImages from '../tool/ToolImages';
import "./../tool/Tool.css";

const Home = () => {
    // custom hook 
    const [courses] = useCourse();
    const histry = useHistory();

    const handleClick = () => {
        histry.push('/courses');
    }
    return (
        <div>
            <Banner></Banner>
            <section className=" container tools mb-5 mt-5">
                <ToolContent></ToolContent>
                <ToolImages></ToolImages>
            </section>
            <section className="container popular my-5">
                <h1 className="my-5">Popular courses</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    {courses.map((course, index) =>
                        //   conditional rendering 
                        index <= 2 && <Course key={course.id} course={course}><button className="btn btn-success" onClick={handleClick}>See the courses</button></Course>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Home;

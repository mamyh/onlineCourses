import React from 'react';
import Banner from '../banner/Banner';
import ToolContent from '../tool/ToolContent';
import ToolImages from '../tool/ToolImages';
import "./../tool/Tool.css";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className=" container tools mb-5 mt-5">
                <ToolContent></ToolContent>
                <ToolImages></ToolImages>
            </section>
        </div>
    )
}

export default Home

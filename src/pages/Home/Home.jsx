import React from 'react';
import Slider from '../../components/Slider/Slider';

import { useLoaderData } from 'react-router';
import Gardeners from '../Gardeners/Gardeners';
import Tips from '../Tips/Tips';
import Events from '../Events/Events';
import Facts from '../Facts/Facts';

const Home = () => {
const { gardeners, events } = useLoaderData();
    // console.log(events)
    return (
        <div>
            <Slider></Slider>
            <Gardeners gardeners={gardeners}></Gardeners>
            <Tips gardeners={gardeners}></Tips>
            <Events events={events}></Events>
            <Facts></Facts>
        </div>
    );
};

export default Home;
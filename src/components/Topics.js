import React from 'react';
import classes from '../styles/Topics.module.css';
import Topic from './Topic';
const Topics = () => {
    return (
        <div className={classes.topics}>
            <Topic></Topic>
            <Topic></Topic>
            <Topic></Topic>
            <Topic></Topic>
            <Topic></Topic>
            <Topic></Topic>
        </div>
    );
};

export default Topics;
import React, {useState, useEffect} from 'react';

// Accordion style
const ProjectItem = ({clickHandler, data, active}) => { // Deconstruct once we know all properties that we'll be using
// Pass down active accordion item
// control active accordion item in Project component

    // console.log(active);
    return (
        <section>
            <div className="accordion__head" onClick={() => clickHandler(data.id)}>
                <h2>{data.title}</h2>
                <span className={`accordion__icon ${(active) ? 'accordion__icon--active' : ''}`}></span>
            </div>
            
        </section>
    );
}

export default ProjectItem;
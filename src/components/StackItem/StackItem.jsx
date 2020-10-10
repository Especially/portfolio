import React, { useState } from 'react';
import apache from '../../assets/icons/apache.svg';
import linux from '../../assets/icons/linux.svg';
import mysql from '../../assets/icons/mysql.svg';
import php from '../../assets/icons/php.svg';
import react from '../../assets/icons/react.svg';
import redis from '../../assets/icons/redis.svg';
import firebase from '../../assets/icons/firebase.svg';
import html from '../../assets/icons/html.svg';
import nodejs from '../../assets/icons/node.svg';
import javascript from '../../assets/icons/javascript.svg';
import { useTransition, animated } from 'react-spring';
import { useEffect } from 'react';
import {v4 as uuid} from 'uuid';

const StackItem = ({ type, active }) => {
    let noImage = ['express'];
    const [stack, setStack] = useState([type]);
    let check = noImage.indexOf(type.toLowerCase());
    const transition = useTransition(stack, null, {
        from: { transform: 'translate3d(-50px,-50px,0px)' },
        enter: { transform: 'translate3d(0px,0px,0px)' },
        leave: { transform: 'translate3d(-50px,-50px,0px)' },
    }
    );

    useEffect( () => {
        (active) ? setStack([type]) : setStack([]);
    }, [active]);

    let stackIcons = {
        apache,
        linux,
        mysql,
        php,
        react,
        redis,
        nodejs,
        html,
        javascript,
        firebase
    };

    let icon = (type !== null) ? stackIcons[type.toLowerCase()] : null;

    return (
        <>
            {transition.map(({ item, props }) => (
                item && <animated.div key={uuid()} style={props} className="stack-item" >            {
                    (check === -1) ?
                        (type === 'null') ? null : <img src={icon} alt={type} className="stack-item__icon" title={type} />
                        :
                        <span className="stack-item__title">{type}</span>
                }</animated.div>
            ))}
        </>
    )
}

export default StackItem;
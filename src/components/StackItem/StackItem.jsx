import React from 'react';
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
import { useTransition } from 'react-spring';
import { v4 as uuid } from 'uuid';
import { StackItemDiv, StackIcon } from './s-stackItem';

const StackItem = ({ type, active }) => {
    let noImage = ['express'];
    let check = noImage.indexOf(type.toLowerCase());
    const transition = useTransition(active, {
        from: { transform: 'translate3d(-50px,-50px,0px)' },
        enter: { transform: 'translate3d(0px,0px,0px)' },
        leave: { transform: 'translate3d(-50px,-50px,0px)' },
        config: { duration: 500 },
    }
    );

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
            {transition((style, item) => (
                <StackItemDiv key={uuid()} style={style} >
                    {(check === -1) ?
                        (type === 'null') ? null : <StackIcon src={icon} alt={type} title={type} />
                        :
                        <span className="stack-item__title">{type}</span>
                    }
                </StackItemDiv>
            ))}
        </>
    )
}

export default StackItem;
import { keyframes } from 'styled-components';

export const glideRight = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0rem) scale(1.25);
    }
    50% {
        opacity: 0;
        transform: translateX(1rem) scale(1.25);
    }
    100% {
        opacity: 1;
        transform: translateX(0rem) scale(1.25);
    }
`;

export const glideLeft = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0rem) scale(1.25);
    }
    50% {
        opacity: 0;
        transform: translateX(-1rem) scale(1.25);
    }
    100% {
        opacity: 1;
        transform: translateX(0rem) scale(1.25);
    }
`;

export const glideRightRotate = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0rem) rotate(-90deg) scale(1.25);
    }
    50% {
        opacity: 0;
        transform: translateX(1rem) rotate(-90deg) scale(1.25);
    }
    100% {
        opacity: 1;
        transform: translateX(0rem) rotate(-90deg) scale(1.25);
    }
`;

export const glideDown = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0rem) scale(1.25);
    }
    50% {
        opacity: 0;
        transform: translateY(1rem) scale(1.25);
    }
    100% {
        opacity: 1;
        transform: translateY(0rem) scale(1.25);
    }
`;
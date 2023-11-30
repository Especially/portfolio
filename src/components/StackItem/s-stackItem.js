import styled from 'styled-components';
import {a} from 'react-spring';
import DeviceSize from '../../styles/mixins/DeviceSizes';

export const StackItemDiv = styled(a.div)`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    align-items: center;
    justify-content: center;
`;

export const StackIcon = styled.img`
    ${DeviceSize.tablet(`
    width: 2rem;
    `, 'max')}
    width: 3rem;
`;

export const StackContainer = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #77777757;
    box-shadow: inset 0px 3px 5px 0px #0000006e;
    padding: 0 1rem;
`;
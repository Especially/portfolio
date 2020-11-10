import styled from 'styled-components';
import DeviceSize from '../../styles/mixins/DeviceSizes';
import heroImg from '../../assets/images/hero.jpg';
import avatar from '../../assets/images/avatar.png';
import avatarFull from '../../assets/images/avatar_full.png';
import { pseudoDefault, flexColumn } from '../../styles/mixins/Mixins';

export const HeroContent = styled.div`
    ${flexColumn}
    align-items: center;
    position: absolute;
    height: 400px;
    width: 400px;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.transluscent};

    &:before {
        ${pseudoDefault}
        align-self: center;
        justify-self: center;
        position: absolute;
        z-index: 0;
        transform: rotate(45deg) scale(1);
        box-shadow: 0 0 15px ${({theme}) => theme.shadow};
        border: 0.5em solid ${({theme}) => theme.transluscent};
        transition: transform 1s ease-in-out;
    }

    &:after {
        ${pseudoDefault};
        opacity: 0;
        z-index: -1;
        box-shadow: 0 0 15px ${({theme}) => theme.shadow};
        transition: all 1s ease-in-out;
    }

    &:hover {
        &:before {
            transform: rotate(0deg) scale(1.1);
        }
        &:after {
            opacity: 1;
        }
    }
    width: 100%;
    max-width: 400px;
    ${DeviceSize.custom(`
        width: 400px;
        height: 400px;
    `, 'min', '565px')}
    
    &:before {
        display: none;
        ${DeviceSize.custom(`
        display: inherit;
    `, 'min', '565px')}
}
`;

export const Hero = styled.figure`
    display: flex;
    z-index: 0;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    margin: 0;

     &:before {
         ${pseudoDefault};
         background-image: url(${heroImg});
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
         filter: blur(3px);
         z-index: -2;
     }

     &:after {
         ${pseudoDefault}
         background-color: rgba(0, 0, 0, 0.5);
         z-index: -1;
     }
`;

export const HeroVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const HeroTitle = styled.h1`
    font-family: "Wendy";
    width: 100%;
    text-align: center;
`;

export const HeroAvatar = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50px;
    background-image: url(${avatar});
    background-size: cover;
    background-position: center;
    transform: scale(1);
    transition: all 1s ease-in-out;

    &:hover {
        border-radius: 0px;
        background-image: url(${avatarFull});
        background-size: cover;
        background-position: center;
        transform: scale(3);
        box-shadow: 0px 0px 15px ${({theme}) => theme.shadowAlt};
    }
`;

export const HeroDesc = styled.p`
    text-align: center;
    font-style: italic;
    padding: 1rem;
`;

export const HeroSocials = styled.div`
    justify-self: flex-end;
`;

export const HeroLink = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.shadowAlt};
`;

export const HeroIcon = styled.i`
    margin: 0 0.5rem;
    font-size: 1.75rem;
`;
// Arrows
import arrowRightWt from '../assets/icons/arrow-right-wt.svg';
import arrowLeftWt from '../assets/icons/arrow-left-wt.svg';
import arrowUpWt from '../assets/icons/arrow-up-wt.svg';
import arrowDownWt from '../assets/icons/arrow-down-wt.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowUp from '../assets/icons/arrow-up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

//Icons
import githubImg from '../assets/images/icons/github_icon.svg';
import externalImg from '../assets/images/icons/external_icon.svg';
import githubImgWt from '../assets/images/icons/github_icon-wt.svg';
import externalImgWt from '../assets/images/icons/external_icon-wt.svg';
import moonIcon from '../assets/images/icons/moon.svg';
import sunIcon from '../assets/images/icons/sun.svg';

export const lightTheme = {
    body: '#f4f4f4',
    icon: moonIcon,
    text: '#151515',
    bodyBg: '#dcdcdc',
    coreText: '#484848',
    coreShadow: '3px 2px 20px #ffffff',
    toggleBorder: '#FFF',
    background: '#363537',
    transluscent: '#ffffffa3',
    highlight: '#959acc',
    shadow: () => lightTheme.transluscent,
    shadowAlt: () => darkTheme.body,
    carouselShadow: '#a8acd2',
    carouselShadowLt: '#a8acd29c',
    carouselBg: '#d3d7f947',
    accent: '#72a5bd57',
    progressBar: '#8ab7f5',
    progressIndicator: '#c6e3eac4',
    progressShadow: '#fbfbfbcc',
    arrowRight: arrowRightWt,
    arrowLeft: arrowLeftWt,
    arrowUp: arrowUpWt,
    arrowDown: arrowDownWt,
    arrowRightAlt: arrowRight,
    arrowLeftAlt: arrowLeft,
    arrowUpAlt: arrowUp,
    arrowDownAlt: arrowDown,
    githubImg: githubImg,
    externalImg: externalImg
}
export const darkTheme = {
    body: '#151515',
    icon: sunIcon,
    bodyBg: '#151c21',
    coreText: '#607284',
    coreShadow: '3px 2px 20px #38434a',
    text: '#f4f4f4',
    toggleBorder: '#6B8096',
    background: '#999',
    transluscent: '#293746d4',
    highlight: '#c9cbce',
    shadow: () => darkTheme.body,
    shadowAlt: () => lightTheme.body,
    carouselShadow: '#a8acd2',
    carouselShadowLt: '#a8acd29c',
    carouselBg: '#2f3946a1',
    accent: '#72a5bd57',
    progressBar: '#8ab7f5',
    progressIndicator: '#c6e3eac4',
    progressShadow: '#fbfbfbcc',
    arrowRight: arrowRight,
    arrowLeft: arrowLeft,
    arrowUp: arrowUp,
    arrowDown: arrowDown,
    arrowRightAlt: arrowRightWt,
    arrowLeftAlt: arrowLeftWt,
    arrowUpAlt: arrowUpWt,
    arrowDownAlt: arrowDownWt,
    githubImg: githubImgWt,
    externalImg: externalImgWt
}
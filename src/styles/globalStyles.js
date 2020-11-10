import styled, { createGlobalStyle} from 'styled-components';
import DeviceSize from './mixins/DeviceSizes';
import { margins } from './mixins/Mixins';
import Wendy from '../assets/fonts/WendyOne-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
  }

  @font-face {
    font-family: 'Wendy';
    src: url(${Wendy});
  }

  body {
    background: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    transition: all 0.50s linear;
  }

  `;

export const Section = styled.section`
  ${margins}
  color: ${({ theme }) => theme.coreText};
`;

export const Paragraph = styled.p`
  line-height: 1.25;
  font-size: 1.2rem;
  ${DeviceSize.tablet(`
    font-size: 1.3rem;
  `)}
`;
import styled from 'styled-components';
import { a } from 'react-spring';
import DeviceSize from '../../styles/mixins/DeviceSizes';

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const CarouselTitle = styled.h1`
    margin-left: 1rem;
    text-shadow: 2px 2px 3px ${({theme}) => theme.carouselShadow};
`;

export const CarouselImage = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-image: url(${(props) => props.url ? `${props.url}` : ''});
  filter: blur(${(props) => props.light === 'true' ? '2px' : '5px'});
  &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: ${({theme}) => theme.carouselBg};
  }
`

export const CarouselHolder = styled.div`
  position: absolute;
  height: 100%;
  color: ${({ theme }) => theme.text};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CarouselContent = styled.div`
  
`;
export const CarouselDesc = styled.p`
  font-size: 0.9rem;
  ${DeviceSize.tablet(`
    font-size: 1rem;
  `)}
`;
export const CarouselInfo = styled.div`
  background-color: ${({theme}) => theme.carouselBg};
  margin: 0;
  padding: 0.5rem 1rem;
  text-shadow: 2px 2px 3px ${({theme}) => theme.carouselShadow};
  box-shadow: -1px -2px 14px ${({theme}) => theme.carouselShadowLt};
`;
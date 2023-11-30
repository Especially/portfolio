import styled from "styled-components";
import { Section } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import DeviceSize from "../../styles/mixins/DeviceSizes";
// import {flexCenter, flexColumn} from '../../styles/mixins/Mixins';
import { glideLeft, glideRight } from "../../styles/mixins/animations";

export const InfoContain = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsSection = styled(Section)`
  > ${InfoContain} {
    margin: 0.75rem;
  }

  .stack-item {
    margin: 0.25rem;

    &__icon {
      width: 2rem;
    }
  }
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
  ${DeviceSize.tablet(`
    padding: 1rem 2.5rem;
    `)}
`;

export const Video = styled.video`
  width: 100%;
`;

export const ProjectDesc = styled.div`
  margin: 1rem 0;
`;

export const Desc = styled.p`
  line-height: 1.25;
  font-size: 1.2rem;
  ${DeviceSize.tablet(`
        font-size: 1.3rem;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  ${DeviceSize.tablet(`
        width: 25rem;
    `)}
`;

export const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  //width: 20rem;
`;

export const InfoLabel = styled.h3`
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

export const InfoText = styled.span`
  display: flex;
`;

export const Icon = styled.span`
  display: none;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  height: 5rem;
  width: 5rem;
  ${DeviceSize.mobileM(`
        display: block;
    `)}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImagePreview = styled.div`
  position: relative;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  filter: blur(1px);
  margin: 0.5rem;
  height: 10rem;
  width: 10rem;
  cursor: pointer;
  transition: filter 0.5s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    position: relative;
    filter: blur(0px);
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
`;

export const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  padding: 1rem;
`;

export const ImageViewer = styled.img`
  max-width: 100%;
`;

export const Stack = styled.div`
  display: flex;
`;

export const ExternalLink = styled.a`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0.5rem;
  position: relative;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) =>
    props.github ? props.theme.githubImg : props.theme.externalImg});
  transition: opacity 250ms ease-in-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
export const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProjectTitleText = styled.h1`
  font-size: 1.75rem;
`;

export const ProjectTitleLinks = styled.div`
  display: inherit;
  align-items: center;
`;

export const ProjectsNav = styled.div`
  display: flex;
  justify-content: ${(props) => {
    return props.prev && props.next
      ? "space-between"
      : props.prev
      ? "flex-start"
      : "flex-end";
  }};
  margin: 2rem 0;
`;

export const ProjectsNavText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  ${(props) => (props.next ? "text-align: right;" : null)}
`;
export const ProjectsNavIcon = styled.span`
  display: block;
  min-width: 2.25rem;
  min-height: 2.25rem;
  ${({ prev, theme }) => {
    return prev
      ? `margin-right: 0.5rem;\n background-image: url(${theme.arrowLeftAlt});`
      : `margin-left: 0.5rem;\n background-image: url(${theme.arrowRightAlt});`;
  }}
  background-repeat: no-repeat;
  background-position: contain;
`;

export const ProjectsLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0.5;
    & .prev {
      animation: 1s ${glideLeft} ease-in-out;
    }
    & .next {
      animation: 1s ${glideRight} ease-in-out;
    }
  }
`;

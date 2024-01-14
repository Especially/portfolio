import styled, { css } from "styled-components";
import DeviceSize from "../../styles/mixins/DeviceSizes";
import { a } from "react-spring";
import { glideRightRotate } from "../../styles/mixins/animations";

const DarkTheme = css`
  font-color: #fff;
`;

const LightTheme = css`
  font-color: #000;
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  display: block;
  background-image: url("${(props) => props.img}");
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
  margin: 0.5rem;
  ${DeviceSize.tablet(`
        width: 28px;
        height: 28px;
    `)}
`;

export const ProjectTitle = styled.span`
  font-weight: bold;
  font-size: 1rem;
  display: none;
  color: ${({ theme }) => theme.text};
  ${DeviceSize.tablet(`
    display: flex;
    flex-grow: 1;
    `)};
`;

export const AccordionIcon = styled.span`
  background-image: url(${({ theme }) => theme.arrowDownAlt});
  background-repeat: no-repeat;
  background-size: contain;
  height: 1.25rem;
  min-width: 1.25rem;
  transition: all ease-in-out 0.5s;
`;

const AccordionHoverActive = css`
  animation: ${glideRightRotate} 0.75s 1;
`;

const AccordionHover = css`
  animation: ${glideRightRotate} 0.75s 1;
  transform: rotate(-90deg);
`;

export const AccordionContainer = styled.li`
  ${DeviceSize.tablet(
    `
    flex-grow: 1;
    `,
    "max"
  )}

  & ${AccordionIcon} {
    ${({ active }) => {
      if (active) return "transform: rotate(-90deg);";
    }}
  }

  &:hover {
    & ${AccordionIcon} {
      ${({ active }) => (active ? AccordionHoverActive : AccordionHover)}
    }
  }
`;

export const AccordionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${DeviceSize.mobileM(
    `
        padding: 0.25rem 0.15rem;
    `,
    "max"
  )}
  ${DeviceSize.mobileM(`
        padding: 0.25rem 1rem;
    `)}
`;

export const AccordionHead = styled.button`
  display: flex;
  appearance: none;
  outline: none;
  background: unset;
  border: none;
  flex-direction: column;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.accent};
  position: relative;
  padding: 0;
  width: 100%;
  text-align: left;
`;

export const AccordionProgress = styled(a.span)`
  height: 5px;
  background-color: ${({ theme }) => theme.progressBar};
  position: absolute;
  bottom: 0;
  border-radius: 0 50px 50px 0;
`;

export const ProgressIndicator = styled.span`
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.progressIndicator};
  height: 5px;
  width: 5px;
  border-radius: 0 50px 50px 0;
  box-shadow: 0 0 9px 2px ${({ theme }) => theme.progressShadow};
`;

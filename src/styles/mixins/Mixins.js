import DeviceSize from './DeviceSizes';

export const flexColumn = `
display: flex;
flex-direction: column;
`;

export const flexCenter = `
algin-items: center;
justify-content: center;
`;

export const margins = `
margin: 2rem 1.5rem;
${DeviceSize.tablet(`
    margin: 2rem 3.75em;
`)}
${DeviceSize.laptop(`
    margin: 3.5rem 5rem;
`)}
${DeviceSize.laptopA(`
    margin: 5.5rem 12rem;
`)}
`;

export const pseudoDefault =`
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
`;
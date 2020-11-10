const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopA: '1280px',
    laptopL: '1440px',
    desktop: '2560px'
}

const DeviceSize = {
    mobileS: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.mobileS}) {
            ${data}
        }`)
    },
    mobileM: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.mobileM}) {
            ${data}
        }`)
    },
    mobileL: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.mobileL}) {
            ${data}
        }`)
    },
    tablet: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.tablet}) {
            ${data}
        }`)
    },
    laptop: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.laptop}) {
            ${data}
        }`)
    },
    laptopA: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.laptop}) {
            ${data}
        }`)
    },
    laptopL: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.laptopL}) {
            ${data}
        }`)
    },
    desktop: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.desktop}) {
            ${data}
        }`)
    },
    desktopL: (data,type = 'min') => {
        return(`
        @media (${type}-width: ${size.desktopL}) {
            ${data}
        }`)
    },
    custom: (data,type = 'min',sizing) => {
        return(`
        @media (${type}-width: ${sizing}) {
            ${data}
        }`)
    },
};

export default DeviceSize;
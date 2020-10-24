import React from 'react';

// What am I getting?
const Timestamp = ({ start, end, options }) => {

    // let options = {
    //     type: 'span',
    //     subtype: 'int',
    //     formatOptions: {
    //         order: ['day', 'month', 'year'],
    //         leadingZeros: false,
    //         ordinals: false,
    //         fullYear: true,
    //         separator: '-',
    //     },
    //     separator: ' - ',
    // }

    // let options = {
    //     type: 'span', // Span will show us our timestamp of between x and y dates, which can be seen as a string or integer
    //     subtype: 'int', // string or integer
    //     formatOptions: {
    //         order: ['day', 'month', 'year'],
    //         leadingZeros: false,
    //         ordinals: true,
    //         fullYear: true,
    //         fullDay: true,
    //         fullMonth: true,
    //         separator: '-',
    //         // separator: { weekday: ', ', day: ' of ', month: ', '}
    //     },
    //     separator: ' to ',
    // }

    const convertTime = (start, end) => {

        const caseCheck = (string, type) => {
            string = string;
            if ('case' in options) {
                if (options.case === 'upper') {
                    string = string.toUpperCase();
                }

                if (options.case === 'title') {
                    string = string.split(' ');
                    string = string.map(item => {
                        item = item.split('');
                        item[0] = item[0].toUpperCase();
                        item = item.join('');
                        return item;
                       }).join(' ');
                }
            }
            return string;
        }

        // Duration / x ago
        if (options.type === 'duration') {
            // First, let's convert from miliseconds to seconds
            let startTime = start / 1000;
            let endTime = end / 1000;
            let timeDifference = (Math.round((endTime - startTime) * 2) / 2);
            let plural = false;
            let seconds = 60; // one minute
            let minutes = seconds * 60; // one hour
            let hours = minutes * 24; // one day
            let days = hours * 7; // one week
            let weeks = hours * 30; // one month
            let months = hours * 365; // one year
            if (timeDifference < 1) {
                // Check if string will be plural
                plural = true;

                return `${0} seconds`;
            }
            if (timeDifference < seconds) {
                // Check if string will be plural
                plural = (timeDifference) > 1 ? true : false;
                let measure = caseCheck(`second${plural ? 's' : ''}`);

                return `${timeDifference} ${measure}`;

            }
            if (timeDifference < minutes) {
                // Check if string will be plural 
                plural = (timeDifference > seconds) ? true : false;
                let measure = caseCheck(`minute${plural ? 's' : ''}`);

                return `${Math.round((timeDifference / seconds) * 2) / 2} ${measure}`;

            }
            if (timeDifference < hours) {
                // Check if string will be plural 
                plural = (timeDifference > minutes) ? true : false;
                let measure = caseCheck(`hour${plural ? 's' : ''}`);

                return `${Math.round((timeDifference / minutes) * 2) / 2} ${measure}`;

            }
            if (timeDifference < days) {
                // Check if string will be plural 
                plural = (timeDifference > hours) ? true : false;
                let measure = caseCheck(`day${plural ? 's' : ''}`);

                return `${Math.round((timeDifference / hours) * 2) / 2} ${measure}`;

            }
            if (timeDifference < weeks) {
                // Check if string will be plural 
                plural = (timeDifference > days) ? true : false;
                let measure = caseCheck(`week${plural ? 's' : ''}`);

                return `${Math.round((timeDifference / days) * 2) / 2} ${measure}`;

            }
            if (timeDifference < months) {
                // Check if string will be plural 
                plural = (timeDifference > weeks) ? true : false;
                let measure = caseCheck(`month${plural ? 's' : ''}`);

                return `${Math.round((timeDifference / weeks) * 2) / 2} ${measure}`;

            } else {
                // Greater than 1 year
                plural = (timeDifference) > months ? true : false;
                let measure = caseCheck(`year${plural ? 's' : ''}`);

                return `${Math.round((timeDifference / months) * 2) / 2} ${measure}`;
            }

        }

        if (options.type === 'span') {
            const startDate = new Date(start);
            const endDate = new Date(end);
            let formatOptions = options.formatOptions;
            const order = options.formatOptions.order;

            const converter = (date) => {
                const weekday = date.getDay();
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                return { day, month, year, weekday };
            }

            const timeParser = (date) => {
                let string = '';
                let separatorKey = 'separator' in formatOptions;
                let separatorObj = typeof (formatOptions.separator) === 'object';
                for (var i = 0; i < order.length; i++) {
                    let item = order[i];
                    let last = order.length - 1;
                    let { day, month, year, weekday } = date;
                    // Set default of separator if it does't exist in our formatOptions object
                    // If formatOptions separator exists, then check if it's an object or a string
                    // If it's a string, return that key value, otherwise, set default to all key in object OR spaces
                    // let separator = (!('separator' in formatOptions)) ? ' ' : formatOptions.separator;
                    let separator = (!(separatorKey)) ?
                        ' ' :
                        (!separatorObj) ? formatOptions.separator :
                            // then it's an object, so set to the all key
                            formatOptions.separator.all || ' ';
                    // Remove separator from the final date object
                    separator = (i !== last) ? separator : '';

                    if (formatOptions.leadingZeros) {
                        if (day < 10) {
                            day = `0${day}`
                        }
                        if (month < 10) {
                            month = `0${month}`
                        }
                    }
                    if (!formatOptions.fullYear) {
                        year = year.toString();
                        year = `${year[0]}${year[1]}`
                    }

                    if (options.subtype === 'string') {
                        const shortWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
                        const longWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        const shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        const longMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                        const ordinal_suffix_of = (i) => {
                            var j = i % 10,
                                k = i % 100;
                            if (j == 1 && k != 11) {
                                return i + "st";
                            }
                            if (j == 2 && k != 12) {
                                return i + "nd";
                            }
                            if (j == 3 && k != 13) {
                                return i + "rd";
                            }
                            return i + "th";
                        }

                        day = (formatOptions.ordinals) ? ordinal_suffix_of(day) : day;
                        month = month - 1;

                        if (item === 'weekday') {
                            separator = (separatorObj && 'weekday' in formatOptions.separator) ? formatOptions.separator.weekday : separator;
                            weekday = (formatOptions.fullDay) ? shortWeek[weekday] : longWeek[weekday];
                            string += `${weekday}${separator}`;
                        }
                        if (item === 'day') {
                            separator = (separatorObj && 'day' in formatOptions.separator) ? formatOptions.separator.day : separator;
                            string += `${day}${separator}`;
                        }
                        if (item === 'month') {
                            separator = (separatorObj && 'weekday' in formatOptions.separator) ? formatOptions.separator.weekday : separator;
                            month = (formatOptions.fullMonth) ? shortMonth[month] : longMonth[month];
                            string += `${month}${separator}`;
                        }
                        if (item === 'year') {
                            separator = (separatorObj && 'year' in formatOptions.separator) ? formatOptions.separator.year : separator;
                            string += `${year}${separator}`;
                        }
                    }

                    if (options.subtype === 'int') {
                        if (item === 'day') {
                            string += `${day}${separator}`;
                        }
                        if (item === 'month') {
                            string += `${month}${separator}`;
                        }
                        if (item === 'year') {
                            string += `${year}${separator}`;
                        }
                    }
                }
                return string;
            }
            let startString = caseCheck(timeParser(converter(startDate)), options.type);
            let endString = caseCheck(timeParser(converter(endDate)), options.type);

            return `${startString}${options.separator || ' - '}${endString}`


        }
    }

    return (
        <>
            {convertTime(start, end)}
        </>
    )
}

export default Timestamp;
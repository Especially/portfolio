import { v4 as uuid_v4 } from  'uuid';
const amuzeMeImg1 = require('../assets/images/projects/amuze_me.png');
const blockrImg1 = require('../assets/images/projects/blockr.png');
const staffingPanelImg1 = require('../assets/images/projects/staffing_panel.png');

const projectData = [
    {
        "id": uuid_v4(),
        "title": "Amuze Me",
        "image": [amuzeMeImg1, 'hey'],
        "status": 1,
        "desc": "Amuze Me is a fun interactive web application which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood, and based off of that mood, a uniquely generated playlist is created.",
        "details": `This project which was created on [date] and it was completed in a [duration] sprint. Amuze Me is a fun interactive web application which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood. Once the mood is obtained, a unique playlist is generated for the user depending on their mood and the previous songs that they've listened to through Spotify.`,
        "stack": ["React","NodeJS","Express","Firebase"],
        "start": new Date('2020-06-08').getTime(),
        "end": new Date('2020-06-23').getTime(),
        "date":"June 2020",
        "link":"https://amuze-me.herokuapp.com/",
        "video":""
    },
    {
        "id": uuid_v4(),
        "title": "Blockr",
        "image": [blockrImg1],
        "status": 0,
        "desc": "Amuze Me is a SPA which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood. Once the mood is obtained, a unique playlist is generated for the user depending on their mood and the previous songs that they've listened to through Spotify.",
        "details": "",
        "stack": ["Linux","Apache","MySQL","PHP","Redis"],
        "start": new Date('2015-04-23').getTime(),
        "end": new Date('2018-03-18').getTime(),
        "link":"http://blockr.ca/",
        "video":""
    },
    {
        "id": uuid_v4(),
        "title": "Staffing Panel",
        "image": [staffingPanelImg1],
        "status": 1,
        "desc": "Amuze Me is a SPA which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood. Once the mood is obtained, a unique playlist is generated for the user depending on their mood and the previous songs that they've listened to through Spotify.",
        "details": "",
        "stack": ["PHP","MySQL","HTML","JavaScript"],
        "start": new Date('2014-06-11').getTime(),
        "end": new Date('2016-08-16').getTime(),
        "link":"",
        "video":""
    }
]

export default projectData;
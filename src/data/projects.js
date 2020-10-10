import { v4 as uuid_v4 } from  'uuid';
import {amuzeMeImg1} from '../assets/images/projects/amuze_me.png'
import {blockrImg1} from '../assets/images/projects/blockr.png';
import {staffingPanelImg1} from '../assets/images/projects/staffing_panel.png';

const projectData = [
    {
        "id": uuid_v4(),
        "title": "Amuze Me",
        "image": [amuzeMeImg1],
        "status": 1,
        "desc": "Amuze Me is a SPA which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood. Once the mood is obtained, a unique playlist is generated for the user depending on their mood and the previous songs that they've listened to through Spotify.",
        "stack": ["React","NodeJS","Express","Firebase"],
        "duration":"2 Weeks",
        "link":"https://amuze-me.herokuapp.com/",
        "video":""
    },
    {
        "id": uuid_v4(),
        "title": "Blockr",
        "image": [blockrImg1],
        "status": 0,
        "desc": "Amuze Me is a SPA which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood. Once the mood is obtained, a unique playlist is generated for the user depending on their mood and the previous songs that they've listened to through Spotify.",
        "stack": ["Linux","Apache","MySQL","PHP","Redis"],
        "duration":"2016-2018",
        "link":"http://blockr.ca/",
        "video":""
    },
    {
        "id": uuid_v4(),
        "title": "Staffing Panel",
        "image": [staffingPanelImg1],
        "status": 1,
        "desc": "Amuze Me is a SPA which utilizes Microsoft's Face AI and IBM Watson's Tone Analyzer to obtain a user's mood. Once the mood is obtained, a unique playlist is generated for the user depending on their mood and the previous songs that they've listened to through Spotify.",
        "stack": ["PHP","MySQL","HTML","JavaScript"],
        "duration":"2016-2018",
        "link":"",
        "video":""
    }
]

export default projectData;
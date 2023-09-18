import { AiTwotoneHome,AiFillInfoCircle } from "react-icons/ai";
import {PiAddressBookFill} from "react-icons/pi";
import {BiSolidBriefcase} from "react-icons/bi"
export const MenuItems=[
    {
        title:"Home",
        url:"/",
        cName:"nav-link",
        icons:<AiTwotoneHome className="icon"/>
    },
    {
        title:"About",
        url:"/",
        cName:"nav-link",
        icons:<AiFillInfoCircle className="icon"/>
    }
    ,
    {
        title:"Service",
        url:"/",
        cName:"nav-link",
        icons:<BiSolidBriefcase className="icon"/>
    }
    ,{
        title:"Contact",
        url:"/",
        cName:"nav-link",
        icons:<PiAddressBookFill className="icon"/>
    }

    ,{
        title:"Sign Up",
        url:"/",
        cName:"button-signup",
        icons:""
    }
]
import Link from "next/link";

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
    {
        path: '#',
        icon: <RiYoutubeFill/>
    },
    {
        path: '#',
        icon: <RiInstagramFill/>
    },
    {
        path: '#',
        icon: <RiSpotifyFill/>
    },
    {
        path: '#',
        icon: <RiSoundcloudFill/>
    }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (<div className={`${containerStyles}`}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path}>{item.icon}</Link>
    })}
  </div>);
};

export default Socials;

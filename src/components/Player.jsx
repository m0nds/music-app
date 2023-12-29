"use client";
import { useState } from "react";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// const AudioLayer = () => {
//   return (
//     <>
//       <audio
//         src="/assets/freedom.mp3"
//         loop
//         preload="none"
//         volume={volume / 100}
//       />
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={volume}
//         onChange={handleVolumeChange}
//       />
//     </>
//   );
// };

const Player = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/* text and avatar img */}
          <div className="w-[300px] flex items-center gap-x-4">
            <div className="relative w-16 h-16">
              <Image src={"/assets/player/avatar.png"} fill alt="" priority />
            </div>
            <div className="leading-none">
              <div className="text-lg font-medium">Mia Reynolds</div>
              <div className="text-sm font-light">Freedom</div>
            </div>
          </div>
          {/* player */}
          <div className="w-full max-w-4xl">
            <ayer
              loop
              preload="none"
              color="#7f1cfc"
              volume={volume / 100}
              volumePlacement="top"
              onChange={handleVolumeChange}
              src="/assets/freedom.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                maxWidth: "100vw",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;

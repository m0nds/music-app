"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import SectionHeader from "../SectionHeader";
import AlbumSlider from "./AlbumSlider";

const Albums = () => {
  return (
    <section id="discography">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto"
      >
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        {/* album slider */}
        <div>
          <AlbumSlider />
        </div>
      </motion.div>
    </section>
  );
};

export default Albums;

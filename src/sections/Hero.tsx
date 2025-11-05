import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 px-4">
     <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Aditya Raut
        </motion.h1>

        {/* Role / Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg mt-2"
        >
          Full Stack Developer
        </motion.p>

        {/* Short Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-300 mt-6 leading-relaxed"
        >
          I build modern web applications with a focus on clean UI, smooth user
          experiences, and scalable backend logic. I love working with React,
          TailwindCSS, Node.js, and exploring animation libraries like Framer Motion
          to add life into web interfaces.
        </motion.p>

        {/* CTA Button (Optional) */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-block mt-8 px-6 py-3 border border-white/20 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10"
        >
          View My Projects<span>↗️</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-24 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 max-w-xl mb-8">
        Have an idea or want to collaborate? Feel free to reach out — I’m always open to exciting opportunities and meaningful conversations.
      </p>

      {/* Email button */}
      <a
        href="mailto:rauta2813@gmail.com"
        className="px-6 py-3 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition"
      >
        Send me an Email
      </a>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        <a href="https://github.com/aditya1010-max" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/aditya-raut-35b1672a5/" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a>
        <a href="https://x.com/Raut100x" target="_blank" className="hover:text-blue-400 transition">Twitter</a>
      </div>
    </section>
  );
};
export default Contact;

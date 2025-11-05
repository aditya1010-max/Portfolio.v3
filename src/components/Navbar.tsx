// import React from "react";

const Navbar = () => {
  const links = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      
      {/* Main Navbar Container with 60% width */}
      <div
        className="w-[60%] px-6 py-4 flex justify-between items-center rounded-b-xl border-b backdrop-blur-md"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-color)",
        }}
      >
        {/* Portfolio Title */}
        <h1 className="text-2xl font-bold">Portfolio</h1>

        {/* Navbar Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition"
                style={{ color: "var(--text-color)" }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-[var(--border-color)]"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
            color: "var(--text-color)",
          }}
        >
          <img src="./folder/E31C.svg"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

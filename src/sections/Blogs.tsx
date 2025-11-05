import { blogsData } from "../data/blogs";

const Blogs = () => {
  return (
    <section id="blogs" className="px-4">
        <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Blogs</h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogsData.map((blog, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{blog.description}</p>
            <p className="text-blue-400 text-xs mt-3">{blog.platform}</p>

            <a
              href={blog.link}
              target="_blank"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              Read Blog →
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Blogs;

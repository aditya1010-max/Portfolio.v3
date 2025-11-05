import { educationData } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="min-h-screen pt-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-blue-400 text-sm">{item.institution} • {item.duration}</p>
            <p className="text-gray-300 text-sm mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

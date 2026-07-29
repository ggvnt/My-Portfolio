export const Education = () => {
  const educationData = [
    {
      title: "Bachelor's in Information Technology",
      institute: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2022 - Present",
      details: [
        "Currently pursuing a degree in IT",
        "Specialized in Information Technology",
        "Engaged in academic and practical projects",
        "Relevant Coursework: OOP, Data Structures & Algorithms, Web Technologies, IT Project Management",
      ],
    },

    {
      title: "Graphic Design Illustrator Course",
      // institute: "PSD Academy",
      period: "Dec 2023",
      details: [
        "Learned essential graphic design principles",
        "Hands-on experience with Adobe Illustrator",
        "Created vector-based designs and logos",
      ],
    },
    {
      title: "English Diploma",
      institute: "British Way English Academy",
      period: "March 2022 ",
      details: ["Completed a comprehensive English language program"],
    },
    {
      title: "Advanced Level",
      institute: "Thakshila College Gampaha",
      period: "2018 - 2022",
      details: [
        "Physical Science Stream",
        "Physics , Chemistry, Combined Mathematics",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-32 bg-linear-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My <span className="text-primary">Education</span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-10 space-y-16">
          {educationData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-2.75 top-2 w-5 h-5 bg-primary rounded-full border-4 border-black group-hover:scale-125 transition"></div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
                {/* Period */}
                <span className="text-sm text-primary font-medium">
                  {item.period}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {item.title}
                </h3>

                {/* Institute */}
                <p className="text-gray-400 text-sm mb-4">{item.institute}</p>

                {/* Details */}
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

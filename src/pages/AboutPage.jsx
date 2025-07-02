import React from "react";
import { CheckCircle, Users, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Innovation First",
    description:
      "Pushing boundaries to create cutting-edge gaming solutions that redefine the future.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Community Driven",
    description:
      "Building and nurturing gaming communities that thrive on collaboration and shared passion.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Quality Excellence",
    description:
      "Delivering exceptional quality in every product and service we provide.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Founded with a vision to revolutionize the gaming industry through innovative technology.",
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description:
      "Expanded our team and launched our first major gaming platform.",
  },
  {
    year: "2024",
    title: "Global Impact",
    description:
      "Reached millions of users and established partnerships with leading gaming companies.",
  },
];

const team = [
  {
    initials: "AC",
    name: "Alex Chen",
    role: "Founder & CEO",
    gradient: "from-orange-400 to-red-400",
  },
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Head of Design",
    gradient: "from-red-400 to-pink-400",
  },
  {
    initials: "MK",
    name: "Michael Kim",
    role: "Tech Lead",
    gradient: "from-blue-400 to-purple-400",
  },
  {
    initials: "EW",
    name: "Emma Wilson",
    role: "Community Manager",
    gradient: "from-green-400 to-blue-400",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-52">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-16 px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Crafting Digital Experiences
        </h1>
        <p className="text-gray-600 mb-8">
          Where Innovation Meets Gaming Excellence
        </p>
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500" />
            Forward Thinking
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-500" />
            Player-Centric
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Empowering gaming communities through innovative technology and
          exceptional experiences that bring players together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-gray-50 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {milestones.map((item, idx) => (
            <div key={idx} className=" bg-white py-8 px-4 rounded-md">
              <div className="text-blue-600 font-bold text-lg mb-2">
                {item.year}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${member.gradient}`}
              >
                {member.initials}
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0146d0] py-16 px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
        <p className="text-blue-100 mb-8">
          Let's create amazing gaming experiences together
        </p>
        <Link to="/contact">
          <button className="bg-white text-[#0146d0] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;

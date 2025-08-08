import React from 'react';
import { ShieldCheck, Star, Users, Lightbulb, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import missionImg from '../assets/mission.png';
import telemedicineAppImg from '../assets/telemedicine-app.jpeg';

function About() {
  return (
    <div className="pt-24 pb-16 bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl font-extrabold text-blue-800 mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About TGI Healthcare
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Empowering healthcare through diagnostics, AI and telemedicine — anytime, anywhere.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={missionImg}
              alt="Mission - Empowering Diagnostics"
              className="w-100 md:w-92 h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To deliver safe, accurate, and real-time diagnostic solutions and remote consultations for all.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <ShieldCheck className="text-green-600" />, text: "FDA-Approved Imaging & Diagnostic Tech" },
                { icon: <Star className="text-yellow-500" />, text: "Real-time Telemedicine Integration" },
                { icon: <Lightbulb className="text-purple-600" />, text: "Cutting-edge AI Assistance" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {item.icon}
                  <span className="text-gray-700 text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={telemedicineAppImg}
              alt="TGI Telemedicine App Interface"
              className="w-30 md:w-60 h-auto rounded-xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-4">TGI Telemedicine App</h2>
            <p className="text-gray-600 text-lg mb-6">
              Connect with certified doctors, access diagnostic reports, and book consultations – all through your phone.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><Smartphone className="text-blue-500" /> Instant video consultations</li>
              <li className="flex items-center gap-2"><Smartphone className="text-blue-500" /> Lab report tracking</li>
              <li className="flex items-center gap-2"><Smartphone className="text-blue-500" /> Prescription & medicine delivery</li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Download App <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="w-10 h-10 text-pink-500" />,
                title: "Customer-Centric",
                desc: "We prioritize patient outcomes and healthcare provider ease-of-use."
              },
              {
                icon: <Star className="w-10 h-10 text-yellow-500" />,
                title: "Integrity & Innovation",
                desc: "Transparent, responsible, and always pushing boundaries."
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-indigo-500" />,
                title: "Connected Healthcare",
                desc: "Linking labs, patients & doctors with seamless tech."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {value.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Join the Future of Healthcare</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let’s build something amazing together. Book a demo or contact us to learn more.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Contact Us <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;

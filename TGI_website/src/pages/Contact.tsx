import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-teal-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Let’s Connect</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? We’d love to hear from you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 transition hover:shadow-emerald-200 duration-300">
            <h3 className="text-3xl font-bold text-emerald-600 mb-8">Get in Touch</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start">
                <Phone className="w-7 h-7 text-emerald-500 mr-4 animate-pulse" />
                <div>
                  <p className="font-semibold text-lg">Phone</p>
                  <p className="text-base">+91 9733772324</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-7 h-7 text-emerald-500 mr-4 animate-pulse" />
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-base">marketing@tgihealthcare.in</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-7 h-7 text-emerald-500 mr-4 animate-pulse" />
                <div>
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-base">
                    Ankurhati Industrial Park<br />
                    Howrah, West Bengal – 711302
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 transition hover:shadow-teal-200 duration-300">
            <h3 className="text-3xl font-bold text-emerald-600 mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-transform transform hover:scale-105"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

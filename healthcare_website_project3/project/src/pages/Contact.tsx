import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a question or need assistance? Our team is here to help. Reach out today!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Get in Touch</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>1-800-TGI-XRAY</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@tgihealthcare.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>
                    123 Medical Center Drive, Suite 100<br />
                    Healthcare City, HC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

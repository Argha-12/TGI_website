import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Clock3, Phone, Mail, MapPin,
  Smartphone, Search, Video, CalendarCheck, ClipboardList,
  Bell, Apple, Stethoscope, MessageSquareHeart, FileText
} from 'lucide-react';

import About from './pages/About';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import mobileAppImage from './assets/mobile-app.jpeg';
import doctorVideoCall from './assets/doctor-video-call.png';
import heroBg from './assets/background.png';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="fixed w-full bg-white shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">TGI Healthcare</Link>
              <div className="flex-1 flex justify-center space-x-8">
                <Link to="/" className="text-gray-800 hover:text-blue-800">Home</Link>
                <Link to="/about" className="text-gray-800 hover:text-blue-800">About</Link>
                <Link to="/products" className="text-gray-800 hover:text-blue-800">Products</Link>
                {/* <Link to="/catalog" className="text-gray-800 hover:text-blue-800">Catalog</Link> */}
                <Link to="/testimonials" className="text-gray-800 hover:text-blue-800">Testimonials</Link>
                <Link to="/contact" className="text-gray-800 hover:text-blue-800">Contact</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="text-2xl font-bold mb-4">TGI Healthcare</div>
              <div className="text-gray-400 mb-4">Transforming Healthcare with Smart Innovation</div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-gray-400">Main:+91 83768 03019</p>
                <p className="text-gray-400">Support:+91 8637370178</p>
              </div>
              <div className="text-center">
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">marketing@tgihealthcare.in</p>
                <p className="text-gray-400">support@tgihealthcare.in</p>
              </div>
              <a
                href="https://www.google.com/maps/place/Ankurhati+Industrial+Park,+Howrah+711302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block hover:underline"
              >
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Ankurhati Industrial Park</p>
                <p className="text-gray-400">Howrah</p>
                <p className="text-gray-400">Pin-711302</p>
              </a>
              <div className="text-center">
                <Clock3 className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-400">Mon-Fri: 8am - 6pm</p>
                <p className="text-gray-400">Sat: 9am - 2pm</p>
                <p className="text-gray-400">24/7 Emergency Support</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Important Links</h3>
                <div className="flex flex-col items-center space-y-2">
                  <Link to="/terms" className="text-gray-400 hover:underline">
                    Terms & Conditions
                  </Link>
                  <Link to="/privacy" className="text-gray-400 hover:underline">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
              © {new Date().getFullYear()} TGI Healthcare. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="pt-24 pb-12 md:pt-32 md:pb-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Smart Solutions for Modern Healthcare
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Delivering intelligent solutions that empower better health outcomes, enhance diagnostics, and elevate patient care through advanced medical technology
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/products" className="bg-blue-100 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-200 transition">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={mobileAppImage} alt="Mobile App" className="rounded-xl shadow-lg w-full max-w-xs mx-auto" />
            </div>
            <div>
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />Our Mobile App
              <h2 className="text-4xl font-bold mb-4 text-blue-900"></h2>
              <p className="text-lg text-gray-700 mb-6">
                Access high-quality remote healthcare through our telemedicine app. Key features include secure video consultations, integrated e-prescriptions, patient record management, and 24/7 availability.
              </p>
              <div className="space-y-6">
                <Feature icon={<Search className="text-yellow-400 w-8 h-8" />} title="Search Doctors" description="Search doctors by name, specialty, city, or symptoms." />
                <Feature icon={<Video className="text-purple-400 w-8 h-8" />} title="Book Video Consultation" description="Book secure video consultations based on availability." />
                <Feature icon={<CalendarCheck className="text-blue-400 w-8 h-8" />} title="Home/Clinic Visit" description="Schedule doctor visit with address & symptoms." />
                <Feature icon={<ClipboardList className="text-pink-400 w-8 h-8" />} title="History Access" description="View and download past appointments & prescriptions." />
                <Feature icon={<Bell className="text-rose-400 w-8 h-8" />} title="Notifications" description="Timely alerts for appointments and follow-ups." />
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Download App</a>
                <Link to="/contact" className="text-blue-700 underline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose TGI Healthcare?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              TGI Healthcare provides a comprehensive telemedicine platform that is scalable, cost-efficient, and tailor-made for hospital and clinic use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              '1040+ Digital Platforms Delivered',
              'Team Size of 52+ Professionals',
              'Secure Platform',
              '560+ Clients Across Verticals',
              '24/7 SLA Customer Support',
              'Clients Across 34+ Countries',
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <Shield className="text-blue-600 w-6 h-6 mb-3" />
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Solutions / Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<Stethoscope className="text-indigo-600 w-8 h-8" />} title="Telemedicine" description="Remote consultations and e-prescriptions for patients." />
            <Feature icon={<MessageSquareHeart className="text-pink-600 w-8 h-8" />} title="Mental Health" description="Dedicated platforms for online counseling and mental well-being." />
            <Feature icon={<FileText className="text-green-600 w-8 h-8" />} title="EHR Systems" description="Digital health records accessible by doctors and patients." />
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Health Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon={<Apple className="text-red-600 w-8 h-8" />} title="Healthy Eating" description="Incorporate fresh fruits, veggies, and whole grains." />
            <Feature icon={<Smartphone className="text-blue-600 w-8 h-8" />} title="Digital Detox" description="Limit screen time to improve sleep and focus." />
            <Feature icon={<ClipboardList className="text-purple-600 w-8 h-8" />} title="Regular Checkups" description="Don’t skip annual health checkups and screenings." />
          </div>
        </div>
      </section>
    </div>
  );
}

const Feature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default App;

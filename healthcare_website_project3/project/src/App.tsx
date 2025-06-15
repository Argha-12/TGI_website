import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, ChevronRight, Phone, Mail, MapPin, Globe, Clock3 } from 'lucide-react';
import About from './pages/About';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header/Navigation */}
        <header className="fixed w-full bg-white shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">TGI Healthcare</Link>
              <div className="flex-1 flex justify-center space-x-8">
                <Link to="/" className="text-gray-800 hover:text-blue-800">Home</Link>
                <Link to="/about" className="text-gray-800 hover:text-blue-800">About</Link>
                <Link to="/products" className="text-gray-800 hover:text-blue-800">Products</Link>
                <Link to="/testimonials" className="text-gray-800 hover:text-blue-800">Testimonials</Link>
                <Link to="/contact" className="text-gray-800 hover:text-blue-800">Contact</Link>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="text-2xl font-bold mb-4">TGI Healthcare</div>
              <div className="text-gray-400 mb-4">Advancing Healthcare Through Innovation</div>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-gray-400">Main: (800) 123-4567</p>
                <p className="text-gray-400">Support: (800) 765-4321</p>
                <p className="text-gray-400">Fax: (800) 999-8888</p>
              </div>
              <div className="text-center">
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">sales@tgihealthcare.com</p>
                <p className="text-gray-400">support@tgihealthcare.com</p>
                <p className="text-gray-400">info@tgihealthcare.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">123 Medical Center Drive</p>
                <p className="text-gray-400">Suite 100</p>
                <p className="text-gray-400">Healthcare City, HC 12345</p>
              </div>
              <div className="text-center">
                <Clock3 className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-400">Mon-Fri: 8am - 6pm</p>
                <p className="text-gray-400">Sat: 9am - 2pm</p>
                <p className="text-gray-400">24/7 Emergency Support</p>
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
      {/* Hero Section with Background Image */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-[url('https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Setting New Standards in Medical Imaging
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Experience unparalleled precision and clarity with our next-generation X-ray technology, designed to revolutionize diagnostic capabilities in modern healthcare.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TGI Healthcare?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With over two decades of experience in medical imaging, we deliver innovative solutions that combine cutting-edge technology with exceptional service excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">FDA Approved</h3>
              <p className="text-gray-600">Our X-ray systems exceed industry standards, ensuring optimal safety and performance for healthcare providers and patients alike.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team provides round-the-clock technical assistance, ensuring your imaging operations run smoothly at all times.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Industry Leading</h3>
              <p className="text-gray-600">Recognized globally for excellence in medical imaging technology, with a proven track record of innovation and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Technology Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Digital Imaging Technology</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our state-of-the-art X-ray systems combine precision engineering with intelligent software, delivering exceptional image quality while minimizing radiation exposure. Every component is designed with both healthcare providers and patients in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Advanced X-ray Technology" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">High-resolution Digital Imaging</h4>
                    <p className="text-gray-600">Crystal-clear image quality with advanced detail enhancement algorithms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Rapid Image Processing</h4>
                    <p className="text-gray-600">Instant results with our advanced processing technology, improving workflow efficiency.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Advanced Noise Reduction</h4>
                    <p className="text-gray-600">Superior image clarity with minimal artifacts, enabling accurate diagnosis.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl text-blue-100 mb-8">Join leading healthcare providers worldwide who trust TGI Healthcare for their medical imaging needs. Experience the perfect blend of innovation, reliability, and exceptional support.</p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                Schedule a Demo
              </Link>
              <Link to="/products" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Healthcare Providers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our commitment to excellence has earned the trust of thousands of healthcare professionals worldwide. Join our growing network of satisfied partners.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=400&q=80" 
              alt="Modern Hospital" 
              className="rounded-lg shadow-md hover:shadow-xl transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" 
              alt="Medical Facility" 
              className="rounded-lg shadow-md hover:shadow-xl transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=400&q=80" 
              alt="Healthcare Center" 
              className="rounded-lg shadow-md hover:shadow-xl transition"
            />
            <img 
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80" 
              alt="Medical Lab" 
              className="rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our X-ray solutions? Our team is here to help you find the perfect imaging solution for your healthcare facility.
            </p>
          {/* </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">Main Office: (800) 123-4567</p>
              <p className="text-gray-600">Support: (800) 765-4321</p>
              <p className="text-gray-600">Fax: (800) 999-8888</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <Mail className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">Sales: sales@tgihealthcare.com</p>
              <p className="text-gray-600">Support: support@tgihealthcare.com</p>
              <p className="text-gray-600">Info: info@tgihealthcare.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <MapPin className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Medical Center Drive</p>
              <p className="text-gray-600">Suite 100</p>
              <p className="text-gray-600">Healthcare City, HC 12345</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <Clock3 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
              <p className="text-gray-600">Saturday: 9am - 2pm</p>
              <p className="text-gray-600">24/7 Emergency Support Available</p>
            </div> */}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
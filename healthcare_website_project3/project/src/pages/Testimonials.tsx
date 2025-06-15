import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  return (
    <section className="pt-24 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">"The image quality and reliability of TGI Healthcare's X-ray systems have significantly improved our diagnostic capabilities."</p>
            <div className="font-semibold">Dr. Sarah Johnson</div>
            <div className="text-sm text-gray-500">Chief Radiologist, Memorial Hospital</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">"Their mobile X-ray units have been a game-changer for our emergency department. Excellent service and support."</p>
            <div className="font-semibold">Dr. Michael Chen</div>
            <div className="text-sm text-gray-500">Emergency Medicine Director, City General</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">"Outstanding equipment quality and exceptional customer support. TGI Healthcare has been a reliable partner for our clinic."</p>
            <div className="font-semibold">Dr. Emily Rodriguez</div>
            <div className="text-sm text-gray-500">Owner, Advanced Imaging Center</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
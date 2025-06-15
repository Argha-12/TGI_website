import React from 'react';
import { Building2, CheckCircle2, Users } from 'lucide-react';
import Button from '../components/Button'; // 👈 import the Button component

function About() {
  return (
    <section className="pt-24 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About TGI Healthcare</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">Advancing healthcare through innovative imaging solutions that enable accurate diagnosis.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
            <p className="text-gray-600">ISO certified manufacturing with rigorous quality control standards.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Presence</h3>
            <p className="text-gray-600">Serving healthcare facilities worldwide with reliable imaging equipment.</p>
          </div>
        </div>

        {/* 👇 Call-to-action Button */}
        <div className="text-center mt-12">
          <Button variant="primary">Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
}

export default About;

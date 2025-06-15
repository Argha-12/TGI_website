import React from 'react';
import { CheckCircle2 } from 'lucide-react';

function Products() {
  return (
    <section className="pt-24 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our X-ray Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
              alt="Digital X-ray System" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Digital X-ray System</h3>
              <p className="text-gray-600 mb-4">Advanced digital imaging with superior image quality and reduced radiation exposure.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> High-resolution imaging</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Quick image processing</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> DICOM compatible</li>
              </ul>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80" 
              alt="Mobile X-ray Unit" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Mobile X-ray Unit</h3>
              <p className="text-gray-600 mb-4">Portable imaging solution for flexibility in various clinical settings.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Lightweight design</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Battery-powered</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Wireless connectivity</li>
              </ul>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600959907703-c9b6e8f9b56d?auto=format&fit=crop&w=800&q=80" 
              alt="Portable X-ray Backpack" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Portable X-ray Backpack</h3>
              <p className="text-gray-600 mb-4">Compact and lightweight X-ray system designed for field operations and remote areas.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Easy to carry</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Cloud-enabled storage</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Durable in harsh conditions</li>
              </ul>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Dental X-ray Machine" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Dental X-ray Machine</h3>
              <p className="text-gray-600 mb-4">High-precision dental imaging solution tailored for clinics and private practices.</p>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Panoramic and intraoral views</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> Compact for small spaces</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> User-friendly interface</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

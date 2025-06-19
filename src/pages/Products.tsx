import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const productList = [
  {
    id: 'digital-xray',
    name: 'Digital X-ray System',
    description: 'Advanced digital imaging with superior image quality and reduced radiation exposure.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    features: [
      'High-resolution imaging',
      'Quick image processing',
      'DICOM compatible',
    ],
  },
  {
    id: 'mobile-xray',
    name: 'Mobile X-ray Unit',
    description: 'Portable imaging solution for flexibility in various clinical settings.',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Lightweight design',
      'Battery-powered',
      'Wireless connectivity',
    ],
  },
  {
    id: 'portable-backpack',
    name: 'Portable X-ray Backpack',
    description: 'Compact and lightweight X-ray system designed for field operations and remote areas.',
    image: 'https://images.unsplash.com/photo-1600959907703-c9b6e8f9b56d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Easy to carry',
      'Cloud-enabled storage',
      'Durable in harsh conditions',
    ],
  },
  {
    id: 'dental-xray',
    name: 'Dental X-ray Machine',
    description: 'High-precision dental imaging solution tailored for clinics and private practices.',
    image: 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    features: [
      'Panoramic and intraoral views',
      'Compact for small spaces',
      'User-friendly interface',
    ],
  },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (productId) => {
    const product = productList.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <section className="pt-24 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Our Diagnostic Solutions</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our cutting-edge, portable, and clinic-ready imaging systems designed for efficiency, mobility, and precision in diagnostics.
        </p>

        {/* Product Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productList.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelect(product.id)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Details Display */}
        {selectedProduct && (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain md:object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">{selectedProduct.name}</h3>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <ul className="space-y-2 mb-4">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              

              {/* Certifications */}
              <div className="mt-2 text-sm text-gray-500">
                <p><strong>Certifications:</strong> CE Certified, ISO 13485 Compliant</p>
              </div>

              {/* Call-to-Action */}
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;

import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="p-6 md:py-16 md:px-12 max-w-5xl mx-auto bg-white rounded-xl shadow-lg text-gray-800">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-700 to-purple-400 text-transparent bg-clip-text">
        Terms & Conditions
      </h1>



      {/* Terms & Conditions Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            TGI Healthcare, based in Kolkata, is built on a strong foundation of expertise and experience. We are committed to bridging the gap between patients and healthcare providers through innovative technology — making healthcare more accessible, efficient, and patient-centered.
          </p>
          <p>
            TGI Healthcare provides access to clinical consultations and other medical and care-related services through its mobile application — TGI Tele Medicare App — and website https://tgihealthcare.in, using secure video conferencing and online service booking features.
          </p>
          <p>
            The following Terms and Conditions govern all transactions related to our services, including but not limited to online appointment booking, payments, refunds, and all other transactions made via the app, website, or any authorized third-party platforms.
          </p>
          <p>
            The services listed on the app and website do not constitute a recommendation or invitation to avail of any service. They are offered as optional tools to help users connect with healthcare professionals.
          </p>
          <p>
            Tele-consultations provided via the TGI Tele Medicare platform are not a substitute for in-person medical consultations. In case of emergencies or conditions requiring physical examination, users are advised to seek direct medical care.
          </p>
          <p>
            TGI Healthcare urges all users to independently assess the accuracy, usefulness, and suitability of the services before relying on them for any medical decision.
          </p>
          <p>
            By using the app or website, you agree to abide by these terms and confirm your understanding of the limitations of telemedicine services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

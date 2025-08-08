import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="p-6 md:py-16 md:px-12 max-w-5xl mx-auto bg-white rounded-xl shadow-lg text-gray-800">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-700 to-purple-400 text-transparent bg-clip-text">
        Privacy Policy
      </h1>

      <section className="text-lg leading-relaxed text-gray-700 space-y-6">
        <p>
          <strong className="text-indigo-700">TGI Healthcare</strong> is committed to protect the privacy of the patient information and handling the patient data in a responsible manner. The privacy policy explains how information is collected, used, disclosed, and accessed including any correction in the information as and when required. The use of information is restricted to individuals who are required to provide any services to the user. By accepting the privacy policy, it is hereby confirmed that the user is bound by the terms and conditions of this policy and provides consent regarding the collection, using, and sharing of information as explained in the privacy policy.
        </p>

        <p>
          We will regularly update the privacy policy from time to time. This will include adding, removing, or changing a particular section of the privacy policy as per the requirement. <strong className="text-indigo-700">TGI Healthcare</strong> reserves all such rights regarding the amendment of the information. It is advised that if the user does not agree with the privacy policy or any part of it at any time, he/ she should avoid using the various services provided and should not provide any personal details. If the user is using the services on behalf of another person, it is suggested that the user should accept the terms of this policy on the said person's behalf.
        </p>
      </section>
    </div>
  );
};

export default Privacy;

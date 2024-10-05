import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 sm:py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <form className="w-full sm:max-w-lg mx-auto bg-white p-6 sm:p-8 rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full border border-gray-300 p-2 sm:p-3 rounded" 
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full border border-gray-300 p-2 sm:p-3 rounded" 
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className="w-full border border-gray-300 p-2 sm:p-3 rounded" 
            placeholder="Your Message" 
            rows="5"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

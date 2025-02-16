import React, { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Destructure form fields after ensuring form.current is defined
    const { name, email, message } = form.current;

    // Use the destructured values
    const templateParams = {
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        'service_9f5wydm', // Replace with your EmailJS service ID
        'template_kmy76cr', // Replace with your EmailJS template ID
        templateParams, // Pass the destructured values here
        '4TouIIcO1RR4ApHfG' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    // Log the values of the form fields
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions? We're here to help. Reach out to us through any of the
          following methods.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Store Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Bike Street<br />
                    Bicycle City, BC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@futta-bikes.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Emergency Repairs</h3>
            <p className="text-gray-600">
              Need urgent assistance? Call our emergency repair hotline at (555)
              999-8888. Available during business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
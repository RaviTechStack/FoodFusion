import React from 'react';
import Nav from '../components/Nav';

const About = () => {
  return (
    <>
    <Nav />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Restro</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Discover the flavors of India in the heart of Kandivali
            </p>
          </div>
          
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  123 Foodie Street, Kandivali West, Mumbai, Maharashtra 400067, India
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Cuisine</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Variety of Vegetarian and Non-Vegetarian Indian Dishes
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Contact</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Phone: +91 98765 43210<br />
                  Email: info@restro.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Our Story</h2>
            <p className="mt-1 text-sm text-gray-500">
              Established in 2010, Restro has been serving the Kandivali community with authentic Indian cuisine for over a decade. Our passion for food and commitment to quality ingredients has made us a favorite among locals and visitors alike.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              At Restro, we believe in preserving traditional flavors while embracing modern culinary techniques. Our diverse menu caters to both vegetarian and non-vegetarian preferences, offering a wide range of dishes from various regions of India.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              We take pride in our warm hospitality and strive to create a welcoming atmosphere where every guest feels at home. Whether you're looking for a quick lunch, a family dinner, or a place to celebrate special occasions, Restro is here to serve you with delicious food and memorable experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;


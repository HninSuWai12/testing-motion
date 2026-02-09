import React from "react";

const Footer = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Background with gradient or solid color */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      {/* Optional decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-indigo-100/20 blur-3xl" />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Intro paragraph */}
        <div className="mb-16 md:mb-20">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We are a full-service tech company designing and building impactful
            digital products, brands, and meaningful experiences.
          </p>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
        </div>

        {/* WHAT DO WE DO section */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              WHAT DO WE DO
            </h2>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
              We do a lot here - no matter what our project size is, we all
              strive to understand and partner with our clients to create
              something new and exciting.
            </p>
          </div>

          {/* Optional feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Digital Products
              </h3>
              <p className="text-gray-600">
                End-to-end design and development of innovative digital
                solutions
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Brand Building
              </h3>
              <p className="text-gray-600">
                Creating memorable identities that resonate with target
                audiences
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Meaningful Experiences
              </h3>
              <p className="text-gray-600">
                Crafting user journeys that are both intuitive and impactful
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

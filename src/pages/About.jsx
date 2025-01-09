function About() {
    return (
      <div>
        {/* About Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">About Us</h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              At Cricket Academy, our mission is to nurture young talent and provide them with
              opportunities to excel in cricket. We are committed to building a solid foundation
              for aspiring players through world-class coaching and facilities.
            </p>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Meet Our Coaches</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="/assets/coach1.jpg"
                  alt="Coach 1"
                  className="w-32 h-32 mx-auto rounded-full shadow-md"
                />
                <h3 className="text-lg font-bold mt-4">John Smith</h3>
                <p className="text-gray-700">Head Coach</p>
              </div>
              <div className="text-center">
                <img
                  src="/assets/coach2.jpg"
                  alt="Coach 2"
                  className="w-32 h-32 mx-auto rounded-full shadow-md"
                />
                <h3 className="text-lg font-bold mt-4">Jane Doe</h3>
                <p className="text-gray-700">Batting Coach</p>
              </div>
              <div className="text-center">
                <img
                  src="/assets/coach3.jpg"
                  alt="Coach 3"
                  className="w-32 h-32 mx-auto rounded-full shadow-md"
                />
                <h3 className="text-lg font-bold mt-4">Robert Brown</h3>
                <p className="text-gray-700">Bowling Coach</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;
  
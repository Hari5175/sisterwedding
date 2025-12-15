import React, { useState } from 'react';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    attending: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="rsvp" className="py-24 bg-wedding-paper relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 md:p-12 shadow-2xl rounded-xl border-2 border-wedding-gold relative">
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-wedding-red"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-wedding-red"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-wedding-red"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-wedding-red"></div>

          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-wedding-red mb-2">R.S.V.P</h2>
            <p className="font-serif text-gray-600">Please grace us with your presence</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="text-2xl font-serif text-wedding-red mb-2">Thank You!</h3>
              <p className="text-gray-600">Your response has been recorded. We can't wait to see you!</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-wedding-gold underline hover:text-wedding-red"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-serif text-gray-700 mb-2">Guest Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-wedding-paper border-b-2 border-wedding-gold focus:border-wedding-red outline-none px-4 py-3 transition-colors font-body"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="flex gap-6">
                 <div className="flex-1">
                    <label className="block font-serif text-gray-700 mb-2">Number of Guests</label>
                    <select 
                      className="w-full bg-wedding-paper border-b-2 border-wedding-gold focus:border-wedding-red outline-none px-4 py-3 font-body"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                 </div>
                 <div className="flex-1">
                    <label className="block font-serif text-gray-700 mb-2">Attending?</label>
                    <select 
                      className="w-full bg-wedding-paper border-b-2 border-wedding-gold focus:border-wedding-red outline-none px-4 py-3 font-body"
                      value={formData.attending}
                      onChange={(e) => setFormData({...formData, attending: e.target.value})}
                    >
                      <option value="yes">Joyfully Accepts</option>
                      <option value="no">Regretfully Declines</option>
                    </select>
                 </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-wedding-red text-white font-serif py-4 text-lg hover:bg-red-900 transition-colors shadow-lg mt-4"
              >
                Confirm Attendance
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
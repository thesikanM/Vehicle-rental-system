import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const MVP = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingStep, setBookingStep] = useState('search'); // search, details, confirmation

  // Mock car data
  const cars = [
    {
      id: 1,
      name: 'Maruti Swift',
      price: 1500,
      image: '🚗',
      seats: 5,
      fuel: 'Petrol',
      transmission: 'Manual',
      available: true
    },
    {
      id: 2,
      name: 'Hyundai i20',
      price: 1800,
      image: '🚙',
      seats: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      available: true
    },
    {
      id: 3,
      name: 'Toyota Fortuner',
      price: 3500,
      image: '🚐',
      seats: 7,
      fuel: 'Diesel',
      transmission: 'Automatic',
      available: true
    },
    {
      id: 4,
      name: 'Honda City',
      price: 2000,
      image: '🚗',
      seats: 5,
      fuel: 'Petrol',
      transmission: 'Automatic',
      available: true
    }
  ];

  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setBookingStep('details');
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
    setBookingStep('confirmation');
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    alert(`✅ Booking Confirmed!\n\nCar: ${selectedCar.name}\nPrice: ₹${selectedCar.price}/day\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    setBookingStep('search');
    setSelectedCar(null);
    setFormData({
      pickupLocation: '',
      dropoffLocation: '',
      pickupDate: '',
      pickupTime: '',
      dropoffDate: '',
      dropoffTime: '',
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">🚗 Rent-a-Ride MVP</h1>
          <p className="text-green-100 mt-2">Book your perfect car today</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Step 1: Search */}
        {bookingStep === 'search' && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Perfect Car</h2>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  Dropoff Location
                </label>
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  placeholder="Enter dropoff location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-2" />
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaClock className="inline mr-2" />
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-2" />
                  Dropoff Date
                </label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaClock className="inline mr-2" />
                  Dropoff Time
                </label>
                <input
                  type="time"
                  name="dropoffTime"
                  value={formData.dropoffTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 lg:col-span-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 mt-4"
              >
                Search Available Cars
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Select Car */}
        {bookingStep === 'details' && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setBookingStep('search')}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                ← Back to Search
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cars.map(car => (
                <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 p-8 text-center text-6xl">
                    {car.image}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{car.name}</h3>
                    <div className="text-sm text-gray-600 mb-3">
                      <p>👥 {car.seats} Seats</p>
                      <p>⛽ {car.fuel}</p>
                      <p>⚙️ {car.transmission}</p>
                    </div>
                    <div className="border-t pt-3 mb-3">
                      <p className="text-2xl font-bold text-green-600">₹{car.price}/day</p>
                    </div>
                    <button
                      onClick={() => handleSelectCar(car)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                      Select Car
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {bookingStep === 'confirmation' && selectedCar && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <button
                onClick={() => setBookingStep('details')}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                ← Back to Cars
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">Complete Your Booking</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Car Summary */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Selected Car</h3>
                <div className="text-center mb-4 text-6xl">{selectedCar.image}</div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Car:</strong> {selectedCar.name}</p>
                  <p><strong>Seats:</strong> {selectedCar.seats}</p>
                  <p><strong>Fuel:</strong> {selectedCar.fuel}</p>
                  <p><strong>Transmission:</strong> {selectedCar.transmission}</p>
                  <p className="text-2xl font-bold text-green-600 mt-4">₹{selectedCar.price}/day</p>
                </div>

                <div className="mt-6 bg-white rounded-lg p-4">
                  <h4 className="font-bold mb-2">Trip Details</h4>
                  <p className="text-sm text-gray-600">
                    <strong>From:</strong> {formData.pickupLocation} ({formData.pickupDate} {formData.pickupTime})
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>To:</strong> {formData.dropoffLocation} ({formData.dropoffDate} {formData.dropoffTime})
                  </p>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Your Details</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> This is a demo booking. No actual payment will be processed.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 mt-6"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Rent-a-Ride MVP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MVP;

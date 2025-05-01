import React from 'react'

const Venue = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-pixelf">Event Venue</h2>
          <div className="mt-10">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">Innovation Hub</h3>
              <p className="mt-2 text-gray-600">123 Tech Street, Innovation District</p>
              <p className="text-gray-600">City, State 12345</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Getting There:</h4>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>5 minutes walk from Central Station</li>
                  <li>Parking available on premises</li>
                  <li>Accessible by bus routes 101, 102</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue

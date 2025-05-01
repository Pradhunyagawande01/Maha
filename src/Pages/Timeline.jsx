import React from 'react'

const Timeline = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 font-pixelf">Event Timeline</h2>
        <div className="mt-10">
          <div className="space-y-8">
            {[
              { time: "9:00 AM", day: "Day 1", event: "Registration & Check-in" },
              { time: "10:00 AM", day: "Day 1", event: "Opening Ceremony" },
              { time: "11:00 AM", day: "Day 1", event: "Hacking Begins" },
              { time: "11:00 AM", day: "Day 2", event: "Hacking Ends" },
              { time: "2:00 PM", day: "Day 2", event: "Project Presentations" },
              { time: "4:00 PM", day: "Day 2", event: "Awards Ceremony" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-32 text-sm text-gray-500">{item.time}</div>
                <div className="flex-shrink-0 w-24 text-sm text-gray-500">{item.day}</div>
                <div className="flex-1 bg-white rounded-lg shadow p-4">
                  <p className="text-gray-900">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline

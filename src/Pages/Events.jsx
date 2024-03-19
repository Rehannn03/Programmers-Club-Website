import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Women's Day celebration",
    date: "11th March 2021",
    description: (
      <p className="font-thin">
        Celebrating the achievements of today's Women. <br /> We had several events/games planned for the day. <br /> The event was a huge success and we had a great time.
      </p>
    ),
    image: "https://via.placeholder.com/300",
  },
  // Add more event objects here
];

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (eventId) => {
    setSelectedEvent(events.find((event) => event.id === eventId));
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-gray-100 ">
      <h2 className="text-3xl font-mono text-gray-800 py-4 text-center mb-5">
        Past Events
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="shadow-md rounded-md p-4 cursor-pointer hover:bg-gray-200"
            onClick={() => handleEventClick(event.id)}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm">{event.date}</p>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedEvent.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedEvent.date}</p>
            {selectedEvent.description}
            <div className="flex justify-end mt-4">
              <button
                class="relative mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1"
                onClick={closeModal}
              >
                <div class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 text-blue-700"></div>
                Close
              </button>
            </div>
            <img
              className="mt-4 mx-auto rounded-md"
              src={selectedEvent.image}
              alt={selectedEvent.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;

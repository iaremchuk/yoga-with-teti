export default function SchedulePage() {
  const classes = [
    {
      day: "Monday",
      time: "8:00 AM",
      type: "Vinyasa Flow",
      location: "Shoreditch, London",
    },
    {
      day: "Wednesday",
      time: "6:00 PM",
      type: "Hatha Yoga",
      location: "Camden, London",
    },
    {
      day: "Friday",
      time: "7:00 AM",
      type: "Sunrise Yoga",
      location: "Hyde Park, London",
    },
  ];

  return (
    <section className="py-16 px-4 bg-green-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-900">
        Class Schedule
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6">
        {classes.map((item, index) => (
         
         <div
         key={index}
         className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-3 items-center"
       >
         {/* Column 1: Day + Time */}
         <div>
           <h3 className="text-xl font-semibold text-green-800">
             {item.day}
           </h3>
           <p className="text-gray-600">{item.time}</p>
         </div>
       
         {/* Column 2: Class type */}
         <div>
           <p className="text-lg font-medium text-gray-800">
             {item.type}
           </p>
         </div>
       
         {/* Column 3: Location */}
         <div className="text-gray-600 text-sm">
           📍 {item.location}
         </div>
       </div>
        ))}
      </div>
    </section>
  );
}
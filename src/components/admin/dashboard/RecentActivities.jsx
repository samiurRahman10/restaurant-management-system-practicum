const RecentActivities = () => {
  const activities = [
    {
      action: "Table #5 placed order #1245",
      time: "2 mins ago"
    },
    {
      action: "Reservation for 4 people at 7:30 PM",
      time: "15 mins ago"
    },
    {
      action: "Order #1243 completed - $85.50",
      time: "1 hour ago"
    },
    {
      action: "New menu item added: Seafood Pasta",
      time: "2 hours ago"
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 md:p-6">
      <h3 className="font-semibold mb-4 text-black">Recent Activities</h3>
      <ul className="space-y-3 text-gray-700 text-sm">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between items-center">
            <span><strong>{activity.action.split(' ')[0]}</strong> {activity.action.split(' ').slice(1).join(' ')}</span>
            <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
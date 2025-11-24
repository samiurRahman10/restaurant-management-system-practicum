const AlertsFooter = () => {
  const alerts = [
    {
      type: "critical",
      icon: "fas fa-exclamation-triangle",
      title: "4 ingredients below critical level",
      subtitle: "Immediate reorder required",
      bgColor: "bg-red-100",
      textColor: "text-red-700",
      iconColor: "text-red-700"
    },
    {
      type: "warning",
      icon: "fas fa-clock",
      title: "2 orders behind schedule",
      subtitle: "Review and adjust timelines",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      iconColor: "text-yellow-700"
    },
    {
      type: "info",
      icon: "fas fa-truck",
      title: "3 deliveries expected today",
      subtitle: "Check delivery schedule",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      iconColor: "text-blue-700"
    }
  ];

  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {alerts.map((alert, index) => (
        <div 
          key={index}
          className={`${alert.bgColor} ${alert.textColor} text-sm font-semibold rounded-lg p-4 flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer`}
        >
          <i className={`${alert.icon} text-xl mb-2 ${alert.iconColor}`}></i>
          <span className="text-xs mt-1">{alert.title}</span>
          <span className="text-xs mt-auto font-normal">{alert.subtitle}</span>
        </div>
      ))}
    </footer>
  );
};

export default AlertsFooter;
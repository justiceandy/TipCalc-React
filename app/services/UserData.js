module.exports =  {
  type: "Barber/Hair Stylist",
  year: 2016,
  day: 29,
  month: 10,
  today: {
      sales: {
        total: 200,
        commisionRate: 0.50,
        commision: 100,
        tax: 0
      },
      clients: 10,
      service: {
        total: 200,
        commision: 0.50,
        commisionRate: 100,
        tax: 0
      },
      tips: {
        cash: {
          total: 200,
          tax: 0
        },
        card: {
          total: 200,
          tax: 0.40
        },
        average: 6,
        highest: 10,
        lowest: 3
      },
      hours: {
        start: {
          hour: 12,
          minute: 30
        },
        end: {
          hour: 18,
          minute: 0
        },
        hours: {
          hour: 5,
          minute: 30
        }
      },
      dollarPerHour: 12.50,
      totalDailyRevenue: 250
  },
  taxes: "disabled",
  calendar: [
    {long: "January", short: "Jan", days: [] },
    {long: "Febuary", short: "Feb", days: [] },
    {long: "March", short: "Mar", days: [] },
    {long: "April", short: "Apr", days: [] },
    {long: "May", short: "May", days: [] },
    {long: "June", short: "Jun", days: [] },
    {long: "July", short: "Jul", days: [] },
    {long: "August", short: "Aug", days: [] },
    {long: "September", short: "Sep", days: [] },
    {long: "October", short: "Oct", days: [] },
    {long: "November", short: "Nov", days: [] },
    {long: "December", short: "Dec", days: [] }
  ]
};

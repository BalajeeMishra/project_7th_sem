const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

module.exports.timingFormat = (webinartiming) => {
  var date = new Date(webinartiming);
  var year = date.getFullYear();
  const monthname = monthNames[date.getMonth()];
  //8 for this month...
  let day = weekday[date.getDay()];
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var givenDate = String(date.getDate()).padStart(2, "0");
  var givenDateShowpage =
    day + ", " + monthname + " " + givenDate + ", " + year;
  var datePattern = year + "-" + month + "-" + givenDate;
  var dateformattransaction = givenDate + "-" + month + "-" + year;
  var monthandyear = month + "-" + year;
  const formats = {
    givenDateShowpage,
    datePattern,
    dateformattransaction,
    givenDate,
    month,
    year,
    monthandyear,
  };
  return formats;
};

module.exports.addtimeinAmPmFormat = (timing) => {
  var [a, b] = timing.split(":");
  var eastern = 0; // apna wala hai.
  var pacific = 0;
  if (a == 00) {
    pacific = "9" + ":" + b + " PM";
    eastern = "12" + ":" + b + " AM";
  }
  if (a == 3) {
    pacific = "12" + ":" + b + " AM";
  }
  if (a < 12 && a > 3) {
    const num = parseInt(a) - 3;
    pacific = num.toString() + ":" + b + " AM";
  }
  if (a > 00 && a < 3) {
    pacific = "21" + a + ":" + b + " PM";
  }

  if (a < 12 && a != 00) {
    eastern = a + ":" + b + " AM";
  }
  if (a == 12) {
    eastern = a + ":" + b + " PM";
    pacific = "9" + ":" + b + "AM";
  }
  if (a == 15) {
    pacific = "12" + ":" + b + " PM";
  }
  if (a > 12 && a < 15) {
    const num = parseInt(a) - 3;
    pacific = num.toString() + ":" + b + " AM";
  }
  if (a > 15) {
    const num = parseInt(a) - 15;
    pacific = num.toString() + ":" + b + " PM";
  }
  if (a > 12) {
    const num = parseInt(a) - 12;
    eastern = num.toString() + ":" + b + " PM";
  }
  const eastern_pacific = {
    eastern,
    pacific,
  };
  // console.log("check it now", eastern_pacific);
  return eastern_pacific;
};

module.exports.transactionWeekFormat = (date) => {
  // If no date object supplied, use current date
  // Copy date so don't modify supplied date
  var now = date ? new Date(date) : new Date();

  // set time to some convenient value
  now.setHours(0, 0, 0, 0);

  // Get the previous Monday
  var monday = new Date(now);
  monday.setDate(monday.getDate() - monday.getDay() + 1);

  // Get next Sunday
  var sunday = new Date(now);
  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);
  // var [a, b, c] = String(monday).split("-");
  // console.log("balajee", a, b, c);
  // Return array of date objects
  return [monday, sunday]; // but isko shi lane ke liye jo sabse upar me hai usko call krna
  // console.log("balajee mishra", sundayNumber, sunday, monday);
};

// this function is related to dateforsort in webinar.js model.
module.exports.firsttwomonthfromnow = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var nextMonth = String(date.getMonth() + 2).padStart(2, "0");
  var nexttonextMonth = String(date.getMonth() + 3).padStart(2, "0");
  var currentMonth = month + "-" + year;
  var firstmonthfromnow = nextMonth + "-" + year;
  var secondmonthfromnow = nexttonextMonth + "-" + year;
  //new added
  const monthnameandyear = monthNames[date.getMonth()] + "," + " " + year;
  const nextnameandyear = monthNames[date.getMonth() + 1] + "," + " " + year;
  const tonextnameandyear = monthNames[date.getMonth() + 2] + "," + " " + year;
  const formats = {
    currentMonth,
    firstmonthfromnow,
    secondmonthfromnow,
    monthnameandyear,
    nextnameandyear,
    tonextnameandyear,
  };
  return formats;
};

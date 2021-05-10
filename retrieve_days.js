// DAYS OF THE WEEK EXERCISE

let days = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
}

function returnDay(date) {
  if (date < 1 || date > 7) {
    return null
  } else {
    return days[date]
  }
}

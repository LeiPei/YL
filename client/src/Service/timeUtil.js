const START = new Date(2018, 9, 6); // eslint-disable-line
function convertMiliseconds(miliseconds, format) { // eslint-disable-line
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
  
  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  
  switch(format) {
	case 's':
		return total_seconds;
		break; // eslint-disable-line
	case 'm':
		return total_minutes;
		break; // eslint-disable-line
	case 'h':
		return total_hours;
		break; // eslint-disable-line
	case 'd':
		return days;
		break; // eslint-disable-line
	default:
		return { d: days, h: hours, m: minutes, s: seconds };
  }
}

export {START, convertMiliseconds};


var data = [
	['CS251', 'Computer Organization and Design'],
	['CS246', 'Object-Oriented Software Development'],
	['CS245', 'Logic and Computation'],
	['CS241', 'Foundations of Sequential Programs'],
	['CS240', 'Data Structures and Data Management'],
	['CS136', 'Elementary Algorithm Design and Data Abstraction'],
	['CS135', 'Designing Functional Programs']
];

function changeToCourses() {
// 	var oldHTML = document.getElementById("section").innerHTML;
	var html = "<h4> Computer Science Related Course Taken: </h4>";
	html += '<table class="data">';
	// Step through the rows of the data.
	for(var row in data) {
		var rowData = data[row];
		html += '<tr>';
		for(var col in rowData) {
			var colData = rowData[col];
			html += '<td>';
			html += colData;
			html += '</td>';
		}
		html += '</tr>';
	}
		html += '</table>';
	document.getElementById("section").innerHTML = html;
}

function displayContacts() {
	var email = 'Email: j43shi@uwaterloo.ca<br>';
	var phone = 'Phone: +1 519.781.5813<br>';
	var html = email + phone;
	document.getElementById("section").innerHTML = html;
}

function displayTime() {
	document.getElementById("footer").innerHTML = Date();
}

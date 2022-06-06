"use strict";

let curDate = new Date();

function createDateScreen() {
	let tableRef = document.getElementById("calTable");
	tableRef.innerHTML = '';

	curDate.setDate(1);
	let firstDay = curDate.getDay();
	let year = curDate.getFullYear();
	let month = curDate.getMonth();
	let monthDays = daysInMonth(month+1, year);

	createFirstRow(firstDay, monthDays, year);
}

function nextMonth() {
	curDate.setMonth(curDate.getMonth()+1);
	createDateScreen();
}

function prevMonth() {
	curDate.setMonth(curDate.getMonth()-1);
	createDateScreen();
}

function nextYear() {
	curDate.setFullYear(curDate.getFullYear()+1);
	createDateScreen();
}

function prevYear() {
	curDate.setFullYear(curDate.getFullYear()-1);
	createDateScreen();
}

function createFirstRow(firstDay, monthDays, year) {
	
	let tableRef = document.getElementById("calTable");
	
	addHeadings(tableRef);

	// semiScreen
	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	document.getElementById("monthScreen").innerHTML = monthNames[curDate.getMonth()];
	document.getElementById("yearScreen").innerHTML = curDate.getFullYear();

	let newRow = document.createElement("TR");
	for(let i = 0; i < firstDay; i++) {
		let newTD = document.createElement("TD");
		let newTextNode = document.createTextNode(' ');
		newTD.appendChild(newTextNode);
		newRow.appendChild(newTD);
	}

	let leftDays = 7-firstDay;
	let startDate;
	for(startDate = 1; startDate <= leftDays; startDate++) {
		let newTD = document.createElement("TD");
		let newTextNode = document.createTextNode(startDate);
		newTD.appendChild(newTextNode);
		newRow.appendChild(newTD);
		monthDays--;
	}
	tableRef.appendChild(newRow);
	createAnotherRow(startDate, tableRef, monthDays);
}

function createAnotherRow(startDate, tableRef, monthDays) {

	console.log(startDate +' '+ monthDays);

	let newRow = document.createElement("TR");

	for(let i = 0; (i < 7) && (monthDays > 0); i++) {
		let newTD = document.createElement("TD");
		let newTextNode = document.createTextNode(startDate++);
		newTD.appendChild(newTextNode);
		newRow.appendChild(newTD);
		monthDays--;
	}

	tableRef.appendChild(newRow);

	if(monthDays > 0) {
		createAnotherRow(startDate, tableRef, monthDays);
	}
}

// It accepts 1 for Jan, 2 for Feb
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function addHeadings(tableRef) {
	let a = ['S','M','T','W','T','F','S'];

	let newRow = document.createElement("TR");
	for(let i = 0; i < 7; i++) {
		let newTD = document.createElement("TH");
		let newTextNode = document.createTextNode(a[i]);
		newTD.appendChild(newTextNode);
		newRow.appendChild(newTD);
	}
	tableRef.appendChild(newRow);
}

function createMonthScreen() {
	let tableRef = document.getElementById('calTable');
	tableRef.innerHTML = '';

	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	let text = '<tr><td>'
	for(i = 0; i < 12; i++) {
		text += monthNames[i] + '</td><td>';
		
	}

}
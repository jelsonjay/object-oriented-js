'use strict';

function Staff(name, email, job_title) {
	(this.name = name), (this.email = email);
	this.job_title = job_title;
	this.online = true;
}

Staff.prototype.signin = function () {
	this.online = true;
	console.log(this.name, 'username as signin');
};
Staff.prototype.signout = function () {
	this.online = false;
	console.log(this.name, 'username as signout');
};

function itManager(...parm) {
	Staff.call(parm);
	this.newRole = 'IT Director';
}

// Prototype Inheritance
itManager.prototype = Object.create(Staff.prototype);

// Remove
itManager.prototype.removeStaff = function (s) {
	staffs = staffs.filter((staff) => {
		return staff.email != s.email;
	});
};

let marketing = new Staff('Sara Tyson', 'sara19@gmail.com', 'Marketing');
let juniorDev = new Staff('James Ryan', 'james@gmail.com', 'Junior Developer');
let tester = new Staff('Phil Jame', 'phil@outlook.com', 'Tester');
let web_design = new Staff('Michael Ross', 'web24@outlook.com', 'Web Design');
let it_manager = new Staff('Alberto P', 'alberto@outlook.com', 'IT Manager');
let staffs = [tester, web_design, marketing, juniorDev, it_manager];

console.log(it_manager);

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

let tester = new Staff('Phil Jame', 'phil@outlook.com', 'Tester');
let web_design = new Staff('Michael Ross', 'web24@outlook.com', 'Web Design');
let it_manager = new Staff(
	'Alberto Pedro',
	'alberto@outlook.com',
	'IT Manager'
);

console.log(it_manager);

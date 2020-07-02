'use strict';

function Staff(name, email, job_title) {
	(this.name = name), (this.email = email);
	this.job_title = job_title;
	this.signin = function () {};
}

Staff.prototype.signin = function () {
	this.online = true;
	console.log(this.name, 'username as signin');
};
Staff.prototype.signout = function () {
	this.online = true;
	console.log(this.name, 'username as signout');
};

let tester = new Staff('Phil J', 'phil@outlook.com', 'Tester');
let web_design = new Staff('Steveson Web', 'web24@outlook.com', 'Web Design');

console.log(tester);
web_design.signin();

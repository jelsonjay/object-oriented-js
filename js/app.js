'use strict';

function Staff(name, email, job_title) {
	(this.name = name), (this.email = email);
	this.job_title = job_title;
	this.signin = function () {
		console.log(this.name, 'username as signin');
	};
}

let tester = new Staff('Phil J', 'phil@outlook.com', 'Tester');
let web_design = new Staff('Steson Web', 'web24@outlook.com', 'Web Design');

console.log(tester);
web_design.signin();

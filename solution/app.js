console.log("Hello world!")

function calculate() {
	const principal = getPrincipal();
	const interest = 1 + getReturnPerc() / 100;
	const time = getNumOfYears();
	const total = principal * interest ** time;
	alert("You will have $" + total.toFixed(2));
}

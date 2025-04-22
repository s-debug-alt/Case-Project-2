// def room constructor function and assign type of room and price
function room(type, price) {
	
	this.type = type;
	this.price = price;
	this.isavailable = true;// assign status for availabilty
	//def a method on object
this.book= function(){
	// check if room availabilty
	if(this.isavailable) {
		this.isavailable = false; //MARK IT AS NOT AVAILABLE
		return "room " + this.type + " is now booked."; // return message
	}else {return "room " + this.type + " is already booked."; // return message
}}}
function customer(name, email) { //def customer constructor function
	this.name = name; //asign name
	this.email = email; //assign email
}
this.Details = function(){ return this.name +" " + this.email; // def method to return details
};
function Booking(customer, room, date){ //def booking constructor function
	this.customer = customer; //store obj
	this.room = room; //store obj
	this.date = date; //store date Booking


this.confirm = function(){ return this.room.book(); // def method to confrim and return results
};}
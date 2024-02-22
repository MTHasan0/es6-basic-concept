class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }

    move(){
        console.log('The car is running on the road');
    }
}


class bus extends Vehicle{
    constructor(name, price, seats, ticketPrice){
        super(name, price);
        this.seats = seats;
        this.ticketPrice = ticketPrice;

    }


}

class truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;

    }

}

let car = new Vehicle('Royal Enfield', 350000);

console.log(car);
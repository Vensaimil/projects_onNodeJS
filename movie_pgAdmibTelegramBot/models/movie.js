let moviesArray = [];

module.exports = class Movie {
    constructor(name, price, dateTime, description) {
        this.name = name;
        this.price = price;
        this.dateTime = dateTime;
        this.description = description;
        
    }

    save() {
        moviesArray.push(this);
    }

    static getAll() {
        return moviesArray;
    }
}
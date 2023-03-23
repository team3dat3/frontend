
export default class Reservation {
    constructor(id, checkedIn) {
        this.id = id;
        this.checkedIn = checkedIn;
    }

    static createFrom(json) {
        return new Reservation(json.id, json.checkedIn);
    }

    static createCollectionFrom(json) {
        const collection = [];
        for (let i = 0; i < json.length; i++) {
            collection.push(Reservation.createFrom(json[i]));
        }
        return collection;
    }
}
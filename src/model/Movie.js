
export default class Movie {
    constructor(title, age) {
        this.title = title;
        this.age = age;
    }

    static createFrom(json) {
        return new Movie(json.title, json.age);
    }

    static createCollectionFrom(json) {
        const collection = [];
        for (let i = 0; i < json.length; i++) {
            collection.push(Movie.createFrom(json[i]));
        }
        return collection;
    }
}
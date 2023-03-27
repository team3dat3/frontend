
/**
 * Base model class.
 * 
 * @abstract
 * @returns {BaseModel}
 */
export default class BaseModel {

    /**
     * Creates a collection of model objects from a JSON array.
     *  
     * @param {Type} clazz
     * @param {Array} json
     */
    static createCollectionFrom(clazz, json) {
        const collection = [];
        for (let i = 0; i < json.length; i++) {
            collection.push(clazz.createFrom(json[i]));
        }
        return collection;
    }
}
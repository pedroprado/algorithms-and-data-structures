

//HASH TABLE: Tables that store key-value pairs. "Map keys to values"
//Keys are NOT ORDERED!
//Keys are HUMAN READABLE
//An OBJECT in JavaScript is a HashTable (the property is the key, and the value is the value)

//"HASH" PART:
//Computers can not undestand HUMAN READBLE KEYS
//We need a HASH FUNCTIONS (Which converts the human readable keys to number keys (MAPS)!)

//Examples: Storing colors in HashTables

//"cyan" -----hashFunction ------> [0]   **a hash function that converts a color  key "cyan" to number 0 (which is gonna be used to store the data in a list)


class HashTable{
    constructor(size=53){
        this.map = new Array(size);
    }

    //HASH FUNCTIONS:
    //1.FAST and CONSTANT;
    //2.UNIFORM : low indidence of COLLISIONS
    //3.DETERMINISTIC: same input, same output!
    _hash = (key) => {
        let total = 0;
        const WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++){
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = total*WEIRD_PRIME+ value;
        }
        return total%this.map.length;
    };

    //SET: puts a key-value pair the the Hash Table
    //1.Converts the key for the hashed key
    //2.Check the position of the Array (using the hashed key number) and insert the value there
    //3.If there is already a value, push the value (Separate Chainning Strategy)
    set = (key, value) => {
        const index = this._hash(key);
        const stored = this.map[index];
        if(!stored){
            this.map[index] = [];
        }
        this.map[index].push([key, value]);
        
        return this;
    }

    get = (key) => {
        const hashedKey = this._hash(key);
        const stored = this.map[hashedKey];
        if(stored){
            return stored
            .filter(elem => elem[0] === key)
            .map(elem => elem[1])[0];
        }
        return undefined;
    }

    //Returns a collection of Keys in the HashTable
    keys = () => {
        const keys = [];
        for(let i=0; i< this.map.length; i++){
            const data = this.map[i]; 
            if(data){
                for(let j=0; j<data.length; j++){
                    const key = data[j][0];
                    if(!keys.includes(key)) keys.push(key);
                }
            }
        }
        return keys;
    };

    //Returns a collection of Values in the HashTable
    //Take care with duplicate data!
    values = () => {
        const values = [];
        for(let i=0; i< this.map.length; i++){
            const data = this.map[i];
            if(data){
                for(let j=0; j<data.length; j++){
                    const value = data[j][1];
                    if(!values.includes(value)) values.push(value);
                }
            }
        }
        return values;
    };
}

//Right now, our Hash Table will insert many things with the same key!
//When we get, we get ONLY the FIRST element inserted with that key
//This is a SIMPLE implementation


//TIME COMPLEXITY: Constant=> all operations are indexed
//Insert = O(1)     
//Deletion = O(1)
//Access = O(1)

module.exports = HashTable;

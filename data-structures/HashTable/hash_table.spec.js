const HashTable = require('./hash_table');


describe('HASH TABLE TESTS' , () => {
    describe('SET/GET OPERATIONs', () => {    
        test('setting and getting elements inside the table', () => {
            const ht = new HashTable(17);
            ht.set("maroon","#800000");
            ht.set("yellow","#FFFF00");
            ht.set("olive","#808000");
            ht.set("salmon","#FA8072");
            ht.set("lightcoral","#F08080");
            ht.set("mediumvioletred","#C71585");
            ht.set("plum","#DDA0DD");
            
            expect(ht.get('maroon')).toBe('#800000');
            expect(ht.get('yellow')).toBe('#FFFF00');
            expect(ht.get('olive')).toBe('#808000');
            expect(ht.get('salmon')).toBe('#FA8072');
            expect(ht.get('lightcoral')).toBe('#F08080');
            expect(ht.get('mediumvioletred')).toBe('#C71585');
            expect(ht.get('plum')).toBe('#DDA0DD');

        });
        test('getting elements outside the table', ()=>{
            const ht = new HashTable(17);
            ht.set("maroon","#800000");
            ht.set("yellow","#FFFF00");

            expect(ht.get('acqua')).toBe(undefined);
        });
    });
    describe('KEYS and VALUES Operations', ()=>{
        it('should get Keys', ()=>{
            const ht = new HashTable(17);
            ht.set("maroon","#800000");
            ht.set("yellow","#FFFF00");
            ht.set("olive","#808000");
            ht.set("salmon","#FA8072");
            ht.set("lightcoral","#F08080");
            ht.set("mediumvioletred","#C71585");
            ht.set("plum","#DDA0DD");

            const keys = ht.keys();

            expect(keys.sort()).toStrictEqual(['maroon', 'yellow','olive', 'salmon', 'lightcoral', 'mediumvioletred', 'plum'].sort());

        }); 
        it('should get Values', ()=>{
            const ht = new HashTable(17);
            ht.set("maroon","#800000");
            ht.set("yellow","#FFFF00");
            ht.set("olive","#808000");
            ht.set("salmon","#FA8072");
            ht.set("lightcoral","#F08080");
            ht.set("mediumvioletred","#C71585");
            ht.set("plum","#DDA0DD");

            const values = ht.values();

            expect(values.sort()).toStrictEqual(['#800000', '#FFFF00','#808000', '#FA8072', '#F08080', '#C71585', '#DDA0DD'].sort());
        });
    });
    describe('Hash Function', () => {
        test('should be deterministic', () =>{
            const ht = new HashTable(17);

            const hashed = ht._hash('memo');

            expect(hashed).toBe(ht._hash('memo'));
        })
    });
});
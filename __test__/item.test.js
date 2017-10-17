var Shop = require('../src/shop');
var Item = require('../src/item');

describe("item test", function() {

	it('Item name does not change after update', () => {
		const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
	    const items = gildedRose.updateQuality();
	    expect(items[0].name).toBe("foo");
    });

    it('Item count does not change after update', () => {
		const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
		const prevLen = gildedRose.items.length;
	    const items = gildedRose.updateQuality();
	    expect(items.length).toBe(prevLen);
    });

});

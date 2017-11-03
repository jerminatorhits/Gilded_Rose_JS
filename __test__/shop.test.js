const Shop = require('../src/shop');
const Item = require('../src/item');

describe("Regular Item", function() {
  it('does not change name after update', () => {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
  });

  it('degrades quality twice as fast after sellIn is zero', () => {
    const gildedRose = new Shop([ new Item("foo", -1, 5) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(-2);
  });

  it('should never have negative quality', () => {
    const gildedRose = new Shop([ new Item("foo", 0, 0), new Item("foo2", -1, 1) ]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);
  });
});

describe("Aged Brie", function() {
  it('should increase in quality while less than 50', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
    const prevQuality = gildedRose.items[0].quality; 
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBeGreaterThan(prevQuality);
  });

  it('should increase by 1', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 3, 1) ]);
    const prevQuality = gildedRose.items[0].quality; 
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(2);
  });

  it('never goes above 50 quality', () => {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 50) ]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toEqual(50);
  });
});

describe("Sulfuras", function() {
  it('should never change sellIn or Quality', () => {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    const prevSellIn = gildedRose.items[0].sellIn; 
    const prevQuality = gildedRose.items[0].quality; 
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(prevQuality);
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(prevSellIn);
  });
});

describe("Backstage passes", function() {
  it('increase as sellIn approaches', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10) ]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(11);
  });

  it('increase by 2 as sellIn approaches (<= 10 days)', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10), new Item("Backstage passes to a TAFKAL80ETC concert", 7, 10) ]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(12);
    expect(items[1].quality).toBe(12);
  });

  it('increase by 3 as sellIn approaches (<= 5 days)', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10), new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10) ]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(13);
    expect(items[1].quality).toBe(13);
  });

  it('has zero quality after concert', () => {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10), new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0) ]);
    
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);
  });
});

describe("Conjured Item", function() {
  it('degrade 2x regular item rate', () => {
    const gildedRose = new Shop([ new Item("Conjured", 5, 5) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(3);
  });
});
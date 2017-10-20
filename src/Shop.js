class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      var name = item.name;
      if (name.includes('Sulfuras')) {
        continue;
      }
      else if (name.includes('Aged Brie')) {
        updateBrie(item);
      }
      else if (name.includes('Backstage passes')) {
        updateConcertTicket(item);
      } 
      else if (name.includes('Conjured')) {
        updateConjuredItem(item);
      }
      else {
        updateRegularItem(item);
      }
      checkQualityBounds(item);
    }
    return this.items;

    function updateSellIn(item) {
      item.sellIn--;
    }

    function updateBrie(item) {
      if (item.quality < 50) {
        item.quality++;
      }
      updateSellIn(item);
    }

    function updateConcertTicket(item) {
      if (item.sellIn <= 0) {
        item.quality = 0;
      }
      else if (item.sellIn < 6) {
        item.quality += 3
      }
      else if (item.sellIn < 11) {
        item.quality += 2;
      }
      else {
        item.quality++;
      }
      updateSellIn(item);
    }

    function updateConjuredItem(item) {
      if (item.sellIn <= 0) {
        item.quality -= 4;
      }
      else {
        item.quality -= 2;
      }
    }

    function updateRegularItem(item) {
      if (item.sellIn <= 0) {
        item.quality -= 2;
      }
      else {
        item.quality--;
      }
    }

    function checkQualityBounds(item) {
      if (item.quality > 50) {
        item.quality = 50;
      }
      if (item.quality < 0) {
        item.quality = 0;
      }
    }
  }
}

module.exports = Shop;
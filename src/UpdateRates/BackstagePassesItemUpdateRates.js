const ItemUpdateRates = require('./ItemUpdateRates');

class BackstagePassesItemUpdateRates extends ItemUpdateRates {
  constructor(){
    super();
    this.expired_quality_update_rate = 0;
    this.quality_update_rate = 3;
    this.sell_in_update_rate = -1;
  }

  updateItem(item) {
    this.updateQualityRate(item);
    if (item.sellIn > 0) item.quality += this.quality_update_rate;
    else item.quality = 0;
    item.sellIn += this.sell_in_update_rate;
    this.checkQualityBounds(item);
  }

  updateQualityRate(item) {
    if (item.sellIn <= 0) {
      this.quality_update_rate = 0;
    }
    else if (item.sellIn < 6) {
      this.quality_update_rate = 3
    }
    else if (item.sellIn < 11) {
      this.quality_update_rate = 2;
    }
    else {
      this.quality_update_rate = 1;
    }
  }
  
}

module.exports = new BackstagePassesItemUpdateRates();

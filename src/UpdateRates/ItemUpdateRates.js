class ItemUpdateRates {
	constructor(){
    this.expired_quality_update_rate = -2;
    this.quality_update_rate = -1;
    this.sell_in_update_rate = -1;
  }

  updateItem(item) {
    /*
    if (typeof rates === 'undefined') {
      rates.expired_quality_update_rate = -2;
      rates.quality_update_rate = -1;
      rates.sell_in_update_rate = -1;
    }
    */
  	if (item.sellIn >= 0) item.quality += this.quality_update_rate;
  	else item.quality += this.expired_quality_update_rate;
  	item.sellIn += this.sell_in_update_rate;
    this.checkQualityBounds(item);
  }

  checkQualityBounds(item) {
    if (item.quality > 50) {
      item.quality = 50;
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
  }
}

module.exports = ItemUpdateRates;

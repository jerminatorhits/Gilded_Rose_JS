class BackstagePassesItemUpdateRates extends ItemUpdateRates {
  constructor(){
    this.expired_quality_update_rate = 0;
    this.quality_update_rate = 3;
    this.sell_in_update_rate = -1;
  }

  updateItem(item) {
    if (item.sellIn >= 0) item.quality += this.quality_update_rate;
    else item.quality += this.expired_quality_update_rate;
    item.sellIn += this.sell_in_update_rate;
  }
}

module.exports = BackstagePassesItemUpdateRates;

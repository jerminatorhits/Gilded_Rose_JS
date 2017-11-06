const ItemUpdateRates = require('./ItemUpdateRates');

class AgedBrieItemUpdateRates extends ItemUpdateRates {
  constructor(){
    super();
    this.expired_quality_update_rate = 1;
    this.quality_update_rate = 1;
    this.sell_in_update_rate = -1;
  }
}

module.exports = new AgedBrieItemUpdateRates();

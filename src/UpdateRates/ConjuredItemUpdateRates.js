const ItemUpdateRates = require('./ItemUpdateRates');

class ConjuredItemUpdateRates extends ItemUpdateRates {
  constructor(){
    super();
    this.expired_quality_update_rate = -4;
    this.quality_update_rate = -2;
    this.sell_in_update_rate = -1;
  }
}

module.exports = new ConjuredItemUpdateRates();

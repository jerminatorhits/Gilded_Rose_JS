const ItemUpdateRates = require('./ItemUpdateRates');

class SulfurasItemUpdateRates extends ItemUpdateRates {
  constructor(){
    super();
    this.expired_quality_update_rate = 0;
    this.quality_update_rate = 0;
    this.sell_in_update_rate = 0;
  }

  updateItem(){
  }
}

module.exports = new SulfurasItemUpdateRates();

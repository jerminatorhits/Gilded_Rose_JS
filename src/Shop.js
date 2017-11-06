const AgedBrieItemUpdateRates = require('./UpdateRates/AgedBrieItemUpdateRates');
const ConjuredItemUpdateRates = require('./UpdateRates/ConjuredItemUpdateRates');
const SulfurasItemUpdateRates = require('./UpdateRates/SulfurasItemUpdateRates');
const BackstagePassesItemUpdateRates = require('./UpdateRates/BackstagePassesItemUpdateRates');
const ItemUpdateRatesConstructor = require('./UpdateRates/ItemUpdateRates');
const itemUpdateRates = new ItemUpdateRatesConstructor();

class Shop {
 constructor(items=[]){
   this.items = items;
 }

 updateQuality() {
    
    var rates = {
      'Sulfuras, Hand of Ragnaros': SulfurasItemUpdateRates,
      'Aged Brie': AgedBrieItemUpdateRates,
      'Backstage passes to a TAFKAL80ETC concert': BackstagePassesItemUpdateRates,
      'Conjured': ConjuredItemUpdateRates
    };
    
   for (var i = 0; i < this.items.length; i++) {
     var item = this.items[i];
     var name = item.name;
     var updateRates = rates[name] || itemUpdateRates;
     updateRates.updateItem(item);

     // if (name === 'Sulfuras, Hand of Ragnaros') {
     //   SulfurasItemUpdateRates.updateItem(item);
     // }
     // else if (name === 'Aged Brie') {
     //   AgedBrieItemUpdateRates.updateItem(item);
     // }
     // else if (name === 'Backstage passes to a TAFKAL80ETC concert') {
     //   BackstagePassesItemUpdateRates.updateItem(item);
     // }
     // else if (name === 'Conjured') {
     //   ConjuredItemUpdateRates.updateItem(item);
     // }
     // else {
     //   ItemUpdateRates.updateItem(item);
     // }
     
   }
   return this.items;
 }
}

module.exports = Shop;
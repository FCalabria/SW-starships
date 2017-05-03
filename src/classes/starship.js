export default class Starship {
  constructor(data) {
    if (data) {
      this.ID = data.url.match(/[0-9]+/g)[0];
      this.max_atmosphering_speed = data.max_atmosphering_speed.replace('km', '');
      this.manufacturer = _.clone(data).manufacturer
        .replace('Cyngus', 'Cygnus') // Correct DB typo
        .replace('Nubia Star Drives, Incorporated', 'Nubia Star Drives') // Prevent incorrect splitting
        .split(/,|\//g)
        .map((company) => company.trim());
    }
    _.defaultsDeep(this, data);
  }

  getCost(parseCharacters = '---') {

    const parseCurrency = (credits) => {
      let array = _.reverse(credits.split(''));
      for (let i = 3; i < array.length; i = i + 4) {
        array.splice(i, 0, ',');
      }
      return _.reverse(array).join('') + ' Cr';
    }

    return this.cost_in_credits === 'unknown' || !this.cost_in_credits
      ? parseCharacters
      : parseCurrency(this.cost_in_credits);
  }

  getConsumablesInDays() {
    if (this.consumables && this.consumables !== 'unknown') {
      let consumables = {
        quantity: parseInt(this.consumables.split(' ')[0]),
        unit: this.consumables.split(' ')[1]
      }
      switch (consumables.unit) {
        case 'year':
        case 'years':
          consumables.quantity = consumables.quantity * 365
          break;
        case 'month':
        case 'months':
          consumables.quantity = consumables.quantity * 30
          break;
        case 'week':
        case 'weeks':
          consumables.quantity = consumables.quantity * 7
          break;
        case 'hour':
        case 'hours':
          consumables.quantity = consumables.quantity / 24
          break;
      }
      return consumables.quantity;
    }
    return -1;
  }

}
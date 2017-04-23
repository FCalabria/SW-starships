export default class Starship {
  constructor(data) {
    if (data) {
      this.ID = data.url.match(/[0-9]+/g)[0];
      this.manufacturer = _.clone(data).manufacturer
        .replace('Cyngus', 'Cygnus') // Correct DB typo
        .replace('Nubia Star Drives, Incorporated', 'Nubia Star Drives') // Prevent incorrect splitting
        .split(/,|\//g)
        .map((company) => company.trim());
    }
    _.defaultsDeep(this, data);
  }

  getCost(parseCharacters = '---') {

    function parseCurrency(credits) {
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


}
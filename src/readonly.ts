export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('taka');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'hikohiko';

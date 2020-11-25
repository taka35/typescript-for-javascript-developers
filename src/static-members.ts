export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taka';
  static lastName: string = 'Ishida';

  static work() {
    return `Hey!, guys! This is ${this.firstName}`;
  }
}

// let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
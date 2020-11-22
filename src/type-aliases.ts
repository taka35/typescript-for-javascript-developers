export {};

type Mojiretsu = string;
type Profile = {
  name: string;
  age: number;
};

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

const example2: Profile = {
  name: 'abc',
  age: 1000
};

type Profile2 = typeof example1;

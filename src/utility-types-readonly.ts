export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'take',
  age: 28,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++;

type YomitoriSenyo<T> = {readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
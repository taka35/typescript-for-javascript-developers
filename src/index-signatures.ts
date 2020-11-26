export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'takehiko', underTwenty: false };

//  How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'take';
profile.age = 28;
profile.nationality = 'Japan';

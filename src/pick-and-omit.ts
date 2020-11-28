export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit<T> = Pick<T, Exclude<keyof T, 'height'>>;
type MySmallProfile = MyOmit<DetailedProfile>;

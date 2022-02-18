export type Rate = {
  id: string;
  numCode: number;
  charCode: string;
  name: string;
  value: number;
};

export type Rates = {
  date: string;
  rates: Rate[];
};

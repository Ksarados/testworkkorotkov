export type Transaction = {
  id: number;
  name: string;
  date: string;
  time: string;
  amount: number;
  category: string;
  categoryColor: string;
  logo: number;
};

export type ProgressBarProps = {
  transactions: Transaction[];
};

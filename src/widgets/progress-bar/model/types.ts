export type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: number;
  category: string;
  categoryColor: string;
};

export type ProgressBarProps = {
  transactions: Transaction[];
};

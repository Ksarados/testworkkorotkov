// Функция для форматирования даты из "уууу-мм-дд" в "Месяц День"
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(date);
};

// Функция для форматирования даты из "уууу-мм-дд" в "День Месяц"
export const formatDateNotice = (dateString: string) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
  });
  return formatter.format(date);
};

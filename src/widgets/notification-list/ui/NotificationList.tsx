import { View, FlatList, StyleSheet } from 'react-native';
import { DateNoticeWidget } from '@features/date-notice-widget/ui/DateNoticeWidget';
import { NoticeItem } from '@features/notice-item/ui/NoticeItem';
import { Notice } from '@widgets/notification-list/model/types';
import { COLORS } from '@shared/lib/constants/colors';

type NotificationListProps = {
  notices: Notice[];
};

export const NotificationList = ({ notices }: NotificationListProps) => {
  console.log('notices', notices);
  const dates = [...new Set(notices.map((t) => t.date))];
  console.log(dates);
  return (
    <View style={styles.container}>
      <FlatList<string>
        data={dates}
        keyExtractor={(_: string, index: number) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item, index }: { item: string; index: number }) => {
          return (
            <>
              <DateNoticeWidget date={item} />
              <FlatList<Notice>
                data={notices.filter((t) => t.date === item)}
                keyExtractor={(_: Notice, index: number) => index.toString()}
                scrollEnabled={false}
                renderItem={({ item }: { item: Notice }) => (
                  <>
                    <NoticeItem
                      name={item?.name}
                      type={item?.category}
                      amount={item?.amount}
                      date={item?.date}
                      time={item?.time}
                      image={item?.logo}
                      categoryColor={item?.categoryColor}
                      discription={item?.discription}
                      numberCard={item?.numberCard}
                      typeCard={item?.typeCard}
                      typeTransaction={item?.typeTransaction}
                      totalAmount={item?.totalAmount}
                    />
                  </>
                )}
              />
              {index < dates.length - 1 && <View style={styles.separator} />}
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  separator: {
    height: 1,
    backgroundColor: COLORS.darkGray,
  },
});

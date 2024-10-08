import React, { useCallback, useState} from 'react';
import { Animated, StyleSheet, View, ActivityIndicator } from 'react-native';
import Card from '../component/vehical-card/Card';
import { useSelector } from 'react-redux';

const spacing = 10;
const CARD_HEIGHT = 200;

const List: React.FC<{ fav?: boolean }> = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const {vehicles} = useSelector((DataState: any) => DataState.vehiclesData);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = useCallback(() => {
    if (loading) {return;}
    setLoading(true);

    setTimeout(() => {
      setVisibleItems((prev) => prev + 10);
      setLoading(false);
    }, 1000);
  }, [loading]);

  const renderItem = useCallback(({ item }: { item: any }) => {
    const index = item.id - 1;
    const inputRange = [-1, 0, CARD_HEIGHT * index, CARD_HEIGHT * (index + 2)];
    const opacityInputRange = [-1, 0, CARD_HEIGHT * index, CARD_HEIGHT * (index + 0.5)];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return <Card item={item} scale={scale} opacity={opacity} />;
  }, [scrollY]);

  return (
    <Animated.FlatList
      data={vehicles?.slice(0, visibleItems)}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={
        loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        ) : (
          <View style={styles.footer} />
        )
      }
      getItemLayout={(data, index) => ({
        length: CARD_HEIGHT,
        offset: CARD_HEIGHT * index,
        index,
      })}
      initialNumToRender={8}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.3}
    />
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 210,
  },
  contentContainer: {
    flexGrow: 1,
    padding: spacing,
    paddingTop: '5%',
    justifyContent: 'flex-start',
  },
  loadingContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default React.memo(List);

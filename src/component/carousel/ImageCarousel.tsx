import React, { useState, useEffect, useRef } from 'react';
import {
  FlatList,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList as FlatListType,
  Dimensions,
} from 'react-native';
import { AnimatedContainer, CarouselAnimatedDot, CarouselImage, CarouselIndicatorContainer } from './styled';


interface ImageCarouselProps {
  images?: string[];
  height?: number;
  width?: number;
  animation?: boolean;
  autoSlide?: boolean;
  showDots?: boolean;
  dotsColor?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [],
  height = 250,
  width = Dimensions.get('window').width,
  animation = false,
  autoSlide = false,
  showDots = false,
  dotsColor = 'gray',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatListType<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const tiltAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoSlide && images.length > 0) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex });
        setCurrentIndex(nextIndex);
        if (animation) {
          startTiltAnimation();
        }
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images.length, autoSlide, animation]);

  const startTiltAnimation = () => {
    if (animation) {
      Animated.sequence([
        Animated.timing(tiltAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(tiltAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false }
    )(event);
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const tiltInterpolate = tiltAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '8deg'],
  });


  return (
    <>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <AnimatedContainer
            style={{ transform: [{ rotate: animation ? tiltInterpolate : '0deg' }], height, width }}
          >
            <CarouselImage
              source={{ uri: item }}
            />
          </AnimatedContainer>
        )}
      />
      {showDots && (
        <CarouselIndicatorContainer>
          {images?.map((_, imageIndex) => {
            const dotWidth = scrollX.interpolate({
              inputRange: [
                width * (imageIndex - 1),
                width * imageIndex,
                width * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <CarouselAnimatedDot
                key={imageIndex}
                style={{ width: dotWidth, backgroundColor: dotsColor }}
              />
            );
          })}
        </CarouselIndicatorContainer>
      )}
    </>
  );
};



export default React.memo(ImageCarousel);

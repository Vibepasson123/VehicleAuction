import { BottomSheetBackdropProps, useBottomSheet } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import Animated, { interpolate, useAnimatedStyle, Extrapolation } from 'react-native-reanimated';
import { useBackHandler } from '../../hooks/use-back-handler';

interface BackdropComponentProps extends BottomSheetBackdropProps {
  dismissible?: boolean;
}

export const BackdropComponent = ({ style, animatedIndex, dismissible = true }: BackdropComponentProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedIndex.value, [-1, 0], [0.5, 1], Extrapolation.CLAMP),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }));
  const { close } = useBottomSheet();

  // I have write this here because we need to use the close function from useBottomSheet context
  const backHandler = useCallback(() => {
    if (dismissible) {
      close();
      return true;
    }
    return false;
  }, [dismissible, close]);

  useBackHandler(backHandler);

  return (
    <Animated.View
      style={[containerAnimatedStyle, style]}
      onTouchEnd={() => {
        if (dismissible){
          return close();
        }
      }}
    />
  );
};

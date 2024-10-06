import React, { useEffect, useState } from 'react';
import { BottomSheetModal, BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import { BaseBottomSheetComponent, BaseBottomSheetComponentProps } from './base-bottom-sheet';

type BottomSheetComponentProps = {
  children: React.ReactNode;
  backgroundComponent?: React.FC<BottomSheetBackgroundProps>;
  dismissible?: boolean;
  onClose?: () => void;
  name?: string;
} & Omit<BaseBottomSheetComponentProps, 'snapPoints' | 'handleHeight' | 'contentHeight' | 'onDismiss'>;

// Reusable bottom sheet component that takes height of its children as snapping point
// I need to fix the bug on BottomSheetView when i have some spare time;
export const BottomSheetComponent = React.forwardRef<BottomSheetModal, BottomSheetComponentProps>(
  ({ children, onClose, ...rest }, ref) => {
    const [snapPoints, setSnapPoints] = useState<string[]>(['50%']);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [contentHeight, setContentHeight] = useState<number | null>(null);

    useEffect(() => {
      if (contentHeight) {
        setSnapPoints([`${contentHeight}px`]);
      }
    }, [contentHeight]);

    return (
      <BaseBottomSheetComponent
        ref={ref}
        onDismiss={onClose}
        snapPoints={snapPoints}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        {...rest}
      >
        {children}
      </BaseBottomSheetComponent>
    );
  }
);

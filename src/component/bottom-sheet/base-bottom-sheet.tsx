import React, { forwardRef, useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetHandleProps,
  BottomSheetHandle,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { BottomSheetComponentDefault } from './styled';

export type BaseBottomSheetComponentProps = {
  dismissible?: boolean;
} & BottomSheetModalProps;
export const BaseBottomSheetComponent = forwardRef<BottomSheetModal, BaseBottomSheetComponentProps>(
  ({ snapPoints, children, backgroundComponent = BottomSheetComponentDefault, dismissible = true, ...rest }, ref) => {
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          pressBehavior={dismissible ? 'close' : 'none'}
          opacity={0.8}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      [dismissible]
    );
    const renderHandleComponent = useCallback((props: BottomSheetHandleProps) => <BottomSheetHandle {...props} />, []);
    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        stackBehavior="push"
        handleComponent={renderHandleComponent}
        enablePanDownToClose={dismissible}
        backgroundComponent={backgroundComponent}
        backdropComponent={renderBackdrop}
        {...rest}>
        {children}
      </BottomSheetModal>
    );
  }
);

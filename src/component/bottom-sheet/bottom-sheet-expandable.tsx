import React from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BaseBottomSheetComponent, BaseBottomSheetComponentProps } from './base-bottom-sheet';

export const BottomSheetExpandable = React.forwardRef<BottomSheetModal, BaseBottomSheetComponentProps>(
  ({ snapPoints, children, ...rest }, ref) => (
    <BaseBottomSheetComponent ref={ref} snapPoints={snapPoints} {...rest}>
      {children}
    </BaseBottomSheetComponent>
  )
);

import React from 'react';
import { BottomSheetScrollView as ScrollView } from '@gorhom/bottom-sheet';

interface IBottomSheetScrollViewProps {
  bounces?: boolean;
  children: React.ReactNode | React.ReactNode[];
}
export const BottomSheetScrollView = ({ bounces = false, children }: IBottomSheetScrollViewProps) => (
  <ScrollView bounces={bounces} showsVerticalScrollIndicator={false}>
    {children}
  </ScrollView>
);

// @types/devvie__bottom-sheet.d.ts
declare module '@devvie/bottom-sheet' {
  import React from 'react';

  export interface BottomSheetProps {
    children?: React.ReactNode;
    ref?: React.Ref<BottomSheetInstance>; // Allow ref to be passed
    open: () => void;
    close: () => void;
    snapTo: (index: number) => void;
    customBackdropPosition?: 'top' | 'bottom'; // Optional prop
    animationType?: 'slide' | 'fade' | 'spring'; // Include animation types
    style?: React.CSSProperties; // Allow for custom styles
  }

  export interface BottomSheetInstance {
    open: () => void;
    close: () => void;
    snapTo: (index: number) => void;
  }

  // Define the BottomSheet component
  const BottomSheet: React.ForwardRefExoticComponent<BottomSheetProps>;
  export default BottomSheet;
}

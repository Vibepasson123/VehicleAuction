import { useMemo, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export interface IBottomSheetActions {
  show: () => void | undefined;
  close: () => void | undefined;
  dismiss: () => void | undefined;
  forceClose: () => void | undefined;
}

export const useBottomSheetControls = () => {
  const sheetRef = useRef<BottomSheetModal>(null);

  const actions: IBottomSheetActions = useMemo(
    () => ({
      show: () => sheetRef.current?.present(),
      close: () => sheetRef.current?.close(),
      dismiss: () => sheetRef.current?.dismiss(),
      forceClose: () => sheetRef.current?.forceClose(),
    }),
    []
  );

  return [sheetRef, actions] as const;
};

import { MouseEvent, useCallback } from 'react';

import UIPortal from 'components/ui/portal';

import { AnimatePresence, motion } from 'framer-motion';

export interface UIModalProps {
  /** Modal component children */
  children: React.ReactNode;
  /** onClickBackground function */
  onClickBackground?: () => void;
  /** Show modal */
  show?: boolean;
}

const UIModal = ({ children, onClickBackground, show }: UIModalProps) => {
  const stopPropagation = useCallback((evt: MouseEvent) => {
    evt.stopPropagation();
  }, []);

  const onMouseDown = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    if (onClickBackground) onClickBackground();
  };

  return (
    <AnimatePresence>
      {show && (
        <UIPortal>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="fixed left-0 top-0 z-50 flex h-dvh w-screen bg-black/60"
            onClick={onClickBackground}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ ease: 'easeInOut' }}
            className="z-60 fixed right-0 top-0 flex h-dvh justify-end"
          >
            <section className="contents" onClick={stopPropagation}>
              {children}
            </section>
          </motion.div>
        </UIPortal>
      )}
    </AnimatePresence>
  );
};

export default UIModal;

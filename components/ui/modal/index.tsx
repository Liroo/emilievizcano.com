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
  /** x or y animation */
  animation?: 'x' | 'y';
}

const UIModal = ({
  children,
  onClickBackground,
  show,
  animation = 'x',
}: UIModalProps) => {
  const stopPropagation = useCallback((evt: MouseEvent) => {
    evt.stopPropagation();
  }, []);

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
            initial={{ [animation]: '100%' }}
            animate={{ [animation]: 0 }}
            exit={{ [animation]: '100%' }}
            transition={{ ease: 'easeInOut' }}
            className="fixed right-0 top-0 z-60 flex h-dvh justify-end"
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

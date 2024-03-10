import { MouseEvent } from 'react';

import UIPortal from 'components/ui/portal';

import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export interface UIModalProps {
  /** Modal component children */
  children: React.ReactNode;
  /** onClickBackground function */
  onClickBackground?: () => void;
  /** Show modal */
  show?: boolean;
  /** className */
  className?: string;
  /** background className */
  backgroundClassName?: string;
  /** animation */
  animation?: { initial: any; animate: any; exit: any };
}

const UIModal = ({
  children,
  onClickBackground,
  show,
  className,
  backgroundClassName,
  animation,
}: UIModalProps) => {
  const stopPropagation = (evt: MouseEvent) => {
    evt.stopPropagation();
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
            className={twMerge(
              'fixed left-0 top-0 z-50 flex h-dvh w-screen bg-black/30 backdrop-blur-sm',
              backgroundClassName,
            )}
            onClick={onClickBackground}
          />
          <motion.div
            initial={animation?.initial ? animation.initial : { x: '100%' }}
            animate={animation?.animate ? animation.animate : { x: 0 }}
            exit={animation?.exit ? animation.exit : { x: '100%' }}
            transition={{ ease: 'easeInOut' }}
            className={twMerge(
              'fixed right-0 top-0 z-60 flex h-dvh justify-end shadow-md',
              className,
            )}
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

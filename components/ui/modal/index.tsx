import {
  MouseEvent,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import UIOverlayFullscreen from 'components/ui/overlay/fullscreen';
import UIPortal from 'components/ui/portal';

export interface UIModalProps {
  /** Modal component children */
  children: React.ReactNode;
  /** If animated:
   * - the background will have an opacity animation
   * - the children will come from the bottom
   * */
  animated?: boolean;
  /** Disable the hide() when you click on the background so you can handle it yourself */
  onClickBackground?(): void;
  /** className for the background, generally to change the color */
  backgroundClassName?: string;
  /** className for the foreground */
  foregroundClassName?: string;
}

const UIModal = (
  {
    children,
    animated,
    onClickBackground,
    backgroundClassName,
    foregroundClassName,
  }: UIModalProps,
  ref: Ref<any>
) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [animationRunning, setAnimationRunning] = useState<boolean>(false);
  const showModal = useCallback(() => {
    setIsShown(true);
  }, []);
  const hideModal = useCallback(() => {
    setIsShown(false);
  }, []);
  useImperativeHandle(
    ref,
    () => ({
      show: showModal,
      hide: hideModal,
    }),
    []
  );

  useEffect(() => {
    const timeout = setTimeout(
      () => setAnimationRunning(isShown),
      // That 10ms is to avoid a bug where the animation is not triggered
      isShown ? 10 : animated ? 300 : 0
    );
    return () => clearTimeout(timeout);
  }, [isShown]);

  useEffect(() => {
    if (isShown) {
      const scrollY = window.scrollY;

      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `-${scrollY}px`;
      document.documentElement.style.overflow = 'hidden';
      return () => {
        const scrollY = document.documentElement.style.top;

        document.documentElement.style.overflow = null;
        document.documentElement.style.position = '';
        document.documentElement.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }
  }, [isShown]);

  const stopPropagation = useCallback((evt: MouseEvent) => {
    evt.stopPropagation();
  }, []);

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.target !== event.currentTarget) return;
      if (onClickBackground) onClickBackground();
      else hideModal();
    },
    [onClickBackground, hideModal]
  );

  if (!isShown && !animationRunning) return null;
  return (
    <UIPortal>
      <UIOverlayFullscreen
        className={`
        bg-black/60 flex z-50
        ${backgroundClassName}
        ${animated ? 'transition-opacity duration-300 ease-in-out' : ''}
        ${animationRunning && isShown ? 'opacity-60' : 'opacity-0'}
        `}
      />
      <UIOverlayFullscreen
        className={`
        flex justify-center items-end z-50
        ${foregroundClassName}
        ${animated ? 'transition-all duration-300 ease-in-out' : ''}
        ${
          animationRunning && isShown
            ? 'opacity-1'
            : 'translate-y-full opacity-0'
        }
        `}
        onMouseDown={onMouseDown}
      >
        <section className="contents" onClick={stopPropagation}>
          {children}
        </section>
      </UIOverlayFullscreen>
    </UIPortal>
  );
};

export default forwardRef(UIModal);

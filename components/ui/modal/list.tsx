import ArchiveView from 'components/views/archives';
import FoundryCartView from 'components/views/foundryCart';
import FoundryMenuView from 'components/views/foundryMenu';
import FoundryProduct from 'components/views/foundryProduct';
import InfosView from 'components/views/infos';
import ProjectView from 'components/views/project';
import { selectIsOneModalOpen } from 'flux/modal/selector';
import { useAppSelector } from 'flux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ModalEnum } from 'types/modal';
import UIModalController from './controller';

export default function UIModalList() {
  const isOneModalOpen = useAppSelector(selectIsOneModalOpen);
  const router = useRouter();

  useEffect(() => {
    if (isOneModalOpen) {
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
  }, [isOneModalOpen]);

  return (
    <>
      <UIModalController
        modalId={ModalEnum.Infos}
        onClickBackground={() => {
          router.push('/', null, { shallow: true });
        }}
      >
        <InfosView />
      </UIModalController>
      <UIModalController
        modalId={ModalEnum.Project}
        onClickBackground={() => {
          router.push('/', null, { shallow: true });
        }}
      >
        <ProjectView />
      </UIModalController>
      <UIModalController
        modalId={ModalEnum.Archives}
        onClickBackground={() => {
          router.push('/', null, { shallow: true });
        }}
        animation={{
          initial: { y: '100%' },
          animate: { y: 0 },
          exit: { y: '100%' },
        }}
      >
        <ArchiveView />
      </UIModalController>
      <UIModalController
        modalId={ModalEnum.FoundryMenu}
        backgroundClassName="bg-[#E8E8E8]/30"
      >
        <FoundryMenuView />
      </UIModalController>
      <UIModalController
        modalId={ModalEnum.FoundryCart}
        backgroundClassName="bg-[#E8E8E8]/30"
      >
        <FoundryCartView />
      </UIModalController>
      <UIModalController
        modalId={ModalEnum.FoundryProduct}
        className="right-1/2 top-1/2 h-auto -translate-y-1/2 translate-x-1/2 transform items-center justify-center"
        backgroundClassName="bg-[#E8E8E8]/30"
        animation={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
      >
        <FoundryProduct />
      </UIModalController>
    </>
  );
}

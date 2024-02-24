import ArchiveView from 'components/views/archive';
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
        animation="y"
      >
        <ArchiveView />
      </UIModalController>
    </>
  );
}

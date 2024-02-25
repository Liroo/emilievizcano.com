import { selectArchivedProjects } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';
import ArchiveHeader from './header';
import ArchiveList from './list';

export default function ArchiveView() {
  const projects = useAppSelector(selectArchivedProjects);

  return (
    <div className="flex h-screen w-screen flex-col bg-black text-[12px] font-light text-white">
      <ArchiveHeader />
      <ArchiveList projetcs={projects} />
    </div>
  );
}

import { selectArchivedProjects } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';
import ArchiveHeader from './header';
import ArchiveList from './list';

export default function ArchiveView() {
  const projects = useAppSelector(selectArchivedProjects);

  return (
    <div className="flex h-screen w-screen flex-col bg-black text-[10px] font-light text-white laptop:text-[12px]">
      <ArchiveHeader />
      <ArchiveList projetcs={projects} />
    </div>
  );
}

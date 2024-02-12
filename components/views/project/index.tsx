import { selectProjectBySlug } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';

type ProjectViewProps = {
  slug?: string;
};

export default function ProjectView({ slug }: ProjectViewProps) {
  const project = useAppSelector(selectProjectBySlug(slug));

  console.log(project);

  return <div className="h-full w-[800px] bg-[#252527]"></div>;
}

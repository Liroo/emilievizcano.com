import { Project } from 'lib/sanity.queries';
import { createContext } from 'react';

export const ProjectsContext = createContext<Project[]>([]);

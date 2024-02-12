import { createSelector } from 'reselect';

import { AppState } from 'flux/store';

const selectProjectReducer = (state: AppState) => state.project;

export const selectProjects = createSelector(
  [selectProjectReducer],
  (projectReducer) => {
    return projectReducer.projects;
  },
);

export const selectNotArchivedProjects = createSelector(
  [selectProjects],
  (projects) => {
    return projects.filter((project) => !project.archive);
  },
);

export const selectArchivedProjects = createSelector(
  [selectProjects],
  (projects) => {
    return projects.filter((project) => project.archive);
  },
);

export const selectProjectBySlug = (slug: string) =>
  createSelector([selectProjectReducer], (projectReducer) => {
    return projectReducer.projects.find((project) => project.slug === slug);
  });

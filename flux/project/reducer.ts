import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Project } from 'lib/sanity.queries';
import { HYDRATE } from 'next-redux-wrapper';

export type ProjectState = {
  projects: Project[];
};

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...(action as any).payload.project,
      };
    });
  },
});

export const { setProjects } = projectSlice.actions;

export default projectSlice;

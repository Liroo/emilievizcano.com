import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProjects, getClient } from 'lib/sanity.client';
import { setProjects } from './reducer';

export const getProjects = createAsyncThunk<void, void>(
  'project/getProjects',
  async (_, { dispatch }) => {
    const client = getClient();
    const projects = (await getAllProjects(client)) || [];

    dispatch(setProjects(projects));
  },
);

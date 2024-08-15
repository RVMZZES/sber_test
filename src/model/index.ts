import axios from 'axios';
import { GitHubResponse } from '../types';

interface FetchPopularProjectsParams {
  page: number;
  perPage: number;
}

export const fetchPopularProjects = async ({ page, perPage }: FetchPopularProjectsParams): Promise<GitHubResponse> => {
  const response = await axios.get(`https://api.github.com/search/repositories`, {
    params: {
      q: 'language:typescript',
      sort: 'stars',
      order: 'desc',
      page,
      per_page: perPage,
    },
  });
  return response.data;
};

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ProjectsTable } from '../../ui/ProjectsTable';
import { Pagination } from '../../ui/Pagination';
import { fetchPopularProjects } from '../../model';
import { TableItem } from '../../ui/TableItem';
import styles from './index.module.scss';

const PopularProjects: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  const { data, error, isLoading } = useQuery(
    ['popularProjects', perPage, page],
    () => fetchPopularProjects({ page, perPage }),
    {
      keepPreviousData: false,
    }
  );

  if (error) return <h2 className={styles.noData}>Error loading projects</h2>;

  return (
    <>
      <h1 className={styles.title}>Typescript Github Projects</h1>

      <ProjectsTable>
        {data && (
          <tbody className={styles.body}>
            {data.items.map((project) => (
              <TableItem
                key={project.id}
                url={project.html_url}
                name={project.name}
                description={project.description}
                stars={project.stargazers_count}
              />
            ))}
          </tbody>
        )}

        {isLoading && (
          <tbody>
            <tr>
              <td colSpan={3}>
                <div className={styles.noData}>
                  <h2>Loading...</h2>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </ProjectsTable>

      {data && (
        <Pagination
          page={page}
          perPage={perPage}
          totalCount={data.total_count}
          setPage={setPage}
          setPerPage={setPerPage}
        />
      )}
    </>
  );
};

export default PopularProjects;

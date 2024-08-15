import React from 'react';
import styles from './index.module.scss';

export const ProjectsTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th>Stars</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>

      {children}
    </table>
  );
};

import styles from './index.module.scss';

interface PaginationProps {
  page: number;
  perPage: number;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  totalCount: number;
}

export const Pagination = ({ page, perPage, setPage, setPerPage, totalCount }: PaginationProps) => {
  const firstRepoNumber = (page - 1) * perPage + 1;
  const lastRepoNumber = Math.min(page * perPage, totalCount);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <div>
        Pages: {firstRepoNumber}...{lastRepoNumber}
      </div>
      <button onClick={() => setPage(page + 1)} disabled={page === totalCount / perPage}>
        Next
      </button>
      <select
        className={styles.select}
        name="setPerPage"
        id="#perPage"
        onChange={(e) => setPerPage(Number(e.target.value))}
        value={perPage}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

import styles from './index.module.scss';

interface TableItemProps {
  name: string;
  description: string | null;
  stars: number;
  url: string;
}

export const TableItem = ({ name, description, stars, url }: TableItemProps) => {
  return (
    <tr className={styles.row}>
      <td className={styles.stars}>⭐ {stars}</td>
      <td className={styles.name}>
        <a href={url}>{name}</a>
      </td>
      <td className={styles.description}>{description || 'No description'}</td>
    </tr>
  );
};

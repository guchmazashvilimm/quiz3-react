import styles from "./AppListItem.module.scss";

export default function AppListItem({ url, title }) {
  if (!url && !title) {
    return null;
  }

  return (
    <div className={styles.AppListItem}>
      <figure className={styles.AppListItem__Figure}>
        <img className={styles.AppListItem__Img} src={url} alt="" />
      </figure>

      <div className={styles.AppListItem__Title}>{title}</div>
    </div>
  );
}

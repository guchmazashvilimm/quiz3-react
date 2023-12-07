import AppListItem from "../AppListItem";
import styles from "./AppList.module.scss";


export default function AppList({ posts }) {
  return (
    <div className={styles.AppList}>
      {posts?.map((post) => (

        <AppListItem key={post.id}
         url={post.url}
        title={post.title} />
      ))}
    </div>
  );
}

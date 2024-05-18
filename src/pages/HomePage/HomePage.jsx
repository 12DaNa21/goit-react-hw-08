import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle>
      Contact manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>A convenient application for managing your contacts</p>
      
    </div>
  );
}
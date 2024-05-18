import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
      Contact manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p className={css.text}>A convenient application for managing your contacts</p>
      
    </div>
  );
}
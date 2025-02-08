import styles from "./page.module.css";

export default function Home() {
  // The page should have an input field that accepts a string
  // There should be a submit button which will then make a call to the flask app
  // This should return the length of the string, you will then display that

  return (
    <div className={styles.page}>
      <h1>App Dev US News Technical Assessment</h1>
    </div>
  );
}

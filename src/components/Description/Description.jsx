import css from "./Description.module.css";

export function Description() {
  return (
    <div className={css.descriptionContainer}>
      <h1 className={css.descriptionHeader}>Sip Happens Café</h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
export default Description;
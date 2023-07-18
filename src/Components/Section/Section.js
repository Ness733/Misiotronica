import { Link } from "react-router-dom";
import styles from "./Section.module.css";

function Section(props) {
  return (
    <Link className={styles.titles} to={props.link}>
      {props.title}
    </Link>
  );
}

export default Section;

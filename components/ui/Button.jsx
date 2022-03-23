import Link from "next/link";
import styles from '../../styles/button.module.css';

export default function Button(props) {
  return (
    <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
    </Link>
  )
}

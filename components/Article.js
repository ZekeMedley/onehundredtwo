import styles from '../styles/Home.module.css';

export default function Article({ name, href, description }) {
    return (<a target='_blank' className={styles.card} href={href}>
              <h3>{name}</h3>
              <p>{description}</p>
            </a>);
}

import styles from './event-item.module.css';
import Button from "../ui/Button";

export default function EventItem({ item }) {
    const { title, image, date, location, id } = item;

    const formatDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formatAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            <img src={"/" + image} alt={title + "-img"} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <time>{formatDate}</time>
                    </div>
                    <div className={styles.address}>
                        <address>{formatAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>Explore Event</Button>
                </div>
            </div>
        </li>
    )
}

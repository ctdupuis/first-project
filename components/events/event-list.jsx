import EventItem from "./event-item";
import styles from './event-list.module.css'

export default function EventList({ events }) {
  return (
    <ul className={styles.list}>
        {events.map(e => <EventItem key={e.id} item={e} />)}
    </ul>
  )
}

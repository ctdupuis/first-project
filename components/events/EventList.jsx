import EventItem from "./EventItem";
import styles from '../../styles/EventList.module.css'

export default function EventList({ events }) {
  return (
    <ul className={styles.list}>
        {events.map(e => <EventItem key={e.id} item={e} />)}
    </ul>
  )
}

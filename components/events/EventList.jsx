import EventItem from "./EventItem";

export default function EventList({ events }) {
  return (
    <ul>
        {events.map(e => <EventItem />)}
    </ul>
  )
}

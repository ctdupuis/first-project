import { getAllEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  )
}

import { getAllEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList events={events} />
    </Fragment>
  )
}

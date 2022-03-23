import { getAllEvents } from "../../dummy_data";
import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={searchHandler}/>
      <EventList events={events} />
    </Fragment>
  )
}

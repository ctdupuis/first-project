import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy_data";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import Button from "../../components/ui/button";

export default function EventDetailPage() {
  const router = useRouter();

  const id = router.query.id;
  const event = getEventById(id);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

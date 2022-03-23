import { useRouter } from "next/router";
import { Fragment } from "react";

import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filter = router.query.slug;

  if (!filter) {
    return <p className='center'>Loading...</p>
  }

  const numYear = +filter[0];
  const numMonth = +filter[1];

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  if (!events || events.length === 0) {
    return <Fragment>
      <ErrorAlert>
        <p>No events found for the given date range</p>
      </ErrorAlert>
      <div className="center">
        <Button link={"/events"}>Show All Events</Button>
      </div>
    </Fragment>
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  )
}

import { useRouter } from "next/router";
import { Fragment } from "react";

import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

export default function FilteredEventsPage(props) {

  const events = props.events;

  if (props.hasError) {
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

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true }
      // notFound: true, #=> auto-display 404
      // redirect: {
        //   destination: "/"
        // }
      }
    }

    const filteredEvents = await getFilteredEvents({ 
      year: numYear,
      month: numMonth
    });
  
  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}
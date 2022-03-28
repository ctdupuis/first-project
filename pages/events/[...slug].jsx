import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";

import useSWR from "swr";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

export default function FilteredEventsPage(props) {
  const [loadedEvents, setLoadedEvents] = useState();
  useState
  const router = useRouter();
 
  const filter = router.query.slug;

  const { data, error } = useSWR('https://nextjs-course-47d8b-default-rtdb.firebaseio.com/events.json');

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
      }

      setLoadedEvents(events);
    }
  }, [data])

  if (!loadedEvents) {
    return <p className='center'>Loading...</p>
  }

  const numYear = +filter[0];
  const numMonth = +filter[1];

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });


  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
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

  if (!filteredEvents || filteredEvents.length === 0) {
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
      <EventList events={filteredEvents} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const numYear = +filterData[0];
//   const numMonth = +filterData[1];

  
//   if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//     return {
//       props: { hasError: true }
//       // notFound: true, #=> auto-display 404
//       // redirect: {
//         //   destination: "/"
//         // }
//       }
//     }

//     const filteredEvents = await getFilteredEvents({ 
//       year: numYear,
//       month: numMonth
//     });
  
//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth
//       }
//     }
//   }
// }
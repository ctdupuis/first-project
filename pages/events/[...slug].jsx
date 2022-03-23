import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";

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
    return <p className='center'>Invalid filter. Please adjust your values</p>
  }

  if (!events || events.length === 0) {
    return <p>No events found for this chosen date range.</p>
  }

  return (
    <div>
        <h1>Filtered Events</h1>
    </div>
  )
}

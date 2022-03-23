import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy_data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  )
}
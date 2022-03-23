import Head from 'next/head';
import { Fragment } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy_data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <div>
        <EventList events={featuredEvents} />
      </div>
    </Fragment>
  )
}
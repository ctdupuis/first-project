import Head from 'next/head';
import { Fragment } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy_data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <Head>
        <title>NextEvents</title>
      </Head>
      <div>
        <EventList events={featuredEvents} />
      </div>
    </Fragment>
  )
}
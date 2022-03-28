const url = 'https://nextjs-course-47d8b-default-rtdb.firebaseio.com'

export async function getAllEvents() {
    const res = await fetch(`${url}/events.json`);
    const data = await res.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();

    return allEvents.filter(event => event.isFeatured)
}
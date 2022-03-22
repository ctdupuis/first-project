import Link from "next/link";

export default function EventItem({ item }) {
    const { title, image, date, location, id } = item;

    const formatDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formatAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li>
            <img src={"/" + image} alt={title + "-img"} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{formatDate}</time>
                    </div>
                    <div>
                        <address>{formatAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}

import { LatestPosts } from "@/components/LatestPosts";
import "./homepage.css";
import { Link } from "@radix-ui/themes";
import { discordInviteUrl, donateUrl, liveMapUrl } from "@/content/links";

export default async function Home() {
  return (
    <>
      <h1>Welcome to The Commune!</h1>

      <div id="description">
        <p>
          The Commune is a cooperative Vintage Story community where creativity,
          collaboration, and long-term progression are at the heart of the
          experience. This is a place for players who enjoy building together,
          planning infrastructure, and participating in community-driven
          projects.
        </p>

        <Link id="details-link" href="/about">
          Server details
        </Link>
      </div>

      <ul id="links">
        <li>
          <Link href={liveMapUrl}>LiveMap</Link>
        </li>
        <li>
          <Link href={discordInviteUrl}>Join our Discord to play!</Link>
        </li>
        <li>
          <Link href={donateUrl}>Support the Commune!</Link>
        </li>
      </ul>

      <LatestPosts />
    </>
  );
}

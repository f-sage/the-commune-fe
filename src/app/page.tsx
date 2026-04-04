import Image from "next/image";
import { LatestPosts } from "@/components/LatestPosts";
import "./homepage.css";
import { discordInviteUrl, donateUrl, liveMapUrl } from "@/content/links";

export default async function Home() {
  return (
    <>
      <header id="hero">
        <h1>
          <div className="subtitle">Welcome to</div>
          <div className="loud">The Commune</div>
        </h1>

        <div id="description">
          <p>
            The Commune is a cooperative Vintage Story community where
            creativity, collaboration, and long-term progression are at the
            heart of the experience. This is a place for players who enjoy
            building together, planning infrastructure, and participating in
            community-driven projects.
          </p>

          <a id="details-link" href="/about">
            Server details
          </a>
        </div>
        <Image
          alt="You too can live among beauty"
          src="/banner.png"
          layout="fill"
        />
      </header>

      <ul id="links">
        <li>
          <a href={liveMapUrl}>LiveMap</a>
        </li>
        <li>
          <a href={discordInviteUrl}>Join our Discord to play!</a>
        </li>
        <li>
          <a href={donateUrl}>Support the Commune!</a>
        </li>
      </ul>

      <LatestPosts />
    </>
  );
}

import { LatestPosts } from "@/components/LatestPosts";
import "./homepage.css";
import { discordInviteUrl } from "@/content/links";

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

          <a className="button-link" href={discordInviteUrl}>
            Join our Discord community
          </a>
        </div>
      </header>

      <LatestPosts />
    </>
  );
}

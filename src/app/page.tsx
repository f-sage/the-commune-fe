import {LatestPosts} from "@/components/latest-posts";
import "./homepage.css";

export default async function Home() {
  return (
    <main>
        <h1>Welcome to The Commune!</h1>

        <div id="description">
          <p>The Commune is a cooperative Vintage Story community where creativity, collaboration, and long-term
            progression are at the heart of the experience. This is a place for players who enjoy building together,
            planning infrastructure, and participating in community-driven projects.</p>
            
          <a id="details-link" href="/about">Server details</a>
        </div>

       <nav id="links">
          <a href="#">LiveMap</a>
          <a href="#">Join our Discord to play!</a>
          <a href="#">Support the Commune!</a>
        </nav>

        <LatestPosts/>
    </main>
  );
}

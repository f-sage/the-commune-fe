import { roles } from "@/content/roles";
import "./about.css";
import Expandable from "@/components/Expandable";

export default async function AboutServer() {
  return (
    <>
      <h1>Server details</h1>
      <h2>The class system</h2>

      <p>The server uses a custom class system with class locked recipes.</p>
      <ul id="role-list">
        {roles.map((item) => (
          <li key={item.name}>
            <Expandable label={item.name}>
              <p>{item.description}</p>
            </Expandable>
          </li>
        ))}
      </ul>
    </>
  );
}

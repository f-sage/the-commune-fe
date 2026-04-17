import type { ModInfo } from "@/content/mods";
import "./ModList.css";
import { fetchDiscordModList } from "@/helpers/fetchDiscordPosts";
import { getModListFromDiscordMessages } from "@/helpers/getModListFromDiscordMessages";
import ModsSearchableContainer from "./ModsSearchableContainer";

const ModList = async () => {
  const modListMessages = await fetchDiscordModList();
  const data: ModInfo[] = getModListFromDiscordMessages(modListMessages);

  return (
    <section id="mods">
      <h1>Mods</h1>
      <ModsSearchableContainer data={data} />
    </section>
  );
};

export default ModList;

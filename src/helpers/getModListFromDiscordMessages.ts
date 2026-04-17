import type { APIMessage as DiscordMessage } from "discord-api-types/v10";
import type { ModInfo } from "@/content/mods";
import { markupMatchers } from "./discordPostHelpers";

export const getModListFromDiscordMessages = (
  messages: DiscordMessage[],
): ModInfo[] => {
  const mods: ModInfo[] = [];

  messages.forEach((msg) => {
    const modLinks = msg.content.match(markupMatchers.link);
    modLinks?.forEach((link) => {
      const modName = getGroup(markupMatchers.link, link, 0);
      const modUrl = getGroup(markupMatchers.link, link, 1);

      const mod: ModInfo = {
        name: modName,
        link: modUrl,
      };
      mods.push(mod);
    });
  });

  return mods;
};

function getGroup(regexp: RegExp, str: string, index: number) {
  return Array.from(str.matchAll(regexp), (m) => m[1])[index];
}

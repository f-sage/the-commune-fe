import type { APIMessage as DiscordMessage } from "discord-api-types/v10";
import type { ModInfo } from "@/content/mods";

export const getModListFromDiscordMessages = (
  messages: DiscordMessage[],
): ModInfo[] => {
  const mods: ModInfo[] = [];

  messages.forEach((msg) => {
    console.log(msg);
  });

  return mods;
};

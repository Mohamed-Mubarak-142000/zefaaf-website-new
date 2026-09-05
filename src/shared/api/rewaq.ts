export type Personality = {
  id: number;
  name: string;
  description: string;
  image_url: string | null;
  followers_count: number;
};

type PersonalitiesResponse = {
  data?: Personality[];
};

export async function getTopPersonalities(locale: string): Promise<Personality[]> {
  const baseUrl = process.env.REWAQ_API_URL ?? "https://api.dev.rewaq.nl";
  const response = await fetch(`${baseUrl}/api/personalities`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": locale,
    },
  });

  if (!response.ok) return [];

  const payload = (await response.json()) as PersonalitiesResponse;
  return [...(payload.data ?? [])]
    .sort((a, b) => b.followers_count - a.followers_count)
    .slice(0, 2);
}

import type { Character } from '../types/character';

export async function getAllCharacters(): Promise<Character[]> {
  // Use Astro's glob imports to load all JSON files at build time
  const characterModules = await import.meta.glob('../data/characters/*.json', {
    eager: true,
    import: 'default',
  });

  return Object.values(characterModules) as Character[];
}

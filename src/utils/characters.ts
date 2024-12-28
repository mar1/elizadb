import type { Character } from '../types/character';

export async function getAllCharacters(): Promise<Character[]> {
  try {
    // Use Astro's glob imports to load all JSON files at build time
    const characterModules = await import.meta.glob('/src/data/characters/*.json', {
      eager: true,
      import: 'default',
    });

    if (!characterModules || Object.keys(characterModules).length === 0) {
      console.warn('No character modules found');
      return [];
    }

    const characters = Object.values(characterModules) as Character[];
    console.log(`Found ${characters.length} characters`);
    return characters;
  } catch (error) {
    console.error('Error loading characters:', error);
    return [];
  }
}

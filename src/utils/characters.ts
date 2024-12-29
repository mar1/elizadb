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

    const characters = Object.values(characterModules)
      .filter((char: any) => {
        // Filter out template and invalid characters
        if (!char || typeof char !== 'object') return false;
        if (!char.id || char.id === '') return false;

        // Get the filename from the module path
        const path = Object.keys(characterModules).find(key => characterModules[key] === char) || '';
        return !path.includes('TEMPLATE.json');
      }) as Character[];

    console.log(`Found ${characters.length} characters`);

    // Sort by date added by default
    return characters.sort((a, b) =>
      new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  } catch (error) {
    console.error('Error loading characters:', error);
    return [];
  }
}

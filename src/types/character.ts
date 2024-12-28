export type CharacterCategory = 'Fictional Characters' | 'Video Games' | 'Historical Figures' | 'Pop Culture Icons';

export interface Character {
  id: string;
  name: string;
  category: CharacterCategory;
  dateAdded: string; // ISO date string
  clients: string[];
  modelProvider: string;
  settings: {
    voice: {
      model: string;
    };
  };
  plugins: string[];
  bio: string[];
  lore: string[];
  knowledge: string[];
  messageExamples: {
    user: string;
    content: {
      text: string;
    };
  }[][];
  postExamples: string[];
  topics: string[];
  style: {
    all: string[];
    chat: string[];
    post: string[];
  };
  adjectives: string[];
}
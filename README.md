# 🤖 ElizaDB - AI Character Configuration for ElizaOS

A specialized character configuration database designed for [ElizaOS](https://github.com/elizaOS/eliza/), the autonomous agent framework. This project provides a structured database of character definitions that can be directly used with ElizaOS to create sophisticated AI agents.

## 🌟 Features

- **Rich Character Profiles**: Detailed character information including:
  - Biographical information
  - Personality traits
  - Knowledge base
  - Communication style
  - Message examples
  - Voice settings

- **Advanced Browsing**:
  - Category-based filtering
  - Real-time search functionality
  - Responsive grid layout
  - Dark/Light mode support

- **Categories**:
  - Fictional Characters
  - Video Games
  - Historical Figures
  - Pop Culture Icons

## 🚀 Quick Start

1. **Prerequisites**

```bash
# Ensure you have ElizaOS installed first
git clone https://github.com/elizaOS/eliza.git
cd eliza
pnpm i && pnpm build
```

2. **Using Character Files**

```bash
# Start ElizaOS with a custom character
pnpm start --characters="path/to/your/character.json"
```

## 📖 Character Structure for ElizaOS

Characters are defined in JSON format compatible with ElizaOS specifications:

```json
{
  "id": "unique-character-id",
  "name": "Character Name",
  "category": "Category",
  "clients": ["twitter", "discord"],  // ElizaOS supported clients
  "modelProvider": "provider-name",
  "settings": {
    "voice": {
      "model": "voice-model-id"
    }
  },
  "bio": ["Biography lines"],
  "knowledge": ["Areas of expertise"],
  "style": {
    "all": ["General style traits"],
    "chat": ["Chat-specific style"],
    "post": ["Post-specific style"]
  },
  "adjectives": ["Trait1", "Trait2"]
}
```

## 🔧 Integration with ElizaOS

1. Place your character files in the ElizaOS project structure:

```text
eliza/
├── characters/
│   └── your-character.json
```

2. Load multiple characters:

```bash
pnpm start --characters="characters/character1.json,characters/character2.json"
```

## 🤝 Contributing Guidelines

### Character Contributions

1. Fork the repository
2. Create a new branch: `git checkout -b character/your-character-name`
3. Add your character JSON file to `characters/`
4. Test with ElizaOS using: `pnpm test:character your-character.json`
5. Submit a pull request with:
   - Character description
   - Test results
   - Use case examples

### Code Contributions

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Fuse.js](https://fusejs.io/) - Search Functionality

## 📝 License

This project is licensed under the MIT License

## 👥 Authors

- **Lead Maintainer**: [mar1dev](https://github.com/mar1dev)
- **Contributors**: [View all contributors](https://github.com/elizaOS/elizadb/graphs/contributors)

## 🌟 Eliza Community

- 📫 [Join the Eliza Discord](https://discord.gg/elizaos)
- 🐦 [Follow Eliza on Twitter](https://twitter.com/elizaOS)
- 📝 [Read Eliza's Blog](https://elizaos.com/blog)
- 🌟 [Star Eliza on GitHub](https://github.com/elizaOS/eliza)

---

Built for the ElizaOS Autonomous Agent Framework 🤖

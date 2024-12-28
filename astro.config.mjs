import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    site: "https://mar1.github.io",
    base: "/elizadb",
    output: "static",
});

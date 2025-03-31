import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";

const projects = [
  'fin-forge',
  'forge-coffee',
  'forge-crm',
  'forge-notes',
  'forge-pass-safeguard',
  'forge-sales',
  'forge-wander'
];

// Generate Vite configs for each project
const projectConfigs = projects.map(project => ({
  root: path.resolve(__dirname, `dist/${project}`),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(),
    viteStaticCopy({
      targets: [
        { src: `public/_redirects`, dest: '' },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, `dist/${project}/src`),
    },
  },
  build: {
    outDir: path.resolve(__dirname, `dist/${project}/dist`),
  },
}));

export default defineConfig(({ mode }) => projectConfigs.map(config => ({
  ...config,
  plugins: config.plugins.filter(Boolean),
})));

export default projectConfigs;
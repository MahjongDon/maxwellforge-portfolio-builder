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
const projectConfigs = projects.map(project => defineConfig(({ mode }) => ({
  root: path.resolve(__dirname, `dist/${project}`),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    viteStaticCopy({
      targets: [
        { src: path.resolve(__dirname, `dist/${project}/_redirects`), dest: '' },
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, `dist/${project}/src`),
    },
  },
  build: {
    outDir: path.resolve(__dirname, `dist/${project}/dist`),
  },
})));

export default projectConfigs;
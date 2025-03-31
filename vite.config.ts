import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const projects = [
  'fin-forge',
  'forge-coffee',
  'forge-crm',
  'forge-notes',
  'forge-pass-safeguard',
  'forge-sales',
  'forge-wander'
];

export default defineConfig(({ command, mode }) => {
  // Determine the current project based on an environment variable or other mechanism
  const currentProject = process.env.PROJECT || 'fin-forge';

  if (!projects.includes(currentProject)) {
    throw new Error(`Unknown project: ${currentProject}`);
  }

  return {
    root: path.resolve(__dirname, `dist/${currentProject}`), // Changed from projects/ to dist/
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          { src: path.resolve(__dirname, `dist/${currentProject}/_redirects`), dest: '' }, // Changed from projects/ to dist/
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, `dist/${currentProject}/src`), // Changed from projects/ to dist/
      },
    },
    build: {
      outDir: path.resolve(__dirname, `dist/${currentProject}`),
    },
  };
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

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
  const currentProject = process.env.PROJECT || 'fin-forge';

  if (!projects.includes(currentProject)) {
    throw new Error(`Unknown project: ${currentProject}`);
  }

  const entryPoint = currentProject === 'forge-notes' ? 'static.html' : 'index.html';

  return {
    root: path.resolve(__dirname, `dist/${currentProject}`),
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, `dist/${currentProject}/src`),
      },
    },
    build: {
      outDir: path.resolve(__dirname, `dist/${currentProject}`),
      rollupOptions: {
        input: path.resolve(__dirname, `dist/${currentProject}`, entryPoint),
      },
    },
  };
});
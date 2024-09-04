import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envFilePath = resolve(__dirname, `config/env/.env.${mode}`);
  dotenv.config({ path: envFilePath });

  const repoName = process.env.VITE_GH_REPO || '';

  return {
    plugins: [react()],
    base: mode === 'github' ? `/${repoName}/` : '/',
  };
});
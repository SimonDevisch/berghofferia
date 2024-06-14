// vite.config.js
import { defineConfig } from 'vite';
import {resolve} from 'path';



export default defineConfig({

  root: './',
  envDir: '../',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../index.html'),

      }
    }
  }
  
  
});

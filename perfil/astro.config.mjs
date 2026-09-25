// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite:{
        server:{
            allowedHosts:['localhost','127.0.0.1'],
        }
    }
});

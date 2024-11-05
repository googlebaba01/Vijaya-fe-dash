import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Comment out or remove the `lib` section for standard web app deployment
    rollupOptions: {
      external: ['react', 'react-dom'], // Only if you're building as a library
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

// vite.config.js

import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  css: {
    modules: false,
  },
  
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
};



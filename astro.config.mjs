import { defineConfig } from 'astro/config';

export default defineConfig({
  // Spécifie le répertoire de sortie pour les fichiers statiques
  // dans votre projet Astro. Par défaut, le répertoire de sortie est 'dist'.
  // Assurez-vous que ce répertoire est configuré correctement pour que GitHub Pages
  // puisse servir votre site Astro à partir de là.
  buildOptions: {
    out: 'docs', // par exemple, utilisez 'docs' au lieu de 'dist'
  },

  // Définissez la route de base pour votre site Astro.
  // Cela est souvent nécessaire lors du déploiement sur GitHub Pages,
  // car votre site sera servi à partir d'un sous-répertoire du domaine principal.
  // Par exemple, si votre nom d'utilisateur GitHub est 'username' et que vous utilisez
  // un référentiel nommé 'username.github.io', la route de base sera '/username.github.io/'.
  // Assurez-vous d'ajuster cette valeur en fonction de votre configuration GitHub Pages.
  site: {
    baseUrl: '/jkevinj.github.io/',
  },
});

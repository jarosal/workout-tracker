import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'src/frontend/static',
			lib: 'src/frontend/lib',
			params: 'src/frontend/params',
			routes: 'src/frontend/routes',
			serviceWorker: 'src/frontend/service-worker',
			appTemplate: 'src/frontend/app.html',
			errorTemplate: 'src/frontend/error.html'
		}
	}
};

export default config;

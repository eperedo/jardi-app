'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const config = {
	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: process.env.JARDI_API || 'http://localhost:3000',
			},
		},
	},
	env: {
		NETLIFY_IDENTITY_URL: process.env.NETLIFY_IDENTITY_URL || '',
	},
	generate: {
		dir: './../dist',
	},
	head: {
		title: 'Jardi',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Less worry more saving',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	icon: {
		iconSrc: './src/assets/eperedo.png',
	},
	manifest: {
		name: 'Jardi',
		lang: 'en',
	},
	mode: 'spa',
	modules: ['@nuxtjs/pwa', '@nuxtjs/apollo'],
	plugins: ['~/plugins/identity.js'],
	rootDir: './src',
	workbox: {
		runtimeCaching: [
			{
				urlPattern: 'https://fonts.gstatic.com/s/exo2/.*',
				handler: 'cacheFirst',
				method: 'GET',
			},
			{
				urlPattern: 'https://res.cloudinary.com/drukp4ipu/image/upload/.*',
				handler: 'cacheFirst',
				method: 'GET',
			},
		],
	},
};

module.exports = config;

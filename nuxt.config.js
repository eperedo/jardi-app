'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const config = {
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
		link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
	},
	icon: {
		iconSrc: './src/assets/eperedo.png',
	},
	manifest: {
		name: 'Jardi',
		lang: 'en',
	},
	mode: 'spa',
	modules: ['@nuxtjs/pwa'],
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

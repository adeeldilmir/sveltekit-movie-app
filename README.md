SvelteKit Movie App

A simple movie app built with SvelteKit and powered by Bun for blazing-fast performance.

🚀 Features

Browse popular movies

View detailed movie information

Responsive design

Fast and lightweight with SvelteKit

🛠️ Tech Stack

SvelteKit - Modern UI framework

Bun - Super fast JavaScript runtime

TMDb API (or any movie API you’re using)

📦 Installation

Make sure you have Bun installed on your system. If not, install it first:
```sh
curl -fsSL https://bun.sh/install | bash
```

Then, clone the repository and install dependencies:

```sh
git clone git@github.com:adeeldilmir/sveltekit-movie-app.git
cd sveltekit-movie-app
bun install
```

🌍 Environment Variables

Create a .env file in the root directory and add the necessary environment variables:

```sh
TMDB_API_KEY=your_api_key_here
```

Ensure you replace your_api_key_here with an actual value.


🔥 Running the Dev Server

```sh
bun run dev --open
```

This will start the app and open it in your default browser.

🏗️ Building for Production

To create an optimized production build:

```sh
bun run build
```

🚀 Deploying

Since this is a static site, you can deploy it on platforms like:

Vercel

Netlify

GitHub Pages

Cloudflare Pages

If deploying to Vercel, you can use:

vercel deploy

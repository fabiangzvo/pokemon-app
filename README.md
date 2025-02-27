# Pokemon app

Pokémon search engine: add your favorites, view their details, and share them with your friends!

- Look at the [website](https://pokedex-111.netlify.app/).
- Look at the [repository](https://github.com/fabiangzvo/pokemon-app).

## Tech Stack

**_Nuxt_**: Web framework for building scalable web applications. I used composables to create a global state to manage and store the list of favorites in localStorage. It also manages routes based on the folder structure and uses $fetch to make requests to the Pokémon API.

**_PrimeVue_**: UI component library based on Vue. I used it to speed up the app's development and focus solely on the logic.

**_Gsap_**: library for creating animations. I used it to animate the app's loader with a falling effect, 360-degree spins, and a bounce to give the illusion of throwing a ball.

**_Tailwindcss_**: For managing the app's styles.

**_IntersectionObserver_**: API that efficiently detects when an element is visible in the viewport. I used it to implement the infinite scroll effect when loading Pokémon.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

|             Key              |               Example               | Description            |
| :--------------------------: | :---------------------------------: | :--------------------- |
| `NUX_PUBLIC_POKEMON_API_URL` | `https://pokeapi.co/api/v2/pokemon` | URL of the Pokémon API |

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

- ### Development Server

  Start the development server on `http://localhost:3000`:

  ```bash
  pnpm dev
  ```

- ### Production

  Build the application for production:

  ```bash
  # pnpm
  pnpm build
  ```

- ### Locally preview production build

  ```bash
  # pnpm
  pnpm preview
  ```

## Author

- [@fabiangzvo](https://www.github.com/fabiangzvo)

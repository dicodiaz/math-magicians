![](https://img.shields.io/badge/Microverse-blueviolet)

# Math Magicians

**Math magicians** is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to:

- Make simple calculations.
- Read a random math-related quote.

It exposes the Calculator component for any other project to consume using Module Federation.

This application is built with React and Bootstrap.

## Mobile

![screenshot](./app_screenshot_mobile.png)

## Desktop

![screenshot](./app_screenshot_desktop.png)

## Built With

- React
- Bootstrap
- Module Federation
- VSCode
- Gitflow & GitHub

## Live Demo

[Live Demo Link](https://math-magicians.dicodiaz.com.co)

## Getting Started

To get this project up and running, follow these simple steps:

1. Clone the repository into your machine.
2. Open the project's folder with your preferred source-code editor.
3. Run `pnpm install`.
4. Run `pnpm dev`.

### Prerequisites

- Any modern web browser.
- Any source-code editor (VSCode recommended).

### Consume the Calculator

To consume the Calculator component from a host Vite app, follow these simple steps:

1. Install @originjs/vite-plugin-federation as a dev dependency.

```cli
pnpm i -D @originjs/vite-plugin-federation
```

2. Configure the remote in your `vite.config.ts` file.

```js
// vite.config.js

import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  // ...
  plugins: [
    // ...
    federation({
      name: 'your-app-name',
      remotes: {
        mathMagicians: 'https://math-magicians.dicodiaz.com.co/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'bootstrap'],
    }),
    // ...
  ],
  // ...
});
```

3. Consume the component in your application

```js
// App.jsx

import Calculator from 'mathMagicians/Calculator';

const App = () => {
  return <Calculator />;
};
```

## Authors

👤 **Dico Diaz Dussan**

- GitHub: [@dicodiaz](https://github.com/dicodiaz)
- LinkedIn: [Dico Diaz Dussan](https://www.linkedin.com/in/dico-diaz-dussan/)
- Portfolio: [portfolio.dicodiaz.com.co](https://portfolio.dicodiaz.com.co)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mustabbas/TvMovies/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.

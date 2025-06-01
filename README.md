# Vola Track

Vola Track is a modern cryptocurrency tracker web application that allows users to view real-time information about various cryptocurrencies, including trending coins, market data, and historical price charts. The app features a beautiful animated Spline 3D background, a responsive UI, and interactive charts.

## Live Demo
The project is deployed on Vercel: [https://valo-iota-eight.vercel.app/](https://valo-iota-eight.vercel.app/)

## Features
- **Live Cryptocurrency Prices:** View up-to-date prices, market cap, and 24h changes for top cryptocurrencies.
- **Trending Coins Carousel:** See trending coins in a visually appealing carousel.
- **Detailed Coin Pages:** Click on any coin to view detailed information, including price charts and market data.
- **Historical Price Charts:** Interactive charts powered by Chart.js for visualizing price trends over different timeframes.
- **Currency Switcher:** Toggle between INR and USD for all price data.
- **Modern UI:** Built with Material-UI (MUI) for a sleek, responsive design.
- **3D Animated Banner:** Uses a Spline 3D model as the animated background for the banner section.

## Tech Stack
- **React**: Frontend library for building user interfaces.
- **Material-UI (MUI)**: UI component library for React, providing styled components and theming.
- **Axios**: Promise-based HTTP client for making API requests.
- **Chart.js & react-chartjs-2**: For rendering interactive and responsive charts.
- **React Router**: For client-side routing and navigation.
- **Spline**: For embedding interactive 3D models as backgrounds.
- **CoinGecko API**: Source of cryptocurrency data (prices, market cap, historical data, etc).

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm start
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Notes
- For local development, you may need to use a CORS proxy to access the CoinGecko API due to CORS restrictions.
- The app is for educational and demonstration purposes only.

## License
This project is licensed under the MIT License.

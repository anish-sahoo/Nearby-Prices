# Spring 2024, CS3200 (Database Design) Project 1

```
Problem: For stores (especially local stores like Asian grocery stores) in a neighborhood/city without online platforms, it is hard for the user to know which store sells something for the cheapest price.
Solution: An application where users can upload prices of common things whenever they go to any store. Other users can then see the prices/unit for each store, and they can then decide where to go. It will also have features that will help the user discover the best prices. Basically, it's crowdsourced price tracking for offline stores.
Potential Tables:
- Stores
- Users (login system)
- Items
- Geolocation (location of the stores)
- categories
(more to be added, I will add stuff as I go)
Current tech stack plan - node+express+react+sqlite+js
```

## Try it out

To set this project up, run these commands in a terminal:

```bash
git clone https://github.com/anish-sahoo/Nearby-Prices.git
cd NearbyPrices
npm install
```

Then use `npm start` to run the project.

`npm start` runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.

---

### This project was created using [Vite](https://vite.com), and uses [TailwindCSS](https://tailwindcss.com/) & [NextUI](https://nextui.org/).

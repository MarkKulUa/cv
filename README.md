# CV and GraphiQL App

## Deploy (demo)
 Cv: [link](https://rs-graphiql-app.netlify.app/cv)

 GraphiQL: [link](https://rs-graphiql-app.netlify.app)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/MarkKulUa/cv
```

2. Install the app dependencies:

```bash
cd cv
npm install
```

3. For Login/Register functions you need to add the following keys for firebase auth to work in `.env` file:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```
4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` to access the app.

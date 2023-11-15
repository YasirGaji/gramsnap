# GramSnap

[Ongoing]

This is a fullstack social media app based other social media apps such as "[Instagram](https://www.instagram.com/yasirgaji/)" and "[SnapChat](https://www.snapchat.com/?original_referrer=none)" built on [React + TypeScript + Vite](https://reactjs.org/) for the front-end,  [Appwrite](https://cloud.appwrite.io/register) as the backend, and [Tailwindcss CSS](https://tailwindcss.com/docs/guides/create-react-app)

## Other tools/technology and libraries used

 [React-Query](https://tanstackquery.com/) - For data mutation |
 [React Router](https://reactrouter.com/) & [React Router Dom V6](https://reactrouter.com/) - For routing

## What I Learned

  1. How to set-up a vite package.
  2. How to use Shadcn package and Zod schema.
  3. How to setup Appwrite for authentication and backend services.
  4. How to setup database, realtions and storage in appwrite
  5. How to use Toast from Shadcn
  6. How to setup and use Tanstack query (FKA React query) for auto caching, data fetching, data mutating, and infinite scrolling
  7. The use of the finally clause after the trycatch clause.
  8. How to use constants to declare links/LIs as static code in react.
  9. How to use React Dropzone.
  
## Errors  I Faced

  1. "Uncaught TypeError: Cannot read properties of undefined (reading 'replace')
  at Client.setEndpoint (client.ts:120:93)
  at config.ts:13:8" - This error was caused by the way I imported my env variables and not naming my ENV file properly

  2. "Access to XMLHttpRequest at '<https://cloud.appwrite.io/v1/account>' from origin '<http://127.0.0.1:5173>' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value '<http://localhost:5173>' that is not equal to the supplied origin." - This error was caused by not using the appropriate url and also an error in the attribute naming from appwrite

  3. "Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["getRecentPosts"]" - 

## Current Error
  
  1. "Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["getRecentPosts"]"

## [View Project](https://yasirgaji.com)

# GramSnap

[Ongoing]

This is a fullstack social media app based on other social media apps such as "[Instagram](https://www.instagram.com/yasirgaji/)" and "[SnapChat](https://www.snapchat.com/?original_referrer=none)" built on [React + TypeScript + Vite](https://reactjs.org/) for the front-end,  [Appwrite](https://cloud.appwrite.io/register) as the backend, and [Tailwindcss CSS](https://tailwindcss.com/docs/guides/create-react-app) for styling.

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
  10. How to use chatGPT to configure javascript functions for faster code execution.
  11. The Tanstack query optimistic update for instantaneous update
  12. Automatic boolean assignment of replacing " ? true : false " with "!!" when making a function
  13. A better way to consume APIs
  14. How to debugg vite build errors
  
## Errors  I Faced

  1. "Uncaught TypeError: Cannot read properties of undefined (reading 'replace')
  at Client.setEndpoint (client.ts:120:93)
  at config.ts:13:8" - This error was caused by the way I imported my env variables and not naming my ENV file properly

  2. "Access to XMLHttpRequest at '<https://cloud.appwrite.io/v1/account>' from origin '<http://127.0.0.1:5173>' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value '<http://localhost:5173>' that is not equal to the supplied origin." - This error was caused by not using the appropriate url and also an error in the attribute naming from appwrite

  3. "Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["getRecentPosts"]" - This error was caused cause I did not return posts in the getRecentPosts async function

  4. "Uncaught TypeError: newLikes.includes is not a function - in the PostStats component" - This error was as a result of me passing the "...likes" prop as an object instead of an array

  5. "Failed to load resource: the server responded with a status of 400 () - in the appwrite api file" - This was a result of passing "user" as a parameter in the savePost function instead of "users"

  6. "Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["getPostById","undefined"]" and "api.ts:260 GET <https://cloud.appwrite.io/v1/databases/6545fa049b47bad92847/collections/6545fa6e8bb145808a51/documents/undefined> 404 (Not Found) AppwriteException: Document with the requested ID could not be found." - This error was caused due to the "id" rendered in the postCard component for the edit button function missing the "$" sign

  7. "Type 'DocumentList<Document> | undefined' is not assignable to type 'Document[] | undefined'.
  Type 'DocumentList<Document>' is missing the following properties from type 'Document[]': length, pop, push, concat, and 29 more.searchedPosts = {searchedPosts}" - This was a build error fixed by intoducing a convert function

## Current Error
  
  1. 7 Build Errors

## [View Project](https://yasirgaji.com)

## Standalone React SPA web application with PnPjs and msal.js

## How to run

1. Create a new app registation in Azure AD. Enable implict flow, add `https://localhost:3000/` as a valid redirect url
2. Add API permissons to the app: MS Graph: `User.Read`, `Group.Read.All`, `profile`, SharePoint: `AllSites.Read`
3. Under `./webpack/dev.env.js` change `SP_SITE_URL` to point to your SharePoint site
4. Under `./app/src/msal/msalConfig.ts` replace values with yours tenant id and client id from step 1
5. `npm i`
6. `npm run start` - a browser window will open and will give you an option to login. After authentication you will see your groups and site info.


--- 
Blog post - [Building Single Page Application with React, MSAL.js and PnPjs](https://spblog.net/post/2019/06/04/building-single-page-application-with-react-msal-js-and-pnpjs)

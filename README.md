## Standalone React SPA web application with PnPjs and adal.js

## How to run

1. Create a new app registation in Azure AD. Enable implict flow, add `https://localhost:3000/` as a valid redirect url
2. Add API permissons to the app: MS Graph: `User.Read`, `Group.Read.All`, `profile`, SharePoint: `AllSites.Read`
3. Under `./webpack/dev.env.js` change `SP_SITE_URL` to point to your SharePoint site
4. Under `./app/src/adal/adalConfig.ts` replace values with yours tenant id and client id from step 1
5. `npm i`
6. `npm run start` - a browser window will open and will give you an option to login. After authentication you will see your groups and site info. 
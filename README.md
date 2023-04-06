# Atala README

[![node](https://img.shields.io/badge/node-16-green)](https://nodejs.org/en/)
[![Address](https://img.shields.io/badge/Port-1234-yellow)](http://localhost:1234)

### TL;DR

```bash
cd /path/to/atala_landing
code .
npm install
npm run dev # To run locally
npm run build # To build application
```

---

### Deploying to Dev Environment

**_URL_**: [atala.ktcdev.com](http://atala.ktcdev.com)

<aside style="background-color:#ffcccc; padding: 1rem">
⛔ Please make sure you have the ssh key to access the ktcdev server. It can be found in the Shared Vault in 1Password and is called kt_staff.

</aside>

1. Update your `.ssh/config` file so that it includes the following

   ```bash
   Host ktcdev
     User ubuntu
     HostName ktcdev.com
     IdentityFile ~/pathTo/file.pem # Update this with your path and file name
   ```

2. Add your changes, write a commit message and push changes to `ktcdev`

   ```bash
   git add .
   git commit -m "your message"
   git push ktcdev develop
   ```

   ***

### Deploying to Prod Environment

**_URL_**: [atalafinancial.com](https://atalafinancial.com/)

1. Run `npm run build` and create a zip of the `dist` folder. Place this somewhere you can easily access such as your desktop.
2. Login to the King Tide SiteGround account
   1. Navigate to “Websites” in the navbar
   2. Click “Site Tools” under “atalafinancial.com”
3. Upload the `dist.zip` file to the `public_html` directory in the File Manager
4. Select the `dist.zip` file and extract

   1. Please note you have to select the file in the larger window as shown below

   ![Screen Shot 2023-03-28 at 3.54.01 PM.png](readmeAssets/Screen_Shot_2023-03-28_at_3.54.01_PM.png)

5. Select everything in the newly created `dist/dist` directory and drag and drop it into `public_html`
6. Select to Overwrite the new files
7. Delete `dist` folder
8. Navigate to the Caching menu under Speed

   ![Screen Shot 2023-03-30 at 10.00.43 AM.png](readmeAssets/Screen_Shot_2023-03-30_at_10.00.43_AM.png)

9. Under Dynamic Cache, click the Flush Cache action

   ![Screen Shot 2023-03-30 at 10.03.10 AM.png](readmeAssets/Screen_Shot_2023-03-30_at_10.03.10_AM.png)

10. You should see the changes shortly

<aside style="background-color:#ffffcc; padding: 1rem">
🚨 For best results please clear the cache on the page and/or use an incognito tab

</aside>

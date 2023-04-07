# SiteGround Github Action Test Repository

This repository contains a PoC of how GitHub Actions can automate the deployment to a SiteGround site. This example uses a project that uses Node and Pug templates.

## Steps

```
npm install
npm run build
git add .
git commit -m 'your message'
git push origin main
```

## These steps will trigger the following

1.  Checkout the repository
2.  Install dependencies
3.  Build the application
4.  SSH into the SiteGround server
5.  CD to the repository
6.  Pull from origin main
7.  Delete the files in the public_html folder
8.  Copy the contents of the dist folder into the public_html folder

## Other thoughts and considerations

- This naturally also works with a correct git flow of making a pull request to merge develop into main
- SiteGround uses a dynamic cache that needs to be flushed. Still looking for a way to flush this cache from the server terminal

## Easy Test

To test this I have been changing the title of the homepage in the file src/pug/.pugrc.js. You can to this then run the steps outlined above. Changes should be reflected at [this link](http://jordanr217.sg-host.com/).

You can also ssh into the server by adding this block to your .ssh/config file:

```
Host siteground-test
  User u1146-bu6vbtmugytt
  HostName gcam1023.siteground.biz
  Port 18765
  IdentityFile ~/.ssh/kt_staff
```

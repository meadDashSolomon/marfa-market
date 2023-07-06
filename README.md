Atlier - A Hack Reactor Front End Capstone Project

Overview:
  This project is a website designed to simulate an up-to-date clothing retailer's front end.

Table of Contents:
  1. Description
  2. Installation
  3. Git Workflow

1. Description
  This website features 4 primary components. Please see this demo (https://recordit.co/vJcuuTUKPF) of the prototype for the website and the description below.

  First, an image gallery displays available styles of clothing and information relevant to purchasing each product. The main portion of this component is a large image of the selected product with thumbnail overlays of alternate pictures that can be clicked to update the main image accordingly. In addition, sers can select various products to see what they look like, sizes and quantities available, and add them to their cart.

  Second, a related products section built with MUI shows a list of products with features that are similar to the selected product in the image gallery. These related products are interactable and will dynamically update the image gallery and related products when clicked. Similarly, there is a subcomponent that allows users to save multiple products to build an outfit.

  Third, a questions and answers component allows for the additon of questions that can be answered by buyers or sellers. Moreover, the section is searchable to quickly find potential questions of interest.

  Fourth, the final component is a ratings and review section. This section includes all reviews, the total number of review per product, and 5 outlined stars that are filled in to the nearest quarter star to represent the average review score for that product. Finally, this section allows users to add reviews that include uploaded images and filter the existing reviews by several metrics like helpfulness.


2. Installation
  i. npm install
  ii. npm run dev  // This project runs on vite


4. Git Workflow

This is our frontend capstone for HackReactor's bootcamp
**Start with the main branch**
**Create a new-branch**
**Update, add, commit, and push changes**

```
git status
git add <some-file>
git commit
```

**Push feature branch to remote**

git push -u origin new-feature


## Setup
Clone to local machine
```sh
git clone git@github.com:TeamPatrickStar/hackReactor-frontend-capstone.git
```


## Git Workflow
https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

Checkout and sync main

```
git checkout main
git fetch origin
git reset --hard origin/main
```
Create a new branch from main for the feature

```
git checkout -b new-feature
```
Once work is complete stage/commit on the feature branch
``` sh
git status
git add <files>
git commit
```
Push the changes to the repo
```
git push -u origin new-feature
```
. Create a pull request to merge feature branch to main
From Git create a pull request to merge the branches


### Example Workflow
* git clone git@github.com:TeamPatrickStar/hackReactor-frontend-capstone.git
* git checkout -b newcomponent
* newcomponent.js << console.log('hello world')
* git add newcomponent.js
* git commit -m "new component created"
* git push -u origin newcomponent
* -- go to Git --
* create new pull request master << newcomponent
* resolve merge conflicts




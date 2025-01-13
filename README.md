# Yangyu's Notes

## General Info

- powered by [hugo](https://gohugo.io/getting-started/installing/)
- push to `release` branch, to trigger a deploy
- released at [songyangyu.com](https://songyangyu.com/)
- refresher of basic concepts:
    - Hugo directory structuer: <https://gohugo.io/getting-started/directory-structure/>

## Setup

```bash
# install hugo locally, for mac it's
brew install hugo

# after checkout project, setup git submodule (for the themes)
git submodule init
git submodule update
```

## Command Cheatsheet

```bash
# to release branch -- therefore triggers the release github action
git push origin main:release

# to create new content
hugo new content/english/keeping-a-work-note-1.md -k posts

# to add static content, add them into `/static` folder

```
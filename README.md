# What is this repo about

This is the blog of Song Yangyu. Check out here: <http://flyfy1.github.io/>

## My Convention

- the posts listing on the index page (i.e., the frontpage), are tagged with `front-page`
- in each page / post, there should be a `lang` property. It's useless right now, but I guess it would be useful in 
  future

## Commands

### Setup

```bash
bundle install
```

### Local Server

```bash
bundle exec jekyll serve
```

### New Article

To create new post, do:

```bash
bundle exec rake 'post[title,category]'
```

To create new page, do:

```bash
bundle exec rake 'page[title]'
```

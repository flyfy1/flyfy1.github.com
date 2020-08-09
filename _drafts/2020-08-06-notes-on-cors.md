---
layout: post
title: "Notes on CORS"
tags: "notes"
category: "web"
published: false
lang: en
---

# Intro

Cross Origin Resource Sharing (CORS) is a way to make sure cookies isn't shared unintentionally.

Here's a good article about it: <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>

This post is just to take notes on the learnings from online (with ref to the source)

# Notes

It includes the following concepts:

- Preflight Request: <https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request>
    - http `Option` request, using following header:
        - [Access-Control-Request-Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method): tell server which is the method for actual request
        - [Access-Control-Request-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers): tell server which HTTP headers client might send
        - [Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin): tell server where (i.e., a server name) a fetch originates from
        
    - issues by browser automatically
    - if server allows it, server would respond with header
        - [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods): tell what methods are allowed by server
    - if cache is allowed, server would respond with header
        - [Access-Control-Max-Age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age): how long results of preflight request can be cached, in num of seconds
- Requests use CORS (ref: [CORS standard](https://fetch.spec.whatwg.org/#http-cors-protocol))
    - XMLHttpRequest / FetchAPIs
    - Web Fonts: server can decide which site is permitted to use the font 
    - WebGL textures
    - image/video frames drawn to a canvas
    - CSS Shapes from images
    
    - [CORS-saftlisted method](https://fetch.spec.whatwg.org/#methods): `GET` / `HEAD` / `POST`
    - <https://fetch.spec.whatwg.org/#http-cors-protocol>

- HTTPS Request
    - 
    
- MISC
    - upon CORS failure, JS only know that request has failed, but the detail is unknwon -- can only check via browesr console
    

---
layout: post
title: "Understand Direct Upload in ActiveStorage"
category: "rails"
---

# Intro

[ActiveStorage](https://github.com/rails/rails/tree/master/activestorage) provides an easy way for RailsApp to manage
the attachment. It provides a Resource Model to save & process the uploaded object, as well as a UI for people to do the
upload. The details can be fond on their [official docs](https://edgeguides.rubyonrails.org/active_storage_overview.html).
 
However, The UI and backend integrated so seamlessly that one cannot easily tell what's happening behind the scene. It
becomes hard when one simply want to use part of the functionality there. For example, if my app provides only WebAPI, 
and I want to support `direct upload` API to my users, I only want to use the activestorage's ability to:

- talk with 3rd party storage API
- web API to support upload 

but I don't need it to do the upload via webUI for me.

In order to do that, a proper understanding on how ActiveStorage actually works internally is needed.

# Code Structure

ActiveStorage's source code locates at <https://github.com/rails/rails/tree/master/activestorage>. Note that when I 
reference to the code in this post, the path would be relative to the root folder in the Rails repo.

Its source code has several different sections:

- Frontend:
  - javascript for UI: `activestorage/app/javascript/activestorage`
- Backend: 
  - Rails Routes definition: `activestorage/config/routes.rb`
  - ActiveJob to process the uploaded file: `activestorage/app/jobs`
  - Model Definitions for the resource: `activestorage/app/models`
  - Controller Definition: `activestorage/app/controllers`
- Install / Generators / Helpers:
  - DB Migration: `activestorage/db`
  - Help Logic: `activestorage/lib`, one can see folder for detail, here's one example
    - Service, defines connection to 3rd Party: `activestorage/lib/active_storage/service/`
    
# How Direct Upload Works

After knowing the folder structure, it becomes trivial to understand how certain logic works. Let's take the 
`direct upload` logic for example.

## Flow Diagram

Given a typical flow of direct upload:

![Direct Upload Flow](/assets/activestorage/direct-upload-flow.png)

## How to Get Upload Token - Step 1

First step is to get the upload token.

We know where to look for resources:

- `activestorage/config/routes.rb`: to see which controller provides the endpoint for step 1 and 5
- `activestorage/app/controllers/active_storage/direct_uploads_controller.rb`: the corresponding direct upload controller

On the other hand, we know that from Step 2, it needs to get oneTimeToken. By looking at one of the service 
`activestorage/lib/active_storage/service/gcs_service.rb`, it has method `url_for_direct_upload`. Searching through the
code base, we can also see that it's used in the controller file:

```ruby
    def direct_upload_json(blob)
      blob.as_json(root: false, methods: :signed_id).merge(direct_upload: {
        url: blob.service_url_for_direct_upload,
        headers: blob.service_headers_for_direct_upload
      })
    end
```

## Try the URL from Local Appt 

To make sure that our understanding is correct, we can try it out in our local rails app.


# redirect me

for link sharing.

## gui

svelte app provides a simple web gui for setting the current redirect url

the /redirect-me endpoint redirects to that endpoint

caddy allows that url to be its own process (& therefore port)

# dev setup

open in dev container

`yarn install`

`yarn run dev`

# deployment

uses the top level docker compose

requires docker network apps to plug into
# A GUI for a stable diffusion algorithm
I'm a guy who lives in a third world country where $10/m is too much for a text-to-image tool - midjourney. Desperate times calls for desperate measures, I've looked for the general algorithm to generate images from text input and found out the stable diffusion. This work provides a simple GUI and an endpoint for the implementation of an open source simple diffusion algorithm.

## About this repo

First of all, the algorithm itself does not belong to me. It is an open source algorithm and belongs to [CompVis](https://huggingface.co/CompVis/stable-diffusion-v1-4), a HuggingFace organization (Robin Rombach, Patrick Esser). I just figured it out how to use it, provided an endpoint with FastAPI and a GUI with React.

## In order to use it

### Backend:
- You need an access token for [HuggingFace](https://huggingface.co/). It is very simple to get; just register, go to settings, ask for the token. 
- You need `python 3.10+` and `pip` installed.
- After cloning the repo, install the requirements with `pip install -r requirements.txt`.
- `huggingface-hub 0.9.1` will be installed with requirements. Run `huggingface-cli login`. At this step, it will direct you to the page which you can associate your HuggingFace token with the code.
- Now you can run `uvicorn app.main:app --reload` command. This command will provide you the and point the GUI needs.

### Frontend:
- You need nodejs installed in your computer.
- If you've already installed nodejs, go to \stable-diffusion\gui\stable-diffusion-gui folder in your terminal and run npm start.
- A web page which you can use to create images will pop up.

### Some important points:
- If you expect something strong like midjourney, you may be disappointed. This is still good, but not that good.
- In order to run the tool properly, both backend and frontend part must run simultaneously.
- This algorithm runs on your GPU. If your GPU is weak it may not provide good results.
- I named this app as "teyobeylerjourney". It is a midjourney reference as you may guess (teyobeyler is my nickname). Fun stuff.

Well, have fun!

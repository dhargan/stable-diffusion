import json

from fastapi import FastAPI, Body

app = FastAPI()


def stable_diffusion(prompt):
    from torch import autocast
    from diffusers import StableDiffusionPipeline

    model_id = "CompVis/stable-diffusion-v1-4"
    device = "cuda"

    pipe = StableDiffusionPipeline.from_pretrained(model_id, use_auth_token=True)
    pipe = pipe.to(device)

    with autocast("cuda"):
        image = pipe(prompt, guidance_scale=7.5).images[0]

    image.save("gui/stable-diffusion-gui/src/Assets/image.png")


@app.post("/")
async def root(prompt: str = Body(...)):
    prompt = json.loads(prompt)
    stable_diffusion(prompt["prompt"])
    return prompt

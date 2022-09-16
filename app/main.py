from fastapi import FastAPI

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

    image.save("image.png")


@app.get("/")
async def root():
    stable_diffusion("orange, tabby cat, green eyes with sunglasses")
    return {"message": "Hello World"}

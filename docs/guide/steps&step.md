
# Steps & Step

Let's say `tg-from="200"` and `tg-to="-200"`, we want to move the element in x position with `transform: translateX()`. `tg-steps` lets us define how many steps from `200` to `-200`, for example, `tg-steps="400"` means run from `200` to `-200` with `400` steps, `1` per increment; In other words, `tg-steps="800"` means `0.5` per increment.

But sometimes, we do not want to do the math by ourselves, that's why `tg-step` exists. `tg-step` defines the exact value of increment. Please note that if `tg-step` is defined, `tg-steps` will be ignored.

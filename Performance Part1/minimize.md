## Code minification

That's what all developers now about, remove whitepspaces comments and etc... from code to production (Webpack).

## Images

- JPG : Can't have transparent background, suited for complex images with a lot of colors.

- Gif : Limited number of total colors, really good for small animations.

- PNG : Limited number of colors, they tend to be smaller than JPG, the're used a lot for Logos, they support transparency, but due to be a losslesss format don't use as a photo or others, they tend to be in this case more heavy than JPG.

- SVG : Completely diferent from the others, scalable, incredible small, customizable, but they're simple with few colors.

WebP and others more modern image types, load faster and consume less data, but browser support still not that good.

You want to pick the right formmat and compress that without minimazing they quality.

### Other tips

- PNG: Reduce with TinyPNG
- JPG: Reduce with JPG-optimizer
- Chose simple ilustrations over highly detailed photographs
- Always lower jpeg quality(30-60%)
- Rezise image based on size it will be displayed
- Display different sized images for different backgrounds.
- Use CDN like *imigx*
- Remove image metadata *verexif* (show and remove metadata)
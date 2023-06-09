function aspectRatio(width, height) {
  let result = '';
  if (width > height) {
    result = 'Landscape'
  } else if (width < height) {
    result = 'Portrait'
  } else if (width == height) {
    result = 'Square'
  } else {
    result = 'Inconclusive'
  }
  return `Your Aspect Ratio is ${result}.`
}

console.log(aspectRatio(1080, 1080));

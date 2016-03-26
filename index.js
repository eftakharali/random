module.export = random
function random(max, min) {
  max || max = Number.MAX_SAFE_INTEGER
  min || min = 0
  return min + Math.floor(Math.random() * (max - min))
}

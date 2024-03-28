export default defineCachedEventHandler(async (event) => {
  return $fetch('https://db.ygoprodeck.com' + event.path);
}, { maxAge: 172800 })

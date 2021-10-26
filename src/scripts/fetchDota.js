const fetchApiDota = () => {
  return fetch('https://api.opendota.com/api/heroStats')
    .then((response) => response.json())
    .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = { fetchApiDota };
}

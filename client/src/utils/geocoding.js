const geocodingUrl = 'https://api.mapbox.com/geocoding/v5';
const token = 'pk.eyJ1Ijoiem91c2hpbHUzMSIsImEiOiJja2tnMGxiZmEwOW5lMnVsYTN3OTR6eXg5In0.EExs7dyM_eoTAEdLXzUmVw';
const req = (url, body, method = 'GET') =>
new Request(url, {
  method,
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  }),
  body
});

export async function geoCoding(address) {
    let query = `${geocodingUrl}/mapbox.places/${ address }.json?access_token=${token}`
    let res = await fetch(req(query))
    let data = await res.json()
    let coor = data.features
        .filter((place) => place.place_type.includes('place'))
        .map((poi) => ({
          id: poi.id,
          center: poi.center,
          name: poi.text
        }));

      console.log("Got: ",coor);
      return coor;
}

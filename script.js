function get_random_image(){
  console.log("========(NEW AIRCRAFT)========")

  //Generate random sky
  sky_min = 1
  sky_max = 6
  sky = Math.floor(Math.random() * (sky_max - sky_min + 1) + sky_min)
  random_sky = "Source Images/sky_" + sky + ".jpg"
  path_to_sky = "url('" + random_sky + "')" 
  document.body.style.backgroundImage = path_to_sky

  // Get random image
  aircraft_min = 1
  aircraft_max = 173

  random_index = Math.floor(Math.random() * (aircraft_max - aircraft_min + 1) + aircraft_min)
  random_image = "img (" + random_index.toString() + ").png"
  console.log("Image index: " + random_index)
  console.log(random_image)

  fetch("aircraft.json")
    .then(function(resp){
      return resp.json()
    })
    .then(function(data){
      console.log(data[random_index-1])

      document.getElementById('img_box').src = `./Source Images/${random_image}`
      document.getElementById('img_box').title = data[random_index-1].aircraft
    })
}



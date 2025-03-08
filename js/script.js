window.onload = function() 
{
  async function initMap() {
    const position = { lat: 5.422, lng: 100.295 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const {ColorScheme} = await google.maps.importLibrary("core")
    const climbingImg = document.createElement("img");
    climbingImg.src = "./images/climbing.png"

    map = new Map(document.getElementById("map"), {
      zoom: 19,
      center: position,
      mapId: "6159368a4ef77002",
      colorScheme: ColorScheme.LIGHT,
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      content: climbingImg,
      title: "Jesseton Rock Wall",
      gmpClickable: true,
    });

    map.setMapTypeId('satellite');
    map.setTilt(60);

    marker.addListener("gmp-click", ({ domEvent, latLng }) => {
      alert("Let's Climb!");
    });  

  }

  initMap();
};

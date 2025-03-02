(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyANsah6p3mH6J62H4jdHcJjjVHRRG0QYGU",
  v: "weekly",
});
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
    const { target } = domEvent;
    alert("Let's Climb!");
  });  

}

initMap();

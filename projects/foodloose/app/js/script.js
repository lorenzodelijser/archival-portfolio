var data1 = document.querySelector("#aantal-cal");
var data3 = document.querySelector("#data3");
var data4 = document.querySelector("#playlist-wrapper");

if (!Array.prototype.closest)
 Array.prototype.closest = function(func) {
  'use strict';
  if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
   throw new TypeError();

  var dist = Number.MAX_VALUE,
      len = this.length >>> 0,
      res = null, t = this, c = 0, i = -1;
  while (++i !== len) {
    c = Math.abs(func(t[i]));
    if (c < dist){
      dist = c;
      res = t[i];
    }
  }
  return res;
};

function willekeurigObject(keuze) {
  console.log(keuze);
  var gekozenDonut = donuts.find(zoekFunctie);
  function zoekFunctie(donut) {
  return donut.A == keuze;
  }

  willekeurig(gekozenDonut.B);
  data1.innerHTML = gekozenDonut.B;
}

var aantal ;

function willekeurig(willekeurigEtenTemp) {
  var willekeurigLiedje = Math.floor(Math.random() * SpotifyTracks.length);
  var willekeurigSong = SpotifyTracks[willekeurigLiedje];
  aantal = willekeurigEtenTemp / willekeurigSong.VerbruikC;
  aantal = Math.ceil(aantal);
  data3.innerHTML = `Je moet op deze <strong>${aantal}</strong> liedjes dansen om je calorieën te verbranden.`;
  maakLijst();
}

function maakLijst(){
  data4.innerHTML = "";
  var Zoek = SpotifyTracks.find(ZoekFunctie);
  var randomTrack = SpotifyTracks.artist;

  for(var i = 0; i < aantal ; i++){
    var randomLied = SpotifyTracks[Math.floor(Math.random()*SpotifyTracks.length)];
    data4.innerHTML += `<a href="https://open.spotify.com/track/${randomLied.id}" target="_blank"><div class="song-wrapper"><p class="song-title">${randomLied.songtitle}</p> <p class="song-artist">${randomLied.artist}</p><p class="duration">${randomLied.duration}</p></div></a>`;
  }
}

function ZoekFunctie(data){
  return data.Zoek == aantal;
}

function zoekFunctie(data2) {
  return data2.danceability2 == danceability;
}

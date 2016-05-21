<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title></title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.15.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.15.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
    </style>
</head>
<body>

<div id='map'></div>
<script>
var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFybWxhbmQiLCJhIjoiY2lscHk0cHRlMDhrcHRya244bDI3Mjg0OCJ9.Na_WX8j6qqdeNI5dqfi_gA';
var map = farmland({
    container: 'map',
    zoom: 9,
    center: [137.9150899566626, 36.25956997955441],
    style: 'mapbox://styles/mapbox/satellite-v8',
    hash: false
});
</script>

</body>
</html>

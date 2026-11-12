var wms_layers = [];

var format_h5modeledge04046400010copy_0 = new ol.format.GeoJSON();
var features_h5modeledge04046400010copy_0 = format_h5modeledge04046400010copy_0.readFeatures(json_h5modeledge04046400010copy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_h5modeledge04046400010copy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_h5modeledge04046400010copy_0.addFeatures(features_h5modeledge04046400010copy_0);
var lyr_h5modeledge04046400010copy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_h5modeledge04046400010copy_0, 
                style: style_h5modeledge04046400010copy_0,
                popuplayertitle: 'h5-model — edge=04-046.4-0001.0 copy',
                interactive: false,
    title: 'h5-model — edge=04-046.4-0001.0 copy<br />\
    <img src="styles/legend/h5modeledge04046400010copy_0_0.png" /> length<br />\
    <img src="styles/legend/h5modeledge04046400010copy_0_1.png" /> length<br />\
    <img src="styles/legend/h5modeledge04046400010copy_0_2.png" /> <br />' });

lyr_h5modeledge04046400010copy_0.setVisible(true);
var layersList = [lyr_h5modeledge04046400010copy_0];
lyr_h5modeledge04046400010copy_0.set('fieldAliases', {'fid': 'fid', 'length': 'length', 'source': 'source', 'target': 'target', 'p1': 'p1', 'p2': 'p2', 'weight': 'weight', 'scale': 'scale', });
lyr_h5modeledge04046400010copy_0.set('fieldImages', {'fid': 'TextEdit', 'length': 'TextEdit', 'source': 'TextEdit', 'target': 'TextEdit', 'p1': 'TextEdit', 'p2': 'TextEdit', 'weight': 'TextEdit', 'scale': 'TextEdit', });
lyr_h5modeledge04046400010copy_0.set('fieldLabels', {'fid': 'no label', 'length': 'no label', 'source': 'no label', 'target': 'no label', 'p1': 'no label', 'p2': 'no label', 'weight': 'no label', 'scale': 'no label', });
lyr_h5modeledge04046400010copy_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
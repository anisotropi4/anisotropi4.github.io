ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([259654.296630, 262793.273657, 596395.808778, 578160.773657]);
var wms_layers = [];

var format_2024_0 = new ol.format.GeoJSON();
var features_2024_0 = format_2024_0.readFeatures(json_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_0.addFeatures(features_2024_0);
var lyr_2024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_0, 
                style: style_2024_0,
                popuplayertitle: '2024',
                interactive: true,
                title: '<img src="styles/legend/2024_0.png" /> 2024'
            });
var format_2023_1 = new ol.format.GeoJSON();
var features_2023_1 = format_2023_1.readFeatures(json_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_1.addFeatures(features_2023_1);
var lyr_2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_1, 
                style: style_2023_1,
                popuplayertitle: '2023',
                interactive: true,
                title: '<img src="styles/legend/2023_1.png" /> 2023'
            });
var format_2022_2 = new ol.format.GeoJSON();
var features_2022_2 = format_2022_2.readFeatures(json_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_2.addFeatures(features_2022_2);
var lyr_2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_2, 
                style: style_2022_2,
                popuplayertitle: '2022',
                interactive: true,
                title: '<img src="styles/legend/2022_2.png" /> 2022'
            });

lyr_2024_0.setVisible(true);lyr_2023_1.setVisible(true);lyr_2022_2.setVisible(true);
var layersList = [lyr_2024_0,lyr_2023_1,lyr_2022_2];
lyr_2024_0.set('fieldAliases', {'fid': 'fid', 'road': 'road', 'bicycle': 'bicycle', 'motorbike': 'motorbike', 'car': 'car', 'bus': 'bus', 'LGV': 'LGV', 'hgv': 'hgv', });
lyr_2023_1.set('fieldAliases', {'fid': 'fid', 'road': 'road', 'bicycle': 'bicycle', 'motorbike': 'motorbike', 'car': 'car', 'bus': 'bus', 'LGV': 'LGV', 'hgv': 'hgv', });
lyr_2022_2.set('fieldAliases', {'fid': 'fid', 'road': 'road', 'bicycle': 'bicycle', 'motorbike': 'motorbike', 'car': 'car', 'bus': 'bus', 'LGV': 'LGV', 'hgv': 'hgv', });
lyr_2024_0.set('fieldImages', {'fid': 'TextEdit', 'road': 'TextEdit', 'bicycle': 'TextEdit', 'motorbike': 'TextEdit', 'car': 'TextEdit', 'bus': 'TextEdit', 'LGV': 'TextEdit', 'hgv': 'TextEdit', });
lyr_2023_1.set('fieldImages', {'fid': 'TextEdit', 'road': 'TextEdit', 'bicycle': 'TextEdit', 'motorbike': 'TextEdit', 'car': 'TextEdit', 'bus': 'TextEdit', 'LGV': 'TextEdit', 'hgv': 'TextEdit', });
lyr_2022_2.set('fieldImages', {'fid': 'TextEdit', 'road': 'TextEdit', 'bicycle': 'TextEdit', 'motorbike': 'TextEdit', 'car': 'TextEdit', 'bus': 'TextEdit', 'LGV': 'TextEdit', 'hgv': 'TextEdit', });
lyr_2024_0.set('fieldLabels', {'fid': 'hidden field', 'road': 'hidden field', 'bicycle': 'inline label - visible with data', 'motorbike': 'inline label - visible with data', 'car': 'inline label - visible with data', 'bus': 'inline label - visible with data', 'LGV': 'inline label - visible with data', 'hgv': 'inline label - visible with data', });
lyr_2023_1.set('fieldLabels', {'fid': 'hidden field', 'road': 'hidden field', 'bicycle': 'inline label - visible with data', 'motorbike': 'inline label - visible with data', 'car': 'inline label - visible with data', 'bus': 'inline label - visible with data', 'LGV': 'inline label - visible with data', 'hgv': 'inline label - visible with data', });
lyr_2022_2.set('fieldLabels', {'fid': 'hidden field', 'road': 'inline label - always visible', 'bicycle': 'inline label - visible with data', 'motorbike': 'inline label - visible with data', 'car': 'inline label - visible with data', 'bus': 'inline label - visible with data', 'LGV': 'inline label - visible with data', 'hgv': 'inline label - visible with data', });
lyr_2022_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMIN_LOANO_1 = new ol.format.GeoJSON();
var features_ADMIN_LOANO_1 = format_ADMIN_LOANO_1.readFeatures(json_ADMIN_LOANO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMIN_LOANO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMIN_LOANO_1.addFeatures(features_ADMIN_LOANO_1);
var lyr_ADMIN_LOANO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMIN_LOANO_1, 
                style: style_ADMIN_LOANO_1,
                interactive: true,
                title: '<img src="styles/legend/ADMIN_LOANO_1.png" /> ADMIN_LOANO'
            });
var format_kemejing_2 = new ol.format.GeoJSON();
var features_kemejing_2 = format_kemejing_2.readFeatures(json_kemejing_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kemejing_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kemejing_2.addFeatures(features_kemejing_2);
var lyr_kemejing_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kemejing_2, 
                style: style_kemejing_2,
                interactive: true,
                title: '<img src="styles/legend/kemejing_2.png" /> kemejing'
            });
var format_bangunan_kemejing_3 = new ol.format.GeoJSON();
var features_bangunan_kemejing_3 = format_bangunan_kemejing_3.readFeatures(json_bangunan_kemejing_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_kemejing_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_kemejing_3.addFeatures(features_bangunan_kemejing_3);
var lyr_bangunan_kemejing_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunan_kemejing_3, 
                style: style_bangunan_kemejing_3,
                interactive: true,
                title: '<img src="styles/legend/bangunan_kemejing_3.png" /> bangunan_kemejing'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMIN_LOANO_1.setVisible(true);lyr_kemejing_2.setVisible(true);lyr_bangunan_kemejing_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMIN_LOANO_1,lyr_kemejing_2,lyr_bangunan_kemejing_3];
lyr_ADMIN_LOANO_1.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', });
lyr_kemejing_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_bangunan_kemejing_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Jenis_Bang': 'Jenis_Bang', 'Luas_m2': 'Luas_m2', 'Shape_Leng': 'Shape_Leng', 'harga_laha': 'harga_laha', });
lyr_ADMIN_LOANO_1.set('fieldImages', {'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_kemejing_2.set('fieldImages', {'OBJECTID': '', 'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_bangunan_kemejing_3.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'DESA': '', 'SUMBER': '', 'Tema': '', 'Jenis': '', 'Jenis_Bang': '', 'Luas_m2': '', 'Shape_Leng': '', 'harga_laha': '', });
lyr_ADMIN_LOANO_1.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', });
lyr_kemejing_2.set('fieldLabels', {'OBJECTID': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_bangunan_kemejing_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Tema': 'no label', 'Jenis': 'no label', 'Jenis_Bang': 'no label', 'Luas_m2': 'no label', 'Shape_Leng': 'no label', 'harga_laha': 'no label', });
lyr_bangunan_kemejing_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
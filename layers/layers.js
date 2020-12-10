var wms_layers = [];

var format_Signal_Vorsignale_0 = new ol.format.GeoJSON();
var features_Signal_Vorsignale_0 = format_Signal_Vorsignale_0.readFeatures(json_Signal_Vorsignale_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_Vorsignale_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_Vorsignale_0.addFeatures(features_Signal_Vorsignale_0);
var lyr_Signal_Vorsignale_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_Vorsignale_0, 
                style: style_Signal_Vorsignale_0,
                interactive: true,
                title: '<img src="styles/legend/Signal_Vorsignale_0.png" /> Signal_Vorsignale'
            });
var format_Signal_TS_1 = new ol.format.GeoJSON();
var features_Signal_TS_1 = format_Signal_TS_1.readFeatures(json_Signal_TS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_TS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_TS_1.addFeatures(features_Signal_TS_1);
var lyr_Signal_TS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_TS_1, 
                style: style_Signal_TS_1,
                interactive: true,
                title: '<img src="styles/legend/Signal_TS_1.png" /> Signal_TS'
            });
var format_Signal_SH_2 = new ol.format.GeoJSON();
var features_Signal_SH_2 = format_Signal_SH_2.readFeatures(json_Signal_SH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_SH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_SH_2.addFeatures(features_Signal_SH_2);
var lyr_Signal_SH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_SH_2, 
                style: style_Signal_SH_2,
                interactive: true,
                title: '<img src="styles/legend/Signal_SH_2.png" /> Signal_SH'
            });
var format_Signal_RA12_3 = new ol.format.GeoJSON();
var features_Signal_RA12_3 = format_Signal_RA12_3.readFeatures(json_Signal_RA12_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_RA12_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_RA12_3.addFeatures(features_Signal_RA12_3);
var lyr_Signal_RA12_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_RA12_3, 
                style: style_Signal_RA12_3,
                interactive: true,
                title: '<img src="styles/legend/Signal_RA12_3.png" /> Signal_RA12'
            });
var format_Signal_RA_4 = new ol.format.GeoJSON();
var features_Signal_RA_4 = format_Signal_RA_4.readFeatures(json_Signal_RA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_RA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_RA_4.addFeatures(features_Signal_RA_4);
var lyr_Signal_RA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_RA_4, 
                style: style_Signal_RA_4,
                interactive: true,
                title: '<img src="styles/legend/Signal_RA_4.png" /> Signal_RA'
            });
var format_Signal_NE_5 = new ol.format.GeoJSON();
var features_Signal_NE_5 = format_Signal_NE_5.readFeatures(json_Signal_NE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_NE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_NE_5.addFeatures(features_Signal_NE_5);
var lyr_Signal_NE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_NE_5, 
                style: style_Signal_NE_5,
                interactive: true,
                title: '<img src="styles/legend/Signal_NE_5.png" /> Signal_NE'
            });
var format_Signal_LF_6 = new ol.format.GeoJSON();
var features_Signal_LF_6 = format_Signal_LF_6.readFeatures(json_Signal_LF_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_LF_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_LF_6.addFeatures(features_Signal_LF_6);
var lyr_Signal_LF_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_LF_6, 
                style: style_Signal_LF_6,
                interactive: true,
                title: '<img src="styles/legend/Signal_LF_6.png" /> Signal_LF'
            });
var format_Signal_Hauptsignale_7 = new ol.format.GeoJSON();
var features_Signal_Hauptsignale_7 = format_Signal_Hauptsignale_7.readFeatures(json_Signal_Hauptsignale_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_Hauptsignale_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_Hauptsignale_7.addFeatures(features_Signal_Hauptsignale_7);
var lyr_Signal_Hauptsignale_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_Hauptsignale_7, 
                style: style_Signal_Hauptsignale_7,
                interactive: true,
                title: '<img src="styles/legend/Signal_Hauptsignale_7.png" /> Signal_Hauptsignale'
            });
var format_Signal_BUE_8 = new ol.format.GeoJSON();
var features_Signal_BUE_8 = format_Signal_BUE_8.readFeatures(json_Signal_BUE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signal_BUE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signal_BUE_8.addFeatures(features_Signal_BUE_8);
var lyr_Signal_BUE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signal_BUE_8, 
                style: style_Signal_BUE_8,
                interactive: true,
                title: '<img src="styles/legend/Signal_BUE_8.png" /> Signal_BUE'
            });
var format_Oberleitungsmasten_9 = new ol.format.GeoJSON();
var features_Oberleitungsmasten_9 = format_Oberleitungsmasten_9.readFeatures(json_Oberleitungsmasten_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oberleitungsmasten_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oberleitungsmasten_9.addFeatures(features_Oberleitungsmasten_9);
var lyr_Oberleitungsmasten_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oberleitungsmasten_9, 
                style: style_Oberleitungsmasten_9,
                interactive: true,
                title: '<img src="styles/legend/Oberleitungsmasten_9.png" /> Oberleitungsmasten'
            });
var format_Gleisknoten_10 = new ol.format.GeoJSON();
var features_Gleisknoten_10 = format_Gleisknoten_10.readFeatures(json_Gleisknoten_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gleisknoten_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gleisknoten_10.addFeatures(features_Gleisknoten_10);
var lyr_Gleisknoten_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gleisknoten_10, 
                style: style_Gleisknoten_10,
                interactive: true,
                title: '<img src="styles/legend/Gleisknoten_10.png" /> Gleisknoten'
            });
var format_Gleis_Strecke_Abschnitt_Ueberhoehung_11 = new ol.format.GeoJSON();
var features_Gleis_Strecke_Abschnitt_Ueberhoehung_11 = format_Gleis_Strecke_Abschnitt_Ueberhoehung_11.readFeatures(json_Gleis_Strecke_Abschnitt_Ueberhoehung_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gleis_Strecke_Abschnitt_Ueberhoehung_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gleis_Strecke_Abschnitt_Ueberhoehung_11.addFeatures(features_Gleis_Strecke_Abschnitt_Ueberhoehung_11);
var lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gleis_Strecke_Abschnitt_Ueberhoehung_11, 
                style: style_Gleis_Strecke_Abschnitt_Ueberhoehung_11,
                interactive: true,
                title: '<img src="styles/legend/Gleis_Strecke_Abschnitt_Ueberhoehung_11.png" /> Gleis_Strecke_Abschnitt_Ueberhoehung'
            });
var format_Gleis_Strecke_Abschnitt_Lage_12 = new ol.format.GeoJSON();
var features_Gleis_Strecke_Abschnitt_Lage_12 = format_Gleis_Strecke_Abschnitt_Lage_12.readFeatures(json_Gleis_Strecke_Abschnitt_Lage_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gleis_Strecke_Abschnitt_Lage_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gleis_Strecke_Abschnitt_Lage_12.addFeatures(features_Gleis_Strecke_Abschnitt_Lage_12);
var lyr_Gleis_Strecke_Abschnitt_Lage_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gleis_Strecke_Abschnitt_Lage_12, 
                style: style_Gleis_Strecke_Abschnitt_Lage_12,
                interactive: true,
                title: '<img src="styles/legend/Gleis_Strecke_Abschnitt_Lage_12.png" /> Gleis_Strecke_Abschnitt_Lage'
            });
var format_Gleis_Strecke_Abschnitt_Hoehe_13 = new ol.format.GeoJSON();
var features_Gleis_Strecke_Abschnitt_Hoehe_13 = format_Gleis_Strecke_Abschnitt_Hoehe_13.readFeatures(json_Gleis_Strecke_Abschnitt_Hoehe_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gleis_Strecke_Abschnitt_Hoehe_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gleis_Strecke_Abschnitt_Hoehe_13.addFeatures(features_Gleis_Strecke_Abschnitt_Hoehe_13);
var lyr_Gleis_Strecke_Abschnitt_Hoehe_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gleis_Strecke_Abschnitt_Hoehe_13, 
                style: style_Gleis_Strecke_Abschnitt_Hoehe_13,
                interactive: true,
                title: '<img src="styles/legend/Gleis_Strecke_Abschnitt_Hoehe_13.png" /> Gleis_Strecke_Abschnitt_Hoehe'
            });
var format_Entwurfselement_Ueberhoehung_14 = new ol.format.GeoJSON();
var features_Entwurfselement_Ueberhoehung_14 = format_Entwurfselement_Ueberhoehung_14.readFeatures(json_Entwurfselement_Ueberhoehung_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entwurfselement_Ueberhoehung_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entwurfselement_Ueberhoehung_14.addFeatures(features_Entwurfselement_Ueberhoehung_14);
var lyr_Entwurfselement_Ueberhoehung_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entwurfselement_Ueberhoehung_14, 
                style: style_Entwurfselement_Ueberhoehung_14,
                interactive: true,
                title: '<img src="styles/legend/Entwurfselement_Ueberhoehung_14.png" /> Entwurfselement_Ueberhoehung'
            });
var format_Entwurfselement_Lage_15 = new ol.format.GeoJSON();
var features_Entwurfselement_Lage_15 = format_Entwurfselement_Lage_15.readFeatures(json_Entwurfselement_Lage_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entwurfselement_Lage_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entwurfselement_Lage_15.addFeatures(features_Entwurfselement_Lage_15);
var lyr_Entwurfselement_Lage_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entwurfselement_Lage_15, 
                style: style_Entwurfselement_Lage_15,
                interactive: true,
                title: '<img src="styles/legend/Entwurfselement_Lage_15.png" /> Entwurfselement_Lage'
            });
var format_Entwurfselement_Hoehe_16 = new ol.format.GeoJSON();
var features_Entwurfselement_Hoehe_16 = format_Entwurfselement_Hoehe_16.readFeatures(json_Entwurfselement_Hoehe_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entwurfselement_Hoehe_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entwurfselement_Hoehe_16.addFeatures(features_Entwurfselement_Hoehe_16);
var lyr_Entwurfselement_Hoehe_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entwurfselement_Hoehe_16, 
                style: style_Entwurfselement_Hoehe_16,
                interactive: true,
                title: '<img src="styles/legend/Entwurfselement_Hoehe_16.png" /> Entwurfselement_Hoehe'
            });

lyr_Signal_Vorsignale_0.setVisible(true);lyr_Signal_TS_1.setVisible(true);lyr_Signal_SH_2.setVisible(true);lyr_Signal_RA12_3.setVisible(true);lyr_Signal_RA_4.setVisible(true);lyr_Signal_NE_5.setVisible(true);lyr_Signal_LF_6.setVisible(true);lyr_Signal_Hauptsignale_7.setVisible(true);lyr_Signal_BUE_8.setVisible(true);lyr_Oberleitungsmasten_9.setVisible(true);lyr_Gleisknoten_10.setVisible(true);lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_11.setVisible(true);lyr_Gleis_Strecke_Abschnitt_Lage_12.setVisible(true);lyr_Gleis_Strecke_Abschnitt_Hoehe_13.setVisible(true);lyr_Entwurfselement_Ueberhoehung_14.setVisible(true);lyr_Entwurfselement_Lage_15.setVisible(true);lyr_Entwurfselement_Hoehe_16.setVisible(true);
var layersList = [lyr_Signal_Vorsignale_0,lyr_Signal_TS_1,lyr_Signal_SH_2,lyr_Signal_RA12_3,lyr_Signal_RA_4,lyr_Signal_NE_5,lyr_Signal_LF_6,lyr_Signal_Hauptsignale_7,lyr_Signal_BUE_8,lyr_Oberleitungsmasten_9,lyr_Gleisknoten_10,lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_11,lyr_Gleis_Strecke_Abschnitt_Lage_12,lyr_Gleis_Strecke_Abschnitt_Hoehe_13,lyr_Entwurfselement_Ueberhoehung_14,lyr_Entwurfselement_Lage_15,lyr_Entwurfselement_Hoehe_16];
lyr_Signal_Vorsignale_0.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_TS_1.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_SH_2.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_RA12_3.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_RA_4.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_NE_5.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_LF_6.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_Hauptsignale_7.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Signal_BUE_8.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'STW_BZ': 'STW_BZ', 'BEZEICH': 'BEZEICH', 'ART': 'ART', 'ART_L': 'ART_L', 'TECHN_P': 'TECHN_P', 'HOEHE': 'HOEHE', 'GESCHW': 'GESCHW', 'SIGS_HOEHE': 'SIGS_HOEHE', 'RS_ID': 'RS_ID', 'BUE_ID': 'BUE_ID', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'BAHNEIG': 'BAHNEIG', 'BAHNEIG_L': 'BAHNEIG_L', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Oberleitungsmasten_9.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'BEZEICH': 'BEZEICH', 'BAUART': 'BAUART', 'BAUART_L': 'BAUART_L', 'MATERIAL': 'MATERIAL', 'MATERIAL_L': 'MATERIAL_L', 'TECHN_P': 'TECHN_P', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'AUSPRAEG': 'AUSPRAEG', 'AUSPRAEG_L': 'AUSPRAEG_L', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'ABSTAND': 'ABSTAND', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Gleisknoten_10.set('fieldAliases', {'ID': 'ID', 'KNOTENNAME': 'KNOTENNAME', 'STW_BEZIRK': 'STW_BEZIRK', 'OBJEKTNAME': 'OBJEKTNAME', 'OBJEKTKENN': 'OBJEKTKENN', 'KNOTENBESC': 'KNOTENBESC', 'FREMDBEZ': 'FREMDBEZ', 'GKN_ID_ANK': 'GKN_ID_ANK', 'KNOTENNA_1': 'KNOTENNA_1', 'GKN_ID_AB1': 'GKN_ID_AB1', 'KNOTENNA_2': 'KNOTENNA_2', 'GKN_ID_AB2': 'GKN_ID_AB2', 'KNOTENNA_3': 'KNOTENNA_3', 'GKN_ID_AB3': 'GKN_ID_AB3', 'KNOTENNA_4': 'KNOTENNA_4', 'WA_ID': 'WA_ID', 'WA_NUMMER': 'WA_NUMMER', 'WA_RL100': 'WA_RL100', 'WA_DBDSTNA': 'WA_DBDSTNA', 'WA_TECHN_P': 'WA_TECHN_P', 'WA_BEZEICH': 'WA_BEZEICH', 'PKT_ADRESS': 'PKT_ADRESS', 'TYP': 'TYP', 'TYP_L': 'TYP_L', 'TECHN_PLAT': 'TECHN_PLAT', 'AUFN_GENAU': 'AUFN_GENAU', 'DBDSTNAME': 'DBDSTNAME', 'RL100': 'RL100', 'NETZ_ID': 'NETZ_ID', 'STELLENNUM': 'STELLENNUM', 'ERSTERFASS': 'ERSTERFASS', 'ERSTERF_DA': 'ERSTERF_DA', 'BEARBEITER': 'BEARBEITER', 'BEARB_DATU': 'BEARB_DATU', 'PROGRAMM': 'PROGRAMM', 'AUFTRAG': 'AUFTRAG', 'KOMMENTAR': 'KOMMENTAR', 'AUSPRAEGUN': 'AUSPRAEGUN', 'AUSPRAEG_1': 'AUSPRAEG_1', 'DATENQUELL': 'DATENQUELL', 'DATENQUE_1': 'DATENQUE_1', 'STATUS': 'STATUS', 'STATUS_L': 'STATUS_L', 'MIG_ID': 'MIG_ID', 'GIS_SEGMEN': 'GIS_SEGMEN', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENNU': 'STRECKENNU', 'STRECKENKU': 'STRECKENKU', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILDUNG': 'ABBILDUNG', 'ABBILDUNG_': 'ABBILDUNG_', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM': 'KM', 'KM_TEXT': 'KM_TEXT', 'KM_KM': 'KM_KM', 'KM_M': 'KM_M', });
lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_11.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'AUFN_GENAU': 'AUFN_GENAU', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'EELU_MIGID': 'EELU_MIGID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'GKA_ID': 'GKA_ID', 'GKA_MIGID': 'GKA_MIGID', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'KM_A': 'KM_A', 'KM_A_TEXT': 'KM_A_TEXT', 'KM_A_KM': 'KM_A_KM', 'KM_A_M': 'KM_A_M', 'KM_E': 'KM_E', 'KM_E_TEXT': 'KM_E_TEXT', 'KM_E_KM': 'KM_E_KM', 'KM_E_M': 'KM_E_M', 'STAT_A': 'STAT_A', 'STAT_E': 'STAT_E', });
lyr_Gleis_Strecke_Abschnitt_Lage_12.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'AUFN_GENAU': 'AUFN_GENAU', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'EELL_MIGID': 'EELL_MIGID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'KM_A': 'KM_A', 'KM_A_TEXT': 'KM_A_TEXT', 'KM_A_KM': 'KM_A_KM', 'KM_A_M': 'KM_A_M', 'KM_E': 'KM_E', 'KM_E_TEXT': 'KM_E_TEXT', 'KM_E_KM': 'KM_E_KM', 'KM_E_M': 'KM_E_M', 'GKA_ID': 'GKA_ID', 'GKA_MIGID': 'GKA_MIGID', });
lyr_Gleis_Strecke_Abschnitt_Hoehe_13.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'AUFN_GENAU': 'AUFN_GENAU', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'EELH_MIGID': 'EELH_MIGID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'GKA_ID': 'GKA_ID', 'GKA_MIGID': 'GKA_MIGID', 'HOEHE_A': 'HOEHE_A', 'HOEHE_E': 'HOEHE_E', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'KM_A': 'KM_A', 'KM_A_TEXT': 'KM_A_TEXT', 'KM_A_KM': 'KM_A_KM', 'KM_A_M': 'KM_A_M', 'KM_E': 'KM_E', 'KM_E_TEXT': 'KM_E_TEXT', 'KM_E_KM': 'KM_E_KM', 'KM_E_M': 'KM_E_M', 'STAT_A': 'STAT_A', 'STAT_E': 'STAT_E', });
lyr_Entwurfselement_Ueberhoehung_14.set('fieldAliases', {'primaryind': 'primaryind', 'ID': 'ID', 'PAD_A': 'PAD_A', 'PAD_E': 'PAD_E', 'ELTYP': 'ELTYP', 'ELTYP_L': 'ELTYP_L', 'PARAM1': 'PARAM1', 'PARAM2': 'PARAM2', 'PARAM3': 'PARAM3', 'PARAM4': 'PARAM4', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKKN': 'STRECKKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM_A': 'KM_A', 'KM_A_TEXT': 'KM_A_TEXT', 'KM_A_KM': 'KM_A_KM', 'KM_A_M': 'KM_A_M', 'KM_E': 'KM_E', 'KM_E_TEXT': 'KM_E_TEXT', 'KM_E_KM': 'KM_E_KM', 'KM_E_M': 'KM_E_M', 'LAGERICHT': 'LAGERICHT', 'PD': 'PD', 'PLANADRES': 'PLANADRES', 'NL': 'NL', });
lyr_Entwurfselement_Lage_15.set('fieldAliases', {'height': 'height', });
lyr_Entwurfselement_Hoehe_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'primaryind': 'primaryind', 'ID': 'ID', 'PAD_A': 'PAD_A', 'PAD_E': 'PAD_E', 'ELTYP': 'ELTYP', 'ELTYP_L': 'ELTYP_L', 'PARAM1': 'PARAM1', 'PARAM2': 'PARAM2', 'PARAM3': 'PARAM3', 'PARAM4': 'PARAM4', 'HSYS': 'HSYS', 'HSYS_1': 'HSYS_1', 'HSYS_1_L': 'HSYS_1_L', 'HSYS_23': 'HSYS_23', 'HSYS_23_L': 'HSYS_23_L', 'AUFN_GENAU': 'AUFN_GENAU', 'U_EBENE': 'U_EBENE', 'QUELLE': 'QUELLE', 'QUELLE_L': 'QUELLE_L', 'MIG_ID': 'MIG_ID', 'GIS_SEG': 'GIS_SEG', 'MIG_DATUM': 'MIG_DATUM', 'STRECKENR': 'STRECKENR', 'STRECKEKN': 'STRECKEKN', 'RIKZ': 'RIKZ', 'RIKZ_L': 'RIKZ_L', 'ABBILD': 'ABBILD', 'ABBILD_L': 'ABBILD_L', 'F_RIKZ': 'F_RIKZ', 'F_RIKZ_L': 'F_RIKZ_L', 'KM_A': 'KM_A', 'KM_A_TEXT': 'KM_A_TEXT', 'KM_A_KM': 'KM_A_KM', 'KM_A_M': 'KM_A_M', 'KM_E': 'KM_E', 'KM_E_TEXT': 'KM_E_TEXT', 'KM_E_KM': 'KM_E_KM', 'KM_E_M': 'KM_E_M', 'HOEHE_A': 'HOEHE_A', 'HOEHE_E': 'HOEHE_E', 'HOEHE_A_R': 'HOEHE_A_R', });
lyr_Signal_Vorsignale_0.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_TS_1.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_SH_2.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_RA12_3.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_RA_4.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_NE_5.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_LF_6.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_Hauptsignale_7.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Signal_BUE_8.set('fieldImages', {'primaryind': '', 'ID': '', 'STW_BZ': '', 'BEZEICH': '', 'ART': '', 'ART_L': '', 'TECHN_P': '', 'HOEHE': '', 'GESCHW': '', 'SIGS_HOEHE': '', 'RS_ID': '', 'BUE_ID': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'BAHNEIG': '', 'BAHNEIG_L': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Oberleitungsmasten_9.set('fieldImages', {'primaryind': '', 'ID': '', 'BEZEICH': '', 'BAUART': '', 'BAUART_L': '', 'MATERIAL': '', 'MATERIAL_L': '', 'TECHN_P': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'AUSPRAEG': '', 'AUSPRAEG_L': '', 'QUELLE': '', 'QUELLE_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'ABSTAND': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Gleisknoten_10.set('fieldImages', {'ID': '', 'KNOTENNAME': '', 'STW_BEZIRK': '', 'OBJEKTNAME': '', 'OBJEKTKENN': '', 'KNOTENBESC': '', 'FREMDBEZ': '', 'GKN_ID_ANK': '', 'KNOTENNA_1': '', 'GKN_ID_AB1': '', 'KNOTENNA_2': '', 'GKN_ID_AB2': '', 'KNOTENNA_3': '', 'GKN_ID_AB3': '', 'KNOTENNA_4': '', 'WA_ID': '', 'WA_NUMMER': '', 'WA_RL100': '', 'WA_DBDSTNA': '', 'WA_TECHN_P': '', 'WA_BEZEICH': '', 'PKT_ADRESS': '', 'TYP': '', 'TYP_L': '', 'TECHN_PLAT': '', 'AUFN_GENAU': '', 'DBDSTNAME': '', 'RL100': '', 'NETZ_ID': '', 'STELLENNUM': '', 'ERSTERFASS': '', 'ERSTERF_DA': '', 'BEARBEITER': '', 'BEARB_DATU': '', 'PROGRAMM': '', 'AUFTRAG': '', 'KOMMENTAR': '', 'AUSPRAEGUN': '', 'AUSPRAEG_1': '', 'DATENQUELL': '', 'DATENQUE_1': '', 'STATUS': '', 'STATUS_L': '', 'MIG_ID': '', 'GIS_SEGMEN': '', 'MIG_DATUM': '', 'STRECKENNU': '', 'STRECKENKU': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILDUNG': '', 'ABBILDUNG_': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM': '', 'KM_TEXT': '', 'KM_KM': '', 'KM_M': '', });
lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_11.set('fieldImages', {'primaryind': '', 'ID': '', 'AUFN_GENAU': '', 'QUELLE': '', 'QUELLE_L': '', 'EELU_MIGID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'GKA_ID': '', 'GKA_MIGID': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'KM_A': '', 'KM_A_TEXT': '', 'KM_A_KM': '', 'KM_A_M': '', 'KM_E': '', 'KM_E_TEXT': '', 'KM_E_KM': '', 'KM_E_M': '', 'STAT_A': '', 'STAT_E': '', });
lyr_Gleis_Strecke_Abschnitt_Lage_12.set('fieldImages', {'primaryind': '', 'ID': '', 'AUFN_GENAU': '', 'QUELLE': '', 'QUELLE_L': '', 'EELL_MIGID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'KM_A': '', 'KM_A_TEXT': '', 'KM_A_KM': '', 'KM_A_M': '', 'KM_E': '', 'KM_E_TEXT': '', 'KM_E_KM': '', 'KM_E_M': '', 'GKA_ID': '', 'GKA_MIGID': '', });
lyr_Gleis_Strecke_Abschnitt_Hoehe_13.set('fieldImages', {'primaryind': '', 'ID': '', 'AUFN_GENAU': '', 'QUELLE': '', 'QUELLE_L': '', 'EELH_MIGID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'GKA_ID': '', 'GKA_MIGID': '', 'HOEHE_A': '', 'HOEHE_E': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'KM_A': '', 'KM_A_TEXT': '', 'KM_A_KM': '', 'KM_A_M': '', 'KM_E': '', 'KM_E_TEXT': '', 'KM_E_KM': '', 'KM_E_M': '', 'STAT_A': '', 'STAT_E': '', });
lyr_Entwurfselement_Ueberhoehung_14.set('fieldImages', {'primaryind': '', 'ID': '', 'PAD_A': '', 'PAD_E': '', 'ELTYP': '', 'ELTYP_L': '', 'PARAM1': '', 'PARAM2': '', 'PARAM3': '', 'PARAM4': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'QUELLE': '', 'QUELLE_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM_A': '', 'KM_A_TEXT': '', 'KM_A_KM': '', 'KM_A_M': '', 'KM_E': '', 'KM_E_TEXT': '', 'KM_E_KM': '', 'KM_E_M': '', 'LAGERICHT': '', 'PD': '', 'PLANADRES': '', 'NL': '', });
lyr_Entwurfselement_Lage_15.set('fieldImages', {'height': '', });
lyr_Entwurfselement_Hoehe_16.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'primaryind': '', 'ID': '', 'PAD_A': '', 'PAD_E': '', 'ELTYP': '', 'ELTYP_L': '', 'PARAM1': '', 'PARAM2': '', 'PARAM3': '', 'PARAM4': '', 'HSYS': '', 'HSYS_1': '', 'HSYS_1_L': '', 'HSYS_23': '', 'HSYS_23_L': '', 'AUFN_GENAU': '', 'U_EBENE': '', 'QUELLE': '', 'QUELLE_L': '', 'MIG_ID': '', 'GIS_SEG': '', 'MIG_DATUM': '', 'STRECKENR': '', 'STRECKEKN': '', 'RIKZ': '', 'RIKZ_L': '', 'ABBILD': '', 'ABBILD_L': '', 'F_RIKZ': '', 'F_RIKZ_L': '', 'KM_A': '', 'KM_A_TEXT': '', 'KM_A_KM': '', 'KM_A_M': '', 'KM_E': '', 'KM_E_TEXT': '', 'KM_E_KM': '', 'KM_E_M': '', 'HOEHE_A': '', 'HOEHE_E': '', 'HOEHE_A_R': '', });
lyr_Signal_Vorsignale_0.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_TS_1.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_SH_2.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_RA12_3.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_RA_4.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_NE_5.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_LF_6.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_Hauptsignale_7.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Signal_BUE_8.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'STW_BZ': 'inline label', 'BEZEICH': 'inline label', 'ART': 'inline label', 'ART_L': 'inline label', 'TECHN_P': 'inline label', 'HOEHE': 'inline label', 'GESCHW': 'inline label', 'SIGS_HOEHE': 'inline label', 'RS_ID': 'inline label', 'BUE_ID': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'BAHNEIG': 'inline label', 'BAHNEIG_L': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Oberleitungsmasten_9.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'BEZEICH': 'inline label', 'BAUART': 'inline label', 'BAUART_L': 'inline label', 'MATERIAL': 'inline label', 'MATERIAL_L': 'inline label', 'TECHN_P': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'AUSPRAEG': 'inline label', 'AUSPRAEG_L': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'ABSTAND': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Gleisknoten_10.set('fieldLabels', {'ID': 'inline label', 'KNOTENNAME': 'inline label', 'STW_BEZIRK': 'inline label', 'OBJEKTNAME': 'inline label', 'OBJEKTKENN': 'inline label', 'KNOTENBESC': 'inline label', 'FREMDBEZ': 'inline label', 'GKN_ID_ANK': 'inline label', 'KNOTENNA_1': 'inline label', 'GKN_ID_AB1': 'inline label', 'KNOTENNA_2': 'inline label', 'GKN_ID_AB2': 'inline label', 'KNOTENNA_3': 'inline label', 'GKN_ID_AB3': 'inline label', 'KNOTENNA_4': 'inline label', 'WA_ID': 'inline label', 'WA_NUMMER': 'inline label', 'WA_RL100': 'inline label', 'WA_DBDSTNA': 'inline label', 'WA_TECHN_P': 'inline label', 'WA_BEZEICH': 'inline label', 'PKT_ADRESS': 'inline label', 'TYP': 'inline label', 'TYP_L': 'inline label', 'TECHN_PLAT': 'inline label', 'AUFN_GENAU': 'inline label', 'DBDSTNAME': 'inline label', 'RL100': 'inline label', 'NETZ_ID': 'inline label', 'STELLENNUM': 'inline label', 'ERSTERFASS': 'inline label', 'ERSTERF_DA': 'inline label', 'BEARBEITER': 'inline label', 'BEARB_DATU': 'inline label', 'PROGRAMM': 'inline label', 'AUFTRAG': 'inline label', 'KOMMENTAR': 'inline label', 'AUSPRAEGUN': 'inline label', 'AUSPRAEG_1': 'inline label', 'DATENQUELL': 'inline label', 'DATENQUE_1': 'inline label', 'STATUS': 'inline label', 'STATUS_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEGMEN': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENNU': 'inline label', 'STRECKENKU': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILDUNG': 'inline label', 'ABBILDUNG_': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM': 'inline label', 'KM_TEXT': 'inline label', 'KM_KM': 'inline label', 'KM_M': 'inline label', });
lyr_Gleis_Strecke_Abschnitt_Ueberhoehung_11.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'AUFN_GENAU': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'EELU_MIGID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'GKA_ID': 'inline label', 'GKA_MIGID': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'KM_A': 'inline label', 'KM_A_TEXT': 'inline label', 'KM_A_KM': 'inline label', 'KM_A_M': 'inline label', 'KM_E': 'inline label', 'KM_E_TEXT': 'inline label', 'KM_E_KM': 'inline label', 'KM_E_M': 'inline label', 'STAT_A': 'inline label', 'STAT_E': 'inline label', });
lyr_Gleis_Strecke_Abschnitt_Lage_12.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'AUFN_GENAU': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'EELL_MIGID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'KM_A': 'inline label', 'KM_A_TEXT': 'inline label', 'KM_A_KM': 'inline label', 'KM_A_M': 'inline label', 'KM_E': 'inline label', 'KM_E_TEXT': 'inline label', 'KM_E_KM': 'inline label', 'KM_E_M': 'inline label', 'GKA_ID': 'inline label', 'GKA_MIGID': 'inline label', });
lyr_Gleis_Strecke_Abschnitt_Hoehe_13.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'AUFN_GENAU': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'EELH_MIGID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'GKA_ID': 'inline label', 'GKA_MIGID': 'inline label', 'HOEHE_A': 'inline label', 'HOEHE_E': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'KM_A': 'inline label', 'KM_A_TEXT': 'inline label', 'KM_A_KM': 'inline label', 'KM_A_M': 'inline label', 'KM_E': 'inline label', 'KM_E_TEXT': 'inline label', 'KM_E_KM': 'inline label', 'KM_E_M': 'inline label', 'STAT_A': 'inline label', 'STAT_E': 'inline label', });
lyr_Entwurfselement_Ueberhoehung_14.set('fieldLabels', {'primaryind': 'inline label', 'ID': 'inline label', 'PAD_A': 'inline label', 'PAD_E': 'inline label', 'ELTYP': 'inline label', 'ELTYP_L': 'inline label', 'PARAM1': 'inline label', 'PARAM2': 'inline label', 'PARAM3': 'inline label', 'PARAM4': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM_A': 'inline label', 'KM_A_TEXT': 'inline label', 'KM_A_KM': 'inline label', 'KM_A_M': 'inline label', 'KM_E': 'inline label', 'KM_E_TEXT': 'inline label', 'KM_E_KM': 'inline label', 'KM_E_M': 'inline label', 'LAGERICHT': 'inline label', 'PD': 'inline label', 'PLANADRES': 'inline label', 'NL': 'inline label', });
lyr_Entwurfselement_Lage_15.set('fieldLabels', {'height': 'inline label', });
lyr_Entwurfselement_Hoehe_16.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', 'timestamp': 'inline label', 'begin': 'inline label', 'end': 'inline label', 'altitudeMode': 'inline label', 'tessellate': 'inline label', 'extrude': 'inline label', 'visibility': 'inline label', 'drawOrder': 'inline label', 'icon': 'inline label', 'primaryind': 'inline label', 'ID': 'inline label', 'PAD_A': 'inline label', 'PAD_E': 'inline label', 'ELTYP': 'inline label', 'ELTYP_L': 'inline label', 'PARAM1': 'inline label', 'PARAM2': 'inline label', 'PARAM3': 'inline label', 'PARAM4': 'inline label', 'HSYS': 'inline label', 'HSYS_1': 'inline label', 'HSYS_1_L': 'inline label', 'HSYS_23': 'inline label', 'HSYS_23_L': 'inline label', 'AUFN_GENAU': 'inline label', 'U_EBENE': 'inline label', 'QUELLE': 'inline label', 'QUELLE_L': 'inline label', 'MIG_ID': 'inline label', 'GIS_SEG': 'inline label', 'MIG_DATUM': 'inline label', 'STRECKENR': 'inline label', 'STRECKEKN': 'inline label', 'RIKZ': 'inline label', 'RIKZ_L': 'inline label', 'ABBILD': 'inline label', 'ABBILD_L': 'inline label', 'F_RIKZ': 'inline label', 'F_RIKZ_L': 'inline label', 'KM_A': 'inline label', 'KM_A_TEXT': 'inline label', 'KM_A_KM': 'inline label', 'KM_A_M': 'inline label', 'KM_E': 'inline label', 'KM_E_TEXT': 'inline label', 'KM_E_KM': 'inline label', 'KM_E_M': 'inline label', 'HOEHE_A': 'inline label', 'HOEHE_E': 'inline label', 'HOEHE_A_R': 'inline label', });
lyr_Entwurfselement_Hoehe_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
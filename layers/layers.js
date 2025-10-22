ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-77.073961, -33.751178, -28.847640, 5.269619]);
var wms_layers = [];

var format_temp1_0 = new ol.format.GeoJSON();
var features_temp1_0 = format_temp1_0.readFeatures(json_temp1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_temp1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp1_0.addFeatures(features_temp1_0);
var lyr_temp1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temp1_0, 
                style: style_temp1_0,
                popuplayertitle: 'temp1',
                interactive: true,
                title: '<img src="styles/legend/temp1_0.png" /> temp1'
            });
var format_moradias_geocodificado_1 = new ol.format.GeoJSON();
var features_moradias_geocodificado_1 = format_moradias_geocodificado_1.readFeatures(json_moradias_geocodificado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_moradias_geocodificado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moradias_geocodificado_1.addFeatures(features_moradias_geocodificado_1);
 lyr_moradias_geocodificado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moradias_geocodificado_1, 
                style: style_moradias_geocodificado_1,
                popuplayertitle: 'moradias_geocodificado',
                interactive: true,
                title: '<img src="styles/legend/moradias_geocodificado_1.png" /> moradias_geocodificado'
            });
var format_moradias_geocodificado_2 = new ol.format.GeoJSON();
var features_moradias_geocodificado_2 = format_moradias_geocodificado_2.readFeatures(json_moradias_geocodificado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_moradias_geocodificado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moradias_geocodificado_2.addFeatures(features_moradias_geocodificado_2);
lyr_moradias_geocodificado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moradias_geocodificado_2, 
                style: style_moradias_geocodificado_2,
                popuplayertitle: 'moradias_geocodificado',
                interactive: false,
                title: '<img src="styles/legend/moradias_geocodificado_2.png" /> moradias_geocodificado'
            });
var format_moradias_geocodificado_3 = new ol.format.GeoJSON();
var features_moradias_geocodificado_3 = format_moradias_geocodificado_3.readFeatures(json_moradias_geocodificado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_moradias_geocodificado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moradias_geocodificado_3.addFeatures(features_moradias_geocodificado_3);
lyr_moradias_geocodificado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moradias_geocodificado_3, 
                style: style_moradias_geocodificado_3,
                popuplayertitle: 'moradias_geocodificado',
                interactive: false,
                title: '<img src="styles/legend/moradias_geocodificado_3.png" /> moradias_geocodificado'
            });
var format_BRASIL_4 = new ol.format.GeoJSON();
var features_BRASIL_4 = format_BRASIL_4.readFeatures(json_BRASIL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BRASIL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRASIL_4.addFeatures(features_BRASIL_4);
lyr_BRASIL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRASIL_4, 
                style: style_BRASIL_4,
                popuplayertitle: 'BRASIL',
                interactive: true,
                title: '<img src="styles/legend/BRASIL_4.png" /> BRASIL'
            });
var format_ESTADO_5 = new ol.format.GeoJSON();
var features_ESTADO_5 = format_ESTADO_5.readFeatures(json_ESTADO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ESTADO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADO_5.addFeatures(features_ESTADO_5);
lyr_ESTADO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTADO_5, 
                style: style_ESTADO_5,
                popuplayertitle: 'ESTADO',
                interactive: true,
                title: '<img src="styles/legend/ESTADO_5.png" /> ESTADO'
            });
var format_MUNICIPIOS_6 = new ol.format.GeoJSON();
var features_MUNICIPIOS_6 = format_MUNICIPIOS_6.readFeatures(json_MUNICIPIOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MUNICIPIOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_6.addFeatures(features_MUNICIPIOS_6);
lyr_MUNICIPIOS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_6, 
                style: style_MUNICIPIOS_6,
                popuplayertitle: 'MUNICIPIOS',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_6.png" /> MUNICIPIOS'
            });
var format_BAIRROS_7 = new ol.format.GeoJSON();
var features_BAIRROS_7 = format_BAIRROS_7.readFeatures(json_BAIRROS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BAIRROS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_7.addFeatures(features_BAIRROS_7);
lyr_BAIRROS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_7, 
                style: style_BAIRROS_7,
                popuplayertitle: 'BAIRROS',
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_7.png" /> BAIRROS'
            });
var format_MUNICIPVIZINHOS_8 = new ol.format.GeoJSON();
var features_MUNICIPVIZINHOS_8 = format_MUNICIPVIZINHOS_8.readFeatures(json_MUNICIPVIZINHOS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MUNICIPVIZINHOS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPVIZINHOS_8.addFeatures(features_MUNICIPVIZINHOS_8);
lyr_MUNICIPVIZINHOS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPVIZINHOS_8, 
                style: style_MUNICIPVIZINHOS_8,
                popuplayertitle: 'MUNICIPVIZINHOS',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPVIZINHOS_8.png" /> MUNICIPVIZINHOS'
            });
var format_MOVIMENTODEMASSA_9 = new ol.format.GeoJSON();
var features_MOVIMENTODEMASSA_9 = format_MOVIMENTODEMASSA_9.readFeatures(json_MOVIMENTODEMASSA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MOVIMENTODEMASSA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOVIMENTODEMASSA_9.addFeatures(features_MOVIMENTODEMASSA_9);
lyr_MOVIMENTODEMASSA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MOVIMENTODEMASSA_9, 
                style: style_MOVIMENTODEMASSA_9,
                popuplayertitle: 'MOVIMENTODEMASSA',
                interactive: true,
                title: '<img src="styles/legend/MOVIMENTODEMASSA_9.png" /> MOVIMENTODEMASSA'
            });
var format_BACIAS_10 = new ol.format.GeoJSON();
var features_BACIAS_10 = format_BACIAS_10.readFeatures(json_BACIAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BACIAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACIAS_10.addFeatures(features_BACIAS_10);
lyr_BACIAS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BACIAS_10, 
                style: style_BACIAS_10,
                popuplayertitle: 'BACIAS',
                interactive: true,
                title: '<img src="styles/legend/BACIAS_10.png" /> BACIAS'
            });
var format_ENXURRADAS_11 = new ol.format.GeoJSON();
var features_ENXURRADAS_11 = format_ENXURRADAS_11.readFeatures(json_ENXURRADAS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ENXURRADAS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENXURRADAS_11.addFeatures(features_ENXURRADAS_11);
lyr_ENXURRADAS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENXURRADAS_11, 
                style: style_ENXURRADAS_11,
                popuplayertitle: 'ENXURRADAS',
                interactive: true,
                title: '<img src="styles/legend/ENXURRADAS_11.png" /> ENXURRADAS'
            });
var format_INUNDACAO_12 = new ol.format.GeoJSON();
var features_INUNDACAO_12 = format_INUNDACAO_12.readFeatures(json_INUNDACAO_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_INUNDACAO_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INUNDACAO_12.addFeatures(features_INUNDACAO_12);
lyr_INUNDACAO_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INUNDACAO_12, 
                style: style_INUNDACAO_12,
                popuplayertitle: 'INUNDACAO',
                interactive: true,
                title: '<img src="styles/legend/INUNDACAO_12.png" /> INUNDACAO'
            });
var format_CAPITAIS_13 = new ol.format.GeoJSON();
var features_CAPITAIS_13 = format_CAPITAIS_13.readFeatures(json_CAPITAIS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CAPITAIS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPITAIS_13.addFeatures(features_CAPITAIS_13);
lyr_CAPITAIS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPITAIS_13, 
                style: style_CAPITAIS_13,
                popuplayertitle: 'CAPITAIS',
                interactive: true,
                title: '<img src="styles/legend/CAPITAIS_13.png" /> CAPITAIS'
            });
var format_QGISPROJECT_14 = new ol.format.GeoJSON();
var features_QGISPROJECT_14 = format_QGISPROJECT_14.readFeatures(json_QGISPROJECT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_QGISPROJECT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QGISPROJECT_14.addFeatures(features_QGISPROJECT_14);
lyr_QGISPROJECT_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QGISPROJECT_14, 
                style: style_QGISPROJECT_14,
                popuplayertitle: 'QGISPROJECT',
                interactive: false,
                title: '<img src="styles/legend/QGISPROJECT_14.png" /> QGISPROJECT'
            });
var format_CAMADACOLAB_15 = new ol.format.GeoJSON();
var features_CAMADACOLAB_15 = format_CAMADACOLAB_15.readFeatures(json_CAMADACOLAB_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CAMADACOLAB_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAMADACOLAB_15.addFeatures(features_CAMADACOLAB_15);
lyr_CAMADACOLAB_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAMADACOLAB_15, 
                style: style_CAMADACOLAB_15,
                popuplayertitle: 'CAMADACOLAB',
                interactive: true,
                title: '<img src="styles/legend/CAMADACOLAB_15.png" /> CAMADACOLAB'
            });

lyr_temp1_0.setVisible(false);lyr_moradias_geocodificado_1.setVisible(false);lyr_moradias_geocodificado_2.setVisible(false);lyr_moradias_geocodificado_3.setVisible(false);lyr_BRASIL_4.setVisible(true);lyr_ESTADO_5.setVisible(true);lyr_MUNICIPIOS_6.setVisible(true);lyr_BAIRROS_7.setVisible(true);lyr_MUNICIPVIZINHOS_8.setVisible(true);lyr_MOVIMENTODEMASSA_9.setVisible(true);lyr_BACIAS_10.setVisible(true);lyr_ENXURRADAS_11.setVisible(true);lyr_INUNDACAO_12.setVisible(true);lyr_CAPITAIS_13.setVisible(true);lyr_QGISPROJECT_14.setVisible(false);lyr_CAMADACOLAB_15.setVisible(true);
var layersList = [lyr_temp1_0,lyr_moradias_geocodificado_1,lyr_moradias_geocodificado_2,lyr_moradias_geocodificado_3,lyr_BRASIL_4,lyr_ESTADO_5,lyr_MUNICIPIOS_6,lyr_BAIRROS_7,lyr_MUNICIPVIZINHOS_8,lyr_MOVIMENTODEMASSA_9,lyr_BACIAS_10,lyr_ENXURRADAS_11,lyr_INUNDACAO_12,lyr_CAPITAIS_13,lyr_QGISPROJECT_14,lyr_CAMADACOLAB_15];
lyr_temp1_0.set('fieldAliases', {});
lyr_moradias_geocodificado_1.set('fieldAliases', {});
lyr_moradias_geocodificado_2.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Logradouro': 'Logradouro', 'Número': 'Número', 'Bairro': 'Bairro', 'Cidade': 'Cidade', 'Estado': 'Estado', 'CEP': 'CEP', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_moradias_geocodificado_3.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Logradouro': 'Logradouro', 'Número': 'Número', 'Bairro': 'Bairro', 'Cidade': 'Cidade', 'Estado': 'Estado', 'CEP': 'CEP', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_BRASIL_4.set('fieldAliases', {'PAIS': 'PAIS', 'AREA_KM2': 'AREA_KM2', });
lyr_ESTADO_5.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_MUNICIPIOS_6.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_BAIRROS_7.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'codigo_ibg': 'codigo_ibg', 'area_m2': 'area_m2', 'area_km2': 'area_km2', });
lyr_MUNICIPVIZINHOS_8.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'area_km��': 'area_km��', 'rmf': 'rmf', 'gid': 'gid', 'mslink': 'mslink', 'cd_mun': 'cd_mun', 'nm_mun': 'nm_mun', 'cd_ibge200': 'cd_ibge200', 'cd_ibge201': 'cd_ibge201', 'lei': 'lei', 'dt_cadastr': 'dt_cadastr', 'dt_atualiz': 'dt_atualiz', 'nu_tmp': 'nu_tmp', 'nm_tmp': 'nm_tmp', 'label': 'label', 'xc': 'xc', 'yc': 'yc', 'area_ha': 'area_ha', });
lyr_MOVIMENTODEMASSA_9.set('fieldAliases', {'UF': 'UF', 'Municipio': 'Municipio', 'Classe': 'Classe', 'Processo': 'Processo', });
lyr_BACIAS_10.set('fieldAliases', {'BACIA': 'BACIA', });
lyr_ENXURRADAS_11.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'Area': 'Area', 'Range': 'Range', 'Processo': 'Processo', 'UF': 'UF', 'Municipio': 'Municipio', });
lyr_INUNDACAO_12.set('fieldAliases', {'UF': 'UF', 'Municipio': 'Municipio', 'Classe': 'Classe', 'Processo': 'Processo', });
lyr_CAPITAIS_13.set('fieldAliases', {'CPT_CD': 'CPT_CD', 'CPT_MUN_CD': 'CPT_MUN_CD', 'CPT_NM': 'CPT_NM', 'CPT_TP': 'CPT_TP', 'CPT_SG_UF': 'CPT_SG_UF', 'CPT_DS_PAI': 'CPT_DS_PAI', 'CPT_NU_IBG': 'CPT_NU_IBG', 'CPT_GM_PON': 'CPT_GM_PON', });
lyr_QGISPROJECT_14.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Logradouro': 'Logradouro', 'Número': 'Número', 'Bairro': 'Bairro', 'Cidade': 'Cidade', 'Estado': 'Estado', 'CEP': 'CEP', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_CAMADACOLAB_15.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Logradouro': 'Logradouro', 'Número': 'Número', 'Bairro': 'Bairro', 'Cidade': 'Cidade', 'Estado': 'Estado', 'CEP': 'CEP', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temp1_0.set('fieldImages', {});
lyr_moradias_geocodificado_1.set('fieldImages', {});
lyr_moradias_geocodificado_2.set('fieldImages', {'fid': '', 'Nome': '', 'Logradouro': '', 'Número': '', 'Bairro': '', 'Cidade': '', 'Estado': '', 'CEP': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', });
lyr_moradias_geocodificado_3.set('fieldImages', {'fid': '', 'Nome': '', 'Logradouro': '', 'Número': '', 'Bairro': '', 'Cidade': '', 'Estado': '', 'CEP': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', });
lyr_BRASIL_4.set('fieldImages', {'PAIS': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ESTADO_5.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_MUNICIPIOS_6.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_BAIRROS_7.set('fieldImages', {'id': 'Range', 'nome': 'TextEdit', 'codigo_ibg': 'TextEdit', 'area_m2': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_MUNICIPVIZINHOS_8.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'area_km��': 'TextEdit', 'rmf': 'TextEdit', 'gid': 'TextEdit', 'mslink': 'TextEdit', 'cd_mun': 'TextEdit', 'nm_mun': 'TextEdit', 'cd_ibge200': 'TextEdit', 'cd_ibge201': 'TextEdit', 'lei': 'TextEdit', 'dt_cadastr': 'DateTime', 'dt_atualiz': 'TextEdit', 'nu_tmp': 'TextEdit', 'nm_tmp': 'TextEdit', 'label': 'TextEdit', 'xc': 'TextEdit', 'yc': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_MOVIMENTODEMASSA_9.set('fieldImages', {'UF': 'TextEdit', 'Municipio': 'TextEdit', 'Classe': 'TextEdit', 'Processo': 'TextEdit', });
lyr_BACIAS_10.set('fieldImages', {'BACIA': 'TextEdit', });
lyr_ENXURRADAS_11.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Area': 'TextEdit', 'Range': 'TextEdit', 'Processo': 'TextEdit', 'UF': 'TextEdit', 'Municipio': 'TextEdit', });
lyr_INUNDACAO_12.set('fieldImages', {'UF': 'TextEdit', 'Municipio': 'TextEdit', 'Classe': 'TextEdit', 'Processo': 'TextEdit', });
lyr_CAPITAIS_13.set('fieldImages', {'CPT_CD': 'Range', 'CPT_MUN_CD': 'Range', 'CPT_NM': 'TextEdit', 'CPT_TP': 'TextEdit', 'CPT_SG_UF': 'TextEdit', 'CPT_DS_PAI': 'TextEdit', 'CPT_NU_IBG': 'TextEdit', 'CPT_GM_PON': 'TextEdit', });
lyr_QGISPROJECT_14.set('fieldImages', {'fid': '', 'Nome': '', 'Logradouro': '', 'Número': '', 'Bairro': '', 'Cidade': '', 'Estado': '', 'CEP': '', 'result_num': '', 'osm_id': '', 'display_name': '', 'category': '', 'type': '', 'latlong': '', });
lyr_CAMADACOLAB_15.set('fieldImages', {'fid': 'Range', 'Nome': 'TextEdit', 'Logradouro': 'TextEdit', 'Número': 'TextEdit', 'Bairro': 'TextEdit', 'Cidade': 'TextEdit', 'Estado': 'TextEdit', 'CEP': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_name': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_temp1_0.set('fieldLabels', {});
lyr_moradias_geocodificado_1.set('fieldLabels', {});
lyr_moradias_geocodificado_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nome': 'no label', 'Logradouro': 'no label', 'Número': 'no label', 'Bairro': 'no label', 'Cidade': 'no label', 'Estado': 'no label', 'CEP': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_moradias_geocodificado_3.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Logradouro': 'no label', 'Número': 'no label', 'Bairro': 'no label', 'Cidade': 'no label', 'Estado': 'no label', 'CEP': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_BRASIL_4.set('fieldLabels', {'PAIS': 'no label', 'AREA_KM2': 'no label', });
lyr_ESTADO_5.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'inline label - always visible', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', });
lyr_MUNICIPIOS_6.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_BAIRROS_7.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'codigo_ibg': 'no label', 'area_m2': 'no label', 'area_km2': 'no label', });
lyr_MUNICIPVIZINHOS_8.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'area_km��': 'no label', 'rmf': 'no label', 'gid': 'no label', 'mslink': 'no label', 'cd_mun': 'no label', 'nm_mun': 'no label', 'cd_ibge200': 'no label', 'cd_ibge201': 'no label', 'lei': 'no label', 'dt_cadastr': 'no label', 'dt_atualiz': 'no label', 'nu_tmp': 'no label', 'nm_tmp': 'no label', 'label': 'no label', 'xc': 'no label', 'yc': 'no label', 'area_ha': 'no label', });
lyr_MOVIMENTODEMASSA_9.set('fieldLabels', {'UF': 'no label', 'Municipio': 'no label', 'Classe': 'no label', 'Processo': 'no label', });
lyr_BACIAS_10.set('fieldLabels', {'BACIA': 'no label', });
lyr_ENXURRADAS_11.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', 'Area': 'no label', 'Range': 'no label', 'Processo': 'no label', 'UF': 'no label', 'Municipio': 'no label', });
lyr_INUNDACAO_12.set('fieldLabels', {'UF': 'no label', 'Municipio': 'no label', 'Classe': 'no label', 'Processo': 'no label', });
lyr_CAPITAIS_13.set('fieldLabels', {'CPT_CD': 'no label', 'CPT_MUN_CD': 'no label', 'CPT_NM': 'no label', 'CPT_TP': 'no label', 'CPT_SG_UF': 'no label', 'CPT_DS_PAI': 'no label', 'CPT_NU_IBG': 'no label', 'CPT_GM_PON': 'no label', });
lyr_QGISPROJECT_14.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Logradouro': 'no label', 'Número': 'no label', 'Bairro': 'no label', 'Cidade': 'no label', 'Estado': 'no label', 'CEP': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_CAMADACOLAB_15.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Logradouro': 'no label', 'Número': 'no label', 'Bairro': 'no label', 'Cidade': 'no label', 'Estado': 'no label', 'CEP': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'hidden field', 'latlong': 'no label', });
lyr_CAMADACOLAB_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
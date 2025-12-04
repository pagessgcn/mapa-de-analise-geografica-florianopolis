ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-77.073961, -33.751178, -28.847640, 5.269619]);
var wms_layers = [];

var format_BRASIL_0 = new ol.format.GeoJSON();
var features_BRASIL_0 = format_BRASIL_0.readFeatures(json_BRASIL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BRASIL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRASIL_0.addFeatures(features_BRASIL_0);
var lyr_BRASIL_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRASIL_0, 
                style: style_BRASIL_0,
                popuplayertitle: 'BRASIL',
                interactive: true,
                title: '<img src="styles/legend/BRASIL_0.png" /> BRASIL'
            });
var format_ESTADO_1 = new ol.format.GeoJSON();
var features_ESTADO_1 = format_ESTADO_1.readFeatures(json_ESTADO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ESTADO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADO_1.addFeatures(features_ESTADO_1);
var lyr_ESTADO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTADO_1, 
                style: style_ESTADO_1,
                popuplayertitle: 'ESTADO',
                interactive: true,
                title: '<img src="styles/legend/ESTADO_1.png" /> ESTADO'
            });
var format_MUNICIPIOS_2 = new ol.format.GeoJSON();
var features_MUNICIPIOS_2 = format_MUNICIPIOS_2.readFeatures(json_MUNICIPIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MUNICIPIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_2.addFeatures(features_MUNICIPIOS_2);
var lyr_MUNICIPIOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_2, 
                style: style_MUNICIPIOS_2,
                popuplayertitle: 'MUNICIPIOS',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_2.png" /> MUNICIPIOS'
            });
var format_BAIRROS_3 = new ol.format.GeoJSON();
var features_BAIRROS_3 = format_BAIRROS_3.readFeatures(json_BAIRROS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BAIRROS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_3.addFeatures(features_BAIRROS_3);
var lyr_BAIRROS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_3, 
                style: style_BAIRROS_3,
                popuplayertitle: 'BAIRROS',
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_3.png" /> BAIRROS'
            });
var format_MUNICIPVIZINHOS_4 = new ol.format.GeoJSON();
var features_MUNICIPVIZINHOS_4 = format_MUNICIPVIZINHOS_4.readFeatures(json_MUNICIPVIZINHOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MUNICIPVIZINHOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPVIZINHOS_4.addFeatures(features_MUNICIPVIZINHOS_4);
var lyr_MUNICIPVIZINHOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPVIZINHOS_4, 
                style: style_MUNICIPVIZINHOS_4,
                popuplayertitle: 'MUNICIPVIZINHOS',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPVIZINHOS_4.png" /> MUNICIPVIZINHOS'
            });
var format_MOVIMENTODEMASSA_5 = new ol.format.GeoJSON();
var features_MOVIMENTODEMASSA_5 = format_MOVIMENTODEMASSA_5.readFeatures(json_MOVIMENTODEMASSA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MOVIMENTODEMASSA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOVIMENTODEMASSA_5.addFeatures(features_MOVIMENTODEMASSA_5);
var lyr_MOVIMENTODEMASSA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MOVIMENTODEMASSA_5, 
                style: style_MOVIMENTODEMASSA_5,
                popuplayertitle: 'MOVIMENTODEMASSA',
                interactive: true,
                title: '<img src="styles/legend/MOVIMENTODEMASSA_5.png" /> MOVIMENTODEMASSA'
            });
var format_BACIAS_6 = new ol.format.GeoJSON();
var features_BACIAS_6 = format_BACIAS_6.readFeatures(json_BACIAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BACIAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACIAS_6.addFeatures(features_BACIAS_6);
var lyr_BACIAS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BACIAS_6, 
                style: style_BACIAS_6,
                popuplayertitle: 'BACIAS',
                interactive: true,
                title: '<img src="styles/legend/BACIAS_6.png" /> BACIAS'
            });
var format_ENXURRADAS_7 = new ol.format.GeoJSON();
var features_ENXURRADAS_7 = format_ENXURRADAS_7.readFeatures(json_ENXURRADAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ENXURRADAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENXURRADAS_7.addFeatures(features_ENXURRADAS_7);
var lyr_ENXURRADAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENXURRADAS_7, 
                style: style_ENXURRADAS_7,
                popuplayertitle: 'ENXURRADAS',
                interactive: true,
                title: '<img src="styles/legend/ENXURRADAS_7.png" /> ENXURRADAS'
            });
var format_INUNDACAO_8 = new ol.format.GeoJSON();
var features_INUNDACAO_8 = format_INUNDACAO_8.readFeatures(json_INUNDACAO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_INUNDACAO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INUNDACAO_8.addFeatures(features_INUNDACAO_8);
var lyr_INUNDACAO_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INUNDACAO_8, 
                style: style_INUNDACAO_8,
                popuplayertitle: 'INUNDACAO',
                interactive: true,
                title: '<img src="styles/legend/INUNDACAO_8.png" /> INUNDACAO'
            });
var format_CAPITAIS_9 = new ol.format.GeoJSON();
var features_CAPITAIS_9 = format_CAPITAIS_9.readFeatures(json_CAPITAIS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CAPITAIS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPITAIS_9.addFeatures(features_CAPITAIS_9);
var lyr_CAPITAIS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPITAIS_9, 
                style: style_CAPITAIS_9,
                popuplayertitle: 'CAPITAIS',
                interactive: true,
                title: '<img src="styles/legend/CAPITAIS_9.png" /> CAPITAIS'
            });
var format_localizaodoscolab_10 = new ol.format.GeoJSON();
var features_localizaodoscolab_10 = format_localizaodoscolab_10.readFeatures(json_localizaodoscolab_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_localizaodoscolab_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localizaodoscolab_10.addFeatures(features_localizaodoscolab_10);
var lyr_localizaodoscolab_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localizaodoscolab_10, 
                style: style_localizaodoscolab_10,
                popuplayertitle: 'localizaçãodoscolab',
                interactive: true,
                title: '<img src="styles/legend/localizaodoscolab_10.png" /> localizaçãodoscolab'
            });

lyr_BRASIL_0.setVisible(true);lyr_ESTADO_1.setVisible(true);lyr_MUNICIPIOS_2.setVisible(true);lyr_BAIRROS_3.setVisible(true);lyr_MUNICIPVIZINHOS_4.setVisible(true);lyr_MOVIMENTODEMASSA_5.setVisible(true);lyr_BACIAS_6.setVisible(true);lyr_ENXURRADAS_7.setVisible(true);lyr_INUNDACAO_8.setVisible(true);lyr_CAPITAIS_9.setVisible(true);lyr_localizaodoscolab_10.setVisible(true);
var layersList = [lyr_BRASIL_0,lyr_ESTADO_1,lyr_MUNICIPIOS_2,lyr_BAIRROS_3,lyr_MUNICIPVIZINHOS_4,lyr_MOVIMENTODEMASSA_5,lyr_BACIAS_6,lyr_ENXURRADAS_7,lyr_INUNDACAO_8,lyr_CAPITAIS_9,lyr_localizaodoscolab_10];
lyr_BRASIL_0.set('fieldAliases', {'PAIS': 'PAIS', 'AREA_KM2': 'AREA_KM2', });
lyr_ESTADO_1.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_MUNICIPIOS_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_BAIRROS_3.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'codigo_ibg': 'codigo_ibg', 'area_m2': 'area_m2', 'area_km2': 'area_km2', });
lyr_MUNICIPVIZINHOS_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'area_km��': 'area_km��', 'rmf': 'rmf', 'gid': 'gid', 'mslink': 'mslink', 'cd_mun': 'cd_mun', 'nm_mun': 'nm_mun', 'cd_ibge200': 'cd_ibge200', 'cd_ibge201': 'cd_ibge201', 'lei': 'lei', 'dt_cadastr': 'dt_cadastr', 'dt_atualiz': 'dt_atualiz', 'nu_tmp': 'nu_tmp', 'nm_tmp': 'nm_tmp', 'label': 'label', 'xc': 'xc', 'yc': 'yc', 'area_ha': 'area_ha', });
lyr_MOVIMENTODEMASSA_5.set('fieldAliases', {'UF': 'UF', 'Municipio': 'Municipio', 'Classe': 'Classe', 'Processo': 'Processo', });
lyr_BACIAS_6.set('fieldAliases', {'BACIA': 'BACIA', });
lyr_ENXURRADAS_7.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'Area': 'Area', 'Range': 'Range', 'Processo': 'Processo', 'UF': 'UF', 'Municipio': 'Municipio', });
lyr_INUNDACAO_8.set('fieldAliases', {'UF': 'UF', 'Municipio': 'Municipio', 'Classe': 'Classe', 'Processo': 'Processo', });
lyr_CAPITAIS_9.set('fieldAliases', {'CPT_CD': 'CPT_CD', 'CPT_MUN_CD': 'CPT_MUN_CD', 'CPT_NM': 'CPT_NM', 'CPT_TP': 'CPT_TP', 'CPT_SG_UF': 'CPT_SG_UF', 'CPT_DS_PAI': 'CPT_DS_PAI', 'CPT_NU_IBG': 'CPT_NU_IBG', 'CPT_GM_PON': 'CPT_GM_PON', });
lyr_localizaodoscolab_10.set('fieldAliases', {'nome': 'nome', 'funcao': 'funcao', 'area': 'area', 'logradouro': 'logradouro', 'numero': 'numero', 'bairro': 'bairro', 'municipio': 'municipio', 'uf': 'uf', 'cep': 'cep', 'completo': 'completo', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_name': 'display_name', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_BRASIL_0.set('fieldImages', {'PAIS': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ESTADO_1.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_MUNICIPIOS_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_BAIRROS_3.set('fieldImages', {'id': 'Range', 'nome': 'TextEdit', 'codigo_ibg': 'TextEdit', 'area_m2': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_MUNICIPVIZINHOS_4.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'area_km��': 'TextEdit', 'rmf': 'TextEdit', 'gid': 'TextEdit', 'mslink': 'TextEdit', 'cd_mun': 'TextEdit', 'nm_mun': 'TextEdit', 'cd_ibge200': 'TextEdit', 'cd_ibge201': 'TextEdit', 'lei': 'TextEdit', 'dt_cadastr': 'DateTime', 'dt_atualiz': 'TextEdit', 'nu_tmp': 'TextEdit', 'nm_tmp': 'TextEdit', 'label': 'TextEdit', 'xc': 'TextEdit', 'yc': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_MOVIMENTODEMASSA_5.set('fieldImages', {'UF': 'TextEdit', 'Municipio': 'TextEdit', 'Classe': 'TextEdit', 'Processo': 'TextEdit', });
lyr_BACIAS_6.set('fieldImages', {'BACIA': 'TextEdit', });
lyr_ENXURRADAS_7.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Area': 'TextEdit', 'Range': 'TextEdit', 'Processo': 'TextEdit', 'UF': 'TextEdit', 'Municipio': 'TextEdit', });
lyr_INUNDACAO_8.set('fieldImages', {'UF': 'TextEdit', 'Municipio': 'TextEdit', 'Classe': 'TextEdit', 'Processo': 'TextEdit', });
lyr_CAPITAIS_9.set('fieldImages', {'CPT_CD': 'Range', 'CPT_MUN_CD': 'Range', 'CPT_NM': 'TextEdit', 'CPT_TP': 'TextEdit', 'CPT_SG_UF': 'TextEdit', 'CPT_DS_PAI': 'TextEdit', 'CPT_NU_IBG': 'TextEdit', 'CPT_GM_PON': 'TextEdit', });
lyr_localizaodoscolab_10.set('fieldImages', {'nome': 'TextEdit', 'funcao': 'TextEdit', 'area': 'TextEdit', 'logradouro': 'TextEdit', 'numero': 'TextEdit', 'bairro': 'TextEdit', 'municipio': 'TextEdit', 'uf': 'TextEdit', 'cep': 'Range', 'completo': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_name': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_BRASIL_0.set('fieldLabels', {'PAIS': 'no label', 'AREA_KM2': 'no label', });
lyr_ESTADO_1.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'inline label - always visible', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', });
lyr_MUNICIPIOS_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_BAIRROS_3.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'codigo_ibg': 'no label', 'area_m2': 'no label', 'area_km2': 'no label', });
lyr_MUNICIPVIZINHOS_4.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'area_km��': 'no label', 'rmf': 'no label', 'gid': 'no label', 'mslink': 'no label', 'cd_mun': 'no label', 'nm_mun': 'no label', 'cd_ibge200': 'no label', 'cd_ibge201': 'no label', 'lei': 'no label', 'dt_cadastr': 'no label', 'dt_atualiz': 'no label', 'nu_tmp': 'no label', 'nm_tmp': 'no label', 'label': 'no label', 'xc': 'no label', 'yc': 'no label', 'area_ha': 'no label', });
lyr_MOVIMENTODEMASSA_5.set('fieldLabels', {'UF': 'no label', 'Municipio': 'no label', 'Classe': 'no label', 'Processo': 'no label', });
lyr_BACIAS_6.set('fieldLabels', {'BACIA': 'no label', });
lyr_ENXURRADAS_7.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', 'Area': 'no label', 'Range': 'no label', 'Processo': 'no label', 'UF': 'no label', 'Municipio': 'no label', });
lyr_INUNDACAO_8.set('fieldLabels', {'UF': 'no label', 'Municipio': 'no label', 'Classe': 'no label', 'Processo': 'no label', });
lyr_CAPITAIS_9.set('fieldLabels', {'CPT_CD': 'no label', 'CPT_MUN_CD': 'inline label - visible with data', 'CPT_NM': 'header label - visible with data', 'CPT_TP': 'no label', 'CPT_SG_UF': 'no label', 'CPT_DS_PAI': 'no label', 'CPT_NU_IBG': 'no label', 'CPT_GM_PON': 'no label', });
lyr_localizaodoscolab_10.set('fieldLabels', {'nome': 'no label', 'funcao': 'no label', 'area': 'no label', 'logradouro': 'no label', 'numero': 'no label', 'bairro': 'no label', 'municipio': 'no label', 'uf': 'no label', 'cep': 'no label', 'completo': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_name': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_localizaodoscolab_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
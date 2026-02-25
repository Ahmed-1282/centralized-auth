-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION postgres;

-- DROP TYPE public.box2d;

CREATE TYPE public.box2d (
	INPUT = box2d_in,
	OUTPUT = box2d_out,
	INTERNALLENGTH = 65,
	ALIGNMENT = 4,
	STORAGE = plain,
	CATEGORY = U,
	DELIMITER = ',');

COMMENT ON TYPE public.box2d IS 'postgis type: The type representing a 2-dimensional bounding box.';
-- DROP TYPE public.box2df;

CREATE TYPE public.box2df (
	INPUT = box2df_in,
	OUTPUT = box2df_out,
	INTERNALLENGTH = 16,
	ALIGNMENT = 8,
	STORAGE = plain,
	CATEGORY = U,
	DELIMITER = ',');

-- DROP TYPE public.box3d;

CREATE TYPE public.box3d (
	INPUT = box3d_in,
	OUTPUT = box3d_out,
	INTERNALLENGTH = 52,
	ALIGNMENT = 8,
	STORAGE = plain,
	CATEGORY = U,
	DELIMITER = ',');

COMMENT ON TYPE public.box3d IS 'postgis type: The type representing a 3-dimensional bounding box.';
-- DROP TYPE public.geography;

CREATE TYPE public.geography (
	INPUT = geography_in,
	OUTPUT = geography_out,
	RECEIVE = geography_recv,
	SEND = geography_send,
	TYPMOD_IN = geography_typmod_in,
	TYPMOD_OUT = geography_typmod_out,
	ANALYZE = geography_analyze,
	ALIGNMENT = 8,
	STORAGE = compressed,
	CATEGORY = U,
	DELIMITER = ':');

COMMENT ON TYPE public.geography IS 'postgis type: The type representing spatial features with geodetic (ellipsoidal) coordinate systems.';
-- DROP TYPE public.geometry;

CREATE TYPE public.geometry (
	INPUT = geometry_in,
	OUTPUT = geometry_out,
	RECEIVE = geometry_recv,
	SEND = geometry_send,
	TYPMOD_IN = geometry_typmod_in,
	TYPMOD_OUT = geometry_typmod_out,
	ANALYZE = geometry_analyze,
	ALIGNMENT = 8,
	STORAGE = compressed,
	CATEGORY = U,
	DELIMITER = ':');

COMMENT ON TYPE public.geometry IS 'postgis type: The type representing spatial features with planar coordinate systems.';
-- DROP TYPE public.gidx;

CREATE TYPE public.gidx (
	INPUT = gidx_in,
	OUTPUT = gidx_out,
	ALIGNMENT = 8,
	STORAGE = plain,
	CATEGORY = U,
	DELIMITER = ',');

-- DROP TYPE public.gtrgm;

CREATE TYPE public.gtrgm (
	INPUT = gtrgm_in,
	OUTPUT = gtrgm_out,
	ALIGNMENT = 4,
	STORAGE = plain,
	CATEGORY = U,
	DELIMITER = ',');

-- DROP TYPE public.spheroid;

CREATE TYPE public.spheroid (
	INPUT = spheroid_in,
	OUTPUT = spheroid_out,
	INTERNALLENGTH = 65,
	ALIGNMENT = 8,
	STORAGE = plain,
	CATEGORY = U,
	DELIMITER = ',');

-- DROP TYPE public."transaction_status_enum";

CREATE TYPE public."transaction_status_enum" AS ENUM (
	'APPROVED',
	'PENDING',
	'REJECTED');

-- DROP TYPE public."transaction_type_enum";

CREATE TYPE public."transaction_type_enum" AS ENUM (
	'P2P',
	'DISBURSEMENT',
	'CASH_IN',
	'CASH_OUT');

-- DROP SEQUENCE public.agent_boundries_gid_seq;

CREATE SEQUENCE public.agent_boundries_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.agri_shops_mari_gid_seq;

CREATE SEQUENCE public.agri_shops_mari_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.agricultural_fields_gid_seq;

CREATE SEQUENCE public.agricultural_fields_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.agro_eco_map_pak_gid_seq;

CREATE SEQUENCE public.agro_eco_map_pak_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.anomaly_reasons_sort_order_seq;

CREATE SEQUENCE public.anomaly_reasons_sort_order_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.anomaly_solutions_sort_order_seq;

CREATE SEQUENCE public.anomaly_solutions_sort_order_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.app_farms_sgd_gid_seq;

CREATE SEQUENCE public.app_farms_sgd_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_data_1_gid_seq;

CREATE SEQUENCE public.assigned_data_1_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_data_20251122_gid_seq;

CREATE SEQUENCE public.assigned_data_20251122_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_data_20251124_gid_seq;

CREATE SEQUENCE public.assigned_data_20251124_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_data_gid_seq;

CREATE SEQUENCE public.assigned_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_harvested_jk_data_gid_seq;

CREATE SEQUENCE public.assigned_harvested_jk_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_preprocess_sugarcane_20250815_gid_seq;

CREATE SEQUENCE public.assigned_preprocess_sugarcane_20250815_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_sugarcane_20250805_gid_seq;

CREATE SEQUENCE public.assigned_sugarcane_20250805_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_sugarcane_data_for_noor_gid_seq;

CREATE SEQUENCE public.assigned_sugarcane_data_for_noor_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_sugarcane_gid_seq;

CREATE SEQUENCE public.assigned_sugarcane_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigned_sugarcane_samples_20250813_gid_seq;

CREATE SEQUENCE public.assigned_sugarcane_samples_20250813_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assigning_data_for_b4_gid_seq;

CREATE SEQUENCE public.assigning_data_for_b4_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.attendence_farms_gid_seq;

CREATE SEQUENCE public.attendence_farms_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bank_branches_gid_seq;

CREATE SEQUENCE public.bank_branches_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bank_loans_id_seq;

CREATE SEQUENCE public.bank_loans_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bat_fcv_20250516_gid_seq;

CREATE SEQUENCE public.bat_fcv_20250516_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bat_final_gcs_gid_seq;

CREATE SEQUENCE public.bat_final_gcs_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bat_yarhusain_gid_seq;

CREATE SEQUENCE public.bat_yarhusain_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bhaira_circle_bounds_gid_seq;

CREATE SEQUENCE public.bhaira_circle_bounds_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bhaira_circle_crop_data_gid_seq;

CREATE SEQUENCE public.bhaira_circle_crop_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bhalwal_fbs_withcrop_kharif25_gid_seq;

CREATE SEQUENCE public.bhalwal_fbs_withcrop_kharif25_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bkk_farms_s2_downloads_gid_seq;

CREATE SEQUENCE public.bkk_farms_s2_downloads_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.blocks_final_gid_seq;

CREATE SEQUENCE public.blocks_final_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.brazil_assigned_data_20251215_gid_seq;

CREATE SEQUENCE public.brazil_assigned_data_20251215_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.brazil_assigned_data_20251224_gid_seq;

CREATE SEQUENCE public.brazil_assigned_data_20251224_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.carsaddha_pmi_temp_gid_seq;

CREATE SEQUENCE public.carsaddha_pmi_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.chiniot_circle_tmp_gid_seq;

CREATE SEQUENCE public.chiniot_circle_tmp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public."chinot_complete_digitize_part 2_gid_seq";

CREATE SEQUENCE public."chinot_complete_digitize_part 2_gid_seq"
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.circlebounds_temp_gid_seq;

CREATE SEQUENCE public.circlebounds_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.classification_rabi_24_gid_seq;

CREATE SEQUENCE public.classification_rabi_24_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.classification_samples_multan_2025_gid_seq;

CREATE SEQUENCE public.classification_samples_multan_2025_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.classification_samples_multan_2025_v2_gid_seq;

CREATE SEQUENCE public.classification_samples_multan_2025_v2_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.classified_digitized_sgd_gid_seq;

CREATE SEQUENCE public.classified_digitized_sgd_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.contactuslogs_ticket_id_seq;

CREATE SEQUENCE public.contactuslogs_ticket_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.crop_condition_validation_gid_seq;

CREATE SEQUENCE public.crop_condition_validation_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.crop_names_gid_seq;

CREATE SEQUENCE public.crop_names_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm1_org_gid_seq;

CREATE SEQUENCE public.csm1_org_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm2_digitized_20230519_gid_seq;

CREATE SEQUENCE public.csm2_digitized_20230519_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_boundaries_gid_seq;

CREATE SEQUENCE public.csm_boundaries_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_boundary_temp_gid_seq;

CREATE SEQUENCE public.csm_boundary_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_circles_20230627_gid_seq;

CREATE SEQUENCE public.csm_circles_20230627_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_data_comparison_gid_seq;

CREATE SEQUENCE public.csm_data_comparison_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_data_db_ids_status_seq;

CREATE SEQUENCE public.csm_data_db_ids_status_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_digitized_temp_gid_seq;

CREATE SEQUENCE public.csm_digitized_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_fharvest10032023_gid_seq;

CREATE SEQUENCE public.csm_fharvest10032023_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_fharvest28022023_gid_seq;

CREATE SEQUENCE public.csm_fharvest28022023_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_operator_type_id_seq;

CREATE SEQUENCE public.csm_operator_type_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_superset_20230627_gid_seq;

CREATE SEQUENCE public.csm_superset_20230627_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.csm_vertices_gid_seq;

CREATE SEQUENCE public.csm_vertices_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.custom_geom_gid_seq;

CREATE SEQUENCE public.custom_geom_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.dig_merged_temp_gid_seq;

CREATE SEQUENCE public.dig_merged_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.digitization_project_id_seq;

CREATE SEQUENCE public.digitization_project_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.digitized_data_crop_id_seq;

CREATE SEQUENCE public.digitized_data_crop_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.digitized_data_gid_seq;

CREATE SEQUENCE public.digitized_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.dikhan_sc_stats_id_seq;

CREATE SEQUENCE public.dikhan_sc_stats_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.dikhancsmscarea_gid_seq;

CREATE SEQUENCE public.dikhancsmscarea_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.dissolved_regions_gid_seq;

CREATE SEQUENCE public.dissolved_regions_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.farm_activity_categories_category_id_seq;

CREATE SEQUENCE public.farm_activity_categories_category_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.farm_data_20220427_gid_seq;

CREATE SEQUENCE public.farm_data_20220427_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.farm_data_id_seq;

CREATE SEQUENCE public.farm_data_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.farm_ndvi_anomaly_decoded_id_seq;

CREATE SEQUENCE public.farm_ndvi_anomaly_decoded_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.farmer_bank_scores_id_seq;

CREATE SEQUENCE public.farmer_bank_scores_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.farms_temp_ad_gid_seq;

CREATE SEQUENCE public.farms_temp_ad_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.fazalabad_gid_seq;

CREATE SEQUENCE public.fazalabad_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.fcv_2024_all_gid_seq;

CREATE SEQUENCE public.fcv_2024_all_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.fcv_complete_24_gid_seq;

CREATE SEQUENCE public.fcv_complete_24_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.fertilizer_dealers_outside_pakistan_gid_seq;

CREATE SEQUENCE public.fertilizer_dealers_outside_pakistan_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.fes_tracking_data_gid_seq;

CREATE SEQUENCE public.fes_tracking_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.ffcl_farms_gid_seq;

CREATE SEQUENCE public.ffcl_farms_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.field_survey_data_gid_seq;

CREATE SEQUENCE public.field_survey_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.final_fcv_2024_gid_seq;

CREATE SEQUENCE public.final_fcv_2024_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.final_kharif_crop_farms_gid_seq;

CREATE SEQUENCE public.final_kharif_crop_farms_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.flood_2025_gid_seq;

CREATE SEQUENCE public.flood_2025_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.geoai_district_boundary_gid_seq;

CREATE SEQUENCE public.geoai_district_boundary_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.geoai_eba_boundary_gid_seq;

CREATE SEQUENCE public.geoai_eba_boundary_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.geoai_growth_boundary_gid_seq;

CREATE SEQUENCE public.geoai_growth_boundary_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.geoai_landuse_change_gid_seq;

CREATE SEQUENCE public.geoai_landuse_change_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.geoai_veg_zone_gid_seq;

CREATE SEQUENCE public.geoai_veg_zone_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.har_20240614_temp_gid_seq;

CREATE SEQUENCE public.har_20240614_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.harvest_validation_20260218_gid_seq;

CREATE SEQUENCE public.harvest_validation_20260218_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.harvest_validation_gid_seq;

CREATE SEQUENCE public.harvest_validation_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.hbl_data_sowing_20220522_gid_seq;

CREATE SEQUENCE public.hbl_data_sowing_20220522_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.hh_tc_farms_gid_seq;

CREATE SEQUENCE public.hh_tc_farms_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jadeed_pivots_gid_seq;

CREATE SEQUENCE public.jadeed_pivots_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jadeed_pivots_temp_id_seq;

CREATE SEQUENCE public.jadeed_pivots_temp_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw1_20260126_samples_gid_seq;

CREATE SEQUENCE public.jdw1_20260126_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw1_samples_20260211_gid_seq;

CREATE SEQUENCE public.jdw1_samples_20260211_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw1_samples_gid_seq;

CREATE SEQUENCE public.jdw1_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw_assigned_data_20251120_gid_seq;

CREATE SEQUENCE public.jdw_assigned_data_20251120_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw_circle_bounds_gid_seq;

CREATE SEQUENCE public.jdw_circle_bounds_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw_harvest_samples_20260122_gid_seq;

CREATE SEQUENCE public.jdw_harvest_samples_20260122_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jdw_harvest_samples_gid_seq;

CREATE SEQUENCE public.jdw_harvest_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jhang_dig_temp_gid_seq;

CREATE SEQUENCE public.jhang_dig_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jhg_8_9_10_joined_gid_seq;

CREATE SEQUENCE public.jhg_8_9_10_joined_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jhg_shop_sgdm_gid_seq;

CREATE SEQUENCE public.jhg_shop_sgdm_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_correct_sc_gid_seq;

CREATE SEQUENCE public.jk1_correct_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_correct_sugar_gid_seq;

CREATE SEQUENCE public.jk1_correct_sugar_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_correct_sugarcane_20241216_gid_seq;

CREATE SEQUENCE public.jk1_correct_sugarcane_20241216_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_gate_areas_gid_seq;

CREATE SEQUENCE public.jk1_gate_areas_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_gate_geosam_gid_seq;

CREATE SEQUENCE public.jk1_gate_geosam_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_gate_khu_survey_gid_seq;

CREATE SEQUENCE public.jk1_gate_khu_survey_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_incorrect_sc_gid_seq;

CREATE SEQUENCE public.jk1_incorrect_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_incorrect_sc_gid_seq1;

CREATE SEQUENCE public.jk1_incorrect_sc_gid_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_incorrect_sc_gid_seq2;

CREATE SEQUENCE public.jk1_incorrect_sc_gid_seq2
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_incorrect_sugarcane_20241216_gid_seq;

CREATE SEQUENCE public.jk1_incorrect_sugarcane_20241216_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_second_esurvey_gid_seq;

CREATE SEQUENCE public.jk1_second_esurvey_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_sunday_final_samples_gid_seq;

CREATE SEQUENCE public.jk1_sunday_final_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_total_sc_gid_seq;

CREATE SEQUENCE public.jk1_total_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_total_sc_gid_seq1;

CREATE SEQUENCE public.jk1_total_sc_gid_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_total_sugarcane_20241216_gid_seq;

CREATE SEQUENCE public.jk1_total_sugarcane_20241216_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_unmapped_sc_gid_seq;

CREATE SEQUENCE public.jk1_unmapped_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_unmapped_sc_gid_seq1;

CREATE SEQUENCE public.jk1_unmapped_sc_gid_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_unmapped_sc_gid_seq2;

CREATE SEQUENCE public.jk1_unmapped_sc_gid_seq2
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk1_unmapped_sugarcane_20241216_gid_seq;

CREATE SEQUENCE public.jk1_unmapped_sugarcane_20241216_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_circles_stats_gid_seq;

CREATE SEQUENCE public.jk2_circles_stats_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_correct_sc_gid_seq;

CREATE SEQUENCE public.jk2_correct_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_incorrect_sc_gid_seq;

CREATE SEQUENCE public.jk2_incorrect_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_correct_sugarcane_gid_seq;

CREATE SEQUENCE public.jk2_second_correct_sugarcane_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_esurvey_gid_seq;

CREATE SEQUENCE public.jk2_second_esurvey_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_incorrect_sc_gt01_gid_seq;

CREATE SEQUENCE public.jk2_second_incorrect_sc_gt01_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_incorrect_sc_lt01_gid_seq;

CREATE SEQUENCE public.jk2_second_incorrect_sc_lt01_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_total_sc_gid_seq;

CREATE SEQUENCE public.jk2_second_total_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_unmapped_sc_gt01_gid_seq;

CREATE SEQUENCE public.jk2_second_unmapped_sc_gt01_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_second_unmapped_sc_lt01_gid_seq;

CREATE SEQUENCE public.jk2_second_unmapped_sc_lt01_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_total_sc_gid_seq;

CREATE SEQUENCE public.jk2_total_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk2_unmapped_sc_gid_seq;

CREATE SEQUENCE public.jk2_unmapped_sc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_assigned_samples_gid_seq;

CREATE SEQUENCE public.jk_assigned_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_assigned_sugarcane_20250818_gid_seq;

CREATE SEQUENCE public.jk_assigned_sugarcane_20250818_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_assigned_test_classification_gid_seq;

CREATE SEQUENCE public.jk_assigned_test_classification_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_assigned_validation_samples_gid_seq;

CREATE SEQUENCE public.jk_assigned_validation_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_correct_samples_percentages_gid_seq;

CREATE SEQUENCE public.jk_correct_samples_percentages_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_gate_2024_survey_gid_seq;

CREATE SEQUENCE public.jk_gate_2024_survey_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_gate_other_2024_survey_gid_seq;

CREATE SEQUENCE public.jk_gate_other_2024_survey_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_harvest_manual_gid_seq;

CREATE SEQUENCE public.jk_harvest_manual_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_headoffice_circles_geographic_gid_seq;

CREATE SEQUENCE public.jk_headoffice_circles_geographic_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_headoffice_circles_gid_seq;

CREATE SEQUENCE public.jk_headoffice_circles_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_headoffice_samples_gid_seq;

CREATE SEQUENCE public.jk_headoffice_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_new_person_data_gid_seq;

CREATE SEQUENCE public.jk_new_person_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit1_assigned_sugarcane_v1_gid_seq;

CREATE SEQUENCE public.jk_unit1_assigned_sugarcane_v1_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit1_circle_land_stats_gid_seq;

CREATE SEQUENCE public.jk_unit1_circle_land_stats_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit1_circles_stats_gid_seq;

CREATE SEQUENCE public.jk_unit1_circles_stats_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit1_suparco_assigned_data_gid_seq;

CREATE SEQUENCE public.jk_unit1_suparco_assigned_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit2_circle_land_stats_gid_seq;

CREATE SEQUENCE public.jk_unit2_circle_land_stats_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit2_circles_gid_seq;

CREATE SEQUENCE public.jk_unit2_circles_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_unit_samples_assigned_gid_seq;

CREATE SEQUENCE public.jk_unit_samples_assigned_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_validation_samples_gid_seq;

CREATE SEQUENCE public.jk_validation_samples_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jk_validation_samples_v2_gid_seq;

CREATE SEQUENCE public.jk_validation_samples_v2_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit1_boundry_20250305_gid_seq;

CREATE SEQUENCE public.jkunit1_boundry_20250305_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit1_sar_20250217_gid_seq;

CREATE SEQUENCE public.jkunit1_sar_20250217_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit1_sarvh_20240124_boundry_gid_seq;

CREATE SEQUENCE public.jkunit1_sarvh_20240124_boundry_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit2_2025_80_percent_sugarcane_preprocessed_gid_seq;

CREATE SEQUENCE public.jkunit2_2025_80_percent_sugarcane_preprocessed_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit2_stats25_id_seq;

CREATE SEQUENCE public.jkunit2_stats25_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit_stats_v1_gid_seq;

CREATE SEQUENCE public.jkunit_stats_v1_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.jkunit_survey_stats25_gid_seq;

CREATE SEQUENCE public.jkunit_survey_stats25_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kharif25_bhalwal_gid_seq;

CREATE SEQUENCE public.kharif25_bhalwal_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kharif25_kot_momin_gid_seq;

CREATE SEQUENCE public.kharif25_kot_momin_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kharif25_sahiwal_gid_seq;

CREATE SEQUENCE public.kharif25_sahiwal_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kharif25_sargodha_gid_seq;

CREATE SEQUENCE public.kharif25_sargodha_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kharif25_shahpur_gid_seq;

CREATE SEQUENCE public.kharif25_shahpur_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kharif25_silanwali_gid_seq;

CREATE SEQUENCE public.kharif25_silanwali_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.khasra_boundaries_gid_seq;

CREATE SEQUENCE public.khasra_boundaries_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kp_fertilizer_dealers_gid_seq;

CREATE SEQUENCE public.kp_fertilizer_dealers_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.kp_soil_samples_id_seq;

CREATE SEQUENCE public.kp_soil_samples_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.locations_gid_seq;

CREATE SEQUENCE public.locations_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mari_temp_20240502_gid_seq;

CREATE SEQUENCE public.mari_temp_20240502_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mauza_boundary_gid_seq;

CREATE SEQUENCE public.mauza_boundary_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20230825_gid_seq;

CREATE SEQUENCE public.merged_20230825_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20230911_gid_seq;

CREATE SEQUENCE public.merged_20230911_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20230913_gid_seq;

CREATE SEQUENCE public.merged_20230913_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20230914_gid_seq;

CREATE SEQUENCE public.merged_20230914_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20230925_gid_seq;

CREATE SEQUENCE public.merged_20230925_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20240625_temp_gid_seq;

CREATE SEQUENCE public.merged_20240625_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.merged_20241002_temp_gid_seq;

CREATE SEQUENCE public.merged_20241002_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_aoi_gid_seq;

CREATE SEQUENCE public.mpcl_aoi_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_digitized_farmcrops_gid_seq;

CREATE SEQUENCE public.mpcl_digitized_farmcrops_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_digtize_farms_gid_seq;

CREATE SEQUENCE public.mpcl_digtize_farms_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_farms_complete_gid_seq;

CREATE SEQUENCE public.mpcl_farms_complete_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_female_farmers_gid_seq;

CREATE SEQUENCE public.mpcl_female_farmers_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_female_farmers_validated_gid_seq;

CREATE SEQUENCE public.mpcl_female_farmers_validated_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_ff_temp_sr_no_seq;

CREATE SEQUENCE public.mpcl_ff_temp_sr_no_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_survey_cleaned_gid_seq;

CREATE SEQUENCE public.mpcl_survey_cleaned_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_wells_20250115_gid_seq;

CREATE SEQUENCE public.mpcl_wells_20250115_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.mpcl_wells_gid_seq;

CREATE SEQUENCE public.mpcl_wells_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.msg_logs_id_seq;

CREATE SEQUENCE public.msg_logs_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.multan_samp_01_gid_seq;

CREATE SEQUENCE public.multan_samp_01_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.multan_samples_temp_gid_seq;

CREATE SEQUENCE public.multan_samples_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.noor_studyarea_gid_seq;

CREATE SEQUENCE public.noor_studyarea_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.nowshehra_ibrahim_temp_gid_seq;

CREATE SEQUENCE public.nowshehra_ibrahim_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.okara_rabi_25_gid_seq;

CREATE SEQUENCE public.okara_rabi_25_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_assigned_data_gid_seq;

CREATE SEQUENCE public.pmi_assigned_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_brazil_studyarea_gid_seq;

CREATE SEQUENCE public.pmi_brazil_studyarea_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_brazil_tobacco_gid_seq;

CREATE SEQUENCE public.pmi_brazil_tobacco_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_samples_2025v1_gid_seq;

CREATE SEQUENCE public.pmi_samples_2025v1_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_samples_to_assign_gid_seq;

CREATE SEQUENCE public.pmi_samples_to_assign_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_survey_samples_2025_gid_seq;

CREATE SEQUENCE public.pmi_survey_samples_2025_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pmi_ucs_temp_gid_seq;

CREATE SEQUENCE public.pmi_ucs_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.project_helix_data_gid_seq;

CREATE SEQUENCE public.project_helix_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.ptc_studyarea_gid_seq;

CREATE SEQUENCE public.ptc_studyarea_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.ptcbounds_yh_gid_seq;

CREATE SEQUENCE public.ptcbounds_yh_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.ptcswabi_temp_gid_seq;

CREATE SEQUENCE public.ptcswabi_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.pukkewal_temp_gid_seq;

CREATE SEQUENCE public.pukkewal_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.punjabcsmbounds_temp_gid_seq;

CREATE SEQUENCE public.punjabcsmbounds_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.remaining_sgd_temp_gid_seq;

CREATE SEQUENCE public.remaining_sgd_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.samples_20240709_gid_seq;

CREATE SEQUENCE public.samples_20240709_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.samples_20240712_gid_seq;

CREATE SEQUENCE public.samples_20240712_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.samples_20240719_gid_seq;

CREATE SEQUENCE public.samples_20240719_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.samples_20240722_gid_seq;

CREATE SEQUENCE public.samples_20240722_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.samples_20240801_gid_seq;

CREATE SEQUENCE public.samples_20240801_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.samples_for_jkunit2_gid_seq;

CREATE SEQUENCE public.samples_for_jkunit2_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sar_vh_boundry_20250121_gid_seq;

CREATE SEQUENCE public.sar_vh_boundry_20250121_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sargodha_20230227_gid_seq;

CREATE SEQUENCE public.sargodha_20230227_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sargodha_base_id_seq;

CREATE SEQUENCE public.sargodha_base_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sargodha_merged_temp_gid_seq;

CREATE SEQUENCE public.sargodha_merged_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sargodha_srv_temp_gid_seq;

CREATE SEQUENCE public.sargodha_srv_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sargodha_temp_20240129_gid_seq;

CREATE SEQUENCE public.sargodha_temp_20240129_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.satelliete_image_process_info_id_seq;

CREATE SEQUENCE public.satelliete_image_process_info_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.score_catalog_id_seq;

CREATE SEQUENCE public.score_catalog_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.selecteducs3_gid_seq;

CREATE SEQUENCE public.selecteducs3_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sentinel2_data_id_serial_seq;

CREATE SEQUENCE public.sentinel2_data_id_serial_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sentinel_2_index_pakistan_gid_seq;

CREATE SEQUENCE public.sentinel_2_index_pakistan_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sgd_gcs_citrus_gid_seq;

CREATE SEQUENCE public.sgd_gcs_citrus_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sgd_sample_bounds_gid_seq;

CREATE SEQUENCE public.sgd_sample_bounds_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.shorkot_gid_seq;

CREATE SEQUENCE public.shorkot_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.soil_samples_clean_gid_seq;

CREATE SEQUENCE public.soil_samples_clean_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.spacific_fazliabad_fields_gid_seq;

CREATE SEQUENCE public.spacific_fazliabad_fields_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sugarcane_csm_classified_22_gid_seq;

CREATE SEQUENCE public.sugarcane_csm_classified_22_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sugarcane_csm_classified_23_gid_seq;

CREATE SEQUENCE public.sugarcane_csm_classified_23_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sugarcane_csm_temp_gid_seq;

CREATE SEQUENCE public.sugarcane_csm_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sugarcane_rabi_24_sgd_gid_seq;

CREATE SEQUENCE public.sugarcane_rabi_24_sgd_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sugarcanepunjab_gid_seq;

CREATE SEQUENCE public.sugarcanepunjab_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.suparco_farms_id_seq;

CREATE SEQUENCE public.suparco_farms_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.suparco_field_data_farm_id_seq;

CREATE SEQUENCE public.suparco_field_data_farm_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.sur_farmers_caste_id_seq;

CREATE SEQUENCE public.sur_farmers_caste_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.survey_vi_log_gid_seq;

CREATE SEQUENCE public.survey_vi_log_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.surveyorunit2_temp_gid_seq;

CREATE SEQUENCE public.surveyorunit2_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_classified_gid_seq;

CREATE SEQUENCE public.swabi_classified_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_kst_ucs_gid_seq;

CREATE SEQUENCE public.swabi_kst_ucs_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_merge_digitize_data_gid_seq;

CREATE SEQUENCE public.swabi_merge_digitize_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_missing_fields_20240219_gid_seq;

CREATE SEQUENCE public.swabi_missing_fields_20240219_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_qced_20240112_gid_seq;

CREATE SEQUENCE public.swabi_qced_20240112_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 2551246
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_qced_20240112_uid_seq;

CREATE SEQUENCE public.swabi_qced_20240112_uid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_temp_20231114_gid_seq;

CREATE SEQUENCE public.swabi_temp_20231114_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swabi_tempa_gid_seq;

CREATE SEQUENCE public.swabi_tempa_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swb_uc_20230810_gid_seq;

CREATE SEQUENCE public.swb_uc_20230810_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.swbuc_20230804_gid_seq;

CREATE SEQUENCE public.swbuc_20230804_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.talha_samples_20260126_gid_seq;

CREATE SEQUENCE public.talha_samples_20260126_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.talha_samples_20260127_gid_seq;

CREATE SEQUENCE public.talha_samples_20260127_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_brazil_tobacco_smoothed_gid_seq;

CREATE SEQUENCE public.temp_brazil_tobacco_smoothed_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_mardan_ptc_gid_seq;

CREATE SEQUENCE public.temp_mardan_ptc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_suddhar_gid_seq;

CREATE SEQUENCE public.temp_suddhar_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_swabi_uc_20230712_gid_seq;

CREATE SEQUENCE public.temp_swabi_uc_20230712_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_swabi_uc_20230719_gid_seq;

CREATE SEQUENCE public.temp_swabi_uc_20230719_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_swabi_uc_20230725_gid_seq;

CREATE SEQUENCE public.temp_swabi_uc_20230725_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.temp_uc_swabi_assign_gid_seq;

CREATE SEQUENCE public.temp_uc_swabi_assign_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.test_id_seq;

CREATE SEQUENCE public.test_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.testndvipolygon_gid_seq;

CREATE SEQUENCE public.testndvipolygon_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.testuc_gid_seq;

CREATE SEQUENCE public.testuc_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tobacco_assigned_data_gid_seq;

CREATE SEQUENCE public.tobacco_assigned_data_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tobaccopmiresult_gid_seq;

CREATE SEQUENCE public.tobaccopmiresult_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.uc_hasanah_jhg_temp_gid_seq;

CREATE SEQUENCE public.uc_hasanah_jhg_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.union_council_gid_seq;

CREATE SEQUENCE public.union_council_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.union_council_temp_gid_seq;

CREATE SEQUENCE public.union_council_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.unit1circlebounds_updated_gid_seq;

CREATE SEQUENCE public.unit1circlebounds_updated_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.updated_agent_bounds_temp_gid_seq;

CREATE SEQUENCE public.updated_agent_bounds_temp_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.updated_ucs_20230710_gid_seq;

CREATE SEQUENCE public.updated_ucs_20230710_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.validation_data_20251105_gid_seq;

CREATE SEQUENCE public.validation_data_20251105_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.vectorndvi_gid_seq;

CREATE SEQUENCE public.vectorndvi_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.your_table_gid_seq;

CREATE SEQUENCE public.your_table_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 2551246
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.zonal_tobacco5_gid_seq;

CREATE SEQUENCE public.zonal_tobacco5_gid_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- public.activity_details definition

-- Drop table

-- DROP TABLE public.activity_details;

CREATE TABLE public.activity_details (
	activity_id uuid DEFAULT uuid_generate_v4() NOT NULL,
	farmer_id text NULL,
	profiled_by text NULL,
	category_id uuid NULL,
	"type" text NULL,
	"cost" text NULL,
	quantity text NULL,
	lat float8 NULL,
	lng float8 NULL,
	description text NULL,
	farms jsonb NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	images _text NULL,
	task_status text DEFAULT 'In Progress'::text NULL,
	is_anomaly bool DEFAULT false NULL,
	assigned_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	completed_dt timestamp(6) NULL,
	task_date date NULL,
	create_status varchar(100) DEFAULT 'Portal'::character varying NULL,
	farm_id uuid NULL,
	farm_shape public.geometry NULL,
	sync_id text NULL,
	CONSTRAINT temp_activity_details_pkey PRIMARY KEY (activity_id)
);


-- public.activity_images definition

-- Drop table

-- DROP TABLE public.activity_images;

CREATE TABLE public.activity_images (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	farm_id uuid NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_dt timestamp NULL,
	lat float8 NULL,
	lng float8 NULL,
	direction varchar(100) NULL,
	image_path varchar(250) NULL,
	activity_id uuid NULL,
	CONSTRAINT activity_images_pkey PRIMARY KEY (id)
);


-- public.agent_boundries definition

-- Drop table

-- DROP TABLE public.agent_boundries;

CREATE TABLE public.agent_boundries (
	gid serial4 NOT NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	circle_nam varchar(254) NULL,
	unit float8 NULL,
	area_ac numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT agent_boundries_pkey PRIMARY KEY (gid)
);
CREATE INDEX agent_boundries_geom_idx ON public.agent_boundries USING gist (geom);


-- public.agent_contact_info definition

-- Drop table

-- DROP TABLE public.agent_contact_info;

CREATE TABLE public.agent_contact_info (
	srno varchar(255) NULL,
	division varchar(255) NULL,
	district varchar(255) NULL,
	tehsil varchar(255) NULL,
	"name" varchar(255) NULL,
	pop varchar(255) NULL,
	msisdn varchar(255) NULL,
	mail varchar(255) NULL
);


-- public.agent_farms definition

-- Drop table

-- DROP TABLE public.agent_farms;

CREATE TABLE public.agent_farms (
	agent_id uuid NOT NULL,
	farm_id varchar NOT NULL
);


-- public.agents definition

-- Drop table

-- DROP TABLE public.agents;

CREATE TABLE public.agents (
	msisdn varchar NOT NULL,
	"name" varchar NULL,
	email text NULL,
	"key" varchar(8) DEFAULT substr(md5(random()::text), 1, 8) NULL,
	address varchar(200) NULL,
	is_reset_password bool DEFAULT true NULL,
	device_info json NULL,
	"password" varchar(255) NULL,
	refresh_token text NULL,
	CONSTRAINT agents_pk PRIMARY KEY (msisdn)
);
CREATE UNIQUE INDEX idx_agents_msisdn ON public.agents USING btree (msisdn);


-- public.agri_input_company_data definition

-- Drop table

-- DROP TABLE public.agri_input_company_data;

CREATE TABLE public.agri_input_company_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"name" varchar(255) NULL,
	company_name varchar(255) NULL,
	"year" varchar(255) NULL,
	category varchar(255) NULL,
	amount varchar(255) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	score int4 NULL,
	CONSTRAINT agri_input_company_data_pkey PRIMARY KEY (id)
);


-- public.agri_output_company_data definition

-- Drop table

-- DROP TABLE public.agri_output_company_data;

CREATE TABLE public.agri_output_company_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"name" varchar(255) NULL,
	company_name varchar(255) NULL,
	"year" varchar(255) NULL,
	contract_type varchar(255) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	score int4 NULL,
	CONSTRAINT agri_output_company_data_pkey PRIMARY KEY (id)
);


-- public.agri_shops_mari definition

-- Drop table

-- DROP TABLE public.agri_shops_mari;

CREATE TABLE public.agri_shops_mari (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(pointzm, 4326) NULL,
	CONSTRAINT agri_shops_mari_pkey PRIMARY KEY (gid)
);
CREATE INDEX agri_shops_mari_geom_idx ON public.agri_shops_mari USING gist (geom);


-- public.agricultural_fields definition

-- Drop table

-- DROP TABLE public.agricultural_fields;

CREATE TABLE public.agricultural_fields (
	gid serial4 NOT NULL,
	id float8 NULL,
	crop varchar NULL,
	geom public.geometry(multipolygon, 3857) NULL,
	area float4 NULL,
	area_ha float4 NULL,
	coordinates varchar NULL,
	sowing_date date NULL,
	harvesting_date date NULL,
	previous_crop varchar NULL,
	CONSTRAINT agricultural_fields_pkey PRIMARY KEY (gid)
);
CREATE INDEX agricultural_fields_geom_idx ON public.agricultural_fields USING gist (geom);


-- public.agro_eco_map_pak definition

-- Drop table

-- DROP TABLE public.agro_eco_map_pak;

CREATE TABLE public.agro_eco_map_pak (
	gid serial4 NOT NULL,
	id float8 NULL,
	unique_id_ varchar(50) NULL,
	aez varchar(250) NULL,
	aez_code varchar(10) NULL,
	terri_code float8 NULL,
	territory varchar(100) NULL,
	region_c varchar(10) NULL,
	region varchar(100) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT agro_eco_map_pak_pkey PRIMARY KEY (gid)
);
CREATE INDEX agro_eco_map_pak_geom_idx ON public.agro_eco_map_pak USING gist (geom);


-- public.anomaly_activity definition

-- Drop table

-- DROP TABLE public.anomaly_activity;

CREATE TABLE public.anomaly_activity (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	title text NULL,
	anomaly_id uuid NULL,
	anomaly_json json NULL,
	anomaly_reasons_id uuid NULL,
	anomaly_solutions_id uuid NULL,
	description text NULL,
	images _text NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	update_dt timestamp(6) NULL,
	is_anomaly bool NULL,
	activity_id uuid NULL,
	CONSTRAINT anomaly_activities_pkey PRIMARY KEY (id)
);


-- public.anomaly_reasons definition

-- Drop table

-- DROP TABLE public.anomaly_reasons;

CREATE TABLE public.anomaly_reasons (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	title text NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	sort_order int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	CONSTRAINT anomaly_issues_pkey PRIMARY KEY (id)
);


-- public.anomaly_solutions definition

-- Drop table

-- DROP TABLE public.anomaly_solutions;

CREATE TABLE public.anomaly_solutions (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	title text NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	sort_order int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	CONSTRAINT anomaly_solutions_pkey PRIMARY KEY (id)
);


-- public.app_farms_sgd definition

-- Drop table

-- DROP TABLE public.app_farms_sgd;

CREATE TABLE public.app_farms_sgd (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	msisdn numeric NULL,
	farmer_nam varchar(254) NULL,
	profiled_b varchar(254) NULL,
	location_n varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT app_farms_sgd_pkey PRIMARY KEY (gid)
);
CREATE INDEX app_farms_sgd_geom_idx ON public.app_farms_sgd USING gist (geom);


-- public.arpu_data definition

-- Drop table

-- DROP TABLE public.arpu_data;

CREATE TABLE public.arpu_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"date" date NULL,
	recharge varchar(255) NULL,
	amount int4 NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	CONSTRAINT arpu_data_pkey PRIMARY KEY (id)
);


-- public.assigned_data definition

-- Drop table

-- DROP TABLE public.assigned_data;

CREATE TABLE public.assigned_data (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	agent_numb varchar(11) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_data_geom_idx ON public.assigned_data USING gist (geom);


-- public.assigned_data_1 definition

-- Drop table

-- DROP TABLE public.assigned_data_1;

CREATE TABLE public.assigned_data_1 (
	gid serial4 NOT NULL,
	id varchar(254) NULL,
	farm_id varchar(254) NULL,
	passbook_i varchar(254) NULL,
	status varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	profiled_b numeric NULL,
	area numeric NULL,
	shape_id varchar(254) NULL,
	partner_id varchar(254) NULL,
	variety varchar(254) NULL,
	shape varchar(254) NULL,
	area_ac float8 NULL,
	___majority numeric NULL,
	___variety numeric NULL,
	agent_name numeric NULL,
	agent_na_1 numeric NULL,
	agent_na_2 numeric NULL,
	agent_na_3 numeric NULL,
	agent_na_4 varchar(254) NULL,
	agent_na_5 varchar(254) NULL,
	agent_na_6 float8 NULL,
	agent_na_7 float8 NULL,
	agent_na_8 numeric NULL,
	msisdn_cou numeric NULL,
	msisdn_uni numeric NULL,
	msisdn_min numeric NULL,
	msisdn_max numeric NULL,
	msisdn_ran numeric NULL,
	msisdn_sum numeric NULL,
	msisdn_mea numeric NULL,
	msisdn_med numeric NULL,
	msisdn_std numeric NULL,
	msisdn_m_1 numeric NULL,
	msisdn_maj numeric NULL,
	msisdn_q1 numeric NULL,
	msisdn_q3 numeric NULL,
	msisdn_iqr numeric NULL,
	unit_count numeric NULL,
	unit_uniqu numeric NULL,
	unit_empty numeric NULL,
	unit_fille numeric NULL,
	unit_min bool NULL,
	unit_max bool NULL,
	unit_min_l float8 NULL,
	unit_max_l float8 NULL,
	unit_mean_ numeric NULL,
	geom_count numeric NULL,
	geom_uniqu numeric NULL,
	geom_empty numeric NULL,
	geom_fille numeric NULL,
	geom_min varchar(254) NULL,
	geom_max varchar(254) NULL,
	geom_min_l float8 NULL,
	geom_max_l float8 NULL,
	geom_mean_ numeric NULL,
	area_ac_co numeric NULL,
	area_ac_un numeric NULL,
	area_ac_mi numeric NULL,
	area_ac_ma numeric NULL,
	area_ac_ra numeric NULL,
	area_ac_su numeric NULL,
	area_ac_me numeric NULL,
	area_ac__1 numeric NULL,
	area_ac_st numeric NULL,
	area_ac__2 numeric NULL,
	area_ac__3 numeric NULL,
	area_ac_q1 numeric NULL,
	area_ac_q3 numeric NULL,
	area_ac_iq numeric NULL,
	create_dt_ numeric NULL,
	create_d_1 numeric NULL,
	create_d_2 numeric NULL,
	create_d_3 numeric NULL,
	create_d_4 date NULL,
	create_d_5 date NULL,
	update_dt_ numeric NULL,
	update_d_1 numeric NULL,
	update_d_2 numeric NULL,
	update_d_3 numeric NULL,
	update_d_4 varchar(254) NULL,
	update_d_5 varchar(254) NULL,
	update_d_6 float8 NULL,
	update_d_7 float8 NULL,
	update_d_8 numeric NULL,
	circle_id_ numeric NULL,
	circle_i_1 numeric NULL,
	circle_i_2 numeric NULL,
	circle_i_3 numeric NULL,
	circle_i_4 varchar(254) NULL,
	circle_i_5 varchar(254) NULL,
	circle_i_6 float8 NULL,
	circle_i_7 float8 NULL,
	circle_i_8 numeric NULL,
	is_assigne numeric NULL,
	is_assig_1 numeric NULL,
	is_assig_2 numeric NULL,
	is_assig_3 numeric NULL,
	is_assig_4 bool NULL,
	is_assig_5 bool NULL,
	is_assig_6 float8 NULL,
	is_assig_7 float8 NULL,
	is_assig_8 numeric NULL,
	circle_nam numeric NULL,
	circle_n_1 numeric NULL,
	circle_n_2 numeric NULL,
	circle_n_3 numeric NULL,
	circle_n_4 varchar(254) NULL,
	circle_n_5 varchar(254) NULL,
	circle_n_6 float8 NULL,
	circle_n_7 float8 NULL,
	circle_n_8 numeric NULL,
	sub_circle numeric NULL,
	sub_circ_1 numeric NULL,
	sub_circ_2 numeric NULL,
	sub_circ_3 numeric NULL,
	sub_circ_4 varchar(254) NULL,
	sub_circ_5 varchar(254) NULL,
	sub_circ_6 float8 NULL,
	sub_circ_7 float8 NULL,
	sub_circ_8 numeric NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	msisdn varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_data_1_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_data_1_geom_idx ON public.assigned_data_1 USING gist (geom);


-- public.assigned_data_20251122 definition

-- Drop table

-- DROP TABLE public.assigned_data_20251122;

CREATE TABLE public.assigned_data_20251122 (
	gid serial4 NOT NULL,
	id float8 NULL,
	crop varchar(10) NULL,
	msisdn varchar(15) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_data_20251122_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_data_20251122_geom_idx ON public.assigned_data_20251122 USING gist (geom);


-- public.assigned_data_20251124 definition

-- Drop table

-- DROP TABLE public.assigned_data_20251124;

CREATE TABLE public.assigned_data_20251124 (
	gid serial4 NOT NULL,
	area_ac numeric NULL,
	status varchar(20) NULL,
	circle_nam varchar(254) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	msisdn varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_data_20251124_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_data_20251124_geom_idx ON public.assigned_data_20251124 USING gist (geom);


-- public.assigned_harvested_jk_data definition

-- Drop table

-- DROP TABLE public.assigned_harvested_jk_data;

CREATE TABLE public.assigned_harvested_jk_data (
	gid serial4 NOT NULL,
	id float8 NULL,
	district varchar(50) NULL,
	msisdn float8 NULL,
	agent_name varchar(20) NULL,
	tehsil varchar(20) NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_harvested_jk_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_harvested_jk_data_geom_idx ON public.assigned_harvested_jk_data USING gist (geom);


-- public.assigned_preprocess_sugarcane_20250815 definition

-- Drop table

-- DROP TABLE public.assigned_preprocess_sugarcane_20250815;

CREATE TABLE public.assigned_preprocess_sugarcane_20250815 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area_ac float8 NULL,
	agent_name varchar(254) NULL,
	msisdn numeric NULL,
	unit bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_preprocess_sugarcane_20250815_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_preprocess_sugarcane_20250815_geom_idx ON public.assigned_preprocess_sugarcane_20250815 USING gist (geom);


-- public.assigned_sugarcane definition

-- Drop table

-- DROP TABLE public.assigned_sugarcane;

CREATE TABLE public.assigned_sugarcane (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac numeric NULL,
	msisdn varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_sugarcane_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_sugarcane_geom_idx ON public.assigned_sugarcane USING gist (geom);


-- public.assigned_sugarcane_20250805 definition

-- Drop table

-- DROP TABLE public.assigned_sugarcane_20250805;

CREATE TABLE public.assigned_sugarcane_20250805 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area_ac float8 NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_sugarcane_20250805_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_sugarcane_20250805_geom_idx ON public.assigned_sugarcane_20250805 USING gist (geom);


-- public.assigned_sugarcane_data_for_noor definition

-- Drop table

-- DROP TABLE public.assigned_sugarcane_data_for_noor;

CREATE TABLE public.assigned_sugarcane_data_for_noor (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	area numeric NULL,
	rabi25 varchar(254) NULL,
	kharif25 varchar(254) NULL,
	msisdn varchar(20) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_sugarcane_data_for_noor_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_sugarcane_data_for_noor_geom_idx ON public.assigned_sugarcane_data_for_noor USING gist (geom);


-- public.assigned_sugarcane_samples_20250813 definition

-- Drop table

-- DROP TABLE public.assigned_sugarcane_samples_20250813;

CREATE TABLE public.assigned_sugarcane_samples_20250813 (
	gid serial4 NOT NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigned_sugarcane_samples_20250813_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigned_sugarcane_samples_20250813_geom_idx ON public.assigned_sugarcane_samples_20250813 USING gist (geom);


-- public.assigning_data_for_b4 definition

-- Drop table

-- DROP TABLE public.assigning_data_for_b4;

CREATE TABLE public.assigning_data_for_b4 (
	gid serial4 NOT NULL,
	msisdn varchar(15) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT assigning_data_for_b4_pkey PRIMARY KEY (gid)
);
CREATE INDEX assigning_data_for_b4_geom_idx ON public.assigning_data_for_b4 USING gist (geom);


-- public.attendence_farms definition

-- Drop table

-- DROP TABLE public.attendence_farms;

CREATE TABLE public.attendence_farms (
	gid serial4 NOT NULL,
	id float8 NULL,
	msisdn float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	lat float8 NULL,
	lng float8 NULL,
	district varchar(20) NULL,
	area_ac float8 NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id int8 NULL,
	area float8 NULL,
	CONSTRAINT attendence_farms_pkey PRIMARY KEY (gid)
);
CREATE INDEX attendence_farms_geom_idx ON public.attendence_farms USING gist (geom);


-- public.backup_swabi_digitized_classified definition

-- Drop table

-- DROP TABLE public.backup_swabi_digitized_classified;

CREATE TABLE public.backup_swabi_digitized_classified (
	gid int4 NULL,
	_majority numeric NULL,
	area float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	uc varchar NULL,
	tehsil varchar NULL,
	district varchar NULL,
	agent_msisdn varchar NULL,
	temp_id varchar NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL
);


-- public.bank_branches definition

-- Drop table

-- DROP TABLE public.bank_branches;

CREATE TABLE public.bank_branches (
	gid serial4 NOT NULL,
	branch_name varchar(254) NULL,
	address varchar(254) NULL,
	branch_code float8 NULL,
	city varchar(254) NULL,
	state varchar(254) NULL,
	manager_name varchar(254) NULL,
	manager_contact varchar(254) NULL,
	direct_number varchar(254) NULL,
	area_name varchar(254) NULL,
	area_manager varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	geom public.geometry(point, 4326) NULL,
	bank_name text NULL,
	CONSTRAINT bank_branches_pkey PRIMARY KEY (gid)
);
CREATE INDEX bank_branches_geom_idx ON public.bank_branches USING gist (geom);


-- public.bank_loans definition

-- Drop table

-- DROP TABLE public.bank_loans;

CREATE TABLE public.bank_loans (
	id serial4 NOT NULL,
	msisdn varchar(15) NOT NULL,
	loan_status bool NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	amount numeric(12, 2) NULL,
	start_date date NULL,
	end_date date NULL,
	information text NULL,
	check_status varchar(50) DEFAULT NULL::character varying NULL,
	CONSTRAINT bank_loans_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_msisdn ON public.bank_loans USING btree (msisdn);


-- public.baseline_thresholds definition

-- Drop table

-- DROP TABLE public.baseline_thresholds;

CREATE TABLE public.baseline_thresholds (
	crop_name varchar NULL,
	varaity varchar NULL,
	"location" varchar NULL,
	ndvi_avg float8 NULL,
	gdd float8 NULL,
	partner_id varchar NULL
);


-- public.bat_farm_ndvi definition

-- Drop table

-- DROP TABLE public.bat_farm_ndvi;

CREATE TABLE public.bat_farm_ndvi (
	farm_id varchar NOT NULL,
	image_id varchar NULL,
	ndvi_avg float8 NULL,
	ndvi_min float8 NULL,
	ndvi_max float8 NULL,
	image_date date NOT NULL,
	cloud_cover float8 NULL,
	status text NULL,
	crop_variation varchar(20) NULL,
	crop_age int4 NULL,
	farm_score float8 NULL,
	CONSTRAINT bat_farm_ndvi_pkey PRIMARY KEY (farm_id, image_date)
);
CREATE INDEX idx_bat_ndvi_farm_id ON public.bat_farm_ndvi USING btree (farm_id);
CREATE INDEX idx_bat_ndvi_image_date ON public.bat_farm_ndvi USING btree (image_date);
CREATE INDEX idx_bat_ndvi_image_id ON public.bat_farm_ndvi USING btree (image_id);


-- public.bat_fcv_20250516 definition

-- Drop table

-- DROP TABLE public.bat_fcv_20250516;

CREATE TABLE public.bat_fcv_20250516 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac numeric NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area_ha float8 NULL,
	sowing_dt date NULL,
	harvest_dt date NULL,
	score float8 NULL,
	ndvi_avg float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	"valid" bool NULL,
	farm_id uuid DEFAULT gen_random_uuid() NULL,
	tile_id varchar(25) NULL,
	ndvi_dt date NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	CONSTRAINT bat_fcv_20250516_pkey PRIMARY KEY (gid)
);
CREATE INDEX bat_fcv_20250516_geom_idx ON public.bat_fcv_20250516 USING gist (geom);
CREATE INDEX idx_bat_fcv_district ON public.bat_fcv_20250516 USING btree (district);
CREATE INDEX idx_bat_fcv_geom ON public.bat_fcv_20250516 USING gist (geom);
CREATE INDEX idx_bat_fcv_id ON public.bat_fcv_20250516 USING btree (farm_id);
CREATE INDEX idx_bat_fcv_tehsil ON public.bat_fcv_20250516 USING btree (tehsil);
CREATE INDEX idx_bat_fcv_uc ON public.bat_fcv_20250516 USING btree (uc);


-- public.bat_final_gcs definition

-- Drop table

-- DROP TABLE public.bat_final_gcs;

CREATE TABLE public.bat_final_gcs (
	gid serial4 NOT NULL,
	area_ha float8 NULL,
	area_ac float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	sowing_dt date NULL,
	harvest_dt date NULL,
	score float8 NULL,
	ndvi_avg float8 NULL,
	id uuid NULL,
	CONSTRAINT bat_final_gcs_pkey PRIMARY KEY (gid)
);
CREATE INDEX bat_final_gcs_geom_idx ON public.bat_final_gcs USING gist (geom);


-- public.bat_yarhusain definition

-- Drop table

-- DROP TABLE public.bat_yarhusain;

CREATE TABLE public.bat_yarhusain (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area_ha float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	CONSTRAINT bat_yarhusain_id_uniq UNIQUE (id),
	CONSTRAINT bat_yarhusain_pkey PRIMARY KEY (gid)
);
CREATE INDEX bat_yarhusain_geom_idx ON public.bat_yarhusain USING gist (geom);
CREATE INDEX idx_bat_yarhusain_area_ha ON public.bat_yarhusain USING btree (area_ha);
CREATE INDEX idx_bat_yarhusain_geom ON public.bat_yarhusain USING gist (geom);
CREATE INDEX idx_bat_yarhusain_tehsil ON public.bat_yarhusain USING btree (tehsil);
CREATE INDEX idx_bat_yarhusain_uc ON public.bat_yarhusain USING btree (uc);


-- public.bhaira_circle_bounds definition

-- Drop table

-- DROP TABLE public.bhaira_circle_bounds;

CREATE TABLE public.bhaira_circle_bounds (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT bhaira_circle_bounds_pkey PRIMARY KEY (gid)
);
CREATE INDEX bhaira_circle_bounds_geom_idx ON public.bhaira_circle_bounds USING gist (geom);
CREATE INDEX idx_bhaira_circle_bounds_geom ON public.bhaira_circle_bounds USING gist (geom);


-- public.bhaira_circle_crop_data_v2 definition

-- Drop table

-- DROP TABLE public.bhaira_circle_crop_data_v2;

CREATE TABLE public.bhaira_circle_crop_data_v2 (
	gid int4 DEFAULT nextval('bhaira_circle_crop_data_gid_seq'::regclass) NOT NULL,
	crop_name varchar(50) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT bhaira_circle_crop_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX bhaira_circle_crop_data_geom_idx ON public.bhaira_circle_crop_data_v2 USING gist (geom);


-- public.bhalwal_fbs_withcrop_kharif25 definition

-- Drop table

-- DROP TABLE public.bhalwal_fbs_withcrop_kharif25;

CREATE TABLE public.bhalwal_fbs_withcrop_kharif25 (
	gid serial4 NOT NULL,
	fid float8 NULL,
	fid_1 float8 NULL,
	fid_12 float8 NULL,
	area numeric NULL,
	rabi25 varchar(80) NULL,
	kharif25 varchar(80) NULL,
	kharif_25n varchar(80) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT bhalwal_fbs_withcrop_kharif25_pkey PRIMARY KEY (gid)
);
CREATE INDEX bhalwal_fbs_withcrop_kharif25_geom_idx ON public.bhalwal_fbs_withcrop_kharif25 USING gist (geom);


-- public.bkk_faf_bank_farms_mat_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_faf_bank_farms_mat_vw;

CREATE FOREIGN TABLE public.bkk_faf_bank_farms_mat_vw (
	farm_id varchar NULL,
	farmer_name varchar NULL,
	profiled_by varchar NULL,
	agent_name varchar NULL,
	location_name varchar NULL,
	msisdn varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	shape public.geometry NULL,
	area float8 NULL,
	partner_id varchar NULL,
	circle_name varchar NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	district varchar NULL,
	mauza_name varchar NULL,
	soil_type varchar NULL,
	irrigation_source varchar NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'bkk_faf_bank_farms_mat_vw');


-- public.bkk_faf_farmers_global_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_faf_farmers_global_vw;

CREATE FOREIGN TABLE public.bkk_faf_farmers_global_vw (
	msisdn text NULL,
	cnic text NULL,
	"name" text NULL,
	email text NULL,
	location_name text NULL,
	address text NULL,
	status text NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	language_name text NULL,
	occupation text NULL,
	gender text NULL,
	dob date NULL,
	phone_type text NULL,
	profile_image text NULL,
	cnic_front_image text NULL,
	cnic_back_image text NULL,
	cnic_issue_date date NULL,
	last_sms_out_dt timestamp NULL,
	recent_activity_dt timestamp NULL,
	lat float8 NULL,
	lng float8 NULL
)
SERVER global_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'bkk_faf_farmers_global_vw');


-- public.bkk_faf_farmers_ogp_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_faf_farmers_ogp_vw;

CREATE FOREIGN TABLE public.bkk_faf_farmers_ogp_vw (
	msisdn text NULL,
	cnic text NULL,
	"name" text NULL,
	email text NULL,
	location_name text NULL,
	address text NULL,
	status text NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	language_name text NULL,
	occupation text NULL,
	gender text NULL,
	dob date NULL,
	phone_type text NULL,
	profile_image text NULL,
	cnic_front_image text NULL,
	cnic_back_image text NULL,
	cnic_issue_date date NULL,
	last_sms_out_dt timestamp NULL,
	recent_activity_dt timestamp NULL,
	lat float8 NULL,
	lng float8 NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'bkk_faf_farmers_ogp_vw');


-- public.bkk_faf_farms definition

-- Drop table

-- DROP TABLE public.bkk_faf_farms;

CREATE TABLE public.bkk_faf_farms (
	farmer_msisdn varchar(15) NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	agent_name varchar(60) NULL,
	agent_msisdn varchar(15) NULL,
	farm_title varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	location_name varchar NULL,
	crop_name varchar NULL,
	area numeric NULL,
	cnic varchar(15) NULL,
	gender varchar NULL,
	occupation varchar NULL,
	"language" varchar(60) NULL,
	phone_type varchar NULL,
	create_dt date NULL,
	update_dt date NULL,
	growth_stage varchar NULL,
	stage_date date NULL,
	shape public.geometry NULL,
	livestock text NULL,
	machineries text NULL
);
CREATE INDEX bkk_faf_farms_shape_idx ON public.bkk_faf_farms USING gist (shape);


-- public.bkk_faf_farms_v2 definition

-- Drop table

-- DROP TABLE public.bkk_faf_farms_v2;

CREATE TABLE public.bkk_faf_farms_v2 (
	msisdn varchar(15) NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	agent_name varchar(60) NULL,
	location_name varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	shape public.geometry NULL
);
CREATE INDEX bkk_faf_farms_v2_shape_idx ON public.bkk_faf_farms_v2 USING gist (shape);


-- public.bkk_faf_farms_v2_20220907 definition

-- Drop table

-- DROP TABLE public.bkk_faf_farms_v2_20220907;

CREATE TABLE public.bkk_faf_farms_v2_20220907 (
	msisdn varchar(15) NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	agent_name varchar(60) NULL,
	location_name varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	shape public.geometry NULL
);


-- public.bkk_faf_farms_v2_mat_vw_20230309 definition

-- Drop table

-- DROP TABLE public.bkk_faf_farms_v2_mat_vw_20230309;

CREATE TABLE public.bkk_faf_farms_v2_mat_vw_20230309 (
	msisdn varchar(15) NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	agent_name varchar(60) NULL,
	location_name varchar(254) NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	shape public.geometry NULL
);


-- public.bkk_faf_farms_v2_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_faf_farms_v2_vw;

CREATE FOREIGN TABLE public.bkk_faf_farms_v2_vw (
	msisdn varchar(15) OPTIONS(column_name 'msisdn') NULL,
	farmer_name varchar(60) OPTIONS(column_name 'farmer_name') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	agent_name varchar(60) OPTIONS(column_name 'agent_name') NULL,
	location_name varchar OPTIONS(column_name 'location_name') NULL,
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farm_crop_id varchar OPTIONS(column_name 'farm_crop_id') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	crop_name varchar OPTIONS(column_name 'crop_name') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	growth_stage_date date OPTIONS(column_name 'growth_stage_date') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	sync_id varchar NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'bkk_faf_farms_v2_vw');


-- public.bkk_faf_farms_v3_2_mat_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_faf_farms_v3_2_mat_vw;

CREATE FOREIGN TABLE public.bkk_faf_farms_v3_2_mat_vw (
	msisdn varchar OPTIONS(column_name 'msisdn') NULL,
	farmer_name varchar(60) OPTIONS(column_name 'farmer_name') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	agent_name varchar(60) OPTIONS(column_name 'agent_name') NULL,
	location_name varchar OPTIONS(column_name 'location_name') NULL,
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farm_crop_id varchar OPTIONS(column_name 'farm_crop_id') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	crop_name varchar OPTIONS(column_name 'crop_name') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	growth_stage_date date OPTIONS(column_name 'growth_stage_date') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	area numeric NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'bkk_faf_farms_v3_2_mat_vw');


-- public.bkk_faf_farms_v3_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_faf_farms_v3_vw;

CREATE FOREIGN TABLE public.bkk_faf_farms_v3_vw (
	msisdn varchar(255) OPTIONS(column_name 'msisdn') NULL,
	farmer_name varchar(60) OPTIONS(column_name 'farmer_name') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	agent_name varchar(60) OPTIONS(column_name 'agent_name') NULL,
	location_name varchar OPTIONS(column_name 'location_name') NULL,
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farm_crop_id varchar(255) OPTIONS(column_name 'farm_crop_id') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	crop_name varchar OPTIONS(column_name 'crop_name') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	growth_stage_date date OPTIONS(column_name 'growth_stage_date') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	shape public.geometry(geometry, 4326) OPTIONS(column_name 'shape') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'bkk_faf_farms_v3_vw');


-- public.bkk_faf_farms_v4 definition

-- Drop table

-- DROP TABLE public.bkk_faf_farms_v4;

CREATE TABLE public.bkk_faf_farms_v4 (
	msisdn varchar(15) NULL,
	farmer_name varchar(100) NULL,
	profiled_by varchar(100) NULL,
	agent_name varchar(100) NULL,
	location_name varchar(100) NULL,
	farm_title varchar(100) NULL,
	crop_name varchar(100) NULL,
	growth_stage varchar(50) NULL,
	growth_stage_date date NULL,
	create_dt timestamp DEFAULT now() NULL,
	update_dt timestamp DEFAULT now() NULL,
	area numeric(10, 2) NULL,
	shape public.geometry(polygon, 4326) NULL,
	farm_id text NULL,
	farm_crop_id text NULL,
	id int4 DEFAULT nextval('farm_data_id_seq'::regclass) NOT NULL,
	shape_changed bool NULL,
	soil_type varchar(255) NULL,
	irrigation_sources varchar(255) NULL,
	farmer_is_verified bool DEFAULT false NULL,
	farm_is_verified bool DEFAULT false NULL
);


-- public.bkk_faf_farms_vw_jk_farms_bk definition

-- Drop table

-- DROP TABLE public.bkk_faf_farms_vw_jk_farms_bk;

CREATE TABLE public.bkk_faf_farms_vw_jk_farms_bk (
	shape_wkt text NULL,
	msisdn varchar NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	agent_name varchar(60) NULL,
	location_name varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	shape public.geometry NULL,
	area numeric NULL
);


-- public.bkk_faf_partner_crops_baseline_threshold_v2 definition

-- Drop table

-- DROP TABLE public.bkk_faf_partner_crops_baseline_threshold_v2;

CREATE TABLE public.bkk_faf_partner_crops_baseline_threshold_v2 (
	farm_id varchar NOT NULL,
	image_date date NOT NULL,
	ndvi_avg float8 NULL,
	"type" varchar NULL,
	CONSTRAINT pk_farm_image PRIMARY KEY (farm_id, image_date)
);


-- public.bkk_faf_punjab_farms definition

-- Drop table

-- DROP TABLE public.bkk_faf_punjab_farms;

CREATE TABLE public.bkk_faf_punjab_farms (
	farm_id varchar NULL,
	shape public.geometry(multipolygon, 4326) NULL
);
CREATE INDEX idx_bkk_faf_punjab_farms_shape ON public.bkk_faf_punjab_farms USING gist (shape);


-- public.bkk_faf_punjab_flood_farms definition

-- Drop table

-- DROP TABLE public.bkk_faf_punjab_flood_farms;

CREATE TABLE public.bkk_faf_punjab_flood_farms (
	farm_id varchar NULL,
	shape public.geometry(multipolygon, 4326) NULL,
	gid int4 NULL,
	district varchar(50) NULL,
	province varchar(50) NULL,
	id float8 NULL
);
CREATE INDEX idx_bkk_faf_punjab_flood_farms_shape ON public.bkk_faf_punjab_flood_farms USING gist (shape);


-- public.bkk_farms definition

-- Drop table

-- DROP TABLE public.bkk_farms;

CREATE TABLE public.bkk_farms (
	farm_crop_id varchar NOT NULL,
	field_1 float8 NULL,
	surveyid float8 NULL,
	surveyno float8 NULL,
	passbookno varchar(254) NULL,
	growername varchar(254) NULL,
	loginname varchar(254) NULL,
	circlename varchar(254) NULL,
	villagenam varchar(254) NULL,
	surveydate varchar(24) NULL,
	post float8 NULL,
	area numeric NULL,
	murabba varchar(254) NULL,
	acre varchar(254) NULL,
	"disease%" varchar(254) NULL,
	cnicno varchar(254) NULL,
	manualarea numeric NULL,
	status varchar(254) NULL,
	diseasenam varchar(254) NULL,
	posteddate varchar(254) NULL,
	varietynam varchar(254) NULL,
	cordinate varchar(254) NULL,
	shape public.geometry NULL,
	cropname varchar NULL,
	msisdn varchar NULL,
	"source" varchar NULL,
	farm_title varchar NULL,
	CONSTRAINT csm1_org_pkey PRIMARY KEY (farm_crop_id)
);


-- public.bkk_field_survey_2024_mat_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.bkk_field_survey_2024_mat_vw;

CREATE FOREIGN TABLE public.bkk_field_survey_2024_mat_vw (
	msisdn varchar NULL,
	farmer_name varchar NULL,
	profiled_by varchar NULL,
	agent_name varchar NULL,
	location_name varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	shape public.geometry NULL,
	area numeric NULL,
	association text NULL,
	uc varchar NULL
)
SERVER local_gis_v3;


-- public.bkk_ndmi_back_up_geometries definition

-- Drop table

-- DROP TABLE public.bkk_ndmi_back_up_geometries;

CREATE TABLE public.bkk_ndmi_back_up_geometries (
	farm_crop_id text NULL,
	shape text NULL
);


-- public.bkk_ndvi_back_up_geometries definition

-- Drop table

-- DROP TABLE public.bkk_ndvi_back_up_geometries;

CREATE TABLE public.bkk_ndvi_back_up_geometries (
	farm_crop_id text NULL,
	shape text NULL
);


-- public.bkk_s2_projects definition

-- Drop table

-- DROP TABLE public.bkk_s2_projects;

CREATE TABLE public.bkk_s2_projects (
	gid int4 DEFAULT nextval('bkk_farms_s2_downloads_gid_seq'::regclass) NOT NULL,
	id float8 NULL,
	project varchar(100) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	status varchar NULL,
	CONSTRAINT bkk_farms_s2_downloads_pkey PRIMARY KEY (gid)
);
CREATE INDEX bkk_farms_s2_downloads_geom_idx ON public.bkk_s2_projects USING gist (geom);


-- public.bkk_survey_app_crops_data definition

-- Drop table

-- DROP TABLE public.bkk_survey_app_crops_data;

CREATE TABLE public.bkk_survey_app_crops_data (
	farm_id varchar(255) NULL,
	crop varchar(255) NULL,
	season varchar(255) NULL,
	variety varchar(255) NULL,
	farm_crop_id varchar(255) NULL
);
CREATE INDEX idx_bkk_crops_farm ON public.bkk_survey_app_crops_data USING btree (farm_id);
CREATE INDEX idx_crops_farm ON public.bkk_survey_app_crops_data USING btree (farm_id);


-- public.bkk_survey_app_data definition

-- Drop table

-- DROP TABLE public.bkk_survey_app_data;

CREATE TABLE public.bkk_survey_app_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	farm_id varchar(255) NULL,
	passbook_id varchar(255) NULL,
	status varchar(255) NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp(6) NULL,
	profiled_by varchar(225) NULL,
	area float8 NULL,
	shape_id varchar NULL,
	partner_id varchar NULL,
	variety varchar(255) NULL,
	shape public.geometry(geometry, 4326) NULL,
	circle_name varchar(255) NULL,
	CONSTRAINT farmer_farm_passbook_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_bkk_survey_app_data_partner_id ON public.bkk_survey_app_data USING btree (partner_id);
CREATE INDEX idx_bkk_survey_app_data_profiled_by ON public.bkk_survey_app_data USING btree (profiled_by);
CREATE INDEX idx_bkk_survey_app_data_profiled_by_create_dt ON public.bkk_survey_app_data USING btree (profiled_by, create_dt);
CREATE INDEX idx_bkk_survey_app_data_shape ON public.bkk_survey_app_data USING gist (shape);
CREATE INDEX idx_bkk_survey_app_data_shape_id ON public.bkk_survey_app_data USING btree (shape_id);
CREATE INDEX idx_bkk_survey_profiled_by ON public.bkk_survey_app_data USING btree (profiled_by);
CREATE INDEX idx_bkk_survey_shape_id ON public.bkk_survey_app_data USING btree (shape_id);
CREATE INDEX idx_surveyapp_geom ON public.bkk_survey_app_data USING gist (shape);

-- Table Triggers

create trigger trg_set_srid_4326 before
insert
    or
update
    on
    public.bkk_survey_app_data for each row execute function bkk_set_srid_4326();
create trigger trg_update_circle_name before
insert
    on
    public.bkk_survey_app_data for each row execute function update_bkk_survey_app_data_circle_name();


-- public.blocks_final definition

-- Drop table

-- DROP TABLE public.blocks_final;

CREATE TABLE public.blocks_final (
	gid serial4 NOT NULL,
	id float8 NULL,
	farm_title varchar(25) NULL,
	farmer_id varchar(20) NULL,
	"location" varchar(10) NULL,
	area_ac float8 NULL,
	crop varchar(10) NULL,
	lng float8 NULL,
	lat float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT blocks_final_pkey PRIMARY KEY (gid)
);
CREATE INDEX blocks_final_geom_idx ON public.blocks_final USING gist (geom);


-- public.brazil_assigned_data_20251215 definition

-- Drop table

-- DROP TABLE public.brazil_assigned_data_20251215;

CREATE TABLE public.brazil_assigned_data_20251215 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	msisdn varchar(15) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT brazil_assigned_data_20251215_pkey PRIMARY KEY (gid)
);
CREATE INDEX brazil_assigned_data_20251215_geom_idx ON public.brazil_assigned_data_20251215 USING gist (geom);


-- public.brazil_assigned_data_20251224 definition

-- Drop table

-- DROP TABLE public.brazil_assigned_data_20251224;

CREATE TABLE public.brazil_assigned_data_20251224 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	area_ha float8 NULL,
	msisdn varchar(15) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT brazil_assigned_data_20251224_pkey PRIMARY KEY (gid)
);
CREATE INDEX brazil_assigned_data_20251224_geom_idx ON public.brazil_assigned_data_20251224 USING gist (geom);


-- public.bulk_msg_logs definition

-- Drop table

-- DROP TABLE public.bulk_msg_logs;

CREATE TABLE public.bulk_msg_logs (
	log_id uuid DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	message text NULL,
	creation_date date NULL,
	schedule_date timestamp NULL,
	status varchar(10) NULL,
	approve_date date NULL,
	approved_by text NULL,
	user_id uuid NULL,
	partner_id uuid NULL,
	end_date timestamp NULL,
	CONSTRAINT bulk_msg_logs_pkey PRIMARY KEY (log_id)
);


-- public.bulk_msg_logs_v2 definition

-- Drop table

-- DROP TABLE public.bulk_msg_logs_v2;

CREATE TABLE public.bulk_msg_logs_v2 (
	log_id uuid DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	partner_id uuid NULL,
	login_id uuid NULL,
	message text NULL,
	msisdn text NULL,
	end_date date NULL,
	schedule_date date NULL,
	status varchar NULL,
	msisdn_count float8 NULL,
	create_date timestamptz NULL,
	category varchar NULL,
	CONSTRAINT bulk_msg_logs_v2_pkey PRIMARY KEY (log_id)
);


-- public.bulk_msg_logs_v2_temp definition

-- Drop table

-- DROP TABLE public.bulk_msg_logs_v2_temp;

CREATE TABLE public.bulk_msg_logs_v2_temp (
	log_id uuid NULL,
	partner_id uuid NULL,
	login_id uuid NULL,
	message text NULL,
	msisdn text NULL,
	end_date date NULL,
	schedule_date date NULL,
	status varchar NULL,
	msisdn_count float8 NULL,
	create_date date NULL,
	category varchar NULL
);


-- public.bulk_msg_phone_no definition

-- Drop table

-- DROP TABLE public.bulk_msg_phone_no;

CREATE TABLE public.bulk_msg_phone_no (
	msisdn numeric(12) NULL,
	"operator" varchar(50) NULL,
	log_id uuid NULL
);


-- public.calendar_stages definition

-- Drop table

-- DROP TABLE public.calendar_stages;

CREATE TABLE public.calendar_stages (
	stage varchar NULL,
	stage_id int8 NULL,
	description varchar NULL,
	crop_id varchar NULL,
	location_id varchar NULL,
	duration varchar NULL
);


-- public.carsaddha_pmi_temp definition

-- Drop table

-- DROP TABLE public.carsaddha_pmi_temp;

CREATE TABLE public.carsaddha_pmi_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	telephone float8 NULL,
	surveyor varchar(20) NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	uc varchar(10) NULL,
	tehsil varchar(10) NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	temp_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT carsaddha_pmi_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX carsaddha_pmi_temp_geom_idx ON public.carsaddha_pmi_temp USING gist (geom);


-- public.chiniot_circle_tmp definition

-- Drop table

-- DROP TABLE public.chiniot_circle_tmp;

CREATE TABLE public.chiniot_circle_tmp (
	gid serial4 NOT NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	uc varchar(20) NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	temp_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT chiniot_circle_tmp_pkey PRIMARY KEY (gid)
);
CREATE INDEX chiniot_circle_tmp_geom_idx ON public.chiniot_circle_tmp USING gist (geom);


-- public.chinot_digitize_part2 definition

-- Drop table

-- DROP TABLE public.chinot_digitize_part2;

CREATE TABLE public.chinot_digitize_part2 (
	gid int4 DEFAULT nextval('"chinot_complete_digitize_part 2_gid_seq"'::regclass) NOT NULL,
	fid numeric NULL,
	__gid varchar(254) NULL,
	sb_dt varchar(50) NULL,
	qa_by varchar(50) NULL,
	area_ac float8 NULL,
	area float8 NULL,
	digitizer varchar(50) NULL,
	approver varchar(50) NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT "chinot_complete_digitize_part 2_pkey" PRIMARY KEY (gid)
);
CREATE INDEX "chinot_complete_digitize_part 2_geom_idx" ON public.chinot_digitize_part2 USING gist (geom);


-- public.circlebounds_temp definition

-- Drop table

-- DROP TABLE public.circlebounds_temp;

CREATE TABLE public.circlebounds_temp (
	gid serial4 NOT NULL,
	agent_name varchar(254) NULL,
	msisdn numeric NULL,
	unit bool NULL,
	area_ac numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT circlebounds_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX circlebounds_temp_geom_idx ON public.circlebounds_temp USING gist (geom);


-- public.classification_assigned_data definition

-- Drop table

-- DROP TABLE public.classification_assigned_data;

CREATE TABLE public.classification_assigned_data (
	temp_id uuid DEFAULT gen_random_uuid() NOT NULL,
	uc varchar NULL,
	tehsil varchar NULL,
	district varchar NULL,
	geom public.geometry NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	mouza varchar NULL,
	crop varchar NULL,
	assigned bool DEFAULT false NULL,
	test_check int4 NULL,
	agent_number varchar NULL,
	CONSTRAINT classification_assigned_data_pkey PRIMARY KEY (temp_id)
);


-- public.classification_rabi_24 definition

-- Drop table

-- DROP TABLE public.classification_rabi_24;

CREATE TABLE public.classification_rabi_24 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area_ac numeric NULL,
	crop varchar(10) NULL,
	mean_ndvi numeric NULL,
	quality varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	district text NULL
);
CREATE INDEX classification_rabi_24_geom_idx ON public.classification_rabi_24 USING gist (geom);


-- public.classification_samples_multan_2025 definition

-- Drop table

-- DROP TABLE public.classification_samples_multan_2025;

CREATE TABLE public.classification_samples_multan_2025 (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmcrop_i varchar(254) NULL,
	farmer_id numeric NULL,
	profiled_b numeric NULL,
	farmer_sta varchar(254) NULL,
	land_area varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	shape_id varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_seaso varchar(254) NULL,
	title varchar(254) NULL,
	shape varchar(254) NULL,
	profile_im varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	lat numeric NULL,
	lng numeric NULL,
	growth_sta varchar(254) NULL,
	gs_date date NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT classification_samples_multan_2025_pkey PRIMARY KEY (gid)
);
CREATE INDEX classification_samples_multan_2025_geom_idx ON public.classification_samples_multan_2025 USING gist (geom);


-- public.classification_samples_multan_2025_v2 definition

-- Drop table

-- DROP TABLE public.classification_samples_multan_2025_v2;

CREATE TABLE public.classification_samples_multan_2025_v2 (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmcrop_i varchar(254) NULL,
	farmer_id numeric NULL,
	profiled_b numeric NULL,
	farmer_sta varchar(254) NULL,
	land_area varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	shape_id varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_seaso varchar(254) NULL,
	title varchar(254) NULL,
	shape varchar(254) NULL,
	profile_im varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	lat numeric NULL,
	lng numeric NULL,
	growth_sta varchar(254) NULL,
	gs_date date NULL,
	qa_status varchar(254) NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	qa_by varchar(254) NULL,
	qa_date varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT classification_samples_multan_2025_v2_pkey PRIMARY KEY (gid)
);
CREATE INDEX classification_samples_multan_2025_v2_geom_idx ON public.classification_samples_multan_2025_v2 USING gist (geom);


-- public.classified_digitized_sgd definition

-- Drop table

-- DROP TABLE public.classified_digitized_sgd;

CREATE TABLE public.classified_digitized_sgd (
	gid serial4 NOT NULL,
	__gid varchar(254) NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area numeric NULL,
	area_ac float8 NULL,
	crop varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT classified_digitized_sgd_pkey PRIMARY KEY (gid)
);
CREATE INDEX classified_digitized_sgd_geom_idx ON public.classified_digitized_sgd USING gist (geom);


-- public.code_date_time definition

-- Drop table

-- DROP TABLE public.code_date_time;

CREATE TABLE public.code_date_time (
	date_of_latest_raster date NOT NULL,
	run_time float8 NULL,
	code_type varchar NOT NULL,
	"data" varchar NOT NULL,
	date_on_which_code_run date NULL,
	CONSTRAINT code_date_time_pkey PRIMARY KEY (date_of_latest_raster, code_type, data)
);


-- public.collecteddatasctype definition

-- Drop table

-- DROP TABLE public.collecteddatasctype;

CREATE TABLE public.collecteddatasctype (
	passbook_no text NULL,
	circle text NULL,
	village text NULL,
	grower_name text NULL,
	farm_id text NULL,
	farmcrop_id text NULL,
	crop text NULL,
	variety text NULL,
	seed_type text NULL,
	"type" text NULL,
	sugarcane_type text NULL,
	area_acres text NULL,
	images text NULL,
	create_dt text NULL,
	farm_locatio text NULL,
	shape text NULL
);


-- public.contact_info1 definition

-- Drop table

-- DROP TABLE public.contact_info1;

CREATE TABLE public.contact_info1 (
	srno varchar(255) NULL,
	division varchar(255) NULL,
	district varchar(255) NULL,
	tehsil varchar(255) NULL,
	"name" varchar(255) NULL,
	pop varchar(255) NULL,
	msisdn varchar(255) NULL,
	mail varchar(255) NULL,
	father_name varchar(255) NULL
);


-- public.contact_submissions definition

-- Drop table

-- DROP TABLE public.contact_submissions;

CREATE TABLE public.contact_submissions (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	district varchar(100) NULL,
	email varchar(255) NOT NULL,
	contact_number varchar(20) NOT NULL,
	message text NOT NULL,
	schedule_date date NULL,
	submitted_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT contact_submissions_pkey PRIMARY KEY (id)
);


-- public.contactus definition

-- Drop table

-- DROP TABLE public.contactus;

CREATE TABLE public.contactus (
	ticket_id int8 DEFAULT nextval('contactuslogs_ticket_id_seq'::regclass) NULL,
	"name" varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	contact_number varchar(20) NOT NULL,
	subject text NOT NULL,
	create_date timestamptz NOT NULL,
	status varchar(255) DEFAULT 'Queued'::character varying NULL,
	partner_id uuid NULL,
	CONSTRAINT contactus_pkey PRIMARY KEY (email, subject, create_date)
);


-- public.contactuslogs definition

-- Drop table

-- DROP TABLE public.contactuslogs;

CREATE TABLE public.contactuslogs (
	ticket_id int8 NOT NULL,
	message text NOT NULL,
	"date" timestamp DEFAULT timezone('Asia/Karachi'::text, timezone('UTC'::text, CURRENT_TIMESTAMP)) NOT NULL,
	sender varchar(255) NOT NULL,
	CONSTRAINT contactuslogs_pkey PRIMARY KEY (ticket_id, message, date)
);


-- public.crop_condition_validation definition

-- Drop table

-- DROP TABLE public.crop_condition_validation;

CREATE TABLE public.crop_condition_validation (
	gid serial4 NOT NULL,
	msisdn varchar(15) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	crop varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT crop_condition_validation_pkey PRIMARY KEY (gid)
);
CREATE INDEX crop_condition_validation_geom_idx ON public.crop_condition_validation USING gist (geom);


-- public.crop_life_cycle definition

-- Drop table

-- DROP FOREIGN TABLE public.crop_life_cycle;

CREATE FOREIGN TABLE public.crop_life_cycle (
	crop_name varchar NULL,
	crop_age int4 NULL,
	mean_ndvi float8 NULL,
	max_ndvi float8 NULL,
	min_ndvi float8 NULL,
	"location" varchar NULL,
	gdd float8 NULL
)
SERVER local_gis_v3;


-- public.crop_names definition

-- Drop table

-- DROP TABLE public.crop_names;

CREATE TABLE public.crop_names (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmer_nam varchar(254) NULL,
	profiled_b varchar(254) NULL,
	agent_name varchar(254) NULL,
	location_n varchar(254) NULL,
	msisdn numeric NULL,
	farm_crop_ varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	growth_sta varchar(254) NULL,
	growth_s_1 varchar(254) NULL,
	create_dt varchar(254) NULL,
	update_dt varchar(254) NULL,
	shape varchar(254) NULL,
	area numeric NULL,
	partner_id varchar(254) NULL,
	circle_nam varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	district varchar(254) NULL,
	mauza_name varchar(254) NULL,
	___majority numeric NULL,
	crop varchar(100) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT crop_names_pkey PRIMARY KEY (gid)
);
CREATE INDEX crop_names_geom_idx ON public.crop_names USING gist (geom);


-- public.crop_season_ogp definition

-- Drop table

-- DROP FOREIGN TABLE public.crop_season_ogp;

CREATE FOREIGN TABLE public.crop_season_ogp (
	id varchar(225) DEFAULT uuid_generate_v4() NOT NULL,
	title varchar(255) NULL,
	title_urdu varchar(255) NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	crop_id varchar(255) NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'crop_season');


-- public.crops definition

-- Drop table

-- DROP FOREIGN TABLE public.crops;

CREATE FOREIGN TABLE public.crops (
	crop_type varchar(255) OPTIONS(column_name 'crop_type') NULL,
	image_url varchar(255) OPTIONS(column_name 'image_url') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	name_alt varchar(255) OPTIONS(column_name 'name_alt') NULL,
	content_id int8 OPTIONS(column_name 'content_id') NOT NULL,
	title varchar OPTIONS(column_name 'title') NOT NULL,
	id int8 OPTIONS(column_name 'id') NOT NULL,
	title_urdu varchar OPTIONS(column_name 'title_urdu') NULL,
	status bool OPTIONS(column_name 'status') NULL,
	"order" int4 OPTIONS(column_name 'order') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'crops');


-- public.crops_global definition

-- Drop table

-- DROP FOREIGN TABLE public.crops_global;

CREATE FOREIGN TABLE public.crops_global (
	crop_type varchar(255) NULL,
	image_url varchar(255) NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp(6) NULL,
	name_alt varchar(255) NULL,
	content_id varchar(255) NULL,
	title varchar NOT NULL,
	id varchar(255) DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	title_urdu varchar NULL,
	status bool NULL,
	"order" int4 NULL,
	guid varchar(255) DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	app_data bool NULL
)
SERVER global_bkk_v2_live
OPTIONS (table_name 'crops');


-- public.crops_ndvi_translation definition

-- Drop table

-- DROP TABLE public.crops_ndvi_translation;

CREATE TABLE public.crops_ndvi_translation (
	crop_name varchar(50) NOT NULL,
	crop_stage varchar(50) NOT NULL,
	start_day int4 NOT NULL,
	end_day int4 NOT NULL,
	min_ndvi float8 NOT NULL,
	max_ndvi float8 NOT NULL,
	CONSTRAINT crops_ndvi_translation_pkey PRIMARY KEY (crop_name, crop_stage)
);


-- public.crops_ndvi_translation_v2 definition

-- Drop table

-- DROP TABLE public.crops_ndvi_translation_v2;

CREATE TABLE public.crops_ndvi_translation_v2 (
	"index" int8 NULL,
	crop_name text NULL,
	growth_stage text NULL,
	start_day int8 NULL,
	end_day int8 NULL,
	min_ndvi float8 NULL,
	max_ndvi float8 NULL,
	stress text NULL,
	narration_english text NULL,
	narration_urdu text NULL,
	generic_narration_english text NULL,
	generic_narration_urdu text NULL,
	ndvi_trend text NULL
);
CREATE INDEX ix_crops_ndvi_translation_v2_index ON public.crops_ndvi_translation_v2 USING btree (index);


-- public.crops_ogp definition

-- Drop table

-- DROP FOREIGN TABLE public.crops_ogp;

CREATE FOREIGN TABLE public.crops_ogp (
	crop_type varchar(255) NULL,
	image_url varchar(255) NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp(6) NULL,
	name_alt varchar(255) NULL,
	content_id varchar(255) NULL,
	title varchar NOT NULL,
	id varchar(255) DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	title_urdu varchar NULL,
	status bool NULL,
	"order" int4 NULL,
	guid varchar(255) DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	app_data bool NULL,
	advisory int2 DEFAULT 0 NOT NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'crops');


-- public.csm1_20221110_v2 definition

-- Drop table

-- DROP TABLE public.csm1_20221110_v2;

CREATE TABLE public.csm1_20221110_v2 (
	"GrowerId" int4 NULL,
	"SurveyId" int4 NULL,
	"PassBookNo" varchar NULL,
	msisdn float8 NULL,
	lat float8 NULL,
	lng float8 NULL,
	"name" varchar NULL,
	cnic varchar NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	farm_shape public.geometry(multipolygon, 4326) NULL,
	farm_land_area varchar NULL,
	gender varchar NULL,
	occupation varchar NULL,
	farm_crop varchar NULL,
	"language" varchar NULL,
	shape public.geometry NULL
);
CREATE INDEX idx_csm1_20221110_v2_growerid ON public.csm1_20221110_v2 USING btree ("GrowerId");
CREATE INDEX idx_csm1_20221110_v2_passbookno ON public.csm1_20221110_v2 USING btree ("PassBookNo");
CREATE INDEX idx_csm1_20221110_v2_shape ON public.csm1_20221110_v2 USING btree (shape);
CREATE INDEX idx_csm1_20221110_v2_surveyid ON public.csm1_20221110_v2 USING btree ("SurveyId");


-- public.csm1_20221110_v3 definition

-- Drop table

-- DROP TABLE public.csm1_20221110_v3;

CREATE TABLE public.csm1_20221110_v3 (
	"GrowerId" int4 NULL,
	"SurveyId" int4 NULL,
	"PassBookNo" varchar NULL,
	msisdn float8 NULL,
	lat float8 NULL,
	lng float8 NULL,
	"name" varchar NULL,
	cnic varchar NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	farm_shape public.geometry(multipolygon, 4326) NULL,
	farm_land_area varchar NULL,
	gender varchar NULL,
	occupation varchar NULL,
	farm_crop varchar NULL,
	"language" varchar NULL
);


-- public.csm1_common_grower_id definition

-- Drop table

-- DROP TABLE public.csm1_common_grower_id;

CREATE TABLE public.csm1_common_grower_id (
	grower_id varchar NULL,
	"source" varchar NULL
);


-- public.csm2_20221110_v2 definition

-- Drop table

-- DROP TABLE public.csm2_20221110_v2;

CREATE TABLE public.csm2_20221110_v2 (
	"GrowerId" int4 NULL,
	"SurveyId" int4 NULL,
	"PassBookNo" varchar NULL,
	msisdn varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	"name" varchar NULL,
	cnic varchar NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	farm_shape public.geometry(multipolygon, 4326) NULL,
	farm_land_area varchar NULL,
	gender varchar NULL,
	occupation varchar NULL,
	farm_crop varchar NULL,
	"language" varchar NULL,
	shape public.geometry NULL
);
CREATE INDEX idx_csm2_20221110_v2_growerid ON public.csm2_20221110_v2 USING btree ("GrowerId");
CREATE INDEX idx_csm2_20221110_v2_passbookno ON public.csm2_20221110_v2 USING btree ("PassBookNo");
CREATE INDEX idx_csm2_20221110_v2_shape ON public.csm2_20221110_v2 USING btree (shape);
CREATE INDEX idx_csm2_20221110_v2_surveyid ON public.csm2_20221110_v2 USING btree ("SurveyId");


-- public.csm2_20221110_v3 definition

-- Drop table

-- DROP TABLE public.csm2_20221110_v3;

CREATE TABLE public.csm2_20221110_v3 (
	"GrowerId" int4 NULL,
	"SurveyId" int4 NULL,
	"PassBookNo" varchar NULL,
	msisdn varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	"name" varchar NULL,
	cnic varchar NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	farm_shape public.geometry(multipolygon, 4326) NULL,
	farm_land_area varchar NULL,
	gender varchar NULL,
	occupation varchar NULL,
	farm_crop varchar NULL,
	"language" varchar NULL
);


-- public.csm2_digitized_20230519 definition

-- Drop table

-- DROP TABLE public.csm2_digitized_20230519;

CREATE TABLE public.csm2_digitized_20230519 (
	gid serial4 NOT NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm2_digitized_20230519_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm2_digitized_20230519_geom_idx ON public.csm2_digitized_20230519 USING gist (geom);


-- public.csm_1_ch definition

-- Drop table

-- DROP TABLE public.csm_1_ch;

CREATE TABLE public.csm_1_ch (
	surveyid float8 NULL,
	geom public.geometry NULL,
	tot int8 NULL
);


-- public.csm_boundaries definition

-- Drop table

-- DROP TABLE public.csm_boundaries;

CREATE TABLE public.csm_boundaries (
	gid serial4 NOT NULL,
	id float8 NULL,
	area numeric NULL,
	"name" varchar(20) NULL,
	unit varchar(10) NULL,
	cultivated float8 NULL,
	"type" varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_boundaries_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_boundaries_geom_idx ON public.csm_boundaries USING gist (geom);


-- public.csm_boundary_temp definition

-- Drop table

-- DROP TABLE public.csm_boundary_temp;

CREATE TABLE public.csm_boundary_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	area numeric NULL,
	"name" varchar(20) NULL,
	unit varchar(10) NULL,
	cultivated float8 NULL,
	"type" varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_boundary_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_boundary_temp_geom_idx ON public.csm_boundary_temp USING gist (geom);


-- public.csm_circle_harvest definition

-- Drop table

-- DROP TABLE public.csm_circle_harvest;

CREATE TABLE public.csm_circle_harvest (
	"index" int8 NULL,
	sr_no int8 NULL,
	circle_name text NULL,
	farms_csm int8 NULL,
	farm_area_csm float8 NULL,
	farm_classified int8 NULL,
	farm_area_classified float8 NULL,
	non_sc_farms_classified int8 NULL,
	non_sc_farms_area_classified float8 NULL,
	"date" text NULL,
	harvested float8 NULL,
	balance float8 NULL,
	company int8 NULL
);
CREATE INDEX ix_csm_circle_harvest_index ON public.csm_circle_harvest USING btree (index);


-- public.csm_circles_20230627 definition

-- Drop table

-- DROP TABLE public.csm_circles_20230627;

CREATE TABLE public.csm_circles_20230627 (
	gid serial4 NOT NULL,
	id float8 NULL,
	"name" varchar(80) NULL,
	unit varchar(10) NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_circles_20230627_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_circles_20230627_geom_idx ON public.csm_circles_20230627 USING gist (geom);


-- public.csm_data_comparison definition

-- Drop table

-- DROP TABLE public.csm_data_comparison;

CREATE TABLE public.csm_data_comparison (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	growerid float8 NULL,
	phonenumbe numeric NULL,
	"name" varchar(254) NULL,
	surveyid float8 NULL,
	passbookno varchar(254) NULL,
	cnic varchar(254) NULL,
	"type" varchar(254) NULL,
	vareity varchar(254) NULL,
	circleid float8 NULL,
	villagenam varchar(254) NULL,
	company_id float8 NULL,
	circlename varchar(254) NULL,
	total_area numeric NULL,
	current_ty varchar(10) NULL,
	current_ar float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_data_comparison_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_data_comparison_geom_idx ON public.csm_data_comparison USING gist (geom);


-- public.csm_data_db definition

-- Drop table

-- DROP TABLE public.csm_data_db;

CREATE TABLE public.csm_data_db (
	"SurveyId" int4 NULL,
	"SeasonId" varchar NULL,
	"SurveyDate" varchar NULL,
	"GrowerId" int4 NULL,
	"UserId" varchar NULL,
	"VarietyId" varchar NULL,
	"Remarks" varchar NULL,
	"Image1" varchar NULL,
	"Image2" varchar NULL,
	"Image3" varchar NULL,
	"Image4" varchar NULL,
	"Feb" varchar NULL,
	"Sep" varchar NULL,
	"Ratoon" varchar NULL,
	"Height" varchar NULL,
	"Recovery" varchar NULL,
	"Post" varchar NULL,
	"Area" varchar NULL,
	"SurveyNo" varchar NULL,
	"Company_Id" varchar NULL,
	"DiseaseId" varchar NULL,
	"DiseasePer" varchar NULL,
	"NoOfVarity" varchar NULL,
	"IMEI" varchar NULL,
	"May" varchar NULL,
	"CreatedById" varchar NULL,
	"CreationDate" varchar NULL,
	"ModifiedById" varchar NULL,
	"ModificationDate" varchar NULL,
	"FieldId" varchar NULL,
	"Cancel" varchar NULL,
	"CancelById" varchar NULL,
	"CancelDate" varchar NULL,
	"CircleId" varchar NULL,
	"VillageId" varchar NULL,
	"CancelRemarks" varchar NULL,
	"PostedById" varchar NULL,
	"PostedDate" varchar NULL,
	"SpecialApproved" varchar NULL,
	"UnPostedById" varchar NULL,
	"UnPostedDate" varchar NULL,
	"OwnLand" varchar NULL,
	"LeaseLand" varchar NULL,
	"SoilTextureId" varchar NULL,
	"WaterSourceId" varchar NULL,
	"SoilPHId" varchar NULL,
	"CaneCroppedArea" varchar NULL,
	"OrganicMattersId" varchar NULL,
	"TransportModeId" varchar NULL,
	"ExpectedSugarcaneSupplyPer" varchar NULL,
	"sDate" varchar NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	farm_crop varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	type_id int8 NULL,
	variety_id int8 NULL,
	"type" varchar NULL,
	variety varchar NULL,
	shape public.geometry NULL,
	village varchar NULL,
	circle varchar NULL
);


-- public.csm_data_db_ids definition

-- Drop table

-- DROP TABLE public.csm_data_db_ids;

CREATE TABLE public.csm_data_db_ids (
	"SurveyId" int4 NULL,
	"SeasonId" varchar NULL,
	"SurveyDate" varchar NULL,
	"GrowerId" int4 NULL,
	"UserId" varchar NULL,
	"VarietyId" varchar NULL,
	"Remarks" varchar NULL,
	"Image1" varchar NULL,
	"Image2" varchar NULL,
	"Image3" varchar NULL,
	"Image4" varchar NULL,
	"Feb" varchar NULL,
	"Sep" varchar NULL,
	"Ratoon" varchar NULL,
	"Height" varchar NULL,
	"Recovery" varchar NULL,
	"Post" varchar NULL,
	"Area" varchar NULL,
	"SurveyNo" varchar NULL,
	"Company_Id" varchar NULL,
	"DiseaseId" varchar NULL,
	"DiseasePer" varchar NULL,
	"NoOfVarity" varchar NULL,
	"IMEI" varchar NULL,
	"May" varchar NULL,
	"CreatedById" varchar NULL,
	"CreationDate" varchar NULL,
	"ModifiedById" varchar NULL,
	"ModificationDate" varchar NULL,
	"FieldId" varchar NULL,
	"Cancel" varchar NULL,
	"CancelById" varchar NULL,
	"CancelDate" varchar NULL,
	"CancelRemarks" varchar NULL,
	"PostedById" varchar NULL,
	"PostedDate" varchar NULL,
	"SpecialApproved" varchar NULL,
	"UnPostedById" varchar NULL,
	"UnPostedDate" varchar NULL,
	"OwnLand" varchar NULL,
	"LeaseLand" varchar NULL,
	"SoilTextureId" varchar NULL,
	"WaterSourceId" varchar NULL,
	"SoilPHId" varchar NULL,
	"CaneCroppedArea" varchar NULL,
	"OrganicMattersId" varchar NULL,
	"TransportModeId" varchar NULL,
	"ExpectedSugarcaneSupplyPer" varchar NULL,
	"sDate" varchar NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	farm_crop varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	type_id int8 NULL,
	varaity_id int8 NULL,
	"type" varchar NULL,
	vareity varchar NULL,
	"VillageId" int8 NULL,
	"CircleId" int8 NULL,
	"VillageName" text NULL,
	"Company_id" int8 NULL,
	"CircleName" text NULL,
	status serial4 NOT NULL
);


-- public.csm_data_db_ids_q definition

-- Drop table

-- DROP TABLE public.csm_data_db_ids_q;

CREATE TABLE public.csm_data_db_ids_q (

);


-- public.csm_data_db_ids_temp definition

-- Drop table

-- DROP TABLE public.csm_data_db_ids_temp;

CREATE TABLE public.csm_data_db_ids_temp (
	"SurveyId" int4 NULL,
	"SeasonId" varchar NULL,
	"SurveyDate" varchar NULL,
	"GrowerId" int4 NULL,
	"UserId" varchar NULL,
	"VarietyId" varchar NULL,
	"Remarks" varchar NULL,
	"Image1" varchar NULL,
	"Image2" varchar NULL,
	"Image3" varchar NULL,
	"Image4" varchar NULL,
	"Feb" varchar NULL,
	"Sep" varchar NULL,
	"Ratoon" varchar NULL,
	"Height" varchar NULL,
	"Recovery" varchar NULL,
	"Post" varchar NULL,
	"Area" varchar NULL,
	"SurveyNo" varchar NULL,
	"Company_Id" varchar NULL,
	"DiseaseId" varchar NULL,
	"DiseasePer" varchar NULL,
	"NoOfVarity" varchar NULL,
	"IMEI" varchar NULL,
	"May" varchar NULL,
	"CreatedById" varchar NULL,
	"CreationDate" varchar NULL,
	"ModifiedById" varchar NULL,
	"ModificationDate" varchar NULL,
	"FieldId" varchar NULL,
	"Cancel" varchar NULL,
	"CancelById" varchar NULL,
	"CancelDate" varchar NULL,
	"CancelRemarks" varchar NULL,
	"PostedById" varchar NULL,
	"PostedDate" varchar NULL,
	"SpecialApproved" varchar NULL,
	"UnPostedById" varchar NULL,
	"UnPostedDate" varchar NULL,
	"OwnLand" varchar NULL,
	"LeaseLand" varchar NULL,
	"SoilTextureId" varchar NULL,
	"WaterSourceId" varchar NULL,
	"SoilPHId" varchar NULL,
	"CaneCroppedArea" varchar NULL,
	"OrganicMattersId" varchar NULL,
	"TransportModeId" varchar NULL,
	"ExpectedSugarcaneSupplyPer" varchar NULL,
	"sDate" varchar NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	farm_crop varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	type_id int8 NULL,
	varaity_id int8 NULL,
	"type" varchar NULL,
	vareity varchar NULL,
	"VillageId" int8 NULL,
	"CircleId" int8 NULL,
	"VillageName" text NULL,
	"Company_id" int8 NULL,
	"CircleName" text NULL,
	status int4 NOT NULL,
	shape public.geometry NULL
);
CREATE INDEX idx_csm_data_db_ids_temp_geom ON public.csm_data_db_ids_temp USING btree (geom);
CREATE INDEX idx_csm_data_db_ids_temp_shape ON public.csm_data_db_ids_temp USING btree (shape);
CREATE INDEX idx_csm_data_db_ids_temp_surveyid ON public.csm_data_db_ids_temp USING btree ("SurveyId");
CREATE INDEX idx_csm_data_db_ids_temp_userid ON public.csm_data_db_ids_temp USING btree ("UserId");


-- public.csm_data_pbno definition

-- Drop table

-- DROP TABLE public.csm_data_pbno;

CREATE TABLE public.csm_data_pbno (
	"GrowerId" int4 NULL,
	"SurveyId" int4 NULL,
	"PassBookNo" varchar NULL,
	msisdn varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	"name" varchar NULL,
	cnic varchar NULL,
	farm_lat float8 NULL,
	farm_lng float8 NULL,
	farm_shape public.geometry(multipolygon, 4326) NULL,
	farm_land_area varchar NULL,
	gender varchar NULL,
	occupation varchar NULL,
	farm_crop varchar NULL,
	"language" varchar NULL,
	shape public.geometry NULL
);


-- public.csm_digitized_temp definition

-- Drop table

-- DROP TABLE public.csm_digitized_temp;

CREATE TABLE public.csm_digitized_temp (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	agent_msisdn varchar(15) NULL,
	temp_id varchar(20) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_digitized_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_digitized_temp_geom_idx ON public.csm_digitized_temp USING gist (geom);


-- public.csm_farms_harvested_ndvi definition

-- Drop table

-- DROP TABLE public.csm_farms_harvested_ndvi;

CREATE TABLE public.csm_farms_harvested_ndvi (
	"index" int8 NULL,
	farm_crop_id text NULL,
	"MaxHarvestP" float8 NULL
);
CREATE INDEX ix_csm_farms_harvested_ndvi_index ON public.csm_farms_harvested_ndvi USING btree (index);


-- public.csm_fharvest10032023 definition

-- Drop table

-- DROP TABLE public.csm_fharvest10032023;

CREATE TABLE public.csm_fharvest10032023 (
	gid serial4 NOT NULL,
	msisdn numeric NULL,
	farmer_nam varchar(254) NULL,
	profiled_b numeric NULL,
	agent_name varchar(254) NULL,
	location_n varchar(254) NULL,
	farm_id varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	growth_sta varchar(254) NULL,
	growth_s_1 varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(24) NULL,
	shape varchar(254) NULL,
	tested varchar(10) NULL,
	farm_area float8 NULL,
	___count numeric NULL,
	___sum numeric NULL,
	harvestp float8 NULL,
	villagenam varchar(254) NULL,
	circlename varchar(254) NULL,
	total_area numeric NULL,
	prevharves varchar(254) NULL,
	lp_harvest float8 NULL,
	lp_balance float8 NULL,
	la_harvest float8 NULL,
	la_balance float8 NULL,
	"date" date NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_fharvest10032023_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_fharvest10032023_geom_idx ON public.csm_fharvest10032023 USING gist (geom);


-- public.csm_fharvest28022023 definition

-- Drop table

-- DROP TABLE public.csm_fharvest28022023;

CREATE TABLE public.csm_fharvest28022023 (
	gid serial4 NOT NULL,
	msisdn numeric NULL,
	farmer_nam varchar(254) NULL,
	profiled_b numeric NULL,
	agent_name varchar(254) NULL,
	location_n varchar(254) NULL,
	farm_id varchar(254) NULL,
	farm_crop_id varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	farm_area float8 NULL,
	___count numeric NULL,
	___sum numeric NULL,
	harvestp float8 NULL,
	villagenam varchar(254) NULL,
	circlename varchar(254) NULL,
	prevharves varchar(254) NULL,
	p_harvest float8 NULL,
	p_balance float8 NULL,
	a_harvest float8 NULL,
	a_balance float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_fharvest28022023_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_fharvest28022023_geom_idx ON public.csm_fharvest28022023 USING gist (geom);


-- public.csm_operator_type definition

-- Drop table

-- DROP TABLE public.csm_operator_type;

CREATE TABLE public.csm_operator_type (
	id serial4 NOT NULL,
	"operator" varchar NULL,
	"type" varchar NULL,
	msisdn int8 NULL,
	CONSTRAINT csm_operator_type_pkey PRIMARY KEY (id)
);


-- public.csm_superset_20230627 definition

-- Drop table

-- DROP TABLE public.csm_superset_20230627;

CREATE TABLE public.csm_superset_20230627 (
	gid serial4 NOT NULL,
	objectid float8 NULL,
	area numeric NULL,
	"name" varchar(80) NULL,
	unit varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT csm_superset_20230627_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_superset_20230627_geom_idx ON public.csm_superset_20230627 USING gist (geom);


-- public.csm_vertices definition

-- Drop table

-- DROP TABLE public.csm_vertices;

CREATE TABLE public.csm_vertices (
	gid serial4 NOT NULL,
	field_1 float8 NULL,
	surveyid float8 NULL,
	surveyno float8 NULL,
	passbookno varchar(254) NULL,
	growername varchar(254) NULL,
	loginname varchar(254) NULL,
	circlename varchar(254) NULL,
	villagenam varchar(254) NULL,
	surveydate varchar(24) NULL,
	post float8 NULL,
	area numeric NULL,
	murabba varchar(254) NULL,
	acre varchar(254) NULL,
	"disease%" varchar(254) NULL,
	cnicno varchar(254) NULL,
	manualarea numeric NULL,
	status varchar(254) NULL,
	diseasenam varchar(254) NULL,
	posteddate varchar(254) NULL,
	varietynam varchar(254) NULL,
	cordinate varchar(254) NULL,
	vertex_ind float8 NULL,
	vertex_par float8 NULL,
	vertex_p_1 float8 NULL,
	vertex_p_2 float8 NULL,
	distance numeric NULL,
	angle numeric NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT csm_vertices_pkey PRIMARY KEY (gid)
);
CREATE INDEX csm_vertices_geom_idx ON public.csm_vertices USING gist (geom);


-- public.custom_geom definition

-- Drop table

-- DROP TABLE public.custom_geom;

CREATE TABLE public.custom_geom (
	gid serial4 NOT NULL,
	circle_name varchar(50) NULL,
	area float8 NULL,
	partner_id varchar(100) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	text_geom text NULL,
	"order" int4 NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	CONSTRAINT custom_geom_pkey PRIMARY KEY (id)
);
CREATE INDEX custom_geom_geom_idx ON public.custom_geom USING gist (geom);
CREATE INDEX custom_geom_geom_idx1 ON public.custom_geom USING gist (geom);
CREATE INDEX idx_custom_geom ON public.custom_geom USING gist (geom);
CREATE INDEX idx_custom_geom_geom ON public.custom_geom USING gist (geom);
CREATE INDEX idx_custom_geom_name ON public.custom_geom USING btree (circle_name);


-- public."data" definition

-- Drop table

-- DROP TABLE public."data";

CREATE TABLE public."data" (

);


-- public.demo_data definition

-- Drop table

-- DROP TABLE public.demo_data;

CREATE TABLE public.demo_data (
	farm_id text NULL,
	crop_name float8 NULL,
	sowing_date text NULL,
	harvest_date text NULL
);


-- public.dig_merged_temp definition

-- Drop table

-- DROP TABLE public.dig_merged_temp;

CREATE TABLE public.dig_merged_temp (
	gid serial4 NOT NULL,
	uc varchar(80) NULL,
	tehsil varchar(80) NULL,
	district varchar(80) NULL,
	province varchar(80) NULL,
	approver varchar(50) NULL,
	digitizer varchar(50) NULL,
	qa_by varchar(50) NULL,
	sb_dt varchar(50) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT dig_merged_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX dig_merged_temp_geom_idx ON public.dig_merged_temp USING gist (geom);


-- public.digitization_project definition

-- Drop table

-- DROP TABLE public.digitization_project;

CREATE TABLE public.digitization_project (
	id serial4 NOT NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	cat int4 NULL,
	CONSTRAINT digitization_project_pkey PRIMARY KEY (id)
);
CREATE INDEX sidx_digitization_project_geom ON public.digitization_project USING gist (geom);


-- public.digitized_classified_crops definition

-- Drop table

-- DROP TABLE public.digitized_classified_crops;

CREATE TABLE public.digitized_classified_crops (
	season varchar(50) NOT NULL,
	"year" int4 NOT NULL,
	crop varchar(100) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	district varchar(255) DEFAULT 'Unknown'::character varying NULL,
	id uuid NULL
);
CREATE INDEX idx_classified_crops_crop_year ON public.digitized_classified_crops USING btree (crop, year);
CREATE INDEX idx_classified_crops_id ON public.digitized_classified_crops USING btree (id);
CREATE INDEX idx_digitized_classified_crops_year ON public.digitized_classified_crops USING btree (year);


-- public.digitized_data definition

-- Drop table

-- DROP TABLE public.digitized_data;

CREATE TABLE public.digitized_data (
	gid serial4 NOT NULL,
	uc varchar(80) NULL,
	tehsil varchar(80) NULL,
	district varchar(80) NULL,
	province varchar(80) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	digitizer varchar(50) NULL,
	qa_by varchar(50) NULL,
	approver varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	submission_dt date NULL,
	crop_rabi_24 varchar(50) NULL,
	crop_kharif_24 varchar(50) NULL,
	rabi_crop24_quality varchar(50) NULL,
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	mouza varchar(50) NULL,
	CONSTRAINT digitized_data_pkey PRIMARY KEY (gid),
	CONSTRAINT unique_id UNIQUE (id)
);
CREATE INDEX idx_digitized_data_area_ac ON public.digitized_data USING btree (area_ac);
CREATE INDEX idx_digitized_data_district ON public.digitized_data USING btree (district);
CREATE INDEX idx_digitized_data_geom ON public.digitized_data USING gist (geom);
CREATE INDEX idx_digitized_data_id_uc ON public.digitized_data USING btree (id, uc);
CREATE INDEX idx_digitized_data_province ON public.digitized_data USING btree (province);
CREATE INDEX idx_digitized_data_tehsil ON public.digitized_data USING btree (tehsil);
CREATE INDEX idx_digitized_data_uc ON public.digitized_data USING btree (uc);


-- public.digitized_data_v1 definition

-- Drop table

-- DROP TABLE public.digitized_data_v1;

CREATE TABLE public.digitized_data_v1 (
	gid int4 NOT NULL,
	uc varchar(80) NULL,
	tehsil varchar(80) NULL,
	district varchar(80) NULL,
	province varchar(80) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	digitizer varchar(50) NULL,
	qa_by varchar(50) NULL,
	approver varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	create_dt timestamp NULL,
	submission_dt date NULL,
	crop_rabi_24 varchar(50) NULL,
	crop_kharif_24 varchar(50) NULL,
	rabi_crop24_quality varchar(50) NULL,
	CONSTRAINT pk_gid PRIMARY KEY (gid)
);
CREATE INDEX idxbtree_gid ON public.digitized_data_v1 USING hash (gid);


-- public.digitized_farm_ndvi definition

-- Drop table

-- DROP TABLE public.digitized_farm_ndvi;

CREATE TABLE public.digitized_farm_ndvi (
	farm_gid int4 NOT NULL,
	image_date date NOT NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL,
	status varchar(500) NULL,
	CONSTRAINT digitized_farm_ndvi_pk PRIMARY KEY (farm_gid, image_date)
);


-- public.dikhan_sc_stats definition

-- Drop table

-- DROP TABLE public.dikhan_sc_stats;

CREATE TABLE public.dikhan_sc_stats (
	id serial4 NOT NULL,
	district varchar(50) NULL,
	total_area float8 NULL,
	sugarcane_area float8 NULL,
	harvested float8 NULL,
	balance float8 NULL,
	"date" date NULL,
	"source" text NULL,
	CONSTRAINT dikhan_sc_stats_pkey PRIMARY KEY (id)
);


-- public.dikhancsmscarea definition

-- Drop table

-- DROP TABLE public.dikhancsmscarea;

CREATE TABLE public.dikhancsmscarea (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area numeric NULL,
	fid numeric NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	geom public.geometry(multipolygon, 3857) NULL,
	CONSTRAINT dikhancsmscarea_pkey PRIMARY KEY (gid)
);
CREATE INDEX dikhancsmscarea_geom_idx ON public.dikhancsmscarea USING gist (geom);


-- public.dissolved_regions definition

-- Drop table

-- DROP TABLE public.dissolved_regions;

CREATE TABLE public.dissolved_regions (
	gid serial4 NOT NULL,
	fid numeric NULL,
	cat float8 NULL,
	region_c varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT dissolved_regions_pkey PRIMARY KEY (gid)
);
CREATE INDEX dissolved_regions_geom_idx ON public.dissolved_regions USING gist (geom);


-- public.face_2025_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.face_2025_data_verification_vw;

CREATE FOREIGN TABLE public.face_2025_data_verification_vw (
	farm_id varchar NULL,
	farmcrop_id varchar NULL,
	farmer_id varchar NULL,
	profiled_by varchar NULL,
	farmer_status varchar NULL,
	land_area numeric NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	farm_title varchar NULL,
	shape_id varchar NULL,
	temp_id varchar NULL,
	crop_season varchar NULL,
	title varchar NULL,
	geom text NULL,
	shape public.geometry NULL,
	profile_image text NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	seed_type varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	growth_stage varchar NULL,
	gs_date date NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'face_2025_data_verification_vw');


-- public.face_2025_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.face_2025_images_vw;

CREATE FOREIGN TABLE public.face_2025_images_vw (
	farm_id varchar NULL,
	create_dt timestamp NULL,
	image text NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'face_2025_images_vw');


-- public.faf_mat_vw_bk definition

-- Drop table

-- DROP TABLE public.faf_mat_vw_bk;

CREATE TABLE public.faf_mat_vw_bk (
	msisdn varchar NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	agent_name varchar(60) NULL,
	location_name varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	shape public.geometry NULL,
	area numeric NULL
);


-- public.farm_activities definition

-- Drop table

-- DROP TABLE public.farm_activities;

CREATE TABLE public.farm_activities (
	farm_id uuid NOT NULL,
	activity_date date NOT NULL,
	activity_name varchar(100) NOT NULL,
	activity_description text NULL,
	CONSTRAINT farm_activities_pkey PRIMARY KEY (farm_id, activity_date, activity_name)
);


-- public.farm_activity_categories definition

-- Drop table

-- DROP TABLE public.farm_activity_categories;

CREATE TABLE public.farm_activity_categories (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	category_id serial4 NOT NULL,
	category_type varchar(255) NOT NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT farm_activity_categories_pkey PRIMARY KEY (id)
);


-- public.farm_crop_details definition

-- Drop table

-- DROP FOREIGN TABLE public.farm_crop_details;

CREATE FOREIGN TABLE public.farm_crop_details (
	farm_id varchar NOT NULL,
	sowing_date date NOT NULL,
	harvest_date date NULL,
	crop_name varchar(40) NULL,
	season varchar NULL,
	"year" int4 NULL,
	crop_id uuid NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'farm_crop_details');


-- public.farm_crop_growth_stages definition

-- Drop table

-- DROP FOREIGN TABLE public.farm_crop_growth_stages;

CREATE FOREIGN TABLE public.farm_crop_growth_stages (
	growth_stage_id int8 OPTIONS(column_name 'growth_stage_id') NOT NULL,
	"date" date OPTIONS(column_name 'date') NULL,
	description varchar OPTIONS(column_name 'description') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	id varchar OPTIONS(column_name 'id') NOT NULL,
	farm_crop_id varchar OPTIONS(column_name 'farm_crop_id') NOT NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farm_crop_growth_stages');


-- public.farm_ndmi definition

-- Drop table

-- DROP TABLE public.farm_ndmi;

CREATE TABLE public.farm_ndmi (
	farm_crop_id varchar NOT NULL,
	image_id varchar NOT NULL,
	"date" date NULL,
	ndmi_avg float8 NULL,
	ndmi_max float8 NULL,
	ndmi_min float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL,
	CONSTRAINT farm_ndmi_pkey PRIMARY KEY (farm_crop_id, image_id)
);
CREATE INDEX idx_farm_ndmi_date ON public.farm_ndmi USING btree (date);
CREATE INDEX idx_farm_ndmi_farm_crop_id ON public.farm_ndmi USING btree (farm_crop_id);
CREATE INDEX idx_farm_ndmi_image_id ON public.farm_ndmi USING btree (image_id);
CREATE INDEX idx_farm_ndmi_val ON public.farm_ndmi USING btree (val);


-- public.farm_ndmi_bk definition

-- Drop table

-- DROP TABLE public.farm_ndmi_bk;

CREATE TABLE public.farm_ndmi_bk (
	farm_crop_id varchar NULL,
	image_id varchar NULL,
	"date" date NULL,
	ndmi_avg float8 NULL,
	ndmi_max float8 NULL,
	ndmi_min float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL
);


-- public.farm_ndmi_v2 definition

-- Drop table

-- DROP TABLE public.farm_ndmi_v2;

CREATE TABLE public.farm_ndmi_v2 (
	farm_crop_id varchar NULL,
	range_minus1_to_minus05 float8 NULL,
	range_minus05_to_minus04 float8 NULL,
	range_minus04_to_minus03 float8 NULL,
	range_minus03_to_minus02 float8 NULL,
	range_minus02_to_minus01 float8 NULL,
	range_minus01_to_0 float8 NULL,
	range_0_to_01 float8 NULL,
	range_01_to_02 float8 NULL,
	range_02_to_03 float8 NULL,
	range_03_to_04 float8 NULL,
	range_04_to_05 float8 NULL,
	range_05_to_06 float8 NULL,
	range_06_to_07 float8 NULL,
	range_07_to_08 float8 NULL,
	range_08_to_09 float8 NULL,
	range_09_to_1 float8 NULL,
	image_id varchar NULL,
	"date" date NULL,
	ndmi_avg float8 NULL,
	ndmi_max float8 NULL,
	ndmi_min float8 NULL,
	image_path varchar NULL
);


-- public.farm_ndmi_v3 definition

-- Drop table

-- DROP FOREIGN TABLE public.farm_ndmi_v3;

CREATE FOREIGN TABLE public.farm_ndmi_v3 (
	farm_id varchar OPTIONS(column_name 'farm_id') NOT NULL,
	image_id varchar OPTIONS(column_name 'image_id') NULL,
	ndmi_avg float8 OPTIONS(column_name 'ndmi_avg') NULL,
	ndmi_min float8 OPTIONS(column_name 'ndmi_min') NULL,
	ndmi_max float8 OPTIONS(column_name 'ndmi_max') NULL,
	image_date date OPTIONS(column_name 'image_date') NOT NULL,
	cloud_cover float8 OPTIONS(column_name 'cloud_cover') NULL,
	range_1_09 float8 OPTIONS(column_name 'range_1_09') NULL,
	range_09_08 float8 OPTIONS(column_name 'range_09_08') NULL,
	range_08_07 float8 OPTIONS(column_name 'range_08_07') NULL,
	range_07_06 float8 OPTIONS(column_name 'range_07_06') NULL,
	range_06_05 float8 OPTIONS(column_name 'range_06_05') NULL,
	range_05_04 float8 OPTIONS(column_name 'range_05_04') NULL,
	range_04_03 float8 OPTIONS(column_name 'range_04_03') NULL,
	range_03_02 float8 OPTIONS(column_name 'range_03_02') NULL,
	range_02_01 float8 OPTIONS(column_name 'range_02_01') NULL,
	range_01_0 float8 OPTIONS(column_name 'range_01_0') NULL,
	range_0_01 float8 OPTIONS(column_name 'range_0_01') NULL,
	range_01_02 float8 OPTIONS(column_name 'range_01_02') NULL,
	range_02_03 float8 OPTIONS(column_name 'range_02_03') NULL,
	range_03_04 float8 OPTIONS(column_name 'range_03_04') NULL,
	range_04_05 float8 OPTIONS(column_name 'range_04_05') NULL,
	range_05_06 float8 OPTIONS(column_name 'range_05_06') NULL,
	range_06_07 float8 OPTIONS(column_name 'range_06_07') NULL,
	range_07_08 float8 OPTIONS(column_name 'range_07_08') NULL,
	range_08_09 float8 OPTIONS(column_name 'range_08_09') NULL,
	range_09_1 float8 OPTIONS(column_name 'range_09_1') NULL,
	ndmi_vector json OPTIONS(column_name 'ndmi_vector') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'farm_ndmi_v3');


-- public.farm_ndvi definition

-- Drop table

-- DROP TABLE public.farm_ndvi;

CREATE TABLE public.farm_ndvi (
	farm_crop_id varchar NOT NULL,
	image_id varchar NOT NULL,
	"date" date NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL,
	CONSTRAINT farm_ndvi_composite_pk PRIMARY KEY (farm_crop_id, image_id)
);
CREATE INDEX idx_farm_ndvi_date ON public.farm_ndvi USING btree (date);
CREATE INDEX idx_farm_ndvi_farm_crop_id ON public.farm_ndvi USING btree (farm_crop_id);
CREATE INDEX idx_farm_ndvi_image_id ON public.farm_ndvi USING btree (image_id);
CREATE INDEX idx_farm_ndvi_val ON public.farm_ndvi USING btree (val);


-- public.farm_ndvi_anomaly definition

-- Drop table

-- DROP FOREIGN TABLE public.farm_ndvi_anomaly;

CREATE FOREIGN TABLE public.farm_ndvi_anomaly (
	farm_id varchar NULL,
	image_date date NULL,
	ndvi_anomaly json NULL,
	anomaly_area float8 NULL,
	create_dt timestamp NULL,
	anomaly_id varchar NULL
)
SERVER local_gis_v3;


-- public.farm_ndvi_anomaly_decoded definition

-- Drop table

-- DROP TABLE public.farm_ndvi_anomaly_decoded;

CREATE TABLE public.farm_ndvi_anomaly_decoded (
	id serial4 NOT NULL,
	farm_id text NULL,
	image_date date NULL,
	anomaly_area public.geometry(polygon, 4326) NULL,
	dn numeric NULL,
	"condition" text NULL,
	"comments" text NULL,
	CONSTRAINT farm_ndvi_anomaly_decoded_pkey PRIMARY KEY (id)
);


-- public.farm_ndvi_ptc definition

-- Drop table

-- DROP TABLE public.farm_ndvi_ptc;

CREATE TABLE public.farm_ndvi_ptc (
	farm_crop_id varchar NOT NULL,
	image_id varchar NOT NULL,
	"date" date NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL,
	CONSTRAINT farm_ndvi_ptc_pkey PRIMARY KEY (farm_crop_id, image_id)
);


-- public.farm_ndvi_v2 definition

-- Drop table

-- DROP TABLE public.farm_ndvi_v2;

CREATE TABLE public.farm_ndvi_v2 (
	farm_crop_id varchar NOT NULL,
	image_id varchar NOT NULL,
	"date" date NOT NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL,
	range_less_then_0 float8 NULL,
	range_0_to_01 float8 NULL,
	range_01_to_02 float8 NULL,
	range_02_to_03 float8 NULL,
	range_03_to_04 float8 NULL,
	range_04_to_05 float8 NULL,
	range_05_to_06 float8 NULL,
	range_06_to_07 float8 NULL,
	range_07_to_08 float8 NULL,
	range_08_to_09 float8 NULL,
	range_09_to_1 float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL,
	CONSTRAINT farm_ndvi_v2_pkey PRIMARY KEY (image_id, farm_crop_id, date)
);
CREATE INDEX idx_farm_ndvi_v2_date ON public.farm_ndvi_v2 USING btree (date);
CREATE INDEX idx_farm_ndvi_v2_farm_crop_id ON public.farm_ndvi_v2 USING btree (farm_crop_id);
CREATE INDEX idx_farm_ndvi_v2_image_id ON public.farm_ndvi_v2 USING btree (image_id);
CREATE INDEX idx_farm_ndvi_v2_val ON public.farm_ndvi_v2 USING btree (val);


-- public.farm_ndvi_v2_15022023 definition

-- Drop table

-- DROP TABLE public.farm_ndvi_v2_15022023;

CREATE TABLE public.farm_ndvi_v2_15022023 (
	farm_crop_id varchar NULL,
	image_id varchar NULL,
	"date" date NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL,
	range_less_then_0 float8 NULL,
	range_0_to_01 float8 NULL,
	range_01_to_02 float8 NULL,
	range_02_to_03 float8 NULL,
	range_03_to_04 float8 NULL,
	range_04_to_05 float8 NULL,
	range_05_to_06 float8 NULL,
	range_06_to_07 float8 NULL,
	range_07_to_08 float8 NULL,
	range_08_to_09 float8 NULL,
	range_09_to_1 float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL
);


-- public.farm_ndvi_v2_bk_20230125 definition

-- Drop table

-- DROP TABLE public.farm_ndvi_v2_bk_20230125;

CREATE TABLE public.farm_ndvi_v2_bk_20230125 (
	farm_crop_id varchar NULL,
	image_id varchar NULL,
	"date" date NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL,
	range_less_then_0 float8 NULL,
	range_0_to_01 float8 NULL,
	range_01_to_02 float8 NULL,
	range_02_to_03 float8 NULL,
	range_03_to_04 float8 NULL,
	range_04_to_05 float8 NULL,
	range_05_to_06 float8 NULL,
	range_06_to_07 float8 NULL,
	range_07_to_08 float8 NULL,
	range_08_to_09 float8 NULL,
	range_09_to_1 float8 NULL,
	image_path varchar NULL,
	cloud_cover float8 NULL,
	val int8 NULL
);


-- public.farm_ndvi_v3 definition

-- Drop table

-- DROP FOREIGN TABLE public.farm_ndvi_v3;

CREATE FOREIGN TABLE public.farm_ndvi_v3 (
	farm_id varchar OPTIONS(column_name 'farm_id') NOT NULL,
	image_id varchar OPTIONS(column_name 'image_id') NULL,
	ndvi_avg float8 OPTIONS(column_name 'ndvi_avg') NULL,
	ndvi_min float8 OPTIONS(column_name 'ndvi_min') NULL,
	ndvi_max float8 OPTIONS(column_name 'ndvi_max') NULL,
	range_less_0 float8 OPTIONS(column_name 'range_less_0') NULL,
	range_0_005 float8 OPTIONS(column_name 'range_0_005') NULL,
	range_005_01 float8 OPTIONS(column_name 'range_005_01') NULL,
	range_01_015 float8 OPTIONS(column_name 'range_01_015') NULL,
	range_015_020 float8 OPTIONS(column_name 'range_015_020') NULL,
	range_020_025 float8 OPTIONS(column_name 'range_020_025') NULL,
	range_025_030 float8 OPTIONS(column_name 'range_025_030') NULL,
	range_030_035 float8 OPTIONS(column_name 'range_030_035') NULL,
	range_035_040 float8 OPTIONS(column_name 'range_035_040') NULL,
	range_040_045 float8 OPTIONS(column_name 'range_040_045') NULL,
	range_045_050 float8 OPTIONS(column_name 'range_045_050') NULL,
	range_050_055 float8 OPTIONS(column_name 'range_050_055') NULL,
	range_055_060 float8 OPTIONS(column_name 'range_055_060') NULL,
	range_060_065 float8 OPTIONS(column_name 'range_060_065') NULL,
	range_065_070 float8 OPTIONS(column_name 'range_065_070') NULL,
	range_070_075 float8 OPTIONS(column_name 'range_070_075') NULL,
	range_075_080 float8 OPTIONS(column_name 'range_075_080') NULL,
	range_080_085 float8 OPTIONS(column_name 'range_080_085') NULL,
	range_085_090 float8 OPTIONS(column_name 'range_085_090') NULL,
	range_090_095 float8 OPTIONS(column_name 'range_090_095') NULL,
	range_095_1 float8 OPTIONS(column_name 'range_095_1') NULL,
	ndvi_vector json OPTIONS(column_name 'ndvi_vector') NULL,
	image_date date OPTIONS(column_name 'image_date') NOT NULL,
	cloud_cover float8 NULL,
	status text NULL,
	crop_age int8 NULL,
	farm_score float8 NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'farm_ndvi_v3');

-- Table Triggers

create trigger date_conditions_trigger after
insert
    on
    public.farm_ndvi_v3 for each row execute function check_sowing_conditions();


-- public.farmcrops definition

-- Drop table

-- DROP FOREIGN TABLE public.farmcrops;

CREATE FOREIGN TABLE public.farmcrops (
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	sowing_method_id int8 OPTIONS(column_name 'sowing_method_id') NULL,
	cultivated_area float8 OPTIONS(column_name 'cultivated_area') NULL,
	seed_type_id int8 OPTIONS(column_name 'seed_type_id') NULL,
	crop_id int8 OPTIONS(column_name 'crop_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	id varchar OPTIONS(column_name 'id') NULL,
	crop_season varchar NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farmcrops');


-- public.farmer_assignment_details definition

-- Drop table

-- DROP TABLE public.farmer_assignment_details;

CREATE TABLE public.farmer_assignment_details (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	partner_id varchar NULL,
	msisdn varchar NULL,
	circle_name varchar NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	status varchar NULL,
	CONSTRAINT farmer_assignment_details_pkey PRIMARY KEY (id)
);


-- public.farmer_bank_scores definition

-- Drop table

-- DROP TABLE public.farmer_bank_scores;

CREATE TABLE public.farmer_bank_scores (
	id serial4 NOT NULL,
	msisdn varchar(15) NOT NULL,
	farmer_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	farm_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	engagement_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	orders_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	total_achieved_score numeric(5, 2) DEFAULT 0 NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT farmer_bank_scores_msisdn_key UNIQUE (msisdn),
	CONSTRAINT farmer_bank_scores_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_farmer_scores_msisdn ON public.farmer_bank_scores USING btree (msisdn);


-- public.farmer_livestocks definition

-- Drop table

-- DROP FOREIGN TABLE public.farmer_livestocks;

CREATE FOREIGN TABLE public.farmer_livestocks (
	count int4 OPTIONS(column_name 'count') NULL,
	livestock_id int8 OPTIONS(column_name 'livestock_id') NOT NULL,
	description varchar(255) OPTIONS(column_name 'description') NULL,
	category_id int8 OPTIONS(column_name 'category_id') NULL,
	purpose_id int8 OPTIONS(column_name 'purpose_id') NULL,
	stage_id int8 OPTIONS(column_name 'stage_id') NULL,
	breed_id int8 OPTIONS(column_name 'breed_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NOT NULL,
	id varchar OPTIONS(column_name 'id') NOT NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farmer_livestocks');


-- public.farmer_machineries definition

-- Drop table

-- DROP FOREIGN TABLE public.farmer_machineries;

CREATE FOREIGN TABLE public.farmer_machineries (
	count int4 OPTIONS(column_name 'count') NOT NULL,
	description varchar(255) OPTIONS(column_name 'description') NULL,
	machinery_id int8 OPTIONS(column_name 'machinery_id') NOT NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NOT NULL,
	id varchar OPTIONS(column_name 'id') NOT NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farmer_machineries');


-- public.farmer_profile_statuses definition

-- Drop table

-- DROP FOREIGN TABLE public.farmer_profile_statuses;

CREATE FOREIGN TABLE public.farmer_profile_statuses (
	"name" varchar(255) OPTIONS(column_name 'name') NULL,
	create_dt date OPTIONS(column_name 'create_dt') NULL,
	update_dt date OPTIONS(column_name 'update_dt') NULL,
	role_id int8 OPTIONS(column_name 'role_id') NULL,
	id varchar NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farmer_profile_statuses');


-- public.farmer_scores definition

-- Drop table

-- DROP TABLE public.farmer_scores;

CREATE TABLE public.farmer_scores (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NOT NULL,
	plra_score int4 DEFAULT 0 NOT NULL,
	ndra_score int4 DEFAULT 0 NOT NULL,
	telecom_operator_score int4 DEFAULT 0 NOT NULL,
	financial_institution_score int4 DEFAULT 0 NOT NULL,
	bkk_suparco_score int4 DEFAULT 0 NOT NULL,
	agri_extension_data_score int4 DEFAULT 0 NOT NULL,
	agri_input_company_score int4 DEFAULT 0 NOT NULL,
	agri_output_company_score int4 DEFAULT 0 NOT NULL,
	survey_history_score int4 DEFAULT 0 NOT NULL,
	total_score int4 DEFAULT 0 NOT NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp(6) NULL,
	sub_score1 int4 DEFAULT 0 NOT NULL,
	sub_score2 int4 DEFAULT 0 NOT NULL,
	sub_score3 int4 DEFAULT 0 NOT NULL,
	verified bool DEFAULT false NULL,
	farmer_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	farm_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	engagement_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	orders_score_achieved numeric(5, 2) DEFAULT 0 NULL,
	total_achieved_score numeric(5, 2) DEFAULT 0 NULL,
	CONSTRAINT farmer_scores_msisdn_key UNIQUE (msisdn),
	CONSTRAINT farmer_scores_pkey PRIMARY KEY (id)
);


-- public.farmer_verification_details definition

-- Drop table

-- DROP TABLE public.farmer_verification_details;

CREATE TABLE public.farmer_verification_details (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	partner_id varchar NULL,
	msisdn varchar NULL,
	profiled_by varchar NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	status varchar NULL,
	CONSTRAINT farmer_verification_details_pkey PRIMARY KEY (id)
);


-- public.farmers definition

-- Drop table

-- DROP FOREIGN TABLE public.farmers;

CREATE FOREIGN TABLE public.farmers (
	id varchar(15) OPTIONS(column_name 'id') NOT NULL,
	cnic varchar(15) OPTIONS(column_name 'cnic') NULL,
	"name" varchar(60) OPTIONS(column_name 'name') NULL,
	email varchar(60) OPTIONS(column_name 'email') NULL,
	"none" varchar OPTIONS(column_name 'location_id') NULL,
	address varchar(100) OPTIONS(column_name 'address') NULL,
	create_dt timestamptz(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamptz(6) OPTIONS(column_name 'update_dt') NULL,
	language_id int8 OPTIONS(column_name 'language_id') NULL,
	occupation varchar OPTIONS(column_name 'occupation') NULL,
	gender varchar OPTIONS(column_name 'gender') NULL,
	dob date OPTIONS(column_name 'dob') NULL,
	phone_type varchar OPTIONS(column_name 'phone_type') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profile_image varchar OPTIONS(column_name 'profile_image') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	"key" varchar OPTIONS(column_name 'key') NULL,
	occupation_id int8 OPTIONS(column_name 'occupation_id') NULL,
	fcm_token varchar OPTIONS(column_name 'fcm_token') NULL,
	cnic_front_image varchar OPTIONS(column_name 'cnic_front_image') NULL,
	cnic_back_image varchar OPTIONS(column_name 'cnic_back_image') NULL,
	default_location_enabled bool OPTIONS(column_name 'default_location_enabled') NULL,
	cnic_issue_date date OPTIONS(column_name 'cnic_issue_date') NULL,
	total_incentive_ammount int8 OPTIONS(column_name 'total_incentive_ammount') NULL,
	badge_id int8 OPTIONS(column_name 'badge_id') NULL,
	status varchar NULL,
	description varchar NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farmers');


-- public.farmid_sctid definition

-- Drop table

-- DROP TABLE public.farmid_sctid;

CREATE TABLE public.farmid_sctid (
	land_area text NULL,
	id text NULL,
	passbook_i text NULL,
	farmer_id text NULL,
	profiled_b text NULL,
	seed_type text NULL,
	crop_name text NULL,
	sugarcane_ text NULL
);


-- public.farms definition

-- Drop table

-- DROP FOREIGN TABLE public.farms;

CREATE FOREIGN TABLE public.farms (
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	land_unit varchar(255) OPTIONS(column_name 'land_unit') NULL,
	location_id int8 OPTIONS(column_name 'location_id') NULL,
	is_default int2 OPTIONS(column_name 'is_default') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	soil_type_id int8 OPTIONS(column_name 'soil_type_id') NULL,
	irrigation_source_id int8 OPTIONS(column_name 'irrigation_source_id') NULL,
	soil_issue_id int8 OPTIONS(column_name 'soil_issue_id') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	land_topography_id int8 OPTIONS(column_name 'land_topography_id') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	geo_point public.geometry OPTIONS(column_name 'geo_point') NULL,
	address varchar OPTIONS(column_name 'address') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NOT NULL,
	id varchar OPTIONS(column_name 'id') NOT NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	is_model_farm bool OPTIONS(column_name 'is_model_farm') NULL,
	shape_id varchar NULL,
	status varchar NULL,
	description varchar NULL,
	temp_id varchar NULL,
	image varchar NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'farms');


-- public.farms_data definition

-- Drop table

-- DROP TABLE public.farms_data;

CREATE TABLE public.farms_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	farm_id varchar(255) NULL,
	avg_rain varchar(255) NULL,
	flood varchar(255) NULL,
	disease_alert varchar(255) NULL,
	soil_type varchar(255) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	irrigation_source varchar(255) NULL,
	isenabled bool DEFAULT false NULL,
	CONSTRAINT farms_data_pkey PRIMARY KEY (id)
);


-- public.farms_temp_ad definition

-- Drop table

-- DROP TABLE public.farms_temp_ad;

CREATE TABLE public.farms_temp_ad (
	gid serial4 NOT NULL,
	sowing_dat varchar(254) NULL,
	farm_id varchar(254) NULL,
	title varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	t_id float8 NULL,
	area float8 NULL,
	area_ac float8 NULL,
	uc varchar(20) NULL,
	profiler varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT farms_temp_ad_pkey PRIMARY KEY (gid)
);
CREATE INDEX farms_temp_ad_geom_idx ON public.farms_temp_ad USING gist (geom);


-- public.fazalabad definition

-- Drop table

-- DROP TABLE public.fazalabad;

CREATE TABLE public.fazalabad (
	gid serial4 NOT NULL,
	"start" varchar(24) NULL,
	"end" varchar(24) NULL,
	crop varchar(254) NULL,
	"crop stage" varchar(254) NULL,
	"sowing dat" date NULL,
	"field imag" varchar(254) NULL,
	"field im_1" varchar(254) NULL,
	"plant imag" varchar(254) NULL,
	"plant im_1" varchar(254) NULL,
	"note if an" varchar(254) NULL,
	___id float8 NULL,
	___uuid varchar(254) NULL,
	___submissio varchar(24) NULL,
	___status varchar(254) NULL,
	___submitted varchar(254) NULL,
	____version_ varchar(254) NULL,
	___index float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT fazalabad_pkey PRIMARY KEY (gid)
);
CREATE INDEX fazalabad_geom_idx ON public.fazalabad USING gist (geom);


-- public.fcv_2024_all definition

-- Drop table

-- DROP TABLE public.fcv_2024_all;

CREATE TABLE public.fcv_2024_all (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area_hec float8 NULL,
	area float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT fcv_2024_all_pkey PRIMARY KEY (gid)
);
CREATE INDEX fcv_2024_all_geom_idx ON public.fcv_2024_all USING gist (geom);


-- public.fcv_complete_24 definition

-- Drop table

-- DROP TABLE public.fcv_complete_24;

CREATE TABLE public.fcv_complete_24 (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area_hec float8 NULL,
	area float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	crop_name varchar(255) NULL,
	CONSTRAINT fcv_complete_24_pkey PRIMARY KEY (gid)
);
CREATE INDEX fcv_complete_24_geom_idx ON public.fcv_complete_24 USING gist (geom);


-- public.fcv_tobacco_2024 definition

-- Drop table

-- DROP TABLE public.fcv_tobacco_2024;

CREATE TABLE public.fcv_tobacco_2024 (
	gid int4 DEFAULT nextval('final_fcv_2024_gid_seq'::regclass) NOT NULL,
	__gid float8 NULL,
	area numeric NULL,
	area_ac numeric NULL,
	uc varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	agent_msisdn varchar(254) NULL,
	temp_id varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	crop_name varchar(20) NULL,
	ndvi_avg numeric NULL,
	quality varchar(254) NULL,
	status varchar(50) NULL,
	___majority numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT final_fcv_2024_pkey PRIMARY KEY (gid)
);
CREATE INDEX crop_name_idx ON public.fcv_tobacco_2024 USING btree (crop_name);
CREATE INDEX final_fcv_2024_geom_idx ON public.fcv_tobacco_2024 USING gist (geom);
CREATE INDEX geom_fcv_tobacco_2024 ON public.fcv_tobacco_2024 USING gist (geom);


-- public.fertalizer_dealers_updated_performa definition

-- Drop table

-- DROP TABLE public.fertalizer_dealers_updated_performa;

CREATE TABLE public.fertalizer_dealers_updated_performa (
	gid int4 NULL,
	district varchar NULL,
	business_name varchar NULL,
	registered_dealer varchar NULL,
	cnic_no varchar NULL,
	contact_no varchar NULL,
	address varchar NULL,
	ao_circle varchar NULL,
	dealership_license_no varchar NULL,
	first_registration_date text NULL,
	last_renewal_date text NULL,
	dealership_expiry_date text NULL,
	latitude float8 NULL,
	longitud float8 NULL,
	dealer_code varchar NULL,
	remarks varchar NULL,
	shape public.geometry(point, 4326) NULL
);


-- public.fertalizer_dealers_updated_performav2 definition

-- Drop table

-- DROP TABLE public.fertalizer_dealers_updated_performav2;

CREATE TABLE public.fertalizer_dealers_updated_performav2 (
	gid int4 NULL,
	district text NULL,
	business_name text NULL,
	registered_dealer text NULL,
	cnic_no text NULL,
	contact_no text NULL,
	address text NULL,
	ao_circle text NULL,
	dealership_license_no text NULL,
	first_registration_date text NULL,
	last_renewal_date text NULL,
	dealership_expiry_date text NULL,
	latitude text NULL,
	longitud text NULL,
	dealer_code float8 NULL,
	remarks text NULL
);


-- public.fertilizer_dealers_outside_pakistan definition

-- Drop table

-- DROP TABLE public.fertilizer_dealers_outside_pakistan;

CREATE TABLE public.fertilizer_dealers_outside_pakistan (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	district varchar(254) NULL,
	business_n varchar(254) NULL,
	registered varchar(254) NULL,
	cnic_no varchar(254) NULL,
	contact_no varchar(254) NULL,
	address varchar(254) NULL,
	ao_circle varchar(254) NULL,
	dealership varchar(254) NULL,
	first_regi varchar(254) NULL,
	last_renew varchar(254) NULL,
	dealersh_1 varchar(254) NULL,
	latitude numeric NULL,
	longitud numeric NULL,
	dealer_cod varchar(254) NULL,
	remarks varchar(254) NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT fertilizer_dealers_outside_pakistan_pkey PRIMARY KEY (gid)
);
CREATE INDEX fertilizer_dealers_outside_pakistan_geom_idx ON public.fertilizer_dealers_outside_pakistan USING gist (geom);


-- public.fes_tracking_data definition

-- Drop table

-- DROP TABLE public.fes_tracking_data;

CREATE TABLE public.fes_tracking_data (
	gid serial4 NOT NULL,
	msisdn varchar(20) NULL,
	visit_no varchar(10) NULL,
	"fe name" varchar(30) NULL,
	visit_time varchar(20) NULL,
	visit_date date NULL,
	visit_type varchar(20) NULL,
	farm_id varchar(50) NULL,
	farm_img varchar(100) NULL,
	remarks varchar(100) NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT fes_tracking_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX fes_tracking_data_geom_idx ON public.fes_tracking_data USING gist (geom);


-- public.ffcl_farms definition

-- Drop table

-- DROP TABLE public.ffcl_farms;

CREATE TABLE public.ffcl_farms (
	gid serial4 NOT NULL,
	id varchar(254) NULL,
	create_dt varchar(24) NULL,
	profiled_b numeric NULL,
	shape varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT ffcl_farms_pkey PRIMARY KEY (gid)
);
CREATE INDEX ffcl_farms_geom_idx ON public.ffcl_farms USING gist (geom);


-- public.field_app_agent_association_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.field_app_agent_association_vw;

CREATE FOREIGN TABLE public.field_app_agent_association_vw (
	agent_msisdn varchar(255) OPTIONS(column_name 'agent_msisdn') NULL,
	association varchar OPTIONS(column_name 'association') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'field_app_agent_association_vw');


-- public.field_survey_data definition

-- Drop table

-- DROP TABLE public.field_survey_data;

CREATE TABLE public.field_survey_data (
	gid serial4 NOT NULL,
	crop varchar(80) NULL,
	farm_id varchar(80) NULL,
	farmer_name varchar(100) NULL,
	msisdn varchar(15) NULL,
	profiled_by varchar(15) NULL,
	variety varchar(255) NULL,
	survey_dt date NULL,
	sowing_dt date NULL,
	qa_dt date NULL,
	qa_status varchar(50) NULL,
	qa_by varchar(50) NULL,
	approved_by varchar(15) NULL,
	land_area float8 NULL,
	surveyor varchar(15) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	images text NULL,
	season text NULL,
	CONSTRAINT field_survey_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX field_survey_data_geom_idx ON public.field_survey_data USING gist (geom);


-- public.final_kharif_crop_farms definition

-- Drop table

-- DROP TABLE public.final_kharif_crop_farms;

CREATE TABLE public.final_kharif_crop_farms (
	gid serial4 NOT NULL,
	area float8 NULL,
	id float8 NULL,
	area_ac float8 NULL,
	temp_id varchar(10) NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	kharif_24_crop varchar(50) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT final_kharif_crop_farms_pkey PRIMARY KEY (gid)
);
CREATE INDEX final_kharif_crop_farms_geom_idx ON public.final_kharif_crop_farms USING gist (geom);


-- public.finalretainedgis_v2 definition

-- Drop table

-- DROP TABLE public.finalretainedgis_v2;

CREATE TABLE public.finalretainedgis_v2 (
	create_dt text NULL,
	land_area text NULL,
	id text NULL,
	passbook_i text NULL,
	farmer_id text NULL,
	profiled_b text NULL,
	seed_type text NULL,
	crop_name text NULL,
	sugarcane_ text NULL,
	agent_name text NULL,
	circle_nam text NULL,
	overlaps_i text NULL,
	overlaps_a text NULL,
	overlap_pa text NULL,
	overlaps_p text NULL,
	status text NULL
);


-- public.financial_institutions_data definition

-- Drop table

-- DROP TABLE public.financial_institutions_data;

CREATE TABLE public.financial_institutions_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"name" varchar(255) NULL,
	bank_name varchar(255) NULL,
	status varchar(255) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	"year" varchar(255) NULL,
	score int4 NULL,
	CONSTRAINT financial_institutions_data_pkey PRIMARY KEY (id)
);


-- public.flood_2025 definition

-- Drop table

-- DROP TABLE public.flood_2025;

CREATE TABLE public.flood_2025 (
	gid serial4 NOT NULL,
	district varchar(50) NULL,
	province varchar(50) NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT flood_2025_pkey PRIMARY KEY (gid)
);
CREATE INDEX flood_2025_geom_idx ON public.flood_2025 USING gist (geom);
CREATE INDEX idx_flood_2025_geom ON public.flood_2025 USING gist (geom);


-- public.frost_20230125 definition

-- Drop table

-- DROP TABLE public.frost_20230125;

CREATE TABLE public.frost_20230125 (
	farm_crop_id varchar NULL
);


-- public.gat_24_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.gat_24_data_verification_vw;

CREATE FOREIGN TABLE public.gat_24_data_verification_vw (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farm_status varchar(255) OPTIONS(column_name 'farm_status') NULL,
	farm_desc text OPTIONS(column_name 'farm_desc') NULL,
	farmer_status varchar(255) OPTIONS(column_name 'farmer_status') NULL,
	farmer_desc text OPTIONS(column_name 'farmer_desc') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar(255) OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar(255) OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'gat_24_data_verification_vw');


-- public.gat_24_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.gat_24_images_vw;

CREATE FOREIGN TABLE public.gat_24_images_vw (
	id varchar OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'gat_24_images_vw');


-- public.geoai_district_boundary definition

-- Drop table

-- DROP TABLE public.geoai_district_boundary;

CREATE TABLE public.geoai_district_boundary (
	gid serial4 NOT NULL,
	objectid float8 NULL,
	district varchar(50) NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT geoai_district_boundary_pkey PRIMARY KEY (gid)
);
CREATE INDEX geoai_district_boundary_geom_idx ON public.geoai_district_boundary USING gist (geom);


-- public.geoai_eba_boundary definition

-- Drop table

-- DROP TABLE public.geoai_eba_boundary;

CREATE TABLE public.geoai_eba_boundary (
	gid serial4 NOT NULL,
	eba_name varchar(50) NULL,
	district_n varchar(50) NULL,
	area_sqkm numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT geoai_eba_boundary_pkey PRIMARY KEY (gid)
);
CREATE INDEX geoai_eba_boundary_geom_idx ON public.geoai_eba_boundary USING gist (geom);


-- public.geoai_growth_boundary definition

-- Drop table

-- DROP TABLE public.geoai_growth_boundary;

CREATE TABLE public.geoai_growth_boundary (
	gid serial4 NOT NULL,
	area varchar(50) NULL,
	district varchar(50) NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT geoai_growth_boundary_pkey PRIMARY KEY (gid)
);
CREATE INDEX geoai_growth_boundary_geom_idx ON public.geoai_growth_boundary USING gist (geom);


-- public.geoai_landuse_change definition

-- Drop table

-- DROP TABLE public.geoai_landuse_change;

CREATE TABLE public.geoai_landuse_change (
	gid serial4 NOT NULL,
	id float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT geoai_landuse_change_pkey PRIMARY KEY (gid)
);
CREATE INDEX geoai_landuse_change_geom_idx ON public.geoai_landuse_change USING gist (geom);


-- public.geoai_veg_zone definition

-- Drop table

-- DROP TABLE public.geoai_veg_zone;

CREATE TABLE public.geoai_veg_zone (
	gid serial4 NOT NULL,
	objectid float8 NULL,
	district varchar(50) NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT geoai_veg_zone_pkey PRIMARY KEY (gid)
);
CREATE INDEX geoai_veg_zone_geom_idx ON public.geoai_veg_zone USING gist (geom);


-- public.grower_passbooks definition

-- Drop table

-- DROP TABLE public.grower_passbooks;

CREATE TABLE public.grower_passbooks (
	old_passbook varchar NULL,
	new_passbook varchar NULL,
	grower_name varchar NULL,
	father_name varchar NULL,
	cnic varchar NULL,
	mobile_no varchar NULL,
	circle varchar NULL,
	village varchar NULL,
	creation_dt date NULL,
	loan varchar NULL
);


-- public.growth_stages definition

-- Drop table

-- DROP FOREIGN TABLE public.growth_stages;

CREATE FOREIGN TABLE public.growth_stages (
	id int8 OPTIONS(column_name 'id') NOT NULL,
	"name" varchar OPTIONS(column_name 'name') NULL,
	"level" int4 OPTIONS(column_name 'level') NULL,
	parent_id int8 OPTIONS(column_name 'parent_id') NULL,
	title_urdu varchar(255) OPTIONS(column_name 'title_urdu') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'growth_stages');


-- public.growth_stages_portal definition

-- Drop table

-- DROP TABLE public.growth_stages_portal;

CREATE TABLE public.growth_stages_portal (
	id int8 NULL,
	"name" varchar NULL,
	"level" int4 NULL,
	parent_id int8 NULL,
	title_urdu varchar(255) NULL
);


-- public.har_20240614_temp definition

-- Drop table

-- DROP TABLE public.har_20240614_temp;

CREATE TABLE public.har_20240614_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	msisdn float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	lat float8 NULL,
	lng float8 NULL,
	district varchar(20) NULL,
	temp_id float8 NULL,
	area float8 NULL,
	area_ac float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT har_20240614_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX har_20240614_temp_geom_idx ON public.har_20240614_temp USING gist (geom);


-- public.harvest_trend definition

-- Drop table

-- DROP TABLE public.harvest_trend;

CREATE TABLE public.harvest_trend (
	farm_crop_id varchar NULL,
	phonenumber varchar(15) NULL,
	"name" varchar NULL,
	"PassBookNo" varchar NULL,
	cnic varchar NULL,
	"Company_id" int8 NULL,
	total_area float8 NULL,
	"date" date NULL,
	h24112022 float8 NULL,
	h12022023 float8 NULL,
	d13012023 date NULL,
	h13012023 float8 NULL,
	h03012023 float8 NULL,
	h24122022 float8 NULL,
	h19122022 float8 NULL,
	h09122022 float8 NULL,
	h04122022 float8 NULL,
	h29112022 float8 NULL,
	h19112022 float8 NULL,
	h04112022 float8 NULL
);


-- public.harvest_validation definition

-- Drop table

-- DROP TABLE public.harvest_validation;

CREATE TABLE public.harvest_validation (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	msisdn varchar(20) NULL,
	area_ac float8 NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	agent_name varchar(20) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT harvest_validation_pkey PRIMARY KEY (gid)
);
CREATE INDEX harvest_validation_geom_idx ON public.harvest_validation USING gist (geom);


-- public.harvest_validation_20260218 definition

-- Drop table

-- DROP TABLE public.harvest_validation_20260218;

CREATE TABLE public.harvest_validation_20260218 (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	msisdn varchar(20) NULL,
	area_ac float8 NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	agent_name varchar(20) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT harvest_validation_20260218_pkey PRIMARY KEY (gid)
);
CREATE INDEX harvest_validation_20260218_geom_idx ON public.harvest_validation_20260218 USING gist (geom);


-- public.hbl_data_sowing_20220522 definition

-- Drop table

-- DROP TABLE public.hbl_data_sowing_20220522;

CREATE TABLE public.hbl_data_sowing_20220522 (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farm_title varchar(254) NULL,
	land_area varchar(254) NULL,
	land_unit varchar(254) NULL,
	location_i float8 NULL,
	location_n varchar(254) NULL,
	geo_point varchar(254) NULL,
	soil_type_ varchar(254) NULL,
	irrigation varchar(254) NULL,
	soil_issue varchar(254) NULL,
	land_topog varchar(254) NULL,
	msisdn numeric NULL,
	farmer_nam varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	crop_id float8 NULL,
	crop_name varchar(254) NULL,
	sowing_met varchar(254) NULL,
	seed_type_ varchar(254) NULL,
	sowing_dat date NULL,
	create_dt varchar(24) NULL,
	growth_sta varchar(254) NULL,
	"level" float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT hbl_data_sowing_20220522_pkey PRIMARY KEY (gid)
);
CREATE INDEX hbl_data_sowing_20220522_geom_idx ON public.hbl_data_sowing_20220522 USING gist (geom);


-- public.hbl_farms definition

-- Drop table

-- DROP TABLE public.hbl_farms;

CREATE TABLE public.hbl_farms (
	gid int4 DEFAULT nextval('farm_data_20220427_gid_seq'::regclass) NOT NULL,
	farm_id varchar(254) NULL,
	farm_title varchar(254) NULL,
	land_area varchar(254) NULL,
	land_unit varchar(254) NULL,
	location_id float8 NULL,
	location_name varchar(254) NULL,
	geo_point varchar(254) NULL,
	soil_type_id varchar(254) NULL,
	irrigation varchar(254) NULL,
	soil_issue varchar(254) NULL,
	land_topog varchar(254) NULL,
	msisdn numeric NULL,
	farmer_name varchar(254) NULL,
	farm_crop_id varchar(254) NULL,
	crop_id float8 NULL,
	crop_name varchar(254) NULL,
	sowing_met varchar(254) NULL,
	seed_type_id varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	sowing_date date NULL,
	lat numeric NULL,
	long numeric NULL,
	CONSTRAINT farm_data_20220427_pkey PRIMARY KEY (gid)
);
CREATE INDEX farm_data_20220427_geom_idx ON public.hbl_farms USING gist (geom);


-- public.hh_tc_farms definition

-- Drop table

-- DROP TABLE public.hh_tc_farms;

CREATE TABLE public.hh_tc_farms (
	gid serial4 NOT NULL,
	crop varchar(10) NULL,
	farmer_id varchar(15) NULL,
	"location" varchar(20) NULL,
	area float8 NULL,
	farm_title varchar(20) NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	CONSTRAINT hh_tc_farms_pkey PRIMARY KEY (gid)
);
CREATE INDEX hh_tc_farms_geom_idx ON public.hh_tc_farms USING gist (geom);


-- public.intercropping_data definition

-- Drop table

-- DROP TABLE public.intercropping_data;

CREATE TABLE public.intercropping_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	farm_id uuid NULL,
	farm_crop_id uuid NULL,
	farmer_name varchar(255) NULL,
	profiled_by varchar(50) NULL,
	partner_id uuid NULL,
	passbook varchar(100) NULL,
	location_id uuid NULL,
	lat numeric(10, 8) NULL,
	lng numeric(11, 8) NULL,
	is_intercropping bool NULL,
	geom public.geometry(geometry, 4326) NULL,
	profile_image text NULL,
	cnic_front_image text NULL,
	cnic_back_image text NULL,
	images _text NULL,
	description text NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	sync_dt timestamp NULL,
	CONSTRAINT intercropping_data_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_intercropping_data_create_dt ON public.intercropping_data USING btree (create_dt);
CREATE INDEX idx_intercropping_data_farm_crop_id ON public.intercropping_data USING btree (farm_crop_id);
CREATE INDEX idx_intercropping_data_farm_id ON public.intercropping_data USING btree (farm_id);
CREATE INDEX idx_intercropping_data_geom ON public.intercropping_data USING gist (geom);
CREATE INDEX idx_intercropping_data_images ON public.intercropping_data USING gin (images);
CREATE INDEX idx_intercropping_data_location_id ON public.intercropping_data USING btree (location_id);
CREATE INDEX idx_intercropping_data_partner_id ON public.intercropping_data USING btree (partner_id);
CREATE INDEX idx_intercropping_data_profiled_by ON public.intercropping_data USING btree (profiled_by);


-- public.invalid_farms definition

-- Drop table

-- DROP TABLE public.invalid_farms;

CREATE TABLE public.invalid_farms (
	farm_id varchar NOT NULL,
	profiled_by varchar NULL,
	CONSTRAINT invalid_farms_pkey PRIMARY KEY (farm_id)
);


-- public.jadeed_pivots definition

-- Drop table

-- DROP TABLE public.jadeed_pivots;

CREATE TABLE public.jadeed_pivots (
	gid serial4 NOT NULL,
	id float8 NULL,
	area float8 NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	mauza varchar(10) NULL,
	uc varchar(10) NULL,
	tehsil varchar(10) NULL,
	district varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id serial4 NOT NULL,
	CONSTRAINT jadeed_pivots_pkey PRIMARY KEY (gid)
);
CREATE INDEX jadeed_pivots_geom_idx ON public.jadeed_pivots USING gist (geom);


-- public.jdw1_20260126_samples definition

-- Drop table

-- DROP TABLE public.jdw1_20260126_samples;

CREATE TABLE public.jdw1_20260126_samples (
	gid serial4 NOT NULL,
	area_ac float8 NULL,
	msidn varchar(20) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jdw1_20260126_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw1_20260126_samples_geom_idx ON public.jdw1_20260126_samples USING gist (geom);


-- public.jdw1_samples definition

-- Drop table

-- DROP TABLE public.jdw1_samples;

CREATE TABLE public.jdw1_samples (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	msisdn varchar(20) NULL,
	agent_name varchar(20) NULL,
	unit varchar(10) NULL,
	latiude float8 NULL,
	longitude float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jdw1_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw1_samples_geom_idx ON public.jdw1_samples USING gist (geom);


-- public.jdw1_samples_20260211 definition

-- Drop table

-- DROP TABLE public.jdw1_samples_20260211;

CREATE TABLE public.jdw1_samples_20260211 (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	msisdn varchar(20) NULL,
	agent_name varchar(20) NULL,
	unit varchar(10) NULL,
	latitude varchar(20) NULL,
	longitude varchar(20) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jdw1_samples_20260211_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw1_samples_20260211_geom_idx ON public.jdw1_samples_20260211 USING gist (geom);


-- public.jdw_assigned_data_20251120 definition

-- Drop table

-- DROP TABLE public.jdw_assigned_data_20251120;

CREATE TABLE public.jdw_assigned_data_20251120 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac numeric NULL,
	msisdn varchar(15) NULL,
	crop varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jdw_assigned_data_20251120_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw_assigned_data_20251120_geom_idx ON public.jdw_assigned_data_20251120 USING gist (geom);


-- public.jdw_circle_bounds definition

-- Drop table

-- DROP TABLE public.jdw_circle_bounds;

CREATE TABLE public.jdw_circle_bounds (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	layer varchar(254) NULL,
	area float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT jdw_circle_bounds_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw_circle_bounds_geom_idx ON public.jdw_circle_bounds USING gist (geom);


-- public.jdw_harvest_samples definition

-- Drop table

-- DROP TABLE public.jdw_harvest_samples;

CREATE TABLE public.jdw_harvest_samples (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	msisdn varchar(20) NULL,
	agent_name varchar(20) NULL,
	unit varchar(10) NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jdw_harvest_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw_harvest_samples_geom_idx ON public.jdw_harvest_samples USING gist (geom);


-- public.jdw_harvest_samples_20260122 definition

-- Drop table

-- DROP TABLE public.jdw_harvest_samples_20260122;

CREATE TABLE public.jdw_harvest_samples_20260122 (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	msisdn varchar(20) NULL,
	agent_name varchar(20) NULL,
	unit varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jdw_harvest_samples_20260122_pkey PRIMARY KEY (gid)
);
CREATE INDEX jdw_harvest_samples_20260122_geom_idx ON public.jdw_harvest_samples_20260122 USING gist (geom);


-- public.jhang_dig_temp definition

-- Drop table

-- DROP TABLE public.jhang_dig_temp;

CREATE TABLE public.jhang_dig_temp (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jhang_dig_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX jhang_dig_temp_geom_idx ON public.jhang_dig_temp USING gist (geom);


-- public.jhg_8_9_10_joined definition

-- Drop table

-- DROP TABLE public.jhg_8_9_10_joined;

CREATE TABLE public.jhg_8_9_10_joined (
	gid serial4 NOT NULL,
	id float8 NULL,
	sb_dt varchar(50) NULL,
	qa_by varchar(50) NULL,
	__gid float8 NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	digtizer varchar(50) NULL,
	approver varchar(50) NULL,
	area float8 NULL,
	j_province varchar(254) NULL,
	j_district varchar(30) NULL,
	j_tehsil varchar(30) NULL,
	j_uc varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	area_ac float8 NULL,
	CONSTRAINT jhg_8_9_10_joined_pkey PRIMARY KEY (gid)
);
CREATE INDEX jhg_8_9_10_joined_geom_idx ON public.jhg_8_9_10_joined USING gist (geom);


-- public.jhg_shop_sgdm definition

-- Drop table

-- DROP TABLE public.jhg_shop_sgdm;

CREATE TABLE public.jhg_shop_sgdm (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jhg_shop_sgdm_pkey PRIMARY KEY (gid)
);
CREATE INDEX jhg_shop_sgdm_geom_idx ON public.jhg_shop_sgdm USING gist (geom);


-- public.jk1_circles_stats definition

-- Drop table

-- DROP TABLE public.jk1_circles_stats;

CREATE TABLE public.jk1_circles_stats (
	"name" varchar(80) NULL,
	survey_area numeric NULL,
	incorrect_sugarcane_area numeric NULL,
	correct_sugarcane_area numeric NULL,
	unmapped_sugarcane_area float8 NULL,
	total_sugarcane_area float8 NULL,
	unit int4 NULL,
	shape public.geometry(multipolygon, 4326) NULL
);
CREATE INDEX jk1_circles_stats_geom_idx ON public.jk1_circles_stats USING gist (shape);


-- public.jk1_correct_sc definition

-- Drop table

-- DROP TABLE public.jk1_correct_sc;

CREATE TABLE public.jk1_correct_sc (
	gid int4 DEFAULT nextval('jk1_correct_sugar_gid_seq'::regclass) NOT NULL,
	"name" varchar(254) NULL,
	area_acre float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_correct_sugar_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_correct_sugar_geom_idx ON public.jk1_correct_sc USING gist (geom);


-- public.jk1_correct_sc_old definition

-- Drop table

-- DROP TABLE public.jk1_correct_sc_old;

CREATE TABLE public.jk1_correct_sc_old (
	gid int4 DEFAULT nextval('jk1_correct_sc_gid_seq'::regclass) NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_acre float8 NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_correct_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_correct_sc_geom_idx ON public.jk1_correct_sc_old USING gist (geom);


-- public.jk1_correct_sugarcane_20241216 definition

-- Drop table

-- DROP TABLE public.jk1_correct_sugarcane_20241216;

CREATE TABLE public.jk1_correct_sugarcane_20241216 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_correct_sugarcane_20241216_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_correct_sugarcane_20241216_geom_idx ON public.jk1_correct_sugarcane_20241216 USING gist (geom);


-- public.jk1_gate_areas definition

-- Drop table

-- DROP TABLE public.jk1_gate_areas;

CREATE TABLE public.jk1_gate_areas (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	total_sc float8 NULL,
	unmapped_s float8 NULL,
	correct_sc float8 NULL,
	incor_sc float8 NULL,
	shape public.geometry NULL,
	CONSTRAINT jk1_gate_areas_pkey PRIMARY KEY (gid)
);


-- public.jk1_gate_geosam definition

-- Drop table

-- DROP TABLE public.jk1_gate_geosam;

CREATE TABLE public.jk1_gate_geosam (
	gid serial4 NOT NULL,
	fid numeric NULL,
	value numeric NULL,
	ndvi_mean numeric NULL,
	ndvi_std numeric NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_gate_geosam_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_gate_geosam_geom_idx ON public.jk1_gate_geosam USING gist (geom);


-- public.jk1_gate_khu_survey definition

-- Drop table

-- DROP TABLE public.jk1_gate_khu_survey;

CREATE TABLE public.jk1_gate_khu_survey (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmcrop_i varchar(254) NULL,
	farmer_id numeric NULL,
	profiled_b numeric NULL,
	farm_statu varchar(254) NULL,
	farm_desc varchar(254) NULL,
	farmer_sta varchar(254) NULL,
	farmer_des varchar(254) NULL,
	land_area numeric NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	shape_id varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_seaso varchar(254) NULL,
	title varchar(254) NULL,
	profile_im varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	lat numeric NULL,
	lng numeric NULL,
	growth_sta varchar(254) NULL,
	gs_date date NULL,
	class_id float8 NULL,
	"type" varchar(20) NULL,
	area_ac float8 NULL,
	id float8 NULL,
	sample_typ varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_gate_khu_survey_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_jk1_gate_khu_survey_geom ON public.jk1_gate_khu_survey USING gist (geom);
CREATE INDEX jk1_gate_khu_survey_geom_idx ON public.jk1_gate_khu_survey USING gist (geom);


-- public.jk1_incorrect_sc definition

-- Drop table

-- DROP TABLE public.jk1_incorrect_sc;

CREATE TABLE public.jk1_incorrect_sc (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	incorsug_p float8 NULL,
	area_acre float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_incorrect_sc_pkey2 PRIMARY KEY (gid)
);
CREATE INDEX jk1_incorrect_sc_geom_idx2 ON public.jk1_incorrect_sc USING gist (geom);


-- public.jk1_incorrect_sc_old definition

-- Drop table

-- DROP TABLE public.jk1_incorrect_sc_old;

CREATE TABLE public.jk1_incorrect_sc_old (
	gid int4 DEFAULT nextval('jk1_incorrect_sc_gid_seq'::regclass) NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_acre float8 NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_incorrect_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_incorrect_sc_geom_idx ON public.jk1_incorrect_sc_old USING gist (geom);


-- public.jk1_incorrect_sc_raw definition

-- Drop table

-- DROP TABLE public.jk1_incorrect_sc_raw;

CREATE TABLE public.jk1_incorrect_sc_raw (
	gid int4 DEFAULT nextval('jk1_incorrect_sc_gid_seq1'::regclass) NOT NULL,
	dn int4 NULL,
	area_acre float8 NULL,
	"name" varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_incorrect_sc_pkey1 PRIMARY KEY (gid)
);
CREATE INDEX jk1_incorrect_sc_geom_idx1 ON public.jk1_incorrect_sc_raw USING gist (geom);


-- public.jk1_incorrect_sugarcane_20241216 definition

-- Drop table

-- DROP TABLE public.jk1_incorrect_sugarcane_20241216;

CREATE TABLE public.jk1_incorrect_sugarcane_20241216 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_incorrect_sugarcane_20241216_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_incorrect_sugarcane_20241216_geom_idx ON public.jk1_incorrect_sugarcane_20241216 USING gist (geom);


-- public.jk1_second_correct_sc definition

-- Drop table

-- DROP TABLE public.jk1_second_correct_sc;

CREATE TABLE public.jk1_second_correct_sc (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jk1_second_esurvey definition

-- Drop table

-- DROP TABLE public.jk1_second_esurvey;

CREATE TABLE public.jk1_second_esurvey (
	gid serial4 NOT NULL,
	survey_id float8 NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	passbook_n varchar(254) NULL,
	grower_nam varchar(254) NULL,
	varieties varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	father_nam varchar(254) NULL,
	cnic varchar(254) NULL,
	farmer_msi numeric NULL,
	survey_dat date NULL,
	agent_name varchar(254) NULL,
	agent_msis numeric NULL,
	sc_per float8 NULL,
	nonsc_per float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	unit int4 DEFAULT 1 NOT NULL,
	CONSTRAINT jk1_second_esurvey_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_second_esurvey_geom_idx ON public.jk1_second_esurvey USING gist (geom);


-- public.jk1_second_incorrect_gt1 definition

-- Drop table

-- DROP TABLE public.jk1_second_incorrect_gt1;

CREATE TABLE public.jk1_second_incorrect_gt1 (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jk1_second_incorrect_ls1 definition

-- Drop table

-- DROP TABLE public.jk1_second_incorrect_ls1;

CREATE TABLE public.jk1_second_incorrect_ls1 (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jk1_second_total_sc definition

-- Drop table

-- DROP TABLE public.jk1_second_total_sc;

CREATE TABLE public.jk1_second_total_sc (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jk1_second_unmapped_gt1 definition

-- Drop table

-- DROP TABLE public.jk1_second_unmapped_gt1;

CREATE TABLE public.jk1_second_unmapped_gt1 (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jk1_second_unmapped_ls1 definition

-- Drop table

-- DROP TABLE public.jk1_second_unmapped_ls1;

CREATE TABLE public.jk1_second_unmapped_ls1 (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jk1_sunday_final_samples definition

-- Drop table

-- DROP TABLE public.jk1_sunday_final_samples;

CREATE TABLE public.jk1_sunday_final_samples (
	gid serial4 NOT NULL,
	"type" varchar(254) NULL,
	color varchar(254) NULL,
	uc varchar(254) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	fid numeric NULL,
	district varchar(254) NULL,
	tehsil varchar(254) NULL,
	state varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	profiler varchar(15) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_sunday_final_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_sunday_final_samples_geom_idx ON public.jk1_sunday_final_samples USING gist (geom);


-- public.jk1_total_sc definition

-- Drop table

-- DROP TABLE public.jk1_total_sc;

CREATE TABLE public.jk1_total_sc (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	"name" varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_total_sc_pkey1 PRIMARY KEY (gid)
);
CREATE INDEX jk1_total_sc_geom_idx1 ON public.jk1_total_sc USING gist (geom);


-- public.jk1_total_sc_old definition

-- Drop table

-- DROP TABLE public.jk1_total_sc_old;

CREATE TABLE public.jk1_total_sc_old (
	gid int4 DEFAULT nextval('jk1_total_sc_gid_seq'::regclass) NOT NULL,
	dn int4 NULL,
	area_ac float8 NULL,
	"name" varchar(30) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_total_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_total_sc_geom_idx ON public.jk1_total_sc_old USING gist (geom);


-- public.jk1_total_sugarcane_20241216 definition

-- Drop table

-- DROP TABLE public.jk1_total_sugarcane_20241216;

CREATE TABLE public.jk1_total_sugarcane_20241216 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_total_sugarcane_20241216_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_total_sugarcane_20241216_geom_idx ON public.jk1_total_sugarcane_20241216 USING gist (geom);


-- public.jk1_unmapped_sc definition

-- Drop table

-- DROP TABLE public.jk1_unmapped_sc;

CREATE TABLE public.jk1_unmapped_sc (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_unmapped_sc_pkey2 PRIMARY KEY (gid)
);
CREATE INDEX jk1_unmapped_sc_geom_idx2 ON public.jk1_unmapped_sc USING gist (geom);


-- public.jk1_unmapped_sc_old definition

-- Drop table

-- DROP TABLE public.jk1_unmapped_sc_old;

CREATE TABLE public.jk1_unmapped_sc_old (
	gid int4 DEFAULT nextval('jk1_unmapped_sc_gid_seq'::regclass) NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_acre float8 NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_unmapped_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_unmapped_sc_geom_idx ON public.jk1_unmapped_sc_old USING gist (geom);


-- public.jk1_unmapped_sc_raw definition

-- Drop table

-- DROP TABLE public.jk1_unmapped_sc_raw;

CREATE TABLE public.jk1_unmapped_sc_raw (
	gid int4 DEFAULT nextval('jk1_unmapped_sc_gid_seq1'::regclass) NOT NULL,
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_unmapped_sc_pkey1 PRIMARY KEY (gid)
);
CREATE INDEX jk1_unmapped_sc_geom_idx1 ON public.jk1_unmapped_sc_raw USING gist (geom);


-- public.jk1_unmapped_sugarcane_20241216 definition

-- Drop table

-- DROP TABLE public.jk1_unmapped_sugarcane_20241216;

CREATE TABLE public.jk1_unmapped_sugarcane_20241216 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk1_unmapped_sugarcane_20241216_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk1_unmapped_sugarcane_20241216_geom_idx ON public.jk1_unmapped_sugarcane_20241216 USING gist (geom);


-- public.jk2_circles_stats definition

-- Drop table

-- DROP TABLE public.jk2_circles_stats;

CREATE TABLE public.jk2_circles_stats (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	survey_area numeric NULL,
	correct_sugarcane_area numeric NULL,
	incorrect_sugarcane_area numeric NULL,
	tot_sugarcane float8 NULL,
	unmap_sugarcane float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	correct_sec_sc float8 NULL,
	CONSTRAINT jk2_circles_stats_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_circles_stats_geom_idx ON public.jk2_circles_stats USING gist (geom);


-- public.jk2_correct_sc definition

-- Drop table

-- DROP TABLE public.jk2_correct_sc;

CREATE TABLE public.jk2_correct_sc (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	area_ha float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_correct_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_correct_sc_geom_idx ON public.jk2_correct_sc USING gist (geom);


-- public.jk2_incorrect_sc definition

-- Drop table

-- DROP TABLE public.jk2_incorrect_sc;

CREATE TABLE public.jk2_incorrect_sc (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	area_ha float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_incorrect_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_incorrect_sc_geom_idx ON public.jk2_incorrect_sc USING gist (geom);


-- public.jk2_second_correct_sugarcane definition

-- Drop table

-- DROP TABLE public.jk2_second_correct_sugarcane;

CREATE TABLE public.jk2_second_correct_sugarcane (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	"name" varchar(80) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_correct_sugarcane_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_correct_sugarcane_geom_idx ON public.jk2_second_correct_sugarcane USING gist (geom);


-- public.jk2_second_esurvey definition

-- Drop table

-- DROP TABLE public.jk2_second_esurvey;

CREATE TABLE public.jk2_second_esurvey (
	gid serial4 NOT NULL,
	id float8 NULL,
	survey_id float8 NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	passbook_no varchar(254) NULL,
	grower_name varchar(254) NULL,
	varieties varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	father_name varchar(254) NULL,
	cnic varchar(254) NULL,
	farmer_msisdn numeric NULL,
	survey_date varchar(254) NULL,
	agent_name varchar(254) NULL,
	unit float8 NULL,
	agent_msisdn numeric NULL,
	sc_percentage float8 NULL,
	nonsc_percentage float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_esurvey_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_esurvey_geom_idx ON public.jk2_second_esurvey USING gist (geom);


-- public.jk2_second_incorrect_sc_gt01 definition

-- Drop table

-- DROP TABLE public.jk2_second_incorrect_sc_gt01;

CREATE TABLE public.jk2_second_incorrect_sc_gt01 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	"name" varchar(80) NULL,
	area_acre float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_incorrect_sc_gt01_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_incorrect_sc_gt01_geom_idx ON public.jk2_second_incorrect_sc_gt01 USING gist (geom);


-- public.jk2_second_incorrect_sc_lt01 definition

-- Drop table

-- DROP TABLE public.jk2_second_incorrect_sc_lt01;

CREATE TABLE public.jk2_second_incorrect_sc_lt01 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	"name" varchar(80) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_incorrect_sc_lt01_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_incorrect_sc_lt01_geom_idx ON public.jk2_second_incorrect_sc_lt01 USING gist (geom);


-- public.jk2_second_total_sc definition

-- Drop table

-- DROP TABLE public.jk2_second_total_sc;

CREATE TABLE public.jk2_second_total_sc (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	"name" varchar(80) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_total_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_total_sc_geom_idx ON public.jk2_second_total_sc USING gist (geom);


-- public.jk2_second_unmapped_sc_gt01 definition

-- Drop table

-- DROP TABLE public.jk2_second_unmapped_sc_gt01;

CREATE TABLE public.jk2_second_unmapped_sc_gt01 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	"name" varchar(80) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_unmapped_sc_gt01_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_unmapped_sc_gt01_geom_idx ON public.jk2_second_unmapped_sc_gt01 USING gist (geom);


-- public.jk2_second_unmapped_sc_lt01 definition

-- Drop table

-- DROP TABLE public.jk2_second_unmapped_sc_lt01;

CREATE TABLE public.jk2_second_unmapped_sc_lt01 (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	"name" varchar(80) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_second_unmapped_sc_lt01_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_second_unmapped_sc_lt01_geom_idx ON public.jk2_second_unmapped_sc_lt01 USING gist (geom);


-- public.jk2_total_sc definition

-- Drop table

-- DROP TABLE public.jk2_total_sc;

CREATE TABLE public.jk2_total_sc (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	area_acre float8 NULL,
	geom public.geometry(multipolygon) NULL,
	CONSTRAINT jk2_total_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_total_sc_geom_idx ON public.jk2_total_sc USING gist (geom);


-- public.jk2_unmapped_sc definition

-- Drop table

-- DROP TABLE public.jk2_unmapped_sc;

CREATE TABLE public.jk2_unmapped_sc (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	area_acre float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk2_unmapped_sc_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk2_unmapped_sc_geom_idx ON public.jk2_unmapped_sc USING gist (geom);


-- public.jk_agent_boundries_2025 definition

-- Drop table

-- DROP TABLE public.jk_agent_boundries_2025;

CREATE TABLE public.jk_agent_boundries_2025 (
	agent_name varchar(100) NULL,
	msisdn varchar(100) NULL,
	unit int4 NULL,
	geom public.geometry NULL,
	area_ac float8 NULL,
	create_dt date DEFAULT CURRENT_DATE NULL,
	update_dt timestamp NULL,
	circle_id uuid DEFAULT gen_random_uuid() NULL,
	is_assigned bool DEFAULT false NULL,
	circle_name varchar(255) NULL,
	sub_circle_name varchar(255) NULL
);
CREATE INDEX idx_circle_name ON public.jk_agent_boundries_2025 USING btree (circle_name);
CREATE INDEX idx_jk_agent_boundries_2025_circle_name ON public.jk_agent_boundries_2025 USING btree (circle_name);
CREATE INDEX idx_jk_agent_boundries_2025_geom ON public.jk_agent_boundries_2025 USING gist (geom);
CREATE INDEX idx_jkagent_msisdn ON public.jk_agent_boundries_2025 USING btree (circle_name);


-- public.jk_assigned_samples definition

-- Drop table

-- DROP TABLE public.jk_assigned_samples;

CREATE TABLE public.jk_assigned_samples (
	gid serial4 NOT NULL,
	id float8 NULL,
	msisdn float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	uc varchar(10) NULL,
	tehsil varchar(10) NULL,
	district varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_assigned_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_assigned_samples_geom_idx ON public.jk_assigned_samples USING gist (geom);


-- public.jk_assigned_sugarcane_20250818 definition

-- Drop table

-- DROP TABLE public.jk_assigned_sugarcane_20250818;

CREATE TABLE public.jk_assigned_sugarcane_20250818 (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area_ac float8 NULL,
	agent_name varchar(254) NULL,
	msisdn numeric NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	id uuid DEFAULT gen_random_uuid() NULL,
	CONSTRAINT jk_assigned_sugarcane_20250818_id_unique UNIQUE (id),
	CONSTRAINT jk_assigned_sugarcane_20250818_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_assigned_sugarcane_20250818_geom_idx ON public.jk_assigned_sugarcane_20250818 USING gist (geom);


-- public.jk_assigned_test_classification definition

-- Drop table

-- DROP TABLE public.jk_assigned_test_classification;

CREATE TABLE public.jk_assigned_test_classification (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	area_ac float8 NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit bool NULL,
	area_ac_2 numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_assigned_test_classification_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_assigned_test_classification_geom_idx ON public.jk_assigned_test_classification USING gist (geom);


-- public.jk_assigned_validation_samples definition

-- Drop table

-- DROP TABLE public.jk_assigned_validation_samples;

CREATE TABLE public.jk_assigned_validation_samples (
	gid serial4 NOT NULL,
	id float8 NULL,
	ndvi_mean numeric NULL,
	ndvi_std numeric NULL,
	area_acres numeric NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit bool NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_assigned_validation_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_assigned_validation_samples_geom_idx ON public.jk_assigned_validation_samples USING gist (geom);


-- public.jk_bkk_survey_app_crops_data_backup_20250827 definition

-- Drop table

-- DROP TABLE public.jk_bkk_survey_app_crops_data_backup_20250827;

CREATE TABLE public.jk_bkk_survey_app_crops_data_backup_20250827 (
	farm_id varchar(255) NULL,
	crop varchar(255) NULL,
	season varchar(255) NULL,
	variety varchar(255) NULL,
	farm_crop_id varchar(255) NULL
);


-- public.jk_bkk_survey_app_data_backup_20250827 definition

-- Drop table

-- DROP TABLE public.jk_bkk_survey_app_data_backup_20250827;

CREATE TABLE public.jk_bkk_survey_app_data_backup_20250827 (
	id uuid NULL,
	farm_id varchar(255) NULL,
	passbook_id varchar(255) NULL,
	status varchar(255) NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	profiled_by varchar(225) NULL,
	area float8 NULL,
	shape_id varchar NULL,
	partner_id varchar NULL,
	variety varchar(255) NULL,
	shape public.geometry(geometry, 4326) NULL
);


-- public.jk_boundries definition

-- Drop table

-- DROP TABLE public.jk_boundries;

CREATE TABLE public.jk_boundries (
	area numeric NULL,
	layer varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	unit float8 NULL
);
CREATE INDEX jk_boundries_geom_idx ON public.jk_boundries USING gist (geom);


-- public.jk_cane_variety definition

-- Drop table

-- DROP TABLE public.jk_cane_variety;

CREATE TABLE public.jk_cane_variety (
	"name" varchar(255) NULL,
	variety_type varchar(255) NULL,
	creation_date timestamp DEFAULT CURRENT_DATE NULL,
	unit int4 NULL,
	variety_id varchar(255) NULL
);


-- public.jk_cane_variety_copy definition

-- Drop table

-- DROP TABLE public.jk_cane_variety_copy;

CREATE TABLE public.jk_cane_variety_copy (
	"name" varchar(255) NULL,
	variety_type varchar(255) NULL,
	creation_date timestamp NULL,
	unit int4 NULL,
	variety_id varchar(255) NULL
);


-- public.jk_cane_variety_v1 definition

-- Drop table

-- DROP TABLE public.jk_cane_variety_v1;

CREATE TABLE public.jk_cane_variety_v1 (
	"name" varchar(255) NULL,
	varaity_type varchar(255) NULL,
	creation_date timestamp NULL,
	unit int4 NULL
);


-- public.jk_circle_boundries_2025 definition

-- Drop table

-- DROP TABLE public.jk_circle_boundries_2025;

CREATE TABLE public.jk_circle_boundries_2025 (
	circle_name varchar(100) NULL,
	unit int4 NULL,
	geom public.geometry NULL,
	area_ac float8 NULL,
	create_dt date DEFAULT CURRENT_DATE NULL,
	update_dt timestamp NULL
);


-- public.jk_circle_land_stats definition

-- Drop table

-- DROP TABLE public.jk_circle_land_stats;

CREATE TABLE public.jk_circle_land_stats (
	circle varchar(100) NULL,
	total_land numeric(10, 2) NULL,
	arable_land numeric(10, 2) NULL,
	non_arable_land numeric(10, 2) NULL,
	sugarcane_e_survey numeric(10, 2) NULL,
	validated_by_bkk numeric(10, 2) NULL,
	misreported_sugarcane numeric(10, 2) NULL,
	unreported_sugarcane numeric(10, 2) NULL,
	unit int4 NULL,
	geom public.geometry(geometry, 4326) NULL,
	validated_by_bkk_sec float8 NULL,
	misreported_sugarcane_sec float8 NULL,
	unreported_sugarcane_sec float8 NULL,
	total_sc numeric(10, 2) NULL,
	harvested_sc numeric(10, 2) NULL,
	balance_sc numeric(10, 2) NULL
);
CREATE INDEX idx_jk_circle_land_stats_circle ON public.jk_circle_land_stats USING btree (circle);


-- public.jk_circle_stats definition

-- Drop table

-- DROP TABLE public.jk_circle_stats;

CREATE TABLE public.jk_circle_stats (
	circle_name varchar(80) NULL,
	survey_area numeric NULL,
	incorrect_sugarcane_area numeric NULL,
	correct_sugarcane_area numeric NULL,
	unmapped_sugarcane_area float8 NULL,
	total_sugarcane_area float8 NULL,
	unit int4 NULL,
	shape public.geometry(multipolygon, 4326) NULL,
	correct_sec_sc float8 NULL,
	incorrect_sec_sc float8 NULL,
	unmapped_sec_sc float8 NULL,
	total_sec_sc float8 NULL
);
CREATE INDEX idx_jk_circle_stats_circle_name ON public.jk_circle_stats USING btree (circle_name);


-- public.jk_correct_samples_percentages definition

-- Drop table

-- DROP TABLE public.jk_correct_samples_percentages;

CREATE TABLE public.jk_correct_samples_percentages (
	gid serial4 NOT NULL,
	survey_id float8 NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	passbook_n varchar(254) NULL,
	grower_nam varchar(254) NULL,
	varieties varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	father_nam varchar(254) NULL,
	cnic varchar(254) NULL,
	farmer_msi numeric NULL,
	survey_dat date NULL,
	agent_name varchar(254) NULL,
	unit bool NULL,
	agent_msis numeric NULL,
	correct_su numeric NULL,
	incorrect_ numeric NULL,
	total_sum float8 NULL,
	sug_per float8 NULL,
	incorsug_p float8 NULL,
	total_per float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT jk_correct_samples_percentages_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_correct_samples_percentages_geom_idx ON public.jk_correct_samples_percentages USING gist (geom);


-- public.jk_crash_data definition

-- Drop table

-- DROP TABLE public.jk_crash_data;

CREATE TABLE public.jk_crash_data (
	circle_id int4 NULL,
	circle_name text NULL,
	crash_mtons float8 NULL,
	crash_maunds float8 NULL,
	processing_date date NULL,
	unit int4 NULL
);


-- public.jk_farms_24_25 definition

-- Drop table

-- DROP TABLE public.jk_farms_24_25;

CREATE TABLE public.jk_farms_24_25 (
	geom public.geometry NULL,
	survey_id text NULL,
	zone_area text NULL,
	circle text NULL,
	village text NULL,
	passbook_no text NULL,
	grower_name text NULL,
	varieties jsonb NULL,
	total_area numeric NULL,
	zone_type text NULL,
	tehsil text NULL,
	district text NULL,
	father_name text NULL,
	cnic text NULL,
	farmer_msisdn text NULL,
	survey_date date NULL,
	agent_name text NULL,
	unit varchar(5) NULL,
	agent_msisdn varchar(12) NULL
);


-- public.jk_gate_2024_survey definition

-- Drop table

-- DROP TABLE public.jk_gate_2024_survey;

CREATE TABLE public.jk_gate_2024_survey (
	gid serial4 NOT NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	unit float8 NULL,
	id varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit_2 float8 NULL,
	geom_2 varchar(254) NULL,
	area_ac numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_gate_2024_survey_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_gate_2024_survey_geom_idx ON public.jk_gate_2024_survey USING gist (geom);


-- public.jk_gate_other_2024_survey definition

-- Drop table

-- DROP TABLE public.jk_gate_other_2024_survey;

CREATE TABLE public.jk_gate_other_2024_survey (
	gid serial4 NOT NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	unit float8 NULL,
	id varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit_2 float8 NULL,
	geom_2 varchar(254) NULL,
	area_ac numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_gate_other_2024_survey_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_gate_other_2024_survey_geom_idx ON public.jk_gate_other_2024_survey USING gist (geom);


-- public.jk_growerloan_offseason definition

-- Drop table

-- DROP TABLE public.jk_growerloan_offseason;

CREATE TABLE public.jk_growerloan_offseason (
	passbook_no varchar(255) NOT NULL,
	loan_amount varchar(255) NULL,
	creation_date date DEFAULT CURRENT_DATE NULL,
	unit int4 NULL,
	CONSTRAINT jk_growerloan_offseason_pkey PRIMARY KEY (passbook_no)
);
CREATE INDEX idx_loan_passbook ON public.jk_growerloan_offseason USING btree (passbook_no);


-- public.jk_growerloan_offseason_temp definition

-- Drop table

-- DROP TABLE public.jk_growerloan_offseason_temp;

CREATE TABLE public.jk_growerloan_offseason_temp (
	passbook_no varchar(255) NOT NULL,
	loan_amount varchar(255) NULL,
	creation_date date DEFAULT CURRENT_DATE NULL,
	unit int4 NULL,
	CONSTRAINT jk_growerloan_offseason_temp_pkey PRIMARY KEY (passbook_no)
);


-- public.jk_growerloan_offseason_unit2 definition

-- Drop table

-- DROP TABLE public.jk_growerloan_offseason_unit2;

CREATE TABLE public.jk_growerloan_offseason_unit2 (
	passbook_no varchar(255) NULL,
	loan_amount varchar(255) NULL,
	creation_date date NULL,
	unit int4 NULL
);


-- public.jk_growers_data definition

-- Drop table

-- DROP TABLE public.jk_growers_data;

CREATE TABLE public.jk_growers_data (
	passbook_no varchar(254) NOT NULL,
	grower_name varchar(254) NULL,
	cnic varchar(254) NULL,
	father_name varchar(254) NULL,
	grower_msisdn varchar NULL,
	unit float8 NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	creation_date timestamp NULL,
	circle_copy varchar(255) NULL,
	unit_copy int4 NULL,
	inserted_dt timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT jk_growers_data_pkey PRIMARY KEY (passbook_no)
);
CREATE INDEX idx_growers_circle ON public.jk_growers_data USING btree (circle);
CREATE INDEX idx_growers_passbook ON public.jk_growers_data USING btree (passbook_no);
CREATE INDEX idx_growers_unit_circle ON public.jk_growers_data USING btree (unit, circle);
CREATE INDEX idx_jk_growers_passbook ON public.jk_growers_data USING btree (passbook_no);
CREATE INDEX idx_jk_growers_passbook_no ON public.jk_growers_data USING btree (passbook_no);
CREATE INDEX idx_jkgrowers_circle ON public.jk_growers_data USING btree (circle);
CREATE INDEX idx_jkgrowers_passbook_null ON public.jk_growers_data USING btree (passbook_no) WHERE (grower_msisdn IS NULL);


-- public.jk_growers_data_bk definition

-- Drop table

-- DROP TABLE public.jk_growers_data_bk;

CREATE TABLE public.jk_growers_data_bk (
	passbook_no varchar(254) NULL,
	grower_name varchar(254) NULL,
	cnic varchar(254) NULL,
	father_name varchar(254) NULL,
	grower_msisdn varchar NULL,
	unit float8 NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL
);


-- public.jk_growers_data_new definition

-- Drop table

-- DROP TABLE public.jk_growers_data_new;

CREATE TABLE public.jk_growers_data_new (
	passbook_no varchar(254) NULL,
	grower_name varchar(254) NULL,
	cnic varchar(254) NULL,
	father_name varchar(254) NULL,
	grower_msisdn varchar NULL,
	unit float8 NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	creation_date timestamp NULL,
	circle_copy varchar(255) NULL,
	unit_copy int4 NULL,
	inserted_dt timestamp NULL
);


-- public.jk_growers_data_unit2 definition

-- Drop table

-- DROP TABLE public.jk_growers_data_unit2;

CREATE TABLE public.jk_growers_data_unit2 (
	passbook_no varchar(60) NOT NULL,
	grower_name varchar(255) NULL,
	father_name varchar(255) NULL,
	cnic varchar(40) NULL,
	grower_msisdn varchar(50) NULL,
	circle varchar(50) NULL,
	village varchar(50) NULL,
	creation_date timestamp NULL,
	CONSTRAINT jk_growers_data_unit2_pkey PRIMARY KEY (passbook_no)
);


-- public.jk_harvest_manual definition

-- Drop table

-- DROP TABLE public.jk_harvest_manual;

CREATE TABLE public.jk_harvest_manual (
	gid serial4 NOT NULL,
	dn int4 NULL,
	circle varchar(254) NULL,
	area_ac numeric NULL,
	farm_id varchar(254) NULL,
	unit float8 NULL,
	har varchar NULL,
	avg_mean numeric NULL,
	area float8 NULL,
	update_dat date NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	harvested bool NULL,
	CONSTRAINT jk_harvest_manual_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_jk_harvest_manual_geom ON public.jk_harvest_manual USING gist (geom);
CREATE INDEX idx_jk_harvest_manual_group ON public.jk_harvest_manual USING btree (farm_id, circle, update_dat);
CREATE INDEX idx_jk_harvest_manual_unit ON public.jk_harvest_manual USING btree (unit);
CREATE INDEX idx_jk_harvest_manual_unit_update ON public.jk_harvest_manual USING btree (unit, update_dat, harvested);
CREATE INDEX jk_harvest_manual_geom_idx ON public.jk_harvest_manual USING gist (geom);


-- public.jk_harvest_sc definition

-- Drop table

-- DROP TABLE public.jk_harvest_sc;

CREATE TABLE public.jk_harvest_sc (
	circle varchar(80) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	sc_type text NULL,
	farm_id uuid DEFAULT gen_random_uuid() NOT NULL,
	unit text NULL,
	status text NULL,
	ndvi numeric(10, 2) NULL,
	harvest_date date NULL,
	tile_id text NULL,
	update_date date NULL,
	balance_sc json NULL,
	balance_area numeric(10, 2) NULL,
	harvested_sc json NULL,
	CONSTRAINT jk2_post_sc_it2_pkey PRIMARY KEY (farm_id)
);
CREATE INDEX idx_geom ON public.jk_harvest_sc USING gist (geom);
CREATE INDEX idx_jk_harvest_sc_circle ON public.jk_harvest_sc USING btree (circle);
CREATE INDEX idx_jk_harvest_sc_farm_id ON public.jk_harvest_sc USING btree (farm_id);
CREATE INDEX idx_jk_harvest_sc_unit ON public.jk_harvest_sc USING btree (unit);
CREATE INDEX idx_jk_harvest_sc_update_date ON public.jk_harvest_sc USING btree (update_date);

-- Table Triggers

create trigger update_balance_area_trigger before
insert
    or
update
    of balance_sc on
    public.jk_harvest_sc for each row execute function update_balance_area();


-- public.jk_harvest_sc_bk definition

-- Drop table

-- DROP TABLE public.jk_harvest_sc_bk;

CREATE TABLE public.jk_harvest_sc_bk (
	circle varchar(80) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	sc_type text NULL,
	farm_id uuid NULL,
	unit text NULL,
	status text NULL,
	ndvi numeric(10, 2) NULL,
	harvest_date date NULL,
	tile_id text NULL,
	update_date date NULL,
	balance_sc json NULL,
	balance_area numeric(10, 2) NULL,
	harvested_sc json NULL
);


-- public.jk_harvest_update definition

-- Drop table

-- DROP TABLE public.jk_harvest_update;

CREATE TABLE public.jk_harvest_update (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	sc_id text NULL,
	balance_sc json NULL,
	update_date date NULL,
	ndvi_avg numeric(10, 2) NULL,
	cloud_cover float8 NULL,
	unit varchar(10) NULL,
	ndvi_min numeric(10, 2) NULL,
	ndvi_max numeric(10, 2) NULL,
	harvested_area numeric(10, 2) NULL,
	balance_area numeric(10, 2) NULL,
	harvested_sc json NULL,
	circle varchar NULL,
	CONSTRAINT jk_harvest_pkey PRIMARY KEY (id),
	CONSTRAINT jk_harvest_update_unique UNIQUE (sc_id, update_date)
);
CREATE INDEX idx_jk_harvest_update_balance_area ON public.jk_harvest_update USING btree (balance_area);
CREATE INDEX idx_jk_harvest_update_harvested_area ON public.jk_harvest_update USING btree (harvested_area);
CREATE INDEX idx_jk_harvest_update_unit ON public.jk_harvest_update USING btree (unit);
CREATE INDEX idx_jk_harvest_update_update_date ON public.jk_harvest_update USING btree (update_date);


-- public.jk_harvest_updates definition

-- Drop table

-- DROP TABLE public.jk_harvest_updates;

CREATE TABLE public.jk_harvest_updates (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	sc_id text NULL,
	balance_sc json NULL,
	update_date date NULL,
	ndvi_avg numeric(10, 2) NULL,
	cloud_cover float8 NULL,
	unit varchar(10) NULL,
	ndvi_min numeric(10, 2) NULL,
	ndvi_max numeric(10, 2) NULL,
	harvested_area numeric(10, 2) NULL,
	balance_area numeric(10, 2) NULL,
	harvested_sc json NULL,
	circle varchar NULL,
	CONSTRAINT jk_harvest_updates_pkey PRIMARY KEY (id),
	CONSTRAINT jk_harvest_updates_unique UNIQUE (sc_id, update_date)
);
CREATE INDEX idx_harvest_updates_unit ON public.jk_harvest_updates USING btree (unit);
CREATE INDEX idx_jk_harvest_updates_balance_area ON public.jk_harvest_updates USING btree (balance_area);
CREATE INDEX idx_jk_harvest_updates_harvested_area ON public.jk_harvest_updates USING btree (harvested_area);
CREATE INDEX idx_jk_harvest_updates_update_date ON public.jk_harvest_updates USING btree (update_date);


-- public.jk_headoffice_circles definition

-- Drop table

-- DROP TABLE public.jk_headoffice_circles;

CREATE TABLE public.jk_headoffice_circles (
	gid serial4 NOT NULL,
	id float8 NULL,
	"name" varchar(25) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_headoffice_circles_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_headoffice_circles_geom_idx ON public.jk_headoffice_circles USING gist (geom);


-- public.jk_headoffice_circles_geographic definition

-- Drop table

-- DROP TABLE public.jk_headoffice_circles_geographic;

CREATE TABLE public.jk_headoffice_circles_geographic (
	gid serial4 NOT NULL,
	id float8 NULL,
	"name" varchar(25) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_headoffice_circles_geographic_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_headoffice_circles_geographic_geom_idx ON public.jk_headoffice_circles_geographic USING gist (geom);


-- public.jk_headoffice_samples definition

-- Drop table

-- DROP TABLE public.jk_headoffice_samples;

CREATE TABLE public.jk_headoffice_samples (
	gid serial4 NOT NULL,
	id float8 NULL,
	"name" varchar(25) NULL,
	zone_area varchar(20) NULL,
	circle varchar(25) NULL,
	village varchar(25) NULL,
	total_area float8 NULL,
	zone_type varchar(25) NULL,
	tehsil varchar(25) NULL,
	district varchar(20) NULL,
	unit float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_headoffice_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_headoffice_samples_geom_idx ON public.jk_headoffice_samples USING gist (geom);


-- public.jk_new_person_data definition

-- Drop table

-- DROP TABLE public.jk_new_person_data;

CREATE TABLE public.jk_new_person_data (
	gid serial4 NOT NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	msisdn varchar(20) NULL,
	tehsil varchar(10) NULL,
	district varchar(10) NULL,
	uc varchar(11) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	crop varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_new_person_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_new_person_data_geom_idx ON public.jk_new_person_data USING gist (geom);


-- public.jk_sar_harvest_manual definition

-- Drop table

-- DROP TABLE public.jk_sar_harvest_manual;

CREATE TABLE public.jk_sar_harvest_manual (
	gid int4 NULL,
	dn int4 NULL,
	circle varchar(254) NULL,
	area_ac numeric NULL,
	farm_id varchar(254) NULL,
	unit float8 NULL,
	harvested bool NULL,
	avg_mean numeric NULL,
	area float8 NULL,
	update_dat date NULL,
	geom public.geometry(multipolygon, 4326) NULL
);
CREATE INDEX idx_jk_sar_harvest_manual_geom ON public.jk_sar_harvest_manual USING gist (geom);
CREATE INDEX idx_jk_sar_harvest_manual_unit_update ON public.jk_sar_harvest_manual USING btree (unit, update_dat, harvested);


-- public.jk_sugarcane_latest_ndvi_20251003 definition

-- Drop table

-- DROP TABLE public.jk_sugarcane_latest_ndvi_20251003;

CREATE TABLE public.jk_sugarcane_latest_ndvi_20251003 (
	farm_id varchar NULL,
	image_date date NULL,
	ndvi_avg float8 NULL,
	shape public.geometry NULL,
	geom text NULL
);


-- public.jk_survey_temp definition

-- Drop table

-- DROP TABLE public.jk_survey_temp;

CREATE TABLE public.jk_survey_temp (
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	geom public.geometry NULL,
	unit float8 NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	area_ac float8 NULL,
	is_assigned bool DEFAULT false NULL,
	agent_number varchar(255) NULL,
	CONSTRAINT jk_survey_temp_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_jk_survey_geom ON public.jk_survey_temp USING gist (geom);
CREATE INDEX idx_jk_survey_temp_circle ON public.jk_survey_temp USING btree (circle);
CREATE INDEX idx_jk_survey_temp_geom ON public.jk_survey_temp USING gist (geom);
CREATE INDEX idx_jk_survey_temp_id ON public.jk_survey_temp USING btree (id);
CREATE INDEX idx_jk_survey_temp_id_varchar ON public.jk_survey_temp USING btree (((id)::character varying));
CREATE INDEX idx_jk_survey_temp_tehsil ON public.jk_survey_temp USING btree (tehsil);
CREATE INDEX idx_jk_survey_temp_unit ON public.jk_survey_temp USING btree (unit);
CREATE INDEX idx_jk_survey_temp_village ON public.jk_survey_temp USING btree (village);


-- public.jk_survey_temp_copy definition

-- Drop table

-- DROP TABLE public.jk_survey_temp_copy;

CREATE TABLE public.jk_survey_temp_copy (
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	geom public.geometry NULL,
	unit float8 NULL,
	id uuid NULL,
	latitude float8 NULL,
	longitude float8 NULL
);


-- public.jk_survey_temp_previous_assigned_data definition

-- Drop table

-- DROP TABLE public.jk_survey_temp_previous_assigned_data;

CREATE TABLE public.jk_survey_temp_previous_assigned_data (
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	geom public.geometry NULL,
	unit float8 NULL,
	id uuid NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	area_ac float8 NULL,
	is_assigned bool NULL,
	agent_number varchar(255) NULL
);


-- public.jk_unit1_2025_data definition

-- Drop table

-- DROP FOREIGN TABLE public.jk_unit1_2025_data;

CREATE FOREIGN TABLE public.jk_unit1_2025_data (
	farm_id varchar NULL,
	farmcrop_id varchar NULL,
	farmer_id varchar NULL,
	profiled_by varchar NULL,
	farmer_name varchar NULL,
	cnic varchar NULL,
	passbook_no varchar NULL,
	farmer_status varchar NULL,
	land_area numeric NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	farm_title varchar NULL,
	shape_id varchar NULL,
	temp_id varchar NULL,
	crop_season varchar NULL,
	"type" varchar NULL,
	title varchar NULL,
	geom text NULL,
	shape public.geometry NULL,
	profile_image text NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	seed_type varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	growth_stage varchar NULL,
	gs_date date NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'jk_unit1_2025_data');


-- public.jk_unit1_2025_images_data definition

-- Drop table

-- DROP FOREIGN TABLE public.jk_unit1_2025_images_data;

CREATE FOREIGN TABLE public.jk_unit1_2025_images_data (
	id uuid NULL,
	create_dt timestamp NULL,
	image text NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'jk_unit1_2025_images_data');


-- public.jk_unit1_assigned_sugarcane_v1 definition

-- Drop table

-- DROP TABLE public.jk_unit1_assigned_sugarcane_v1;

CREATE TABLE public.jk_unit1_assigned_sugarcane_v1 (
	gid serial4 NOT NULL,
	id float8 NULL,
	ndvi_mean numeric NULL,
	ndvi_std numeric NULL,
	area_acres numeric NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit bool NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_unit1_assigned_sugarcane_v1_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit1_assigned_sugarcane_v1_geom_idx ON public.jk_unit1_assigned_sugarcane_v1 USING gist (geom);


-- public.jk_unit1_circle_land_stats definition

-- Drop table

-- DROP TABLE public.jk_unit1_circle_land_stats;

CREATE TABLE public.jk_unit1_circle_land_stats (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	arable numeric NULL,
	nonarable numeric NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT jk_unit1_circle_land_stats_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit1_circle_land_stats_geom_idx ON public.jk_unit1_circle_land_stats USING gist (geom);


-- public.jk_unit1_circles_stats definition

-- Drop table

-- DROP TABLE public.jk_unit1_circles_stats;

CREATE TABLE public.jk_unit1_circles_stats (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	incorrect numeric NULL,
	correct numeric NULL,
	unmapped numeric NULL,
	surveyarea numeric NULL,
	total_sug float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT jk_unit1_circles_stats_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit1_circles_stats_geom_idx ON public.jk_unit1_circles_stats USING gist (geom);


-- public.jk_unit1_suparco_assigned_data definition

-- Drop table

-- DROP TABLE public.jk_unit1_suparco_assigned_data;

CREATE TABLE public.jk_unit1_suparco_assigned_data (
	gid serial4 NOT NULL,
	fid varchar(80) NULL,
	area_ac numeric NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit bool NULL,
	area_ac_2 numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_unit1_suparco_assigned_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit1_suparco_assigned_data_geom_idx ON public.jk_unit1_suparco_assigned_data USING gist (geom);


-- public.jk_unit2_agents definition

-- Drop table

-- DROP TABLE public.jk_unit2_agents;

CREATE TABLE public.jk_unit2_agents (
	circle varchar NULL,
	msisdn varchar NULL,
	"name" varchar NULL,
	designation varchar NULL,
	villages_bounds varchar NULL,
	village_deh varchar NULL
);


-- public.jk_unit2_circle_land_stats definition

-- Drop table

-- DROP TABLE public.jk_unit2_circle_land_stats;

CREATE TABLE public.jk_unit2_circle_land_stats (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	arabjk2 numeric NULL,
	nonarabjk2 numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_unit2_circle_land_stats_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit2_circle_land_stats_geom_idx ON public.jk_unit2_circle_land_stats USING gist (geom);


-- public.jk_unit2_circles definition

-- Drop table

-- DROP TABLE public.jk_unit2_circles;

CREATE TABLE public.jk_unit2_circles (
	gid serial4 NOT NULL,
	"name" varchar(80) NULL,
	circle varchar(254) NULL,
	unmapped_a numeric NULL,
	circle_2 varchar(254) NULL,
	survey_are numeric NULL,
	correct_su numeric NULL,
	incorrect_ numeric NULL,
	tot_sug float8 NULL,
	unmap_sug float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_unit2_circles_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit2_circles_geom_idx ON public.jk_unit2_circles USING gist (geom);


-- public.jk_unit2_data definition

-- Drop table

-- DROP TABLE public.jk_unit2_data;

CREATE TABLE public.jk_unit2_data (
	msisdn varchar NULL,
	farmer_name varchar(60) NULL,
	profiled_by varchar NULL,
	circle_name varchar(60) NULL,
	location_name varchar NULL,
	farm_id varchar NULL,
	farm_crop_id varchar NULL,
	farm_title varchar NULL,
	crop_name varchar NULL,
	growth_stage varchar NULL,
	growth_stage_date date NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	shape public.geometry NULL,
	area numeric NULL
);
CREATE INDEX jk_unit2_data_geom_idx ON public.jk_unit2_data USING gist (shape);


-- public.jk_unit_samples_assigned definition

-- Drop table

-- DROP TABLE public.jk_unit_samples_assigned;

CREATE TABLE public.jk_unit_samples_assigned (
	gid serial4 NOT NULL,
	uc varchar(12) NULL,
	tahsil varchar(10) NULL,
	district varchar(10) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	sample_id float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	id float8 NULL,
	profiled_b float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_unit_samples_assigned_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_unit_samples_assigned_geom_idx ON public.jk_unit_samples_assigned USING gist (geom);


-- public.jk_validation_samples definition

-- Drop table

-- DROP TABLE public.jk_validation_samples;

CREATE TABLE public.jk_validation_samples (
	gid serial4 NOT NULL,
	"type" varchar(10) NULL,
	color varchar(10) NULL,
	uc varchar(80) NULL,
	profiled_b float8 NULL,
	area float8 NULL,
	area_ac float8 NULL,
	__gid float8 NULL,
	district varchar(10) NULL,
	tehsil varchar(10) NULL,
	state varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	fid float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_validation_samples_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_validation_samples_geom_idx ON public.jk_validation_samples USING gist (geom);


-- public.jk_validation_samples_v2 definition

-- Drop table

-- DROP TABLE public.jk_validation_samples_v2;

CREATE TABLE public.jk_validation_samples_v2 (
	gid serial4 NOT NULL,
	"type" varchar(10) NULL,
	color varchar(10) NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	uc varchar(80) NULL,
	profiled_b float8 NULL,
	area float8 NULL,
	area_ac float8 NULL,
	fid float8 NULL,
	district varchar(10) NULL,
	tehsil varchar(10) NULL,
	state varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jk_validation_samples_v2_pkey PRIMARY KEY (gid)
);
CREATE INDEX jk_validation_samples_v2_geom_idx ON public.jk_validation_samples_v2 USING gist (geom);


-- public.jkfarms_complete definition

-- Drop table

-- DROP TABLE public.jkfarms_complete;

CREATE TABLE public.jkfarms_complete (
	id int8 NOT NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	"name" varchar(80) NULL,
	descriptio varchar(169) NULL,
	passbook varchar(80) NULL,
	farmer_nam varchar(80) NULL,
	circle varchar(80) NULL,
	village varchar(80) NULL,
	area varchar(80) NULL,
	variety varchar(80) NULL,
	survey_no varchar(80) NULL,
	"location" varchar(80) NULL,
	unit int8 NULL,
	profiled_by varchar(15) NULL,
	CONSTRAINT jk_fix_v3_pkey PRIMARY KEY (id)
);
CREATE INDEX sidx_jk_fix_v3_geom ON public.jkfarms_complete USING gist (geom);


-- public.jkunit1_boundry_20250305 definition

-- Drop table

-- DROP TABLE public.jkunit1_boundry_20250305;

CREATE TABLE public.jkunit1_boundry_20250305 (
	gid serial4 NOT NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jkunit1_boundry_20250305_pkey PRIMARY KEY (gid)
);
CREATE INDEX jkunit1_boundry_20250305_geom_idx ON public.jkunit1_boundry_20250305 USING gist (geom);


-- public.jkunit1_sar_20250217 definition

-- Drop table

-- DROP TABLE public.jkunit1_sar_20250217;

CREATE TABLE public.jkunit1_sar_20250217 (
	gid serial4 NOT NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jkunit1_sar_20250217_pkey PRIMARY KEY (gid)
);
CREATE INDEX jkunit1_sar_20250217_geom_idx ON public.jkunit1_sar_20250217 USING gist (geom);


-- public.jkunit1_sar_harvested definition

-- Drop table

-- DROP TABLE public.jkunit1_sar_harvested;

CREATE TABLE public.jkunit1_sar_harvested (
	"name" varchar(254) NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	balance_area_ac float8 NULL,
	harvest_area_ac float8 NULL,
	farm_id uuid DEFAULT gen_random_uuid() NULL,
	harvest_geometry public.geometry NULL,
	balance_geometry public.geometry NULL
);


-- public.jkunit1_sarvh_20240124_boundry definition

-- Drop table

-- DROP TABLE public.jkunit1_sarvh_20240124_boundry;

CREATE TABLE public.jkunit1_sarvh_20240124_boundry (
	gid serial4 NOT NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jkunit1_sarvh_20240124_boundry_pkey PRIMARY KEY (gid)
);
CREATE INDEX jkunit1_sarvh_20240124_boundry_geom_idx ON public.jkunit1_sarvh_20240124_boundry USING gist (geom);


-- public.jkunit1_stats25 definition

-- Drop table

-- DROP TABLE public.jkunit1_stats25;

CREATE TABLE public.jkunit1_stats25 (
	geom public.geometry NULL,
	survey_id text NULL,
	zone_area text NULL,
	circle text NULL,
	village text NULL,
	passbook_no text NULL,
	grower_name text NULL,
	varieties jsonb NULL,
	total_area numeric NULL,
	zone_type text NULL,
	tehsil text NULL,
	district text NULL,
	father_name text NULL,
	cnic text NULL,
	farmer_msisdn text NULL,
	survey_date date NULL,
	agent_name text NULL,
	unit varchar(5) NULL,
	agent_msisdn varchar(12) NULL,
	sugarcane_percentage float8 NULL,
	nonsugarcane_percentage float8 NULL
);
CREATE INDEX jkunit1_stats25_geom_idx ON public.jkunit1_stats25 USING gist (geom);


-- public.jkunit2_2025_80_percent_sugarcane_preprocessed definition

-- Drop table

-- DROP TABLE public.jkunit2_2025_80_percent_sugarcane_preprocessed;

CREATE TABLE public.jkunit2_2025_80_percent_sugarcane_preprocessed (
	gid serial4 NOT NULL,
	id float8 NULL,
	ndvi_mean numeric NULL,
	ndvi_std numeric NULL,
	area_acres numeric NULL,
	agent_name varchar(254) NULL,
	msisdn varchar(254) NULL,
	unit float8 NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT jkunit2_2025_80_percent_sugarcane_preprocessed_pkey PRIMARY KEY (gid)
);
CREATE INDEX jkunit2_2025_80_percent_sugarcane_preprocessed_geom_idx ON public.jkunit2_2025_80_percent_sugarcane_preprocessed USING gist (geom);


-- public.jkunit2_sar_harvested definition

-- Drop table

-- DROP TABLE public.jkunit2_sar_harvested;

CREATE TABLE public.jkunit2_sar_harvested (
	gid int4 NULL,
	fid numeric NULL,
	dn float8 NULL,
	area_ac float8 NULL,
	"name" varchar(80) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	farm_id uuid DEFAULT gen_random_uuid() NULL,
	balance_geometry public.geometry NULL,
	harvest_geometry public.geometry NULL,
	harvest_area_ac float8 NULL,
	balance_area_ac float8 NULL
);


-- public.jkunit2_stats25 definition

-- Drop table

-- DROP TABLE public.jkunit2_stats25;

CREATE TABLE public.jkunit2_stats25 (
	id serial4 NOT NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	survey_id int8 NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	passbook_n varchar(254) NULL,
	grower_nam varchar(254) NULL,
	varieties varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	father_nam varchar(254) NULL,
	cnic varchar(254) NULL,
	farmer_msi numeric NULL,
	survey_dat varchar(254) NULL,
	agent_name varchar(254) NULL,
	unit int8 NULL,
	agent_msis numeric NULL,
	non_sc_are numeric NULL,
	sc_area numeric NULL,
	CONSTRAINT jkunit2_stats25_pkey PRIMARY KEY (id)
);
CREATE INDEX jkunit2_stats25_geom_idx ON public.jkunit2_stats25 USING gist (geom);


-- public.jkunit_harvest_stats_20250305_ndvi definition

-- Drop table

-- DROP TABLE public.jkunit_harvest_stats_20250305_ndvi;

CREATE TABLE public.jkunit_harvest_stats_20250305_ndvi (
	gid int4 NULL,
	dn int4 NULL,
	circle varchar(254) NULL,
	area_ac numeric NULL,
	farm_id varchar(254) NULL,
	unit float8 NULL,
	harvested bool NULL,
	avg_mean numeric NULL,
	area float8 NULL,
	update_dat date NULL,
	geom public.geometry(multipolygon, 4326) NULL
);


-- public.jkunit_stats_v1 definition

-- Drop table

-- DROP TABLE public.jkunit_stats_v1;

CREATE TABLE public.jkunit_stats_v1 (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	correct float8 NULL,
	total float8 NULL,
	esarvey float8 NULL,
	___sum numeric NULL,
	unmapped_s numeric NULL,
	incorrect float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT jkunit_stats_v1_pkey PRIMARY KEY (gid)
);
CREATE INDEX jkunit_stats_v1_geom_idx ON public.jkunit_stats_v1 USING gist (geom);


-- public.jkunit_survey_stats25 definition

-- Drop table

-- DROP TABLE public.jkunit_survey_stats25;

CREATE TABLE public.jkunit_survey_stats25 (
	gid serial4 NOT NULL,
	survey_id float8 NULL,
	zone_area varchar(254) NULL,
	circle varchar(254) NULL,
	village varchar(254) NULL,
	passbook_n varchar(254) NULL,
	grower_nam varchar(254) NULL,
	varieties varchar(254) NULL,
	total_area numeric NULL,
	zone_type varchar(254) NULL,
	tehsil varchar(254) NULL,
	district varchar(254) NULL,
	father_nam varchar(254) NULL,
	cnic varchar(254) NULL,
	farmer_msi numeric NULL,
	survey_dat date NULL,
	agent_name varchar(254) NULL,
	agent_msis numeric NULL,
	unit varchar(10) NULL,
	sug_area float8 NULL,
	nonsug_are float8 NULL,
	sug_per float8 NULL,
	non_sug float8 NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT jkunit_survey_stats25_pkey PRIMARY KEY (gid)
);
CREATE INDEX jkunit_survey_stats25_geom_idx ON public.jkunit_survey_stats25 USING gist (geom);


-- public.kats_sargodha_data definition

-- Drop table

-- DROP TABLE public.kats_sargodha_data;

CREATE TABLE public.kats_sargodha_data (
	"date" date NULL,
	farmer_name varchar(255) NULL,
	mobile_number varchar(20) NULL,
	district varchar(100) NULL,
	tehsil varchar(100) NULL,
	category varchar(100) NULL,
	item_name varchar(255) NULL,
	f_amount numeric(13, 2) NULL,
	f_profit numeric(13, 2) NULL
);


-- public.kharif24_crops_area definition

-- Drop table

-- DROP TABLE public.kharif24_crops_area;

CREATE TABLE public.kharif24_crops_area (
	district varchar(255) NOT NULL,
	crop varchar(255) NOT NULL,
	pixel_count int8 NOT NULL,
	area_ms float8 NULL,
	area_ac float8 NULL,
	CONSTRAINT kharif24_crops_area_pkey PRIMARY KEY (district, crop)
);


-- public.kharif25_bhalwal definition

-- Drop table

-- DROP TABLE public.kharif25_bhalwal;

CREATE TABLE public.kharif25_bhalwal (
	gid serial4 NOT NULL,
	area numeric NULL,
	rabi25 varchar(100) NULL,
	kharif25 varchar(100) NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT kharif25_bhalwal_pkey PRIMARY KEY (gid)
);
CREATE INDEX kharif25_bhalwal_geom_idx ON public.kharif25_bhalwal USING gist (geom);


-- public.kharif25_kot_momin definition

-- Drop table

-- DROP TABLE public.kharif25_kot_momin;

CREATE TABLE public.kharif25_kot_momin (
	gid serial4 NOT NULL,
	area numeric NULL,
	rabi25 varchar(100) NULL,
	kharif25 varchar(100) NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT kharif25_kot_momin_pkey PRIMARY KEY (gid)
);
CREATE INDEX kharif25_kot_momin_geom_idx ON public.kharif25_kot_momin USING gist (geom);


-- public.kharif25_sahiwal definition

-- Drop table

-- DROP TABLE public.kharif25_sahiwal;

CREATE TABLE public.kharif25_sahiwal (
	gid serial4 NOT NULL,
	area numeric NULL,
	rabi varchar(100) NULL,
	kharif varchar(50) NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT kharif25_sahiwal_pkey PRIMARY KEY (gid)
);
CREATE INDEX kharif25_sahiwal_geom_idx ON public.kharif25_sahiwal USING gist (geom);


-- public.kharif25_sargodha definition

-- Drop table

-- DROP TABLE public.kharif25_sargodha;

CREATE TABLE public.kharif25_sargodha (
	gid serial4 NOT NULL,
	area numeric NULL,
	rabi25 varchar(100) NULL,
	kharif25 varchar(100) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT kharif25_sargodha_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_kharif25_sargodha_area ON public.kharif25_sargodha USING btree (area);
CREATE INDEX idx_kharif25_sargodha_area_nulls_last ON public.kharif25_sargodha USING btree (area);
CREATE INDEX idx_kharif25_sargodha_geom ON public.kharif25_sargodha USING gist (geom);
CREATE INDEX idx_kharif25_sargodha_geom_bbox ON public.kharif25_sargodha USING gist (st_envelope(geom));
CREATE INDEX idx_kharif25_sargodha_geom_gist ON public.kharif25_sargodha USING gist (geom);
CREATE INDEX idx_kharif25_sargodha_kharif25 ON public.kharif25_sargodha USING btree (kharif25);
CREATE INDEX idx_kharif25_sargodha_kharif25_lower ON public.kharif25_sargodha USING btree (lower((kharif25)::text));
CREATE INDEX idx_kharif25_sargodha_rabi25 ON public.kharif25_sargodha USING btree (rabi25);
CREATE INDEX idx_kharif25_sargodha_rabi25_lower ON public.kharif25_sargodha USING btree (lower((rabi25)::text));


-- public.kharif25_shahpur definition

-- Drop table

-- DROP TABLE public.kharif25_shahpur;

CREATE TABLE public.kharif25_shahpur (
	gid serial4 NOT NULL,
	area numeric NULL,
	rabi25 varchar(100) NULL,
	kharif25 varchar(100) NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT kharif25_shahpur_pkey PRIMARY KEY (gid)
);
CREATE INDEX kharif25_shahpur_geom_idx ON public.kharif25_shahpur USING gist (geom);


-- public.kharif25_silanwali definition

-- Drop table

-- DROP TABLE public.kharif25_silanwali;

CREATE TABLE public.kharif25_silanwali (
	gid serial4 NOT NULL,
	area numeric NULL,
	rabi25 varchar(100) NULL,
	kharif25 varchar(100) NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	CONSTRAINT kharif25_silanwali_pkey PRIMARY KEY (gid)
);
CREATE INDEX kharif25_silanwali_geom_idx ON public.kharif25_silanwali USING gist (geom);


-- public.kharif_24_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.kharif_24_data_verification_vw;

CREATE FOREIGN TABLE public.kharif_24_data_verification_vw (
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar(255) OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farmer_status uuid OPTIONS(column_name 'farmer_status') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'kharif_24_data_verification_vw');


-- public.kharif_24_data_verification_vw_prod definition

-- Drop table

-- DROP FOREIGN TABLE public.kharif_24_data_verification_vw_prod;

CREATE FOREIGN TABLE public.kharif_24_data_verification_vw_prod (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farm_status varchar(255) OPTIONS(column_name 'farm_status') NULL,
	farm_desc text OPTIONS(column_name 'farm_desc') NULL,
	farmer_status varchar(255) OPTIONS(column_name 'farmer_status') NULL,
	farmer_desc text OPTIONS(column_name 'farmer_desc') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar(255) OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar(255) OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'kharif_24_data_verification_vw');


-- public.kharif_24_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.kharif_24_images_vw;

CREATE FOREIGN TABLE public.kharif_24_images_vw (
	id varchar(255) OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'kharif_24_images_vw');


-- public.kharif_24_images_vw_prod definition

-- Drop table

-- DROP FOREIGN TABLE public.kharif_24_images_vw_prod;

CREATE FOREIGN TABLE public.kharif_24_images_vw_prod (
	id varchar OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'kharif_24_images_vw');


-- public.kharif_25_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.kharif_25_data_verification_vw;

CREATE FOREIGN TABLE public.kharif_25_data_verification_vw (
	farm_id varchar NULL,
	farmcrop_id varchar NULL,
	farmer_id varchar NULL,
	profiled_by varchar NULL,
	farmer_status uuid NULL,
	land_area float8 NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	farm_title varchar NULL,
	shape_id varchar NULL,
	temp_id varchar NULL,
	crop_season varchar NULL,
	title varchar NULL,
	geom text NULL,
	shape public.geometry NULL,
	profile_image text NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	seed_type varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	growth_stage varchar NULL,
	gs_date varchar NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'kharif_25_data_verification_vw');


-- public.kharif_25_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.kharif_25_images_vw;

CREATE FOREIGN TABLE public.kharif_25_images_vw (
	farm_id varchar NULL,
	create_dt timestamp NULL,
	image text NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'kharif_25_images_vw');


-- public.khasra_boundaries definition

-- Drop table

-- DROP TABLE public.khasra_boundaries;

CREATE TABLE public.khasra_boundaries (
	gid serial4 NOT NULL,
	id float8 NULL,
	m numeric NULL,
	sk varchar(50) NULL,
	k numeric NULL,
	mouza varchar(100) NULL,
	district varchar(100) NULL,
	tehsil varchar(100) NULL,
	pc varchar(100) NULL,
	"label" varchar(50) NULL,
	remarks varchar(100) NULL,
	dist_id varchar(254) NULL,
	tehsil_id varchar(254) NULL,
	pc_id varchar(254) NULL,
	mouza_id numeric NULL,
	join_shp varchar(50) NULL,
	qh varchar(50) NULL,
	karam varchar(25) NULL,
	"type" varchar(50) NULL,
	mn numeric NULL,
	b numeric NULL,
	qh_id varchar(254) NULL,
	khasra_id varchar(50) NULL,
	sr_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT khasra_boundaries_pkey PRIMARY KEY (gid)
);
CREATE INDEX khasra_boundaries_geom_idx ON public.khasra_boundaries USING gist (geom);


-- public.kp_fertilizer_dealers definition

-- Drop table

-- DROP TABLE public.kp_fertilizer_dealers;

CREATE TABLE public.kp_fertilizer_dealers (
	gid serial4 NOT NULL,
	district varchar(254) NULL,
	business_name varchar(254) NULL,
	registered_dealer varchar(254) NULL,
	dealer_code varchar(254) NULL,
	contact_no varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	address varchar(254) NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT kp_fertilizer_dealers_pkey PRIMARY KEY (gid)
);
CREATE INDEX kp_fertilizer_dealers_geom_idx ON public.kp_fertilizer_dealers USING gist (geom);


-- public.kp_soil_samples definition

-- Drop table

-- DROP TABLE public.kp_soil_samples;

CREATE TABLE public.kp_soil_samples (
	district varchar NULL,
	tehsil varchar NULL,
	"name" varchar NULL,
	cnic varchar NULL,
	mobile_no varchar NULL,
	uc varchar NULL,
	village varchar NULL,
	land_acres varchar NULL,
	latitude varchar NULL,
	longitude varchar NULL,
	barcode varchar NULL,
	ph varchar NULL,
	ec varchar NULL,
	tss varchar NULL,
	sand varchar NULL,
	silt varchar NULL,
	clay varchar NULL,
	texture_class varchar NULL,
	caco3 varchar NULL,
	organic_matter varchar NULL,
	n varchar NULL,
	p varchar NULL,
	k varchar NULL,
	id serial4 NOT NULL,
	CONSTRAINT kp_soil_samples_pkey PRIMARY KEY (id)
);


-- public.kp_soil_samples_4326 definition

-- Drop table

-- DROP FOREIGN TABLE public.kp_soil_samples_4326;

CREATE FOREIGN TABLE public.kp_soil_samples_4326 (
	gid int4 NULL,
	district varchar(254) NULL,
	tehsil varchar(254) NULL,
	"name" varchar(254) NULL,
	cnic numeric NULL,
	mobile_no varchar(254) NULL,
	uc varchar(254) NULL,
	village varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	barcode varchar(254) NULL,
	ph varchar(254) NULL,
	ec numeric NULL,
	tss numeric NULL,
	sand numeric NULL,
	silt numeric NULL,
	clay numeric NULL,
	texture_cl varchar(254) NULL,
	caco3 numeric NULL,
	organic_ma varchar(254) NULL,
	n varchar(254) NULL,
	p numeric NULL,
	k numeric NULL,
	naoh numeric NULL,
	ammironsul numeric NULL,
	faes numeric NULL,
	camg numeric NULL,
	tds float8 NULL,
	hco3 numeric NULL,
	cl numeric NULL,
	salt numeric NULL,
	gypsum varchar(254) NULL,
	geom public.geometry(point, 4326) NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'kp_soil_samples_4326');


-- public.kp_sowing_harvest_cropname definition

-- Drop table

-- DROP TABLE public.kp_sowing_harvest_cropname;

CREATE TABLE public.kp_sowing_harvest_cropname (
	farm_id text NULL,
	sowing_date date NULL,
	harvest_date date NULL,
	crop_name text NULL
);


-- public.lab_cane_disease definition

-- Drop table

-- DROP TABLE public.lab_cane_disease;

CREATE TABLE public.lab_cane_disease (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT lab_cane_disease_name_key UNIQUE (name),
	CONSTRAINT lab_cane_disease_pkey PRIMARY KEY (id)
);


-- public.lab_cane_pest definition

-- Drop table

-- DROP TABLE public.lab_cane_pest;

CREATE TABLE public.lab_cane_pest (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT lab_cane_pest_name_key UNIQUE (name),
	CONSTRAINT lab_cane_pest_pkey PRIMARY KEY (id)
);


-- public.lab_cane_samples definition

-- Drop table

-- DROP TABLE public.lab_cane_samples;

CREATE TABLE public.lab_cane_samples (
	id text NOT NULL,
	lab_id text NOT NULL,
	token_number text NOT NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL,
	profiled_by varchar(255) NULL,
	CONSTRAINT lab_cane_samples_pkey PRIMARY KEY (id),
	CONSTRAINT unique_lab_token_combination UNIQUE (lab_id, token_number)
);
CREATE INDEX idx_lab_cane_samples_created_at ON public.lab_cane_samples USING btree (created_at DESC);
CREATE INDEX idx_lab_cane_samples_profiled_by ON public.lab_cane_samples USING btree (profiled_by);
CREATE INDEX idx_lab_cane_samples_token_int ON public.lab_cane_samples USING btree (((token_number)::integer));


-- public.lab_cane_variety definition

-- Drop table

-- DROP TABLE public.lab_cane_variety;

CREATE TABLE public.lab_cane_variety (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	variety bool NOT NULL,
	CONSTRAINT lab_cane_variety_name_key UNIQUE (name),
	CONSTRAINT lab_cane_variety_pkey PRIMARY KEY (id)
);


-- public.languages definition

-- Drop table

-- DROP FOREIGN TABLE public.languages;

CREATE FOREIGN TABLE public.languages (
	"name" varchar(60) OPTIONS(column_name 'name') NOT NULL,
	active int2 OPTIONS(column_name 'active') NOT NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NOT NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	id int4 OPTIONS(column_name 'id') NOT NULL,
	name_alt varchar(255) OPTIONS(column_name 'name_alt') NULL,
	content_id int8 OPTIONS(column_name 'content_id') NULL,
	title_urdu varchar(255) OPTIONS(column_name 'title_urdu') NULL,
	short_name varchar(255) OPTIONS(column_name 'short_name') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'languages');


-- public.latest_profiledby_ndvi_anomaly_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.latest_profiledby_ndvi_anomaly_vw;

CREATE FOREIGN TABLE public.latest_profiledby_ndvi_anomaly_vw (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	geometry json OPTIONS(column_name 'geometry') NULL,
	vector_ndvi json OPTIONS(column_name 'vector_ndvi') NULL,
	ndvi_date date OPTIONS(column_name 'ndvi_date') NULL,
	ndvi_avg numeric OPTIONS(column_name 'ndvi_avg') NULL,
	ndvi_min float8 OPTIONS(column_name 'ndvi_min') NULL,
	ndvi_max float8 OPTIONS(column_name 'ndvi_max') NULL,
	vector_anomaly json OPTIONS(column_name 'vector_anomaly') NULL,
	anomaly_area numeric OPTIONS(column_name 'anomaly_area') NULL,
	anomaly_date date OPTIONS(column_name 'anomaly_date') NULL,
	anomaly_id uuid OPTIONS(column_name 'anomaly_id') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'latest_profiledby_ndvi_anomaly_vw');


-- public.loans_temp definition

-- Drop table

-- DROP TABLE public.loans_temp;

CREATE TABLE public.loans_temp (
	passbook_no varchar(255) NULL,
	loan_amount varchar(255) NULL,
	creation_date date NULL,
	unit int4 NULL
);


-- public.locations definition

-- Drop table

-- DROP TABLE public.locations;

CREATE TABLE public.locations (
	gid serial4 NOT NULL,
	id numeric NULL,
	"name" varchar(254) NULL,
	"type" varchar(254) NULL,
	parent_id numeric NULL,
	name_alt varchar(254) NULL,
	geo_point varchar(254) NULL,
	priority numeric NULL,
	file_name varchar(254) NULL,
	content_id numeric NULL,
	division varchar(254) NULL,
	name_new varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT locations_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_locations_geom ON public.locations USING gist (geom);
CREATE INDEX idx_locations_type_name ON public.locations USING btree (type, name);
CREATE INDEX locations_geom_idx ON public.locations USING gist (geom);


-- public.locations_v3 definition

-- Drop table

-- DROP TABLE public.locations_v3;

CREATE TABLE public.locations_v3 (
	id int4 NOT NULL,
	"name" varchar NULL,
	"type" varchar NULL,
	parent_id int4 NULL,
	name_alt varchar NULL,
	shape public.geometry(multipolygon, 4326) NULL,
	geo_point public.geometry(point, 4326) NULL,
	CONSTRAINT locations_v2_pkey PRIMARY KEY (id)
);


-- public.mari_24_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.mari_24_data_verification_vw;

CREATE FOREIGN TABLE public.mari_24_data_verification_vw (
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar(255) OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farmer_status uuid OPTIONS(column_name 'farmer_status') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mari_24_data_verification_vw');


-- public.mari_24_data_verification_vw_prod definition

-- Drop table

-- DROP FOREIGN TABLE public.mari_24_data_verification_vw_prod;

CREATE FOREIGN TABLE public.mari_24_data_verification_vw_prod (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farm_status varchar(255) OPTIONS(column_name 'farm_status') NULL,
	farm_desc text OPTIONS(column_name 'farm_desc') NULL,
	farmer_status varchar(255) OPTIONS(column_name 'farmer_status') NULL,
	farmer_desc text OPTIONS(column_name 'farmer_desc') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar(255) OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar(255) OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mari_24_data_verification_vw');


-- public.mari_24_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.mari_24_images_vw;

CREATE FOREIGN TABLE public.mari_24_images_vw (
	id varchar(255) OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mari_24_images_vw');


-- public.mari_24_images_vw_prod definition

-- Drop table

-- DROP FOREIGN TABLE public.mari_24_images_vw_prod;

CREATE FOREIGN TABLE public.mari_24_images_vw_prod (
	id varchar OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mari_24_images_vw');


-- public.mari_temp_20240502 definition

-- Drop table

-- DROP TABLE public.mari_temp_20240502;

CREATE TABLE public.mari_temp_20240502 (
	gid serial4 NOT NULL,
	id float8 NULL,
	area varchar(10) NULL,
	distrct varchar(10) NULL,
	telephone float8 NULL,
	temp_id float8 NULL,
	tehsil varchar(10) NULL,
	uc varchar(10) NULL,
	area_ac float8 NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	state text NULL,
	color text NULL,
	CONSTRAINT mari_temp_20240502_pkey PRIMARY KEY (gid)
);
CREATE INDEX mari_temp_20240502_geom_idx ON public.mari_temp_20240502 USING gist (geom);


-- public.mauza_boundary definition

-- Drop table

-- DROP TABLE public.mauza_boundary;

CREATE TABLE public.mauza_boundary (
	gid serial4 NOT NULL,
	mauza_id numeric NULL,
	district_name varchar(100) NULL,
	tehsil_name varchar(100) NULL,
	qg varchar(100) NULL,
	pc varchar(100) NULL,
	mauza_name varchar(100) NULL,
	mauza_area numeric NULL,
	division_name varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT mauza_boundary_pkey PRIMARY KEY (gid)
);
CREATE INDEX mauza_boundary_geom_idx ON public.mauza_boundary USING gist (geom);
CREATE INDEX mauza_boundary_geom_idx1 ON public.mauza_boundary USING gist (geom);


-- public.merged_20230825 definition

-- Drop table

-- DROP TABLE public.merged_20230825;

CREATE TABLE public.merged_20230825 (
	gid serial4 NOT NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	temp_id float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	agent_msisdn varchar NULL,
	CONSTRAINT merged_20230825_pkey PRIMARY KEY (gid)
);
CREATE INDEX merged_20230825_geom_idx ON public.merged_20230825 USING gist (geom);


-- public.merged_20230911 definition

-- Drop table

-- DROP TABLE public.merged_20230911;

CREATE TABLE public.merged_20230911 (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	temp_id float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT merged_20230911_pkey PRIMARY KEY (gid)
);
CREATE INDEX merged_20230911_geom_idx ON public.merged_20230911 USING gist (geom);


-- public.merged_20230913 definition

-- Drop table

-- DROP TABLE public.merged_20230913;

CREATE TABLE public.merged_20230913 (
	gid serial4 NOT NULL,
	cat int4 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	temp_id float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT merged_20230913_pkey PRIMARY KEY (gid)
);
CREATE INDEX merged_20230913_geom_idx ON public.merged_20230913 USING gist (geom);


-- public.merged_20230914 definition

-- Drop table

-- DROP TABLE public.merged_20230914;

CREATE TABLE public.merged_20230914 (
	gid serial4 NOT NULL,
	area_ac numeric NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	distrcit varchar(20) NULL,
	area float8 NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	temp_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT merged_20230914_pkey PRIMARY KEY (gid)
);
CREATE INDEX merged_20230914_geom_idx ON public.merged_20230914 USING gist (geom);


-- public.merged_20230925 definition

-- Drop table

-- DROP TABLE public.merged_20230925;

CREATE TABLE public.merged_20230925 (
	gid serial4 NOT NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	temp_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT merged_20230925_pkey PRIMARY KEY (gid)
);
CREATE INDEX merged_20230925_geom_idx ON public.merged_20230925 USING gist (geom);


-- public.merged_20240625_temp definition

-- Drop table

-- DROP TABLE public.merged_20240625_temp;

CREATE TABLE public.merged_20240625_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	msisdn float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	lat float8 NULL,
	lng float8 NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	temp_id float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT merged_20240625_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX merged_20240625_temp_geom_idx ON public.merged_20240625_temp USING gist (geom);


-- public.merged_20241002_temp definition

-- Drop table

-- DROP TABLE public.merged_20241002_temp;

CREATE TABLE public.merged_20241002_temp (
	gid serial4 NOT NULL,
	area float8 NULL,
	area_ac float8 NULL,
	digitizer varchar(50) NULL,
	qa_by varchar(50) NULL,
	approver varchar(50) NULL,
	sb_dt varchar(50) NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT merged_20241002_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_merged_temp_geom ON public.merged_20241002_temp USING gist (geom);
CREATE INDEX merged_20241002_temp_geom_idx ON public.merged_20241002_temp USING gist (geom);


-- public.mpcl_25_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.mpcl_25_data_verification_vw;

CREATE FOREIGN TABLE public.mpcl_25_data_verification_vw (
	farm_id text NULL,
	farmer_additional_info text NULL,
	farmcrop_id text NULL,
	farmer_id text NULL,
	farmer_name text NULL,
	profiled_by text NULL,
	farmer_status text NULL,
	land_area float8 NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	farm_title text NULL,
	shape_id text NULL,
	temp_id text NULL,
	crop_season text NULL,
	title text NULL,
	geom text NULL,
	shape public.geometry NULL,
	profile_image text NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	seed_type text NULL,
	lat float8 NULL,
	lng float8 NULL,
	growth_stage text NULL,
	gs_date date NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mpcl_25_data_verification_vw');


-- public.mpcl_25_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.mpcl_25_images_vw;

CREATE FOREIGN TABLE public.mpcl_25_images_vw (
	farm_id varchar NULL,
	create_dt timestamp NULL,
	image text NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mpcl_25_images_vw');


-- public.mpcl_aoi definition

-- Drop table

-- DROP TABLE public.mpcl_aoi;

CREATE TABLE public.mpcl_aoi (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	area_ac numeric NULL,
	province_m varchar(30) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT mpcl_aoi_pkey PRIMARY KEY (gid)
);
CREATE INDEX mpcl_aoi_geom_idx ON public.mpcl_aoi USING gist (geom);


-- public.mpcl_caste_temp definition

-- Drop table

-- DROP TABLE public.mpcl_caste_temp;

CREATE TABLE public.mpcl_caste_temp (
	sr_no numeric NULL,
	"name" varchar NULL,
	contact varchar NULL,
	prev_caste varchar NULL,
	con_status varchar NULL,
	well_number varchar NULL
);


-- public.mpcl_crop_stats definition

-- Drop table

-- DROP TABLE public.mpcl_crop_stats;

CREATE TABLE public.mpcl_crop_stats (
	company varchar(255) NULL,
	crop varchar(255) NULL,
	pixel_count int8 NULL,
	area_ms float8 NULL,
	area_ac float8 NULL
);


-- public.mpcl_digitized_farmcrops definition

-- Drop table

-- DROP TABLE public.mpcl_digitized_farmcrops;

CREATE TABLE public.mpcl_digitized_farmcrops (
	gid serial4 NOT NULL,
	area float8 NULL,
	id float8 NULL,
	area_ac float8 NULL,
	temp_id varchar(10) NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	kharif_24_crop varchar(50) NULL,
	msisdn numeric NULL,
	farmer_name varchar(254) NULL,
	profiled_by numeric NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	well_number text NULL,
	CONSTRAINT mpcl_digitized_farmcrops_pkey PRIMARY KEY (gid)
);
CREATE INDEX mpcl_digitized_farmcrops_geom_idx ON public.mpcl_digitized_farmcrops USING gist (geom);


-- public.mpcl_digitized_farmcrops_v2 definition

-- Drop table

-- DROP TABLE public.mpcl_digitized_farmcrops_v2;

CREATE TABLE public.mpcl_digitized_farmcrops_v2 (
	gid int4 NULL,
	area float8 NULL,
	id float8 NULL,
	area_ac float8 NULL,
	temp_id varchar(10) NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	kharif_24_crop varchar(50) NULL,
	msisdn numeric NULL,
	farmer_name varchar(254) NULL,
	profiled_by numeric NULL,
	geom public.geometry(polygon, 4326) NULL,
	well_number text NULL
);


-- public.mpcl_digtize_farms definition

-- Drop table

-- DROP TABLE public.mpcl_digtize_farms;

CREATE TABLE public.mpcl_digtize_farms (
	gid serial4 NOT NULL,
	area float8 NULL,
	id float8 NULL,
	area_ac float8 NULL,
	temp_id varchar(10) NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	geom public.geometry NULL,
	CONSTRAINT mpcl_digtize_farms_pkey PRIMARY KEY (gid)
);


-- public.mpcl_farm_scores definition

-- Drop table

-- DROP TABLE public.mpcl_farm_scores;

CREATE TABLE public.mpcl_farm_scores (
	crop_name varchar(100) NULL,
	farm_title varchar(200) NULL,
	msisdn varchar(20) NULL,
	farm_id varchar(50) NULL,
	ndvi_avg numeric NULL,
	farm_score numeric NULL,
	approx_avg_yield numeric NULL
);


-- public.mpcl_farmers_may24 definition

-- Drop table

-- DROP TABLE public.mpcl_farmers_may24;

CREATE TABLE public.mpcl_farmers_may24 (
	id int8 NULL,
	"name" text NULL,
	profiled_by int8 NULL,
	create_dt text NULL
);


-- public.mpcl_farms_complete definition

-- Drop table

-- DROP TABLE public.mpcl_farms_complete;

CREATE TABLE public.mpcl_farms_complete (
	gid serial4 NOT NULL,
	id varchar(254) NULL,
	msisdn varchar(254) NULL,
	farmer_nam varchar(254) NULL,
	profiled_b varchar(254) NULL,
	agent_name varchar(254) NULL,
	location_n varchar(254) NULL,
	farm_id varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	growth_sta varchar(254) NULL,
	growth_s_1 date NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(24) NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	well_number text NULL,
	CONSTRAINT mpcl_farms_complete_pkey PRIMARY KEY (gid)
);
CREATE INDEX mpcl_farms_complete_geom_idx ON public.mpcl_farms_complete USING gist (geom);


-- public.mpcl_female_farmer_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.mpcl_female_farmer_vw;

CREATE FOREIGN TABLE public.mpcl_female_farmer_vw (
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar(255) OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farmer_status uuid OPTIONS(column_name 'farmer_status') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL,
	farmer_name text NULL,
	farmer_additional_info text NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'mpcl_female_farmer_vw');


-- public.mpcl_female_farmers definition

-- Drop table

-- DROP TABLE public.mpcl_female_farmers;

CREATE TABLE public.mpcl_female_farmers (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmcrop_id varchar(254) NULL,
	farmer_id numeric NULL,
	profiled_by numeric NULL,
	farmer_status varchar(254) NULL,
	land_area numeric NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	shape_id varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_season varchar(254) NULL,
	title varchar(254) NULL,
	profile_image varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	lat numeric NULL,
	lng numeric NULL,
	growth_stage varchar(254) NULL,
	gs_date varchar(254) NULL,
	farmer_name varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT mpcl_female_farmers_pkey PRIMARY KEY (gid)
);
CREATE INDEX mpcl_female_farmers_geom_idx ON public.mpcl_female_farmers USING gist (geom);


-- public.mpcl_female_farmers_validated definition

-- Drop table

-- DROP TABLE public.mpcl_female_farmers_validated;

CREATE TABLE public.mpcl_female_farmers_validated (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmcrop_id varchar(254) NULL,
	profiled_by numeric NULL,
	farmer_status varchar(254) NULL,
	land_area numeric NULL,
	create_dt varchar(254) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	shape_id varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_season varchar(254) NULL,
	title varchar(254) NULL,
	profile_image varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	growth_stage varchar(254) NULL,
	gs_date varchar(254) NULL,
	farmer_name varchar(254) NULL,
	farmer_address varchar(254) NULL,
	"cast" varchar(254) NULL,
	qa varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	farmer_id text NULL,
	well_number varchar(50) NULL,
	CONSTRAINT mpcl_female_farmers_validated_pkey PRIMARY KEY (gid)
);
CREATE INDEX mpcl_female_farmers_validated_geom_idx ON public.mpcl_female_farmers_validated USING gist (geom);


-- public.mpcl_ff_temp definition

-- Drop table

-- DROP TABLE public.mpcl_ff_temp;

CREATE TABLE public.mpcl_ff_temp (
	sr_no serial4 NOT NULL,
	farmer_name text NULL,
	"number" int8 NULL,
	caste text NULL,
	area_ac float8 NULL,
	CONSTRAINT mpcl_ff_temp_pkey PRIMARY KEY (sr_no)
);


-- public.mpcl_neem_transactions definition

-- Drop table

-- DROP TABLE public.mpcl_neem_transactions;

CREATE TABLE public.mpcl_neem_transactions (
	transaction_id varchar(100) NOT NULL,
	transaction_datetime timestamptz NULL,
	"type" varchar(50) NULL,
	amount numeric(30, 10) NULL,
	end_balance numeric(30, 10) NULL,
	currency varchar(10) NULL,
	status varchar(50) NULL,
	charges numeric(10, 2) NULL,
	sender_title varchar(255) NULL,
	sender_sub_ledger_name varchar(100) NULL,
	sender_account_number varchar(50) NULL,
	sender_sub_ledger_id varchar(50) NULL,
	sender_clw_id varchar(255) NULL,
	receiver_title varchar(255) NULL,
	receiver_sub_ledger_name varchar(100) NULL,
	receiver_account_number varchar(50) NULL,
	receiver_sub_ledger_id varchar(50) NULL,
	receiver_clw_id varchar(255) NULL,
	"comment" text NULL,
	reference_id varchar(100) NULL,
	rrn varchar(100) NULL,
	stan varchar(100) NULL,
	is_refund bool NULL,
	last_synced_at timestamptz DEFAULT now() NULL,
	CONSTRAINT mpcl_neem_transactions_pkey PRIMARY KEY (transaction_id)
);
CREATE INDEX idx_mpcl_tx_datetime ON public.mpcl_neem_transactions USING btree (transaction_datetime DESC);
CREATE INDEX idx_mpcl_tx_receiver_account ON public.mpcl_neem_transactions USING btree (receiver_account_number);
CREATE INDEX idx_mpcl_tx_receiver_clw_id ON public.mpcl_neem_transactions USING btree (receiver_clw_id);
CREATE INDEX idx_mpcl_tx_sender_account ON public.mpcl_neem_transactions USING btree (sender_account_number);
CREATE INDEX idx_mpcl_tx_sender_clw_id ON public.mpcl_neem_transactions USING btree (sender_clw_id);


-- public.mpcl_neem_users definition

-- Drop table

-- DROP TABLE public.mpcl_neem_users;

CREATE TABLE public.mpcl_neem_users (
	user_id varchar(255) NOT NULL,
	"name" varchar(255) NULL,
	first_name varchar(128) NULL,
	last_name varchar(128) NULL,
	mobile varchar(20) NULL,
	phone_number varchar(20) NULL,
	balance numeric(30, 10) NULL,
	email varchar(255) NULL,
	created_date timestamptz NULL,
	sub_ledger_id varchar(50) NULL,
	sub_ledger_name varchar(100) NULL,
	last_synced_at timestamptz DEFAULT now() NULL,
	CONSTRAINT mpcl_neem_users_mobile_key UNIQUE (mobile),
	CONSTRAINT mpcl_neem_users_pkey PRIMARY KEY (user_id)
);
CREATE INDEX idx_mpcl_users_sub_ledger_id ON public.mpcl_neem_users USING btree (sub_ledger_id);


-- public.mpcl_ph2_subsidy definition

-- Drop table

-- DROP TABLE public.mpcl_ph2_subsidy;

CREATE TABLE public.mpcl_ph2_subsidy (
	sr_no int8 NULL,
	farmer_name text NULL,
	caste text NULL,
	farmer_number int8 NULL,
	agent_msisdn int8 NULL,
	area_ac text NULL,
	recommendation float8 NULL
);


-- public.mpcl_ph2_subsidy_copy definition

-- Drop table

-- DROP TABLE public.mpcl_ph2_subsidy_copy;

CREATE TABLE public.mpcl_ph2_subsidy_copy (
	sr_no int8 NULL,
	farmer_name text NULL,
	caste text NULL,
	farmer_number int8 NULL,
	agent_msisdn int8 NULL,
	area_ac text NULL
);


-- public.mpcl_ph2_subsidy_copy_v1 definition

-- Drop table

-- DROP TABLE public.mpcl_ph2_subsidy_copy_v1;

CREATE TABLE public.mpcl_ph2_subsidy_copy_v1 (
	sr_no int8 NULL,
	farmer_name text NULL,
	caste text NULL,
	farmer_number int8 NULL,
	agent_msisdn int8 NULL,
	area_ac text NULL,
	recommendation float8 NULL
);


-- public.mpcl_report definition

-- Drop table

-- DROP FOREIGN TABLE public.mpcl_report;

CREATE FOREIGN TABLE public.mpcl_report (
	id int4 OPTIONS(column_name 'id') NULL,
	advisory int4 OPTIONS(column_name 'advisory') NULL,
	ivr_interacted int4 OPTIONS(column_name 'ivr_interacted') NULL,
	talked_cc_agent int4 OPTIONS(column_name 'talked_cc_agent') NULL,
	vms int4 OPTIONS(column_name 'vms') NULL,
	mpcl_total_farmers int4 OPTIONS(column_name 'mpcl_total_farmers') NULL,
	app_users int4 OPTIONS(column_name 'app_users') NULL,
	report_date timestamp OPTIONS(column_name 'report_date') NULL,
	created_at text OPTIONS(column_name 'created_at') NULL,
	type_of_advisories int4 OPTIONS(column_name 'type_of_advisories') NULL,
	weather_advisory int4 OPTIONS(column_name 'weather_advisory') NULL,
	male_farmers int4 OPTIONS(column_name 'male_farmers') NULL,
	female_farmers int4 OPTIONS(column_name 'female_farmers') NULL,
	farmers_null_gender int4 OPTIONS(column_name 'farmers_null_gender') NULL,
	advisory_sms_manual int4 OPTIONS(column_name 'advisory_sms_manual') NULL
)
SERVER bkk_bronze_server
OPTIONS (schema_name 'mpcl', table_name 'mpcl_report');


-- public.mpcl_scroes_24_25 definition

-- Drop table

-- DROP TABLE public.mpcl_scroes_24_25;

CREATE TABLE public.mpcl_scroes_24_25 (
	farm_title text NULL,
	farm_id text NOT NULL,
	f_score_24 text NULL,
	ndvi_max24 text NULL,
	ndvi_avg24 text NULL,
	yield text NULL,
	crop_24 text NULL,
	crop_25 text NULL,
	yield_25 text NULL,
	f_score_25 text NULL,
	CONSTRAINT mpcl_scroes_24_25_pkey PRIMARY KEY (farm_id)
);


-- public.mpcl_subsidy_20250218 definition

-- Drop table

-- DROP TABLE public.mpcl_subsidy_20250218;

CREATE TABLE public.mpcl_subsidy_20250218 (
	sr_no int8 NULL,
	farmer_name text NULL,
	"cast" text NULL,
	farmer_number int8 NULL,
	agent_msisdn int8 NULL,
	area_ac text NULL,
	recommendation float8 NULL
);


-- public.mpcl_subsidy_farmers definition

-- Drop table

-- DROP TABLE public.mpcl_subsidy_farmers;

CREATE TABLE public.mpcl_subsidy_farmers (
	sr_no text NULL,
	farmer_name text NULL,
	caste text NULL,
	farmer_number text NULL,
	agent_msisdn text NULL,
	area_ac text NULL,
	recommendation text NULL
);


-- public.mpcl_subsidy_farmers_verified definition

-- Drop table

-- DROP TABLE public.mpcl_subsidy_farmers_verified;

CREATE TABLE public.mpcl_subsidy_farmers_verified (
	caste text NULL,
	gid int4 NULL,
	id float8 NULL,
	msisdn numeric NULL,
	farmer_nam varchar(254) NULL,
	profiled_b numeric NULL,
	agent_name varchar(254) NULL,
	location_n varchar(254) NULL,
	farm_id varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	growth_sta varchar(254) NULL,
	growth_s_1 varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	well_number varchar NULL
);


-- public.mpcl_survey_cleaned definition

-- Drop table

-- DROP TABLE public.mpcl_survey_cleaned;

CREATE TABLE public.mpcl_survey_cleaned (
	gid serial4 NOT NULL,
	id float8 NULL,
	msisdn numeric NULL,
	farmer_name varchar(254) NULL,
	profiled_by numeric NULL,
	agent_name varchar(254) NULL,
	location_name varchar(254) NULL,
	farm_id varchar(254) NULL,
	farm_crop_id varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	growth_stage varchar(254) NULL,
	growth_stage_date varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	well_number varchar NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	CONSTRAINT mpcl_survey_cleaned_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_mpcl_msisdn ON public.mpcl_survey_cleaned USING btree (msisdn);
CREATE INDEX mpcl_survey_cleaned_geom_idx ON public.mpcl_survey_cleaned USING gist (geom);


-- public.mpcl_wells definition

-- Drop table

-- DROP TABLE public.mpcl_wells;

CREATE TABLE public.mpcl_wells (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	latitude numeric(10, 6) NULL,
	longitude numeric(10, 6) NULL,
	geom public.geometry NULL,
	CONSTRAINT mpcl_wells_pkey PRIMARY KEY (gid)
);


-- public.mpcl_wells_20250115 definition

-- Drop table

-- DROP TABLE public.mpcl_wells_20250115;

CREATE TABLE public.mpcl_wells_20250115 (
	gid serial4 NOT NULL,
	sr_no float8 NULL,
	well_name varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT mpcl_wells_20250115_pkey PRIMARY KEY (gid)
);
CREATE INDEX mpcl_wells_20250115_geom_idx ON public.mpcl_wells_20250115 USING gist (geom);


-- public.msg_logs definition

-- Drop table

-- DROP TABLE public.msg_logs;

CREATE TABLE public.msg_logs (
	id serial4 NOT NULL,
	phone_number text NULL,
	message text NULL,
	createion_date date NULL,
	schedule_date date NULL,
	status varchar(10) NULL,
	approve_date date NULL,
	approved_by text NULL,
	CONSTRAINT msg_logs_pkey PRIMARY KEY (id)
);


-- public.multan_samp_01 definition

-- Drop table

-- DROP TABLE public.multan_samp_01;

CREATE TABLE public.multan_samp_01 (
	gid serial4 NOT NULL,
	farm_id varchar(254) NULL,
	farmcrop_i varchar(254) NULL,
	farmer_id numeric NULL,
	profiled_b numeric NULL,
	farmer_sta varchar(254) NULL,
	land_area varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	shape_id varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_seaso varchar(254) NULL,
	title varchar(254) NULL,
	shape varchar(254) NULL,
	profile_im varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	lat numeric NULL,
	lng numeric NULL,
	growth_sta varchar(254) NULL,
	gs_date date NULL,
	qa_status varchar(10) NULL,
	qa_by varchar(10) NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	qa_date date NULL,
	class_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT multan_samp_01_pkey PRIMARY KEY (gid)
);
CREATE INDEX multan_samp_01_geom_idx ON public.multan_samp_01 USING gist (geom);


-- public.multan_samples_temp definition

-- Drop table

-- DROP TABLE public.multan_samples_temp;

CREATE TABLE public.multan_samples_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	msisdn varchar(20) NULL,
	color varchar(10) NULL,
	state varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	temp_id float8 NULL,
	lng float8 NULL,
	lat float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT multan_samples_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX multan_samples_temp_geom_idx ON public.multan_samples_temp USING gist (geom);


-- public.mz_soil_data definition

-- Drop table

-- DROP TABLE public.mz_soil_data;

CREATE TABLE public.mz_soil_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	potash varchar(30) NULL,
	zinc varchar(30) NULL,
	calciumcar varchar(30) NULL,
	organicmatter varchar(30) NULL,
	electrical varchar(30) NULL,
	texture varchar(32) NULL,
	ph varchar(30) NULL,
	copper varchar(30) NULL,
	saturation varchar(30) NULL,
	phosphorus varchar(30) NULL,
	iron varchar(30) NULL,
	boron varchar(30) NULL,
	manganese varchar(30) NULL,
	datasource varchar(254) NULL,
	samplecollected varchar(24) NULL,
	potash_ numeric NULL,
	zinc_ numeric NULL,
	calcium_ca numeric NULL,
	organic_ma numeric NULL,
	electric_1 numeric NULL,
	ph_ numeric NULL,
	copper_ numeric NULL,
	saturati_1 numeric NULL,
	phosphor_1 numeric NULL,
	iron_ numeric NULL,
	boron_ numeric NULL,
	manganese_ numeric NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT mz_soil_data_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_mz_soil_data_datasource ON public.mz_soil_data USING btree (datasource);
CREATE INDEX idx_mz_soil_data_texture ON public.mz_soil_data USING btree (texture);
CREATE INDEX mz_soil_data_geom_idx ON public.mz_soil_data USING gist (geom);


-- public.ndra_data definition

-- Drop table

-- DROP TABLE public.ndra_data;

CREATE TABLE public.ndra_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	cnic varchar(255) NULL,
	"name" varchar(255) NULL,
	age varchar(255) NULL,
	income varchar(255) NULL,
	dob varchar(255) NULL,
	address varchar(255) NULL,
	mother_name varchar(255) NULL,
	profile_image varchar(255) NULL,
	cnic_front_image varchar(255) NULL,
	cnic_back_image varchar(255) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	score int4 NULL,
	CONSTRAINT ndra_data_pkey PRIMARY KEY (id)
);


-- public.ndvi_date_time definition

-- Drop table

-- DROP TABLE public.ndvi_date_time;

CREATE TABLE public.ndvi_date_time (
	"date" date NULL,
	"time" float8 NULL
);


-- public.ndvi_geojson_temp definition

-- Drop table

-- DROP TABLE public.ndvi_geojson_temp;

CREATE TABLE public.ndvi_geojson_temp (
	"index" int8 NULL,
	farm_id text NULL,
	image_id text NULL,
	ndvi_avg float8 NULL,
	ndvi_min float8 NULL,
	ndvi_max float8 NULL,
	range_less_0 int8 NULL,
	range_0_005 int8 NULL,
	range_005_01 float8 NULL,
	range_01_015 float8 NULL,
	range_015_020 float8 NULL,
	range_020_025 float8 NULL,
	range_025_030 float8 NULL,
	range_030_035 float8 NULL,
	range_035_040 int8 NULL,
	range_040_045 float8 NULL,
	range_045_050 float8 NULL,
	range_050_055 float8 NULL,
	range_055_060 float8 NULL,
	range_060_065 int8 NULL,
	range_065_070 int8 NULL,
	range_070_075 int8 NULL,
	range_075_080 int8 NULL,
	range_080_085 int8 NULL,
	range_085_090 int8 NULL,
	range_090_095 int8 NULL,
	range_095_1 int8 NULL,
	ndvi_vector text NULL,
	image_date text NULL
);
CREATE INDEX ix_ndvi_geojson_temp_index ON public.ndvi_geojson_temp USING btree (index);


-- public.noor_studyarea definition

-- Drop table

-- DROP TABLE public.noor_studyarea;

CREATE TABLE public.noor_studyarea (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT noor_studyarea_pkey PRIMARY KEY (gid)
);
CREATE INDEX noor_studyarea_geom_idx ON public.noor_studyarea USING gist (geom);


-- public.nowshehra_ibrahim_temp definition

-- Drop table

-- DROP TABLE public.nowshehra_ibrahim_temp;

CREATE TABLE public.nowshehra_ibrahim_temp (
	gid serial4 NOT NULL,
	telephone float8 NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	tehsil varchar(10) NULL,
	uc varchar(10) NULL,
	g_id float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT nowshehra_ibrahim_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX nowshehra_ibrahim_temp_geom_idx ON public.nowshehra_ibrahim_temp USING gist (geom);


-- public.occupations definition

-- Drop table

-- DROP FOREIGN TABLE public.occupations;

CREATE FOREIGN TABLE public.occupations (
	title varchar OPTIONS(column_name 'title') NOT NULL,
	title_urdu varchar OPTIONS(column_name 'title_urdu') NULL,
	content_id int8 OPTIONS(column_name 'content_id') NULL,
	id int8 OPTIONS(column_name 'id') NOT NULL,
	"key" varchar OPTIONS(column_name 'key') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'occupations');


-- public.okara_rabi_25 definition

-- Drop table

-- DROP TABLE public.okara_rabi_25;

CREATE TABLE public.okara_rabi_25 (
	gid serial4 NOT NULL,
	crop_name varchar(80) NULL,
	exrabi2025 varchar(80) NULL,
	fieldscore numeric NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT okara_rabi_25_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_okara_rabi_25_crop_name ON public.okara_rabi_25 USING btree (crop_name);
CREATE INDEX idx_okara_rabi_25_geom ON public.okara_rabi_25 USING gist (geom);
CREATE INDEX okara_rabi_25_geom_idx ON public.okara_rabi_25 USING gist (geom);


-- public.panjab_khasra_data definition

-- Drop table

-- DROP TABLE public.panjab_khasra_data;

CREATE TABLE public.panjab_khasra_data (
	khasranumber text NULL,
	mauzaid text NULL,
	name_en text NULL,
	shape_length float8 NULL,
	shape_area float8 NULL,
	district text NULL,
	id text NULL,
	id_1 text NULL,
	mauza_name text NULL,
	patwar_circle text NULL,
	parentid text NULL,
	geom public.geometry(multipolygon, 3857) NULL
);


-- public.partner_agents definition

-- Drop table

-- DROP TABLE public.partner_agents;

CREATE TABLE public.partner_agents (
	partner_id varchar NOT NULL,
	msisdn varchar NOT NULL,
	subscriber varchar NULL,
	agent_id uuid DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	end_dt timestamp NULL,
	status varchar(20) DEFAULT 'active'::character varying NULL,
	CONSTRAINT partner_agents_pkey PRIMARY KEY (partner_id, msisdn)
);
CREATE INDEX idx_partner_agents_partner ON public.partner_agents USING btree (partner_id, msisdn);
CREATE INDEX idx_partner_agents_partner_id ON public.partner_agents USING btree (partner_id);
CREATE INDEX idx_partner_agents_partner_id_msisdn ON public.partner_agents USING btree (partner_id, msisdn);
CREATE INDEX idx_partner_id ON public.partner_agents USING btree (partner_id);


-- public.partner_custom_geom definition

-- Drop table

-- DROP TABLE public.partner_custom_geom;

CREATE TABLE public.partner_custom_geom (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(50) NULL,
	area float8 NULL,
	partner_id varchar(100) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	"type" text NULL,
	CONSTRAINT partner_custom_geom_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_partner_custom_geom_circle ON public.partner_custom_geom USING btree (name);
CREATE INDEX idx_partner_custom_geom_geom ON public.partner_custom_geom USING gist (geom);
CREATE INDEX idx_partner_custom_geom_geom_spgist ON public.partner_custom_geom USING spgist (geom);
CREATE INDEX idx_partner_custom_geom_partner_id ON public.partner_custom_geom USING btree (partner_id);
CREATE INDEX idx_partner_custom_geom_partner_name ON public.partner_custom_geom USING btree (partner_id, name);


-- public.partner_login_permissions definition

-- Drop table

-- DROP TABLE public.partner_login_permissions;

CREATE TABLE public.partner_login_permissions (
	permission_id uuid DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	view_credits bool DEFAULT false NULL,
	add_agents bool DEFAULT false NULL,
	add_partner_account bool DEFAULT false NULL,
	view_agents_and_farms bool DEFAULT true NULL,
	view_alerts bool DEFAULT true NULL,
	send_alerts bool DEFAULT false NULL,
	view_overall_stats bool DEFAULT true NULL,
	view_farm_details bool DEFAULT true NULL,
	send_sms bool DEFAULT false NULL,
	send_vms bool DEFAULT false NULL,
	view_sms_logs bool DEFAULT false NULL,
	insights bool DEFAULT false NULL,
	reset_password bool DEFAULT false NULL,
	bkkappfarms bool DEFAULT false NULL,
	bkkfieldsurvey bool DEFAULT false NULL,
	weather bool DEFAULT false NULL,
	weatherstations bool DEFAULT false NULL,
	agribankcropcalendar bool DEFAULT false NULL,
	agroecologicalzones bool DEFAULT false NULL,
	dikhansugarcane bool DEFAULT false NULL,
	digitizedfields bool DEFAULT false NULL,
	punjabsoil bool DEFAULT false NULL,
	fieldidentifier bool DEFAULT false NULL,
	kpsoilpois bool DEFAULT false NULL,
	kpsoilgrids bool DEFAULT false NULL,
	kpsoilraster bool DEFAULT false NULL,
	classificationrabi24 bool DEFAULT false NULL,
	rawclassification bool DEFAULT false NULL,
	fcv_tobacco_2024 bool DEFAULT false NULL,
	crop_update bool DEFAULT false NULL,
	bank_portal bool DEFAULT false NULL,
	agent_stats bool DEFAULT false NULL,
	agent_assignment bool DEFAULT false NULL,
	dashboard_access varchar NULL,
	bank_permissions jsonb NULL,
	CONSTRAINT partner_login_permissions_pkey PRIMARY KEY (permission_id)
);


-- public.partner_portal_data definition

-- Drop table

-- DROP TABLE public.partner_portal_data;

CREATE TABLE public.partner_portal_data (
	farm_id varchar NULL,
	farm_title varchar NULL,
	land_area float8 NULL,
	land_unit varchar(255) NULL,
	location_id int8 NULL,
	location_name varchar NULL,
	geom text NULL,
	geo_point public.geometry NULL,
	shape public.geometry NULL,
	soil_type_id int8 NULL,
	irrigation_source_id int8 NULL,
	soil_issue_id int8 NULL,
	land_topography_id int8 NULL,
	msisdn varchar(15) NULL,
	farmer_name varchar(60) NULL,
	farm_crop_id varchar NULL,
	crop_id int8 NULL,
	crop_name varchar NULL,
	sowing_method_id int8 NULL,
	seed_type_id int8 NULL,
	sowing_date date NULL,
	create_dt timestamp(6) NULL,
	growth_stage varchar NULL,
	"level" int4 NULL
);


-- public.partners definition

-- Drop table

-- DROP TABLE public.partners;

CREATE TABLE public.partners (
	"name" varchar NULL,
	username varchar NULL,
	"password" varchar NULL,
	"role" varchar NULL,
	partner_id uuid DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	address varchar NULL,
	contact_no varchar NULL,
	email varchar NULL,
	credits int8 NULL,
	message_credits int8 DEFAULT 0 NULL,
	CONSTRAINT pk_partner_id PRIMARY KEY (partner_id)
);


-- public.password_reset_tokens definition

-- Drop table

-- DROP TABLE public.password_reset_tokens;

CREATE TABLE public.password_reset_tokens (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	email varchar(255) NULL,
	"token" varchar(255) NULL,
	is_used bool DEFAULT false NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (id)
);


-- public.pesticide_dealer_updated_performa definition

-- Drop table

-- DROP TABLE public.pesticide_dealer_updated_performa;

CREATE TABLE public.pesticide_dealer_updated_performa (
	gid float8 NULL,
	district varchar NULL,
	business_name varchar NULL,
	registered_dealer varchar NULL,
	cnic_no varchar NULL,
	contact_no varchar NULL,
	address text NULL,
	ao_circle text NULL,
	dealership_license_no text NULL,
	first_registration_date text NULL,
	last_renewal_date text NULL,
	dealership_expiry_date text NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	remarks varchar NULL,
	shape public.geometry(point, 4326) NULL
);


-- public.pitb_register definition

-- Drop table

-- DROP TABLE public.pitb_register;

CREATE TABLE public.pitb_register (
	s_no_ int4 NULL,
	district text NULL,
	bussiness_name_shop_name text NULL,
	name_of_registered_dealer text NULL,
	dealer_code text NULL,
	contact_no text NULL,
	latitude text NULL,
	longitued float8 NULL,
	address text NULL
);


-- public.pitb_register_updated definition

-- Drop table

-- DROP TABLE public.pitb_register_updated;

CREATE TABLE public.pitb_register_updated (
	s_no_ int4 NULL,
	district text NULL,
	bussiness_name_shop_name text NULL,
	name_of_registered_dealer text NULL,
	dealer_code int4 NULL,
	contact_no text NULL,
	latitude float8 NULL,
	longitued float8 NULL,
	address text NULL
);


-- public.plra_data definition

-- Drop table

-- DROP TABLE public.plra_data;

CREATE TABLE public.plra_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	owner_name varchar(255) NULL,
	farmer_name varchar(255) NULL,
	msisdn varchar(255) NULL,
	mouza varchar(255) NULL,
	khasra varchar(255) NULL,
	cnic varchar(255) NULL,
	khasra_boundary public.geometry(polygon, 4326) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	score int4 NULL,
	CONSTRAINT plra_data_pkey PRIMARY KEY (id)
);


-- public.pmi_24_data_verifciation_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_24_data_verifciation_vw;

CREATE FOREIGN TABLE public.pmi_24_data_verifciation_vw (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farm_status varchar(255) OPTIONS(column_name 'farm_status') NULL,
	farm_desc text OPTIONS(column_name 'farm_desc') NULL,
	farmer_status varchar(255) OPTIONS(column_name 'farmer_status') NULL,
	farmer_desc text OPTIONS(column_name 'farmer_desc') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar(255) OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar(255) OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'pmi_24_data_verifciation_vw');


-- public.pmi_24_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_24_data_verification_vw;

CREATE FOREIGN TABLE public.pmi_24_data_verification_vw (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farm_status varchar(255) OPTIONS(column_name 'farm_status') NULL,
	farm_desc text OPTIONS(column_name 'farm_desc') NULL,
	farmer_status varchar(255) OPTIONS(column_name 'farmer_status') NULL,
	farmer_desc text OPTIONS(column_name 'farmer_desc') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar(255) OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar(255) OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'pmi_24_data_verification_vw');


-- public.pmi_24_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_24_images_vw;

CREATE FOREIGN TABLE public.pmi_24_images_vw (
	id varchar OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'pmi_24_images_vw');


-- public.pmi_25_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_25_data_verification_vw;

CREATE FOREIGN TABLE public.pmi_25_data_verification_vw (
	farm_id varchar NULL,
	farmcrop_id varchar NULL,
	farmer_id varchar NULL,
	profiled_by varchar NULL,
	farmer_status uuid NULL,
	land_area float8 NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	farm_title varchar NULL,
	shape_id varchar NULL,
	temp_id varchar NULL,
	crop_season varchar NULL,
	title varchar NULL,
	geom text NULL,
	shape public.geometry NULL,
	profile_image text NULL,
	image text NULL,
	image1 text NULL,
	image2 text NULL,
	image3 text NULL,
	seed_type varchar NULL,
	lat float8 NULL,
	lng float8 NULL,
	growth_stage varchar NULL,
	gs_date date NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'pmi_25_data_verification_vw');


-- public.pmi_25_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_25_images_vw;

CREATE FOREIGN TABLE public.pmi_25_images_vw (
	id varchar NULL,
	create_dt timestamp NULL,
	image text NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'pmi_25_images_vw');


-- public.pmi_agents_v3 definition

-- Drop table

-- DROP TABLE public.pmi_agents_v3;

CREATE TABLE public.pmi_agents_v3 (
	agent_msisdn varchar NULL,
	agent_name varchar NULL,
	pmi_code varchar NULL,
	farmer_msisdn varchar NULL
);


-- public.pmi_assigned_data definition

-- Drop table

-- DROP TABLE public.pmi_assigned_data;

CREATE TABLE public.pmi_assigned_data (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area_ac float8 NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	uc_c int4 NULL,
	flood varchar(50) NULL,
	area numeric NULL,
	town varchar(200) NULL,
	u_r varchar(50) NULL,
	province_c int4 NULL,
	district_c int4 NULL,
	tehsil_c int4 NULL,
	uc_name varchar(254) NULL,
	data_sourc varchar(50) NULL,
	"level" varchar(50) NULL,
	school numeric NULL,
	new_name varchar(254) NULL,
	shape_leng numeric NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon) NULL,
	CONSTRAINT pmi_assigned_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_assigned_data_geom_idx ON public.pmi_assigned_data USING gist (geom);


-- public.pmi_brazil_studyarea definition

-- Drop table

-- DROP TABLE public.pmi_brazil_studyarea;

CREATE TABLE public.pmi_brazil_studyarea (
	gid serial4 NOT NULL,
	cd_mun varchar(7) NULL,
	nm_mun varchar(100) NULL,
	cd_rgi varchar(6) NULL,
	nm_rgi varchar(100) NULL,
	cd_rgint varchar(4) NULL,
	nm_rgint varchar(100) NULL,
	cd_uf varchar(2) NULL,
	nm_uf varchar(50) NULL,
	sigla_uf varchar(2) NULL,
	cd_regia varchar(1) NULL,
	nm_regia varchar(20) NULL,
	sigla_rg varchar(2) NULL,
	cd_concu varchar(7) NULL,
	nm_concu varchar(100) NULL,
	area_km2 float8 NULL,
	area_ha float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT pmi_brazil_studyarea_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_brazil_studyarea_geom_idx ON public.pmi_brazil_studyarea USING gist (geom);


-- public.pmi_brazil_tobacco definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_brazil_tobacco;

CREATE FOREIGN TABLE public.pmi_brazil_tobacco (
	farm_id uuid OPTIONS(column_name 'farm_id') NOT NULL,
	crop varchar(50) OPTIONS(column_name 'crop') NULL,
	ndvi_dt date OPTIONS(column_name 'ndvi_dt') NULL,
	tile_id varchar(20) OPTIONS(column_name 'tile_id') NULL,
	create_dt date OPTIONS(column_name 'create_dt') NULL,
	geom public.geometry OPTIONS(column_name 'geom') NULL,
	tile_ndvi varchar(50) OPTIONS(column_name 'tile_ndvi') NULL,
	area_ha float8 OPTIONS(column_name 'area_ha') NULL,
	area_ac float8 OPTIONS(column_name 'area_ac') NULL,
	sowing_date date OPTIONS(column_name 'sowing_date') NULL,
	ndvi_avg float8 OPTIONS(column_name 'ndvi_avg') NULL,
	harvest_date date OPTIONS(column_name 'harvest_date') NULL,
	area numeric OPTIONS(column_name 'area') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'pmi_brazil_tobacco');


-- public.pmi_brazil_tobacco_ndvi definition

-- Drop table

-- DROP FOREIGN TABLE public.pmi_brazil_tobacco_ndvi;

CREATE FOREIGN TABLE public.pmi_brazil_tobacco_ndvi (
	farm_id varchar OPTIONS(column_name 'farm_id') NULL,
	image_id varchar OPTIONS(column_name 'image_id') NULL,
	ndvi_avg float8 OPTIONS(column_name 'ndvi_avg') NULL,
	ndvi_min float8 OPTIONS(column_name 'ndvi_min') NULL,
	ndvi_max float8 OPTIONS(column_name 'ndvi_max') NULL,
	range_less_0 float8 OPTIONS(column_name 'range_less_0') NULL,
	range_0_005 float8 OPTIONS(column_name 'range_0_005') NULL,
	range_005_01 float8 OPTIONS(column_name 'range_005_01') NULL,
	range_01_015 float8 OPTIONS(column_name 'range_01_015') NULL,
	range_015_020 float8 OPTIONS(column_name 'range_015_020') NULL,
	range_020_025 float8 OPTIONS(column_name 'range_020_025') NULL,
	range_025_030 float8 OPTIONS(column_name 'range_025_030') NULL,
	range_030_035 float8 OPTIONS(column_name 'range_030_035') NULL,
	range_035_040 float8 OPTIONS(column_name 'range_035_040') NULL,
	range_040_045 float8 OPTIONS(column_name 'range_040_045') NULL,
	range_045_050 float8 OPTIONS(column_name 'range_045_050') NULL,
	range_050_055 float8 OPTIONS(column_name 'range_050_055') NULL,
	range_055_060 float8 OPTIONS(column_name 'range_055_060') NULL,
	range_060_065 float8 OPTIONS(column_name 'range_060_065') NULL,
	range_065_070 float8 OPTIONS(column_name 'range_065_070') NULL,
	range_070_075 float8 OPTIONS(column_name 'range_070_075') NULL,
	range_075_080 float8 OPTIONS(column_name 'range_075_080') NULL,
	range_080_085 float8 OPTIONS(column_name 'range_080_085') NULL,
	range_085_090 float8 OPTIONS(column_name 'range_085_090') NULL,
	range_090_095 float8 OPTIONS(column_name 'range_090_095') NULL,
	range_095_1 float8 OPTIONS(column_name 'range_095_1') NULL,
	ndvi_vector json OPTIONS(column_name 'ndvi_vector') NULL,
	image_date date OPTIONS(column_name 'image_date') NULL,
	cloud_cover float8 OPTIONS(column_name 'cloud_cover') NULL,
	status text OPTIONS(column_name 'status') NULL,
	crop_variation varchar(20) OPTIONS(column_name 'crop_variation') NULL,
	crop_age int4 OPTIONS(column_name 'crop_age') NULL,
	farm_score float8 OPTIONS(column_name 'farm_score') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'pmi_brazil_tobacco_ndvi');


-- public.pmi_brazil_tobacco_old definition

-- Drop table

-- DROP TABLE public.pmi_brazil_tobacco_old;

CREATE TABLE public.pmi_brazil_tobacco_old (
	gid int4 DEFAULT nextval('pmi_brazil_tobacco_gid_seq'::regclass) NOT NULL,
	crop varchar(10) NULL,
	area float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT pmi_brazil_tobacco_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_brazil_tobacco_geom_idx ON public.pmi_brazil_tobacco_old USING gist (geom);


-- public.pmi_samples_2025v1 definition

-- Drop table

-- DROP TABLE public.pmi_samples_2025v1;

CREATE TABLE public.pmi_samples_2025v1 (
	gid serial4 NOT NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	msisdn float8 NULL,
	color varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT pmi_samples_2025v1_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_samples_2025v1_geom_idx ON public.pmi_samples_2025v1 USING gist (geom);


-- public.pmi_samples_to_assign definition

-- Drop table

-- DROP TABLE public.pmi_samples_to_assign;

CREATE TABLE public.pmi_samples_to_assign (
	gid serial4 NOT NULL,
	id float8 NULL,
	__gid float8 NULL,
	area float8 NULL,
	area_ac float8 NULL,
	uc varchar(10) NULL,
	tehsil varchar(10) NULL,
	district varchar(10) NULL,
	agent_msis varchar(12) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	temp_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT pmi_samples_to_assign_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_samples_to_assign_geom_idx ON public.pmi_samples_to_assign USING gist (geom);


-- public.pmi_survey_samples_2025 definition

-- Drop table

-- DROP TABLE public.pmi_survey_samples_2025;

CREATE TABLE public.pmi_survey_samples_2025 (
	gid serial4 NOT NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	msisdn float8 NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT pmi_survey_samples_2025_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_survey_samples_2025_geom_idx ON public.pmi_survey_samples_2025 USING gist (geom);


-- public.pmi_ucs_temp definition

-- Drop table

-- DROP TABLE public.pmi_ucs_temp;

CREATE TABLE public.pmi_ucs_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	telephone float8 NULL,
	tehsil varchar(20) NULL,
	uc varchar(50) NULL,
	district varchar(20) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	area numeric NULL,
	area_ac numeric NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	agent_msisdn text NULL,
	CONSTRAINT pmi_ucs_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX pmi_ucs_temp_geom_idx ON public.pmi_ucs_temp USING gist (geom);


-- public.portal_activity_tracking definition

-- Drop table

-- DROP TABLE public.portal_activity_tracking;

CREATE TABLE public.portal_activity_tracking (
	portal_url text NULL,
	partner_id uuid NOT NULL,
	start_time timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	end_time timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	"location" text NULL
);


-- public.profile_change_set definition

-- Drop table

-- DROP FOREIGN TABLE public.profile_change_set;

CREATE FOREIGN TABLE public.profile_change_set (
	id uuid NULL,
	msisdn varchar(255) NULL,
	farm_id varchar(255) NULL,
	table_name varchar(255) NULL,
	column_key varchar(255) NULL,
	column_value varchar(1000) NULL,
	operation_type varchar(255) NULL,
	profiled_by varchar(255) NULL,
	profiled_dt timestamp(6) NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	partner_id varchar(255) NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'profile_change_set');


-- public.project_helix_data definition

-- Drop table

-- DROP TABLE public.project_helix_data;

CREATE TABLE public.project_helix_data (
	gid serial4 NOT NULL,
	livestock varchar(254) NULL,
	livestock_count varchar(254) NULL,
	machinery varchar(254) NULL,
	machinery_count varchar(254) NULL,
	farmer_additional_info varchar(254) NULL,
	farm_id varchar(254) NULL,
	farmcrop_id varchar(254) NULL,
	farmer_id numeric NULL,
	profiled_by numeric NULL,
	farmer_status varchar(254) NULL,
	farmer_name varchar(254) NULL,
	land_area numeric NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	farm_title varchar(254) NULL,
	temp_id varchar(254) NULL,
	crop_season varchar(254) NULL,
	title varchar(254) NULL,
	profile_image varchar(254) NULL,
	image varchar(254) NULL,
	image1 varchar(254) NULL,
	image2 varchar(254) NULL,
	image3 varchar(254) NULL,
	seed_type varchar(254) NULL,
	lat numeric NULL,
	lng numeric NULL,
	growth_stage varchar(254) NULL,
	gs_date varchar(254) NULL,
	qa_status varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT project_helix_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX project_helix_data_geom_idx ON public.project_helix_data USING gist (geom);


-- public.ptc_farms definition

-- Drop table

-- DROP TABLE public.ptc_farms;

CREATE TABLE public.ptc_farms (
	gid int4 DEFAULT nextval('spacific_fazliabad_fields_gid_seq'::regclass) NOT NULL,
	cat int4 NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	crop varchar NULL,
	area_ha numeric NULL,
	farm_title varchar NULL,
	farm_crop_id varchar NULL,
	area_ac numeric NULL,
	crop_title varchar NULL,
	"delete" int2 NULL,
	CONSTRAINT spacific_fazliabad_fields_pkey PRIMARY KEY (gid)
);
CREATE INDEX spacific_fazliabad_fields_geom_idx ON public.ptc_farms USING gist (geom);


-- public.ptc_farms_bk_202304261303 definition

-- Drop table

-- DROP TABLE public.ptc_farms_bk_202304261303;

CREATE TABLE public.ptc_farms_bk_202304261303 (
	gid int4 NULL,
	cat int4 NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	crop varchar NULL,
	area_ha numeric NULL,
	farm_title varchar NULL,
	farm_crop_id varchar NULL,
	area_ac numeric NULL,
	crop_title varchar NULL,
	"delete" int2 NULL
);


-- public.ptc_farms_insert definition

-- Drop table

-- DROP TABLE public.ptc_farms_insert;

CREATE TABLE public.ptc_farms_insert (
	gid int4 NULL,
	cat int4 NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	crop varchar NULL,
	area_ha numeric NULL,
	farm_title varchar NULL,
	farm_crop_id varchar NULL,
	area_ac numeric NULL,
	crop_title varchar NULL,
	"delete" int2 NULL,
	farmer_name text NULL,
	profiled_by varchar(15) NULL,
	agent_name text NULL,
	location_name text NULL,
	farmer_id varchar(15) NULL,
	latitude float8 NULL,
	longitude float8 NULL
);


-- public.ptc_studyarea definition

-- Drop table

-- DROP TABLE public.ptc_studyarea;

CREATE TABLE public.ptc_studyarea (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT ptc_studyarea_pkey PRIMARY KEY (gid)
);
CREATE INDEX ptc_studyarea_geom_idx ON public.ptc_studyarea USING gist (geom);


-- public.ptcbounds_yh definition

-- Drop table

-- DROP TABLE public.ptcbounds_yh;

CREATE TABLE public.ptcbounds_yh (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT ptcbounds_yh_pkey PRIMARY KEY (gid)
);
CREATE INDEX ptcbounds_yh_geom_idx ON public.ptcbounds_yh USING gist (geom);


-- public.ptcswabi_temp definition

-- Drop table

-- DROP TABLE public.ptcswabi_temp;

CREATE TABLE public.ptcswabi_temp (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	area_ac numeric NULL,
	district varchar(254) NULL,
	tehsil varchar(254) NULL,
	uc varchar(254) NULL,
	area_ha numeric NULL,
	province varchar(24) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT ptcswabi_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX ptcswabi_temp_geom_idx ON public.ptcswabi_temp USING gist (geom);


-- public.pukkewal_temp definition

-- Drop table

-- DROP TABLE public.pukkewal_temp;

CREATE TABLE public.pukkewal_temp (
	gid serial4 NOT NULL,
	area_ac float8 NULL,
	uc varchar(20) NULL,
	district varchar(20) NULL,
	area numeric NULL,
	temp_id float8 NULL,
	tehsil varchar(10) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT pukkewal_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX pukkewal_temp_geom_idx ON public.pukkewal_temp USING gist (geom);


-- public.punjab_agri_agents definition

-- Drop table

-- DROP TABLE public.punjab_agri_agents;

CREATE TABLE public.punjab_agri_agents (
	srno int4 NULL,
	division varchar(255) NULL,
	district varchar(255) NULL,
	tehsil varchar(255) NULL,
	"name" varchar(1000) NULL,
	"Place of Posting" varchar(255) NULL,
	msisdn varchar(255) NULL,
	mail varchar(255) NULL
);


-- public.punjab_agri_interns definition

-- Drop table

-- DROP TABLE public.punjab_agri_interns;

CREATE TABLE public.punjab_agri_interns (
	srno int4 NULL,
	division varchar(255) NULL,
	district varchar(255) NULL,
	tehsil varchar(255) NULL,
	agent_name varchar(255) NULL,
	father_name varchar(255) NULL,
	msisdn varchar(255) NULL,
	area varchar(255) NULL,
	mail varchar(255) NULL
);


-- public.punjabcsmbounds_temp definition

-- Drop table

-- DROP TABLE public.punjabcsmbounds_temp;

CREATE TABLE public.punjabcsmbounds_temp (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	id float8 NULL,
	area numeric NULL,
	"name" varchar(254) NULL,
	unit varchar(254) NULL,
	cultivated numeric NULL,
	"type" varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT punjabcsmbounds_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX punjabcsmbounds_temp_geom_idx ON public.punjabcsmbounds_temp USING gist (geom);


-- public.rabi_data_verification_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.rabi_data_verification_images_vw;

CREATE FOREIGN TABLE public.rabi_data_verification_images_vw (
	id varchar(255) OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image text OPTIONS(column_name 'image') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'rabi_data_verification_images_vw');


-- public.rabi_data_verification_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.rabi_data_verification_vw;

CREATE FOREIGN TABLE public.rabi_data_verification_vw (
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar(255) OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farmer_status uuid OPTIONS(column_name 'farmer_status') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'rabi_data_verification_vw');


-- public.range_dictionary definition

-- Drop table

-- DROP TABLE public.range_dictionary;

CREATE TABLE public.range_dictionary (
	"key" numeric NULL,
	range_name text NULL
);


-- public.recommended_farmers_bkk_ph2 definition

-- Drop table

-- DROP TABLE public.recommended_farmers_bkk_ph2;

CREATE TABLE public.recommended_farmers_bkk_ph2 (
	"Sr#" text NULL,
	farmer_name text NULL,
	"cast" text NULL,
	farmer_number text NULL,
	profiled_by text NULL,
	"Area" text NULL,
	"Recommendation for Package" text NULL
);


-- public.remaining_sgd_temp definition

-- Drop table

-- DROP TABLE public.remaining_sgd_temp;

CREATE TABLE public.remaining_sgd_temp (
	gid serial4 NOT NULL,
	province varchar(10) NULL,
	district varchar(10) NULL,
	uc varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	temp_id float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	tehsil varchar(15) NULL,
	CONSTRAINT remaining_sgd_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX remaining_sgd_temp_geom_idx ON public.remaining_sgd_temp USING gist (geom);


-- public.removed_farmers definition

-- Drop table

-- DROP TABLE public.removed_farmers;

CREATE TABLE public.removed_farmers (
	farmer_msisdn varchar NULL,
	farmer_name varchar NULL,
	farm_location varchar NULL,
	agent_name varchar NULL,
	agent_msisdn varchar NULL
);


-- public.samples_20240709 definition

-- Drop table

-- DROP TABLE public.samples_20240709;

CREATE TABLE public.samples_20240709 (
	gid serial4 NOT NULL,
	id float8 NULL,
	uc varchar(20) NULL,
	msisdn numeric NULL,
	lat numeric NULL,
	area_ac varchar(254) NULL,
	area_meter varchar(254) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	log numeric NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	state varchar(20) NULL,
	temp_id int8 NULL,
	CONSTRAINT samples_20240709_pkey PRIMARY KEY (gid)
);
CREATE INDEX samples_20240709_geom_idx ON public.samples_20240709 USING gist (geom);


-- public.samples_20240712 definition

-- Drop table

-- DROP TABLE public.samples_20240712;

CREATE TABLE public.samples_20240712 (
	gid serial4 NOT NULL,
	id float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area_meter numeric NULL,
	area_ac numeric NULL,
	lat numeric NULL,
	lng numeric NULL,
	msisdn varchar(20) NULL,
	color varchar(10) NULL,
	area float8 NULL,
	state varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id int8 NULL,
	CONSTRAINT samples_20240712_pkey PRIMARY KEY (gid)
);
CREATE INDEX samples_20240712_geom_idx ON public.samples_20240712 USING gist (geom);


-- public.samples_20240719 definition

-- Drop table

-- DROP TABLE public.samples_20240719;

CREATE TABLE public.samples_20240719 (
	gid serial4 NOT NULL,
	id float8 NULL,
	uc varchar(20) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	lat float8 NULL,
	area_meter float8 NULL,
	area_ac float8 NULL,
	color varchar(10) NULL,
	msisdn varchar(20) NULL,
	lng float8 NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	status varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id int8 NULL,
	CONSTRAINT samples_20240719_pkey PRIMARY KEY (gid)
);
CREATE INDEX samples_20240719_geom_idx ON public.samples_20240719 USING gist (geom);


-- public.samples_20240722 definition

-- Drop table

-- DROP TABLE public.samples_20240722;

CREATE TABLE public.samples_20240722 (
	gid serial4 NOT NULL,
	id float8 NULL,
	msisdn varchar(20) NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	layer varchar(254) NULL,
	"path" varchar(254) NULL,
	lat float8 NULL,
	lng float8 NULL,
	color varchar(10) NULL,
	area_ac float8 NULL,
	area float8 NULL,
	status varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id int8 NULL,
	CONSTRAINT samples_20240722_pkey PRIMARY KEY (gid)
);
CREATE INDEX samples_20240722_geom_idx ON public.samples_20240722 USING gist (geom);


-- public.samples_20240801 definition

-- Drop table

-- DROP TABLE public.samples_20240801;

CREATE TABLE public.samples_20240801 (
	gid serial4 NOT NULL,
	id float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area_meter numeric NULL,
	area_ac numeric NULL,
	lat numeric NULL,
	lng numeric NULL,
	msisdn varchar(20) NULL,
	color varchar(10) NULL,
	area float8 NULL,
	state varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id int8 NULL,
	CONSTRAINT samples_20240801_pkey PRIMARY KEY (gid)
);
CREATE INDEX samples_20240801_geom_idx ON public.samples_20240801 USING gist (geom);


-- public.samples_for_jkunit2 definition

-- Drop table

-- DROP TABLE public.samples_for_jkunit2;

CREATE TABLE public.samples_for_jkunit2 (
	gid serial4 NOT NULL,
	"type" varchar(10) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	temp_id float8 NULL,
	uc varchar(10) NULL,
	tehsil varchar(10) NULL,
	district varchar(10) NULL,
	profiler varchar(15) NULL,
	longitude float8 NULL,
	latitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT samples_for_jkunit2_pkey PRIMARY KEY (gid)
);
CREATE INDEX samples_for_jkunit2_geom_idx ON public.samples_for_jkunit2 USING gist (geom);


-- public.sar_vh_boundry_20250121 definition

-- Drop table

-- DROP TABLE public.sar_vh_boundry_20250121;

CREATE TABLE public.sar_vh_boundry_20250121 (
	gid serial4 NOT NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sar_vh_boundry_20250121_pkey PRIMARY KEY (gid)
);
CREATE INDEX sar_vh_boundry_20250121_geom_idx ON public.sar_vh_boundry_20250121 USING gist (geom);


-- public.sargodha_20230227 definition

-- Drop table

-- DROP TABLE public.sargodha_20230227;

CREATE TABLE public.sargodha_20230227 (
	gid serial4 NOT NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	area float8 NULL,
	uc_code int4 NULL,
	CONSTRAINT sargodha_20230227_pkey PRIMARY KEY (gid)
);
CREATE INDEX sargodha_20230227_geom_idx ON public.sargodha_20230227 USING gist (geom);


-- public.sargodha_base definition

-- Drop table

-- DROP TABLE public.sargodha_base;

CREATE TABLE public.sargodha_base (
	id serial4 NOT NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	shape_leng float8 NULL,
	shape_area float8 NULL,
	adm2_en varchar(50) NULL,
	adm2_pcode varchar(50) NULL,
	adm2_ref varchar(50) NULL,
	adm2alt1en varchar(50) NULL,
	adm2alt2en varchar(50) NULL,
	adm1_en varchar(50) NULL,
	adm1_pcode varchar(50) NULL,
	adm0_en varchar(50) NULL,
	adm0_pcode varchar(50) NULL,
	"date" date NULL,
	validon date NULL,
	validto date NULL,
	_count numeric NULL,
	_sum numeric NULL,
	_mean numeric NULL,
	_median numeric NULL,
	_min numeric NULL,
	_max numeric NULL,
	CONSTRAINT sargodha_base_pkey PRIMARY KEY (id)
);
CREATE INDEX sidx_sargodha_base_geom ON public.sargodha_base USING gist (geom);


-- public.sargodha_merged_temp definition

-- Drop table

-- DROP TABLE public.sargodha_merged_temp;

CREATE TABLE public.sargodha_merged_temp (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	area_ac float8 NULL,
	temp_id varchar NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	CONSTRAINT sargodha_merged_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX sargodha_merged_temp_geom_idx ON public.sargodha_merged_temp USING gist (geom);


-- public.sargodha_srv_temp definition

-- Drop table

-- DROP TABLE public.sargodha_srv_temp;

CREATE TABLE public.sargodha_srv_temp (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area_ac numeric NULL,
	area numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sargodha_srv_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX sargodha_srv_temp_geom_idx ON public.sargodha_srv_temp USING gist (geom);


-- public.sargodha_temp_20240129 definition

-- Drop table

-- DROP TABLE public.sargodha_temp_20240129;

CREATE TABLE public.sargodha_temp_20240129 (
	gid serial4 NOT NULL,
	temp_id int8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	area_ac numeric NULL,
	id int2 NULL,
	uc_2 varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sargodha_temp_20240129_pkey PRIMARY KEY (gid)
);
CREATE INDEX sargodha_temp_20240129_geom_idx ON public.sargodha_temp_20240129 USING gist (geom);


-- public.score_catalog definition

-- Drop table

-- DROP TABLE public.score_catalog;

CREATE TABLE public.score_catalog (
	id serial4 NOT NULL,
	score_type varchar(50) NOT NULL,
	max_score numeric(5, 2) NOT NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT score_catalog_pkey PRIMARY KEY (id),
	CONSTRAINT score_catalog_score_type_key UNIQUE (score_type)
);


-- public.score_weightage definition

-- Drop table

-- DROP TABLE public.score_weightage;

CREATE TABLE public.score_weightage (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	plra int4 NULL,
	ndra int4 NULL,
	telecom_operators int4 NULL,
	financial_institutions int4 NULL,
	bkk_suparco int4 NULL,
	agri_extension_data int4 NULL,
	agri_input_company int4 NULL,
	agri_output_company int4 NULL,
	survey_history int4 NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	CONSTRAINT score_weightage_pkey PRIMARY KEY (id)
);


-- public.seed_types definition

-- Drop table

-- DROP FOREIGN TABLE public.seed_types;

CREATE FOREIGN TABLE public.seed_types (
	id int8 OPTIONS(column_name 'id') NOT NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	active bool OPTIONS(column_name 'active') NULL,
	title_urdu varchar OPTIONS(column_name 'title_urdu') NULL,
	content_id int8 OPTIONS(column_name 'content_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	crop_id int8 OPTIONS(column_name 'crop_id') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'seed_types');


-- public.seed_types_ogp definition

-- Drop table

-- DROP FOREIGN TABLE public.seed_types_ogp;

CREATE FOREIGN TABLE public.seed_types_ogp (
	id varchar(255) DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL,
	title varchar NULL,
	active bool DEFAULT true NULL,
	title_urdu varchar NULL,
	content_id varchar(255) NULL,
	profiled_by varchar NULL,
	profiler_type varchar NULL,
	create_dt timestamp(6) NULL,
	update_dt timestamp(6) NULL,
	crop_id varchar(255) NULL,
	guid varchar(255) DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NOT NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'seed_types');


-- public.selecteducs3 definition

-- Drop table

-- DROP TABLE public.selecteducs3;

CREATE TABLE public.selecteducs3 (
	gid serial4 NOT NULL,
	__gid varchar(254) NULL,
	___majority numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	farmer_name varchar NULL,
	crop varchar NULL,
	msisdn varchar NULL,
	area float8 NULL,
	color varchar NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	CONSTRAINT selecteducs3_pkey PRIMARY KEY (gid)
);
CREATE INDEX selecteducs3_geom_idx ON public.selecteducs3 USING gist (geom);


-- public.sentinel2_data definition

-- Drop table

-- DROP TABLE public.sentinel2_data;

CREATE TABLE public.sentinel2_data (
	title text NULL,
	link text NULL,
	link_alternative text NULL,
	link_icon text NULL,
	summary text NULL,
	ondemand text NULL,
	generationdate timestamp NULL,
	beginposition timestamp NULL,
	endposition timestamp NULL,
	ingestiondate timestamp NULL,
	orbitnumber int8 NULL,
	relativeorbitnumber int8 NULL,
	illuminationazimuthangle float8 NULL,
	illuminationzenithangle float8 NULL,
	vegetationpercentage float8 NULL,
	notvegetatedpercentage float8 NULL,
	waterpercentage float8 NULL,
	unclassifiedpercentage float8 NULL,
	mediumprobacloudspercentage float8 NULL,
	highprobacloudspercentage float8 NULL,
	snowicepercentage float8 NULL,
	cloudcoverpercentage float8 NULL,
	level1cpdiidentifier text NULL,
	format text NULL,
	processingbaseline text NULL,
	platformname text NULL,
	filename text NULL,
	instrumentname text NULL,
	instrumentshortname text NULL,
	"size" text NULL,
	s2datatakeid text NULL,
	producttype text NULL,
	platformidentifier text NULL,
	orbitdirection text NULL,
	platformserialidentifier text NULL,
	processinglevel text NULL,
	datastripidentifier text NULL,
	granuleidentifier text NULL,
	identifier text NULL,
	"uuid" text NULL,
	datatakesensingstart timestamp NULL,
	sensoroperationalmode text NULL,
	tileid text NULL,
	hv_order_tileid text NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	downloaded text DEFAULT 'no'::text NULL,
	id_serial serial4 NOT NULL
);
CREATE INDEX idx_sentinel2_data_geom ON public.sentinel2_data USING gist (geom);


-- public.sentinel2_processing definition

-- Drop table

-- DROP TABLE public.sentinel2_processing;

CREATE TABLE public.sentinel2_processing (
	"uuid" text NOT NULL,
	title text NULL,
	processinglevel text NULL,
	extracted text DEFAULT 'no'::text NULL,
	merged text DEFAULT 'no'::text NULL,
	bands text NULL,
	ndvi text DEFAULT 'no'::text NULL,
	ndmi text DEFAULT 'no'::text NULL,
	savi text DEFAULT 'no'::text NULL,
	psri text DEFAULT 'no'::text NULL,
	CONSTRAINT sentinel2_processing_pkey PRIMARY KEY (uuid)
);


-- public.sentinel2_schedule definition

-- Drop table

-- DROP FOREIGN TABLE public.sentinel2_schedule;

CREATE FOREIGN TABLE public.sentinel2_schedule (
	id int4 OPTIONS(column_name 'id') NOT NULL,
	"uuid" uuid OPTIONS(column_name 'uuid') NULL,
	title varchar(255) OPTIONS(column_name 'title') NULL,
	geom public.geometry(polygon, 4326) OPTIONS(column_name 'geom') NULL,
	cloud_cover numeric(5, 2) OPTIONS(column_name 'cloud_cover') NULL,
	origin varchar(100) OPTIONS(column_name 'origin') NULL,
	tile_id varchar(50) OPTIONS(column_name 'tile_id') NOT NULL,
	datastrip_id varchar(255) OPTIONS(column_name 'datastrip_id') NULL,
	orbit_number int4 OPTIONS(column_name 'orbit_number') NULL,
	processing_dt timestamp OPTIONS(column_name 'processing_dt') NULL,
	product_group_id varchar(255) OPTIONS(column_name 'product_group_id') NULL,
	processing_level varchar(50) OPTIONS(column_name 'processing_level') NULL,
	processor_version varchar(20) OPTIONS(column_name 'processor_version') NULL,
	platform_short_name varchar(50) OPTIONS(column_name 'platform_short_name') NULL,
	instrument_short_name varchar(50) OPTIONS(column_name 'instrument_short_name') NULL,
	relative_orbit_number int4 OPTIONS(column_name 'relative_orbit_number') NULL,
	platform_serial_identifier varchar(50) OPTIONS(column_name 'platform_serial_identifier') NULL,
	product_type varchar(50) OPTIONS(column_name 'product_type') NULL,
	beginning_dt timestamp OPTIONS(column_name 'beginning_dt') NULL,
	ending_dt timestamp OPTIONS(column_name 'ending_dt') NULL,
	status varchar(25) OPTIONS(column_name 'status') NULL,
	created_at timestamp OPTIONS(column_name 'created_at') NULL,
	updated_at timestamp OPTIONS(column_name 'updated_at') NULL,
	image_date date OPTIONS(column_name 'image_date') NULL,
	scheduled_from_id int4 OPTIONS(column_name 'scheduled_from_id') NULL,
	schedule_order int4 OPTIONS(column_name 'schedule_order') NULL,
	retry_count int4 OPTIONS(column_name 'retry_count') NULL,
	last_retry_at timestamp OPTIONS(column_name 'last_retry_at') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'sentinel2_schedule');


-- public.sentinel_2_index_pakistan definition

-- Drop table

-- DROP TABLE public.sentinel_2_index_pakistan;

CREATE TABLE public.sentinel_2_index_pakistan (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	code int2 NULL,
	CONSTRAINT sentinel_2_index_pakistan_pkey PRIMARY KEY (gid)
);
CREATE INDEX sentinel_2_index_pakistan_geom_idx ON public.sentinel_2_index_pakistan USING gist (geom);


-- public.sgd_gcs_citrus definition

-- Drop table

-- DROP TABLE public.sgd_gcs_citrus;

CREATE TABLE public.sgd_gcs_citrus (
	gid serial4 NOT NULL,
	crop varchar(80) NULL,
	area_acres numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sgd_gcs_citrus_pkey PRIMARY KEY (gid)
);
CREATE INDEX sgd_gcs_citrus_geom_idx ON public.sgd_gcs_citrus USING gist (geom);


-- public.sgd_sample_bounds definition

-- Drop table

-- DROP TABLE public.sgd_sample_bounds;

CREATE TABLE public.sgd_sample_bounds (
	gid serial4 NOT NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sgd_sample_bounds_pkey PRIMARY KEY (gid)
);
CREATE INDEX sgd_sample_bounds_geom_idx ON public.sgd_sample_bounds USING gist (geom);


-- public.shorkot definition

-- Drop table

-- DROP TABLE public.shorkot;

CREATE TABLE public.shorkot (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT shorkot_pkey PRIMARY KEY (gid)
);
CREATE INDEX shorkot_geom_idx ON public.shorkot USING gist (geom);


-- public.silanwali_digitized_data definition

-- Drop table

-- DROP TABLE public.silanwali_digitized_data;

CREATE TABLE public.silanwali_digitized_data (
	gid int4 NULL,
	shape public.geometry NULL,
	difference_ndvi_avg float8 NULL,
	area_ac float8 NULL
);


-- public.sillanwalibaf_suparco definition

-- Drop table

-- DROP TABLE public.sillanwalibaf_suparco;

CREATE TABLE public.sillanwalibaf_suparco (
	area numeric NULL,
	rabi24_25 varchar(50) NULL,
	rabi23_24 varchar(50) NULL,
	kharif24 varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	mouza varchar(50) NULL,
	tehsil varchar(50) NULL,
	district varchar(50) NULL,
	CONSTRAINT sillanwalibaf_suparco_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_suparco_district ON public.sillanwalibaf_suparco USING btree (district);
CREATE INDEX idx_suparco_geom ON public.sillanwalibaf_suparco USING gist (geom);
CREATE INDEX idx_suparco_mouza ON public.sillanwalibaf_suparco USING btree (mouza);
CREATE INDEX idx_suparco_tehsil ON public.sillanwalibaf_suparco USING btree (tehsil);
CREATE INDEX sillanwalibaf_suparco_geom_idx ON public.sillanwalibaf_suparco USING gist (geom);


-- public.sms_advisories definition

-- Drop table

-- DROP TABLE public.sms_advisories;

CREATE TABLE public.sms_advisories (
	"Crop" varchar NULL,
	"District/Tehsil location" varchar NULL,
	"Farm location" varchar NULL,
	"Area" varchar NULL,
	"Method of sowing" varchar NULL,
	"Meterological conditions" varchar NULL,
	"Text" varchar NULL,
	"Before Sowing(linked with crop calender)" varchar NULL,
	"After Sowing After Sowing " varchar NULL
);


-- public.soil_data definition

-- Drop table

-- DROP TABLE public.soil_data;

CREATE TABLE public.soil_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	district varchar(254) NULL,
	tehsil varchar(254) NULL,
	"name" varchar(254) NULL,
	cnic numeric NULL,
	mobile_no varchar(254) NULL,
	uc varchar(254) NULL,
	village varchar(254) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	barcode varchar(254) NULL,
	potash varchar(30) NULL,
	zinc varchar(30) NULL,
	calciumcar varchar(30) NULL,
	organicmatter varchar(30) NULL,
	electrical varchar(30) NULL,
	texture varchar(32) NULL,
	ph varchar(30) NULL,
	copper varchar(30) NULL,
	saturation varchar(30) NULL,
	phosphorus varchar(30) NULL,
	iron varchar(30) NULL,
	boron varchar(30) NULL,
	manganese varchar(30) NULL,
	datasource varchar(254) NULL,
	samplecollected varchar(24) NULL,
	tss numeric NULL,
	sand numeric NULL,
	silt numeric NULL,
	clay numeric NULL,
	n varchar(254) NULL,
	naoh numeric NULL,
	ammironsul numeric NULL,
	faes numeric NULL,
	camg numeric NULL,
	tds float8 NULL,
	hco3 numeric NULL,
	cl numeric NULL,
	salt numeric NULL,
	gypsum varchar(254) NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT soil_data_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_soil_data_datasource ON public.soil_data USING btree (datasource);
CREATE INDEX idx_soil_data_texture ON public.soil_data USING btree (texture);
CREATE INDEX oil_data_geom_idx ON public.soil_data USING gist (geom);


-- public.soil_samples_clean definition

-- Drop table

-- DROP TABLE public.soil_samples_clean;

CREATE TABLE public.soil_samples_clean (
	gid serial4 NOT NULL,
	farmerid float8 NULL,
	"farmer nam" varchar(254) NULL,
	mobileno varchar(254) NULL,
	"zone" varchar(254) NULL,
	"land class" varchar(254) NULL,
	region varchar(254) NULL,
	territory varchar(254) NULL,
	category varchar(254) NULL,
	province varchar(254) NULL,
	district varchar(254) NULL,
	"tehsil/tal" varchar(254) NULL,
	salespoint varchar(254) NULL,
	activityno varchar(254) NULL,
	activityda varchar(254) NULL,
	"sample sta" varchar(254) NULL,
	"sample dep" varchar(254) NULL,
	"area/plot" varchar(254) NULL,
	"square/blo" varchar(254) NULL,
	"previous c" varchar(254) NULL,
	available numeric NULL,
	availabl_1 numeric NULL,
	elecrical numeric NULL,
	"gypsum req" numeric NULL,
	ph numeric NULL,
	"sodium ads" numeric NULL,
	"soluble &" numeric NULL,
	"soluble ca" numeric NULL,
	texture varchar(254) NULL,
	"zinc (ppm)" numeric NULL,
	"year" float8 NULL,
	recommende varchar(254) NULL,
	lat numeric NULL,
	long numeric NULL,
	field_34 numeric NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT soil_samples_clean_pkey PRIMARY KEY (gid)
);
CREATE INDEX soil_samples_clean_geom_idx ON public.soil_samples_clean USING gist (geom);


-- public.sowing_date definition

-- Drop table

-- DROP TABLE public.sowing_date;

CREATE TABLE public.sowing_date (
	max date NULL
);


-- public.sowing_date_thresholds definition

-- Drop table

-- DROP FOREIGN TABLE public.sowing_date_thresholds;

CREATE FOREIGN TABLE public.sowing_date_thresholds (
	crop_name text NULL,
	variety text NULL,
	start_threshold float8 NULL,
	end_threshold float8 NULL,
	days_sown int4 NULL,
	id int4 NULL,
	location_name text NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'sowing_date_thresholds');


-- public.spatial_ref_sys definition

-- Drop table

-- DROP TABLE public.spatial_ref_sys;

CREATE TABLE public.spatial_ref_sys (
	srid int4 NOT NULL,
	auth_name varchar(256) NULL,
	auth_srid int4 NULL,
	srtext varchar(2048) NULL,
	proj4text varchar(2048) NULL,
	CONSTRAINT spatial_ref_sys_pkey PRIMARY KEY (srid),
	CONSTRAINT spatial_ref_sys_srid_check CHECK (((srid > 0) AND (srid <= 998999)))
);


-- public.ss_csm1_baseline_health_acerage definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_baseline_health_acerage;

CREATE FOREIGN TABLE public.ss_csm1_baseline_health_acerage (
	image_date date NULL,
	acerage_below_baseline numeric NULL,
	acerage_above_baseline numeric NULL,
	acerage_within_baseline numeric NULL,
	total_acerage numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_bseline_health definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_bseline_health;

CREATE FOREIGN TABLE public.ss_csm1_bseline_health (
	image_date date NULL,
	within_baseline int8 NULL,
	above_baseline int8 NULL,
	below_baseline int8 NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_circle_breakdown definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_circle_breakdown;

CREATE FOREIGN TABLE public.ss_csm1_circle_breakdown (
	circle text NULL,
	farms int8 NULL,
	acreage numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_harvest_circle definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_harvest_circle;

CREATE FOREIGN TABLE public.ss_csm1_harvest_circle (
	circle_name text NULL,
	harvested numeric NULL,
	balance numeric NULL,
	total_area numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_harvest_stats definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_harvest_stats;

CREATE FOREIGN TABLE public.ss_csm1_harvest_stats (
	image_date date NULL,
	harvested numeric NULL,
	balence numeric NULL,
	total_area float8 NULL,
	"clouds/no_data" numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_health_latest_stats_unset definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_health_latest_stats_unset;

CREATE FOREIGN TABLE public.ss_csm1_health_latest_stats_unset (
	"Vegetation" text NULL,
	"Acerage" numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_health_stats definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_health_stats;

CREATE FOREIGN TABLE public.ss_csm1_health_stats (
	image_date date NULL,
	no_vegetation numeric NULL,
	high_vegetation numeric NULL,
	total_area numeric NULL,
	"clouds/no_data" numeric NULL,
	low_vegetaion numeric NULL,
	medium_vegetaion numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_health_stats_latest_circle definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_health_stats_latest_circle;

CREATE FOREIGN TABLE public.ss_csm1_health_stats_latest_circle (
	circle_name text NULL,
	image_date date NULL,
	no_vegetation numeric NULL,
	low_vegetaion numeric NULL,
	high_vegetation numeric NULL,
	"clouds/no_data" numeric NULL,
	medium_vegetaion numeric NULL
)
SERVER local_gis_v3;


-- public.ss_csm1_variety_acreage definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_variety_acreage;

CREATE FOREIGN TABLE public.ss_csm1_variety_acreage (
	variety_name text NULL,
	acreage numeric NULL
)
SERVER local_gis_v3
OPTIONS (table_name 'ss_csm1_variety_acreage');


-- public.ss_csm1_variety_harvest definition

-- Drop table

-- DROP FOREIGN TABLE public.ss_csm1_variety_harvest;

CREATE FOREIGN TABLE public.ss_csm1_variety_harvest (
	variety_name text NULL,
	harvested numeric NULL,
	balance numeric NULL,
	total_area numeric NULL
)
SERVER local_gis_v3;


-- public.stat_bank_agents definition

-- Drop table

-- DROP TABLE public.stat_bank_agents;

CREATE TABLE public.stat_bank_agents (
	id varchar NULL,
	"name" varchar NULL,
	organization varchar NULL,
	msisdn varchar NULL,
	email varchar NULL,
	address varchar NULL
);


-- public.subscribers definition

-- Drop table

-- DROP FOREIGN TABLE public.subscribers;

CREATE FOREIGN TABLE public.subscribers (
	msisdn varchar(15) OPTIONS(column_name 'msisdn') NOT NULL,
	country_code varchar(5) OPTIONS(column_name 'country_code') NOT NULL,
	location_id int8 OPTIONS(column_name 'location_id') NULL,
	first_sub_dt timestamp(6) OPTIONS(column_name 'first_sub_dt') NOT NULL,
	last_sub_dt timestamp(6) OPTIONS(column_name 'last_sub_dt') NULL,
	last_charge_dt timestamp(6) OPTIONS(column_name 'last_charge_dt') NULL,
	grace_expire_dt timestamp(6) OPTIONS(column_name 'grace_expire_dt') NULL,
	firebase_session varchar(255) OPTIONS(column_name 'firebase_session') NULL,
	last_signin_dt timestamp(6) OPTIONS(column_name 'last_signin_dt') NULL,
	operator_id int8 OPTIONS(column_name 'operator_id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	language_id int8 OPTIONS(column_name 'language_id') NULL,
	sub_mode_id int8 OPTIONS(column_name 'sub_mode_id') NOT NULL,
	last_call_dt timestamp(6) OPTIONS(column_name 'last_call_dt') NULL,
	recent_activity_dt timestamp(6) OPTIONS(column_name 'recent_activity_dt') NULL,
	is_charging_enabled bool OPTIONS(column_name 'is_charging_enabled') NOT NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	profiler_type varchar OPTIONS(column_name 'profiler_type') NULL,
	"source" varchar OPTIONS(column_name 'source') NOT NULL,
	is_blocked bool OPTIONS(column_name 'is_blocked') NULL,
	is_purged bool OPTIONS(column_name 'is_purged') NOT NULL,
	last_purge_date timestamp(6) OPTIONS(column_name 'last_purge_date') NULL,
	charge_count int4 OPTIONS(column_name 'charge_count') NULL,
	category_type varchar OPTIONS(column_name 'category_type') NULL,
	default_location_enabled bool OPTIONS(column_name 'default_location_enabled') NULL,
	dbss_sync_dt timestamp(6) OPTIONS(column_name 'dbss_sync_dt') NULL,
	next_charge_dt timestamp(6) OPTIONS(column_name 'next_charge_dt') NULL,
	call_success int8 OPTIONS(column_name 'call_success') NOT NULL,
	is_verified bool OPTIONS(column_name 'is_verified') NULL
)
SERVER prod_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'subscribers');


-- public.subscribers_details definition

-- Drop table

-- DROP TABLE public.subscribers_details;

CREATE TABLE public.subscribers_details (
	"name" varchar NULL,
	similarity_in_name float4 NULL,
	bkk_subscribers text NULL,
	kz_subscribers float8 NULL,
	shape public.geometry NULL
);


-- public.subsidy_farmers_mpcl definition

-- Drop table

-- DROP TABLE public.subsidy_farmers_mpcl;

CREATE TABLE public.subsidy_farmers_mpcl (
	farmer_name varchar NULL,
	caste varchar NULL,
	farmer_number varchar NULL,
	secondary_number varchar NULL,
	cnic varchar NULL,
	gender varchar NULL,
	create_dt timestamp DEFAULT now() NULL
);


-- public.sugar_harvest_img_info definition

-- Drop table

-- DROP TABLE public.sugar_harvest_img_info;

CREATE TABLE public.sugar_harvest_img_info (
	id int4 DEFAULT nextval('satelliete_image_process_info_id_seq'::regclass) NOT NULL,
	"date" date NOT NULL,
	satellite varchar(150) NOT NULL,
	unit varchar(50) NULL,
	create_dt timestamp DEFAULT now() NULL,
	CONSTRAINT satelliete_image_process_info_pkey PRIMARY KEY (id)
);


-- public.sugarcane_csm_classified_22 definition

-- Drop table

-- DROP TABLE public.sugarcane_csm_classified_22;

CREATE TABLE public.sugarcane_csm_classified_22 (
	gid serial4 NOT NULL,
	area numeric NULL,
	"name" varchar(254) NULL,
	unit varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sugarcane_csm_classified_22_pkey PRIMARY KEY (gid)
);
CREATE INDEX sugarcane_csm_classified_22_geom_idx ON public.sugarcane_csm_classified_22 USING gist (geom);


-- public.sugarcane_csm_classified_23 definition

-- Drop table

-- DROP TABLE public.sugarcane_csm_classified_23;

CREATE TABLE public.sugarcane_csm_classified_23 (
	gid serial4 NOT NULL,
	id float8 NULL,
	area numeric NULL,
	"type" varchar(10) NULL,
	"name" varchar(20) NULL,
	unit varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sugarcane_csm_classified_23_pkey PRIMARY KEY (gid)
);
CREATE INDEX sugarcane_csm_classified_23_geom_idx ON public.sugarcane_csm_classified_23 USING gist (geom);


-- public.sugarcane_csm_temp definition

-- Drop table

-- DROP TABLE public.sugarcane_csm_temp;

CREATE TABLE public.sugarcane_csm_temp (
	gid serial4 NOT NULL,
	id float8 NULL,
	area numeric NULL,
	"type" varchar(10) NULL,
	"name" varchar(20) NULL,
	unit varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sugarcane_csm_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX sugarcane_csm_temp_geom_idx ON public.sugarcane_csm_temp USING gist (geom);


-- public.sugarcane_rabi_24_sgd definition

-- Drop table

-- DROP TABLE public.sugarcane_rabi_24_sgd;

CREATE TABLE public.sugarcane_rabi_24_sgd (
	gid serial4 NOT NULL,
	dn int4 NULL,
	area numeric NULL,
	"class" varchar(10) NULL,
	mean_ndvi numeric NULL,
	quality varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sugarcane_rabi_24_sgd_pkey PRIMARY KEY (gid)
);
CREATE INDEX sugarcane_rabi_24_sgd_geom_idx ON public.sugarcane_rabi_24_sgd USING gist (geom);


-- public.sugarcanepunjab_temp definition

-- Drop table

-- DROP TABLE public.sugarcanepunjab_temp;

CREATE TABLE public.sugarcanepunjab_temp (
	gid int4 DEFAULT nextval('sugarcanepunjab_gid_seq'::regclass) NOT NULL,
	id float8 NULL,
	area numeric NULL,
	"type" varchar(10) NULL,
	"name" varchar(254) NULL,
	unit varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT sugarcanepunjab_pkey PRIMARY KEY (gid)
);
CREATE INDEX sugarcanepunjab_geom_idx ON public.sugarcanepunjab_temp USING gist (geom);


-- public.suger_cane_type_ogp definition

-- Drop table

-- DROP FOREIGN TABLE public.suger_cane_type_ogp;

CREATE FOREIGN TABLE public.suger_cane_type_ogp (
	id uuid NULL,
	"type" varchar(255) NULL,
	create_dt timestamp NULL,
	update_dt timestamp NULL,
	seq_order int4 NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'suger_cane_type');


-- public.suparco_farm_ndvi definition

-- Drop table

-- DROP TABLE public.suparco_farm_ndvi;

CREATE TABLE public.suparco_farm_ndvi (
	farm_id varchar NOT NULL,
	image_id varchar NULL,
	ndvi_avg float8 NULL,
	ndvi_min float8 NULL,
	ndvi_max float8 NULL,
	image_date date NOT NULL,
	cloud_cover float8 NULL,
	status text NULL,
	crop_variation varchar(20) NULL,
	crop_age int4 NULL,
	farm_score float8 NULL,
	CONSTRAINT suparco_farm_ndvi_pkey PRIMARY KEY (farm_id, image_date)
);
CREATE INDEX idx_suparco_ndvi_farm_id ON public.suparco_farm_ndvi USING btree (farm_id);
CREATE INDEX idx_suparco_ndvi_image_date ON public.suparco_farm_ndvi USING btree (image_date);
CREATE INDEX idx_suparco_ndvi_image_id ON public.suparco_farm_ndvi USING btree (image_id);


-- public.suparco_farms definition

-- Drop table

-- DROP TABLE public.suparco_farms;

CREATE TABLE public.suparco_farms (
	id serial4 NOT NULL,
	crop_name text NOT NULL,
	area float8 NOT NULL,
	gjson jsonb NOT NULL,
	season json NULL,
	field_score text NULL,
	request_time text NULL,
	"size" numeric NULL,
	farm_id text NULL,
	gjson_a json NULL,
	CONSTRAINT suparco_farms_pkey PRIMARY KEY (id)
);


-- public.suparco_farms_complete definition

-- Drop table

-- DROP TABLE public.suparco_farms_complete;

CREATE TABLE public.suparco_farms_complete (
	farm_id uuid DEFAULT uuid_generate_v4() NOT NULL,
	id int4 NOT NULL,
	crop_name text NULL,
	area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	mauza varchar(100) NULL,
	tehsil varchar(100) NULL,
	district varchar(100) NULL,
	tile_id varchar(25) NULL,
	ndvi_dt date NULL,
	tile_ndvi varchar NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	uc varchar NULL,
	CONSTRAINT suparco_farms_complete_pkey PRIMARY KEY (farm_id)
);
CREATE INDEX idx_farms_tile_id ON public.suparco_farms_complete USING btree (tile_id);
CREATE INDEX suparco_farms_complete_geom_idx ON public.suparco_farms_complete USING gist (geom);


-- public.suparco_field_data definition

-- Drop table

-- DROP TABLE public.suparco_field_data;

CREATE TABLE public.suparco_field_data (
	farm_id serial4 NOT NULL,
	area numeric NULL,
	crop varchar(50) NULL,
	date_time timestamp NULL,
	field_score varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	image_scene_overlap int4 NULL,
	narration text NULL,
	ndvi_avg numeric NULL,
	ndvi_max numeric NULL,
	ndvi_min numeric NULL,
	ndwi_avg numeric NULL,
	ndwi_max numeric NULL,
	ndwi_min numeric NULL,
	season_start varchar(50) NULL,
	season_mid varchar(50) NULL,
	season_end varchar(50) NULL,
	sensor_date timestamp NULL,
	sensor_name varchar(50) NULL,
	gid int8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	CONSTRAINT suparco_field_data_pkey PRIMARY KEY (farm_id)
);


-- public.sur_farmers_caste definition

-- Drop table

-- DROP TABLE public.sur_farmers_caste;

CREATE TABLE public.sur_farmers_caste (
	id serial4 NOT NULL,
	"name" text NULL,
	caste text NULL,
	msisdn varchar(13) NULL,
	cnic varchar(20) NULL,
	area varchar(20) NULL,
	address text NULL,
	CONSTRAINT sur_farmers_caste_pkey PRIMARY KEY (id)
);


-- public.survey_additional_info definition

-- Drop table

-- DROP FOREIGN TABLE public.survey_additional_info;

CREATE FOREIGN TABLE public.survey_additional_info (
	farmer_id varchar(255) OPTIONS(column_name 'farmer_id') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	livestock_id varchar(255) OPTIONS(column_name 'livestock_id') NULL,
	livestock varchar(255) OPTIONS(column_name 'livestock') NULL,
	additional_info varchar(255) OPTIONS(column_name 'additional_info') NULL,
	machinery varchar OPTIONS(column_name 'machinery') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'survey_additional_info');


-- public.survey_data definition

-- Drop table

-- DROP FOREIGN TABLE public.survey_data;

CREATE FOREIGN TABLE public.survey_data (
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farmcrop_id varchar(255) OPTIONS(column_name 'farmcrop_id') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL,
	farmer_name varchar(60) OPTIONS(column_name 'farmer_name') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farmer_status uuid OPTIONS(column_name 'farmer_status') NULL,
	land_area float8 OPTIONS(column_name 'land_area') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp(6) OPTIONS(column_name 'update_dt') NULL,
	farm_title varchar OPTIONS(column_name 'farm_title') NULL,
	shape_id varchar OPTIONS(column_name 'shape_id') NULL,
	temp_id varchar OPTIONS(column_name 'temp_id') NULL,
	crop_season varchar(255) OPTIONS(column_name 'crop_season') NULL,
	title varchar OPTIONS(column_name 'title') NULL,
	geom text OPTIONS(column_name 'geom') NULL,
	shape public.geometry OPTIONS(column_name 'shape') NULL,
	profile_image text OPTIONS(column_name 'profile_image') NULL,
	image text OPTIONS(column_name 'image') NULL,
	image1 text OPTIONS(column_name 'image1') NULL,
	image2 text OPTIONS(column_name 'image2') NULL,
	image3 text OPTIONS(column_name 'image3') NULL,
	seed_type varchar OPTIONS(column_name 'seed_type') NULL,
	lat numeric(8, 6) OPTIONS(column_name 'lat') NULL,
	lng numeric(8, 6) OPTIONS(column_name 'lng') NULL,
	growth_stage varchar OPTIONS(column_name 'growth_stage') NULL,
	gs_date date OPTIONS(column_name 'gs_date') NULL,
	description varchar OPTIONS(column_name 'description') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'survey_data');


-- public.survey_farm_images_vw definition

-- Drop table

-- DROP FOREIGN TABLE public.survey_farm_images_vw;

CREATE FOREIGN TABLE public.survey_farm_images_vw (
	id varchar(255) OPTIONS(column_name 'id') NULL,
	create_dt timestamp(6) OPTIONS(column_name 'create_dt') NULL,
	image varchar(255) OPTIONS(column_name 'image') NULL,
	profiled_by varchar OPTIONS(column_name 'profiled_by') NULL,
	farmer_id varchar OPTIONS(column_name 'farmer_id') NULL
)
SERVER ogp_bkk_v2_live
OPTIONS (schema_name 'public', table_name 'survey_farm_images_vw');


-- public.survey_farm_ndvi definition

-- Drop table

-- DROP TABLE public.survey_farm_ndvi;

CREATE TABLE public.survey_farm_ndvi (
	farm_id varchar NOT NULL,
	image_id varchar NULL,
	ndvi_avg float8 NULL,
	ndvi_min float8 NULL,
	ndvi_max float8 NULL,
	range_less_0 float8 NULL,
	range_0_005 float8 NULL,
	range_005_01 float8 NULL,
	range_01_015 float8 NULL,
	range_015_020 float8 NULL,
	range_020_025 float8 NULL,
	range_025_030 float8 NULL,
	range_030_035 float8 NULL,
	range_035_040 float8 NULL,
	range_040_045 float8 NULL,
	range_045_050 float8 NULL,
	range_050_055 float8 NULL,
	range_055_060 float8 NULL,
	range_060_065 float8 NULL,
	range_065_070 float8 NULL,
	range_070_075 float8 NULL,
	range_075_080 float8 NULL,
	range_080_085 float8 NULL,
	range_085_090 float8 NULL,
	range_090_095 float8 NULL,
	range_095_1 float8 NULL,
	ndvi_vector json NULL,
	image_date date NOT NULL,
	cloud_cover float8 NULL,
	status text NULL,
	crop_variation varchar(20) NULL,
	CONSTRAINT survey_farm_ndvi_pkey PRIMARY KEY (farm_id, image_date)
);
CREATE INDEX survey_farm_ndvi_avg ON public.survey_farm_ndvi USING btree (ndvi_avg);
CREATE INDEX survey_farm_ndvi_cloud_cover ON public.survey_farm_ndvi USING btree (cloud_cover);
CREATE INDEX survey_farm_ndvi_farm_id ON public.survey_farm_ndvi USING btree (farm_id);
CREATE INDEX survey_farm_ndvi_image_date ON public.survey_farm_ndvi USING btree (image_date);


-- public.survey_history definition

-- Drop table

-- DROP TABLE public.survey_history;

CREATE TABLE public.survey_history (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"name" varchar(255) NULL,
	company_name varchar(255) NULL,
	status varchar(255) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	score int4 NULL,
	CONSTRAINT survey_history_pkey PRIMARY KEY (id)
);


-- public.survey_images definition

-- Drop table

-- DROP TABLE public.survey_images;

CREATE TABLE public.survey_images (
	id varchar(250) NOT NULL,
	image text NULL,
	tags text NULL,
	farm_id varchar(250) NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT survey_images_pkey PRIMARY KEY (id)
);


-- public.survey_vi_log definition

-- Drop table

-- DROP TABLE public.survey_vi_log;

CREATE TABLE public.survey_vi_log (
	gid serial4 NOT NULL,
	farm_id uuid DEFAULT uuid_generate_v4() NOT NULL,
	tile_id varchar(10) NULL,
	tile_ndvi varchar NULL,
	ndvi_dt date NULL,
	tile_ndmi varchar NULL,
	ndmi_dt date NULL,
	geom public.geometry NULL,
	update_dt date NULL,
	create_dt date NULL,
	tile_process_dt date NULL,
	status varchar NULL,
	checks text NULL,
	CONSTRAINT survey_vi_log_pkey PRIMARY KEY (gid)
);


-- public.survey_vi_log_v2 definition

-- Drop table

-- DROP TABLE public.survey_vi_log_v2;

CREATE TABLE public.survey_vi_log_v2 (
	gid int4 NULL,
	farm_id uuid NULL,
	tile_id varchar(10) NULL,
	tile_ndvi varchar NULL,
	ndvi_dt date NULL,
	tile_ndmi varchar NULL,
	ndmi_dt date NULL,
	geom public.geometry NULL,
	update_dt date NULL,
	create_dt date NULL,
	tile_process_dt date NULL,
	status varchar NULL,
	checks text NULL
);


-- public.surveyapp_assigned_data definition

-- Drop table

-- DROP TABLE public.surveyapp_assigned_data;

CREATE TABLE public.surveyapp_assigned_data (
	temp_id varchar NOT NULL,
	agent_number varchar NOT NULL,
	table_data varchar NOT NULL,
	state varchar DEFAULT 'not'::character varying NULL,
	color varchar DEFAULT 'red'::character varying NULL,
	partner_id varchar NOT NULL,
	CONSTRAINT surveyapp_assigned_data_pkey PRIMARY KEY (partner_id, temp_id)
);
CREATE INDEX idx_surveyapp_assigned_agent ON public.surveyapp_assigned_data USING btree (agent_number);
CREATE INDEX idx_surveyapp_assigned_data_agent_number ON public.surveyapp_assigned_data USING btree (agent_number);
CREATE INDEX idx_surveyapp_assigned_data_temp_id ON public.surveyapp_assigned_data USING btree (temp_id);
CREATE INDEX idx_surveyapp_assigned_temp_id ON public.surveyapp_assigned_data USING btree (temp_id);


-- public.surveyapp_assigned_jkfarmers definition

-- Drop table

-- DROP TABLE public.surveyapp_assigned_jkfarmers;

CREATE TABLE public.surveyapp_assigned_jkfarmers (
	agent_msisdn varchar NOT NULL,
	passbook_no varchar NOT NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT surveyapp_assigned_jkfarmers_pkey PRIMARY KEY (agent_msisdn, passbook_no)
);
CREATE INDEX idx_assigned_passbook ON public.surveyapp_assigned_jkfarmers USING btree (passbook_no);
CREATE INDEX idx_survey_passbook ON public.surveyapp_assigned_jkfarmers USING btree (passbook_no);


-- public.surveyapp_assigned_previous_jk_data definition

-- Drop table

-- DROP TABLE public.surveyapp_assigned_previous_jk_data;

CREATE TABLE public.surveyapp_assigned_previous_jk_data (
	temp_id varchar NULL,
	agent_number varchar NULL,
	table_data varchar NULL,
	state varchar NULL,
	color varchar NULL,
	partner_id varchar NULL
);


-- public.surveyor_tracks definition

-- Drop table

-- DROP TABLE public.surveyor_tracks;

CREATE TABLE public.surveyor_tracks (
	profiled_by int8 NOT NULL,
	survey_date date NOT NULL,
	survey_path jsonb NOT NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	geom public.geometry(linestring, 4326) NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	CONSTRAINT surveyor_tracks_pkey PRIMARY KEY (id),
	CONSTRAINT unique_surveyor_date UNIQUE (profiled_by, survey_date)
);


-- public.surveyorunit2_temp definition

-- Drop table

-- DROP TABLE public.surveyorunit2_temp;

CREATE TABLE public.surveyorunit2_temp (
	gid serial4 NOT NULL,
	name_2 varchar(254) NULL,
	circle varchar(254) NULL,
	msisdn varchar(254) NULL,
	name_3 varchar(254) NULL,
	designatio varchar(254) NULL,
	villages_b varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT surveyorunit2_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX surveyorunit2_temp_geom_idx ON public.surveyorunit2_temp USING gist (geom);


-- public.swabi_digitization_project definition

-- Drop table

-- DROP TABLE public.swabi_digitization_project;

CREATE TABLE public.swabi_digitization_project (
	gid int4 DEFAULT nextval('swabi_merge_digitize_data_gid_seq'::regclass) NOT NULL,
	agent_name varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swabi_merge_digitize_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX swabi_merge_digitize_data_geom_idx ON public.swabi_digitization_project USING gist (geom);


-- public.swabi_digitized_classified definition

-- Drop table

-- DROP TABLE public.swabi_digitized_classified;

CREATE TABLE public.swabi_digitized_classified (
	gid int4 DEFAULT nextval('swabi_classified_gid_seq'::regclass) NOT NULL,
	_majority numeric NULL,
	area float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	uc varchar NULL,
	tehsil varchar NULL,
	district varchar NULL,
	agent_msisdn varchar NULL,
	temp_id varchar NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	crop varchar(20) NULL,
	ndvi_avg float8 NULL,
	quality text NULL,
	status varchar(50) NULL,
	kharif_crop varchar(100) NULL,
	CONSTRAINT swabi_classified_pkey PRIMARY KEY (gid)
);
CREATE INDEX idx_area_ac_sdc ON public.swabi_digitized_classified USING btree (area_ac);
CREATE INDEX idx_district_sdc ON public.swabi_digitized_classified USING btree (district);
CREATE INDEX idx_ndvi_sdc ON public.swabi_digitized_classified USING btree (ndvi_avg);
CREATE INDEX idx_quality_sdc ON public.swabi_digitized_classified USING btree (quality);
CREATE INDEX sdc_gid_idx ON public.swabi_digitized_classified USING btree (gid);
CREATE INDEX swabi_classified_geom_idx ON public.swabi_digitized_classified USING gist (geom);
CREATE INDEX swabi_digitized_classified_geom_gist ON public.swabi_digitized_classified USING gist (geom);
CREATE INDEX swabi_digitized_classified_gid_gin ON public.swabi_digitized_classified USING btree (gid);
CREATE INDEX swabi_digitized_classified_uc_gin ON public.swabi_digitized_classified USING btree (uc);


-- public.swabi_digitized_classified_old definition

-- Drop table

-- DROP TABLE public.swabi_digitized_classified_old;

CREATE TABLE public.swabi_digitized_classified_old (
	gid int4 DEFAULT nextval('swabi_classified_gid_seq'::regclass) NOT NULL,
	__gid varchar(254) NULL,
	___majority numeric NULL,
	area float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	uc varchar NULL,
	tehsil varchar NULL,
	district varchar NULL,
	agent_msisdn varchar NULL,
	temp_id varchar NULL,
	CONSTRAINT gid_pk_sdc_old PRIMARY KEY (gid)
);
CREATE INDEX sdc_old_geom_idx ON public.swabi_digitized_classified_old USING gist (geom);
CREATE INDEX sdc_old_gid_idx ON public.swabi_digitized_classified_old USING btree (gid);


-- public.swabi_digitized_temp_20240118 definition

-- Drop table

-- DROP TABLE public.swabi_digitized_temp_20240118;

CREATE TABLE public.swabi_digitized_temp_20240118 (
	gid int4 NULL,
	_majority numeric NULL,
	area float8 NULL,
	area_ac float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	uc varchar NULL,
	tehsil varchar NULL,
	district varchar NULL,
	agent_msisdn varchar NULL,
	temp_id varchar NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	crop varchar(20) NULL
);


-- public.swabi_kst_ucs definition

-- Drop table

-- DROP TABLE public.swabi_kst_ucs;

CREATE TABLE public.swabi_kst_ucs (
	gid serial4 NOT NULL,
	class_id float8 NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area_ac float8 NULL,
	mouza varchar(20) NULL,
	crop varchar(20) NULL,
	color varchar(20) NULL,
	state varchar(20) NULL,
	assigned varchar(20) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swabi_kst_ucs_pkey PRIMARY KEY (gid)
);
CREATE INDEX swabi_kst_ucs_geom_idx ON public.swabi_kst_ucs USING gist (geom);


-- public.swabi_missing_fields_20240219 definition

-- Drop table

-- DROP TABLE public.swabi_missing_fields_20240219;

CREATE TABLE public.swabi_missing_fields_20240219 (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area numeric NULL,
	area_ac float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(50) NULL,
	color varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swabi_missing_fields_20240219_pkey PRIMARY KEY (gid)
);
CREATE INDEX swabi_missing_fields_20240219_geom_idx ON public.swabi_missing_fields_20240219 USING gist (geom);


-- public.swabi_qced_20240112 definition

-- Drop table

-- DROP TABLE public.swabi_qced_20240112;

CREATE TABLE public.swabi_qced_20240112 (
	gid int8 NULL,
	agent_msisdn varchar(15) NULL,
	uc varchar(25) NULL,
	tehsil varchar(50) NULL,
	district varchar(50) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	latitude float8 NULL,
	longitude varchar NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id varchar NULL,
	uid serial4 NOT NULL
);
CREATE INDEX swabi_qced_20240112_geom_idx ON public.swabi_qced_20240112 USING gist (geom);


-- public.swabi_temp_20231114 definition

-- Drop table

-- DROP TABLE public.swabi_temp_20231114;

CREATE TABLE public.swabi_temp_20231114 (
	gid serial4 NOT NULL,
	uc varchar(50) NULL,
	tehsil varchar(50) NULL,
	district varchar(20) NULL,
	temp_id float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swabi_temp_20231114_pkey PRIMARY KEY (gid)
);
CREATE INDEX swabi_temp_20231114_geom_idx ON public.swabi_temp_20231114 USING gist (geom);


-- public.swabi_tempa definition

-- Drop table

-- DROP TABLE public.swabi_tempa;

CREATE TABLE public.swabi_tempa (
	gid serial4 NOT NULL,
	msisdn numeric NULL,
	farmer_nam varchar(254) NULL,
	profiled_b varchar(254) NULL,
	agent_name varchar(254) NULL,
	location_n varchar(254) NULL,
	farm_id varchar(254) NULL,
	farm_crop_ varchar(254) NULL,
	farm_title varchar(254) NULL,
	crop_name varchar(254) NULL,
	growth_sta varchar(254) NULL,
	growth_s_1 varchar(254) NULL,
	create_dt varchar(24) NULL,
	update_dt varchar(254) NULL,
	shape varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swabi_tempa_pkey PRIMARY KEY (gid)
);
CREATE INDEX swabi_tempa_geom_idx ON public.swabi_tempa USING gist (geom);


-- public.swb_uc_20230810 definition

-- Drop table

-- DROP TABLE public.swb_uc_20230810;

CREATE TABLE public.swb_uc_20230810 (
	gid serial4 NOT NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	temp_id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swb_uc_20230810_pkey PRIMARY KEY (gid)
);
CREATE INDEX swb_uc_20230810_geom_idx ON public.swb_uc_20230810 USING gist (geom);


-- public.swbuc_20230804 definition

-- Drop table

-- DROP TABLE public.swbuc_20230804;

CREATE TABLE public.swbuc_20230804 (
	gid serial4 NOT NULL,
	uc varchar(20) NULL,
	tehsil varchar(20) NULL,
	district varchar(20) NULL,
	area float8 NULL,
	area_ac float8 NULL,
	color varchar(10) NULL,
	state varchar(10) NULL,
	__gid float8 NULL,
	temp_id float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT swbuc_20230804_pkey PRIMARY KEY (gid)
);
CREATE INDEX swbuc_20230804_geom_idx ON public.swbuc_20230804 USING gist (geom);


-- public.synced_farms definition

-- Drop table

-- DROP FOREIGN TABLE public.synced_farms;

CREATE FOREIGN TABLE public.synced_farms (
	id uuid OPTIONS(column_name 'id') NOT NULL,
	v2_record_id uuid OPTIONS(column_name 'v2_record_id') NULL,
	v3_record_id uuid OPTIONS(column_name 'v3_record_id') NULL,
	msisdn varchar(255) OPTIONS(column_name 'msisdn') NULL,
	farmer_name varchar(60) OPTIONS(column_name 'farmer_name') NULL,
	profiled_by varchar(255) OPTIONS(column_name 'profiled_by') NULL,
	agent_name varchar(60) OPTIONS(column_name 'agent_name') NULL,
	location_name varchar(255) OPTIONS(column_name 'location_name') NULL,
	farm_id varchar(255) OPTIONS(column_name 'farm_id') NULL,
	farm_crop_id varchar(255) OPTIONS(column_name 'farm_crop_id') NULL,
	farm_title varchar(255) OPTIONS(column_name 'farm_title') NULL,
	crop_name varchar(255) OPTIONS(column_name 'crop_name') NULL,
	growth_stage varchar(255) OPTIONS(column_name 'growth_stage') NULL,
	growth_stage_date date OPTIONS(column_name 'growth_stage_date') NULL,
	create_dt timestamp OPTIONS(column_name 'create_dt') NULL,
	update_dt timestamp OPTIONS(column_name 'update_dt') NULL,
	shape public.geometry(geometry, 4326) OPTIONS(column_name 'shape') NULL,
	sync_id varchar(255) OPTIONS(column_name 'sync_id') NULL,
	soil_type varchar(255) OPTIONS(column_name 'soil_type') NULL,
	irrigation_source varchar(255) OPTIONS(column_name 'irrigation_source') NULL,
	area float8 OPTIONS(column_name 'area') NULL,
	source_version varchar(10) OPTIONS(column_name 'source_version') NULL,
	last_synced timestamp OPTIONS(column_name 'last_synced') NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'synced_farms');


-- public.talha_samples_20260126 definition

-- Drop table

-- DROP TABLE public.talha_samples_20260126;

CREATE TABLE public.talha_samples_20260126 (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	msisdn varchar(20) NULL,
	agent_name varchar(20) NULL,
	unit varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT talha_samples_20260126_pkey PRIMARY KEY (gid)
);
CREATE INDEX talha_samples_20260126_geom_idx ON public.talha_samples_20260126 USING gist (geom);


-- public.talha_samples_20260127 definition

-- Drop table

-- DROP TABLE public.talha_samples_20260127;

CREATE TABLE public.talha_samples_20260127 (
	gid serial4 NOT NULL,
	status varchar(30) NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	msisdn varchar(20) NULL,
	agent_name varchar(20) NULL,
	unit varchar(10) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT talha_samples_20260127_pkey PRIMARY KEY (gid)
);
CREATE INDEX talha_samples_20260127_geom_idx ON public.talha_samples_20260127 USING gist (geom);


-- public.telecom_data definition

-- Drop table

-- DROP TABLE public.telecom_data;

CREATE TABLE public.telecom_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"name" varchar(255) NULL,
	badge varchar(255) NULL,
	cnic varchar(255) NULL,
	arpu varchar(225) NULL,
	"operator" varchar(225) NULL,
	headset varchar(225) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	image_url varchar(255) NULL,
	score int4 NULL,
	"location" varchar(255) NULL,
	lat float8 NULL,
	lng float8 NULL,
	CONSTRAINT telecom_data_pkey PRIMARY KEY (id)
);


-- public.tem_growth_stage definition

-- Drop table

-- DROP TABLE public.tem_growth_stage;

CREATE TABLE public.tem_growth_stage (
	crop_name varchar NULL,
	crop_stage varchar(50) NULL,
	narration_en text NULL,
	narration_en_generic text NULL,
	narration_ur text NULL,
	narration_ur_generic text NULL,
	ndvi_trend varchar(50) NULL
);


-- public.temp_activity_details definition

-- Drop table

-- DROP TABLE public.temp_activity_details;

CREATE TABLE public.temp_activity_details (
	activity_id uuid DEFAULT uuid_generate_v4() NOT NULL,
	farmer_id text NULL,
	profiled_by text NULL,
	category_id uuid NULL,
	"type" text NULL,
	"cost" text NULL,
	quantity text NULL,
	lat float8 NULL,
	lng float8 NULL,
	description text NULL,
	farms jsonb NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	id text NULL,
	images _text NULL,
	task_status text DEFAULT 'In Progress'::text NULL,
	is_anomaly bool DEFAULT false NULL,
	assigned_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	completed_dt timestamp NULL,
	task_date date NULL,
	create_status varchar(100) DEFAULT 'Portal'::character varying NULL,
	farm_id varchar NULL,
	anomaly_id varchar NULL,
	farm_shape public.geometry NULL,
	anomaly_json json NULL,
	CONSTRAINT activity_details_pkey PRIMARY KEY (activity_id)
);


-- public.temp_brazil_tobacco_smoothed definition

-- Drop table

-- DROP TABLE public.temp_brazil_tobacco_smoothed;

CREATE TABLE public.temp_brazil_tobacco_smoothed (
	gid serial4 NOT NULL,
	dn float8 NULL,
	crop varchar(50) NULL,
	area float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT temp_brazil_tobacco_smoothed_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_brazil_tobacco_smoothed_geom_idx ON public.temp_brazil_tobacco_smoothed USING gist (geom);


-- public.temp_crop_details definition

-- Drop table

-- DROP TABLE public.temp_crop_details;

CREATE TABLE public.temp_crop_details (
	farm_id uuid NOT NULL,
	sowing_date date NOT NULL,
	harvest_date date NULL,
	crop_name varchar(40) NULL,
	crop_id uuid DEFAULT gen_random_uuid() NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT temp_crop_details_pkey PRIMARY KEY (farm_id, sowing_date),
	CONSTRAINT unique_uuid UNIQUE (crop_id)
);
CREATE INDEX idx_temp_crop_details_farm_id ON public.temp_crop_details USING btree (farm_id);


-- public.temp_crop_timeline definition

-- Drop table

-- DROP TABLE public.temp_crop_timeline;

CREATE TABLE public.temp_crop_timeline (
	cropname varchar(50) NULL,
	sowingmonths _int4 NULL,
	harvestingmonths _int4 NULL
);


-- public.temp_mardan_ptc definition

-- Drop table

-- DROP TABLE public.temp_mardan_ptc;

CREATE TABLE public.temp_mardan_ptc (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	area_ha float8 NULL,
	area_ac float8 NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT temp_mardan_ptc_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_mardan_ptc_geom_idx ON public.temp_mardan_ptc USING gist (geom);


-- public.temp_mpcl_25_scores definition

-- Drop table

-- DROP TABLE public.temp_mpcl_25_scores;

CREATE TABLE public.temp_mpcl_25_scores (
	farm_id text NULL,
	crop_25 text NULL,
	yield_25 text NULL,
	f_score_25 text NULL
);


-- public.temp_mpcl_ph2_subsidy definition

-- Drop table

-- DROP TABLE public.temp_mpcl_ph2_subsidy;

CREATE TABLE public.temp_mpcl_ph2_subsidy (
	"name" varchar(255) NULL,
	contact_no varchar(50) NULL,
	caste varchar(100) NULL
);


-- public.temp_msisdn definition

-- Drop table

-- DROP TABLE public.temp_msisdn;

CREATE TABLE public.temp_msisdn (
	"index" int8 NULL,
	msisdn int8 NULL
);
CREATE INDEX ix_temp_msisdn_index ON public.temp_msisdn USING btree (index);


-- public.temp_suddhar definition

-- Drop table

-- DROP TABLE public.temp_suddhar;

CREATE TABLE public.temp_suddhar (
	gid serial4 NOT NULL,
	id float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT temp_suddhar_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_suddhar_geom_idx ON public.temp_suddhar USING gist (geom);


-- public.temp_swabi_uc_20230712 definition

-- Drop table

-- DROP TABLE public.temp_swabi_uc_20230712;

CREATE TABLE public.temp_swabi_uc_20230712 (
	gid serial4 NOT NULL,
	uc varchar(10) NULL,
	temp_gid float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(50) NULL,
	color varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT temp_swabi_uc_20230712_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_swabi_uc_20230712_geom_idx ON public.temp_swabi_uc_20230712 USING gist (geom);


-- public.temp_swabi_uc_20230719 definition

-- Drop table

-- DROP TABLE public.temp_swabi_uc_20230719;

CREATE TABLE public.temp_swabi_uc_20230719 (
	gid serial4 NOT NULL,
	uc varchar(20) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	tehsil varchar(50) NULL,
	district varchar(50) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(50) NULL,
	color varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_id int4 NULL,
	CONSTRAINT temp_swabi_uc_20230719_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_swabi_uc_20230719_geom_idx ON public.temp_swabi_uc_20230719 USING gist (geom);


-- public.temp_swabi_uc_20230725 definition

-- Drop table

-- DROP TABLE public.temp_swabi_uc_20230725;

CREATE TABLE public.temp_swabi_uc_20230725 (
	gid serial4 NOT NULL,
	uc varchar(10) NULL,
	district varchar(10) NULL,
	tehsil varchar(10) NULL,
	__gid float8 NULL,
	temp_id float8 NULL,
	area numeric NULL,
	area_ac numeric NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(50) NULL,
	color varchar(50) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT temp_swabi_uc_20230725_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_swabi_uc_20230725_geom_idx ON public.temp_swabi_uc_20230725 USING gist (geom);


-- public.temp_uc_swabi_assign definition

-- Drop table

-- DROP TABLE public.temp_uc_swabi_assign;

CREATE TABLE public.temp_uc_swabi_assign (
	gid serial4 NOT NULL,
	objectid float8 NULL,
	area numeric NULL,
	area_ac numeric NULL,
	uc varchar(50) NULL,
	tehsil varchar(50) NULL,
	district varchar(50) NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(50) NULL,
	color varchar(50) NULL,
	shape_leng numeric NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	temp_gid int4 NULL,
	CONSTRAINT temp_uc_swabi_assign_pkey PRIMARY KEY (gid)
);
CREATE INDEX temp_uc_swabi_assign_geom_idx ON public.temp_uc_swabi_assign USING gist (geom);


-- public.test definition

-- Drop table

-- DROP TABLE public.test;

CREATE TABLE public.test (
	geom public.geometry(multipolygon, 4326) NULL,
	state text NULL,
	color text NULL,
	id serial4 NOT NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	crop text NULL,
	"type" text NULL
);
CREATE INDEX test_geom_idx ON public.test USING gist (geom);


-- public.testndvipolygon definition

-- Drop table

-- DROP TABLE public.testndvipolygon;

CREATE TABLE public.testndvipolygon (
	gid serial4 NOT NULL,
	dn numeric NULL,
	level_1 float8 NULL,
	"date" date NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT testndvipolygon_pkey PRIMARY KEY (gid)
);
CREATE INDEX testndvipolygon_geom_idx ON public.testndvipolygon USING gist (geom);


-- public.testuc definition

-- Drop table

-- DROP TABLE public.testuc;

CREATE TABLE public.testuc (
	gid serial4 NOT NULL,
	objectid_1 float8 NULL,
	objectid_2 float8 NULL,
	objectid_3 float8 NULL,
	objectid float8 NULL,
	__gid float8 NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	uc_c float8 NULL,
	flood varchar(50) NULL,
	area numeric NULL,
	town varchar(200) NULL,
	u_r varchar(50) NULL,
	province_c float8 NULL,
	district_c float8 NULL,
	tehsil_c float8 NULL,
	uc_name varchar(254) NULL,
	data_sourc varchar(50) NULL,
	level_ varchar(50) NULL,
	school numeric NULL,
	new_name varchar(254) NULL,
	shape_leng numeric NULL,
	af_count numeric NULL,
	afc_count numeric NULL,
	area_hec numeric NULL,
	af_area numeric NULL,
	afc_area numeric NULL,
	af_farms numeric NULL,
	afc_farms numeric NULL,
	zone_ float8 NULL,
	digitzers varchar(50) NULL,
	shape_le_1 numeric NULL,
	shape_le_2 numeric NULL,
	shape_le_3 numeric NULL,
	shape_le_4 numeric NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT testuc_pkey PRIMARY KEY (gid)
);
CREATE INDEX testuc_geom_idx ON public.testuc USING gist (geom);


-- public.tmp_farm_upload definition

-- Drop table

-- DROP TABLE public.tmp_farm_upload;

CREATE TABLE public.tmp_farm_upload (
	farmer_name text NULL,
	caste text NULL,
	msisdn numeric NULL,
	cnic text NULL,
	gender text NULL,
	farm_id text NULL,
	crop_24 text NULL,
	f_score_24 text NULL,
	ndvi_avg24 text NULL,
	yield_24 text NULL,
	crop_25 text NULL,
	f_score_25 text NULL,
	ndvi_avg25 text NULL,
	yield_25 text NULL
);


-- public.tobacco_assigned_data definition

-- Drop table

-- DROP TABLE public.tobacco_assigned_data;

CREATE TABLE public.tobacco_assigned_data (
	gid serial4 NOT NULL,
	area_ac float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(10) NULL,
	crop varchar(20) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT tobacco_assigned_data_pkey PRIMARY KEY (gid)
);
CREATE INDEX tobacco_assigned_data_geom_idx ON public.tobacco_assigned_data USING gist (geom);


-- public.tobacco_kp_2022 definition

-- Drop table

-- DROP TABLE public.tobacco_kp_2022;

CREATE TABLE public.tobacco_kp_2022 (
	gid int4 DEFAULT nextval('zonal_tobacco5_gid_seq'::regclass) NOT NULL,
	dn int4 NULL,
	marchmean numeric NULL,
	marchstdev numeric NULL,
	aprilmean numeric NULL,
	aprilstdev numeric NULL,
	maymean numeric NULL,
	maystdev numeric NULL,
	junemean numeric NULL,
	junestdev numeric NULL,
	june_2mean numeric NULL,
	june_2stde numeric NULL,
	area float8 NULL,
	geom public.geometry(multipolygon, 32643) NULL,
	district varchar NULL,
	tehsil varchar NULL,
	uc varchar NULL,
	CONSTRAINT zonal_tobacco5_pkey PRIMARY KEY (gid)
);
CREATE INDEX zonal_tobacco5_geom_idx ON public.tobacco_kp_2022 USING gist (geom);


-- public.tobaccopmiresult definition

-- Drop table

-- DROP TABLE public.tobaccopmiresult;

CREATE TABLE public.tobaccopmiresult (
	gid serial4 NOT NULL,
	crop varchar(254) NULL,
	area_ha float8 NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	msisdn varchar(20) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT tobaccopmiresult_pkey PRIMARY KEY (gid)
);
CREATE INDEX tobaccopmiresult_geom_idx ON public.tobaccopmiresult USING gist (geom);


-- public.uc_hasanah_jhg_temp definition

-- Drop table

-- DROP TABLE public.uc_hasanah_jhg_temp;

CREATE TABLE public.uc_hasanah_jhg_temp (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	temp_id float8 NULL,
	latitude numeric NULL,
	longitude numeric NULL,
	state varchar(10) NULL,
	color varchar(10) NULL,
	area numeric NULL,
	area_ac numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT uc_hasanah_jhg_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX uc_hasanah_jhg_temp_geom_idx ON public.uc_hasanah_jhg_temp USING gist (geom);


-- public.union_council definition

-- Drop table

-- DROP TABLE public.union_council;

CREATE TABLE public.union_council (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	uc_c int4 NULL,
	flood varchar(50) NULL,
	area numeric NULL,
	town varchar(200) NULL,
	u_r varchar(50) NULL,
	province_c int4 NULL,
	district_c int4 NULL,
	tehsil_c int4 NULL,
	uc_name varchar(254) NULL,
	data_sourc varchar(50) NULL,
	"level" varchar(50) NULL,
	school numeric NULL,
	new_name varchar(254) NULL,
	shape_leng numeric NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT union_council_pkey PRIMARY KEY (gid)
);
CREATE INDEX union_council_geom_idx ON public.union_council USING gist (geom);
CREATE INDEX union_countil_uc_idx ON public.union_council USING btree (uc);


-- public.union_council_temp definition

-- Drop table

-- DROP TABLE public.union_council_temp;

CREATE TABLE public.union_council_temp (
	gid serial4 NOT NULL,
	province varchar(254) NULL,
	district varchar(30) NULL,
	tehsil varchar(30) NULL,
	uc varchar(254) NULL,
	uc_c int4 NULL,
	flood varchar(50) NULL,
	area numeric NULL,
	town varchar(200) NULL,
	u_r varchar(50) NULL,
	province_c int4 NULL,
	district_c int4 NULL,
	tehsil_c int4 NULL,
	uc_name varchar(254) NULL,
	data_sourc varchar(50) NULL,
	"level" varchar(50) NULL,
	school numeric NULL,
	new_name varchar(254) NULL,
	shape_leng numeric NULL,
	shape_area numeric NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT union_council_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX union_council_temp_geom_idx ON public.union_council_temp USING gist (geom);


-- public.unit1circlebounds_updated definition

-- Drop table

-- DROP TABLE public.unit1circlebounds_updated;

CREATE TABLE public.unit1circlebounds_updated (
	gid serial4 NOT NULL,
	"name" varchar(254) NULL,
	descriptio varchar(254) NULL,
	"timestamp" varchar(24) NULL,
	"begin" varchar(24) NULL,
	"end" varchar(24) NULL,
	altitudemo varchar(254) NULL,
	tessellate float8 NULL,
	extrude float8 NULL,
	visibility float8 NULL,
	draworder float8 NULL,
	icon varchar(254) NULL,
	area float8 NULL,
	surveyor varchar(100) NULL,
	"number" varchar(15) NULL,
	circlename varchar(100) NULL,
	subcircle varchar(100) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT unit1circlebounds_updated_pkey PRIMARY KEY (gid)
);
CREATE INDEX unit1circlebounds_updated_geom_idx ON public.unit1circlebounds_updated USING gist (geom);


-- public.updated_agent_bounds_temp definition

-- Drop table

-- DROP TABLE public.updated_agent_bounds_temp;

CREATE TABLE public.updated_agent_bounds_temp (
	gid serial4 NOT NULL,
	agent_name varchar(254) NULL,
	msisdn numeric NULL,
	unit bool NULL,
	area_ac numeric NULL,
	create_dt date NULL,
	update_dt varchar(254) NULL,
	circle_id varchar(254) NULL,
	is_assigne bool NULL,
	circle_nam varchar(254) NULL,
	sub_circle varchar(254) NULL,
	geom public.geometry(multipolygonzm, 4326) NULL,
	CONSTRAINT updated_agent_bounds_temp_pkey PRIMARY KEY (gid)
);
CREATE INDEX updated_agent_bounds_temp_geom_idx ON public.updated_agent_bounds_temp USING gist (geom);


-- public.updated_ucs_20230710 definition

-- Drop table

-- DROP TABLE public.updated_ucs_20230710;

CREATE TABLE public.updated_ucs_20230710 (
	gid serial4 NOT NULL,
	__gid float8 NULL,
	uc varchar(254) NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT updated_ucs_20230710_pkey PRIMARY KEY (gid)
);
CREATE INDEX updated_ucs_20230710_geom_idx ON public.updated_ucs_20230710 USING gist (geom);


-- public.user_engagement definition

-- Drop table

-- DROP TABLE public.user_engagement;

CREATE TABLE public.user_engagement (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NOT NULL,
	advisory_kharif int4 DEFAULT 0 NULL,
	advisory_rabi int4 DEFAULT 0 NULL,
	livestock_advisory int4 DEFAULT 0 NULL,
	product_advisory int4 DEFAULT 0 NULL,
	weather_alert int4 DEFAULT 0 NULL,
	ivr_advisory int4 DEFAULT 0 NULL,
	vms int4 DEFAULT 0 NULL,
	disaster_alert int4 DEFAULT 0 NULL,
	digital int4 DEFAULT 0 NULL,
	agri_consultancy int4 DEFAULT 0 NULL,
	create_dt timestamp(6) DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp(6) NULL,
	CONSTRAINT unique_msisdn UNIQUE (msisdn),
	CONSTRAINT user_engagement_pkey PRIMARY KEY (id)
);


-- public.user_engagment_data definition

-- Drop table

-- DROP TABLE public.user_engagment_data;

CREATE TABLE public.user_engagment_data (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	msisdn varchar(255) NULL,
	"name" varchar(255) NULL,
	calls_count int4 NULL,
	sms_count int4 NULL,
	app_visits_count int4 NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	update_dt timestamp NULL,
	score int4 NULL,
	advisory_kharif int4 NULL,
	advisory_rabi int4 NULL,
	disaster_alert int4 NULL,
	weather_alert int4 NULL,
	visual_advisory int4 NULL,
	agri_consultancy int4 NULL,
	livestock_advisory int4 NULL,
	product_advisory int4 NULL,
	ivr_advisory int4 NULL,
	CONSTRAINT user_engagment_data_pkey PRIMARY KEY (id)
);


-- public.validation_data_20251105 definition

-- Drop table

-- DROP TABLE public.validation_data_20251105;

CREATE TABLE public.validation_data_20251105 (
	gid serial4 NOT NULL,
	area_ac float8 NULL,
	color varchar(10) NULL,
	agent_name varchar(254) NULL,
	msisdn numeric NULL,
	district varchar(20) NULL,
	tehsil varchar(20) NULL,
	crop varchar(10) NULL,
	uc varchar(10) NULL,
	latitude float8 NULL,
	longitude float8 NULL,
	geom public.geometry(multipolygon, 4326) NULL,
	CONSTRAINT validation_data_20251105_pkey PRIMARY KEY (gid)
);
CREATE INDEX validation_data_20251105_geom_idx ON public.validation_data_20251105 USING gist (geom);


-- public.vectorndvi definition

-- Drop table

-- DROP TABLE public.vectorndvi;

CREATE TABLE public.vectorndvi (
	gid serial4 NOT NULL,
	value numeric NULL,
	geom public.geometry(point, 4326) NULL,
	CONSTRAINT vectorndvi_pkey PRIMARY KEY (gid)
);
CREATE INDEX vectorndvi_geom_idx ON public.vectorndvi USING gist (geom);


-- public.vi_log definition

-- Drop table

-- DROP FOREIGN TABLE public.vi_log;

CREATE FOREIGN TABLE public.vi_log (
	farm_id varchar OPTIONS(column_name 'farm_id') NOT NULL,
	tile_id varchar(10) OPTIONS(column_name 'tile_id') NULL,
	tile_ndvi varchar OPTIONS(column_name 'tile_ndvi') NULL,
	ndvi_dt date OPTIONS(column_name 'ndvi_dt') NULL,
	tile_ndmi varchar OPTIONS(column_name 'tile_ndmi') NULL,
	ndmi_dt date OPTIONS(column_name 'ndmi_dt') NULL,
	geom public.geometry OPTIONS(column_name 'geom') NULL,
	update_dt timestamp OPTIONS(column_name 'update_dt') NULL,
	create_dt timestamp OPTIONS(column_name 'create_dt') NULL,
	tile_process_dt date OPTIONS(column_name 'tile_process_dt') NULL,
	status varchar NULL,
	checks text NULL,
	anomaly_dt date NULL
)
SERVER local_gis_v3
OPTIONS (schema_name 'public', table_name 'vi_log');


-- public.wfm_category_lov definition

-- Drop table

-- DROP TABLE public.wfm_category_lov;

CREATE TABLE public.wfm_category_lov (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) NULL,
	"type" varchar(255) NULL,
	CONSTRAINT unique_category_name UNIQUE (name),
	CONSTRAINT wfm_category_lov_pkey PRIMARY KEY (id)
);


-- public.wfm_tasks_tracking definition

-- Drop table

-- DROP TABLE public.wfm_tasks_tracking;

CREATE TABLE public.wfm_tasks_tracking (
	visit_category varchar(255) NULL,
	location_type varchar(255) NULL,
	images text NULL,
	"timestamp" timestamp NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	farmer_id varchar(20) NULL,
	surveyor_location public.geography(point, 4326) NULL,
	entity_location public.geography(point, 4326) NULL,
	profiled_by varchar(20) NULL,
	create_dt timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	notes text NULL,
	visit_id uuid NULL,
	CONSTRAINT wfm_tasks_tracking_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_wfm_create_dt ON public.wfm_tasks_tracking USING btree (create_dt);
CREATE INDEX idx_wfm_entity_location ON public.wfm_tasks_tracking USING gist (entity_location);
CREATE INDEX idx_wfm_farmer_id ON public.wfm_tasks_tracking USING btree (farmer_id);
CREATE INDEX idx_wfm_id ON public.wfm_tasks_tracking USING btree (id);
CREATE INDEX idx_wfm_location_type ON public.wfm_tasks_tracking USING btree (location_type);
CREATE INDEX idx_wfm_profiled_by ON public.wfm_tasks_tracking USING btree (profiled_by);
CREATE INDEX idx_wfm_surveyor_location ON public.wfm_tasks_tracking USING gist (surveyor_location);
CREATE INDEX idx_wfm_timestamp ON public.wfm_tasks_tracking USING btree ("timestamp");
CREATE INDEX idx_wfm_visit_category ON public.wfm_tasks_tracking USING btree (visit_category);

-- Table Triggers

create trigger trg_insert_wfm_category after
insert
    on
    public.wfm_tasks_tracking for each row execute function bkk_insert_into_wfm_category_lov();


-- public.wheat_baseline definition

-- Drop table

-- DROP FOREIGN TABLE public.wheat_baseline;

CREATE FOREIGN TABLE public.wheat_baseline (
	farm_id varchar NULL,
	ndvi_avg float8 NULL,
	image_date date NULL
)
SERVER local_gis_v3;


-- public.wheat_life_cycle_v3 definition

-- Drop table

-- DROP TABLE public.wheat_life_cycle_v3;

CREATE TABLE public.wheat_life_cycle_v3 (
	crop_age int4 NULL,
	ndvi_avg float8 NULL,
	ndvi_max float8 NULL,
	ndvi_min float8 NULL
);


-- public.digitized_data_crop definition

-- Drop table

-- DROP TABLE public.digitized_data_crop;

CREATE TABLE public.digitized_data_crop (
	id serial4 NOT NULL,
	farm_gid int4 NULL,
	crop_type varchar(100) NULL,
	season varchar(20) NULL,
	"year" int4 NULL,
	planting_date date NULL,
	harvest_date date NULL,
	is_active bool DEFAULT false NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	variety varchar(50) NULL,
	quality varchar(50) NULL,
	CONSTRAINT digitized_data_crop_farm_gid_season_year_key UNIQUE (farm_gid, season, year),
	CONSTRAINT digitized_data_crop_pkey PRIMARY KEY (id),
	CONSTRAINT digitized_data_crop_farm_gid_fkey FOREIGN KEY (farm_gid) REFERENCES public.digitized_data(gid)
);
CREATE INDEX idx_crop_active ON public.digitized_data_crop USING btree (farm_gid) WHERE (is_active = true);
CREATE INDEX idx_crop_farm_season_year ON public.digitized_data_crop USING btree (farm_gid, season, year);
CREATE INDEX idx_crop_pk ON public.digitized_data_crop USING btree (id);


-- public.lab_cane_images definition

-- Drop table

-- DROP TABLE public.lab_cane_images;

CREATE TABLE public.lab_cane_images (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	sample_id text NOT NULL,
	variety_name text NOT NULL,
	disease_name text NULL,
	"path" text NOT NULL,
	pest_name text NULL,
	CONSTRAINT lab_cane_images_pkey PRIMARY KEY (id),
	CONSTRAINT lab_cane_images_disease_name_fkey FOREIGN KEY (disease_name) REFERENCES public.lab_cane_disease("name") ON UPDATE CASCADE,
	CONSTRAINT lab_cane_images_pest_name_fkey FOREIGN KEY (pest_name) REFERENCES public.lab_cane_pest("name") ON UPDATE CASCADE,
	CONSTRAINT lab_cane_images_sample_id_fkey FOREIGN KEY (sample_id) REFERENCES public.lab_cane_samples(id),
	CONSTRAINT lab_cane_images_variety_name_fkey FOREIGN KEY (variety_name) REFERENCES public.lab_cane_variety("name") ON UPDATE CASCADE
);
CREATE INDEX idx_lab_cane_images_disease_name ON public.lab_cane_images USING btree (disease_name);
CREATE INDEX idx_lab_cane_images_pest_name ON public.lab_cane_images USING btree (pest_name);
CREATE INDEX idx_lab_cane_images_sample_id ON public.lab_cane_images USING btree (sample_id);
CREATE INDEX idx_lab_cane_images_variety_name ON public.lab_cane_images USING btree (variety_name);


-- public.partner_login definition

-- Drop table

-- DROP TABLE public.partner_login;

CREATE TABLE public.partner_login (
	"name" varchar NULL,
	username varchar NULL,
	"password" varchar NULL,
	"permission" varchar NULL,
	aoi varchar NULL,
	crops varchar NULL,
	partner_id varchar NULL,
	id uuid DEFAULT uuid_in(md5(random()::text || random()::text)::cstring) NULL,
	insights_role text NULL,
	permission_id uuid NULL,
	partner_uuid uuid NULL,
	deleted_at timestamp NULL,
	CONSTRAINT fk_partner_uuid FOREIGN KEY (partner_uuid) REFERENCES public.partners(partner_id),
	CONSTRAINT fk_permission_id FOREIGN KEY (permission_id) REFERENCES public.partner_login_permissions(permission_id)
);


-- public.sentinel2_data_2 definition

-- Drop table

-- DROP FOREIGN TABLE public.sentinel2_data_2;

CREATE FOREIGN TABLE public.sentinel2_data_2 (

)
INHERITS (public.sentinel2_data,public.sentinel2_data,public.sentinel2_data,public.sentinel2_data,public.sentinel2_data,public.sentinel2_data)
SERVER local_gis_v3;


-- public.advisory_test_mat_vw source

CREATE MATERIALIZED VIEW public.advisory_test_mat_vw
TABLESPACE pg_default
AS SELECT bkk_faf_farms_v3_2_mat_vw.msisdn,
    bkk_faf_farms_v3_2_mat_vw.farmer_name,
    bkk_faf_farms_v3_2_mat_vw.profiled_by,
    bkk_faf_farms_v3_2_mat_vw.agent_name,
    bkk_faf_farms_v3_2_mat_vw.location_name,
    bkk_faf_farms_v3_2_mat_vw.farm_id,
    bkk_faf_farms_v3_2_mat_vw.farm_crop_id,
    bkk_faf_farms_v3_2_mat_vw.farm_title,
    bkk_faf_farms_v3_2_mat_vw.crop_name,
    bkk_faf_farms_v3_2_mat_vw.growth_stage,
    bkk_faf_farms_v3_2_mat_vw.growth_stage_date,
    bkk_faf_farms_v3_2_mat_vw.create_dt,
    bkk_faf_farms_v3_2_mat_vw.update_dt,
    bkk_faf_farms_v3_2_mat_vw.shape,
    bkk_faf_farms_v3_2_mat_vw.area
   FROM bkk_faf_farms_v3_2_mat_vw
  WHERE bkk_faf_farms_v3_2_mat_vw.profiled_by::text = '923445805043'::text AND bkk_faf_farms_v3_2_mat_vw.create_dt > '2024-09-21 00:00:00'::timestamp without time zone AND bkk_faf_farms_v3_2_mat_vw.create_dt < '2024-09-22 00:00:00'::timestamp without time zone AND bkk_faf_farms_v3_2_mat_vw.area > 0.1
WITH DATA;


-- public.azm_farms_tb source

CREATE MATERIALIZED VIEW public.azm_farms_tb
TABLESPACE pg_default
AS SELECT f.id AS farm_id,
    f.farm_title,
    f.land_area,
    f.land_unit,
    f.location_id,
    l.name AS location_name,
    st_astext(f.shape) AS geom,
    f.geo_point,
    f.soil_type_id,
    f.irrigation_source_id,
    f.soil_issue_id,
    f.land_topography_id,
    fa.id AS msisdn,
    fa.name AS farmer_name,
    fc.id AS farm_crop_id,
    fc.crop_id,
    c.title AS crop_name,
    fc.sowing_method_id,
    fc.seed_type_id,
    gs.date AS sowing_date,
    gs.create_dt,
    g.name AS growth_stage,
    g.level
   FROM crops c
     JOIN farmcrops fc ON fc.crop_id = c.id
     JOIN farms f ON f.id::text = fc.farm_id::text
     JOIN farmers fa ON f.farmer_id::text = fa.id::text
     JOIN locations l ON f.location_id::numeric = l.id
     JOIN farm_crop_growth_stages gs ON fc.id::text = gs.farm_crop_id::text
     JOIN growth_stages g ON g.id = gs.growth_stage_id
  WHERE (f.farmer_id::text = ANY (ARRAY['923038311086'::character varying::text, '924359703925'::character varying::text, '923139664866'::character varying::text, '923239544385'::character varying::text, '923009046534'::character varying::text])) AND f.shape IS NOT NULL
  ORDER BY f.id
WITH DATA;


-- public.azm_survey_2023_vw source

CREATE OR REPLACE VIEW public.azm_survey_2023_vw
AS SELECT bkk_faf_farms_v2_mat_vw.msisdn,
    bkk_faf_farms_v2_mat_vw.farmer_name,
    bkk_faf_farms_v2_mat_vw.profiled_by,
    bkk_faf_farms_v2_mat_vw.agent_name,
    bkk_faf_farms_v2_mat_vw.location_name,
    bkk_faf_farms_v2_mat_vw.farm_id,
    bkk_faf_farms_v2_mat_vw.farm_crop_id,
    bkk_faf_farms_v2_mat_vw.farm_title,
    bkk_faf_farms_v2_mat_vw.crop_name,
    bkk_faf_farms_v2_mat_vw.growth_stage,
    bkk_faf_farms_v2_mat_vw.growth_stage_date,
    bkk_faf_farms_v2_mat_vw.create_dt,
    bkk_faf_farms_v2_mat_vw.update_dt,
    bkk_faf_farms_v2_mat_vw.shape
   FROM bkk_faf_farms_v2_mat_vw
  WHERE (bkk_faf_farms_v2_mat_vw.profiled_by::text = ANY (ARRAY['923005770140'::character varying::text, '923139353940'::character varying::text, '923139096991'::character varying::text, '923155290623'::character varying::text, '923005124817'::character varying::text, '923219520861'::character varying::text, '923177920774'::character varying::text, '923159687582'::character varying::text, '923459703925'::character varying::text, '923249378869'::character varying::text, '923181934220'::character varying::text, '923159103726'::character varying::text, '923469830089'::character varying::text, '923477426123'::character varying::text, '923405816294'::character varying::text])) AND bkk_faf_farms_v2_mat_vw.create_dt > '2023-05-09 00:00:00'::timestamp without time zone
  ORDER BY bkk_faf_farms_v2_mat_vw.create_dt DESC;


-- public.bhaira_circle_crop_data source

CREATE MATERIALIZED VIEW public.bhaira_circle_crop_data
TABLESPACE pg_default
AS SELECT ks.gid,
    ks.area AS area_ac,
    ks.kharif25 AS crop_name,
    ks.geom
   FROM kharif25_sargodha ks
     JOIN bhaira_circle_bounds bcb ON st_intersects(ks.geom, bcb.geom)
WITH DATA;


-- public.bhera_crop_kharif25 source

CREATE MATERIALIZED VIEW public.bhera_crop_kharif25
TABLESPACE pg_default
AS SELECT dd.gid,
    dd.uc,
    dd.tehsil,
    dd.district,
    dd.area_ac,
    ddc.crop_type AS crop_name,
    ddc.season,
    ddc.year,
    st_setsrid(dd.geom, 4326) AS geom
   FROM digitized_data dd
     LEFT JOIN digitized_data_crop ddc ON dd.gid = ddc.farm_gid
  WHERE dd.district::text = 'Sargodha'::text
WITH DATA;


-- public.bkk_app_farmers_vw source

CREATE OR REPLACE VIEW public.bkk_app_farmers_vw
AS SELECT st_point(subscribers.lng::double precision, subscribers.lat::double precision, 4326) AS shape,
    count(*) AS count
   FROM subscribers
  GROUP BY (st_point(subscribers.lng::double precision, subscribers.lat::double precision, 4326))
  ORDER BY (count(*)) DESC;


-- public.bkk_app_farms_corrected_vw source

CREATE OR REPLACE VIEW public.bkk_app_farms_corrected_vw
AS SELECT bkk_faf_farms_v3_2_mat_vw.msisdn,
    bkk_faf_farms_v3_2_mat_vw.farmer_name,
    bkk_faf_farms_v3_2_mat_vw.profiled_by,
    bkk_faf_farms_v3_2_mat_vw.agent_name,
    bkk_faf_farms_v3_2_mat_vw.location_name,
    bkk_faf_farms_v3_2_mat_vw.farm_id,
    bkk_faf_farms_v3_2_mat_vw.farm_crop_id,
    bkk_faf_farms_v3_2_mat_vw.farm_title,
    bkk_faf_farms_v3_2_mat_vw.crop_name,
    bkk_faf_farms_v3_2_mat_vw.growth_stage,
    bkk_faf_farms_v3_2_mat_vw.growth_stage_date,
    bkk_faf_farms_v3_2_mat_vw.create_dt,
    bkk_faf_farms_v3_2_mat_vw.update_dt,
    bkk_faf_farms_v3_2_mat_vw.shape,
    bkk_faf_farms_v3_2_mat_vw.area
   FROM bkk_faf_farms_v3_2_mat_vw
  WHERE bkk_faf_farms_v3_2_mat_vw.area > 0.1 AND st_isvalid(bkk_faf_farms_v3_2_mat_vw.shape) AND bkk_faf_farms_v3_2_mat_vw.area < 150::numeric AND st_srid(bkk_faf_farms_v3_2_mat_vw.shape) = 4326 AND st_intersects(bkk_faf_farms_v3_2_mat_vw.shape, ( SELECT st_union(locations.geom) AS st_union
           FROM locations
          WHERE locations.type::text = 'province'::text));


-- public.bkk_app_farms_vw source

CREATE OR REPLACE VIEW public.bkk_app_farms_vw
AS SELECT bkk_faf_farms_v2_mat_vw.msisdn,
    bkk_faf_farms_v2_mat_vw.farmer_name,
    bkk_faf_farms_v2_mat_vw.profiled_by,
    bkk_faf_farms_v2_mat_vw.agent_name,
    bkk_faf_farms_v2_mat_vw.location_name,
    bkk_faf_farms_v2_mat_vw.farm_id,
    bkk_faf_farms_v2_mat_vw.farm_crop_id,
    bkk_faf_farms_v2_mat_vw.farm_title,
    bkk_faf_farms_v2_mat_vw.crop_name,
    bkk_faf_farms_v2_mat_vw.growth_stage,
    bkk_faf_farms_v2_mat_vw.growth_stage_date,
    bkk_faf_farms_v2_mat_vw.create_dt,
    bkk_faf_farms_v2_mat_vw.update_dt,
    bkk_faf_farms_v2_mat_vw.shape,
    round((st_area(bkk_faf_farms_v2_mat_vw.shape::geography) * 0.000247105::double precision)::numeric, 3) AS area
   FROM bkk_faf_farms_v2_mat_vw;


-- public.bkk_assigned_marked_farms source

CREATE MATERIALIZED VIEW public.bkk_assigned_marked_farms
TABLESPACE pg_default
AS WITH assigned_farms AS (
         SELECT a.name AS agent_name,
            a.msisdn AS profiled_by,
            pa.partner_id,
            b.temp_id AS farm_id,
            st_setsrid(st_makevalid(c.geom), 4326) AS geom,
            'Assigned Farms'::text AS status
           FROM agents a
             JOIN partner_agents pa ON pa.msisdn::text = a.msisdn::text
             JOIN surveyapp_assigned_data b ON a.msisdn::text = b.agent_number::text
             JOIN jk_survey_temp c ON b.temp_id::uuid = c.id
             LEFT JOIN bkk_survey_app_data d ON d.shape_id::text = b.temp_id::text
          WHERE d.shape_id IS NULL
        ), marked_farms AS (
         SELECT a.name AS agent_name,
            a.msisdn AS profiled_by,
            pa.partner_id,
            fmw.farm_id,
            st_setsrid(st_makevalid(fmw.shape), 4326) AS geom,
            d.status
           FROM agents a
             JOIN partner_agents pa ON pa.msisdn::text = a.msisdn::text
             JOIN bkk_survey_app_data d ON pa.msisdn::text = d.profiled_by::text
             JOIN bkk_faf_farms_v3_2_mat_vw fmw ON d.farm_id::text = fmw.farm_id::text
        )
 SELECT assigned_farms.agent_name,
    assigned_farms.profiled_by,
    assigned_farms.partner_id,
    assigned_farms.farm_id,
    assigned_farms.geom,
    assigned_farms.status
   FROM assigned_farms
UNION ALL
 SELECT marked_farms.agent_name,
    marked_farms.profiled_by,
    marked_farms.partner_id,
    marked_farms.farm_id,
    marked_farms.geom,
    marked_farms.status
   FROM marked_farms
WITH DATA;

-- View indexes:
CREATE INDEX bkk_assigned_marked_farms_mat_vw_agent_idx ON public.bkk_assigned_marked_farms USING btree (profiled_by, agent_name);
CREATE INDEX bkk_assigned_marked_farms_mat_vw_geom_idx ON public.bkk_assigned_marked_farms USING gist (geom);


-- public.bkk_assigned_marked_farms_vw source

CREATE OR REPLACE VIEW public.bkk_assigned_marked_farms_vw
AS WITH assigned_farms AS (
         SELECT a.name AS agent_name,
            a.msisdn AS profiled_by,
            pa.partner_id,
            b.temp_id AS farm_id,
            st_setsrid(st_makevalid(c.geom), 4326) AS geom,
            'Assigned Farms'::text AS status
           FROM agents a
             JOIN partner_agents pa ON pa.msisdn::text = a.msisdn::text
             JOIN surveyapp_assigned_data b ON a.msisdn::text = b.agent_number::text
             JOIN jk_survey_temp c ON b.temp_id::uuid = c.id
             LEFT JOIN bkk_survey_app_data d ON d.shape_id::text = b.temp_id::text
          WHERE d.shape_id IS NULL
        ), marked_farms AS (
         SELECT a.name AS agent_name,
            a.msisdn AS profiled_by,
            pa.partner_id,
            fmw.farm_id,
            st_setsrid(st_makevalid(fmw.shape), 4326) AS geom,
            d.status
           FROM agents a
             JOIN partner_agents pa ON pa.msisdn::text = a.msisdn::text
             JOIN bkk_survey_app_data d ON pa.msisdn::text = d.profiled_by::text
             JOIN bkk_faf_farms_v3_2_mat_vw fmw ON d.farm_id::text = fmw.farm_id::text
        )
 SELECT assigned_farms.agent_name,
    assigned_farms.profiled_by,
    assigned_farms.partner_id,
    assigned_farms.farm_id,
    assigned_farms.geom,
    assigned_farms.status
   FROM assigned_farms
UNION ALL
 SELECT marked_farms.agent_name,
    marked_farms.profiled_by,
    marked_farms.partner_id,
    marked_farms.farm_id,
    marked_farms.geom,
    marked_farms.status
   FROM marked_farms;


-- public.bkk_faf_banks_farmers_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_faf_banks_farmers_mat_vw
TABLESPACE pg_default
AS WITH filtered_farms AS (
         SELECT f_1.farm_id,
            f_1.farmer_name,
            f_1.msisdn,
            f_1.crop_name,
            f_1.shape,
            f_1.area,
            c.partner_id,
            c.circle_name AS name
           FROM bkk_faf_farms_v3_2_mat_vw f_1
             JOIN custom_geom c ON st_within(st_setsrid(st_makevalid(f_1.shape), 4326), st_setsrid(c.geom, 4326))
        ), farm_areas AS (
         SELECT filtered_farms.farm_id,
            filtered_farms.farmer_name,
            filtered_farms.msisdn,
            max(filtered_farms.area) AS unique_area
           FROM filtered_farms
          GROUP BY filtered_farms.farm_id, filtered_farms.msisdn, filtered_farms.farmer_name
        ), farmer_areas AS (
         SELECT fa_1.farmer_name,
            fa_1.msisdn,
            sum(fa_1.unique_area) AS total_area
           FROM farm_areas fa_1
          GROUP BY fa_1.farmer_name, fa_1.msisdn
        )
 SELECT f.farmer_name,
    f.msisdn,
    f.partner_id,
    f.name,
    count(DISTINCT f.farm_id) AS farm_count,
    json_agg(DISTINCT f.crop_name) AS crops,
    json_agg(DISTINCT f.farm_id) AS farm_ids,
    fa.total_area
   FROM filtered_farms f
     JOIN farmer_areas fa ON f.farmer_name::text = fa.farmer_name::text AND f.msisdn::text = fa.msisdn::text
  GROUP BY f.farmer_name, f.msisdn, f.partner_id, f.name, fa.total_area
WITH DATA;


-- public.bkk_faf_farmers_central_vw source

CREATE OR REPLACE VIEW public.bkk_faf_farmers_central_vw
AS SELECT f.msisdn,
    f.cnic,
    f.name,
    f.email,
    f.location_name,
    f.address,
    f.status,
    f.create_dt,
    f.update_dt,
    f.language_name,
    f.occupation,
    f.gender,
    f.dob,
    f.phone_type,
    f.profile_image,
    f.cnic_front_image,
    f.cnic_back_image,
    f.cnic_issue_date,
    f.last_sms_out_dt,
    f.recent_activity_dt,
    f.lat,
    f.lng,
    f.source,
        CASE
            WHEN f.dob IS NOT NULL THEN date_part('year'::text, age(CURRENT_DATE::timestamp with time zone, f.dob::timestamp with time zone))
            ELSE NULL::double precision
        END AS age,
        CASE
            WHEN f.create_dt IS NOT NULL THEN date_part('day'::text, now() - f.create_dt::timestamp with time zone)
            ELSE NULL::double precision
        END AS profile_age_days,
        CASE
            WHEN f.lat IS NOT NULL AND f.lng IS NOT NULL THEN 1
            ELSE 0
        END AS location_completeness,
        CASE
            WHEN f.msisdn = ANY (ARRAY['923002768722'::text, '923029323852'::text, '923030934100'::text, '923119446320'::text, '923004786790'::text, '923420203802'::text, '923041224015'::text, '923268601187'::text, '923176939328'::text, '923110069623'::text]) THEN false
            ELSE true
        END AS valid
   FROM ( SELECT bkk_faf_farmers_ogp_vw.msisdn,
            bkk_faf_farmers_ogp_vw.cnic,
            bkk_faf_farmers_ogp_vw.name,
            bkk_faf_farmers_ogp_vw.email,
            bkk_faf_farmers_ogp_vw.location_name,
            bkk_faf_farmers_ogp_vw.address,
            bkk_faf_farmers_ogp_vw.status,
            bkk_faf_farmers_ogp_vw.create_dt,
            bkk_faf_farmers_ogp_vw.update_dt,
            bkk_faf_farmers_ogp_vw.language_name,
            bkk_faf_farmers_ogp_vw.occupation,
            bkk_faf_farmers_ogp_vw.gender,
            bkk_faf_farmers_ogp_vw.dob,
            bkk_faf_farmers_ogp_vw.phone_type,
            bkk_faf_farmers_ogp_vw.profile_image,
            bkk_faf_farmers_ogp_vw.cnic_front_image,
            bkk_faf_farmers_ogp_vw.cnic_back_image,
            bkk_faf_farmers_ogp_vw.cnic_issue_date,
            bkk_faf_farmers_ogp_vw.last_sms_out_dt,
            bkk_faf_farmers_ogp_vw.recent_activity_dt,
            bkk_faf_farmers_ogp_vw.lat,
            bkk_faf_farmers_ogp_vw.lng,
            'ogp'::text AS source
           FROM bkk_faf_farmers_ogp_vw
        UNION ALL
         SELECT bkk_faf_farmers_global_vw.msisdn,
            bkk_faf_farmers_global_vw.cnic,
            bkk_faf_farmers_global_vw.name,
            bkk_faf_farmers_global_vw.email,
            bkk_faf_farmers_global_vw.location_name,
            bkk_faf_farmers_global_vw.address,
            bkk_faf_farmers_global_vw.status,
            bkk_faf_farmers_global_vw.create_dt,
            bkk_faf_farmers_global_vw.update_dt,
            bkk_faf_farmers_global_vw.language_name,
            bkk_faf_farmers_global_vw.occupation,
            bkk_faf_farmers_global_vw.gender,
            bkk_faf_farmers_global_vw.dob,
            bkk_faf_farmers_global_vw.phone_type,
            bkk_faf_farmers_global_vw.profile_image,
            bkk_faf_farmers_global_vw.cnic_front_image,
            bkk_faf_farmers_global_vw.cnic_back_image,
            bkk_faf_farmers_global_vw.cnic_issue_date,
            bkk_faf_farmers_global_vw.last_sms_out_dt,
            bkk_faf_farmers_global_vw.recent_activity_dt,
            bkk_faf_farmers_global_vw.lat,
            bkk_faf_farmers_global_vw.lng,
            'global'::text AS source
           FROM bkk_faf_farmers_global_vw) f;


-- public.bkk_faf_farmers_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_faf_farmers_mat_vw
TABLESPACE pg_default
AS SELECT bkk_faf_farmers_global_vw.msisdn,
    bkk_faf_farmers_global_vw.cnic,
    bkk_faf_farmers_global_vw.name,
    bkk_faf_farmers_global_vw.email,
    bkk_faf_farmers_global_vw.location_name,
    bkk_faf_farmers_global_vw.address,
    bkk_faf_farmers_global_vw.status,
    bkk_faf_farmers_global_vw.create_dt,
    bkk_faf_farmers_global_vw.update_dt,
    bkk_faf_farmers_global_vw.language_name,
    bkk_faf_farmers_global_vw.occupation,
    bkk_faf_farmers_global_vw.gender,
    bkk_faf_farmers_global_vw.dob,
    bkk_faf_farmers_global_vw.phone_type,
    bkk_faf_farmers_global_vw.profile_image,
    bkk_faf_farmers_global_vw.cnic_front_image,
    bkk_faf_farmers_global_vw.cnic_back_image,
    bkk_faf_farmers_global_vw.cnic_issue_date,
    bkk_faf_farmers_global_vw.last_sms_out_dt,
    bkk_faf_farmers_global_vw.recent_activity_dt,
    bkk_faf_farmers_global_vw.lat,
    bkk_faf_farmers_global_vw.lng
   FROM bkk_faf_farmers_global_vw
UNION
 SELECT ogp.msisdn,
    ogp.cnic,
    ogp.name,
    ogp.email,
    ogp.location_name,
    ogp.address,
    ogp.status,
    ogp.create_dt,
    ogp.update_dt,
    ogp.language_name,
    ogp.occupation,
    ogp.gender,
    ogp.dob,
    ogp.phone_type,
    ogp.profile_image,
    ogp.cnic_front_image,
    ogp.cnic_back_image,
    ogp.cnic_issue_date,
    ogp.last_sms_out_dt,
    ogp.recent_activity_dt,
    ogp.lat,
    ogp.lng
   FROM bkk_faf_farmers_ogp_vw ogp
  WHERE NOT (EXISTS ( SELECT 1
           FROM bkk_faf_farmers_global_vw global
          WHERE global.msisdn = ogp.msisdn))
WITH DATA;

-- View indexes:
CREATE UNIQUE INDEX bkk_faf_farmers_mat_vw_msisdn_idx ON public.bkk_faf_farmers_mat_vw USING btree (msisdn);


-- public.bkk_faf_farms_v2_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_faf_farms_v2_mat_vw
TABLESPACE pg_default
AS SELECT fa.id AS msisdn,
    fa.name AS farmer_name,
    fa.profiled_by,
    fb.name AS agent_name,
    l.name AS location_name,
    f.id AS farm_id,
    fc.id AS farm_crop_id,
    f.farm_title,
    c.title AS crop_name,
    gs.name AS growth_stage,
    fg.date AS growth_stage_date,
    f.create_dt,
    f.update_dt,
    f.shape
   FROM farmers fa
     LEFT JOIN farms f ON f.farmer_id::text = fa.id::text
     LEFT JOIN farmcrops fc ON fc.farm_id::text = f.id::text
     LEFT JOIN crops c ON c.id = fc.crop_id
     LEFT JOIN locations l ON l.id = f.location_id::numeric
     LEFT JOIN ( SELECT farm_crop_growth_stages.growth_stage_id,
            farm_crop_growth_stages.date,
            farm_crop_growth_stages.description,
            farm_crop_growth_stages.create_dt,
            farm_crop_growth_stages.update_dt,
            farm_crop_growth_stages.profiled_by,
            farm_crop_growth_stages.profiler_type,
            farm_crop_growth_stages.id,
            farm_crop_growth_stages.farm_crop_id,
            row_number() OVER (PARTITION BY farm_crop_growth_stages.farm_crop_id ORDER BY farm_crop_growth_stages.date) AS rn
           FROM farm_crop_growth_stages) fg ON fg.farm_crop_id::text = fc.id::text AND fg.rn = 1
     LEFT JOIN growth_stages gs ON gs.id = fg.growth_stage_id
     LEFT JOIN farmers fb ON fa.profiled_by::text = fb.id::text
  WHERE f.shape IS NOT NULL AND (st_area(f.shape::geography) * 0.000247105::double precision) < 150::double precision
  ORDER BY f.create_dt DESC
WITH DATA;

-- View indexes:
CREATE INDEX idx_bkk_faf_farms_v2_mat_vw_farm_crop_id ON public.bkk_faf_farms_v2_mat_vw USING btree (farm_crop_id);
CREATE INDEX idx_bkk_faf_farms_v2_mat_vw_farm_id ON public.bkk_faf_farms_v2_mat_vw USING btree (farm_id);
CREATE INDEX idx_bkk_faf_farms_v2_mat_vw_msisdn ON public.bkk_faf_farms_v2_mat_vw USING btree (msisdn);
CREATE INDEX idx_bkk_faf_farms_v2_mat_vw_profiled_by ON public.bkk_faf_farms_v2_mat_vw USING btree (profiled_by);
CREATE INDEX idx_bkk_faf_farms_v2_mat_vw_shape ON public.bkk_faf_farms_v2_mat_vw USING gist (shape);


-- public.bkk_faf_partnerfarms_baseline_anomaly_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_faf_partnerfarms_baseline_anomaly_mat_vw
TABLESPACE pg_default
AS SELECT DISTINCT ON (bf.farm_id, bf.partner_id) bf.farm_id,
    bf.partner_id,
    bf.farm_title,
    vf.shape,
    bf.farmer_name,
    bf.farmer_number AS msisdn,
    bf.agent_name,
    bf.agent_number AS profiled_by,
    bf.location_name,
    bf.crop_name,
    bf.area,
    f.type AS baseline,
    f.image_date,
        CASE
            WHEN a.farm_id IS NOT NULL THEN true
            ELSE false
        END AS anomaly,
    a.image_date AS anomaly_date,
    a.anomaly_id
   FROM bkk_faf_partnerfarms_mat_vw bf
     LEFT JOIN bkk_faf_farms_v3_2_mat_vw vf ON vf.farm_id::text = bf.farm_id::text
     LEFT JOIN ( SELECT latest.farm_id,
            latest.type,
            latest.image_date
           FROM ( SELECT bkk_partner_crops_basline_thresholds.farm_id,
                    bkk_partner_crops_basline_thresholds.type,
                    bkk_partner_crops_basline_thresholds.image_date,
                    row_number() OVER (PARTITION BY bkk_partner_crops_basline_thresholds.farm_id ORDER BY bkk_partner_crops_basline_thresholds.image_date DESC) AS rn
                   FROM bkk_partner_crops_basline_thresholds) latest
          WHERE latest.rn = 1) f ON bf.farm_id::text = f.farm_id::text
     LEFT JOIN bkk_latest_partners_anomalies a ON bf.farm_id::text = a.farm_id::text
  WHERE NOT (bf.farm_id::text IN ( SELECT DISTINCT invalid_farms.farm_id
           FROM invalid_farms))
WITH DATA;


-- public.bkk_faf_partnerfarms_baseline_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_faf_partnerfarms_baseline_mat_vw
TABLESPACE pg_default
AS SELECT DISTINCT ON (bf.farm_id, bf.partner_id) bf.farm_id,
    bf.partner_id,
    bf.partner_circle_name,
    bf.farm_title,
    vf.shape,
    bf.farmer_name,
    bf.farmer_number AS msisdn,
    bf.agent_name,
    bf.agent_number AS profiled_by,
    bf.location_name,
    bf.crop_name,
    bf.crop_icon,
    bf.area,
    f.type AS baseline,
    f.image_date,
    vf.growth_stage,
    vf.growth_stage_date
   FROM bkk_faf_partnerfarms_mat_vw bf
     LEFT JOIN bkk_faf_farms_v3_2_mat_vw vf ON vf.farm_id::text = bf.farm_id::text
     LEFT JOIN ( SELECT latest.farm_id,
            latest.type,
            latest.image_date
           FROM ( SELECT bkk_partner_crops_basline_thresholds.farm_id,
                    bkk_partner_crops_basline_thresholds.type,
                    bkk_partner_crops_basline_thresholds.image_date,
                    row_number() OVER (PARTITION BY bkk_partner_crops_basline_thresholds.farm_id ORDER BY bkk_partner_crops_basline_thresholds.image_date DESC) AS rn
                   FROM bkk_partner_crops_basline_thresholds) latest
          WHERE latest.rn = 1) f ON bf.farm_id::text = f.farm_id::text
  WHERE NOT (bf.farm_id::text IN ( SELECT DISTINCT invalid_farms.farm_id
           FROM invalid_farms))
WITH DATA;

-- View indexes:
CREATE INDEX idx_bkk_faf_partnerfarms_baseline_farm_id ON public.bkk_faf_partnerfarms_baseline_mat_vw USING btree (farm_id);
CREATE INDEX idx_bkk_faf_partnerfarms_baseline_partner_id ON public.bkk_faf_partnerfarms_baseline_mat_vw USING btree (partner_id);


-- public.bkk_faf_partnerfarms_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_faf_partnerfarms_mat_vw
TABLESPACE pg_default
AS SELECT DISTINCT ON (b1.farm_id, p.partner_id) b1.farm_id,
    p.partner_id,
    pcg.name AS partner_circle_name,
    b1.farm_title,
    b1.farmer_name,
    b1.msisdn AS farmer_number,
    b1.agent_name,
    b1.profiled_by AS agent_number,
    b1.location_name,
    b1.crop_name,
    'https://central.bkk.ag/s3-data/'::text || c.image_url::text AS crop_icon,
    b1.area
   FROM bkk_faf_farms_v3_2_mat_vw b1
     LEFT JOIN crops_global c ON c.title::text = b1.crop_name::text
     LEFT JOIN partner_agents p ON p.msisdn::text = b1.profiled_by::text
     LEFT JOIN partner_custom_geom pcg ON pcg.partner_id::text = p.partner_id::text AND st_intersects(st_setsrid(b1.shape, 4326), pcg.geom)
  WHERE b1.area > 0.1 AND st_isvalid(b1.shape)
WITH DATA;

-- View indexes:
CREATE INDEX idx_bkk_faf_partnerfarms_mat_vw_farm_id ON public.bkk_faf_partnerfarms_mat_vw USING btree (farm_id);
CREATE INDEX idx_bkk_faf_partnerfarms_mat_vw_partner_id ON public.bkk_faf_partnerfarms_mat_vw USING btree (partner_id);


-- public.bkk_faf_partnerfarms_mat_vw_v2 source

CREATE MATERIALIZED VIEW public.bkk_faf_partnerfarms_mat_vw_v2
TABLESPACE pg_default
AS SELECT DISTINCT ON (b1.farm_id, p.partner_id) b1.farm_id,
    p.partner_id,
    b1.farm_title,
    b1.farmer_name,
    b1.msisdn AS farmer_number,
    b1.agent_name,
    b1.profiled_by AS agent_number,
    b1.location_name,
    b1.crop_name,
    'https://central.bkk.ag/s3-data/'::text || c.image_url::text AS crop_icon,
    b1.area
   FROM bkk_faf_farms_v3_2_mat_vw b1
     LEFT JOIN crops_global c ON c.title::text = b1.crop_name::text
     LEFT JOIN partner_agents p ON p.msisdn::text = b1.profiled_by::text
  WHERE b1.area > 0.1 AND st_isvalid(b1.shape)
WITH DATA;


-- public.bkk_field_ops_farms source

CREATE MATERIALIZED VIEW public.bkk_field_ops_farms
TABLESPACE pg_default
AS SELECT f.msisdn,
    f.farmer_name,
    f.profiled_by,
    f.agent_name,
    f.location_name,
    f.farm_id,
    f.farm_crop_id,
    f.farm_title,
    f.crop_name,
    f.growth_stage,
    f.growth_stage_date,
    f.create_dt,
    f.update_dt,
    f.shape,
    f.area
   FROM bkk_faf_farms_v3_2_mat_vw f
  WHERE f.area > 0.1 AND f.area < 150::numeric AND st_isvalid(f.shape) AND st_srid(f.shape) = 4326 AND st_intersects(f.shape, ( SELECT st_union(l.geom) AS geom_union
           FROM locations l
          WHERE l.type::text = 'district'::text AND (l.name::text = ANY (ARRAY['Sargodha'::character varying, 'Chiniot'::character varying, 'Jhang'::character varying]::text[]))))
WITH DATA;


-- public.bkk_field_survey_2024_vw_v2 source

CREATE OR REPLACE VIEW public.bkk_field_survey_2024_vw_v2
AS SELECT b1.msisdn,
    b1.farmer_name,
    b1.profiled_by,
    b1.agent_name,
    b1.location_name,
    b1.farm_id,
    b1.farm_crop_id,
    b1.farm_title,
    b1.crop_name,
    b1.growth_stage,
    b1.growth_stage_date,
    b1.create_dt,
    b1.update_dt,
    b1.shape,
    b1.area,
    b1.uc,
    b1.association,
    f2.name AS profile_status
   FROM bkk_field_survey_2024_mat_vw b1
     JOIN farmers f1 ON b1.msisdn::text = f1.id::text
     JOIN farmer_profile_statuses f2 ON f1.status::text = f2.id::text;


-- public.bkk_jk_data_with_stats_v2 source

CREATE OR REPLACE VIEW public.bkk_jk_data_with_stats_v2
AS SELECT a.name AS agent_name,
    a.msisdn AS profiled_by,
    NULL::character varying AS grower_name,
    NULL::character varying AS grower_number,
    jk.circle AS circle_name,
    NULL::character varying AS variety,
    NULL::boolean AS loany,
    s.partner_id,
    s.temp_id AS farm_id,
    st_setsrid(jk.geom, 4326) AS geom,
    'Assigned'::character varying AS status,
    NULL::character varying AS passbook_no,
    NULL::timestamp without time zone AS create_dt
   FROM agents a
     JOIN partner_agents pa ON a.msisdn::text = pa.msisdn::text
     JOIN surveyapp_assigned_data s ON a.msisdn::text = s.agent_number::text
     JOIN jk_survey_temp jk ON s.temp_id::text = jk.id::character varying::text
  WHERE NOT (EXISTS ( SELECT 1
           FROM bkk_survey_app_data b
          WHERE b.shape_id::text = s.temp_id::text)) AND (pa.partner_id::text = ANY (ARRAY['ce2b817d-4c0e-e8db-a147-b08d1602364c'::character varying, 'faafaacf-d8a2-e1fd-f332-3980aa468d5a'::character varying]::text[]))
UNION ALL
 SELECT a.name AS agent_name,
    a.msisdn AS profiled_by,
    jgd.grower_name,
    jgd.grower_msisdn AS grower_number,
    jgd.circle AS circle_name,
    sto.title AS variety,
    jgo.loan_amount IS NOT NULL AS loany,
    s.partner_id,
    s.farm_id,
    st_setsrid(s.shape, 4326) AS geom,
    s.status,
    s.passbook_id AS passbook_no,
    s.create_dt
   FROM agents a
     JOIN partner_agents pa ON a.msisdn::text = pa.msisdn::text
     JOIN bkk_survey_app_data s ON pa.msisdn::text = s.profiled_by::text
     JOIN jk_growers_data jgd ON s.passbook_id::text = jgd.passbook_no::text
     LEFT JOIN jk_growerloan_offseason jgo ON jgd.passbook_no::text = jgo.passbook_no::text
     JOIN bkk_survey_app_crops_data scd ON s.farm_id::text = scd.farm_id::text
     LEFT JOIN seed_types_ogp sto ON scd.variety::text = sto.id::text
  WHERE (pa.partner_id::text = ANY (ARRAY['ce2b817d-4c0e-e8db-a147-b08d1602364c'::character varying, 'faafaacf-d8a2-e1fd-f332-3980aa468d5a'::character varying]::text[])) AND s.shape IS NOT NULL;


-- public.bkk_jk_data_with_status source

CREATE OR REPLACE VIEW public.bkk_jk_data_with_status
AS SELECT a.name,
    a.msisdn,
    s.partner_id,
    s.temp_id AS farm_id,
    st_setsrid(js.geom, 4326) AS geom,
    'Assigned'::character varying AS status
   FROM agents a
     JOIN partner_agents pa ON a.msisdn::text = pa.msisdn::text
     JOIN surveyapp_assigned_data s ON a.msisdn::text = s.agent_number::text
     JOIN jk_survey_temp js ON s.temp_id::uuid = js.id
  WHERE NOT (EXISTS ( SELECT 1
           FROM bkk_survey_app_data b
          WHERE b.shape_id::text = s.temp_id::text)) AND (pa.partner_id::text = ANY (ARRAY['ce2b817d-4c0e-e8db-a147-b08d1602364c'::text, 'faafaacf-d8a2-e1fd-f332-3980aa468d5a'::text]))
UNION
 SELECT a.name,
    a.msisdn,
    s.partner_id,
    s.farm_id,
    st_setsrid(s.shape, 4326) AS geom,
    s.status
   FROM agents a
     JOIN partner_agents pa ON a.msisdn::text = pa.msisdn::text
     JOIN bkk_survey_app_data s ON pa.msisdn::text = s.profiled_by::text
  WHERE (pa.partner_id::text = ANY (ARRAY['ce2b817d-4c0e-e8db-a147-b08d1602364c'::text, 'faafaacf-d8a2-e1fd-f332-3980aa468d5a'::text])) AND s.shape IS NOT NULL;


-- public.bkk_latest_health_status source

CREATE MATERIALIZED VIEW public.bkk_latest_health_status
TABLESPACE pg_default
AS WITH max_date_per_farm AS (
         SELECT f.farm_id,
            max(f.image_date) AS max_date
           FROM farm_ndvi_v3 f
             JOIN bkk_faf_partnerfarms_mat_vw bv ON bv.farm_id::text = f.farm_id::text
          WHERE f.cloud_cover = 0::double precision
          GROUP BY f.farm_id
        ), vegetation_health AS (
         SELECT DISTINCT c.farm_id,
            c.max_date AS image_date,
            round(((f.range_less_0 + f.range_0_005 + f.range_005_01) / 100::double precision * b.area::double precision)::numeric, 2) AS no_vegetation,
            round(((f.range_01_015 + f.range_015_020 + f.range_020_025 + f.range_025_030) / 100::double precision * b.area::double precision)::numeric, 2) AS low_vegetation,
            round(((f.range_030_035 + f.range_035_040 + f.range_040_045 + f.range_045_050) / 100::double precision * b.area::double precision)::numeric, 2) AS medium_vegetation,
            round(((f.range_050_055 + f.range_055_060 + f.range_060_065 + f.range_065_070 + f.range_070_075 + f.range_075_080 + f.range_080_085 + f.range_085_090 + f.range_090_095 + f.range_095_1) / 100::double precision * b.area::double precision)::numeric, 2) AS high_vegetation
           FROM farm_ndvi_v3 f
             JOIN bkk_faf_partnerfarms_mat_vw b ON f.farm_id::text = b.farm_id::text
             JOIN max_date_per_farm c ON b.farm_id::text = c.farm_id::text
          WHERE c.max_date = f.image_date
        )
 SELECT vegetation_health.farm_id,
    vegetation_health.image_date,
    vegetation_health.no_vegetation,
    vegetation_health.low_vegetation,
    vegetation_health.medium_vegetation,
    vegetation_health.high_vegetation
   FROM vegetation_health
  ORDER BY vegetation_health.farm_id
WITH DATA;

-- View indexes:
CREATE INDEX idx_bkk_latest_health_status_farm_id ON public.bkk_latest_health_status USING btree (farm_id);


-- public.bkk_latest_partners_anomalies source

CREATE MATERIALIZED VIEW public.bkk_latest_partners_anomalies
TABLESPACE pg_default
AS WITH max_date_per_farm AS (
         SELECT f_1.farm_id,
            max(f_1.image_date) AS max_date
           FROM farm_ndvi_anomaly f_1
             JOIN bkk_faf_farms_v3_2_mat_vw b_1 ON f_1.farm_id::text = b_1.farm_id::text
             JOIN partner_agents pa ON b_1.profiled_by::text = pa.msisdn::text
          GROUP BY f_1.farm_id
        )
 SELECT DISTINCT c.farm_id,
    f.image_date,
    f.anomaly_area,
    f.anomaly_id
   FROM bkk_faf_farms_v3_2_mat_vw b
     JOIN farm_ndvi_anomaly f ON f.farm_id::text = b.farm_id::text
     JOIN max_date_per_farm c ON c.farm_id::text = f.farm_id::text
  WHERE c.max_date = f.image_date
  ORDER BY c.farm_id
WITH DATA;


-- public.bkk_partner_assigned_farms source

CREATE OR REPLACE VIEW public.bkk_partner_assigned_farms
AS WITH digitized_base AS (
         SELECT d.id,
            d.area_ac AS area,
            COALESCE(d.mouza, d.uc) AS location_name,
            d.geom,
            c_1.partner_id,
            c_1.circle_name
           FROM digitized_data d
             JOIN custom_geom c_1 ON st_within(d.geom, c_1.geom)
        ), bkk_base AS (
         SELECT b.farm_id,
            b.area,
            b.location_name,
            b.shape AS geom,
            b.partner_id,
            b.circle_name
           FROM bkk_faf_bank_farms_mat_vw b
        ), combined AS (
         SELECT sa.temp_id,
            sa.agent_number,
            sa.table_data,
            sa.state,
            sa.color,
            sa.partner_id,
            d.geom,
            d.area,
            d.location_name,
            d.circle_name
           FROM surveyapp_assigned_data sa
             JOIN digitized_base d ON sa.temp_id::uuid = d.id
        UNION ALL
         SELECT sa.temp_id,
            sa.agent_number,
            sa.table_data,
            sa.state,
            sa.color,
            sa.partner_id,
            b.geom,
            b.area,
            b.location_name,
            b.circle_name
           FROM surveyapp_assigned_data sa
             JOIN bkk_base b ON sa.temp_id::text = b.farm_id::text
        )
 SELECT c.partner_id,
    c.temp_id AS farm_id,
    c.agent_number,
    c.table_data,
    c.geom,
    c.area,
    c.location_name,
    c.circle_name,
    a.name AS agent_name
   FROM combined c
     JOIN agents a ON c.agent_number::text = a.msisdn::text;


-- public.bkk_partner_assigned_farms_mat_vw source

CREATE MATERIALIZED VIEW public.bkk_partner_assigned_farms_mat_vw
TABLESPACE pg_default
AS WITH digitized_temp AS (
         SELECT DISTINCT ON (d.farm_id) d.farm_id,
            d.area,
            COALESCE(d.mauza, d.uc) AS location_name,
            d.geom,
            c.partner_id,
            c.circle_name,
            NULL::text AS msisdn
           FROM suparco_farms_complete d
             JOIN custom_geom c ON st_within(d.geom, c.geom)
          WHERE (EXISTS ( SELECT 1
                   FROM surveyapp_assigned_data sa
                  WHERE d.farm_id::character varying::text = sa.temp_id::text))
          ORDER BY d.farm_id
        ), bkkdata_temp AS (
         SELECT DISTINCT ON (b.farm_id) b.farm_id,
            b.area,
            b.location_name,
            b.shape,
            b.partner_id,
            b.circle_name,
            b.msisdn
           FROM bkk_faf_bank_farms_mat_vw b
          WHERE (EXISTS ( SELECT 1
                   FROM surveyapp_assigned_data sa
                  WHERE b.farm_id::text = sa.temp_id::text))
          ORDER BY b.farm_id
        ), digitized_data AS (
         SELECT DISTINCT ON (s.temp_id) s.temp_id,
            s.agent_number,
            s.table_data,
            s.state,
            s.color,
            s.partner_id,
            d.geom,
            d.area,
            d.location_name,
            d.circle_name,
            d.msisdn,
            p.name AS agent_name
           FROM surveyapp_assigned_data s
             JOIN digitized_temp d ON s.temp_id::text = d.farm_id::character varying::text
             JOIN agents p ON s.agent_number::text = p.msisdn::text
          ORDER BY s.temp_id
        ), bkk_data AS (
         SELECT DISTINCT ON (s.temp_id) s.temp_id,
            s.agent_number,
            s.table_data,
            s.state,
            s.color,
            s.partner_id,
            d.shape AS geom,
            d.area,
            d.location_name,
            d.circle_name,
            d.msisdn,
            p.name AS agent_name
           FROM surveyapp_assigned_data s
             JOIN bkkdata_temp d ON s.temp_id::text = d.farm_id::text
             JOIN agents p ON s.agent_number::text = p.msisdn::text
          ORDER BY s.temp_id
        )
 SELECT digitized_data.partner_id,
    digitized_data.temp_id AS farm_id,
    digitized_data.agent_number,
    digitized_data.table_data,
    digitized_data.geom,
    digitized_data.area,
    digitized_data.location_name,
    digitized_data.circle_name,
    digitized_data.agent_name,
    digitized_data.msisdn
   FROM digitized_data
UNION ALL
 SELECT bkk_data.partner_id,
    bkk_data.temp_id AS farm_id,
    bkk_data.agent_number,
    bkk_data.table_data,
    bkk_data.geom,
    bkk_data.area,
    bkk_data.location_name,
    bkk_data.circle_name,
    bkk_data.agent_name,
    bkk_data.msisdn
   FROM bkk_data
WITH DATA;


-- public.bkk_partner_crops_basline_thresholds source

CREATE MATERIALIZED VIEW public.bkk_partner_crops_basline_thresholds
TABLESPACE pg_default
AS WITH partner_data AS (
         SELECT bkk_faf_partnerfarms_mat_vw.farm_id,
            bkk_faf_partnerfarms_mat_vw.partner_id,
            bkk_faf_partnerfarms_mat_vw.crop_name
           FROM bkk_faf_partnerfarms_mat_vw
          WHERE bkk_faf_partnerfarms_mat_vw.partner_id IS NOT NULL
        ), ndviavg_crop AS (
         SELECT pa.partner_id,
            f_1.image_date,
            pa.crop_name,
            avg(f_1.ndvi_avg) AS ndvi_avg,
            avg(f_1.ndvi_avg) * 1.1::double precision AS above_threshold,
            avg(f_1.ndvi_avg) * 0.9::double precision AS below_threshold
           FROM farm_ndvi_v3 f_1
             JOIN partner_data pa ON f_1.farm_id::text = pa.farm_id::text
          WHERE f_1.cloud_cover = 0::double precision AND f_1.ndvi_avg IS NOT NULL
          GROUP BY pa.partner_id, f_1.image_date, pa.crop_name
        ), farmndvis_all AS (
         SELECT f_1.farm_id,
            pa.partner_id,
            f_1.image_date,
            f_1.ndvi_avg,
            pa.crop_name,
                CASE
                    WHEN f_1.cloud_cover = 0::double precision THEN 'clear'::text
                    ELSE 'cloudcover_nodata'::text
                END AS data_type
           FROM farm_ndvi_v3 f_1
             JOIN partner_data pa ON f_1.farm_id::text = pa.farm_id::text
          WHERE (f_1.cloud_cover = 0::double precision OR f_1.cloud_cover > 0::double precision AND f_1.cloud_cover IS NOT NULL) AND f_1.ndvi_avg IS NOT NULL
        )
 SELECT f.farm_id,
    f.image_date,
    f.ndvi_avg,
    f.crop_name,
        CASE
            WHEN f.data_type = 'cloudcover_nodata'::text THEN 'cloudcover_nodata'::text
            WHEN f.ndvi_avg >= nc.above_threshold THEN 'above'::text
            WHEN f.ndvi_avg <= nc.below_threshold THEN 'below'::text
            ELSE 'average'::text
        END AS type
   FROM farmndvis_all f
     LEFT JOIN ndviavg_crop nc ON f.partner_id::text = nc.partner_id::text AND f.image_date = nc.image_date AND f.crop_name::text = nc.crop_name::text
  ORDER BY (
        CASE
            WHEN f.data_type = 'cloudcover_nodata'::text THEN 'cloudcover_nodata'::text
            WHEN f.ndvi_avg >= nc.above_threshold THEN 'above'::text
            WHEN f.ndvi_avg <= nc.below_threshold THEN 'below'::text
            ELSE 'average'::text
        END) DESC
WITH DATA;

-- View indexes:
CREATE INDEX idx_bkk_partner_crops_basline_farm_id ON public.bkk_partner_crops_basline_thresholds USING btree (farm_id);
CREATE INDEX idx_bkk_partner_crops_basline_type ON public.bkk_partner_crops_basline_thresholds USING btree (type);


-- public.bkk_partner_farms_vw source

CREATE OR REPLACE VIEW public.bkk_partner_farms_vw
AS SELECT b1.farm_crop_id,
    b1.farm_id,
    b1.crop_name,
    a1.partner_id,
    b1.shape,
    b1.agent_name,
    b1.profiled_by,
    b1.location_name
   FROM bkk_faf_farms_v3_2_mat_vw b1
     JOIN partner_agents a1 ON b1.profiled_by::text = a1.msisdn::text AND NOT (b1.farm_id::text IN ( SELECT bkk_faf_farms_v3_2_mat_vw.farm_id
           FROM bkk_faf_farms_v3_2_mat_vw
          WHERE bkk_faf_farms_v3_2_mat_vw.profiled_by::text = '923055547472'::text AND bkk_faf_farms_v3_2_mat_vw.location_name::text <> 'Khanewal'::text)) AND b1.farm_id::text <> '3d8317221eac38983876babff3053a02'::text AND NOT (EXISTS ( SELECT 1
           FROM invalid_farms f
          WHERE f.farm_id::text = b1.farm_id::text));


-- public.bkk_partner_health_status source

CREATE MATERIALIZED VIEW public.bkk_partner_health_status
TABLESPACE pg_default
AS WITH vegetation_health AS (
         SELECT f_1.image_date,
            pa.partner_id,
            round(sum((f_1.range_less_0 + f_1.range_0_005 + f_1.range_005_01) / 100::double precision * round((st_area(b_1.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS no_vegetation,
            round(sum((f_1.range_01_015 + f_1.range_015_020 + f_1.range_020_025 + f_1.range_025_030) / 100::double precision * round((st_area(b_1.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS low_vegetation,
            round(sum((f_1.range_030_035 + f_1.range_035_040 + f_1.range_040_045 + f_1.range_045_050) / 100::double precision * round((st_area(b_1.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS medium_vegetation,
            round(sum((f_1.range_050_055 + f_1.range_055_060 + f_1.range_060_065 + f_1.range_065_070 + f_1.range_070_075 + f_1.range_075_080 + f_1.range_080_085 + f_1.range_085_090 + f_1.range_090_095 + f_1.range_095_1) / 100::double precision * round((st_area(b_1.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS high_vegetation,
            round(sum(st_area(b_1.shape::geography) * 0.000247105::double precision)::numeric, 2) AS total_area
           FROM farm_ndvi_v3 f_1
             JOIN bkk_faf_farms_v3_2_mat_vw b_1 ON f_1.farm_id::text = b_1.farm_id::text
             JOIN partner_agents pa ON b_1.profiled_by::text = pa.msisdn::text
          WHERE f_1.cloud_cover = 0::double precision
          GROUP BY pa.partner_id, f_1.image_date
        ), area AS (
         SELECT pa.partner_id,
            round(sum(st_area(b_1.shape::geography) * 0.000247105::double precision)::numeric, 2) AS total_area
           FROM bkk_faf_farms_v3_2_mat_vw b_1
             JOIN partner_agents pa ON b_1.profiled_by::text = pa.msisdn::text
          GROUP BY pa.partner_id
        )
 SELECT f.image_date,
    f.partner_id,
    f.no_vegetation,
    f.low_vegetation,
    f.medium_vegetation,
    f.high_vegetation,
    b.total_area,
        CASE
            WHEN (b.total_area - (f.no_vegetation + f.low_vegetation + f.medium_vegetation + f.high_vegetation)) > 0::numeric THEN b.total_area - (f.no_vegetation + f.low_vegetation + f.medium_vegetation + f.high_vegetation)
            ELSE 0.0
        END AS cloudcover_nodata
   FROM vegetation_health f
     JOIN area b ON f.partner_id::text = b.partner_id::text
  ORDER BY f.partner_id, f.image_date
WITH DATA;


-- public.bkk_partner_latest_health_status source

CREATE MATERIALIZED VIEW public.bkk_partner_latest_health_status
TABLESPACE pg_default
AS WITH max_date_per_farm AS (
         SELECT pa.partner_id,
            f.farm_id,
            max(f.image_date) AS max_date
           FROM farm_ndvi_v3 f
             JOIN bkk_faf_farms_v3_2_mat_vw b ON f.farm_id::text = b.farm_id::text
             JOIN partner_agents pa ON b.profiled_by::text = pa.msisdn::text
          WHERE f.cloud_cover = 0::double precision
          GROUP BY pa.partner_id, f.farm_id
        ), vegetation_health AS (
         SELECT c.partner_id,
            round(((f.range_less_0 + f.range_0_005 + f.range_005_01) / 100::double precision * round((st_area(b.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS no_vegetation,
            round(((f.range_01_015 + f.range_015_020 + f.range_020_025 + f.range_025_030) / 100::double precision * round((st_area(b.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS low_vegetation,
            round(((f.range_030_035 + f.range_035_040 + f.range_040_045 + f.range_045_050) / 100::double precision * round((st_area(b.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS medium_vegetation,
            round(((f.range_050_055 + f.range_055_060 + f.range_060_065 + f.range_065_070 + f.range_070_075 + f.range_075_080 + f.range_080_085 + f.range_085_090 + f.range_090_095 + f.range_095_1) / 100::double precision * round((st_area(b.shape::geography) * 0.000247105::double precision)::numeric, 2)::double precision)::numeric, 2) AS high_vegetation
           FROM farm_ndvi_v3 f
             JOIN bkk_faf_farms_v3_2_mat_vw b ON f.farm_id::text = b.farm_id::text
             JOIN max_date_per_farm c ON b.farm_id::text = c.farm_id::text
          WHERE c.max_date = f.image_date
        )
 SELECT vegetation_health.partner_id,
    sum(vegetation_health.no_vegetation) AS no_vegetation,
    sum(vegetation_health.low_vegetation) AS low_vegetation,
    sum(vegetation_health.medium_vegetation) AS medium_vegetation,
    sum(vegetation_health.high_vegetation) AS high_vegetation
   FROM vegetation_health
  GROUP BY vegetation_health.partner_id
WITH DATA;


-- public.csm1_crop_status source

CREATE OR REPLACE VIEW public.csm1_crop_status
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS not_cultivated,
        CASE
            WHEN f.date > '2022-11-01'::date THEN sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            WHEN f.date < '2022-11-01'::date THEN sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            ELSE NULL::double precision
        END AS cultivated,
        CASE
            WHEN f.date > '2022-11-01'::date THEN sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            ELSE NULL::double precision
        END AS harvested,
        CASE
            WHEN sum(st_area(b.shape::geography) * 0.000247105::double precision) < 40000::double precision THEN 46300::double precision - sum(st_area(b.shape::geography) * 0.000247105::double precision)
            ELSE NULL::double precision
        END AS clouds
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1 AND f.cloud_cover = 0::double precision AND b.profiled_by::text = '923000002761'::text
  GROUP BY f.date
 HAVING sum(st_area(b.shape::geography) * 0.000247105::double precision) > 1000::double precision
  ORDER BY f.date;


-- public.csm2_crop_status source

CREATE OR REPLACE VIEW public.csm2_crop_status
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS not_cultivated,
        CASE
            WHEN f.date > '2022-11-01'::date THEN sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            WHEN f.date < '2022-11-01'::date THEN sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            ELSE NULL::double precision
        END AS cultivated,
        CASE
            WHEN f.date > '2022-11-01'::date THEN sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            ELSE NULL::double precision
        END AS harvested,
        CASE
            WHEN sum(st_area(b.shape::geography) * 0.000247105::double precision) < 45000::double precision THEN 51250::double precision - sum(st_area(b.shape::geography) * 0.000247105::double precision)
            ELSE NULL::double precision
        END AS clouds
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1 AND f.cloud_cover = 0::double precision AND b.profiled_by::text = '923000002762'::text
  GROUP BY f.date
 HAVING sum(st_area(b.shape::geography) * 0.000247105::double precision) > 1000::double precision
  ORDER BY f.date;


-- public.csm_crop_status source

CREATE OR REPLACE VIEW public.csm_crop_status
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS not_cultivated,
        CASE
            WHEN f.date > '2022-11-01'::date THEN sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            WHEN f.date < '2022-11-01'::date THEN sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            ELSE NULL::double precision
        END AS cultivated,
        CASE
            WHEN f.date > '2022-11-01'::date THEN sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision))
            ELSE NULL::double precision
        END AS harvested,
        CASE
            WHEN sum(st_area(b.shape::geography) * 0.000247105::double precision) < 90000::double precision THEN 97600::double precision - sum(st_area(b.shape::geography) * 0.000247105::double precision)
            ELSE NULL::double precision
        END AS clouds
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1 AND f.cloud_cover = 0::double precision AND (b.profiled_by::text = ANY (ARRAY['923000002761'::character varying::text, '923000002762'::character varying::text]))
  GROUP BY f.date
 HAVING sum(st_area(b.shape::geography) * 0.000247105::double precision) > 1000::double precision
  ORDER BY f.date;


-- public.field_app_data_24_mat_vw source

CREATE MATERIALIZED VIEW public.field_app_data_24_mat_vw
TABLESPACE pg_default
AS SELECT field_app_data_24_vw.msisdn,
    field_app_data_24_vw.farmer_name,
    field_app_data_24_vw.profiled_by,
    field_app_data_24_vw.agent_name,
    field_app_data_24_vw.location_name,
    field_app_data_24_vw.farm_id,
    field_app_data_24_vw.farm_crop_id,
    field_app_data_24_vw.farm_title,
    field_app_data_24_vw.crop_name,
    field_app_data_24_vw.growth_stage,
    field_app_data_24_vw.growth_stage_date,
    field_app_data_24_vw.create_dt,
    field_app_data_24_vw.update_dt,
    field_app_data_24_vw.shape,
    field_app_data_24_vw.area,
    field_app_data_24_vw.association,
    field_app_data_24_vw.profile_status,
    field_app_data_24_vw.uc
   FROM field_app_data_24_vw
WITH DATA;


-- public.field_app_data_24_vw source

CREATE OR REPLACE VIEW public.field_app_data_24_vw
AS SELECT DISTINCT ON (b.farm_id) b.msisdn,
    b.farmer_name,
    b.profiled_by,
    b.agent_name,
    b.location_name,
    b.farm_id,
    b.farm_crop_id,
    b.farm_title,
    b.crop_name,
    b.growth_stage,
    b.growth_stage_date,
    b.create_dt,
    b.update_dt,
    b.shape,
    round((st_area(b.shape::geography) * 0.000247105::double precision)::numeric, 3) AS area,
    f.association,
    f2.name AS profile_status,
    u1.uc
   FROM bkk_faf_farms_v2_vw b
     LEFT JOIN union_council u1 ON st_contains(u1.geom, b.shape)
     JOIN field_app_agent_association_vw f ON b.profiled_by::text = f.agent_msisdn::text
     JOIN farmers f1 ON b.msisdn::text = f1.id::text
     JOIN farmer_profile_statuses f2 ON f1.status::text = f2.id::text
  WHERE b.create_dt > '2023-12-22 00:00:00'::timestamp without time zone AND st_isvalid(b.shape) AND st_srid(b.shape) = 4326 AND (b.profiled_by::text IN ( SELECT field_app_agent_association_vw.agent_msisdn
           FROM field_app_agent_association_vw));


-- public.geography_columns source

CREATE OR REPLACE VIEW public.geography_columns
AS SELECT current_database() AS f_table_catalog,
    n.nspname AS f_table_schema,
    c.relname AS f_table_name,
    a.attname AS f_geography_column,
    postgis_typmod_dims(a.atttypmod) AS coord_dimension,
    postgis_typmod_srid(a.atttypmod) AS srid,
    postgis_typmod_type(a.atttypmod) AS type
   FROM pg_class c,
    pg_attribute a,
    pg_type t,
    pg_namespace n
  WHERE t.typname = 'geography'::name AND a.attisdropped = false AND a.atttypid = t.oid AND a.attrelid = c.oid AND c.relnamespace = n.oid AND (c.relkind = ANY (ARRAY['r'::"char", 'v'::"char", 'm'::"char", 'f'::"char", 'p'::"char"])) AND NOT pg_is_other_temp_schema(c.relnamespace) AND has_table_privilege(c.oid, 'SELECT'::text);


-- public.geometry_columns source

CREATE OR REPLACE VIEW public.geometry_columns
AS SELECT current_database()::character varying(256) AS f_table_catalog,
    n.nspname AS f_table_schema,
    c.relname AS f_table_name,
    a.attname AS f_geometry_column,
    COALESCE(postgis_typmod_dims(a.atttypmod), sn.ndims, 2) AS coord_dimension,
    COALESCE(NULLIF(postgis_typmod_srid(a.atttypmod), 0), sr.srid, 0) AS srid,
    replace(replace(COALESCE(NULLIF(upper(postgis_typmod_type(a.atttypmod)), 'GEOMETRY'::text), st.type, 'GEOMETRY'::text), 'ZM'::text, ''::text), 'Z'::text, ''::text)::character varying(30) AS type
   FROM pg_class c
     JOIN pg_attribute a ON a.attrelid = c.oid AND NOT a.attisdropped
     JOIN pg_namespace n ON c.relnamespace = n.oid
     JOIN pg_type t ON a.atttypid = t.oid
     LEFT JOIN ( SELECT s.connamespace,
            s.conrelid,
            s.conkey,
            replace(split_part(s.consrc, ''''::text, 2), ')'::text, ''::text) AS type
           FROM ( SELECT pg_constraint.connamespace,
                    pg_constraint.conrelid,
                    pg_constraint.conkey,
                    pg_get_constraintdef(pg_constraint.oid) AS consrc
                   FROM pg_constraint) s
          WHERE s.consrc ~~* '%geometrytype(% = %'::text) st ON st.connamespace = n.oid AND st.conrelid = c.oid AND (a.attnum = ANY (st.conkey))
     LEFT JOIN ( SELECT s.connamespace,
            s.conrelid,
            s.conkey,
            replace(split_part(s.consrc, ' = '::text, 2), ')'::text, ''::text)::integer AS ndims
           FROM ( SELECT pg_constraint.connamespace,
                    pg_constraint.conrelid,
                    pg_constraint.conkey,
                    pg_get_constraintdef(pg_constraint.oid) AS consrc
                   FROM pg_constraint) s
          WHERE s.consrc ~~* '%ndims(% = %'::text) sn ON sn.connamespace = n.oid AND sn.conrelid = c.oid AND (a.attnum = ANY (sn.conkey))
     LEFT JOIN ( SELECT s.connamespace,
            s.conrelid,
            s.conkey,
            replace(replace(split_part(s.consrc, ' = '::text, 2), ')'::text, ''::text), '('::text, ''::text)::integer AS srid
           FROM ( SELECT pg_constraint.connamespace,
                    pg_constraint.conrelid,
                    pg_constraint.conkey,
                    pg_get_constraintdef(pg_constraint.oid) AS consrc
                   FROM pg_constraint) s
          WHERE s.consrc ~~* '%srid(% = %'::text) sr ON sr.connamespace = n.oid AND sr.conrelid = c.oid AND (a.attnum = ANY (sr.conkey))
  WHERE (c.relkind = ANY (ARRAY['r'::"char", 'v'::"char", 'm'::"char", 'f'::"char", 'p'::"char"])) AND NOT c.relname = 'raster_columns'::name AND t.typname = 'geometry'::name AND NOT pg_is_other_temp_schema(c.relnamespace) AND has_table_privilege(c.oid, 'SELECT'::text);


-- public.jk_survey_with_status source

CREATE OR REPLACE VIEW public.jk_survey_with_status
AS SELECT jst.id,
    jst.zone_area,
    jst.circle,
    jst.village,
    jst.total_area,
    jst.zone_type,
    jst.tehsil,
    jst.district,
    st_transform(st_makevalid(st_setsrid(jst.geom, 4326)), 4326) AS geom,
    jst.unit,
    jst.latitude,
    jst.longitude,
    sad.agent_number,
        CASE
            WHEN tmd.shape_id IS NOT NULL THEN 'Marked'::text
            WHEN sad.temp_id IS NOT NULL THEN 'Assigned'::text
            ELSE 'NotAssigned'::text
        END AS status
   FROM jk_survey_temp jst
     LEFT JOIN surveyapp_assigned_data sad ON jst.id = sad.temp_id::uuid
     LEFT JOIN bkk_survey_app_data tmd ON jst.id = tmd.shape_id::uuid;


-- public.kst_farms_vw source

CREATE OR REPLACE VIEW public.kst_farms_vw
AS SELECT DISTINCT ON (bkk_faf_farms_v3_2_mat_vw.farm_id) bkk_faf_farms_v3_2_mat_vw.msisdn,
    bkk_faf_farms_v3_2_mat_vw.farmer_name,
    bkk_faf_farms_v3_2_mat_vw.profiled_by,
    bkk_faf_farms_v3_2_mat_vw.agent_name,
    bkk_faf_farms_v3_2_mat_vw.location_name,
    bkk_faf_farms_v3_2_mat_vw.farm_id,
    bkk_faf_farms_v3_2_mat_vw.farm_crop_id,
    bkk_faf_farms_v3_2_mat_vw.farm_title,
    bkk_faf_farms_v3_2_mat_vw.crop_name,
    bkk_faf_farms_v3_2_mat_vw.growth_stage,
    bkk_faf_farms_v3_2_mat_vw.growth_stage_date,
    bkk_faf_farms_v3_2_mat_vw.create_dt,
    bkk_faf_farms_v3_2_mat_vw.update_dt,
    bkk_faf_farms_v3_2_mat_vw.shape,
    bkk_faf_farms_v3_2_mat_vw.area
   FROM bkk_faf_farms_v3_2_mat_vw
  WHERE bkk_faf_farms_v3_2_mat_vw.profiled_by::text = ANY (ARRAY['923334436909'::character varying::text, '923452974735'::character varying::text, '923139834277'::character varying::text]);


-- public.mpcl_farmers_view source

CREATE OR REPLACE VIEW public.mpcl_farmers_view
AS SELECT COALESCE(s.caste, 'Not Confirmed'::text) AS caste,
    c.gid,
    c.id,
    c.msisdn,
    c.farmer_name AS farmer_nam,
    c.profiled_by AS profiled_b,
    c.agent_name,
    c.location_name AS location_n,
    c.farm_id,
    c.farm_crop_id AS farm_crop_,
    c.farm_title,
    c.crop_name,
    c.growth_stage AS growth_sta,
    c.growth_stage_date AS growth_s_1,
    c.create_dt,
    c.update_dt,
    c.image,
    c.image1,
    c.image2,
    c.image3,
    c.area,
    c.geom,
    c.well_number
   FROM mpcl_survey_cleaned c
     LEFT JOIN mpcl_ph2_subsidy s ON s.farmer_number::text = c.msisdn::text
     JOIN mpcl_aoi a ON st_intersects(c.geom, a.geom);


-- public.mpcl_report_view source

CREATE OR REPLACE VIEW public.mpcl_report_view
AS SELECT mpcl_report.id,
    mpcl_report.advisory,
    mpcl_report.ivr_interacted,
    mpcl_report.talked_cc_agent,
    mpcl_report.vms,
    mpcl_report.mpcl_total_farmers,
    mpcl_report.app_users,
    mpcl_report.report_date,
    mpcl_report.created_at,
    mpcl_report.type_of_advisories,
    mpcl_report.weather_advisory,
    mpcl_report.male_farmers,
    mpcl_report.female_farmers,
    mpcl_report.farmers_null_gender,
    mpcl_report.advisory_sms_manual
   FROM mpcl_report;


-- public.mpcl_subsidy_farmers_vw source

CREATE OR REPLACE VIEW public.mpcl_subsidy_farmers_vw
AS SELECT COALESCE(s.caste, 'Not Confirmed'::text) AS caste,
    c.gid,
    c.id,
    c.msisdn,
    c.farmer_name AS farmer_nam,
    c.profiled_by AS profiled_b,
    c.agent_name,
    c.location_name AS location_n,
    c.farm_id,
    c.farm_crop_id AS farm_crop_,
    c.farm_title,
    c.crop_name,
    c.growth_stage AS growth_sta,
    c.growth_stage_date AS growth_s_1,
    c.create_dt,
    c.update_dt,
    c.image,
    c.image1,
    c.image2,
    c.image3,
    c.area,
    c.geom,
    c.well_number
   FROM mpcl_survey_cleaned c
     JOIN mpcl_ph2_subsidy s ON s.farmer_number::text = c.msisdn::text
     JOIN mpcl_aoi a ON st_within(c.geom, a.geom);


-- public.ogp_data_verifciation_vw source

CREATE OR REPLACE VIEW public.ogp_data_verifciation_vw
AS SELECT f.id AS farm_id,
    fc.id AS farmcrop_id,
    f.farmer_id,
    f.profiled_by,
    f.status AS farm_status,
    f.description AS farm_desc,
    fa.status AS farmer_status,
    fa.description AS farmer_desc,
    f.land_area,
    f.create_dt,
    f.update_dt,
    f.farm_title,
    f.shape_id,
    f.temp_id,
    fc.crop_season,
    c.title,
    'https://field.bkk.ag/s3/'::text || split_part(f.image::text, ','::text, 1) AS image1,
    'https://field.bkk.ag/s3/'::text || split_part(f.image::text, ','::text, 2) AS image2,
    'https://field.bkk.ag/s3/'::text || split_part(f.image::text, ','::text, 3) AS image3,
    st_astext(f.shape) AS geom,
    f.shape
   FROM farms f
     JOIN farmcrops fc ON f.id::text = fc.farm_id::text
     JOIN crops c ON fc.crop_id = c.id
     JOIN farmers fa ON f.farmer_id::text = fa.id::text
  WHERE (f.farmer_id::text IN ( SELECT farmers.id
           FROM farmers
          WHERE farmers.profiled_by::text = ANY (ARRAY['923159893814'::character varying, '923159280512'::character varying, '923098711492'::character varying]::text[])))
  ORDER BY f.create_dt DESC;


-- public.survey_data_vw source

CREATE OR REPLACE VIEW public.survey_data_vw
AS SELECT survey_data.farm_id,
    survey_data.farmcrop_id,
    survey_data.farmer_id,
    survey_data.farmer_name,
    survey_data.profiled_by,
    survey_data.farmer_status,
    survey_data.land_area,
    survey_data.create_dt,
    survey_data.update_dt,
    survey_data.farm_title,
    survey_data.shape_id,
    survey_data.temp_id,
    survey_data.crop_season,
    survey_data.title AS crop_name,
    survey_data.shape,
    survey_data.description
   FROM survey_data;


-- public.vegetaion source

CREATE OR REPLACE VIEW public.vegetaion
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1;


-- public.vegetation source

CREATE OR REPLACE VIEW public.vegetation
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = '2022-10-25'::date AND f.val = 1;


-- public.vegetation_clouds source

CREATE OR REPLACE VIEW public.vegetation_clouds
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation,
        CASE
            WHEN sum(st_area(b.shape::geography) * 0.000247105::double precision) < 95000::double precision THEN 97600::double precision - sum(st_area(b.shape::geography) * 0.000247105::double precision)
            ELSE NULL::double precision
        END AS clouds
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1 AND f.cloud_cover = 0::double precision;


-- public.vegetation_clouds_csm1 source

CREATE OR REPLACE VIEW public.vegetation_clouds_csm1
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation,
        CASE
            WHEN sum(st_area(b.shape::geography) * 0.000247105::double precision) < 40000::double precision THEN 46300::double precision - sum(st_area(b.shape::geography) * 0.000247105::double precision)
            ELSE NULL::double precision
        END AS clouds
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1 AND f.cloud_cover = 0::double precision AND b.profiled_by::text = '923000002761'::text;


-- public.vegetation_clouds_csm2 source

CREATE OR REPLACE VIEW public.vegetation_clouds_csm2
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation,
        CASE
            WHEN sum(st_area(b.shape::geography) * 0.000247105::double precision) < 45000::double precision THEN 51250::double precision - sum(st_area(b.shape::geography) * 0.000247105::double precision)
            ELSE NULL::double precision
        END AS clouds
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND f.val = 1 AND f.cloud_cover = 0::double precision AND b.profiled_by::text = '923000002762'::text;


-- public.vegetation_csm1 source

CREATE OR REPLACE VIEW public.vegetation_csm1
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND b.profiled_by::text = '923000002761'::text AND f.val = 1;


-- public.vegetation_csm2 source

CREATE OR REPLACE VIEW public.vegetation_csm2
AS SELECT sum(f.range_less_then_0 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_0_to_01 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS no_vegetation,
    sum(f.range_01_to_02 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_02_to_03 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS low_vegetation,
    sum(f.range_03_to_04 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_04_to_05 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS medium_vegetation,
    sum(f.range_05_to_06 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_06_to_07 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_07_to_08 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_08_to_09 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) + sum(f.range_09_to_1 / 100::double precision * (st_area(b.shape::geography) * 0.000247105::double precision)) AS high_vegetation
   FROM farm_ndvi_v2 f
     JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id::text = b.farm_crop_id::text
  WHERE f.date = (( SELECT farm_ndvi_v2.date
           FROM farm_ndvi_v2
          ORDER BY farm_ndvi_v2.date DESC
         LIMIT 1)) AND b.profiled_by::text = '923000002762'::text AND f.val = 1;



-- DROP FUNCTION public._postgis_deprecate(text, text, text);

CREATE OR REPLACE FUNCTION public._postgis_deprecate(oldname text, newname text, version text)
 RETURNS void
 LANGUAGE plpgsql
 IMMUTABLE STRICT COST 250
AS $function$
DECLARE
  curver_text text;
BEGIN
  --
  -- Raises a NOTICE if it was deprecated in this version,
  -- a WARNING if in a previous version (only up to minor version checked)
  --
	curver_text := '3.4.0';
	IF pg_catalog.split_part(curver_text,'.',1)::int > pg_catalog.split_part(version,'.',1)::int OR
	   ( pg_catalog.split_part(curver_text,'.',1) = pg_catalog.split_part(version,'.',1) AND
		 pg_catalog.split_part(curver_text,'.',2) != split_part(version,'.',2) )
	THEN
	  RAISE WARNING '% signature was deprecated in %. Please use %', oldname, version, newname;
	ELSE
	  RAISE DEBUG '% signature was deprecated in %. Please use %', oldname, version, newname;
	END IF;
END;
$function$
;

-- DROP FUNCTION public._postgis_index_extent(regclass, text);

CREATE OR REPLACE FUNCTION public._postgis_index_extent(tbl regclass, col text)
 RETURNS box2d
 LANGUAGE c
 STABLE STRICT
AS '$libdir/postgis-3', $function$_postgis_gserialized_index_extent$function$
;

-- DROP FUNCTION public._postgis_join_selectivity(regclass, text, regclass, text, text);

CREATE OR REPLACE FUNCTION public._postgis_join_selectivity(regclass, text, regclass, text, text DEFAULT '2'::text)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$_postgis_gserialized_joinsel$function$
;

-- DROP FUNCTION public._postgis_pgsql_version();

CREATE OR REPLACE FUNCTION public._postgis_pgsql_version()
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
	SELECT CASE WHEN pg_catalog.split_part(s,'.',1)::integer > 9 THEN pg_catalog.split_part(s,'.',1) || '0'
	ELSE pg_catalog.split_part(s,'.', 1) || pg_catalog.split_part(s,'.', 2) END AS v
	FROM pg_catalog.substring(version(), 'PostgreSQL ([0-9\.]+)') AS s;
$function$
;

-- DROP FUNCTION public._postgis_scripts_pgsql_version();

CREATE OR REPLACE FUNCTION public._postgis_scripts_pgsql_version()
 RETURNS text
 LANGUAGE sql
 IMMUTABLE
AS $function$SELECT '120'::text AS version$function$
;

-- DROP FUNCTION public._postgis_selectivity(regclass, text, geometry, text);

CREATE OR REPLACE FUNCTION public._postgis_selectivity(tbl regclass, att_name text, geom geometry, mode text DEFAULT '2'::text)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$_postgis_gserialized_sel$function$
;

-- DROP FUNCTION public._postgis_stats(regclass, text, text);

CREATE OR REPLACE FUNCTION public._postgis_stats(tbl regclass, att_name text, text DEFAULT '2'::text)
 RETURNS text
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$_postgis_gserialized_stats$function$
;

-- DROP FUNCTION public._st_3ddfullywithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public._st_3ddfullywithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_dfullywithin3d$function$
;

-- DROP FUNCTION public._st_3ddwithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public._st_3ddwithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_dwithin3d$function$
;

-- DROP FUNCTION public._st_3dintersects(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_3dintersects(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_3DIntersects$function$
;

-- DROP FUNCTION public._st_asgml(int4, geometry, int4, int4, text, text);

CREATE OR REPLACE FUNCTION public._st_asgml(integer, geometry, integer, integer, text, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asGML$function$
;

-- DROP FUNCTION public._st_asx3d(int4, geometry, int4, int4, text);

CREATE OR REPLACE FUNCTION public._st_asx3d(integer, geometry, integer, integer, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asX3D$function$
;

-- DROP FUNCTION public._st_bestsrid(geography);

CREATE OR REPLACE FUNCTION public._st_bestsrid(geography)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geography_bestsrid$function$
;

-- DROP FUNCTION public._st_bestsrid(geography, geography);

CREATE OR REPLACE FUNCTION public._st_bestsrid(geography, geography)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geography_bestsrid$function$
;

-- DROP FUNCTION public._st_concavehull(geometry);

CREATE OR REPLACE FUNCTION public._st_concavehull(param_inputgeom geometry)
 RETURNS geometry
 LANGUAGE plpgsql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$
	DECLARE
	vexhull public.geometry;
	var_resultgeom public.geometry;
	var_inputgeom public.geometry;
	vexring public.geometry;
	cavering public.geometry;
	cavept public.geometry[];
	seglength double precision;
	var_tempgeom public.geometry;
	scale_factor float := 1;
	i integer;
	BEGIN
		-- First compute the ConvexHull of the geometry
		vexhull := public.ST_ConvexHull(param_inputgeom);
		var_inputgeom := param_inputgeom;
		--A point really has no concave hull
		IF public.ST_GeometryType(vexhull) = 'ST_Point' OR public.ST_GeometryType(vexHull) = 'ST_LineString' THEN
			RETURN vexhull;
		END IF;

		-- convert the hull perimeter to a linestring so we can manipulate individual points
		vexring := CASE WHEN public.ST_GeometryType(vexhull) = 'ST_LineString' THEN vexhull ELSE public.ST_ExteriorRing(vexhull) END;
		IF abs(public.ST_X(public.ST_PointN(vexring,1))) < 1 THEN --scale the geometry to prevent stupid precision errors - not sure it works so make low for now
			scale_factor := 100;
			vexring := public.ST_Scale(vexring, scale_factor,scale_factor);
			var_inputgeom := public.ST_Scale(var_inputgeom, scale_factor, scale_factor);
			--RAISE NOTICE 'Scaling';
		END IF;
		seglength := public.ST_Length(vexring)/least(public.ST_NPoints(vexring)*2,1000) ;

		vexring := public.ST_Segmentize(vexring, seglength);
		-- find the point on the original geom that is closest to each point of the convex hull and make a new linestring out of it.
		cavering := public.ST_Collect(
			ARRAY(

				SELECT
					public.ST_ClosestPoint(var_inputgeom, pt ) As the_geom
					FROM (
						SELECT  public.ST_PointN(vexring, n ) As pt, n
							FROM
							generate_series(1, public.ST_NPoints(vexring) ) As n
						) As pt

				)
			)
		;

		var_resultgeom := public.ST_MakeLine(geom)
			FROM public.ST_Dump(cavering) As foo;

		IF public.ST_IsSimple(var_resultgeom) THEN
			var_resultgeom := public.ST_MakePolygon(var_resultgeom);
			--RAISE NOTICE 'is Simple: %', var_resultgeom;
		ELSE 
			--RAISE NOTICE 'is not Simple: %', var_resultgeom;
			var_resultgeom := public.ST_ConvexHull(var_resultgeom);
		END IF;

		IF scale_factor > 1 THEN -- scale the result back
			var_resultgeom := public.ST_Scale(var_resultgeom, 1/scale_factor, 1/scale_factor);
		END IF;

		-- make sure result covers original (#3638)
		-- Using ST_UnaryUnion since SFCGAL doesn't replace with its own implementation
		-- and SFCGAL one chokes for some reason
		var_resultgeom := public.ST_UnaryUnion(public.ST_Collect(param_inputgeom, var_resultgeom) );
		RETURN var_resultgeom;

	END;
$function$
;

-- DROP FUNCTION public._st_contains(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_contains(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$contains$function$
;

-- DROP FUNCTION public._st_containsproperly(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_containsproperly(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$containsproperly$function$
;

-- DROP FUNCTION public._st_coveredby(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_coveredby(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$coveredby$function$
;

-- DROP FUNCTION public._st_coveredby(geography, geography);

CREATE OR REPLACE FUNCTION public._st_coveredby(geog1 geography, geog2 geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_coveredby$function$
;

-- DROP FUNCTION public._st_covers(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_covers(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$covers$function$
;

-- DROP FUNCTION public._st_covers(geography, geography);

CREATE OR REPLACE FUNCTION public._st_covers(geog1 geography, geog2 geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_covers$function$
;

-- DROP FUNCTION public._st_crosses(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_crosses(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$crosses$function$
;

-- DROP FUNCTION public._st_dfullywithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public._st_dfullywithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_dfullywithin$function$
;

-- DROP FUNCTION public._st_distancetree(geography, geography, float8, bool);

CREATE OR REPLACE FUNCTION public._st_distancetree(geography, geography, double precision, boolean)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_distance_tree$function$
;

-- DROP FUNCTION public._st_distancetree(geography, geography);

CREATE OR REPLACE FUNCTION public._st_distancetree(geography, geography)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE STRICT
AS $function$SELECT public._ST_DistanceTree($1, $2, 0.0, true)$function$
;

-- DROP FUNCTION public._st_distanceuncached(geography, geography, float8, bool);

CREATE OR REPLACE FUNCTION public._st_distanceuncached(geography, geography, double precision, boolean)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_distance_uncached$function$
;

-- DROP FUNCTION public._st_distanceuncached(geography, geography, bool);

CREATE OR REPLACE FUNCTION public._st_distanceuncached(geography, geography, boolean)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE STRICT
AS $function$SELECT public._ST_DistanceUnCached($1, $2, 0.0, $3)$function$
;

-- DROP FUNCTION public._st_distanceuncached(geography, geography);

CREATE OR REPLACE FUNCTION public._st_distanceuncached(geography, geography)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE STRICT
AS $function$SELECT public._ST_DistanceUnCached($1, $2, 0.0, true)$function$
;

-- DROP FUNCTION public._st_dwithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public._st_dwithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_dwithin$function$
;

-- DROP FUNCTION public._st_dwithin(geography, geography, float8, bool);

CREATE OR REPLACE FUNCTION public._st_dwithin(geog1 geography, geog2 geography, tolerance double precision, use_spheroid boolean DEFAULT true)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_dwithin$function$
;

-- DROP FUNCTION public._st_dwithinuncached(geography, geography, float8);

CREATE OR REPLACE FUNCTION public._st_dwithinuncached(geography, geography, double precision)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE
AS $function$SELECT $1 OPERATOR(public.&&) public._ST_Expand($2,$3) AND $2 OPERATOR(public.&&) public._ST_Expand($1,$3) AND public._ST_DWithinUnCached($1, $2, $3, true)$function$
;

-- DROP FUNCTION public._st_dwithinuncached(geography, geography, float8, bool);

CREATE OR REPLACE FUNCTION public._st_dwithinuncached(geography, geography, double precision, boolean)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_dwithin_uncached$function$
;

-- DROP FUNCTION public._st_equals(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_equals(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Equals$function$
;

-- DROP FUNCTION public._st_expand(geography, float8);

CREATE OR REPLACE FUNCTION public._st_expand(geography, double precision)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geography_expand$function$
;

-- DROP FUNCTION public._st_geomfromgml(text, int4);

CREATE OR REPLACE FUNCTION public._st_geomfromgml(text, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$geom_from_gml$function$
;

-- DROP FUNCTION public._st_intersects(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_intersects(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Intersects$function$
;

-- DROP FUNCTION public._st_linecrossingdirection(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_linecrossingdirection(line1 geometry, line2 geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_LineCrossingDirection$function$
;

-- DROP FUNCTION public._st_longestline(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_longestline(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_longestline2d$function$
;

-- DROP FUNCTION public._st_maxdistance(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_maxdistance(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_maxdistance2d_linestring$function$
;

-- DROP FUNCTION public._st_orderingequals(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_orderingequals(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_same$function$
;

-- DROP FUNCTION public._st_overlaps(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_overlaps(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$overlaps$function$
;

-- DROP FUNCTION public._st_pointoutside(geography);

CREATE OR REPLACE FUNCTION public._st_pointoutside(geography)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE STRICT
AS '$libdir/postgis-3', $function$geography_point_outside$function$
;

-- DROP FUNCTION public._st_sortablehash(geometry);

CREATE OR REPLACE FUNCTION public._st_sortablehash(geom geometry)
 RETURNS bigint
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$_ST_SortableHash$function$
;

-- DROP FUNCTION public._st_touches(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_touches(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$touches$function$
;

-- DROP FUNCTION public._st_voronoi(geometry, geometry, float8, bool);

CREATE OR REPLACE FUNCTION public._st_voronoi(g1 geometry, clip geometry DEFAULT NULL::geometry, tolerance double precision DEFAULT 0.0, return_polygons boolean DEFAULT true)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 5000
AS '$libdir/postgis-3', $function$ST_Voronoi$function$
;

-- DROP FUNCTION public._st_within(geometry, geometry);

CREATE OR REPLACE FUNCTION public._st_within(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$SELECT public._ST_Contains($2,$1)$function$
;

-- DROP FUNCTION public.addauth(text);

CREATE OR REPLACE FUNCTION public.addauth(text)
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
DECLARE
	lockid alias for $1;
	okay boolean;
	myrec record;
BEGIN
	-- check to see if table exists
	--  if not, CREATE TEMP TABLE mylock (transid xid, lockcode text)
	okay := 'f';
	FOR myrec IN SELECT * FROM pg_class WHERE relname = 'temp_lock_have_table' LOOP
		okay := 't';
	END LOOP;
	IF (okay <> 't') THEN
		CREATE TEMP TABLE temp_lock_have_table (transid xid, lockcode text);
			-- this will only work from pgsql7.4 up
			-- ON COMMIT DELETE ROWS;
	END IF;

	--  INSERT INTO mylock VALUES ( $1)
--	EXECUTE 'INSERT INTO temp_lock_have_table VALUES ( '||
--		quote_literal(getTransactionID()) || ',' ||
--		quote_literal(lockid) ||')';

	INSERT INTO temp_lock_have_table VALUES (getTransactionID(), lockid);

	RETURN true::boolean;
END;
$function$
;

-- DROP FUNCTION public.addgeometrycolumn(varchar, varchar, varchar, int4, varchar, int4, bool);

CREATE OR REPLACE FUNCTION public.addgeometrycolumn(schema_name character varying, table_name character varying, column_name character varying, new_srid integer, new_type character varying, new_dim integer, use_typmod boolean DEFAULT true)
 RETURNS text
 LANGUAGE plpgsql
 STABLE STRICT
AS $function$
DECLARE
	ret  text;
BEGIN
	SELECT public.AddGeometryColumn('',$1,$2,$3,$4,$5,$6,$7) into ret;
	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.addgeometrycolumn(varchar, varchar, varchar, varchar, int4, varchar, int4, bool);

CREATE OR REPLACE FUNCTION public.addgeometrycolumn(catalog_name character varying, schema_name character varying, table_name character varying, column_name character varying, new_srid_in integer, new_type character varying, new_dim integer, use_typmod boolean DEFAULT true)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	rec RECORD;
	sr varchar;
	real_schema name;
	sql text;
	new_srid integer;

BEGIN

	-- Verify geometry type
	IF (postgis_type_name(new_type,new_dim) IS NULL )
	THEN
		RAISE EXCEPTION 'Invalid type name "%(%)" - valid ones are:
	POINT, MULTIPOINT,
	LINESTRING, MULTILINESTRING,
	POLYGON, MULTIPOLYGON,
	CIRCULARSTRING, COMPOUNDCURVE, MULTICURVE,
	CURVEPOLYGON, MULTISURFACE,
	GEOMETRY, GEOMETRYCOLLECTION,
	POINTM, MULTIPOINTM,
	LINESTRINGM, MULTILINESTRINGM,
	POLYGONM, MULTIPOLYGONM,
	CIRCULARSTRINGM, COMPOUNDCURVEM, MULTICURVEM
	CURVEPOLYGONM, MULTISURFACEM, TRIANGLE, TRIANGLEM,
	POLYHEDRALSURFACE, POLYHEDRALSURFACEM, TIN, TINM
	or GEOMETRYCOLLECTIONM', new_type, new_dim;
		RETURN 'fail';
	END IF;

	-- Verify dimension
	IF ( (new_dim >4) OR (new_dim <2) ) THEN
		RAISE EXCEPTION 'invalid dimension';
		RETURN 'fail';
	END IF;

	IF ( (new_type LIKE '%M') AND (new_dim!=3) ) THEN
		RAISE EXCEPTION 'TypeM needs 3 dimensions';
		RETURN 'fail';
	END IF;

	-- Verify SRID
	IF ( new_srid_in > 0 ) THEN
		IF new_srid_in > 998999 THEN
			RAISE EXCEPTION 'AddGeometryColumn() - SRID must be <= %', 998999;
		END IF;
		new_srid := new_srid_in;
		SELECT SRID INTO sr FROM spatial_ref_sys WHERE SRID = new_srid;
		IF NOT FOUND THEN
			RAISE EXCEPTION 'AddGeometryColumn() - invalid SRID';
			RETURN 'fail';
		END IF;
	ELSE
		new_srid := public.ST_SRID('POINT EMPTY'::public.geometry);
		IF ( new_srid_in != new_srid ) THEN
			RAISE NOTICE 'SRID value % converted to the officially unknown SRID value %', new_srid_in, new_srid;
		END IF;
	END IF;

	-- Verify schema
	IF ( schema_name IS NOT NULL AND schema_name != '' ) THEN
		sql := 'SELECT nspname FROM pg_namespace ' ||
			'WHERE text(nspname) = ' || quote_literal(schema_name) ||
			'LIMIT 1';
		RAISE DEBUG '%', sql;
		EXECUTE sql INTO real_schema;

		IF ( real_schema IS NULL ) THEN
			RAISE EXCEPTION 'Schema % is not a valid schemaname', quote_literal(schema_name);
			RETURN 'fail';
		END IF;
	END IF;

	IF ( real_schema IS NULL ) THEN
		RAISE DEBUG 'Detecting schema';
		sql := 'SELECT n.nspname AS schemaname ' ||
			'FROM pg_catalog.pg_class c ' ||
			  'JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace ' ||
			'WHERE c.relkind = ' || quote_literal('r') ||
			' AND n.nspname NOT IN (' || quote_literal('pg_catalog') || ', ' || quote_literal('pg_toast') || ')' ||
			' AND pg_catalog.pg_table_is_visible(c.oid)' ||
			' AND c.relname = ' || quote_literal(table_name);
		RAISE DEBUG '%', sql;
		EXECUTE sql INTO real_schema;

		IF ( real_schema IS NULL ) THEN
			RAISE EXCEPTION 'Table % does not occur in the search_path', quote_literal(table_name);
			RETURN 'fail';
		END IF;
	END IF;

	-- Add geometry column to table
	IF use_typmod THEN
		 sql := 'ALTER TABLE ' ||
			quote_ident(real_schema) || '.' || quote_ident(table_name)
			|| ' ADD COLUMN ' || quote_ident(column_name) ||
			' geometry(' || public.postgis_type_name(new_type, new_dim) || ', ' || new_srid::text || ')';
		RAISE DEBUG '%', sql;
	ELSE
		sql := 'ALTER TABLE ' ||
			quote_ident(real_schema) || '.' || quote_ident(table_name)
			|| ' ADD COLUMN ' || quote_ident(column_name) ||
			' geometry ';
		RAISE DEBUG '%', sql;
	END IF;
	EXECUTE sql;

	IF NOT use_typmod THEN
		-- Add table CHECKs
		sql := 'ALTER TABLE ' ||
			quote_ident(real_schema) || '.' || quote_ident(table_name)
			|| ' ADD CONSTRAINT '
			|| quote_ident('enforce_srid_' || column_name)
			|| ' CHECK (st_srid(' || quote_ident(column_name) ||
			') = ' || new_srid::text || ')' ;
		RAISE DEBUG '%', sql;
		EXECUTE sql;

		sql := 'ALTER TABLE ' ||
			quote_ident(real_schema) || '.' || quote_ident(table_name)
			|| ' ADD CONSTRAINT '
			|| quote_ident('enforce_dims_' || column_name)
			|| ' CHECK (st_ndims(' || quote_ident(column_name) ||
			') = ' || new_dim::text || ')' ;
		RAISE DEBUG '%', sql;
		EXECUTE sql;

		IF ( NOT (new_type = 'GEOMETRY')) THEN
			sql := 'ALTER TABLE ' ||
				quote_ident(real_schema) || '.' || quote_ident(table_name) || ' ADD CONSTRAINT ' ||
				quote_ident('enforce_geotype_' || column_name) ||
				' CHECK (GeometryType(' ||
				quote_ident(column_name) || ')=' ||
				quote_literal(new_type) || ' OR (' ||
				quote_ident(column_name) || ') is null)';
			RAISE DEBUG '%', sql;
			EXECUTE sql;
		END IF;
	END IF;

	RETURN
		real_schema || '.' ||
		table_name || '.' || column_name ||
		' SRID:' || new_srid::text ||
		' TYPE:' || new_type ||
		' DIMS:' || new_dim::text || ' ';
END;
$function$
;

-- DROP FUNCTION public.addgeometrycolumn(varchar, varchar, int4, varchar, int4, bool);

CREATE OR REPLACE FUNCTION public.addgeometrycolumn(table_name character varying, column_name character varying, new_srid integer, new_type character varying, new_dim integer, use_typmod boolean DEFAULT true)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	ret  text;
BEGIN
	SELECT public.AddGeometryColumn('','',$1,$2,$3,$4,$5, $6) into ret;
	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.armor(bytea);

CREATE OR REPLACE FUNCTION public.armor(bytea)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_armor$function$
;

-- DROP FUNCTION public.armor(bytea, _text, _text);

CREATE OR REPLACE FUNCTION public.armor(bytea, text[], text[])
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_armor$function$
;

-- DROP FUNCTION public.bkk_get_circlewise_variety_query(int4);

CREATE OR REPLACE FUNCTION public.bkk_get_circlewise_variety_query(unit_no integer)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    col_list TEXT := '';
    col_defs TEXT := '';
    sum_expr TEXT := '';
    variety TEXT;
    final_sql TEXT;
BEGIN
    -- 1. Build list of varieties with area > 0 for the given unit
    FOR variety IN
        WITH temp AS (
            SELECT c.circle_name, b.farm_id, b.area
            FROM jk_circle_boundries_2025 c
            INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
            LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
            WHERE c.unit = unit_no and (b.status = 'Validated' or b.status = 'Undocumented')
        ), temp2 AS (
            SELECT v.name, v.variety_id, c.farm_id
            FROM jk_cane_variety v
            LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
        )
        SELECT t2.name
        FROM temp t1
        INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
        GROUP BY t2.name
        HAVING SUM(t1.area) > 0
        ORDER BY t2.name
    LOOP
        -- List for the crosstab category query
        col_list := col_list || format('SELECT %L UNION ALL ', variety);

        -- Output columns for pivot_table
        col_defs := col_defs || format('"%s" DOUBLE PRECISION,', variety);

        -- Total area expression (✅ FIXED: no backslashes here)
        sum_expr := sum_expr || format('COALESCE("%s", 0) + ', variety);
    END LOOP;

    -- 2. Handle empty case (no varieties with data)
    IF col_list = '' THEN
        RETURN '-- No varieties with area > 0 found for unit ' || unit_no;
    END IF;

    -- 3. Trim trailing characters
    col_list := left(col_list, length(col_list) - 11);  -- Remove trailing ' UNION ALL '
    col_defs := left(col_defs, length(col_defs) - 1);   -- Remove trailing comma
    sum_expr := left(sum_expr, length(sum_expr) - 3);   -- Remove trailing ' + '

    -- 4. Final query construction
    final_sql := format($sql$
        SELECT 
            *, 
            %s AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT c.circle_name, b.farm_id, b.area
                FROM jk_circle_boundries_2025 c
                INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
                LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
                WHERE c.unit = %s
            ), temp2 AS (
                SELECT v.name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
            )
            SELECT 
                t1.circle_name, 
                t2.name AS variety_name, 
                SUM(t1.area)::float AS total_area
            FROM 
                temp t1 
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
            GROUP BY 
                t1.circle_name, 
                t2.name
            HAVING 
                SUM(t1.area) IS NOT NULL AND SUM(t1.area) > 0
            ORDER BY 
                1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            circle_name TEXT,
            %s
        );
    $sql$, sum_expr, unit_no, col_list, col_defs);

    RETURN final_sql;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_circlewise_variety_total_query(int4);

CREATE OR REPLACE FUNCTION public.bkk_get_circlewise_variety_total_query(unit_no integer)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    variety TEXT;
    sum_columns TEXT := '';
    total_expr TEXT := '';
    col_list TEXT := '';
    col_defs TEXT := '';
    final_sql TEXT;
BEGIN
    -- 1. Collect variety names dynamically
    FOR variety IN
        WITH temp AS (
            SELECT DISTINCT ON (b.farm_id)
                b.farm_id,
                c.circle_name,
                b.area
            FROM jk_circle_boundries_2025 c
            INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
            LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
                AND ST_Intersects(b.shape, a.geom)
            WHERE c.unit = unit_no AND (b.status = 'Validated' OR b.status = 'Undocumented')
        ), temp2 AS (
            SELECT v.name, v.variety_id, c.farm_id
            FROM jk_cane_variety v
            LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
        )
        SELECT t2.name
        FROM temp t1
        INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
        GROUP BY t2.name
        HAVING SUM(t1.area) > 0
        ORDER BY t2.name
    LOOP
        sum_columns := sum_columns || format('SUM("%s") AS "%s",', variety, variety);
        total_expr := total_expr || format('COALESCE("%s",0) + ', variety);
        col_list := col_list || format('SELECT %L UNION ALL ', variety);
        col_defs := col_defs || format('"%s" DOUBLE PRECISION,', variety);
    END LOOP;

    -- If no varieties found
    IF sum_columns = '' THEN
        RETURN '-- No data found for unit ' || unit_no;
    END IF;

    -- Trim trailing comma/plus/UNION
    sum_columns := LEFT(sum_columns, LENGTH(sum_columns) - 1);
    total_expr := LEFT(total_expr, LENGTH(total_expr) - 3);
    col_list := LEFT(col_list, LENGTH(col_list) - 11);
    col_defs := LEFT(col_defs, LENGTH(col_defs) - 1);

    -- 2. Construct the final query
    final_sql := format($f$
        SELECT
            'TOTAL' AS circle_name,
            %s,
            SUM(total_area) AS total_area
        FROM (
            SELECT *,
                   %s AS total_area
            FROM crosstab(
                $ct$
                WITH temp AS (
                    SELECT DISTINCT ON (b.farm_id)
                        b.farm_id,
                        c.circle_name,
                        b.area
                    FROM jk_circle_boundries_2025 c
                    INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
                    LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
                        AND ST_Intersects(b.shape, a.geom)
                    WHERE c.unit = %s AND (b.status = 'Validated' OR b.status = 'Undocumented')
                ), temp2 AS (
                    SELECT v.name, v.variety_id, c.farm_id
                    FROM jk_cane_variety v
                    LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
                )
                SELECT
                    t1.circle_name,
                    t2.name AS variety_name,
                    SUM(t1.area)::float AS total_area
                FROM temp t1
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
                GROUP BY t1.circle_name, t2.name
                HAVING SUM(t1.area) > 0
                ORDER BY 1,2
                $ct$,
                $ct2$
                %s
                $ct2$
            ) AS pivot_table (
                circle_name TEXT,
                %s
            )
        ) AS subquery;
    $f$, sum_columns, total_expr, unit_no, col_list, col_defs);

    RETURN final_sql;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_crop_narrations(varchar, date);

CREATE OR REPLACE FUNCTION public.bkk_get_crop_narrations(f_id character varying, current_date_param date)
 RETURNS TABLE(crop_name text, crop_stage text, narration_english text, narration_urdu text, generic_narration_english text, generic_narration_urdu text)
 LANGUAGE plpgsql
AS $function$
DECLARE
    narration text;
    sowing_date date;
    crp_name varchar;
    age integer;
BEGIN
    -- Check if sowing_date is NULL or empty string
    SELECT b.crop_name
    INTO crp_name
    FROM bkk_faf_farms_v3_2_mat_vw b
    WHERE b.farm_id = f_id;
	
	select max(f.image_date) Into
	sowing_date from farm_ndvi_v3 f WHERE
	f.status ilike '%sowing%' and f.farm_id = f_id and f.image_date < current_date_param;

    -- Return a single row with NULL values if sowing_date is NULL or if the query returns no rows
    IF sowing_date IS NULL THEN
        RETURN QUERY SELECT NULL, NULL, NULL, NULL, NULL, NULL;
    ELSE
        age := current_date_param - sowing_date;

        RETURN QUERY
        SELECT c.crop_name, c.growth_stage, c.narration_english, c.narration_urdu, c.generic_narration_english, c.generic_narration_urdu
        FROM crops_ndvi_translation_v2 c
        WHERE c.crop_name = crp_name
        AND c.start_day <= age
        AND c.end_day > age;

        IF NOT FOUND THEN
            RETURN QUERY SELECT NULL, NULL, NULL, NULL, NULL, NULL;
        END IF;
    END IF;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_query(int4);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_query(unit_id integer)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    column_list TEXT;
    pivot_columns TEXT;
    base_query TEXT;
    final_query TEXT;
BEGIN
    -- Step 1: Get all distinct circle names (quoted literals for VALUES clause)
    SELECT string_agg('SELECT ' || quote_literal(circle_name), ' UNION ALL ')
    INTO column_list
    FROM (
        SELECT DISTINCT circle_name
        FROM jk_circle_boundries_2025
        WHERE unit = unit_id
        ORDER BY circle_name
    ) AS sub;

    -- Step 2: Build pivot columns (used in crosstab column definition)
    SELECT string_agg(quote_ident(circle_name) || ' DOUBLE PRECISION', ', ')
    INTO pivot_columns
    FROM (
        SELECT DISTINCT circle_name
        FROM jk_circle_boundries_2025
        WHERE unit = unit_id
        ORDER BY circle_name
    ) AS sub;

    -- Step 3: Construct the full dynamic query
    base_query := format(
        $f$
        SELECT *, (%s) AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT DISTINCT ON (b.farm_id)
                    b.farm_id,
                    c.circle_name,
                    b.area
                FROM jk_circle_boundries_2025 c
                INNER JOIN jk_agent_boundries_2025 a
                    ON c.circle_name = a.circle_name
                LEFT JOIN bkk_survey_app_data b
                    ON a.msisdn = b.profiled_by
                   AND ST_Intersects(b.shape, a.geom)
                WHERE c.unit = %s
                  AND (b.status = 'Validated' OR b.status = 'Undocumented')
            ), temp2 AS (
                SELECT v.name AS variety_name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c
                    ON v.variety_id = c.variety
            )
            SELECT
                t2.variety_name,
                t1.circle_name,
                SUM(t1.area)::FLOAT AS total_area
            FROM temp t1
            INNER JOIN temp2 t2
              ON t1.farm_id = t2.farm_id
            GROUP BY t2.variety_name, t1.circle_name
            HAVING SUM(t1.area) > 0
            ORDER BY 1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            variety_name TEXT,
            %s
        )
        $f$,
        -- total_area calculation expression
        (SELECT string_agg('COALESCE(' || quote_ident(circle_name) || ', 0)', ' + ')
         FROM (
             SELECT DISTINCT circle_name
             FROM jk_circle_boundries_2025
             WHERE unit = unit_id
             ORDER BY circle_name
         ) AS col_sum),
        unit_id,
        column_list,
        pivot_columns
    );

    RETURN base_query;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_query_v2(int4, text, text);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_query_v2(unit_id integer, circle_filter text DEFAULT NULL::text, variety_filter text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    column_list TEXT;
    pivot_columns TEXT;
    base_query TEXT;
BEGIN
    -- Step 1: Get filtered circle names for pivot column list
    SELECT string_agg('SELECT ' || quote_literal(circle_name), ' UNION ALL ')
    INTO column_list
    FROM (
        SELECT DISTINCT circle_name
        FROM jk_circle_boundries_2025
        WHERE unit = unit_id
          AND (circle_filter IS NULL OR circle_name ILIKE circle_filter)
        ORDER BY circle_name
    ) AS sub;

    -- Step 2: Build pivot column definitions
    SELECT string_agg(quote_ident(circle_name) || ' DOUBLE PRECISION', ', ')
    INTO pivot_columns
    FROM (
        SELECT DISTINCT circle_name
        FROM jk_circle_boundries_2025
        WHERE unit = unit_id
          AND (circle_filter IS NULL OR circle_name ILIKE circle_filter)
        ORDER BY circle_name
    ) AS sub;

    -- Step 3: Construct the full dynamic query
    base_query := format(
        $f$
        SELECT *, (%s) AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT DISTINCT ON (b.farm_id)
                    b.farm_id,
                    c.circle_name,
                    b.area
                FROM jk_circle_boundries_2025 c
                INNER JOIN jk_agent_boundries_2025 a
                    ON c.circle_name = a.circle_name
                LEFT JOIN bkk_survey_app_data b
                    ON a.msisdn = b.profiled_by
                   AND ST_Intersects(b.shape, a.geom)
                WHERE c.unit = %s
                  AND (b.status = 'Validated' OR b.status = 'Undocumented')
                  AND (%L IS NULL OR c.circle_name ILIKE %L)
            ), temp2 AS (
                SELECT v.name AS variety_name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c
                    ON v.variety_id = c.variety
                WHERE %L IS NULL OR v.name ILIKE %L
            )
            SELECT
                t2.variety_name,
                t1.circle_name,
                SUM(t1.area)::FLOAT AS total_area
            FROM temp t1
            INNER JOIN temp2 t2
              ON t1.farm_id = t2.farm_id
            GROUP BY t2.variety_name, t1.circle_name
            HAVING SUM(t1.area) > 0
            ORDER BY 1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            variety_name TEXT,
            %s
        )
        $f$,
        -- total_area calculation expression
        (SELECT string_agg('COALESCE(' || quote_ident(circle_name) || ', 0)', ' + ')
         FROM (
             SELECT DISTINCT circle_name
             FROM jk_circle_boundries_2025
             WHERE unit = unit_id
               AND (circle_filter IS NULL OR circle_name ILIKE circle_filter)
         ) AS col_sum),
        unit_id,
        circle_filter, circle_filter,
        variety_filter, variety_filter,
        column_list,
        pivot_columns
    );

    RETURN base_query;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_query_v3(int4, varchar, text, text);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_query_v3(unit_id integer, partner character varying, circle_filter text DEFAULT NULL::text, variety_filter text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    column_list TEXT;
    pivot_columns TEXT;
    base_query TEXT;
BEGIN
    -- Step 1: Get distinct circle names for pivot column list
    SELECT string_agg('SELECT ' || quote_literal(sub.circle), ' UNION ALL ')
    INTO column_list
    FROM (
        SELECT DISTINCT g.circle
        FROM jk_growers_data g
        INNER JOIN bkk_survey_app_data b
            ON g.passbook_no = b.passbook_id
        WHERE g.unit = unit_id
          AND b.partner_id = partner
          AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
        ORDER BY g.circle
    ) sub;

    -- Step 2: Build pivot column definitions
    SELECT string_agg(quote_ident(sub.circle) || ' DOUBLE PRECISION', ', ')
    INTO pivot_columns
    FROM (
        SELECT DISTINCT g.circle
        FROM jk_growers_data g
        INNER JOIN bkk_survey_app_data b
            ON g.passbook_no = b.passbook_id
        WHERE g.unit = unit_id
          AND b.partner_id = partner
          AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
        ORDER BY g.circle
    ) sub;

    -- Step 3: Construct the dynamic query
    base_query := format(
        $f$
        SELECT *, (%s) AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT DISTINCT ON (b.farm_id)
                    b.farm_id,
                    g.circle AS circle_name,
                    b.area
                FROM bkk_survey_app_data b
                INNER JOIN jk_growers_data g
                    ON b.passbook_id = g.passbook_no
                WHERE g.unit = %s
                  AND b.partner_id = %L
                  AND (b.status = 'Validated' OR b.status = 'Undocumented')
                  AND (%L IS NULL OR g.circle ILIKE %L)
            ), temp2 AS (
                SELECT v.name AS variety_name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c
                    ON v.variety_id = c.variety
                WHERE %L IS NULL OR v.name ILIKE %L
            )
            SELECT
                t2.variety_name,
                t1.circle_name,
                SUM(t1.area)::FLOAT AS total_area
            FROM temp t1
            INNER JOIN temp2 t2
              ON t1.farm_id = t2.farm_id
            GROUP BY t2.variety_name, t1.circle_name
            HAVING SUM(t1.area) > 0
            ORDER BY 1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            variety_name TEXT,
            %s
        )
        $f$,
        -- Total area calculation
        (SELECT string_agg('COALESCE(' || quote_ident(sub.circle) || ', 0)', ' + ')
         FROM (
             SELECT DISTINCT g.circle
             FROM jk_growers_data g
             INNER JOIN bkk_survey_app_data b
                 ON g.passbook_no = b.passbook_id
             WHERE g.unit = unit_id
               AND b.partner_id = partner
               AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
         ) sub),
        unit_id,
        partner,
        circle_filter, circle_filter,
        variety_filter, variety_filter,
        column_list,
        pivot_columns
    );

    RETURN base_query;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_query_v3(varchar, text, text);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_query_v3(partner_id character varying, circle_filter text DEFAULT NULL::text, variety_filter text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    column_list TEXT;
    pivot_columns TEXT;
    base_query TEXT;
BEGIN
    -- Step 1: Get filtered circle names for pivot column list
    SELECT string_agg('SELECT ' || quote_literal(circle), ' UNION ALL ')
    INTO column_list
    FROM (
        SELECT DISTINCT circle
        FROM jk_growers_data
        WHERE (circle_filter IS NULL OR circle ILIKE circle_filter)
        ORDER BY circle
    ) AS sub;

    -- Step 2: Build pivot column definitions
    SELECT string_agg(quote_ident(circle) || ' DOUBLE PRECISION', ', ')
    INTO pivot_columns
    FROM (
        SELECT DISTINCT circle
        FROM jk_growers_data
        WHERE (circle_filter IS NULL OR circle ILIKE circle_filter)
        ORDER BY circle
    ) AS sub;

    -- Step 3: Construct the full dynamic query
    base_query := format(
        $f$
        SELECT *, (%s) AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT DISTINCT ON (b.farm_id)
                    b.farm_id,
                    g.circle AS circle_name,
                    b.area
                FROM bkk_survey_app_data b
                INNER JOIN jk_growers_data g
                    ON b.passbook_id = g.passbook_no
                WHERE (b.status = 'Validated' OR b.status = 'Undocumented')
                  AND (%L IS NULL OR g.circle ILIKE %L)
                  AND b.partner_id = %L
            ), temp2 AS (
                SELECT v.name AS variety_name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c
                    ON v.variety_id = c.variety
                WHERE %L IS NULL OR v.name ILIKE %L
            )
            SELECT
                t2.variety_name,
                t1.circle_name,
                SUM(t1.area)::FLOAT AS total_area
            FROM temp t1
            INNER JOIN temp2 t2
              ON t1.farm_id = t2.farm_id
            GROUP BY t2.variety_name, t1.circle_name
            HAVING SUM(t1.area) > 0
            ORDER BY 1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            variety_name TEXT,
            %s
        )
        $f$,
        -- total_area calculation expression
        (SELECT string_agg('COALESCE(' || quote_ident(circle) || ', 0)', ' + ')
         FROM (
             SELECT DISTINCT circle
             FROM jk_growers_data
             WHERE (circle_filter IS NULL OR circle ILIKE circle_filter)
         ) AS col_sum),
        circle_filter, circle_filter,
        partner_id,
        variety_filter, variety_filter,
        column_list,
        pivot_columns
    );

    RETURN base_query;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_query_v3(int4, uuid, text, text);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_query_v3(unit_id integer, partner uuid, circle_filter text DEFAULT NULL::text, variety_filter text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    column_list TEXT;
    pivot_columns TEXT;
    base_query TEXT;
BEGIN
    -- Step 1: Get distinct circle names for pivot column list
    SELECT string_agg('SELECT ' || quote_literal(g.circle), ' UNION ALL ')
    INTO column_list
    FROM (
        SELECT DISTINCT g.circle
        FROM jk_growers_data g
        INNER JOIN bkk_survey_app_data b
            ON g.passbook_no = b.passbook_id
        WHERE g.unit = unit_id
          AND b.partner_id = partner
          AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
        ORDER BY g.circle
    ) sub;

    -- Step 2: Build pivot column definitions
    SELECT string_agg(quote_ident(g.circle) || ' DOUBLE PRECISION', ', ')
    INTO pivot_columns
    FROM (
        SELECT DISTINCT g.circle
        FROM jk_growers_data g
        INNER JOIN bkk_survey_app_data b
            ON g.passbook_no = b.passbook_id
        WHERE g.unit = unit_id
          AND b.partner_id = partner
          AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
        ORDER BY g.circle
    ) sub;

    -- Step 3: Construct the dynamic query
    base_query := format(
        $f$
        SELECT *, (%s) AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT DISTINCT ON (b.farm_id)
                    b.farm_id,
                    g.circle AS circle_name,
                    b.area
                FROM bkk_survey_app_data b
                INNER JOIN jk_growers_data g
                    ON b.passbook_id = g.passbook_no
                WHERE g.unit = %s
                  AND b.partner_id = %L
                  AND (b.status = 'Validated' OR b.status = 'Undocumented')
                  AND (%L IS NULL OR g.circle ILIKE %L)
            ), temp2 AS (
                SELECT v.name AS variety_name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c
                    ON v.variety_id = c.variety
                WHERE %L IS NULL OR v.name ILIKE %L
            )
            SELECT
                t2.variety_name,
                t1.circle_name,
                SUM(t1.area)::FLOAT AS total_area
            FROM temp t1
            INNER JOIN temp2 t2
              ON t1.farm_id = t2.farm_id
            GROUP BY t2.variety_name, t1.circle_name
            HAVING SUM(t1.area) > 0
            ORDER BY 1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            variety_name TEXT,
            %s
        )
        $f$,
        -- Total area calculation
        (SELECT string_agg('COALESCE(' || quote_ident(g.circle) || ', 0)', ' + ')
         FROM (
             SELECT DISTINCT g.circle
             FROM jk_growers_data g
             INNER JOIN bkk_survey_app_data b
                 ON g.passbook_no = b.passbook_id
             WHERE g.unit = unit_id
               AND b.partner_id = partner
               AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
         ) col_sum),
        unit_id,
        partner_id::text,
        circle_filter, circle_filter,
        variety_filter, variety_filter,
        column_list,
        pivot_columns
    );

    RETURN base_query;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_total_query(int4);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_total_query(unit_no integer)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    circle TEXT;
    sum_columns TEXT := '';
    total_expr TEXT := '';
    col_list TEXT := '';
    col_defs TEXT := '';
    final_sql TEXT;
BEGIN
    -- 1. Collect circle names dynamically
    FOR circle IN
        SELECT DISTINCT circle_name
        FROM jk_circle_boundries_2025
        WHERE unit = unit_no
        ORDER BY circle_name
    LOOP
        sum_columns := sum_columns || format('SUM(%I) AS %I,', circle, circle);
        total_expr := total_expr || format('COALESCE(%I,0) + ', circle);
        col_list := col_list || format('SELECT %L UNION ALL ', circle);
        col_defs := col_defs || format('%I DOUBLE PRECISION,', circle);
    END LOOP;

    -- If no circles found
    IF sum_columns = '' THEN
        RETURN '-- No data found for unit ' || unit_no;
    END IF;

    -- Trim trailing comma/plus/UNION
    sum_columns := LEFT(sum_columns, LENGTH(sum_columns) - 1);
    total_expr := LEFT(total_expr, LENGTH(total_expr) - 3);
    col_list := LEFT(col_list, LENGTH(col_list) - 11);
    col_defs := LEFT(col_defs, LENGTH(col_defs) - 1);

    -- 2. Construct the final SQL query
    final_sql := format($f$
        SELECT
            'TOTAL' AS variety_name,
            %s,
            SUM(total_area) AS total_area
        FROM (
            SELECT *,
                   %s AS total_area
            FROM crosstab(
                $ct$
                WITH temp AS (
                    SELECT DISTINCT ON (b.farm_id)
                        b.farm_id,
                        c.circle_name,
                        b.area
                    FROM jk_circle_boundries_2025 c
                    INNER JOIN jk_agent_boundries_2025 a
                        ON c.circle_name = a.circle_name
                    LEFT JOIN bkk_survey_app_data b
                        ON a.msisdn = b.profiled_by
                       AND ST_Intersects(b.shape, a.geom)
                    WHERE c.unit = %s
                      AND (b.status = 'Validated' OR b.status = 'Undocumented')
                ), temp2 AS (
                    SELECT v.name AS variety_name, v.variety_id, c.farm_id
                    FROM jk_cane_variety v
                    LEFT JOIN bkk_survey_app_crops_data c
                        ON v.variety_id = c.variety
                )
                SELECT
                    t2.variety_name,
                    t1.circle_name,
                    SUM(t1.area)::float AS total_area
                FROM temp t1
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
                GROUP BY t2.variety_name, t1.circle_name
                HAVING SUM(t1.area) > 0
                ORDER BY 1,2
                $ct$,
                $ct2$
                %s
                $ct2$
            ) AS pivot_table (
                variety_name TEXT,
                %s
            )
        ) AS subquery;
    $f$, sum_columns, total_expr, unit_no, col_list, col_defs);

    RETURN final_sql;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_total_query_v2(int4, text, text);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_total_query_v2(unit_no integer, circle_filter text DEFAULT NULL::text, variety_filter text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    circle TEXT;
    sum_columns TEXT := '';
    total_expr TEXT := '';
    col_list TEXT := '';
    col_defs TEXT := '';
    final_sql TEXT;
BEGIN
    -- 1. Collect filtered circle names dynamically
    FOR circle IN
        SELECT DISTINCT circle_name
        FROM jk_circle_boundries_2025
        WHERE unit = unit_no
          AND (circle_filter IS NULL OR circle_name ILIKE circle_filter)
        ORDER BY circle_name
    LOOP
        sum_columns := sum_columns || format('SUM(%I) AS %I,', circle, circle);
        total_expr := total_expr || format('COALESCE(%I,0) + ', circle);
        col_list := col_list || format('SELECT %L UNION ALL ', circle);
        col_defs := col_defs || format('%I DOUBLE PRECISION,', circle);
    END LOOP;

    -- If no circles found
    IF sum_columns = '' THEN
        RETURN '-- No data found for unit ' || unit_no;
    END IF;

    -- Trim trailing characters
    sum_columns := LEFT(sum_columns, LENGTH(sum_columns) - 1);
    total_expr := LEFT(total_expr, LENGTH(total_expr) - 3);
    col_list := LEFT(col_list, LENGTH(col_list) - 11);
    col_defs := LEFT(col_defs, LENGTH(col_defs) - 1);

    -- 2. Construct the final SQL query with filters
    final_sql := format($f$
        SELECT
            'TOTAL' AS variety_name,
            %s,
            SUM(total_area) AS total_area
        FROM (
            SELECT *,
                   %s AS total_area
            FROM crosstab(
                $ct$
                WITH temp AS (
                    SELECT DISTINCT ON (b.farm_id)
                        b.farm_id,
                        c.circle_name,
                        b.area
                    FROM jk_circle_boundries_2025 c
                    INNER JOIN jk_agent_boundries_2025 a
                        ON c.circle_name = a.circle_name
                    LEFT JOIN bkk_survey_app_data b
                        ON a.msisdn = b.profiled_by
                       AND ST_Intersects(b.shape, a.geom)
                    WHERE c.unit = %s
                      AND (b.status = 'Validated' OR b.status = 'Undocumented')
                      AND (%L IS NULL OR c.circle_name ILIKE %L)
                ), temp2 AS (
                    SELECT v.name AS variety_name, v.variety_id, c.farm_id
                    FROM jk_cane_variety v
                    LEFT JOIN bkk_survey_app_crops_data c
                        ON v.variety_id = c.variety
                    WHERE %L IS NULL OR v.name ILIKE %L
                )
                SELECT
                    t2.variety_name,
                    t1.circle_name,
                    SUM(t1.area)::float AS total_area
                FROM temp t1
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
                GROUP BY t2.variety_name, t1.circle_name
                HAVING SUM(t1.area) > 0
                ORDER BY 1, 2
                $ct$,
                $ct2$
                %s
                $ct2$
            ) AS pivot_table (
                variety_name TEXT,
                %s
            )
        ) AS subquery;
    $f$,
        sum_columns,
        total_expr,
        unit_no,
        circle_filter, circle_filter,
        variety_filter, variety_filter,
        col_list,
        col_defs
    );

    RETURN final_sql;
END;
$function$
;

-- DROP FUNCTION public.bkk_get_varietywise_circle_total_query_v3(int4, varchar, text, text);

CREATE OR REPLACE FUNCTION public.bkk_get_varietywise_circle_total_query_v3(unit_no integer, partner character varying, circle_filter text DEFAULT NULL::text, variety_filter text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    circle TEXT;
    sum_columns TEXT := '';
    total_expr TEXT := '';
    col_list TEXT := '';
    col_defs TEXT := '';
    final_sql TEXT;
BEGIN
    -- 1. Collect filtered circle names dynamically
    FOR circle IN
        SELECT DISTINCT g.circle
        FROM jk_growers_data g
        INNER JOIN bkk_survey_app_data b
            ON g.passbook_no = b.passbook_id
        WHERE g.unit = unit_no
          AND b.partner_id = partner
          AND (circle_filter IS NULL OR g.circle ILIKE circle_filter)
        ORDER BY g.circle
    LOOP
        sum_columns := sum_columns || format('SUM(%I) AS %I,', circle, circle);
        total_expr := total_expr || format('COALESCE(%I,0) + ', circle);
        col_list := col_list || format('SELECT %L UNION ALL ', circle);
        col_defs := col_defs || format('%I DOUBLE PRECISION,', circle);
    END LOOP;

    -- If no circles found
    IF sum_columns = '' THEN
        RETURN '-- No data found for unit ' || unit_no;
    END IF;

    -- Trim trailing characters
    sum_columns := LEFT(sum_columns, LENGTH(sum_columns) - 1);
    total_expr := LEFT(total_expr, LENGTH(total_expr) - 3);
    col_list := LEFT(col_list, LENGTH(col_list) - 11);
    col_defs := LEFT(col_defs, LENGTH(col_defs) - 1);

    -- 2. Construct the final SQL query with filters
    final_sql := format($f$
        SELECT
            'TOTAL' AS variety_name,
            %s,
            SUM(total_area) AS total_area
        FROM (
            SELECT *,
                   %s AS total_area
            FROM crosstab(
                $ct$
                WITH temp AS (
                    SELECT DISTINCT ON (b.farm_id)
                        b.farm_id,
                        g.circle AS circle_name,
                        b.area
                    FROM bkk_survey_app_data b
                    INNER JOIN jk_growers_data g
                        ON b.passbook_id = g.passbook_no
                    WHERE g.unit = %s
                      AND b.partner_id = %L
                      AND (b.status = 'Validated' OR b.status = 'Undocumented')
                      AND (%L IS NULL OR g.circle ILIKE %L)
                ), temp2 AS (
                    SELECT v.name AS variety_name, v.variety_id, c.farm_id
                    FROM jk_cane_variety v
                    LEFT JOIN bkk_survey_app_crops_data c
                        ON v.variety_id = c.variety
                    WHERE %L IS NULL OR v.name ILIKE %L
                )
                SELECT
                    t2.variety_name,
                    t1.circle_name,
                    SUM(t1.area)::float AS total_area
                FROM temp t1
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
                GROUP BY t2.variety_name, t1.circle_name
                HAVING SUM(t1.area) > 0
                ORDER BY 1, 2
                $ct$,
                $ct2$
                %s
                $ct2$
            ) AS pivot_table (
                variety_name TEXT,
                %s
            )
        ) AS subquery;
    $f$,
        sum_columns,
        total_expr,
        unit_no,
        partner::text,
        circle_filter, circle_filter,
        variety_filter, variety_filter,
        col_list,
        col_defs
    );

    RETURN final_sql;
END;
$function$
;

-- DROP FUNCTION public.bkk_insert_into_wfm_category_lov();

CREATE OR REPLACE FUNCTION public.bkk_insert_into_wfm_category_lov()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Insert visit_category
  IF NEW.visit_category IS NOT NULL THEN
    INSERT INTO wfm_category_lov(name, type)
    VALUES (NEW.visit_category, 'Visit')
    ON CONFLICT DO NOTHING;
  END IF;

  -- Insert location_type
  IF NEW.location_type IS NOT NULL THEN
    INSERT INTO wfm_category_lov(name, type)
    VALUES (NEW.location_type, 'Location')
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.bkk_insert_survey_vi_log();

CREATE OR REPLACE FUNCTION public.bkk_insert_survey_vi_log()
 RETURNS SETOF character varying
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    insert_count INTEGER;
BEGIN
    -- Insert new farms from mat view into vi_log
    INSERT INTO survey_vi_log (gid, geom)
    SELECT DISTINCT gid, geom
    FROM swabi_digitized_classified a
    WHERE geom IS NOT NULL
    AND ST_SRID(geom) = 4326
    AND NOT EXISTS (
        SELECT 1 FROM survey_vi_log b WHERE b.gid = a.gid
    );

    -- Get the count of rows inserted
    GET DIAGNOSTICS insert_count = ROW_COUNT;

    -- Return 'data inserted' if rows were inserted
    IF insert_count > 0 THEN
        RETURN NEXT 'data inserted';
    ELSE
        RETURN NEXT 'no data inserted';
    END IF;

    -- Return the function
    RETURN;
END;
$function$
;

-- DROP FUNCTION public.bkk_refresh_portal_data();

CREATE OR REPLACE FUNCTION public.bkk_refresh_portal_data()
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    status TEXT;
BEGIN
    -- Refresh materialized views
    BEGIN
        REFRESH MATERIALIZED VIEW bkk_faf_partnerfarms_mat_vw;
        status := 'Materialized view bkk_faf_partnerfarms_mat_vw refreshed successfully';
    EXCEPTION
        WHEN OTHERS THEN
            status := 'Error refreshing materialized view bkk_faf_partnerfarms_mat_vw: ' || SQLERRM;
    END;

    BEGIN
        REFRESH MATERIALIZED VIEW bkk_partner_crops_basline_thresholds;
        status := status || E'\n\n' || 'Materialized view bkk_partner_crops_basline_thresholds refreshed successfully';
    EXCEPTION
        WHEN OTHERS THEN
            status := status || E'\n\n' || 'Error refreshing materialized view bkk_partner_crops_basline_thresholds: ' || SQLERRM;
    END;

    BEGIN
        REFRESH MATERIALIZED VIEW bkk_faf_partnerfarms_baseline_mat_vw;
        status := status || E'\n\n' || 'Materialized view bkk_faf_partnerfarms_baseline_mat_vw refreshed successfully';
    EXCEPTION
        WHEN OTHERS THEN
            status := status || E'\n\n' || 'Error refreshing materialized view bkk_faf_partnerfarms_baseline_mat_vw: ' || SQLERRM;
    END;

    BEGIN
        REFRESH MATERIALIZED VIEW bkk_latest_health_status;
        status := status || E'\n\n' || 'Materialized view bkk_latest_health_status refreshed successfully';
    EXCEPTION
        WHEN OTHERS THEN
            status := status || E'\n\n' || 'Error refreshing materialized view bkk_latest_health_status: ' || SQLERRM;
    END;

    BEGIN
        REFRESH MATERIALIZED VIEW bkk_latest_partners_anomalies;
        status := status || E'\n\n' || 'Materialized view bkk_latest_partners_anomalies refreshed successfully';
    EXCEPTION
        WHEN OTHERS THEN
            status := status || E'\n\n' || 'Error refreshing materialized view bkk_latest_partners_anomalies: ' || SQLERRM;
    END;

    RETURN status;
END;
$function$
;

-- DROP FUNCTION public.bkk_set_srid_4326();

CREATE OR REPLACE FUNCTION public.bkk_set_srid_4326()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  IF NEW.shape IS NOT NULL THEN
    NEW.shape := ST_SetSRID(NEW.shape, 4326);
  END IF;
  RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.bkk_update_activities_date_column();

CREATE OR REPLACE FUNCTION public.bkk_update_activities_date_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- If completed_dt is NULL, use assigned_dt, otherwise use completed_dt
    NEW.date := (COALESCE(NEW.completed_dt, NEW.assigned_dt) + INTERVAL '5 hours')::DATE;
    RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.bkk_update_anomaly_area();

CREATE OR REPLACE FUNCTION public.bkk_update_anomaly_area()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
    UPDATE farm_ndvi_anomaly a
    SET anomaly_area = (ST_Area(ST_GeomFromGeoJSON(filtered_features.geometry)::geography) * 0.000247105::double precision) 
    FROM (
        SELECT
            f.farm_id,
            f.image_date,
            feature->>'geometry' AS geometry
        FROM
            farm_ndvi_v3 f
            CROSS JOIN LATERAL json_array_elements(f.ndvi_vector->'features') AS feature
        WHERE
            feature->'properties'->>'anomaly_check' = 'yes' and f.farm_id in (select farm_id from bkk_faf_farms_v3_2_mat_vw where profiled_by = '923055547472')
    ) AS filtered_features
    WHERE
        a.farm_id = filtered_features.farm_id AND a.image_date = filtered_features.image_date;
END;
$function$
;

-- DROP FUNCTION public.bkk_update_survey_data();

CREATE OR REPLACE FUNCTION public.bkk_update_survey_data()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Update kobo_survey_vi_log with new farms
INSERT INTO survey_vi_log (gid, geom)
SELECT gid, geom
FROM swabi_digitized_classified sdc
WHERE st_isvalid(sdc.geom) and NOT EXISTS (
    SELECT 1
    FROM survey_vi_log svl
    WHERE sdc.gid = svl.gid
);


  -- Update tile_id in survey_vi_log
  UPDATE survey_vi_log
  SET tile_id = t.name
  FROM sentinel_2_index_pakistan t
  WHERE st_contains(t.geom, survey_vi_log.geom)
    AND tile_id IS NULL
    AND st_isvalid(survey_vi_log.geom);

  RETURN;
END;
$function$
;

-- DROP FUNCTION public.bkk_update_survey_vi_log();

CREATE OR REPLACE FUNCTION public.bkk_update_survey_vi_log()
 RETURNS character varying
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
    update_count INTEGER;
BEGIN
    -- Update tile_id in vi_log
    UPDATE survey_vi_log
    SET tile_id = t.name
    FROM sentinel_2_index_pakistan t
    WHERE ST_IsValid(survey_vi_log.geom) AND ST_Contains(t.geom, survey_vi_log.geom)
    AND tile_id IS NULL
    AND ST_SRID(survey_vi_log.geom) = 4326;

    -- Get the count of rows updated
    GET DIAGNOSTICS update_count = ROW_COUNT;

    -- Construct the status string
    IF update_count > 0 THEN
        RETURN 'Updates completed';
    ELSE
        RETURN 'No updates performed';
    END IF;
END;
$function$
;

-- DROP FUNCTION public.bkkgetcirclewisevaraities();

CREATE OR REPLACE FUNCTION public.bkkgetcirclewisevaraities()
 RETURNS SETOF record
 LANGUAGE plpgsql
AS $function$
DECLARE
    col_list TEXT := '';
    col_defs TEXT := '';
    variety TEXT;
    query TEXT;
BEGIN
    -- Step 1: Collect varieties with non-zero area
    FOR variety IN
        WITH temp AS (
            SELECT c.circle_name, b.farm_id, b.area
            FROM jk_circle_boundries_2025 c
            INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
            LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
            WHERE c.unit = 2
        ), temp2 AS (
            SELECT v.name, v.variety_id, c.farm_id
            FROM jk_cane_variety v
            LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
        )
        SELECT t2.name
        FROM temp t1
        INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
        GROUP BY t2.name
        HAVING SUM(t1.area) > 0
        ORDER BY t2.name
    LOOP
        col_list := col_list || format($f$SELECT %L$f$, variety) || ' UNION ALL ';
        col_defs := col_defs || format($f$"%s" DOUBLE PRECISION,$f$, variety);
    END LOOP;

    -- Remove last comma and UNION ALL
    col_list := left(col_list, length(col_list) - 11);
    col_defs := left(col_defs, length(col_defs) - 1);

    -- Step 2: Build the final crosstab query
    query := format($sql$
        SELECT * FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT c.circle_name, b.farm_id, b.area
                FROM jk_circle_boundries_2025 c
                INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
                LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
                WHERE c.unit = 2
            ), temp2 AS (
                SELECT v.name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
            )
            SELECT 
                t1.circle_name, 
                t2.name AS variety_name, 
                SUM(t1.area)::float AS total_area
            FROM 
                temp t1 
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
            GROUP BY 
                t1.circle_name, 
                t2.name
            HAVING 
                SUM(t1.area) IS NOT NULL AND SUM(t1.area) > 0
            ORDER BY 
                1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            circle_name TEXT,
            %s
        );
    $sql$, col_list, col_defs);

    -- Step 3: Execute dynamically and return results
    RETURN QUERY EXECUTE query;
END;
$function$
;

-- DROP FUNCTION public.box(geometry);

CREATE OR REPLACE FUNCTION public.box(geometry)
 RETURNS box
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_to_BOX$function$
;

-- DROP FUNCTION public.box(box3d);

CREATE OR REPLACE FUNCTION public.box(box3d)
 RETURNS box
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_to_BOX$function$
;

-- DROP FUNCTION public.box2d(geometry);

CREATE OR REPLACE FUNCTION public.box2d(geometry)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_to_BOX2D$function$
;

-- DROP FUNCTION public.box2d(box3d);

CREATE OR REPLACE FUNCTION public.box2d(box3d)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_to_BOX2D$function$
;

-- DROP FUNCTION public.box2d_in(cstring);

CREATE OR REPLACE FUNCTION public.box2d_in(cstring)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX2D_in$function$
;

-- DROP FUNCTION public.box2d_out(box2d);

CREATE OR REPLACE FUNCTION public.box2d_out(box2d)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX2D_out$function$
;

-- DROP FUNCTION public.box2df_in(cstring);

CREATE OR REPLACE FUNCTION public.box2df_in(cstring)
 RETURNS box2df
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$box2df_in$function$
;

-- DROP FUNCTION public.box2df_out(box2df);

CREATE OR REPLACE FUNCTION public.box2df_out(box2df)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$box2df_out$function$
;

-- DROP FUNCTION public.box3d(geometry);

CREATE OR REPLACE FUNCTION public.box3d(geometry)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_to_BOX3D$function$
;

-- DROP FUNCTION public.box3d(box2d);

CREATE OR REPLACE FUNCTION public.box3d(box2d)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX2D_to_BOX3D$function$
;

-- DROP FUNCTION public.box3d_in(cstring);

CREATE OR REPLACE FUNCTION public.box3d_in(cstring)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_in$function$
;

-- DROP FUNCTION public.box3d_out(box3d);

CREATE OR REPLACE FUNCTION public.box3d_out(box3d)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_out$function$
;

-- DROP FUNCTION public.box3dtobox(box3d);

CREATE OR REPLACE FUNCTION public.box3dtobox(box3d)
 RETURNS box
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_to_BOX$function$
;

-- DROP FUNCTION public."bytea"(geometry);

CREATE OR REPLACE FUNCTION public.bytea(geometry)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_to_bytea$function$
;

-- DROP FUNCTION public."bytea"(geography);

CREATE OR REPLACE FUNCTION public.bytea(geography)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_to_bytea$function$
;

-- DROP FUNCTION public.check_sowing_conditions();

CREATE OR REPLACE FUNCTION public.check_sowing_conditions()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
	    -- If the column contains 'Harvesting Date', update the corresponding row
    IF NEW.status ILIKE '%harvesting date%' THEN
        UPDATE temp_crop_details
        SET harvest_date = NEW.image_date
        WHERE farm_id = NEW.farm_id::uuid
        AND sowing_date = (
            SELECT Max(sowing_date)
            FROM temp_crop_details
            WHERE farm_id = NEW.farm_id::uuid
        );
    END IF;
	
    -- If the column contains 'Sowing Date', insert a new row in the other table
    IF NEW.status ILIKE '%sowing date%' THEN
        INSERT INTO temp_crop_details(farm_id, sowing_date)
        VALUES (NEW.farm_id::uuid, NEW.image_date);  -- Assume both are correct types
    END IF;

    RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.checkauth(text, text, text);

CREATE OR REPLACE FUNCTION public.checkauth(text, text, text)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
DECLARE
	schema text;
BEGIN
	IF NOT LongTransactionsEnabled() THEN
		RAISE EXCEPTION 'Long transaction support disabled, use EnableLongTransaction() to enable.';
	END IF;

	if ( $1 != '' ) THEN
		schema = $1;
	ELSE
		SELECT current_schema() into schema;
	END IF;

	-- TODO: check for an already existing trigger ?

	EXECUTE 'CREATE TRIGGER check_auth BEFORE UPDATE OR DELETE ON '
		|| quote_ident(schema) || '.' || quote_ident($2)
		||' FOR EACH ROW EXECUTE PROCEDURE CheckAuthTrigger('
		|| quote_literal($3) || ')';

	RETURN 0;
END;
$function$
;

-- DROP FUNCTION public.checkauth(text, text);

CREATE OR REPLACE FUNCTION public.checkauth(text, text)
 RETURNS integer
 LANGUAGE sql
AS $function$ SELECT CheckAuth('', $1, $2) $function$
;

-- DROP FUNCTION public.checkauthtrigger();

CREATE OR REPLACE FUNCTION public.checkauthtrigger()
 RETURNS trigger
 LANGUAGE c
AS '$libdir/postgis-3', $function$check_authorization$function$
;

-- DROP FUNCTION public.connectby(text, text, text, text, int4, text);

CREATE OR REPLACE FUNCTION public.connectby(text, text, text, text, integer, text)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$connectby_text$function$
;

-- DROP FUNCTION public.connectby(text, text, text, text, text, int4);

CREATE OR REPLACE FUNCTION public.connectby(text, text, text, text, text, integer)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$connectby_text_serial$function$
;

-- DROP FUNCTION public.connectby(text, text, text, text, int4);

CREATE OR REPLACE FUNCTION public.connectby(text, text, text, text, integer)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$connectby_text$function$
;

-- DROP FUNCTION public.connectby(text, text, text, text, text, int4, text);

CREATE OR REPLACE FUNCTION public.connectby(text, text, text, text, text, integer, text)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$connectby_text_serial$function$
;

-- DROP FUNCTION public.contains_2d(box2df, geometry);

CREATE OR REPLACE FUNCTION public.contains_2d(box2df, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains_box2df_geom_2d$function$
;

-- DROP FUNCTION public.contains_2d(box2df, box2df);

CREATE OR REPLACE FUNCTION public.contains_2d(box2df, box2df)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains_box2df_box2df_2d$function$
;

-- DROP FUNCTION public.contains_2d(geometry, box2df);

CREATE OR REPLACE FUNCTION public.contains_2d(geometry, box2df)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 1
AS $function$SELECT $2 OPERATOR(public.@) $1;$function$
;

-- DROP FUNCTION public.create_query(text, text, text);

CREATE OR REPLACE FUNCTION public.create_query(description text, start_range text, end_range text)
 RETURNS TABLE(text_query text)
 LANGUAGE plpgsql
AS $function$ 
BEGIN
return query
with range_text as (
	SELECT
    description AS type_veg,
    (
        SELECT
            string_agg(
                '((f.' || quote_ident(column_name) || '/100) * (st_area(b.shape::geography)*0.000247105))',
                ' + '
            )
        FROM
            information_schema.columns
        WHERE
            table_name = 'farm_ndvi_v2' -- Replace with your table name
            AND ordinal_position >= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = start_range -- Replace with your start column name variable
            )
            AND ordinal_position <= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = end_range -- Replace with your end column name variable
            )
    ) AS "area",
    (
        SELECT
            string_agg(
                '(f.' || quote_ident(column_name) || ')',
				' + '
            )
        FROM
            information_schema.columns
        WHERE
            table_name = 'farm_ndvi_v2' -- Replace with your table name
            AND ordinal_position >= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = start_range -- Replace with your start column name variable
            )
            AND ordinal_position <= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = end_range -- Replace with your end column name variable
            )
    ) AS "percentage"

), query_text as (
	SELECT
	CONCAT ('select ''',b.type_veg, ''' as type_vegetation, Round((',b.area,')::numeric,2) AS "area", Round((',b.percentage,')::numeric,2) AS "percentage"
	FROM farm_ndvi_v2 f
	INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	WHERE f.farm_crop_id = crop_id
  	AND f.date = dat
  	AND f.val = 1
	' ) as a_query from range_text b
)
select * from query_text;
End;
$function$
;

-- DROP FUNCTION public.create_query(text, varchar, date, text, text);

CREATE OR REPLACE FUNCTION public.create_query(description text, farm_id character varying, dat date, start_range text, end_range text)
 RETURNS TABLE(text_query text)
 LANGUAGE plpgsql
AS $function$ 
BEGIN
return query
with range_text as (
	SELECT
    description AS type_veg,
	farm_id As id,
	dat As image_date,
    (
        SELECT
            string_agg(
                '((f.' || quote_ident(column_name) || '/100) * (st_area(b.shape::geography)*0.000247105))',
                ' + '
            )
        FROM
            information_schema.columns
        WHERE
            table_name = 'farm_ndvi_v2' -- Replace with your table name
            AND ordinal_position >= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = start_range -- Replace with your start column name variable
            )
            AND ordinal_position <= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = end_range -- Replace with your end column name variable
            )
    ) AS "area",
    (
        SELECT
            string_agg(
                '(f.' || quote_ident(column_name) || ')',
				' + '
            )
        FROM
            information_schema.columns
        WHERE
            table_name = 'farm_ndvi_v2' -- Replace with your table name
            AND ordinal_position >= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = start_range -- Replace with your start column name variable
            )
            AND ordinal_position <= (
                SELECT ordinal_position
                FROM information_schema.columns
                WHERE table_name = 'farm_ndvi_v2'
                AND column_name = end_range -- Replace with your end column name variable
            )
    ) AS "percentage"

), query_text as (
	SELECT
	CONCAT ('select ''',b.type_veg, ''' as type_vegetation, Round((',b.area,')::numeric,2) AS "area", Round((',b.percentage,')::numeric,2) AS "percentage"
	FROM farm_ndvi_v2 f
	INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	WHERE f.farm_crop_id =''',b.id, 
  	'''AND f.date = ''', b.image_date,
  	'''AND f.val = 1'
	 ) as a_query from range_text b
)
select * from query_text;
End;
$function$
;

-- DROP FUNCTION public.crop_health_narration(varchar, varchar, int4, date);

CREATE OR REPLACE FUNCTION public.crop_health_narration(id character varying, crop_name character varying, crop_age integer, dat date)
 RETURNS TABLE(out_put text)
 LANGUAGE plpgsql
AS $function$ 
BEGIN
return query
WITH vegetation_data AS ( 
    SELECT * FROM query_execution(id, crop_name, crop_age, dat)
), max_vegetation_text as (select CONCAT(
    	  'Currently, ',
           b.percentage,
           '% (',
           b.area,
           ' acres) are ', b.description
           ) AS vegetation_text from vegetation_data b
           WHERE b.percentage = (SELECT MAX(b.percentage) FROM vegetation_data b)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    b.percentage,
			'% (',
			b.area,
			' acres)'
    		' are ',
   		    b.description
  		    ) AS other_vegetation_text from vegetation_data b
  		    WHERE b.percentage >0 and b.percentage not in (SELECT MAX(b.percentage) FROM vegetation_data b) order by b.percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
End;
$function$
;

-- DROP FUNCTION public.crops_ndvi_translation_fn(varchar, int4);

CREATE OR REPLACE FUNCTION public.crops_ndvi_translation_fn(crp_name character varying, age integer)
 RETURNS TABLE(start_ndvi double precision, end_ndvi double precision)
 LANGUAGE plpgsql
AS $function$ 
begin 
return query
select min_ndvi, max_ndvi from crops_ndvi_translation where crop_name = crp_name and start_day <= age and end_day > age;
End;
$function$
;

-- DROP FUNCTION public.crops_ndvi_translation_on_stage(varchar, date);

CREATE OR REPLACE FUNCTION public.crops_ndvi_translation_on_stage(f_id character varying, current_date_param date)
 RETURNS TABLE(generic_narration text)
 LANGUAGE plpgsql
AS $function$
DECLARE
	narration text;
	sowing_date date;
	crp_name varchar;
    age integer;
BEGIN
    -- Check if sowing_date is NULL or empty string
	SELECT b.crop_name, b.growth_stage_date
	INTO crp_name, sowing_date
	FROM bkk_faf_farms_v3_2_mat_vw b
	WHERE b.farm_id = f_id AND b.growth_stage = 'Sowing';

	
    IF sowing_date IS NULL THEN
        -- Return an empty result set or handle it as needed
        RETURN QUERY SELECT NULL::text;
    ELSE
        age := current_date_param - sowing_date;
		
		Return Query
        SELECT COALESCE( E'\n' || 'Crop Stage Advisory:' || E'\n' || generic_narration_english, NULL) AS narration
	    FROM crops_ndvi_translation_v2
	    WHERE crop_name = crp_name
        AND start_day <= age
        AND end_day > age;
		
    END IF;
END;
$function$
;

-- DROP FUNCTION public.crops_ndvi_translation_on_stage(varchar, varchar, date, date);

CREATE OR REPLACE FUNCTION public.crops_ndvi_translation_on_stage(farm_id character varying, crp_name character varying, sowing_date date, current_date_param date)
 RETURNS TABLE(crop character varying, crop_stage character varying, st_day integer, ed_day integer, min_ndvi double precision, max_ndvi double precision, english_narration text, urdu_narration text, generic_english_narration text, generic_urdu_narration text, ndvi_trend character varying)
 LANGUAGE plpgsql
AS $function$
DECLARE
    age integer;
BEGIN
    age := current_date_param - sowing_date;

    RETURN QUERY
    SELECT *
    FROM crops_ndvi_translation_v2
    WHERE crop_name = crp_name
    AND start_day <= age
    AND end_day > age;
END;
$function$
;

-- DROP FUNCTION public.crops_ndvi_translation_on_stage_in_urdu(varchar, date);

CREATE OR REPLACE FUNCTION public.crops_ndvi_translation_on_stage_in_urdu(f_id character varying, current_date_param date)
 RETURNS TABLE(generic_narration text)
 LANGUAGE plpgsql
AS $function$
DECLARE
	narration text;
	sowing_date date;
	crp_name varchar;
    age integer;
BEGIN
    -- Check if sowing_date is NULL or empty string
	SELECT b.crop_name, b.growth_stage_date
	INTO crp_name, sowing_date
	FROM bkk_faf_farms_v3_2_mat_vw b
	WHERE b.farm_id = f_id AND b.growth_stage = 'Sowing';

	
    IF sowing_date IS NULL THEN
        -- Return an empty result set or handle it as needed
        RETURN QUERY SELECT NULL::text;
    ELSE
        age := current_date_param - sowing_date;
		
		Return Query
        SELECT COALESCE( E'\n' || 'فصل کی مرحلہ پر مشورہ:' || E'\n' || generic_narration_urdu, NULL) AS narration
	    FROM crops_ndvi_translation_v2
	    WHERE crop_name = crp_name
        AND start_day <= age
        AND end_day > age;
		
    END IF;
END;
$function$
;

-- DROP FUNCTION public.crosstab(text);

CREATE OR REPLACE FUNCTION public.crosstab(text)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$crosstab$function$
;

-- DROP FUNCTION public.crosstab(text, int4);

CREATE OR REPLACE FUNCTION public.crosstab(text, integer)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$crosstab$function$
;

-- DROP FUNCTION public.crosstab(text, text);

CREATE OR REPLACE FUNCTION public.crosstab(text, text)
 RETURNS SETOF record
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$crosstab_hash$function$
;

-- DROP FUNCTION public.crosstab2(text);

CREATE OR REPLACE FUNCTION public.crosstab2(text)
 RETURNS SETOF tablefunc_crosstab_2
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$crosstab$function$
;

-- DROP FUNCTION public.crosstab3(text);

CREATE OR REPLACE FUNCTION public.crosstab3(text)
 RETURNS SETOF tablefunc_crosstab_3
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$crosstab$function$
;

-- DROP FUNCTION public.crosstab4(text);

CREATE OR REPLACE FUNCTION public.crosstab4(text)
 RETURNS SETOF tablefunc_crosstab_4
 LANGUAGE c
 STABLE STRICT
AS '$libdir/tablefunc', $function$crosstab$function$
;

-- DROP FUNCTION public.crypt(text, text);

CREATE OR REPLACE FUNCTION public.crypt(text, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_crypt$function$
;

-- DROP FUNCTION public.dearmor(text);

CREATE OR REPLACE FUNCTION public.dearmor(text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_dearmor$function$
;

-- DROP FUNCTION public.decrypt(bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.decrypt(bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_decrypt$function$
;

-- DROP FUNCTION public.decrypt_iv(bytea, bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.decrypt_iv(bytea, bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_decrypt_iv$function$
;

-- DROP FUNCTION public.digest(text, text);

CREATE OR REPLACE FUNCTION public.digest(text, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_digest$function$
;

-- DROP FUNCTION public.digest(bytea, text);

CREATE OR REPLACE FUNCTION public.digest(bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_digest$function$
;

-- DROP FUNCTION public.disablelongtransactions();

CREATE OR REPLACE FUNCTION public.disablelongtransactions()
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
	rec RECORD;

BEGIN

	--
	-- Drop all triggers applied by CheckAuth()
	--
	FOR rec IN
		SELECT c.relname, t.tgname, t.tgargs FROM pg_trigger t, pg_class c, pg_proc p
		WHERE p.proname = 'checkauthtrigger' and t.tgfoid = p.oid and t.tgrelid = c.oid
	LOOP
		EXECUTE 'DROP TRIGGER ' || quote_ident(rec.tgname) ||
			' ON ' || quote_ident(rec.relname);
	END LOOP;

	--
	-- Drop the authorization_table table
	--
	FOR rec IN SELECT * FROM pg_class WHERE relname = 'authorization_table' LOOP
		DROP TABLE authorization_table;
	END LOOP;

	--
	-- Drop the authorized_tables view
	--
	FOR rec IN SELECT * FROM pg_class WHERE relname = 'authorized_tables' LOOP
		DROP VIEW authorized_tables;
	END LOOP;

	RETURN 'Long transactions support disabled';
END;
$function$
;

-- DROP FUNCTION public.dropgeometrycolumn(varchar, varchar);

CREATE OR REPLACE FUNCTION public.dropgeometrycolumn(table_name character varying, column_name character varying)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	ret text;
BEGIN
	SELECT public.DropGeometryColumn('','',$1,$2) into ret;
	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.dropgeometrycolumn(varchar, varchar, varchar);

CREATE OR REPLACE FUNCTION public.dropgeometrycolumn(schema_name character varying, table_name character varying, column_name character varying)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	ret text;
BEGIN
	SELECT public.DropGeometryColumn('',$1,$2,$3) into ret;
	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.dropgeometrycolumn(varchar, varchar, varchar, varchar);

CREATE OR REPLACE FUNCTION public.dropgeometrycolumn(catalog_name character varying, schema_name character varying, table_name character varying, column_name character varying)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	myrec RECORD;
	okay boolean;
	real_schema name;

BEGIN

	-- Find, check or fix schema_name
	IF ( schema_name != '' ) THEN
		okay = false;

		FOR myrec IN SELECT nspname FROM pg_namespace WHERE text(nspname) = schema_name LOOP
			okay := true;
		END LOOP;

		IF ( okay <>  true ) THEN
			RAISE NOTICE 'Invalid schema name - using current_schema()';
			SELECT current_schema() into real_schema;
		ELSE
			real_schema = schema_name;
		END IF;
	ELSE
		SELECT current_schema() into real_schema;
	END IF;

	-- Find out if the column is in the geometry_columns table
	okay = false;
	FOR myrec IN SELECT * from public.geometry_columns where f_table_schema = text(real_schema) and f_table_name = table_name and f_geometry_column = column_name LOOP
		okay := true;
	END LOOP;
	IF (okay <> true) THEN
		RAISE EXCEPTION 'column not found in geometry_columns table';
		RETURN false;
	END IF;

	-- Remove table column
	EXECUTE 'ALTER TABLE ' || quote_ident(real_schema) || '.' ||
		quote_ident(table_name) || ' DROP COLUMN ' ||
		quote_ident(column_name);

	RETURN real_schema || '.' || table_name || '.' || column_name ||' effectively removed.';

END;
$function$
;

-- DROP FUNCTION public.dropgeometrytable(varchar, varchar, varchar);

CREATE OR REPLACE FUNCTION public.dropgeometrytable(catalog_name character varying, schema_name character varying, table_name character varying)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	real_schema name;

BEGIN

	IF ( schema_name = '' ) THEN
		SELECT current_schema() into real_schema;
	ELSE
		real_schema = schema_name;
	END IF;

	-- TODO: Should we warn if table doesn't exist probably instead just saying dropped
	-- Remove table
	EXECUTE 'DROP TABLE IF EXISTS '
		|| quote_ident(real_schema) || '.' ||
		quote_ident(table_name) || ' RESTRICT';

	RETURN
		real_schema || '.' ||
		table_name ||' dropped.';

END;
$function$
;

-- DROP FUNCTION public.dropgeometrytable(varchar);

CREATE OR REPLACE FUNCTION public.dropgeometrytable(table_name character varying)
 RETURNS text
 LANGUAGE sql
 STRICT
AS $function$ SELECT public.DropGeometryTable('','',$1) $function$
;

-- DROP FUNCTION public.dropgeometrytable(varchar, varchar);

CREATE OR REPLACE FUNCTION public.dropgeometrytable(schema_name character varying, table_name character varying)
 RETURNS text
 LANGUAGE sql
 STRICT
AS $function$ SELECT public.DropGeometryTable('',$1,$2) $function$
;

-- DROP FUNCTION public.enablelongtransactions();

CREATE OR REPLACE FUNCTION public.enablelongtransactions()
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
	"query" text;
	exists bool;
	rec RECORD;

BEGIN

	exists = 'f';
	FOR rec IN SELECT * FROM pg_class WHERE relname = 'authorization_table'
	LOOP
		exists = 't';
	END LOOP;

	IF NOT exists
	THEN
		"query" = 'CREATE TABLE authorization_table (
			toid oid, -- table oid
			rid text, -- row id
			expires timestamp,
			authid text
		)';
		EXECUTE "query";
	END IF;

	exists = 'f';
	FOR rec IN SELECT * FROM pg_class WHERE relname = 'authorized_tables'
	LOOP
		exists = 't';
	END LOOP;

	IF NOT exists THEN
		"query" = 'CREATE VIEW authorized_tables AS ' ||
			'SELECT ' ||
			'n.nspname as schema, ' ||
			'c.relname as table, trim(' ||
			quote_literal(chr(92) || '000') ||
			' from t.tgargs) as id_column ' ||
			'FROM pg_trigger t, pg_class c, pg_proc p ' ||
			', pg_namespace n ' ||
			'WHERE p.proname = ' || quote_literal('checkauthtrigger') ||
			' AND c.relnamespace = n.oid' ||
			' AND t.tgfoid = p.oid and t.tgrelid = c.oid';
		EXECUTE "query";
	END IF;

	RETURN 'Long transactions support enabled';
END;
$function$
;

-- DROP FUNCTION public.encrypt(bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.encrypt(bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_encrypt$function$
;

-- DROP FUNCTION public.encrypt_iv(bytea, bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.encrypt_iv(bytea, bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_encrypt_iv$function$
;

-- DROP FUNCTION public."equals"(geometry, geometry);

CREATE OR REPLACE FUNCTION public.equals(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_Equals$function$
;

-- DROP FUNCTION public.find_srid(varchar, varchar, varchar);

CREATE OR REPLACE FUNCTION public.find_srid(character varying, character varying, character varying)
 RETURNS integer
 LANGUAGE plpgsql
 STABLE PARALLEL SAFE STRICT
AS $function$
DECLARE
	schem varchar =  $1;
	tabl varchar = $2;
	sr int4;
BEGIN
-- if the table contains a . and the schema is empty
-- split the table into a schema and a table
-- otherwise drop through to default behavior
	IF ( schem = '' and strpos(tabl,'.') > 0 ) THEN
	 schem = substr(tabl,1,strpos(tabl,'.')-1);
	 tabl = substr(tabl,length(schem)+2);
	END IF;

	select SRID into sr from public.geometry_columns where (f_table_schema = schem or schem = '') and f_table_name = tabl and f_geometry_column = $3;
	IF NOT FOUND THEN
	   RAISE EXCEPTION 'find_srid() - could not find the corresponding SRID - is the geometry registered in the GEOMETRY_COLUMNS table?  Is there an uppercase/lowercase mismatch?';
	END IF;
	return sr;
END;
$function$
;

-- DROP FUNCTION public.fn_build_geom_from_survey_path();

CREATE OR REPLACE FUNCTION public.fn_build_geom_from_survey_path()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  -- Only build geometry if survey_path is not null
  IF NEW.survey_path IS NOT NULL THEN
    NEW.geom := (
      SELECT ST_SetSRID(
               ST_MakeLine(
                 ST_MakePoint(
                   (p->'geometry'->'coordinates'->>0)::float,
                   (p->'geometry'->'coordinates'->>1)::float
                 )
                 ORDER BY ord
               ),
               4326
             )
      FROM jsonb_array_elements(NEW.survey_path->'features') WITH ORDINALITY AS p(p, ord)
    );
  END IF;

  RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.gen_random_bytes(int4);

CREATE OR REPLACE FUNCTION public.gen_random_bytes(integer)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_random_bytes$function$
;

-- DROP FUNCTION public.gen_random_uuid();

CREATE OR REPLACE FUNCTION public.gen_random_uuid()
 RETURNS uuid
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/pgcrypto', $function$pg_random_uuid$function$
;

-- DROP FUNCTION public.gen_salt(text);

CREATE OR REPLACE FUNCTION public.gen_salt(text)
 RETURNS text
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_gen_salt$function$
;

-- DROP FUNCTION public.gen_salt(text, int4);

CREATE OR REPLACE FUNCTION public.gen_salt(text, integer)
 RETURNS text
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_gen_salt_rounds$function$
;

-- DROP FUNCTION public.geog_brin_inclusion_add_value(internal, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geog_brin_inclusion_add_value(internal, internal, internal, internal)
 RETURNS boolean
 LANGUAGE c
AS '$libdir/postgis-3', $function$geog_brin_inclusion_add_value$function$
;

-- DROP FUNCTION public.geography(geometry);

CREATE OR REPLACE FUNCTION public.geography(geometry)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_from_geometry$function$
;

-- DROP FUNCTION public.geography(bytea);

CREATE OR REPLACE FUNCTION public.geography(bytea)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_from_binary$function$
;

-- DROP FUNCTION public.geography(geography, int4, bool);

CREATE OR REPLACE FUNCTION public.geography(geography, integer, boolean)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_enforce_typmod$function$
;

-- DROP FUNCTION public.geography_analyze(internal);

CREATE OR REPLACE FUNCTION public.geography_analyze(internal)
 RETURNS boolean
 LANGUAGE c
 STRICT
AS '$libdir/postgis-3', $function$gserialized_analyze_nd$function$
;

-- DROP FUNCTION public.geography_cmp(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_cmp(geography, geography)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_cmp$function$
;

-- DROP FUNCTION public.geography_distance_knn(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_distance_knn(geography, geography)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 100
AS '$libdir/postgis-3', $function$geography_distance_knn$function$
;

-- DROP FUNCTION public.geography_eq(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_eq(geography, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_eq$function$
;

-- DROP FUNCTION public.geography_ge(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_ge(geography, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_ge$function$
;

-- DROP FUNCTION public.geography_gist_compress(internal);

CREATE OR REPLACE FUNCTION public.geography_gist_compress(internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_compress$function$
;

-- DROP FUNCTION public.geography_gist_consistent(internal, geography, int4);

CREATE OR REPLACE FUNCTION public.geography_gist_consistent(internal, geography, integer)
 RETURNS boolean
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_consistent$function$
;

-- DROP FUNCTION public.geography_gist_decompress(internal);

CREATE OR REPLACE FUNCTION public.geography_gist_decompress(internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_decompress$function$
;

-- DROP FUNCTION public.geography_gist_distance(internal, geography, int4);

CREATE OR REPLACE FUNCTION public.geography_gist_distance(internal, geography, integer)
 RETURNS double precision
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_geog_distance$function$
;

-- DROP FUNCTION public.geography_gist_penalty(internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geography_gist_penalty(internal, internal, internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_penalty$function$
;

-- DROP FUNCTION public.geography_gist_picksplit(internal, internal);

CREATE OR REPLACE FUNCTION public.geography_gist_picksplit(internal, internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_picksplit$function$
;

-- DROP FUNCTION public.geography_gist_same(box2d, box2d, internal);

CREATE OR REPLACE FUNCTION public.geography_gist_same(box2d, box2d, internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_same$function$
;

-- DROP FUNCTION public.geography_gist_union(bytea, internal);

CREATE OR REPLACE FUNCTION public.geography_gist_union(bytea, internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$gserialized_gist_union$function$
;

-- DROP FUNCTION public.geography_gt(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_gt(geography, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_gt$function$
;

-- DROP FUNCTION public.geography_in(cstring, oid, int4);

CREATE OR REPLACE FUNCTION public.geography_in(cstring, oid, integer)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_in$function$
;

-- DROP FUNCTION public.geography_le(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_le(geography, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_le$function$
;

-- DROP FUNCTION public.geography_lt(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_lt(geography, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_lt$function$
;

-- DROP FUNCTION public.geography_out(geography);

CREATE OR REPLACE FUNCTION public.geography_out(geography)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_out$function$
;

-- DROP FUNCTION public.geography_overlaps(geography, geography);

CREATE OR REPLACE FUNCTION public.geography_overlaps(geography, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overlaps$function$
;

-- DROP FUNCTION public.geography_recv(internal, oid, int4);

CREATE OR REPLACE FUNCTION public.geography_recv(internal, oid, integer)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_recv$function$
;

-- DROP FUNCTION public.geography_send(geography);

CREATE OR REPLACE FUNCTION public.geography_send(geography)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_send$function$
;

-- DROP FUNCTION public.geography_spgist_choose_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geography_spgist_choose_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_choose_nd$function$
;

-- DROP FUNCTION public.geography_spgist_compress_nd(internal);

CREATE OR REPLACE FUNCTION public.geography_spgist_compress_nd(internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_compress_nd$function$
;

-- DROP FUNCTION public.geography_spgist_config_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geography_spgist_config_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_config_nd$function$
;

-- DROP FUNCTION public.geography_spgist_inner_consistent_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geography_spgist_inner_consistent_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_inner_consistent_nd$function$
;

-- DROP FUNCTION public.geography_spgist_leaf_consistent_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geography_spgist_leaf_consistent_nd(internal, internal)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_leaf_consistent_nd$function$
;

-- DROP FUNCTION public.geography_spgist_picksplit_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geography_spgist_picksplit_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_picksplit_nd$function$
;

-- DROP FUNCTION public.geography_typmod_in(_cstring);

CREATE OR REPLACE FUNCTION public.geography_typmod_in(cstring[])
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_typmod_in$function$
;

-- DROP FUNCTION public.geography_typmod_out(int4);

CREATE OR REPLACE FUNCTION public.geography_typmod_out(integer)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$postgis_typmod_out$function$
;

-- DROP FUNCTION public.geom2d_brin_inclusion_add_value(internal, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geom2d_brin_inclusion_add_value(internal, internal, internal, internal)
 RETURNS boolean
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$geom2d_brin_inclusion_add_value$function$
;

-- DROP FUNCTION public.geom3d_brin_inclusion_add_value(internal, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geom3d_brin_inclusion_add_value(internal, internal, internal, internal)
 RETURNS boolean
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$geom3d_brin_inclusion_add_value$function$
;

-- DROP FUNCTION public.geom4d_brin_inclusion_add_value(internal, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geom4d_brin_inclusion_add_value(internal, internal, internal, internal)
 RETURNS boolean
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$geom4d_brin_inclusion_add_value$function$
;

-- DROP FUNCTION public.geometry(box3d);

CREATE OR REPLACE FUNCTION public.geometry(box3d)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_to_LWGEOM$function$
;

-- DROP FUNCTION public.geometry(polygon);

CREATE OR REPLACE FUNCTION public.geometry(polygon)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$polygon_to_geometry$function$
;

-- DROP FUNCTION public.geometry(geometry, int4, bool);

CREATE OR REPLACE FUNCTION public.geometry(geometry, integer, boolean)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_enforce_typmod$function$
;

-- DROP FUNCTION public.geometry(path);

CREATE OR REPLACE FUNCTION public.geometry(path)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$path_to_geometry$function$
;

-- DROP FUNCTION public.geometry(point);

CREATE OR REPLACE FUNCTION public.geometry(point)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$point_to_geometry$function$
;

-- DROP FUNCTION public.geometry(box2d);

CREATE OR REPLACE FUNCTION public.geometry(box2d)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX2D_to_LWGEOM$function$
;

-- DROP FUNCTION public.geometry(text);

CREATE OR REPLACE FUNCTION public.geometry(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$parse_WKT_lwgeom$function$
;

-- DROP FUNCTION public.geometry(geography);

CREATE OR REPLACE FUNCTION public.geometry(geography)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_from_geography$function$
;

-- DROP FUNCTION public.geometry(bytea);

CREATE OR REPLACE FUNCTION public.geometry(bytea)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_from_bytea$function$
;

-- DROP FUNCTION public.geometry_above(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_above(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_above_2d$function$
;

-- DROP FUNCTION public.geometry_analyze(internal);

CREATE OR REPLACE FUNCTION public.geometry_analyze(internal)
 RETURNS boolean
 LANGUAGE c
 STRICT
AS '$libdir/postgis-3', $function$gserialized_analyze_nd$function$
;

-- DROP FUNCTION public.geometry_below(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_below(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_below_2d$function$
;

-- DROP FUNCTION public.geometry_cmp(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_cmp(geom1 geometry, geom2 geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_cmp$function$
;

-- DROP FUNCTION public.geometry_contained_3d(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_contained_3d(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contained_3d$function$
;

-- DROP FUNCTION public.geometry_contains(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_contains(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains_2d$function$
;

-- DROP FUNCTION public.geometry_contains_3d(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_contains_3d(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains_3d$function$
;

-- DROP FUNCTION public.geometry_contains_nd(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_contains_nd(geometry, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains$function$
;

-- DROP FUNCTION public.geometry_distance_box(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_distance_box(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_distance_box_2d$function$
;

-- DROP FUNCTION public.geometry_distance_centroid(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_distance_centroid(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_Distance$function$
;

-- DROP FUNCTION public.geometry_distance_centroid_nd(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_distance_centroid_nd(geometry, geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_distance_nd$function$
;

-- DROP FUNCTION public.geometry_distance_cpa(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_distance_cpa(geometry, geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_DistanceCPA$function$
;

-- DROP FUNCTION public.geometry_eq(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_eq(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_eq$function$
;

-- DROP FUNCTION public.geometry_ge(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_ge(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_ge$function$
;

-- DROP FUNCTION public.geometry_gist_compress_2d(internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_compress_2d(internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_compress_2d$function$
;

-- DROP FUNCTION public.geometry_gist_compress_nd(internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_compress_nd(internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_compress$function$
;

-- DROP FUNCTION public.geometry_gist_consistent_2d(internal, geometry, int4);

CREATE OR REPLACE FUNCTION public.geometry_gist_consistent_2d(internal, geometry, integer)
 RETURNS boolean
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_consistent_2d$function$
;

-- DROP FUNCTION public.geometry_gist_consistent_nd(internal, geometry, int4);

CREATE OR REPLACE FUNCTION public.geometry_gist_consistent_nd(internal, geometry, integer)
 RETURNS boolean
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_consistent$function$
;

-- DROP FUNCTION public.geometry_gist_decompress_2d(internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_decompress_2d(internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_decompress_2d$function$
;

-- DROP FUNCTION public.geometry_gist_decompress_nd(internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_decompress_nd(internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_decompress$function$
;

-- DROP FUNCTION public.geometry_gist_distance_2d(internal, geometry, int4);

CREATE OR REPLACE FUNCTION public.geometry_gist_distance_2d(internal, geometry, integer)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_distance_2d$function$
;

-- DROP FUNCTION public.geometry_gist_distance_nd(internal, geometry, int4);

CREATE OR REPLACE FUNCTION public.geometry_gist_distance_nd(internal, geometry, integer)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_distance$function$
;

-- DROP FUNCTION public.geometry_gist_penalty_2d(internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_penalty_2d(internal, internal, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_penalty_2d$function$
;

-- DROP FUNCTION public.geometry_gist_penalty_nd(internal, internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_penalty_nd(internal, internal, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_penalty$function$
;

-- DROP FUNCTION public.geometry_gist_picksplit_2d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_picksplit_2d(internal, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_picksplit_2d$function$
;

-- DROP FUNCTION public.geometry_gist_picksplit_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_picksplit_nd(internal, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_picksplit$function$
;

-- DROP FUNCTION public.geometry_gist_same_2d(geometry, geometry, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_same_2d(geom1 geometry, geom2 geometry, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_same_2d$function$
;

-- DROP FUNCTION public.geometry_gist_same_nd(geometry, geometry, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_same_nd(geometry, geometry, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_same$function$
;

-- DROP FUNCTION public.geometry_gist_sortsupport_2d(internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_sortsupport_2d(internal)
 RETURNS void
 LANGUAGE c
 STRICT
AS '$libdir/postgis-3', $function$gserialized_gist_sortsupport_2d$function$
;

-- DROP FUNCTION public.geometry_gist_union_2d(bytea, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_union_2d(bytea, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_union_2d$function$
;

-- DROP FUNCTION public.geometry_gist_union_nd(bytea, internal);

CREATE OR REPLACE FUNCTION public.geometry_gist_union_nd(bytea, internal)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_union$function$
;

-- DROP FUNCTION public.geometry_gt(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_gt(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_gt$function$
;

-- DROP FUNCTION public.geometry_hash(geometry);

CREATE OR REPLACE FUNCTION public.geometry_hash(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_hash$function$
;

-- DROP FUNCTION public.geometry_in(cstring);

CREATE OR REPLACE FUNCTION public.geometry_in(cstring)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_in$function$
;

-- DROP FUNCTION public.geometry_le(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_le(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_le$function$
;

-- DROP FUNCTION public.geometry_left(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_left(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_left_2d$function$
;

-- DROP FUNCTION public.geometry_lt(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_lt(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_lt$function$
;

-- DROP FUNCTION public.geometry_out(geometry);

CREATE OR REPLACE FUNCTION public.geometry_out(geometry)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_out$function$
;

-- DROP FUNCTION public.geometry_overabove(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overabove(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overabove_2d$function$
;

-- DROP FUNCTION public.geometry_overbelow(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overbelow(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overbelow_2d$function$
;

-- DROP FUNCTION public.geometry_overlaps(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overlaps(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overlaps_2d$function$
;

-- DROP FUNCTION public.geometry_overlaps_3d(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overlaps_3d(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overlaps_3d$function$
;

-- DROP FUNCTION public.geometry_overlaps_nd(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overlaps_nd(geometry, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overlaps$function$
;

-- DROP FUNCTION public.geometry_overleft(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overleft(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overleft_2d$function$
;

-- DROP FUNCTION public.geometry_overright(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_overright(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overright_2d$function$
;

-- DROP FUNCTION public.geometry_recv(internal);

CREATE OR REPLACE FUNCTION public.geometry_recv(internal)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_recv$function$
;

-- DROP FUNCTION public.geometry_right(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_right(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_right_2d$function$
;

-- DROP FUNCTION public.geometry_same(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_same(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_same_2d$function$
;

-- DROP FUNCTION public.geometry_same_3d(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_same_3d(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_same_3d$function$
;

-- DROP FUNCTION public.geometry_same_nd(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_same_nd(geometry, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_same$function$
;

-- DROP FUNCTION public.geometry_send(geometry);

CREATE OR REPLACE FUNCTION public.geometry_send(geometry)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_send$function$
;

-- DROP FUNCTION public.geometry_sortsupport(internal);

CREATE OR REPLACE FUNCTION public.geometry_sortsupport(internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$lwgeom_sortsupport$function$
;

-- DROP FUNCTION public.geometry_spgist_choose_2d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_choose_2d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_choose_2d$function$
;

-- DROP FUNCTION public.geometry_spgist_choose_3d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_choose_3d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_choose_3d$function$
;

-- DROP FUNCTION public.geometry_spgist_choose_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_choose_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_choose_nd$function$
;

-- DROP FUNCTION public.geometry_spgist_compress_2d(internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_compress_2d(internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_compress_2d$function$
;

-- DROP FUNCTION public.geometry_spgist_compress_3d(internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_compress_3d(internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_compress_3d$function$
;

-- DROP FUNCTION public.geometry_spgist_compress_nd(internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_compress_nd(internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_compress_nd$function$
;

-- DROP FUNCTION public.geometry_spgist_config_2d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_config_2d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_config_2d$function$
;

-- DROP FUNCTION public.geometry_spgist_config_3d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_config_3d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_config_3d$function$
;

-- DROP FUNCTION public.geometry_spgist_config_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_config_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_config_nd$function$
;

-- DROP FUNCTION public.geometry_spgist_inner_consistent_2d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_inner_consistent_2d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_inner_consistent_2d$function$
;

-- DROP FUNCTION public.geometry_spgist_inner_consistent_3d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_inner_consistent_3d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_inner_consistent_3d$function$
;

-- DROP FUNCTION public.geometry_spgist_inner_consistent_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_inner_consistent_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_inner_consistent_nd$function$
;

-- DROP FUNCTION public.geometry_spgist_leaf_consistent_2d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_leaf_consistent_2d(internal, internal)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_leaf_consistent_2d$function$
;

-- DROP FUNCTION public.geometry_spgist_leaf_consistent_3d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_leaf_consistent_3d(internal, internal)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_leaf_consistent_3d$function$
;

-- DROP FUNCTION public.geometry_spgist_leaf_consistent_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_leaf_consistent_nd(internal, internal)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_leaf_consistent_nd$function$
;

-- DROP FUNCTION public.geometry_spgist_picksplit_2d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_picksplit_2d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_picksplit_2d$function$
;

-- DROP FUNCTION public.geometry_spgist_picksplit_3d(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_picksplit_3d(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_picksplit_3d$function$
;

-- DROP FUNCTION public.geometry_spgist_picksplit_nd(internal, internal);

CREATE OR REPLACE FUNCTION public.geometry_spgist_picksplit_nd(internal, internal)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_spgist_picksplit_nd$function$
;

-- DROP FUNCTION public.geometry_typmod_in(_cstring);

CREATE OR REPLACE FUNCTION public.geometry_typmod_in(cstring[])
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_typmod_in$function$
;

-- DROP FUNCTION public.geometry_typmod_out(int4);

CREATE OR REPLACE FUNCTION public.geometry_typmod_out(integer)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$postgis_typmod_out$function$
;

-- DROP FUNCTION public.geometry_within(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_within(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_within_2d$function$
;

-- DROP FUNCTION public.geometry_within_nd(geometry, geometry);

CREATE OR REPLACE FUNCTION public.geometry_within_nd(geometry, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_within$function$
;

-- DROP FUNCTION public.geometrytype(geography);

CREATE OR REPLACE FUNCTION public.geometrytype(geography)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_getTYPE$function$
;

-- DROP FUNCTION public.geometrytype(geometry);

CREATE OR REPLACE FUNCTION public.geometrytype(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_getTYPE$function$
;

-- DROP FUNCTION public.geomfromewkb(bytea);

CREATE OR REPLACE FUNCTION public.geomfromewkb(bytea)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOMFromEWKB$function$
;

-- DROP FUNCTION public.geomfromewkt(text);

CREATE OR REPLACE FUNCTION public.geomfromewkt(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$parse_WKT_lwgeom$function$
;

-- DROP FUNCTION public.get_circlewise_variety_query();

CREATE OR REPLACE FUNCTION public.get_circlewise_variety_query()
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    col_list TEXT := '';
    col_defs TEXT := '';
    sum_expr TEXT := '';
    variety TEXT;
    final_sql TEXT;
BEGIN
    -- 1. Build list of varieties with area > 0
    FOR variety IN
        WITH temp AS (
            SELECT c.circle_name, b.farm_id, b.area
            FROM jk_circle_boundries_2025 c
            INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
            LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
            WHERE c.unit = 2
        ), temp2 AS (
            SELECT v.name, v.variety_id, c.farm_id
            FROM jk_cane_variety v
            LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
        )
        SELECT t2.name
        FROM temp t1
        INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
        GROUP BY t2.name
        HAVING SUM(t1.area) > 0
        ORDER BY t2.name
    LOOP
        -- List for the crosstab category query
        col_list := col_list || format('SELECT %L UNION ALL ', variety);

        -- Output columns for pivot_table (used in AS (...))
        col_defs := col_defs || format('"%s" DOUBLE PRECISION,', variety);

        -- Expression for total_area
        sum_expr := sum_expr || format('COALESCE("%s", 0) + ', variety);
    END LOOP;

    -- Remove trailing separators
    col_list := left(col_list, length(col_list) - 11);        -- Remove trailing ' UNION ALL '
    col_defs := left(col_defs, length(col_defs) - 1);          -- Remove trailing comma
    sum_expr := left(sum_expr, length(sum_expr) - 3);          -- Remove trailing ' + '

    -- 2. Construct the dynamic SQL
    final_sql := format($sql$
        SELECT 
            *, 
            %s AS total_area
        FROM crosstab(
            $ct$
            WITH temp AS (
                SELECT c.circle_name, b.farm_id, b.area
                FROM jk_circle_boundries_2025 c
                INNER JOIN jk_agent_boundries_2025 a ON c.circle_name = a.circle_name
                LEFT JOIN bkk_survey_app_data b ON a.msisdn = b.profiled_by
                WHERE c.unit = 2
            ), temp2 AS (
                SELECT v.name, v.variety_id, c.farm_id
                FROM jk_cane_variety v
                LEFT JOIN bkk_survey_app_crops_data c ON v.variety_id = c.variety
            )
            SELECT 
                t1.circle_name, 
                t2.name AS variety_name, 
                SUM(t1.area)::float AS total_area
            FROM 
                temp t1 
                INNER JOIN temp2 t2 ON t1.farm_id = t2.farm_id
            GROUP BY 
                t1.circle_name, 
                t2.name
            HAVING 
                SUM(t1.area) IS NOT NULL AND SUM(t1.area) > 0
            ORDER BY 
                1, 2
            $ct$,
            $ct2$
            %s
            $ct2$
        ) AS pivot_table (
            circle_name TEXT,
            %s
        );
    $sql$, sum_expr, col_list, col_defs);

    -- 3. Return the final SQL string
    RETURN final_sql;
END;
$function$
;

-- DROP FUNCTION public.get_proj4_from_srid(int4);

CREATE OR REPLACE FUNCTION public.get_proj4_from_srid(integer)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$
	BEGIN
	RETURN proj4text::text FROM public.spatial_ref_sys WHERE srid= $1;
	END;
	$function$
;

-- DROP FUNCTION public.gettransactionid();

CREATE OR REPLACE FUNCTION public.gettransactionid()
 RETURNS xid
 LANGUAGE c
AS '$libdir/postgis-3', $function$getTransactionID$function$
;

-- DROP FUNCTION public.gidx_in(cstring);

CREATE OR REPLACE FUNCTION public.gidx_in(cstring)
 RETURNS gidx
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gidx_in$function$
;

-- DROP FUNCTION public.gidx_out(gidx);

CREATE OR REPLACE FUNCTION public.gidx_out(gidx)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gidx_out$function$
;

-- DROP FUNCTION public.gin_extract_query_trgm(text, internal, int2, internal, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gin_extract_query_trgm$function$
;

-- DROP FUNCTION public.gin_extract_value_trgm(text, internal);

CREATE OR REPLACE FUNCTION public.gin_extract_value_trgm(text, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gin_extract_value_trgm$function$
;

-- DROP FUNCTION public.gin_trgm_consistent(internal, int2, text, int4, internal, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.gin_trgm_consistent(internal, smallint, text, integer, internal, internal, internal, internal)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gin_trgm_consistent$function$
;

-- DROP FUNCTION public.gin_trgm_triconsistent(internal, int2, text, int4, internal, internal, internal);

CREATE OR REPLACE FUNCTION public.gin_trgm_triconsistent(internal, smallint, text, integer, internal, internal, internal)
 RETURNS "char"
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gin_trgm_triconsistent$function$
;

-- DROP FUNCTION public.gserialized_gist_joinsel_2d(internal, oid, internal, int2);

CREATE OR REPLACE FUNCTION public.gserialized_gist_joinsel_2d(internal, oid, internal, smallint)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_joinsel_2d$function$
;

-- DROP FUNCTION public.gserialized_gist_joinsel_nd(internal, oid, internal, int2);

CREATE OR REPLACE FUNCTION public.gserialized_gist_joinsel_nd(internal, oid, internal, smallint)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_joinsel_nd$function$
;

-- DROP FUNCTION public.gserialized_gist_sel_2d(internal, oid, internal, int4);

CREATE OR REPLACE FUNCTION public.gserialized_gist_sel_2d(internal, oid, internal, integer)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_sel_2d$function$
;

-- DROP FUNCTION public.gserialized_gist_sel_nd(internal, oid, internal, int4);

CREATE OR REPLACE FUNCTION public.gserialized_gist_sel_nd(internal, oid, internal, integer)
 RETURNS double precision
 LANGUAGE c
 PARALLEL SAFE
AS '$libdir/postgis-3', $function$gserialized_gist_sel_nd$function$
;

-- DROP FUNCTION public.gtrgm_compress(internal);

CREATE OR REPLACE FUNCTION public.gtrgm_compress(internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_compress$function$
;

-- DROP FUNCTION public.gtrgm_consistent(internal, text, int2, oid, internal);

CREATE OR REPLACE FUNCTION public.gtrgm_consistent(internal, text, smallint, oid, internal)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_consistent$function$
;

-- DROP FUNCTION public.gtrgm_decompress(internal);

CREATE OR REPLACE FUNCTION public.gtrgm_decompress(internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_decompress$function$
;

-- DROP FUNCTION public.gtrgm_distance(internal, text, int2, oid, internal);

CREATE OR REPLACE FUNCTION public.gtrgm_distance(internal, text, smallint, oid, internal)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_distance$function$
;

-- DROP FUNCTION public.gtrgm_in(cstring);

CREATE OR REPLACE FUNCTION public.gtrgm_in(cstring)
 RETURNS gtrgm
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_in$function$
;

-- DROP FUNCTION public.gtrgm_out(gtrgm);

CREATE OR REPLACE FUNCTION public.gtrgm_out(gtrgm)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_out$function$
;

-- DROP FUNCTION public.gtrgm_penalty(internal, internal, internal);

CREATE OR REPLACE FUNCTION public.gtrgm_penalty(internal, internal, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_penalty$function$
;

-- DROP FUNCTION public.gtrgm_picksplit(internal, internal);

CREATE OR REPLACE FUNCTION public.gtrgm_picksplit(internal, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_picksplit$function$
;

-- DROP FUNCTION public.gtrgm_same(gtrgm, gtrgm, internal);

CREATE OR REPLACE FUNCTION public.gtrgm_same(gtrgm, gtrgm, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_same$function$
;

-- DROP FUNCTION public.gtrgm_union(internal, internal);

CREATE OR REPLACE FUNCTION public.gtrgm_union(internal, internal)
 RETURNS gtrgm
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$gtrgm_union$function$
;

-- DROP FUNCTION public.hmac(text, text, text);

CREATE OR REPLACE FUNCTION public.hmac(text, text, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_hmac$function$
;

-- DROP FUNCTION public.hmac(bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.hmac(bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pg_hmac$function$
;

-- DROP FUNCTION public.is_contained_2d(geometry, box2df);

CREATE OR REPLACE FUNCTION public.is_contained_2d(geometry, box2df)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 1
AS $function$SELECT $2 OPERATOR(public.~) $1;$function$
;

-- DROP FUNCTION public.is_contained_2d(box2df, box2df);

CREATE OR REPLACE FUNCTION public.is_contained_2d(box2df, box2df)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains_box2df_box2df_2d$function$
;

-- DROP FUNCTION public.is_contained_2d(box2df, geometry);

CREATE OR REPLACE FUNCTION public.is_contained_2d(box2df, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_within_box2df_geom_2d$function$
;

-- DROP FUNCTION public."json"(geometry);

CREATE OR REPLACE FUNCTION public.json(geometry)
 RETURNS json
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geometry_to_json$function$
;

-- DROP FUNCTION public."jsonb"(geometry);

CREATE OR REPLACE FUNCTION public.jsonb(geometry)
 RETURNS jsonb
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geometry_to_jsonb$function$
;

-- DROP FUNCTION public.lockrow(text, text, text);

CREATE OR REPLACE FUNCTION public.lockrow(text, text, text)
 RETURNS integer
 LANGUAGE sql
 STRICT
AS $function$ SELECT LockRow(current_schema(), $1, $2, $3, now()::timestamp+'1:00'); $function$
;

-- DROP FUNCTION public.lockrow(text, text, text, text);

CREATE OR REPLACE FUNCTION public.lockrow(text, text, text, text)
 RETURNS integer
 LANGUAGE sql
 STRICT
AS $function$ SELECT LockRow($1, $2, $3, $4, now()::timestamp+'1:00'); $function$
;

-- DROP FUNCTION public.lockrow(text, text, text, text, timestamp);

CREATE OR REPLACE FUNCTION public.lockrow(text, text, text, text, timestamp without time zone)
 RETURNS integer
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	myschema alias for $1;
	mytable alias for $2;
	myrid   alias for $3;
	authid alias for $4;
	expires alias for $5;
	ret int;
	mytoid oid;
	myrec RECORD;

BEGIN

	IF NOT LongTransactionsEnabled() THEN
		RAISE EXCEPTION 'Long transaction support disabled, use EnableLongTransaction() to enable.';
	END IF;

	EXECUTE 'DELETE FROM authorization_table WHERE expires < now()';

	SELECT c.oid INTO mytoid FROM pg_class c, pg_namespace n
		WHERE c.relname = mytable
		AND c.relnamespace = n.oid
		AND n.nspname = myschema;

	-- RAISE NOTICE 'toid: %', mytoid;

	FOR myrec IN SELECT * FROM authorization_table WHERE
		toid = mytoid AND rid = myrid
	LOOP
		IF myrec.authid != authid THEN
			RETURN 0;
		ELSE
			RETURN 1;
		END IF;
	END LOOP;

	EXECUTE 'INSERT INTO authorization_table VALUES ('||
		quote_literal(mytoid::text)||','||quote_literal(myrid)||
		','||quote_literal(expires::text)||
		','||quote_literal(authid) ||')';

	GET DIAGNOSTICS ret = ROW_COUNT;

	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.lockrow(text, text, text, timestamp);

CREATE OR REPLACE FUNCTION public.lockrow(text, text, text, timestamp without time zone)
 RETURNS integer
 LANGUAGE sql
 STRICT
AS $function$ SELECT LockRow(current_schema(), $1, $2, $3, $4); $function$
;

-- DROP FUNCTION public.longtransactionsenabled();

CREATE OR REPLACE FUNCTION public.longtransactionsenabled()
 RETURNS boolean
 LANGUAGE plpgsql
AS $function$
DECLARE
	rec RECORD;
BEGIN
	FOR rec IN SELECT oid FROM pg_class WHERE relname = 'authorized_tables'
	LOOP
		return 't';
	END LOOP;
	return 'f';
END;
$function$
;

-- DROP FUNCTION public.narration(varchar, date);

CREATE OR REPLACE FUNCTION public.narration(id character varying, dat date)
 RETURNS TABLE(vegetation_text text)
 LANGUAGE plpgsql
AS $function$ 
Begin
DECLARE
cloud_percentage Double Precision;
cloud_advisory TEXT;
Begin
SELECT Round(cloud_cover::numeric,2) INTO cloud_percentage
FROM farm_ndvi_v2
WHERE farm_crop_id = id AND date = dat;
IF cloud_percentage IS NOT NULL and cloud_percentage != 0 THEN
   cloud_advisory := 'The image has ' || cloud_percentage || '% of cloud which may impact the NDVI.';
   ELSE
   cloud_advisory := '';
END IF;

return query 
With vegetation_data as  (
	SELECT 'No Vegetation' AS Description,  ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_less_then_0 + f.range_0_to_01)::numeric,2) AS "percentage"
	FROM farm_ndvi_v2 f
	INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	WHERE f.farm_crop_id = id
  	AND f.date = dat
  	AND f.val = 1
	
		UNION ALL
			
SELECT 'Low Vegetation' AS Description, ROUND((((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105))) ::numeric,2) AS "area", ROUND((f.range_01_to_02 + f.range_02_to_03) ::numeric,2) AS "percentage"
	FROM farm_ndvi_v2 f
	INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	WHERE f.farm_crop_id = id
  	AND f.date = dat
  	AND f.val = 1
	
	UNION ALL 
			
SELECT 'Medium Vegetation' AS Description, ROUND((((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)) +((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_03_to_04 + f.range_04_to_05)::numeric,2) AS "percentage"
	FROM farm_ndvi_v2 f
	INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	WHERE f.farm_crop_id = id
  	AND f.date = dat
  	AND f.val = 1
	
	UNION ALL 
	
SELECT 'High Vegetation' AS Description, ROUND((((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105))+((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105))+((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) +((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_05_to_06 + f.range_06_to_07 + f.range_07_to_08 + f.range_08_to_09 + f.range_09_to_1)::numeric,2) AS "percentage"
	FROM farm_ndvi_v2 f
	INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	WHERE f.farm_crop_id = id
  	AND f.date = dat
  	AND f.val = 1
), max_vegetation_text as (select CONCAT(
    'The field contains ',
    description,
    ' of about ',
    percentage,
    '% (',
    area,
    ' acres) '
  ) AS vegetation_text from vegetation_data
  WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
), other_vegetation as (
select CONCAT(
    'and contains ',
    description,
    ' of about ',
    percentage,
    '% (',
    area,
    ' acres)'
  ) AS other_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  other_vegetation_text as(
  SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
FROM other_vegetation
	)
select concat(cloud_advisory, m.vegetation_text, l.vegetation_text) as advisory from
max_vegetation_text m
inner join
other_vegetation_text l on 1=1;
END;
end;
$function$
;

-- DROP FUNCTION public.ndvi_difference(varchar, date, varchar);

CREATE OR REPLACE FUNCTION public.ndvi_difference(id character varying, dat date, id_1 character varying)
 RETURNS TABLE(difference text)
 LANGUAGE plpgsql
AS $function$
DECLARE
  current_ndvi Double PRECISION;
  previous_ndvi Double PRECISION;
  ndvi_difference Double Precision;
  current_cloud_cover Double Precision;
  previous_cloud_cover Double Precision;
  difference TEXT;
BEGIN
  WITH ndvi_averages AS (
    SELECT 
      image_date, 
      cloud_cover as current_cloud, 
      lag(cloud_cover) over (order by image_date) as previous_cloud, 
      ndvi_avg AS cur_ndvi, 
      lag(ndvi_avg) OVER (ORDER BY image_date) AS pre_ndvi  
    FROM 
      farm_ndvi_v3 
    WHERE 
      farm_id = id 
    ORDER BY 
      image_date
  ), differences AS (
    SELECT 
	  cur_ndvi as cn,
	  pre_ndvi as pn,
      Round((((cur_ndvi - pre_ndvi) / pre_ndvi) * 100)::numeric,2) AS dif, 
      current_cloud as cc, 
      previous_cloud as pc
    FROM 
      ndvi_averages 
    WHERE 
      image_date = dat
  ) 
  SELECT cn, pn
    dif, cc, pc 
  INTO 
    current_ndvi, previous_ndvi, ndvi_difference, current_cloud_cover, previous_cloud_cover
  FROM 
    differences;

  IF ndvi_difference IS NOT NULL AND ndvi_difference > 0 and current_ndvi > 0.25  AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := '. Compared to the previous NDVI image, the average vegetation in the field has increased by ' || ABS(ndvi_difference) || '%.';
  ELSIF ndvi_difference IS NOT NULL AND ndvi_difference < 0 and previous_ndvi > 0.25 AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := '. Compared to the previous NDVI image, the average vegetation in the field has decreased by ' || ABS(ndvi_difference) || '% .';
  ELSE 
     difference := '';
  END IF;

  RETURN QUERY SELECT difference;
END;
$function$
;

-- DROP FUNCTION public.ndvi_difference(varchar, date);

CREATE OR REPLACE FUNCTION public.ndvi_difference(id character varying, dat date)
 RETURNS TABLE(difference text)
 LANGUAGE plpgsql
AS $function$
DECLARE
  current_ndvi Double PRECISION;
  previous_ndvi Double PRECISION;
  ndvi_difference Double Precision;
  current_cloud_cover Double Precision;
  previous_cloud_cover Double Precision;
  difference TEXT;
BEGIN
  WITH ndvi_averages AS (
    SELECT 
      image_date, 
      cloud_cover as current_cloud, 
      lag(cloud_cover) over (order by image_date) as previous_cloud, 
      ndvi_avg AS cur_ndvi, 
      lag(ndvi_avg) OVER (ORDER BY image_date) AS pre_ndvi  
    FROM 
      farm_ndvi_v3 
    WHERE 
      farm_id = id 
    ORDER BY 
      image_date
  ), differences AS (
    SELECT 
	  cur_ndvi as cn,
	  pre_ndvi as pn,
      Round((((cur_ndvi - pre_ndvi) / pre_ndvi) * 100)::numeric,2) AS dif, 
      current_cloud as cc, 
      previous_cloud as pc
    FROM 
      ndvi_averages 
    WHERE 
      image_date = dat and pre_ndvi > 0
  ) 
  SELECT cn, pn,
    dif, cc, pc 
  INTO 
    current_ndvi, previous_ndvi, ndvi_difference, current_cloud_cover, previous_cloud_cover
  FROM 
    differences;

  IF ndvi_difference IS NOT NULL AND ndvi_difference > 0 and current_ndvi > 0.25  AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := 'Compared to the previous NDVI image, the average vegetation in the field has increased by ' || ABS(ndvi_difference) || '%.';
  ELSIF ndvi_difference IS NOT NULL AND ndvi_difference < 0 and previous_ndvi > 0.25 AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := 'Compared to the previous NDVI image, the average vegetation in the field has decreased by ' || ABS(ndvi_difference) || '%.';
  ELSE 
     difference := NULL;
  END IF;

  RETURN QUERY SELECT difference;
END;
$function$
;

-- DROP FUNCTION public.ndvi_difference_urdu(varchar, date);

CREATE OR REPLACE FUNCTION public.ndvi_difference_urdu(id character varying, dat date)
 RETURNS TABLE(difference text)
 LANGUAGE plpgsql
AS $function$
DECLARE
  current_ndvi Double PRECISION;
  previous_ndvi Double PRECISION;
  ndvi_difference Double Precision;
  current_cloud_cover Double Precision;
  previous_cloud_cover Double Precision;
  difference TEXT;
BEGIN
  WITH ndvi_averages AS (
    SELECT 
      image_date, 
      cloud_cover as current_cloud, 
      lag(cloud_cover) over (order by image_date) as previous_cloud, 
      ndvi_avg AS cur_ndvi, 
      lag(ndvi_avg) OVER (ORDER BY image_date) AS pre_ndvi  
    FROM 
      farm_ndvi_v3 
    WHERE 
      farm_id = id 
    ORDER BY 
      image_date
  ), differences AS (
    SELECT 
	  cur_ndvi as cn,
	  pre_ndvi as pn,
      Round((((cur_ndvi - pre_ndvi) / pre_ndvi) * 100)::numeric,2) AS dif, 
      current_cloud as cc, 
      previous_cloud as pc
    FROM 
      ndvi_averages 
    WHERE 
      image_date = dat and pre_ndvi > 0
  ) 
  SELECT cn, pn,
    dif, cc, pc 
  INTO 
    current_ndvi, previous_ndvi, ndvi_difference, current_cloud_cover, previous_cloud_cover
  FROM 
    differences;

  IF ndvi_difference IS NOT NULL AND ndvi_difference > 0 and current_ndvi > 0.25  AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := ' پِچھلے این ڈی وی آئی تصویر کے مقابلے، کھیت میں اوسطاً ' || ABS(ndvi_difference) || ' فیصد سبزے کا اضافہ ہوا ہے۔';
  ELSIF ndvi_difference IS NOT NULL AND ndvi_difference < 0 and previous_ndvi > 0.25 AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference :=' پِچھلے این ڈی وی آئی تصویر کے مقابلے، کھیت میں اوسطاً ' || ABS(ndvi_difference) ||' فیصد سبزے میں کمی ہوئی ہے۔'; 

  ELSE 
     difference := NULL;
  END IF;

  RETURN QUERY SELECT difference;
END;
$function$
;

-- DROP FUNCTION public.ndvi_difference_v2(varchar, date);

CREATE OR REPLACE FUNCTION public.ndvi_difference_v2(id character varying, dat date)
 RETURNS TABLE(difference text)
 LANGUAGE plpgsql
AS $function$
DECLARE
  current_ndvi Double PRECISION;
  previous_ndvi Double PRECISION;
  ndvi_difference Double Precision;
  current_cloud_cover Double Precision;
  previous_cloud_cover Double Precision;
  difference TEXT;
BEGIN
  WITH ndvi_averages AS (
    SELECT 
      image_date, 
      cloud_cover as current_cloud, 
      lag(cloud_cover) over (order by image_date) as previous_cloud, 
      ndvi_avg AS cur_ndvi, 
      lag(ndvi_avg) OVER (ORDER BY image_date) AS pre_ndvi  
    FROM 
      farm_ndvi_v3 
    WHERE 
      farm_id = id 
    ORDER BY 
      image_date
  ), differences AS (
    SELECT 
	  cur_ndvi as cn,
	  pre_ndvi as pn,
      Round((((cur_ndvi - pre_ndvi) / pre_ndvi) * 100)::numeric,2) AS dif, 
      current_cloud as cc, 
      previous_cloud as pc
    FROM 
      ndvi_averages 
    WHERE 
      image_date = dat
  ) 
  SELECT cn, pn,
    dif, cc, pc 
  INTO 
    current_ndvi, previous_ndvi, ndvi_difference, current_cloud_cover, previous_cloud_cover
  FROM 
    differences;

  IF ndvi_difference IS NOT NULL AND ndvi_difference > 0 and current_ndvi > 0.25  AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := 'Compared to the previous NDVI image, the average vegetation in the field has increased by ' || ABS(ndvi_difference) || '%.';
  ELSIF ndvi_difference IS NOT NULL AND ndvi_difference < 0 and previous_ndvi > 0.25 AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := 'Compared to the previous NDVI image, the average vegetation in the field has decreased by ' || ABS(ndvi_difference) || '%.';
  ELSE 
     difference := NULL;
  END IF;

  RETURN QUERY SELECT difference;
END;
$function$
;

-- DROP FUNCTION public.ndvi_narration(varchar, date);

CREATE OR REPLACE FUNCTION public.ndvi_narration(id character varying, dat date)
 RETURNS TABLE(vegetation_text text)
 LANGUAGE plpgsql
AS $function$ 
Begin
DECLARE
cloud_percentage Double Precision;
cloud_advisory TEXT;
Begin
SELECT Round(cloud_cover::numeric,2) INTO cloud_percentage
FROM farm_ndvi_v3
WHERE farm_id = id AND image_date = dat;
IF cloud_percentage IS NOT NULL and cloud_percentage != 0 THEN
   cloud_advisory := 'The image has ' || cloud_percentage || '% of cloud which may impact the NDVI. ';
   ELSE
   cloud_advisory := '';
END IF;
return query 
With vegetation_data as  (
	SELECT 'No Vegetation' AS Description,  ROUND((((f.range_less_0/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_0_005/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_005_01/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_less_0 + f.range_0_005 + f.range_005_01)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
		UNION ALL
			
SELECT 'Low Vegetation' AS Description, ROUND((((f.range_01_015/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_015_020/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_020_025/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_025_030/100) * (st_area(b.geom::geography)*0.000247105))) ::numeric,2) AS "area", ROUND((f.range_01_015 + f.range_015_020 + f.range_020_025 + f.range_025_030) ::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
			
SELECT 'Medium Vegetation' AS Description, ROUND((((f.range_030_035/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_035_040/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_040_045/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_045_050/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_030_035 + f.range_035_040 + f.range_040_045 + f.range_045_050)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
	
SELECT 'High Vegetation' AS Description, ROUND((((f.range_050_055/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_055_060/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_060_065/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_065_070/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_070_075/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_075_080/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_080_085/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_085_090/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_090_095/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_095_1/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_050_055 + f.range_055_060 + f.range_060_065 + f.range_065_070 + f.range_070_075 + f.range_075_080 + f.range_080_085 + f.range_085_090 + f.range_090_095 + f.range_095_1)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
), max_vegetation_text as (select CONCAT(
    'The field encompasses approximately ',
    percentage,
	'% (',
    area,
    ' acres) '
	' of ',
    description
  ) AS vegetation_text from vegetation_data
  WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
), min_vegetation as (
select CONCAT(
	', and ',
	percentage,
	'% (',
    area,
    ' acres)',
	' of ',
    description
  ) AS min_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) and percentage in (SELECT Min(percentage) FROM vegetation_data  where percentage > 0) order by percentage desc), 
  other_vegetation as (
	select CONCAT(
		', ',
	percentage,
	'% (',
    area,
    ' acres)',
	' of ',
    description
  ) AS other_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) and percentage not in (SELECT Min(percentage) FROM vegetation_data  where percentage > 0) order by percentage desc),
  other_vegetation_text as(
  SELECT STRING_AGG(other_vegetation_text, '') AS vegetation_text
FROM other_vegetation
	)
SELECT
    CASE
        WHEN (SELECT COUNT(*) FROM vegetation_data WHERE percentage > 0) > 1 THEN
            CONCAT('NDVI Report:', E'\n', cloud_advisory, m.vegetation_text, l.vegetation_text, k.min_vegetation_text, '.')
        ELSE
            CONCAT('NDVI Report:', E'\n', cloud_advisory, m.vegetation_text, '.')
    END AS advisory
FROM max_vegetation_text m
LEFT JOIN other_vegetation_text l ON 1=1
LEFT JOIN min_vegetation k ON 1=1;
END;
end;
$function$
;

-- DROP FUNCTION public.ndvi_narration_urdu(varchar, date);

CREATE OR REPLACE FUNCTION public.ndvi_narration_urdu(id character varying, dat date)
 RETURNS TABLE(vegetation_text text)
 LANGUAGE plpgsql
AS $function$ 
Begin
DECLARE
cloud_percentage Double Precision;
cloud_advisory TEXT;
Begin
SELECT Round(cloud_cover::numeric,2) INTO cloud_percentage
FROM farm_ndvi_v3
WHERE farm_id = id AND image_date = dat;
IF cloud_percentage IS NOT NULL and cloud_percentage != 0 THEN
   cloud_advisory := 'فیصد بادل ہیں جوکہ این ڈی وی آئی کو متاثر کر سکتے ہیں ' || cloud_percentage || ' تصویر میں';
   ELSE
   cloud_advisory := '';
END IF;
return query 
With vegetation_data as  (
	SELECT 'کوئی سبزہ نہیں' AS Description,  ROUND((((f.range_less_0/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_0_005/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_005_01/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_less_0 + f.range_0_005 + f.range_005_01)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
		UNION ALL
			
SELECT 'کم سبزہ' AS Description, ROUND((((f.range_01_015/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_015_020/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_020_025/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_025_030/100) * (st_area(b.geom::geography)*0.000247105))) ::numeric,2) AS "area", ROUND((f.range_01_015 + f.range_015_020 + f.range_020_025 + f.range_025_030) ::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
			
SELECT 'درمیانہ سبزہ' AS Description, ROUND((((f.range_030_035/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_035_040/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_040_045/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_045_050/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_030_035 + f.range_035_040 + f.range_040_045 + f.range_045_050)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
	
SELECT 'زیادہ سبزہ' AS Description, ROUND((((f.range_050_055/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_055_060/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_060_065/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_065_070/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_070_075/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_075_080/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_080_085/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_085_090/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_090_095/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_095_1/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_050_055 + f.range_055_060 + f.range_060_065 + f.range_065_070 + f.range_070_075 + f.range_075_080 + f.range_080_085 + f.range_085_090 + f.range_090_095 + f.range_095_1)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
), max_vegetation_text as (select CONCAT(
    'کھیت کے تقریباً ',
    percentage,
	' فیصد (',
    area,
    ' ایکڑ) '
	'حصہ پر ',
    description
  ) AS vegetation_text from vegetation_data
  WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
), min_vegetation as (
select CONCAT(
	', اور ',
	percentage,
	' فیصد (',
    area,
    ' ایکڑ) '
	'حصہ پر ',
    description
  ) AS min_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) and percentage in (SELECT Min(percentage) FROM vegetation_data  where percentage > 0) order by percentage desc), 
  other_vegetation as (
	select CONCAT(
		', ',
	percentage,
	' فیصد (',
    area,
    ' ایکڑ) '
	'حصہ پر ',
    description
  ) AS other_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) and percentage not in (SELECT Min(percentage) FROM vegetation_data  where percentage > 0) order by percentage desc),
  other_vegetation_text as(
  SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
FROM other_vegetation
	)
SELECT
    CASE
        WHEN (SELECT COUNT(*) FROM vegetation_data WHERE percentage > 0) > 1 THEN
            CONCAT('این ڈی وائی آئی رپورٹ:', E'\n', cloud_advisory, m.vegetation_text, l.vegetation_text, k.min_vegetation_text, ' ہے۔ ')
        ELSE
            CONCAT('این ڈی وائی آئی رپورٹ:', E'\n', cloud_advisory, m.vegetation_text, ' ہے۔ ')
    END AS advisory
FROM max_vegetation_text m
LEFT JOIN other_vegetation_text l ON 1=1
LEFT JOIN min_vegetation k ON 1=1;
END;
end;
$function$
;

-- DROP FUNCTION public.ndvi_narration_v2(varchar, date);

CREATE OR REPLACE FUNCTION public.ndvi_narration_v2(id character varying, dat date)
 RETURNS TABLE(vegetation_text text)
 LANGUAGE plpgsql
AS $function$ 
Begin
DECLARE
cloud_percentage Double Precision;
cloud_advisory TEXT;
Begin
SELECT Round(cloud_cover::numeric,2) INTO cloud_percentage
FROM farm_ndvi_v3
WHERE farm_id = id AND image_date = dat;
IF cloud_percentage IS NOT NULL and cloud_percentage != 0 THEN
   cloud_advisory := 'The image has ' || cloud_percentage || '% of cloud which may impact the NDVI. ';
   ELSE
   cloud_advisory := '';
END IF;
return query 
With vegetation_data as  (
	SELECT 'No Vegetation' AS Description,  ROUND((((f.range_less_0/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_0_005/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_005_01/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_less_0 + f.range_0_005 + f.range_005_01)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
		UNION ALL
			
SELECT 'Low Vegetation' AS Description, ROUND((((f.range_01_015/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_015_020/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_020_025/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_025_030/100) * (st_area(b.geom::geography)*0.000247105))) ::numeric,2) AS "area", ROUND((f.range_01_015 + f.range_015_020 + f.range_020_025 + f.range_025_030) ::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
			
SELECT 'Medium Vegetation' AS Description, ROUND((((f.range_030_035/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_035_040/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_040_045/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_045_050/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_030_035 + f.range_035_040 + f.range_040_045 + f.range_045_050)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
	
SELECT 'High Vegetation' AS Description, ROUND((((f.range_050_055/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_055_060/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_060_065/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_065_070/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_070_075/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_075_080/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_080_085/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_085_090/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_090_095/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_095_1/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_050_055 + f.range_055_060 + f.range_060_065 + f.range_065_070 + f.range_070_075 + f.range_075_080 + f.range_080_085 + f.range_085_090 + f.range_090_095 + f.range_095_1)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
), max_vegetation_text as (select CONCAT(
    'The field encompasses approximately ',
    percentage,
	'% (',
    area,
    ' acres) '
	' of ',
    description,
	', '    
  ) AS vegetation_text from vegetation_data
  WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
), min_vegetation as (
select CONCAT(
	'and ',
	percentage,
	'% (',
    area,
    ' acres)',
	' of ',
    description
  ) AS min_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) and percentage in (SELECT Min(percentage) FROM vegetation_data  where percentage > 0) order by percentage desc), 
  other_vegetation as (
	select CONCAT(
	percentage,
	'% (',
    area,
    ' acres)',
	' of ',
    description,
		', '
  ) AS other_vegetation_text from vegetation_data
  WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) and percentage not in (SELECT Min(percentage) FROM vegetation_data  where percentage > 0) order by percentage desc),
  other_vegetation_text as(
  SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
FROM other_vegetation
	)
SELECT CONCAT('NDVI BASED ADVISORY:', E'\n', cloud_advisory, m.vegetation_text, l.vegetation_text, k.min_vegetation_text, '.') AS advisory
FROM max_vegetation_text m
INNER JOIN other_vegetation_text l ON 1=1
INNER JOIN min_vegetation k ON 1=1;
END;
end;
$function$
;

-- DROP FUNCTION public.normal_rand(int4, float8, float8);

CREATE OR REPLACE FUNCTION public.normal_rand(integer, double precision, double precision)
 RETURNS SETOF double precision
 LANGUAGE c
 STRICT
AS '$libdir/tablefunc', $function$normal_rand$function$
;

-- DROP FUNCTION public.overlaps_2d(box2df, box2df);

CREATE OR REPLACE FUNCTION public.overlaps_2d(box2df, box2df)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_contains_box2df_box2df_2d$function$
;

-- DROP FUNCTION public.overlaps_2d(geometry, box2df);

CREATE OR REPLACE FUNCTION public.overlaps_2d(geometry, box2df)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 1
AS $function$SELECT $2 OPERATOR(public.&&) $1;$function$
;

-- DROP FUNCTION public.overlaps_2d(box2df, geometry);

CREATE OR REPLACE FUNCTION public.overlaps_2d(box2df, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_overlaps_box2df_geom_2d$function$
;

-- DROP FUNCTION public.overlaps_geog(geography, gidx);

CREATE OR REPLACE FUNCTION public.overlaps_geog(geography, gidx)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE STRICT
AS $function$SELECT $2 OPERATOR(public.&&) $1;$function$
;

-- DROP FUNCTION public.overlaps_geog(gidx, geography);

CREATE OR REPLACE FUNCTION public.overlaps_geog(gidx, geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE STRICT
AS '$libdir/postgis-3', $function$gserialized_gidx_geog_overlaps$function$
;

-- DROP FUNCTION public.overlaps_geog(gidx, gidx);

CREATE OR REPLACE FUNCTION public.overlaps_geog(gidx, gidx)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE STRICT
AS '$libdir/postgis-3', $function$gserialized_gidx_gidx_overlaps$function$
;

-- DROP FUNCTION public.overlaps_nd(gidx, gidx);

CREATE OR REPLACE FUNCTION public.overlaps_nd(gidx, gidx)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_gidx_gidx_overlaps$function$
;

-- DROP FUNCTION public.overlaps_nd(geometry, gidx);

CREATE OR REPLACE FUNCTION public.overlaps_nd(geometry, gidx)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 1
AS $function$SELECT $2 OPERATOR(public.&&&) $1;$function$
;

-- DROP FUNCTION public.overlaps_nd(gidx, geometry);

CREATE OR REPLACE FUNCTION public.overlaps_nd(gidx, geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$gserialized_gidx_geom_overlaps$function$
;

-- DROP FUNCTION public."path"(geometry);

CREATE OR REPLACE FUNCTION public.path(geometry)
 RETURNS path
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_to_path$function$
;

-- DROP FUNCTION public.pgis_asflatgeobuf_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_asflatgeobuf_finalfn(internal)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asflatgeobuf_finalfn$function$
;

-- DROP FUNCTION public.pgis_asflatgeobuf_transfn(internal, anyelement, bool, text);

CREATE OR REPLACE FUNCTION public.pgis_asflatgeobuf_transfn(internal, anyelement, boolean, text)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_asflatgeobuf_transfn$function$
;

-- DROP FUNCTION public.pgis_asflatgeobuf_transfn(internal, anyelement, bool);

CREATE OR REPLACE FUNCTION public.pgis_asflatgeobuf_transfn(internal, anyelement, boolean)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_asflatgeobuf_transfn$function$
;

-- DROP FUNCTION public.pgis_asflatgeobuf_transfn(internal, anyelement);

CREATE OR REPLACE FUNCTION public.pgis_asflatgeobuf_transfn(internal, anyelement)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_asflatgeobuf_transfn$function$
;

-- DROP FUNCTION public.pgis_asgeobuf_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_asgeobuf_finalfn(internal)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asgeobuf_finalfn$function$
;

-- DROP FUNCTION public.pgis_asgeobuf_transfn(internal, anyelement, text);

CREATE OR REPLACE FUNCTION public.pgis_asgeobuf_transfn(internal, anyelement, text)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_asgeobuf_transfn$function$
;

-- DROP FUNCTION public.pgis_asgeobuf_transfn(internal, anyelement);

CREATE OR REPLACE FUNCTION public.pgis_asgeobuf_transfn(internal, anyelement)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_asgeobuf_transfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_combinefn(internal, internal);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_combinefn(internal, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_combinefn$function$
;

-- DROP FUNCTION public.pgis_asmvt_deserialfn(bytea, internal);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_deserialfn(bytea, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_deserialfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_finalfn(internal)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_finalfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_serialfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_serialfn(internal)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_serialfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text, int4);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text, integer)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_transfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_transfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text, int4, text, text);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text, integer, text, text)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_transfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_transfn(internal, anyelement);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_transfn(internal, anyelement)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_transfn$function$
;

-- DROP FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text, int4, text);

CREATE OR REPLACE FUNCTION public.pgis_asmvt_transfn(internal, anyelement, text, integer, text)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_asmvt_transfn$function$
;

-- DROP FUNCTION public.pgis_geometry_accum_transfn(internal, geometry, float8);

CREATE OR REPLACE FUNCTION public.pgis_geometry_accum_transfn(internal, geometry, double precision)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_geometry_accum_transfn$function$
;

-- DROP FUNCTION public.pgis_geometry_accum_transfn(internal, geometry);

CREATE OR REPLACE FUNCTION public.pgis_geometry_accum_transfn(internal, geometry)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_geometry_accum_transfn$function$
;

-- DROP FUNCTION public.pgis_geometry_accum_transfn(internal, geometry, float8, int4);

CREATE OR REPLACE FUNCTION public.pgis_geometry_accum_transfn(internal, geometry, double precision, integer)
 RETURNS internal
 LANGUAGE c
 PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_geometry_accum_transfn$function$
;

-- DROP FUNCTION public.pgis_geometry_clusterintersecting_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_clusterintersecting_finalfn(internal)
 RETURNS geometry[]
 LANGUAGE c
 PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_geometry_clusterintersecting_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_clusterwithin_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_clusterwithin_finalfn(internal)
 RETURNS geometry[]
 LANGUAGE c
 PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_geometry_clusterwithin_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_collect_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_collect_finalfn(internal)
 RETURNS geometry
 LANGUAGE c
 PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_geometry_collect_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_coverageunion_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_coverageunion_finalfn(internal)
 RETURNS geometry
 LANGUAGE c
 PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_geometry_coverageunion_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_makeline_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_makeline_finalfn(internal)
 RETURNS geometry
 LANGUAGE c
 PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_geometry_makeline_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_polygonize_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_polygonize_finalfn(internal)
 RETURNS geometry
 LANGUAGE c
 PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_geometry_polygonize_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_union_parallel_combinefn(internal, internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_union_parallel_combinefn(internal, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE
AS '$libdir/postgis-3', $function$pgis_geometry_union_parallel_combinefn$function$
;

-- DROP FUNCTION public.pgis_geometry_union_parallel_deserialfn(bytea, internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_union_parallel_deserialfn(bytea, internal)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$pgis_geometry_union_parallel_deserialfn$function$
;

-- DROP FUNCTION public.pgis_geometry_union_parallel_finalfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_union_parallel_finalfn(internal)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$pgis_geometry_union_parallel_finalfn$function$
;

-- DROP FUNCTION public.pgis_geometry_union_parallel_serialfn(internal);

CREATE OR REPLACE FUNCTION public.pgis_geometry_union_parallel_serialfn(internal)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$pgis_geometry_union_parallel_serialfn$function$
;

-- DROP FUNCTION public.pgis_geometry_union_parallel_transfn(internal, geometry);

CREATE OR REPLACE FUNCTION public.pgis_geometry_union_parallel_transfn(internal, geometry)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE
AS '$libdir/postgis-3', $function$pgis_geometry_union_parallel_transfn$function$
;

-- DROP FUNCTION public.pgis_geometry_union_parallel_transfn(internal, geometry, float8);

CREATE OR REPLACE FUNCTION public.pgis_geometry_union_parallel_transfn(internal, geometry, double precision)
 RETURNS internal
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$pgis_geometry_union_parallel_transfn$function$
;

-- DROP FUNCTION public.pgp_armor_headers(in text, out text, out text);

CREATE OR REPLACE FUNCTION public.pgp_armor_headers(text, OUT key text, OUT value text)
 RETURNS SETOF record
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_armor_headers$function$
;

-- DROP FUNCTION public.pgp_key_id(bytea);

CREATE OR REPLACE FUNCTION public.pgp_key_id(bytea)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_key_id_w$function$
;

-- DROP FUNCTION public.pgp_pub_decrypt(bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt(bytea, bytea, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$
;

-- DROP FUNCTION public.pgp_pub_decrypt(bytea, bytea);

CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt(bytea, bytea)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$
;

-- DROP FUNCTION public.pgp_pub_decrypt(bytea, bytea, text, text);

CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt(bytea, bytea, text, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$
;

-- DROP FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea);

CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text, text);

CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_pub_decrypt_bytea(bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_pub_encrypt(text, bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt(text, bytea, text)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$
;

-- DROP FUNCTION public.pgp_pub_encrypt(text, bytea);

CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt(text, bytea)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$
;

-- DROP FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea);

CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_pub_encrypt_bytea(bytea, bytea, text)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_pub_encrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_sym_decrypt(bytea, text, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt(bytea, text, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$
;

-- DROP FUNCTION public.pgp_sym_decrypt(bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt(bytea, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$
;

-- DROP FUNCTION public.pgp_sym_decrypt_bytea(bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt_bytea(bytea, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_sym_decrypt_bytea(bytea, text, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_decrypt_bytea(bytea, text, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_decrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_sym_encrypt(text, text, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt(text, text, text)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_text$function$
;

-- DROP FUNCTION public.pgp_sym_encrypt(text, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt(text, text)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_text$function$
;

-- DROP FUNCTION public.pgp_sym_encrypt_bytea(bytea, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt_bytea(bytea, text)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_bytea$function$
;

-- DROP FUNCTION public.pgp_sym_encrypt_bytea(bytea, text, text);

CREATE OR REPLACE FUNCTION public.pgp_sym_encrypt_bytea(bytea, text, text)
 RETURNS bytea
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/pgcrypto', $function$pgp_sym_encrypt_bytea$function$
;

-- DROP FUNCTION public.point(geometry);

CREATE OR REPLACE FUNCTION public.point(geometry)
 RETURNS point
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_to_point$function$
;

-- DROP FUNCTION public.polygon(geometry);

CREATE OR REPLACE FUNCTION public.polygon(geometry)
 RETURNS polygon
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_to_polygon$function$
;

-- DROP FUNCTION public.populate_geometry_columns(bool);

CREATE OR REPLACE FUNCTION public.populate_geometry_columns(use_typmod boolean DEFAULT true)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
	inserted	integer;
	oldcount	integer;
	probed	  integer;
	stale	   integer;
	gcs		 RECORD;
	gc		  RECORD;
	gsrid	   integer;
	gndims	  integer;
	gtype	   text;
	query	   text;
	gc_is_valid boolean;

BEGIN
	SELECT count(*) INTO oldcount FROM public.geometry_columns;
	inserted := 0;

	-- Count the number of geometry columns in all tables and views
	SELECT count(DISTINCT c.oid) INTO probed
	FROM pg_class c,
		 pg_attribute a,
		 pg_type t,
		 pg_namespace n
	WHERE c.relkind IN('r','v','f', 'p')
		AND t.typname = 'geometry'
		AND a.attisdropped = false
		AND a.atttypid = t.oid
		AND a.attrelid = c.oid
		AND c.relnamespace = n.oid
		AND n.nspname NOT ILIKE 'pg_temp%' AND c.relname != 'raster_columns' ;

	-- Iterate through all non-dropped geometry columns
	RAISE DEBUG 'Processing Tables.....';

	FOR gcs IN
	SELECT DISTINCT ON (c.oid) c.oid, n.nspname, c.relname
		FROM pg_class c,
			 pg_attribute a,
			 pg_type t,
			 pg_namespace n
		WHERE c.relkind IN( 'r', 'f', 'p')
		AND t.typname = 'geometry'
		AND a.attisdropped = false
		AND a.atttypid = t.oid
		AND a.attrelid = c.oid
		AND c.relnamespace = n.oid
		AND n.nspname NOT ILIKE 'pg_temp%' AND c.relname != 'raster_columns'
	LOOP

		inserted := inserted + public.populate_geometry_columns(gcs.oid, use_typmod);
	END LOOP;

	IF oldcount > inserted THEN
		stale = oldcount-inserted;
	ELSE
		stale = 0;
	END IF;

	RETURN 'probed:' ||probed|| ' inserted:'||inserted;
END

$function$
;

-- DROP FUNCTION public.populate_geometry_columns(oid, bool);

CREATE OR REPLACE FUNCTION public.populate_geometry_columns(tbl_oid oid, use_typmod boolean DEFAULT true)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
DECLARE
	gcs		 RECORD;
	gc		  RECORD;
	gc_old	  RECORD;
	gsrid	   integer;
	gndims	  integer;
	gtype	   text;
	query	   text;
	gc_is_valid boolean;
	inserted	integer;
	constraint_successful boolean := false;

BEGIN
	inserted := 0;

	-- Iterate through all geometry columns in this table
	FOR gcs IN
	SELECT n.nspname, c.relname, a.attname, c.relkind
		FROM pg_class c,
			 pg_attribute a,
			 pg_type t,
			 pg_namespace n
		WHERE c.relkind IN('r', 'f', 'p')
		AND t.typname = 'geometry'
		AND a.attisdropped = false
		AND a.atttypid = t.oid
		AND a.attrelid = c.oid
		AND c.relnamespace = n.oid
		AND n.nspname NOT ILIKE 'pg_temp%'
		AND c.oid = tbl_oid
	LOOP

		RAISE DEBUG 'Processing column %.%.%', gcs.nspname, gcs.relname, gcs.attname;

		gc_is_valid := true;
		-- Find the srid, coord_dimension, and type of current geometry
		-- in geometry_columns -- which is now a view

		SELECT type, srid, coord_dimension, gcs.relkind INTO gc_old
			FROM geometry_columns
			WHERE f_table_schema = gcs.nspname AND f_table_name = gcs.relname AND f_geometry_column = gcs.attname;

		IF upper(gc_old.type) = 'GEOMETRY' THEN
		-- This is an unconstrained geometry we need to do something
		-- We need to figure out what to set the type by inspecting the data
			EXECUTE 'SELECT public.ST_srid(' || quote_ident(gcs.attname) || ') As srid, public.GeometryType(' || quote_ident(gcs.attname) || ') As type, public.ST_NDims(' || quote_ident(gcs.attname) || ') As dims ' ||
					 ' FROM ONLY ' || quote_ident(gcs.nspname) || '.' || quote_ident(gcs.relname) ||
					 ' WHERE ' || quote_ident(gcs.attname) || ' IS NOT NULL LIMIT 1;'
				INTO gc;
			IF gc IS NULL THEN -- there is no data so we can not determine geometry type
				RAISE WARNING 'No data in table %.%, so no information to determine geometry type and srid', gcs.nspname, gcs.relname;
				RETURN 0;
			END IF;
			gsrid := gc.srid; gtype := gc.type; gndims := gc.dims;

			IF use_typmod THEN
				BEGIN
					EXECUTE 'ALTER TABLE ' || quote_ident(gcs.nspname) || '.' || quote_ident(gcs.relname) || ' ALTER COLUMN ' || quote_ident(gcs.attname) ||
						' TYPE geometry(' || postgis_type_name(gtype, gndims, true) || ', ' || gsrid::text  || ') ';
					inserted := inserted + 1;
				EXCEPTION
						WHEN invalid_parameter_value OR feature_not_supported THEN
						RAISE WARNING 'Could not convert ''%'' in ''%.%'' to use typmod with srid %, type %: %', quote_ident(gcs.attname), quote_ident(gcs.nspname), quote_ident(gcs.relname), gsrid, postgis_type_name(gtype, gndims, true), SQLERRM;
							gc_is_valid := false;
				END;

			ELSE
				-- Try to apply srid check to column
				constraint_successful = false;
				IF (gsrid > 0 AND postgis_constraint_srid(gcs.nspname, gcs.relname,gcs.attname) IS NULL ) THEN
					BEGIN
						EXECUTE 'ALTER TABLE ONLY ' || quote_ident(gcs.nspname) || '.' || quote_ident(gcs.relname) ||
								 ' ADD CONSTRAINT ' || quote_ident('enforce_srid_' || gcs.attname) ||
								 ' CHECK (ST_srid(' || quote_ident(gcs.attname) || ') = ' || gsrid || ')';
						constraint_successful := true;
					EXCEPTION
						WHEN check_violation THEN
							RAISE WARNING 'Not inserting ''%'' in ''%.%'' into geometry_columns: could not apply constraint CHECK (st_srid(%) = %)', quote_ident(gcs.attname), quote_ident(gcs.nspname), quote_ident(gcs.relname), quote_ident(gcs.attname), gsrid;
							gc_is_valid := false;
					END;
				END IF;

				-- Try to apply ndims check to column
				IF (gndims IS NOT NULL AND postgis_constraint_dims(gcs.nspname, gcs.relname,gcs.attname) IS NULL ) THEN
					BEGIN
						EXECUTE 'ALTER TABLE ONLY ' || quote_ident(gcs.nspname) || '.' || quote_ident(gcs.relname) || '
								 ADD CONSTRAINT ' || quote_ident('enforce_dims_' || gcs.attname) || '
								 CHECK (st_ndims(' || quote_ident(gcs.attname) || ') = '||gndims||')';
						constraint_successful := true;
					EXCEPTION
						WHEN check_violation THEN
							RAISE WARNING 'Not inserting ''%'' in ''%.%'' into geometry_columns: could not apply constraint CHECK (st_ndims(%) = %)', quote_ident(gcs.attname), quote_ident(gcs.nspname), quote_ident(gcs.relname), quote_ident(gcs.attname), gndims;
							gc_is_valid := false;
					END;
				END IF;

				-- Try to apply geometrytype check to column
				IF (gtype IS NOT NULL AND postgis_constraint_type(gcs.nspname, gcs.relname,gcs.attname) IS NULL ) THEN
					BEGIN
						EXECUTE 'ALTER TABLE ONLY ' || quote_ident(gcs.nspname) || '.' || quote_ident(gcs.relname) || '
						ADD CONSTRAINT ' || quote_ident('enforce_geotype_' || gcs.attname) || '
						CHECK (geometrytype(' || quote_ident(gcs.attname) || ') = ' || quote_literal(gtype) || ')';
						constraint_successful := true;
					EXCEPTION
						WHEN check_violation THEN
							-- No geometry check can be applied. This column contains a number of geometry types.
							RAISE WARNING 'Could not add geometry type check (%) to table column: %.%.%', gtype, quote_ident(gcs.nspname),quote_ident(gcs.relname),quote_ident(gcs.attname);
					END;
				END IF;
				 --only count if we were successful in applying at least one constraint
				IF constraint_successful THEN
					inserted := inserted + 1;
				END IF;
			END IF;
		END IF;

	END LOOP;

	RETURN inserted;
END

$function$
;

-- DROP FUNCTION public.postgis_addbbox(geometry);

CREATE OR REPLACE FUNCTION public.postgis_addbbox(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_addBBOX$function$
;

-- DROP FUNCTION public.postgis_cache_bbox();

CREATE OR REPLACE FUNCTION public.postgis_cache_bbox()
 RETURNS trigger
 LANGUAGE c
AS '$libdir/postgis-3', $function$cache_bbox$function$
;

-- DROP FUNCTION public.postgis_constraint_dims(text, text, text);

CREATE OR REPLACE FUNCTION public.postgis_constraint_dims(geomschema text, geomtable text, geomcolumn text)
 RETURNS integer
 LANGUAGE sql
 STABLE PARALLEL SAFE STRICT COST 250
AS $function$
SELECT  replace(split_part(s.consrc, ' = ', 2), ')', '')::integer
		 FROM pg_class c, pg_namespace n, pg_attribute a
		 , (SELECT connamespace, conrelid, conkey, pg_get_constraintdef(oid) As consrc
			FROM pg_constraint) AS s
		 WHERE n.nspname = $1
		 AND c.relname = $2
		 AND a.attname = $3
		 AND a.attrelid = c.oid
		 AND s.connamespace = n.oid
		 AND s.conrelid = c.oid
		 AND a.attnum = ANY (s.conkey)
		 AND s.consrc LIKE '%ndims(% = %';
$function$
;

-- DROP FUNCTION public.postgis_constraint_srid(text, text, text);

CREATE OR REPLACE FUNCTION public.postgis_constraint_srid(geomschema text, geomtable text, geomcolumn text)
 RETURNS integer
 LANGUAGE sql
 STABLE PARALLEL SAFE STRICT COST 250
AS $function$
SELECT replace(replace(split_part(s.consrc, ' = ', 2), ')', ''), '(', '')::integer
		 FROM pg_class c, pg_namespace n, pg_attribute a
		 , (SELECT connamespace, conrelid, conkey, pg_get_constraintdef(oid) As consrc
			FROM pg_constraint) AS s
		 WHERE n.nspname = $1
		 AND c.relname = $2
		 AND a.attname = $3
		 AND a.attrelid = c.oid
		 AND s.connamespace = n.oid
		 AND s.conrelid = c.oid
		 AND a.attnum = ANY (s.conkey)
		 AND s.consrc LIKE '%srid(% = %';
$function$
;

-- DROP FUNCTION public.postgis_constraint_type(text, text, text);

CREATE OR REPLACE FUNCTION public.postgis_constraint_type(geomschema text, geomtable text, geomcolumn text)
 RETURNS character varying
 LANGUAGE sql
 STABLE PARALLEL SAFE STRICT COST 250
AS $function$
SELECT  replace(split_part(s.consrc, '''', 2), ')', '')::varchar
		 FROM pg_class c, pg_namespace n, pg_attribute a
		 , (SELECT connamespace, conrelid, conkey, pg_get_constraintdef(oid) As consrc
			FROM pg_constraint) AS s
		 WHERE n.nspname = $1
		 AND c.relname = $2
		 AND a.attname = $3
		 AND a.attrelid = c.oid
		 AND s.connamespace = n.oid
		 AND s.conrelid = c.oid
		 AND a.attnum = ANY (s.conkey)
		 AND s.consrc LIKE '%geometrytype(% = %';
$function$
;

-- DROP FUNCTION public.postgis_dropbbox(geometry);

CREATE OR REPLACE FUNCTION public.postgis_dropbbox(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_dropBBOX$function$
;

-- DROP FUNCTION public.postgis_extensions_upgrade(text);

CREATE OR REPLACE FUNCTION public.postgis_extensions_upgrade(target_version text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
	rec record;
	sql text;
	var_schema text;
BEGIN

	FOR rec IN
		SELECT name, default_version, installed_version
		FROM pg_catalog.pg_available_extensions
		WHERE name IN (
			'postgis',
			'postgis_raster',
			'postgis_sfcgal',
			'postgis_topology',
			'postgis_tiger_geocoder'
		)
		ORDER BY length(name) -- this is to make sure 'postgis' is first !
	LOOP --{

		IF target_version IS NULL THEN
			target_version := rec.default_version;
		END IF;

		IF rec.installed_version IS NULL THEN --{
			-- If the support installed by available extension
			-- is found unpackaged, we package it
			IF --{
				 -- PostGIS is always available (this function is part of it)
				 rec.name = 'postgis'

				 -- PostGIS raster is available if type 'raster' exists
				 OR ( rec.name = 'postgis_raster' AND EXISTS (
							SELECT 1 FROM pg_catalog.pg_type
							WHERE typname = 'raster' ) )

				 -- PostGIS SFCGAL is availble if
				 -- 'postgis_sfcgal_version' function exists
				 OR ( rec.name = 'postgis_sfcgal' AND EXISTS (
							SELECT 1 FROM pg_catalog.pg_proc
							WHERE proname = 'postgis_sfcgal_version' ) )

				 -- PostGIS Topology is available if
				 -- 'topology.topology' table exists
				 -- NOTE: watch out for https://trac.osgeo.org/postgis/ticket/2503
				 OR ( rec.name = 'postgis_topology' AND EXISTS (
							SELECT 1 FROM pg_catalog.pg_class c
							JOIN pg_catalog.pg_namespace n ON (c.relnamespace = n.oid )
							WHERE n.nspname = 'topology' AND c.relname = 'topology') )

				 OR ( rec.name = 'postgis_tiger_geocoder' AND EXISTS (
							SELECT 1 FROM pg_catalog.pg_class c
							JOIN pg_catalog.pg_namespace n ON (c.relnamespace = n.oid )
							WHERE n.nspname = 'tiger' AND c.relname = 'geocode_settings') )
			THEN --}{ -- the code is unpackaged
				-- Force install in same schema as postgis
				SELECT INTO var_schema n.nspname
				  FROM pg_namespace n, pg_proc p
				  WHERE p.proname = 'postgis_full_version'
					AND n.oid = p.pronamespace
				  LIMIT 1;
				IF rec.name NOT IN('postgis_topology', 'postgis_tiger_geocoder')
				THEN
					sql := format(
							  'CREATE EXTENSION %1$I SCHEMA %2$I VERSION unpackaged;'
							  'ALTER EXTENSION %1$I UPDATE TO %3$I',
							  rec.name, var_schema, target_version);
				ELSE
					sql := format(
							 'CREATE EXTENSION %1$I VERSION unpackaged;'
							 'ALTER EXTENSION %1$I UPDATE TO %2$I',
							 rec.name, target_version);
				END IF;
				RAISE NOTICE 'Packaging and updating %', rec.name;
				RAISE DEBUG '%', sql;
				EXECUTE sql;
			ELSE
				RAISE DEBUG 'Skipping % (not in use)', rec.name;
			END IF; --}
		ELSE -- The code is already packaged, upgrade it --}{
			sql = format(
				'ALTER EXTENSION %1$I UPDATE TO "ANY";'
				'ALTER EXTENSION %1$I UPDATE TO %2$I',
				rec.name, target_version
				);
			RAISE NOTICE 'Updating extension % %', rec.name, rec.installed_version;
			RAISE DEBUG '%', sql;
			EXECUTE sql;
		END IF; --}

	END LOOP; --}

	RETURN format(
		'Upgrade to version %s completed, run SELECT postgis_full_version(); for details',
		target_version
	);


END
$function$
;

-- DROP FUNCTION public.postgis_full_version();

CREATE OR REPLACE FUNCTION public.postgis_full_version()
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE
AS $function$
DECLARE
	libver text;
	librev text;
	projver text;
	geosver text;
	geosver_compiled text;
	sfcgalver text;
	gdalver text := NULL;
	libxmlver text;
	liblwgeomver text;
	dbproc text;
	relproc text;
	fullver text;
	rast_lib_ver text := NULL;
	rast_scr_ver text := NULL;
	topo_scr_ver text := NULL;
	json_lib_ver text;
	protobuf_lib_ver text;
	wagyu_lib_ver text;
	sfcgal_lib_ver text;
	sfcgal_scr_ver text;
	pgsql_scr_ver text;
	pgsql_ver text;
	core_is_extension bool;
BEGIN
	SELECT public.postgis_lib_version() INTO libver;
	SELECT public.postgis_proj_version() INTO projver;
	SELECT public.postgis_geos_version() INTO geosver;
	SELECT public.postgis_geos_compiled_version() INTO geosver_compiled;
	SELECT public.postgis_libjson_version() INTO json_lib_ver;
	SELECT public.postgis_libprotobuf_version() INTO protobuf_lib_ver;
	SELECT public.postgis_wagyu_version() INTO wagyu_lib_ver;
	SELECT public._postgis_scripts_pgsql_version() INTO pgsql_scr_ver;
	SELECT public._postgis_pgsql_version() INTO pgsql_ver;
	BEGIN
		SELECT public.postgis_gdal_version() INTO gdalver;
	EXCEPTION
		WHEN undefined_function THEN
			RAISE DEBUG 'Function postgis_gdal_version() not found.  Is raster support enabled and rtpostgis.sql installed?';
	END;
	BEGIN
		SELECT public.postgis_sfcgal_full_version() INTO sfcgalver;
		BEGIN
			SELECT public.postgis_sfcgal_scripts_installed() INTO sfcgal_scr_ver;
		EXCEPTION
			WHEN undefined_function THEN
				sfcgal_scr_ver := 'missing';
		END;
	EXCEPTION
		WHEN undefined_function THEN
			RAISE DEBUG 'Function postgis_sfcgal_scripts_installed() not found. Is sfcgal support enabled and sfcgal.sql installed?';
	END;
	SELECT public.postgis_liblwgeom_version() INTO liblwgeomver;
	SELECT public.postgis_libxml_version() INTO libxmlver;
	SELECT public.postgis_scripts_installed() INTO dbproc;
	SELECT public.postgis_scripts_released() INTO relproc;
	SELECT public.postgis_lib_revision() INTO librev;
	BEGIN
		SELECT topology.postgis_topology_scripts_installed() INTO topo_scr_ver;
	EXCEPTION
		WHEN undefined_function OR invalid_schema_name THEN
			RAISE DEBUG 'Function postgis_topology_scripts_installed() not found. Is topology support enabled and topology.sql installed?';
		WHEN insufficient_privilege THEN
			RAISE NOTICE 'Topology support cannot be inspected. Is current user granted USAGE on schema "topology" ?';
		WHEN OTHERS THEN
			RAISE NOTICE 'Function postgis_topology_scripts_installed() could not be called: % (%)', SQLERRM, SQLSTATE;
	END;

	BEGIN
		SELECT postgis_raster_scripts_installed() INTO rast_scr_ver;
	EXCEPTION
		WHEN undefined_function THEN
			RAISE DEBUG 'Function postgis_raster_scripts_installed() not found. Is raster support enabled and rtpostgis.sql installed?';
		WHEN OTHERS THEN
			RAISE NOTICE 'Function postgis_raster_scripts_installed() could not be called: % (%)', SQLERRM, SQLSTATE;
	END;

	BEGIN
		SELECT public.postgis_raster_lib_version() INTO rast_lib_ver;
	EXCEPTION
		WHEN undefined_function THEN
			RAISE DEBUG 'Function postgis_raster_lib_version() not found. Is raster support enabled and rtpostgis.sql installed?';
		WHEN OTHERS THEN
			RAISE NOTICE 'Function postgis_raster_lib_version() could not be called: % (%)', SQLERRM, SQLSTATE;
	END;

	fullver = 'POSTGIS="' || libver;

	IF  librev IS NOT NULL THEN
		fullver = fullver || ' ' || librev;
	END IF;

	fullver = fullver || '"';

	IF EXISTS (
		SELECT * FROM pg_catalog.pg_extension
		WHERE extname = 'postgis')
	THEN
			fullver = fullver || ' [EXTENSION]';
			core_is_extension := true;
	ELSE
			core_is_extension := false;
	END IF;

	IF liblwgeomver != relproc THEN
		fullver = fullver || ' (liblwgeom version mismatch: "' || liblwgeomver || '")';
	END IF;

	fullver = fullver || ' PGSQL="' || pgsql_scr_ver || '"';
	IF pgsql_scr_ver != pgsql_ver THEN
		fullver = fullver || ' (procs need upgrade for use with PostgreSQL "' || pgsql_ver || '")';
	END IF;

	IF  geosver IS NOT NULL THEN
		fullver = fullver || ' GEOS="' || geosver || '"';
		IF (string_to_array(geosver, '.'))[1:2] != (string_to_array(geosver_compiled, '.'))[1:2]
		THEN
			fullver = format('%s (compiled against GEOS %s)', fullver, geosver_compiled);
		END IF;
	END IF;

	IF  sfcgalver IS NOT NULL THEN
		fullver = fullver || ' SFCGAL="' || sfcgalver || '"';
	END IF;

	IF  projver IS NOT NULL THEN
		fullver = fullver || ' PROJ="' || projver || '"';
	END IF;

	IF  gdalver IS NOT NULL THEN
		fullver = fullver || ' GDAL="' || gdalver || '"';
	END IF;

	IF  libxmlver IS NOT NULL THEN
		fullver = fullver || ' LIBXML="' || libxmlver || '"';
	END IF;

	IF json_lib_ver IS NOT NULL THEN
		fullver = fullver || ' LIBJSON="' || json_lib_ver || '"';
	END IF;

	IF protobuf_lib_ver IS NOT NULL THEN
		fullver = fullver || ' LIBPROTOBUF="' || protobuf_lib_ver || '"';
	END IF;

	IF wagyu_lib_ver IS NOT NULL THEN
		fullver = fullver || ' WAGYU="' || wagyu_lib_ver || '"';
	END IF;

	IF dbproc != relproc THEN
		fullver = fullver || ' (core procs from "' || dbproc || '" need upgrade)';
	END IF;

	IF topo_scr_ver IS NOT NULL THEN
		fullver = fullver || ' TOPOLOGY';
		IF topo_scr_ver != relproc THEN
			fullver = fullver || ' (topology procs from "' || topo_scr_ver || '" need upgrade)';
		END IF;
		IF core_is_extension AND NOT EXISTS (
			SELECT * FROM pg_catalog.pg_extension
			WHERE extname = 'postgis_topology')
		THEN
				fullver = fullver || ' [UNPACKAGED!]';
		END IF;
	END IF;

	IF rast_lib_ver IS NOT NULL THEN
		fullver = fullver || ' RASTER';
		IF rast_lib_ver != relproc THEN
			fullver = fullver || ' (raster lib from "' || rast_lib_ver || '" need upgrade)';
		END IF;
		IF core_is_extension AND NOT EXISTS (
			SELECT * FROM pg_catalog.pg_extension
			WHERE extname = 'postgis_raster')
		THEN
				fullver = fullver || ' [UNPACKAGED!]';
		END IF;
	END IF;

	IF rast_scr_ver IS NOT NULL AND rast_scr_ver != relproc THEN
		fullver = fullver || ' (raster procs from "' || rast_scr_ver || '" need upgrade)';
	END IF;

	IF sfcgal_scr_ver IS NOT NULL AND sfcgal_scr_ver != relproc THEN
		fullver = fullver || ' (sfcgal procs from "' || sfcgal_scr_ver || '" need upgrade)';
	END IF;

	-- Check for the presence of deprecated functions
	IF EXISTS ( SELECT oid FROM pg_catalog.pg_proc WHERE proname LIKE '%_deprecated_by_postgis_%' )
	THEN
		fullver = fullver || ' (deprecated functions exist, upgrade is not complete)';
	END IF;

	RETURN fullver;
END
$function$
;

-- DROP FUNCTION public.postgis_geos_compiled_version();

CREATE OR REPLACE FUNCTION public.postgis_geos_compiled_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_geos_compiled_version$function$
;

-- DROP FUNCTION public.postgis_geos_noop(geometry);

CREATE OR REPLACE FUNCTION public.postgis_geos_noop(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$GEOSnoop$function$
;

-- DROP FUNCTION public.postgis_geos_version();

CREATE OR REPLACE FUNCTION public.postgis_geos_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_geos_version$function$
;

-- DROP FUNCTION public.postgis_getbbox(geometry);

CREATE OR REPLACE FUNCTION public.postgis_getbbox(geometry)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_to_BOX2DF$function$
;

-- DROP FUNCTION public.postgis_hasbbox(geometry);

CREATE OR REPLACE FUNCTION public.postgis_hasbbox(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_hasBBOX$function$
;

-- DROP FUNCTION public.postgis_index_supportfn(internal);

CREATE OR REPLACE FUNCTION public.postgis_index_supportfn(internal)
 RETURNS internal
 LANGUAGE c
AS '$libdir/postgis-3', $function$postgis_index_supportfn$function$
;

-- DROP FUNCTION public.postgis_lib_build_date();

CREATE OR REPLACE FUNCTION public.postgis_lib_build_date()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_lib_build_date$function$
;

-- DROP FUNCTION public.postgis_lib_revision();

CREATE OR REPLACE FUNCTION public.postgis_lib_revision()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_lib_revision$function$
;

-- DROP FUNCTION public.postgis_lib_version();

CREATE OR REPLACE FUNCTION public.postgis_lib_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_lib_version$function$
;

-- DROP FUNCTION public.postgis_libjson_version();

CREATE OR REPLACE FUNCTION public.postgis_libjson_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$postgis_libjson_version$function$
;

-- DROP FUNCTION public.postgis_liblwgeom_version();

CREATE OR REPLACE FUNCTION public.postgis_liblwgeom_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_liblwgeom_version$function$
;

-- DROP FUNCTION public.postgis_libprotobuf_version();

CREATE OR REPLACE FUNCTION public.postgis_libprotobuf_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE STRICT
AS '$libdir/postgis-3', $function$postgis_libprotobuf_version$function$
;

-- DROP FUNCTION public.postgis_libxml_version();

CREATE OR REPLACE FUNCTION public.postgis_libxml_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_libxml_version$function$
;

-- DROP FUNCTION public.postgis_noop(geometry);

CREATE OR REPLACE FUNCTION public.postgis_noop(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_noop$function$
;

-- DROP FUNCTION public.postgis_proj_version();

CREATE OR REPLACE FUNCTION public.postgis_proj_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_proj_version$function$
;

-- DROP FUNCTION public.postgis_scripts_build_date();

CREATE OR REPLACE FUNCTION public.postgis_scripts_build_date()
 RETURNS text
 LANGUAGE sql
 IMMUTABLE
AS $function$SELECT '2023-08-16 04:15:31'::text AS version$function$
;

-- DROP FUNCTION public.postgis_scripts_installed();

CREATE OR REPLACE FUNCTION public.postgis_scripts_installed()
 RETURNS text
 LANGUAGE sql
 IMMUTABLE
AS $function$ SELECT trim('3.4.0'::text || $rev$ 0874ea3 $rev$) AS version $function$
;

-- DROP FUNCTION public.postgis_scripts_released();

CREATE OR REPLACE FUNCTION public.postgis_scripts_released()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_scripts_released$function$
;

-- DROP FUNCTION public.postgis_srs(text, text);

CREATE OR REPLACE FUNCTION public.postgis_srs(auth_name text, auth_srid text)
 RETURNS TABLE(auth_name text, auth_srid text, srname text, srtext text, proj4text text, point_sw geometry, point_ne geometry)
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$postgis_srs_entry$function$
;

-- DROP FUNCTION public.postgis_srs_all();

CREATE OR REPLACE FUNCTION public.postgis_srs_all()
 RETURNS TABLE(auth_name text, auth_srid text, srname text, srtext text, proj4text text, point_sw geometry, point_ne geometry)
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$postgis_srs_entry_all$function$
;

-- DROP FUNCTION public.postgis_srs_codes(text);

CREATE OR REPLACE FUNCTION public.postgis_srs_codes(auth_name text)
 RETURNS SETOF text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$postgis_srs_codes$function$
;

-- DROP FUNCTION public.postgis_srs_search(geometry, text);

CREATE OR REPLACE FUNCTION public.postgis_srs_search(bounds geometry, authname text DEFAULT 'EPSG'::text)
 RETURNS TABLE(auth_name text, auth_srid text, srname text, srtext text, proj4text text, point_sw geometry, point_ne geometry)
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$postgis_srs_search$function$
;

-- DROP FUNCTION public.postgis_svn_version();

CREATE OR REPLACE FUNCTION public.postgis_svn_version()
 RETURNS text
 LANGUAGE sql
 IMMUTABLE
AS $function$
	SELECT public._postgis_deprecate(
		'postgis_svn_version', 'postgis_lib_revision', '3.1.0');
	SELECT public.postgis_lib_revision();
$function$
;

-- DROP FUNCTION public.postgis_transform_geometry(geometry, text, text, int4);

CREATE OR REPLACE FUNCTION public.postgis_transform_geometry(geom geometry, text, text, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$transform_geom$function$
;

-- DROP FUNCTION public.postgis_transform_pipeline_geometry(geometry, text, bool, int4);

CREATE OR REPLACE FUNCTION public.postgis_transform_pipeline_geometry(geom geometry, pipeline text, forward boolean, to_srid integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$transform_pipeline_geom$function$
;

-- DROP FUNCTION public.postgis_type_name(varchar, int4, bool);

CREATE OR REPLACE FUNCTION public.postgis_type_name(geomname character varying, coord_dimension integer, use_new_name boolean DEFAULT true)
 RETURNS character varying
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$
	SELECT CASE WHEN $3 THEN new_name ELSE old_name END As geomname
	FROM
	( VALUES
			('GEOMETRY', 'Geometry', 2),
			('GEOMETRY', 'GeometryZ', 3),
			('GEOMETRYM', 'GeometryM', 3),
			('GEOMETRY', 'GeometryZM', 4),

			('GEOMETRYCOLLECTION', 'GeometryCollection', 2),
			('GEOMETRYCOLLECTION', 'GeometryCollectionZ', 3),
			('GEOMETRYCOLLECTIONM', 'GeometryCollectionM', 3),
			('GEOMETRYCOLLECTION', 'GeometryCollectionZM', 4),

			('POINT', 'Point', 2),
			('POINT', 'PointZ', 3),
			('POINTM','PointM', 3),
			('POINT', 'PointZM', 4),

			('MULTIPOINT','MultiPoint', 2),
			('MULTIPOINT','MultiPointZ', 3),
			('MULTIPOINTM','MultiPointM', 3),
			('MULTIPOINT','MultiPointZM', 4),

			('POLYGON', 'Polygon', 2),
			('POLYGON', 'PolygonZ', 3),
			('POLYGONM', 'PolygonM', 3),
			('POLYGON', 'PolygonZM', 4),

			('MULTIPOLYGON', 'MultiPolygon', 2),
			('MULTIPOLYGON', 'MultiPolygonZ', 3),
			('MULTIPOLYGONM', 'MultiPolygonM', 3),
			('MULTIPOLYGON', 'MultiPolygonZM', 4),

			('MULTILINESTRING', 'MultiLineString', 2),
			('MULTILINESTRING', 'MultiLineStringZ', 3),
			('MULTILINESTRINGM', 'MultiLineStringM', 3),
			('MULTILINESTRING', 'MultiLineStringZM', 4),

			('LINESTRING', 'LineString', 2),
			('LINESTRING', 'LineStringZ', 3),
			('LINESTRINGM', 'LineStringM', 3),
			('LINESTRING', 'LineStringZM', 4),

			('CIRCULARSTRING', 'CircularString', 2),
			('CIRCULARSTRING', 'CircularStringZ', 3),
			('CIRCULARSTRINGM', 'CircularStringM' ,3),
			('CIRCULARSTRING', 'CircularStringZM', 4),

			('COMPOUNDCURVE', 'CompoundCurve', 2),
			('COMPOUNDCURVE', 'CompoundCurveZ', 3),
			('COMPOUNDCURVEM', 'CompoundCurveM', 3),
			('COMPOUNDCURVE', 'CompoundCurveZM', 4),

			('CURVEPOLYGON', 'CurvePolygon', 2),
			('CURVEPOLYGON', 'CurvePolygonZ', 3),
			('CURVEPOLYGONM', 'CurvePolygonM', 3),
			('CURVEPOLYGON', 'CurvePolygonZM', 4),

			('MULTICURVE', 'MultiCurve', 2),
			('MULTICURVE', 'MultiCurveZ', 3),
			('MULTICURVEM', 'MultiCurveM', 3),
			('MULTICURVE', 'MultiCurveZM', 4),

			('MULTISURFACE', 'MultiSurface', 2),
			('MULTISURFACE', 'MultiSurfaceZ', 3),
			('MULTISURFACEM', 'MultiSurfaceM', 3),
			('MULTISURFACE', 'MultiSurfaceZM', 4),

			('POLYHEDRALSURFACE', 'PolyhedralSurface', 2),
			('POLYHEDRALSURFACE', 'PolyhedralSurfaceZ', 3),
			('POLYHEDRALSURFACEM', 'PolyhedralSurfaceM', 3),
			('POLYHEDRALSURFACE', 'PolyhedralSurfaceZM', 4),

			('TRIANGLE', 'Triangle', 2),
			('TRIANGLE', 'TriangleZ', 3),
			('TRIANGLEM', 'TriangleM', 3),
			('TRIANGLE', 'TriangleZM', 4),

			('TIN', 'Tin', 2),
			('TIN', 'TinZ', 3),
			('TINM', 'TinM', 3),
			('TIN', 'TinZM', 4) )
			 As g(old_name, new_name, coord_dimension)
	WHERE (upper(old_name) = upper($1) OR upper(new_name) = upper($1))
		AND coord_dimension = $2;
$function$
;

-- DROP FUNCTION public.postgis_typmod_dims(int4);

CREATE OR REPLACE FUNCTION public.postgis_typmod_dims(integer)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$postgis_typmod_dims$function$
;

-- DROP FUNCTION public.postgis_typmod_srid(int4);

CREATE OR REPLACE FUNCTION public.postgis_typmod_srid(integer)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$postgis_typmod_srid$function$
;

-- DROP FUNCTION public.postgis_typmod_type(int4);

CREATE OR REPLACE FUNCTION public.postgis_typmod_type(integer)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$postgis_typmod_type$function$
;

-- DROP FUNCTION public.postgis_version();

CREATE OR REPLACE FUNCTION public.postgis_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_version$function$
;

-- DROP FUNCTION public.postgis_wagyu_version();

CREATE OR REPLACE FUNCTION public.postgis_wagyu_version()
 RETURNS text
 LANGUAGE c
 IMMUTABLE
AS '$libdir/postgis-3', $function$postgis_wagyu_version$function$
;

-- DROP FUNCTION public.postgres_fdw_handler();

CREATE OR REPLACE FUNCTION public.postgres_fdw_handler()
 RETURNS fdw_handler
 LANGUAGE c
 STRICT
AS '$libdir/postgres_fdw', $function$postgres_fdw_handler$function$
;

-- DROP FUNCTION public.postgres_fdw_validator(_text, oid);

CREATE OR REPLACE FUNCTION public.postgres_fdw_validator(text[], oid)
 RETURNS void
 LANGUAGE c
 STRICT
AS '$libdir/postgres_fdw', $function$postgres_fdw_validator$function$
;

-- DROP FUNCTION public.query_execution(varchar, varchar, int4, date);

CREATE OR REPLACE FUNCTION public.query_execution(id character varying, crop_name character varying, age integer, dat date)
 RETURNS TABLE(description text, area numeric, percentage numeric)
 LANGUAGE plpgsql
AS $function$
DECLARE
    veg_start_ndvi numeric;
    veg_end_ndvi numeric;
    low_start_range Text;
    low_end_range Text;
    modarate_start_range Text;
    modarate_end_range Text;
    high_start_range Text;
    high_end_range Text;
    low_query TEXT;
    modarate_query TEXT;
    high_query TEXT;
    union_query text;

BEGIN
    SELECT start_ndvi, end_ndvi into veg_start_ndvi, veg_end_ndvi  FROM crops_ndvi_translation_fn(crop_name, age);
--     SELECT end_ndvi FROM crops_ndvi_translation_fn(crop_name, age);
    SELECT range_name FROM range_dictionary WHERE key = (SELECT Min(key) FROM range_dictionary) into low_start_range;
	SELECT range_name FROM range_dictionary WHERE key = (veg_start_ndvi-0.1) into low_end_range;
    SELECT range_name FROM range_dictionary WHERE key = veg_start_ndvi into modarate_start_range;
    SELECT range_name FROM range_dictionary WHERE key = (veg_end_ndvi-0.1) into modarate_end_range;
    SELECT range_name FROM range_dictionary WHERE key = veg_end_ndvi into high_start_range;
    SELECT range_name FROM range_dictionary WHERE key = (SELECT MAX(key) FROM range_dictionary) INTO high_end_range;

    SELECT * FROM create_query('stressed Vegetation'::text, id::varchar,  dat::date, low_start_range::text, low_end_range::text) INTO low_query;
    SELECT * FROM create_query('Moderate Vegetation'::text, id::varchar,  dat::date, modarate_start_range::text, modarate_end_range::text) INTO modarate_query;
    SELECT * FROM create_query('Healthy Vegetation'::text, id::varchar,  dat::date, high_start_range::text, high_end_range::text) INTO high_query;

    union_query := low_query || ' UNION ' || modarate_query || ' UNION ' || high_query;
	
	return query  
	EXECUTE union_query;
END;
$function$
;

-- DROP FUNCTION public.refresh_bkk_faf_farmers_mat_vw();

CREATE OR REPLACE FUNCTION public.refresh_bkk_faf_farmers_mat_vw()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    REFRESH MATERIALIZED VIEW bkk_faf_farmers_mat_vw;
END;
$function$
;

-- DROP FUNCTION public.refresh_bkk_faf_farms_v2_mat_vw();

CREATE OR REPLACE FUNCTION public.refresh_bkk_faf_farms_v2_mat_vw()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
REFRESH MATERIALIZED VIEW public.bkk_faf_farms_v2_mat_vw;
RETURN;
END;
$function$
;

-- DROP FUNCTION public.refresh_bkk_faf_partnerfarms_baseline_anomaly_mat_vw();

CREATE OR REPLACE FUNCTION public.refresh_bkk_faf_partnerfarms_baseline_anomaly_mat_vw()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
    REFRESH MATERIALIZED VIEW bkk_faf_partnerfarms_baseline_anomaly_mat_vw;
END;
$function$
;

-- DROP FUNCTION public.refresh_portal_data();

CREATE OR REPLACE FUNCTION public.refresh_portal_data()
 RETURNS void
 LANGUAGE plpgsql
AS $function$
BEGIN
  REFRESH MATERIALIZED VIEW public.bkk_faf_partnerfarms_mat_vw;
  REFRESH MATERIALIZED VIEW public.bkk_partner_crops_basline_thresholds;
  REFRESH MATERIALIZED VIEW public.bkk_faf_partnerfarms_baseline_mat_vw;
  REFRESH MATERIALIZED VIEW public.bkk_latest_health_status;
  REFRESH MATERIALIZED VIEW public.bkk_latest_partners_anomalies;
END;
$function$
;

-- DROP FUNCTION public.refresh_weather_v3_mat_vws();

CREATE OR REPLACE FUNCTION public.refresh_weather_v3_mat_vws()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
REFRESH MATERIALIZED VIEW public.weather_ibm_v3_mat_vw;
REFRESH MATERIALIZED VIEW public.weather_ibm_v3_1day_mat_vw;
REFRESH MATERIALIZED VIEW public.weather_ibm_v3_2day_mat_vw;
REFRESH MATERIALIZED VIEW public.weather_ibm_v3_3day_mat_vw;
RETURN;
END;
$function$
;

-- DROP FUNCTION public.set_limit(float4);

CREATE OR REPLACE FUNCTION public.set_limit(real)
 RETURNS real
 LANGUAGE c
 STRICT
AS '$libdir/pg_trgm', $function$set_limit$function$
;

-- DROP FUNCTION public.show_limit();

CREATE OR REPLACE FUNCTION public.show_limit()
 RETURNS real
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$show_limit$function$
;

-- DROP FUNCTION public.show_trgm(text);

CREATE OR REPLACE FUNCTION public.show_trgm(text)
 RETURNS text[]
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$show_trgm$function$
;

-- DROP FUNCTION public.similarity(text, text);

CREATE OR REPLACE FUNCTION public.similarity(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$similarity$function$
;

-- DROP FUNCTION public.similarity_dist(text, text);

CREATE OR REPLACE FUNCTION public.similarity_dist(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$similarity_dist$function$
;

-- DROP FUNCTION public.similarity_op(text, text);

CREATE OR REPLACE FUNCTION public.similarity_op(text, text)
 RETURNS boolean
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$similarity_op$function$
;

-- DROP FUNCTION public.spheroid_in(cstring);

CREATE OR REPLACE FUNCTION public.spheroid_in(cstring)
 RETURNS spheroid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$ellipsoid_in$function$
;

-- DROP FUNCTION public.spheroid_out(spheroid);

CREATE OR REPLACE FUNCTION public.spheroid_out(spheroid)
 RETURNS cstring
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$ellipsoid_out$function$
;

-- DROP FUNCTION public.st_3dclosestpoint(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3dclosestpoint(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_closestpoint3d$function$
;

-- DROP FUNCTION public.st_3ddfullywithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_3ddfullywithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$LWGEOM_dfullywithin3d$function$
;

-- DROP FUNCTION public.st_3ddistance(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3ddistance(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_3DDistance$function$
;

-- DROP FUNCTION public.st_3ddwithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_3ddwithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$LWGEOM_dwithin3d$function$
;

-- DROP AGGREGATE public.st_3dextent(geometry);

CREATE OR REPLACE AGGREGATE public.st_3dextent(public.geometry) (
	SFUNC = public.st_combinebbox,
	STYPE = box3d
);

-- DROP FUNCTION public.st_3dintersects(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3dintersects(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$ST_3DIntersects$function$
;

-- DROP FUNCTION public.st_3dlength(geometry);

CREATE OR REPLACE FUNCTION public.st_3dlength(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_length_linestring$function$
;

-- DROP FUNCTION public.st_3dlineinterpolatepoint(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_3dlineinterpolatepoint(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_3DLineInterpolatePoint$function$
;

-- DROP FUNCTION public.st_3dlongestline(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3dlongestline(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_longestline3d$function$
;

-- DROP FUNCTION public.st_3dmakebox(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3dmakebox(geom1 geometry, geom2 geometry)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_construct$function$
;

-- DROP FUNCTION public.st_3dmaxdistance(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3dmaxdistance(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_maxdistance3d$function$
;

-- DROP FUNCTION public.st_3dperimeter(geometry);

CREATE OR REPLACE FUNCTION public.st_3dperimeter(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_perimeter_poly$function$
;

-- DROP FUNCTION public.st_3dshortestline(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_3dshortestline(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_shortestline3d$function$
;

-- DROP FUNCTION public.st_addmeasure(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_addmeasure(geometry, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_AddMeasure$function$
;

-- DROP FUNCTION public.st_addpoint(geometry, geometry, int4);

CREATE OR REPLACE FUNCTION public.st_addpoint(geom1 geometry, geom2 geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_addpoint$function$
;

-- DROP FUNCTION public.st_addpoint(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_addpoint(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_addpoint$function$
;

-- DROP FUNCTION public.st_affine(geometry, float8, float8, float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_affine(geometry, double precision, double precision, double precision, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1,  $2, $3, 0,  $4, $5, 0,  0, 0, 1,  $6, $7, 0)$function$
;

-- DROP FUNCTION public.st_affine(geometry, float8, float8, float8, float8, float8, float8, float8, float8, float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_affine(geometry, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_affine$function$
;

-- DROP FUNCTION public.st_angle(geometry, geometry, geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_angle(pt1 geometry, pt2 geometry, pt3 geometry, pt4 geometry DEFAULT '0101000000000000000000F87F000000000000F87F'::geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_angle$function$
;

-- DROP FUNCTION public.st_angle(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_angle(line1 geometry, line2 geometry)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT ST_Angle(St_StartPoint($1), ST_EndPoint($1), St_StartPoint($2), ST_EndPoint($2))$function$
;

-- DROP FUNCTION public.st_area(geography, bool);

CREATE OR REPLACE FUNCTION public.st_area(geog geography, use_spheroid boolean DEFAULT true)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_area$function$
;

-- DROP FUNCTION public.st_area(text);

CREATE OR REPLACE FUNCTION public.st_area(text)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Area($1::public.geometry);  $function$
;

-- DROP FUNCTION public.st_area(geometry);

CREATE OR REPLACE FUNCTION public.st_area(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Area$function$
;

-- DROP FUNCTION public.st_area2d(geometry);

CREATE OR REPLACE FUNCTION public.st_area2d(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Area$function$
;

-- DROP FUNCTION public.st_asbinary(geometry);

CREATE OR REPLACE FUNCTION public.st_asbinary(geometry)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_asBinary$function$
;

-- DROP FUNCTION public.st_asbinary(geography);

CREATE OR REPLACE FUNCTION public.st_asbinary(geography)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_asBinary$function$
;

-- DROP FUNCTION public.st_asbinary(geometry, text);

CREATE OR REPLACE FUNCTION public.st_asbinary(geometry, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_asBinary$function$
;

-- DROP FUNCTION public.st_asbinary(geography, text);

CREATE OR REPLACE FUNCTION public.st_asbinary(geography, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$LWGEOM_asBinary$function$
;

-- DROP FUNCTION public.st_asencodedpolyline(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_asencodedpolyline(geom geometry, nprecision integer DEFAULT 5)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asEncodedPolyline$function$
;

-- DROP FUNCTION public.st_asewkb(geometry, text);

CREATE OR REPLACE FUNCTION public.st_asewkb(geometry, text)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$WKBFromLWGEOM$function$
;

-- DROP FUNCTION public.st_asewkb(geometry);

CREATE OR REPLACE FUNCTION public.st_asewkb(geometry)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$WKBFromLWGEOM$function$
;

-- DROP FUNCTION public.st_asewkt(geography, int4);

CREATE OR REPLACE FUNCTION public.st_asewkt(geography, integer)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asEWKT$function$
;

-- DROP FUNCTION public.st_asewkt(text);

CREATE OR REPLACE FUNCTION public.st_asewkt(text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$ SELECT public.ST_AsEWKT($1::public.geometry);  $function$
;

-- DROP FUNCTION public.st_asewkt(geography);

CREATE OR REPLACE FUNCTION public.st_asewkt(geography)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asEWKT$function$
;

-- DROP FUNCTION public.st_asewkt(geometry);

CREATE OR REPLACE FUNCTION public.st_asewkt(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asEWKT$function$
;

-- DROP FUNCTION public.st_asewkt(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_asewkt(geometry, integer)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asEWKT$function$
;

-- DROP AGGREGATE public.st_asflatgeobuf(anyelement, bool);

-- Aggregate function public.st_asflatgeobuf(anyelement, bool)
-- ERROR: more than one function named "public.st_asflatgeobuf";

-- DROP AGGREGATE public.st_asflatgeobuf(anyelement);

-- Aggregate function public.st_asflatgeobuf(anyelement)
-- ERROR: more than one function named "public.st_asflatgeobuf";

-- DROP AGGREGATE public.st_asflatgeobuf(anyelement, bool, text);

-- Aggregate function public.st_asflatgeobuf(anyelement, bool, text)
-- ERROR: more than one function named "public.st_asflatgeobuf";

-- DROP AGGREGATE public.st_asgeobuf(anyelement, text);

-- Aggregate function public.st_asgeobuf(anyelement, text)
-- ERROR: more than one function named "public.st_asgeobuf";

-- DROP AGGREGATE public.st_asgeobuf(anyelement);

-- Aggregate function public.st_asgeobuf(anyelement)
-- ERROR: more than one function named "public.st_asgeobuf";

-- DROP FUNCTION public.st_asgeojson(record, text, int4, bool);

CREATE OR REPLACE FUNCTION public.st_asgeojson(r record, geom_column text DEFAULT ''::text, maxdecimaldigits integer DEFAULT 9, pretty_bool boolean DEFAULT false)
 RETURNS text
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_AsGeoJsonRow$function$
;

-- DROP FUNCTION public.st_asgeojson(geometry, int4, int4);

CREATE OR REPLACE FUNCTION public.st_asgeojson(geom geometry, maxdecimaldigits integer DEFAULT 9, options integer DEFAULT 8)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asGeoJson$function$
;

-- DROP FUNCTION public.st_asgeojson(text);

CREATE OR REPLACE FUNCTION public.st_asgeojson(text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$ SELECT public.ST_AsGeoJson($1::public.geometry, 9, 0);  $function$
;

-- DROP FUNCTION public.st_asgeojson(geography, int4, int4);

CREATE OR REPLACE FUNCTION public.st_asgeojson(geog geography, maxdecimaldigits integer DEFAULT 9, options integer DEFAULT 0)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_as_geojson$function$
;

-- DROP FUNCTION public.st_asgml(geography, int4, int4, text, text);

CREATE OR REPLACE FUNCTION public.st_asgml(geog geography, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0, nprefix text DEFAULT 'gml'::text, id text DEFAULT ''::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_as_gml$function$
;

-- DROP FUNCTION public.st_asgml(geometry, int4, int4);

CREATE OR REPLACE FUNCTION public.st_asgml(geom geometry, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asGML$function$
;

-- DROP FUNCTION public.st_asgml(text);

CREATE OR REPLACE FUNCTION public.st_asgml(text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$ SELECT public._ST_AsGML(2,$1::public.geometry,15,0, NULL, NULL);  $function$
;

-- DROP FUNCTION public.st_asgml(int4, geography, int4, int4, text, text);

CREATE OR REPLACE FUNCTION public.st_asgml(version integer, geog geography, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0, nprefix text DEFAULT 'gml'::text, id text DEFAULT ''::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_as_gml$function$
;

-- DROP FUNCTION public.st_asgml(int4, geometry, int4, int4, text, text);

CREATE OR REPLACE FUNCTION public.st_asgml(version integer, geom geometry, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0, nprefix text DEFAULT NULL::text, id text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asGML$function$
;

-- DROP FUNCTION public.st_ashexewkb(geometry);

CREATE OR REPLACE FUNCTION public.st_ashexewkb(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_asHEXEWKB$function$
;

-- DROP FUNCTION public.st_ashexewkb(geometry, text);

CREATE OR REPLACE FUNCTION public.st_ashexewkb(geometry, text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_asHEXEWKB$function$
;

-- DROP FUNCTION public.st_askml(text);

CREATE OR REPLACE FUNCTION public.st_askml(text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$ SELECT public.ST_AsKML($1::public.geometry, 15);  $function$
;

-- DROP FUNCTION public.st_askml(geometry, int4, text);

CREATE OR REPLACE FUNCTION public.st_askml(geom geometry, maxdecimaldigits integer DEFAULT 15, nprefix text DEFAULT ''::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asKML$function$
;

-- DROP FUNCTION public.st_askml(geography, int4, text);

CREATE OR REPLACE FUNCTION public.st_askml(geog geography, maxdecimaldigits integer DEFAULT 15, nprefix text DEFAULT ''::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_as_kml$function$
;

-- DROP FUNCTION public.st_aslatlontext(geometry, text);

CREATE OR REPLACE FUNCTION public.st_aslatlontext(geom geometry, tmpl text DEFAULT ''::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_to_latlon$function$
;

-- DROP FUNCTION public.st_asmarc21(geometry, text);

CREATE OR REPLACE FUNCTION public.st_asmarc21(geom geometry, format text DEFAULT 'hdddmmss'::text)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_AsMARC21$function$
;

-- DROP AGGREGATE public.st_asmvt(anyelement, text);

-- Aggregate function public.st_asmvt(anyelement, text)
-- ERROR: more than one function named "public.st_asmvt";

-- DROP AGGREGATE public.st_asmvt(anyelement, text, int4, text);

-- Aggregate function public.st_asmvt(anyelement, text, int4, text)
-- ERROR: more than one function named "public.st_asmvt";

-- DROP AGGREGATE public.st_asmvt(anyelement);

-- Aggregate function public.st_asmvt(anyelement)
-- ERROR: more than one function named "public.st_asmvt";

-- DROP AGGREGATE public.st_asmvt(anyelement, text, int4, text, text);

-- Aggregate function public.st_asmvt(anyelement, text, int4, text, text)
-- ERROR: more than one function named "public.st_asmvt";

-- DROP AGGREGATE public.st_asmvt(anyelement, text, int4);

-- Aggregate function public.st_asmvt(anyelement, text, int4)
-- ERROR: more than one function named "public.st_asmvt";

-- DROP FUNCTION public.st_asmvtgeom(geometry, box2d, int4, int4, bool);

CREATE OR REPLACE FUNCTION public.st_asmvtgeom(geom geometry, bounds box2d, extent integer DEFAULT 4096, buffer integer DEFAULT 256, clip_geom boolean DEFAULT true)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$ST_AsMVTGeom$function$
;

-- DROP FUNCTION public.st_assvg(geometry, int4, int4);

CREATE OR REPLACE FUNCTION public.st_assvg(geom geometry, rel integer DEFAULT 0, maxdecimaldigits integer DEFAULT 15)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asSVG$function$
;

-- DROP FUNCTION public.st_assvg(geography, int4, int4);

CREATE OR REPLACE FUNCTION public.st_assvg(geog geography, rel integer DEFAULT 0, maxdecimaldigits integer DEFAULT 15)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_as_svg$function$
;

-- DROP FUNCTION public.st_assvg(text);

CREATE OR REPLACE FUNCTION public.st_assvg(text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$ SELECT public.ST_AsSVG($1::public.geometry,0,15);  $function$
;

-- DROP FUNCTION public.st_astext(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_astext(geometry, integer)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asText$function$
;

-- DROP FUNCTION public.st_astext(geography, int4);

CREATE OR REPLACE FUNCTION public.st_astext(geography, integer)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asText$function$
;

-- DROP FUNCTION public.st_astext(geometry);

CREATE OR REPLACE FUNCTION public.st_astext(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asText$function$
;

-- DROP FUNCTION public.st_astext(text);

CREATE OR REPLACE FUNCTION public.st_astext(text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$ SELECT public.ST_AsText($1::public.geometry);  $function$
;

-- DROP FUNCTION public.st_astext(geography);

CREATE OR REPLACE FUNCTION public.st_astext(geography)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_asText$function$
;

-- DROP FUNCTION public.st_astwkb(geometry, int4, int4, int4, bool, bool);

CREATE OR REPLACE FUNCTION public.st_astwkb(geom geometry, prec integer DEFAULT NULL::integer, prec_z integer DEFAULT NULL::integer, prec_m integer DEFAULT NULL::integer, with_sizes boolean DEFAULT NULL::boolean, with_boxes boolean DEFAULT NULL::boolean)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$TWKBFromLWGEOM$function$
;

-- DROP FUNCTION public.st_astwkb(_geometry, _int8, int4, int4, int4, bool, bool);

CREATE OR REPLACE FUNCTION public.st_astwkb(geom geometry[], ids bigint[], prec integer DEFAULT NULL::integer, prec_z integer DEFAULT NULL::integer, prec_m integer DEFAULT NULL::integer, with_sizes boolean DEFAULT NULL::boolean, with_boxes boolean DEFAULT NULL::boolean)
 RETURNS bytea
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$TWKBFromLWGEOMArray$function$
;

-- DROP FUNCTION public.st_asx3d(geometry, int4, int4);

CREATE OR REPLACE FUNCTION public.st_asx3d(geom geometry, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE COST 250
AS $function$SELECT public._ST_AsX3D(3,$1,$2,$3,'');$function$
;

-- DROP FUNCTION public.st_azimuth(geography, geography);

CREATE OR REPLACE FUNCTION public.st_azimuth(geog1 geography, geog2 geography)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_azimuth$function$
;

-- DROP FUNCTION public.st_azimuth(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_azimuth(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_azimuth$function$
;

-- DROP FUNCTION public.st_bdmpolyfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_bdmpolyfromtext(text, integer)
 RETURNS geometry
 LANGUAGE plpgsql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$
DECLARE
	geomtext alias for $1;
	srid alias for $2;
	mline public.geometry;
	geom public.geometry;
BEGIN
	mline := public.ST_MultiLineStringFromText(geomtext, srid);

	IF mline IS NULL
	THEN
		RAISE EXCEPTION 'Input is not a MultiLinestring';
	END IF;

	geom := public.ST_Multi(public.ST_BuildArea(mline));

	RETURN geom;
END;
$function$
;

-- DROP FUNCTION public.st_bdpolyfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_bdpolyfromtext(text, integer)
 RETURNS geometry
 LANGUAGE plpgsql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$
DECLARE
	geomtext alias for $1;
	srid alias for $2;
	mline public.geometry;
	geom public.geometry;
BEGIN
	mline := public.ST_MultiLineStringFromText(geomtext, srid);

	IF mline IS NULL
	THEN
		RAISE EXCEPTION 'Input is not a MultiLinestring';
	END IF;

	geom := public.ST_BuildArea(mline);

	IF public.GeometryType(geom) != 'POLYGON'
	THEN
		RAISE EXCEPTION 'Input returns more then a single polygon, try using BdMPolyFromText instead';
	END IF;

	RETURN geom;
END;
$function$
;

-- DROP FUNCTION public.st_boundary(geometry);

CREATE OR REPLACE FUNCTION public.st_boundary(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$boundary$function$
;

-- DROP FUNCTION public.st_boundingdiagonal(geometry, bool);

CREATE OR REPLACE FUNCTION public.st_boundingdiagonal(geom geometry, fits boolean DEFAULT false)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$ST_BoundingDiagonal$function$
;

-- DROP FUNCTION public.st_box2dfromgeohash(text, int4);

CREATE OR REPLACE FUNCTION public.st_box2dfromgeohash(text, integer DEFAULT NULL::integer)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$box2d_from_geohash$function$
;

-- DROP FUNCTION public.st_buffer(geometry, float8, int4);

CREATE OR REPLACE FUNCTION public.st_buffer(geom geometry, radius double precision, quadsegs integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$ SELECT public.ST_Buffer($1, $2, CAST('quad_segs='||CAST($3 AS text) as text)) $function$
;

-- DROP FUNCTION public.st_buffer(geography, float8, text);

CREATE OR REPLACE FUNCTION public.st_buffer(geography, double precision, text)
 RETURNS geography
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$SELECT public.geography(public.ST_Transform(public.ST_Buffer(public.ST_Transform(public.geometry($1), public._ST_BestSRID($1)), $2, $3), public.ST_SRID($1)))$function$
;

-- DROP FUNCTION public.st_buffer(geometry, float8, text);

CREATE OR REPLACE FUNCTION public.st_buffer(geom geometry, radius double precision, options text DEFAULT ''::text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$buffer$function$
;

-- DROP FUNCTION public.st_buffer(text, float8, text);

CREATE OR REPLACE FUNCTION public.st_buffer(text, double precision, text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Buffer($1::public.geometry, $2, $3);  $function$
;

-- DROP FUNCTION public.st_buffer(geography, float8, int4);

CREATE OR REPLACE FUNCTION public.st_buffer(geography, double precision, integer)
 RETURNS geography
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$SELECT public.geography(public.ST_Transform(public.ST_Buffer(public.ST_Transform(public.geometry($1), public._ST_BestSRID($1)), $2, $3), public.ST_SRID($1)))$function$
;

-- DROP FUNCTION public.st_buffer(text, float8);

CREATE OR REPLACE FUNCTION public.st_buffer(text, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Buffer($1::public.geometry, $2);  $function$
;

-- DROP FUNCTION public.st_buffer(geography, float8);

CREATE OR REPLACE FUNCTION public.st_buffer(geography, double precision)
 RETURNS geography
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$SELECT public.geography(public.ST_Transform(public.ST_Buffer(public.ST_Transform(public.geometry($1), public._ST_BestSRID($1)), $2), public.ST_SRID($1)))$function$
;

-- DROP FUNCTION public.st_buffer(text, float8, int4);

CREATE OR REPLACE FUNCTION public.st_buffer(text, double precision, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Buffer($1::public.geometry, $2, $3);  $function$
;

-- DROP FUNCTION public.st_buildarea(geometry);

CREATE OR REPLACE FUNCTION public.st_buildarea(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_BuildArea$function$
;

-- DROP FUNCTION public.st_centroid(geometry);

CREATE OR REPLACE FUNCTION public.st_centroid(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$centroid$function$
;

-- DROP FUNCTION public.st_centroid(geography, bool);

CREATE OR REPLACE FUNCTION public.st_centroid(geography, use_spheroid boolean DEFAULT true)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_centroid$function$
;

-- DROP FUNCTION public.st_centroid(text);

CREATE OR REPLACE FUNCTION public.st_centroid(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Centroid($1::public.geometry);  $function$
;

-- DROP FUNCTION public.st_chaikinsmoothing(geometry, int4, bool);

CREATE OR REPLACE FUNCTION public.st_chaikinsmoothing(geometry, integer DEFAULT 1, boolean DEFAULT false)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_ChaikinSmoothing$function$
;

-- DROP FUNCTION public.st_cleangeometry(geometry);

CREATE OR REPLACE FUNCTION public.st_cleangeometry(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_CleanGeometry$function$
;

-- DROP FUNCTION public.st_clipbybox2d(geometry, box2d);

CREATE OR REPLACE FUNCTION public.st_clipbybox2d(geom geometry, box box2d)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_ClipByBox2d$function$
;

-- DROP FUNCTION public.st_closestpoint(geography, geography, bool);

CREATE OR REPLACE FUNCTION public.st_closestpoint(geography, geography, use_spheroid boolean DEFAULT true)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_closestpoint$function$
;

-- DROP FUNCTION public.st_closestpoint(text, text);

CREATE OR REPLACE FUNCTION public.st_closestpoint(text, text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_ClosestPoint($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_closestpoint(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_closestpoint(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_closestpoint$function$
;

-- DROP FUNCTION public.st_closestpointofapproach(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_closestpointofapproach(geometry, geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_ClosestPointOfApproach$function$
;

-- DROP WINDOW public.st_clusterdbscan(geometry, float8, int4);

CREATE OR REPLACE FUNCTION public.st_clusterdbscan(geometry, eps double precision, minpoints integer)
 RETURNS integer
 LANGUAGE c
 WINDOW IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_ClusterDBSCAN$function$
;

-- DROP AGGREGATE public.st_clusterintersecting(geometry);

-- Aggregate function public.st_clusterintersecting(geometry)
-- ERROR: more than one function named "public.st_clusterintersecting";

-- DROP FUNCTION public.st_clusterintersecting(_geometry);

CREATE OR REPLACE FUNCTION public.st_clusterintersecting(geometry[])
 RETURNS geometry[]
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$clusterintersecting_garray$function$
;

-- DROP WINDOW public.st_clusterintersectingwin(geometry);

CREATE OR REPLACE FUNCTION public.st_clusterintersectingwin(geometry)
 RETURNS integer
 LANGUAGE c
 WINDOW IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_ClusterIntersectingWin$function$
;

-- DROP WINDOW public.st_clusterkmeans(geometry, int4, float8);

CREATE OR REPLACE FUNCTION public.st_clusterkmeans(geom geometry, k integer, max_radius double precision DEFAULT NULL::double precision)
 RETURNS integer
 LANGUAGE c
 WINDOW STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_ClusterKMeans$function$
;

-- DROP FUNCTION public.st_clusterwithin(_geometry, float8);

CREATE OR REPLACE FUNCTION public.st_clusterwithin(geometry[], double precision)
 RETURNS geometry[]
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$cluster_within_distance_garray$function$
;

-- DROP AGGREGATE public.st_clusterwithin(geometry, float8);

-- Aggregate function public.st_clusterwithin(geometry, float8)
-- ERROR: more than one function named "public.st_clusterwithin";

-- DROP WINDOW public.st_clusterwithinwin(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_clusterwithinwin(geometry, distance double precision)
 RETURNS integer
 LANGUAGE c
 WINDOW IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_ClusterWithinWin$function$
;

-- DROP AGGREGATE public.st_collect(geometry);

-- Aggregate function public.st_collect(geometry)
-- ERROR: more than one function named "public.st_collect";

-- DROP FUNCTION public.st_collect(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_collect(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$LWGEOM_collect$function$
;

-- DROP FUNCTION public.st_collect(_geometry);

CREATE OR REPLACE FUNCTION public.st_collect(geometry[])
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_collect_garray$function$
;

-- DROP FUNCTION public.st_collectionextract(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_collectionextract(geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_CollectionExtract$function$
;

-- DROP FUNCTION public.st_collectionextract(geometry);

CREATE OR REPLACE FUNCTION public.st_collectionextract(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_CollectionExtract$function$
;

-- DROP FUNCTION public.st_collectionhomogenize(geometry);

CREATE OR REPLACE FUNCTION public.st_collectionhomogenize(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_CollectionHomogenize$function$
;

-- DROP FUNCTION public.st_combinebbox(box2d, geometry);

CREATE OR REPLACE FUNCTION public.st_combinebbox(box2d, geometry)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE
AS '$libdir/postgis-3', $function$BOX2D_combine$function$
;

-- DROP FUNCTION public.st_combinebbox(box3d, box3d);

CREATE OR REPLACE FUNCTION public.st_combinebbox(box3d, box3d)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$BOX3D_combine_BOX3D$function$
;

-- DROP FUNCTION public.st_combinebbox(box3d, geometry);

CREATE OR REPLACE FUNCTION public.st_combinebbox(box3d, geometry)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$BOX3D_combine$function$
;

-- DROP FUNCTION public.st_concavehull(geometry, float8, bool);

CREATE OR REPLACE FUNCTION public.st_concavehull(param_geom geometry, param_pctconvex double precision, param_allow_holes boolean DEFAULT false)
 RETURNS geometry
 LANGUAGE plpgsql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$
	DECLARE
		var_convhull public.geometry := public.ST_ForceSFS(public.ST_ConvexHull(param_geom));
		var_param_geom public.geometry := public.ST_ForceSFS(param_geom);
		var_initarea float := public.ST_Area(var_convhull);
		var_newarea float := var_initarea;
		var_div integer := 6; 
		var_tempgeom public.geometry;
		var_tempgeom2 public.geometry;
		var_cent public.geometry;
		var_geoms public.geometry[4]; 
		var_enline public.geometry;
		var_resultgeom public.geometry;
		var_atempgeoms public.geometry[];
		var_buf float := 1; 
	BEGIN
		-- We start with convex hull as our base
		var_resultgeom := var_convhull;

		IF param_pctconvex = 1 THEN
			-- this is the same as asking for the convex hull
			return var_resultgeom;
		ELSIF public.ST_GeometryType(var_param_geom) = 'ST_Polygon' THEN -- it is as concave as it is going to get
			IF param_allow_holes THEN -- leave the holes
				RETURN var_param_geom;
			ELSE -- remove the holes
				var_resultgeom := public.ST_MakePolygon(public.ST_ExteriorRing(var_param_geom));
				RETURN var_resultgeom;
			END IF;
		END IF;
		IF public.ST_Dimension(var_resultgeom) > 1 AND param_pctconvex BETWEEN 0 and 0.99 THEN
		-- get linestring that forms envelope of geometry
			var_enline := public.ST_Boundary(public.ST_Envelope(var_param_geom));
			var_buf := public.ST_Length(var_enline)/1000.0;
			IF public.ST_GeometryType(var_param_geom) = 'ST_MultiPoint' AND public.ST_NumGeometries(var_param_geom) BETWEEN 4 and 200 THEN
			-- we make polygons out of points since they are easier to cave in.
			-- Note we limit to between 4 and 200 points because this process is slow and gets quadratically slow
				var_buf := sqrt(public.ST_Area(var_convhull)*0.8/(public.ST_NumGeometries(var_param_geom)*public.ST_NumGeometries(var_param_geom)));
				var_atempgeoms := ARRAY(SELECT geom FROM public.ST_DumpPoints(var_param_geom));
				-- 5 and 10 and just fudge factors
				var_tempgeom := public.ST_Union(ARRAY(SELECT geom
						FROM (
						-- fuse near neighbors together
						SELECT DISTINCT ON (i) i,  public.ST_Distance(var_atempgeoms[i],var_atempgeoms[j]), public.ST_Buffer(public.ST_MakeLine(var_atempgeoms[i], var_atempgeoms[j]) , var_buf*5, 'quad_segs=3') As geom
								FROM generate_series(1,array_upper(var_atempgeoms, 1)) As i
									INNER JOIN generate_series(1,array_upper(var_atempgeoms, 1)) As j
										ON (
								 NOT public.ST_Intersects(var_atempgeoms[i],var_atempgeoms[j])
									AND public.ST_DWithin(var_atempgeoms[i],var_atempgeoms[j], var_buf*10)
									)
								UNION ALL
						-- catch the ones with no near neighbors
								SELECT i, 0, public.ST_Buffer(var_atempgeoms[i] , var_buf*10, 'quad_segs=3') As geom
								FROM generate_series(1,array_upper(var_atempgeoms, 1)) As i
									LEFT JOIN generate_series(ceiling(array_upper(var_atempgeoms,1)/2)::integer,array_upper(var_atempgeoms, 1)) As j
										ON (
								 NOT public.ST_Intersects(var_atempgeoms[i],var_atempgeoms[j])
									AND public.ST_DWithin(var_atempgeoms[i],var_atempgeoms[j], var_buf*10)
									)
									WHERE j IS NULL
								ORDER BY 1, 2
							) As foo	) );
				IF public.ST_IsValid(var_tempgeom) AND public.ST_GeometryType(var_tempgeom) = 'ST_Polygon' THEN
					var_tempgeom := public.ST_ForceSFS(public.ST_Intersection(var_tempgeom, var_convhull));
					IF param_allow_holes THEN
						var_param_geom := var_tempgeom;
					ELSIF public.ST_GeometryType(var_tempgeom) = 'ST_Polygon' THEN
						var_param_geom := public.ST_ForceSFS(public.ST_MakePolygon(public.ST_ExteriorRing(var_tempgeom)));
					ELSE
						var_param_geom := public.ST_ForceSFS(public.ST_ConvexHull(var_param_geom));
					END IF;
					-- make sure result covers original (#3638)
					var_param_geom := public.ST_Union(param_geom, var_param_geom);
					return var_param_geom;
				ELSIF public.ST_IsValid(var_tempgeom) THEN
					var_param_geom := public.ST_ForceSFS(public.ST_Intersection(var_tempgeom, var_convhull));
				END IF;
			END IF;

			IF public.ST_GeometryType(var_param_geom) = 'ST_Polygon' THEN
				IF NOT param_allow_holes THEN
					var_param_geom := public.ST_ForceSFS(public.ST_MakePolygon(public.ST_ExteriorRing(var_param_geom)));
				END IF;
				-- make sure result covers original (#3638)
				--var_param_geom := public.ST_Union(param_geom, var_param_geom);
				return var_param_geom;
			END IF;
			var_cent := public.ST_Centroid(var_param_geom);
			IF (public.ST_XMax(var_enline) - public.ST_XMin(var_enline) ) > var_buf AND (public.ST_YMax(var_enline) - public.ST_YMin(var_enline) ) > var_buf THEN
					IF public.ST_Dwithin(public.ST_Centroid(var_convhull) , public.ST_Centroid(public.ST_Envelope(var_param_geom)), var_buf/2) THEN
				-- If the geometric dimension is > 1 and the object is symettric (cutting at centroid will not work -- offset a bit)
						var_cent := public.ST_Translate(var_cent, (public.ST_XMax(var_enline) - public.ST_XMin(var_enline))/1000,  (public.ST_YMAX(var_enline) - public.ST_YMin(var_enline))/1000);
					ELSE
						-- uses closest point on geometry to centroid. I can't explain why we are doing this
						var_cent := public.ST_ClosestPoint(var_param_geom,var_cent);
					END IF;
					IF public.ST_DWithin(var_cent, var_enline,var_buf) THEN
						var_cent := public.ST_centroid(public.ST_Envelope(var_param_geom));
					END IF;
					-- break envelope into 4 triangles about the centroid of the geometry and returned the clipped geometry in each quadrant
					FOR i in 1 .. 4 LOOP
					   var_geoms[i] := public.ST_MakePolygon(public.ST_MakeLine(ARRAY[public.ST_PointN(var_enline,i), public.ST_PointN(var_enline,i+1), var_cent, public.ST_PointN(var_enline,i)]));
					   var_geoms[i] := public.ST_ForceSFS(public.ST_Intersection(var_param_geom, public.ST_Buffer(var_geoms[i],var_buf)));
					   IF public.ST_IsValid(var_geoms[i]) THEN

					   ELSE
							var_geoms[i] := public.ST_BuildArea(public.ST_MakeLine(ARRAY[public.ST_PointN(var_enline,i), public.ST_PointN(var_enline,i+1), var_cent, public.ST_PointN(var_enline,i)]));
					   END IF;
					END LOOP;
					var_tempgeom := public.ST_Union(ARRAY[public.ST_ConvexHull(var_geoms[1]), public.ST_ConvexHull(var_geoms[2]) , public.ST_ConvexHull(var_geoms[3]), public.ST_ConvexHull(var_geoms[4])]);
					--RAISE NOTICE 'Curr vex % ', public.ST_AsText(var_tempgeom);
					IF public.ST_Area(var_tempgeom) <= var_newarea AND public.ST_IsValid(var_tempgeom)  THEN --AND public.ST_GeometryType(var_tempgeom) ILIKE '%Polygon'

						var_tempgeom := public.ST_Buffer(public.ST_ConcaveHull(var_geoms[1],least(param_pctconvex + param_pctconvex/var_div),true),var_buf, 'quad_segs=2');
						FOR i IN 1 .. 4 LOOP
							var_geoms[i] := public.ST_Buffer(public.ST_ConcaveHull(var_geoms[i],least(param_pctconvex + param_pctconvex/var_div),true), var_buf, 'quad_segs=2');
							IF public.ST_IsValid(var_geoms[i]) Then
								var_tempgeom := public.ST_Union(var_tempgeom, var_geoms[i]);
							ELSE
								RAISE NOTICE 'Not valid % %', i, public.ST_AsText(var_tempgeom);
								var_tempgeom := public.ST_Union(var_tempgeom, public.ST_ConvexHull(var_geoms[i]));
							END IF;
						END LOOP;

						--RAISE NOTICE 'Curr concave % ', public.ST_AsText(var_tempgeom);
						IF public.ST_IsValid(var_tempgeom) THEN
							var_resultgeom := var_tempgeom;
						END IF;
						var_newarea := public.ST_Area(var_resultgeom);
					ELSIF public.ST_IsValid(var_tempgeom) THEN
						var_resultgeom := var_tempgeom;
					END IF;

					IF public.ST_NumGeometries(var_resultgeom) > 1  THEN
						var_tempgeom := public._ST_ConcaveHull(var_resultgeom);
						IF public.ST_IsValid(var_tempgeom) AND public.ST_GeometryType(var_tempgeom) ILIKE 'ST_Polygon' THEN
							var_resultgeom := var_tempgeom;
						ELSE
							var_resultgeom := public.ST_Buffer(var_tempgeom,var_buf, 'quad_segs=2');
						END IF;
					END IF;
					IF param_allow_holes = false THEN
					-- only keep exterior ring since we do not want holes
						var_resultgeom := public.ST_MakePolygon(public.ST_ExteriorRing(var_resultgeom));
					END IF;
				ELSE
					var_resultgeom := public.ST_Buffer(var_resultgeom,var_buf);
				END IF;
				var_resultgeom := public.ST_ForceSFS(public.ST_Intersection(var_resultgeom, public.ST_ConvexHull(var_param_geom)));
			ELSE
				-- dimensions are too small to cut
				var_resultgeom := public._ST_ConcaveHull(var_param_geom);
			END IF;

			RETURN var_resultgeom;
	END;
$function$
;

-- DROP FUNCTION public.st_contains(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_contains(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$contains$function$
;

-- DROP FUNCTION public.st_containsproperly(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_containsproperly(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$containsproperly$function$
;

-- DROP FUNCTION public.st_convexhull(geometry);

CREATE OR REPLACE FUNCTION public.st_convexhull(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$convexhull$function$
;

-- DROP FUNCTION public.st_coorddim(geometry);

CREATE OR REPLACE FUNCTION public.st_coorddim(geometry geometry)
 RETURNS smallint
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_ndims$function$
;

-- DROP WINDOW public.st_coverageinvalidedges(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_coverageinvalidedges(geom geometry, tolerance double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 WINDOW IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_CoverageInvalidEdges$function$
;

-- DROP WINDOW public.st_coveragesimplify(geometry, float8, bool);

CREATE OR REPLACE FUNCTION public.st_coveragesimplify(geom geometry, tolerance double precision, simplifyboundary boolean DEFAULT true)
 RETURNS geometry
 LANGUAGE c
 WINDOW IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_CoverageSimplify$function$
;

-- DROP AGGREGATE public.st_coverageunion(geometry);

-- Aggregate function public.st_coverageunion(geometry)
-- ERROR: more than one function named "public.st_coverageunion";

-- DROP FUNCTION public.st_coverageunion(_geometry);

CREATE OR REPLACE FUNCTION public.st_coverageunion(geometry[])
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_CoverageUnion$function$
;

-- DROP FUNCTION public.st_coveredby(text, text);

CREATE OR REPLACE FUNCTION public.st_coveredby(text, text)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_CoveredBy($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_coveredby(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_coveredby(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$coveredby$function$
;

-- DROP FUNCTION public.st_coveredby(geography, geography);

CREATE OR REPLACE FUNCTION public.st_coveredby(geog1 geography, geog2 geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$geography_coveredby$function$
;

-- DROP FUNCTION public.st_covers(text, text);

CREATE OR REPLACE FUNCTION public.st_covers(text, text)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_Covers($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_covers(geography, geography);

CREATE OR REPLACE FUNCTION public.st_covers(geog1 geography, geog2 geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$geography_covers$function$
;

-- DROP FUNCTION public.st_covers(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_covers(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$covers$function$
;

-- DROP FUNCTION public.st_cpawithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_cpawithin(geometry, geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_CPAWithin$function$
;

-- DROP FUNCTION public.st_crosses(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_crosses(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$crosses$function$
;

-- DROP FUNCTION public.st_curvetoline(geometry, float8, int4, int4);

CREATE OR REPLACE FUNCTION public.st_curvetoline(geom geometry, tol double precision DEFAULT 32, toltype integer DEFAULT 0, flags integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_CurveToLine$function$
;

-- DROP FUNCTION public.st_delaunaytriangles(geometry, float8, int4);

CREATE OR REPLACE FUNCTION public.st_delaunaytriangles(g1 geometry, tolerance double precision DEFAULT 0.0, flags integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_DelaunayTriangles$function$
;

-- DROP FUNCTION public.st_dfullywithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_dfullywithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$LWGEOM_dfullywithin$function$
;

-- DROP FUNCTION public.st_difference(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_difference(geom1 geometry, geom2 geometry, gridsize double precision DEFAULT '-1.0'::numeric)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Difference$function$
;

-- DROP FUNCTION public.st_dimension(geometry);

CREATE OR REPLACE FUNCTION public.st_dimension(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_dimension$function$
;

-- DROP FUNCTION public.st_disjoint(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_disjoint(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$disjoint$function$
;

-- DROP FUNCTION public.st_distance(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_distance(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Distance$function$
;

-- DROP FUNCTION public.st_distance(text, text);

CREATE OR REPLACE FUNCTION public.st_distance(text, text)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Distance($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_distance(geography, geography, bool);

CREATE OR REPLACE FUNCTION public.st_distance(geog1 geography, geog2 geography, use_spheroid boolean DEFAULT true)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$geography_distance$function$
;

-- DROP FUNCTION public.st_distancecpa(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_distancecpa(geometry, geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_DistanceCPA$function$
;

-- DROP FUNCTION public.st_distancesphere(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_distancesphere(geom1 geometry, geom2 geometry, radius double precision)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_distance_sphere$function$
;

-- DROP FUNCTION public.st_distancesphere(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_distancesphere(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$select public.ST_distance( public.geography($1), public.geography($2),false)$function$
;

-- DROP FUNCTION public.st_distancespheroid(geometry, geometry, spheroid);

CREATE OR REPLACE FUNCTION public.st_distancespheroid(geom1 geometry, geom2 geometry, spheroid)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_distance_ellipsoid$function$
;

-- DROP FUNCTION public.st_distancespheroid(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_distancespheroid(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_distance_ellipsoid$function$
;

-- DROP FUNCTION public.st_dump(geometry);

CREATE OR REPLACE FUNCTION public.st_dump(geometry)
 RETURNS SETOF geometry_dump
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_dump$function$
;

-- DROP FUNCTION public.st_dumppoints(geometry);

CREATE OR REPLACE FUNCTION public.st_dumppoints(geometry)
 RETURNS SETOF geometry_dump
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_dumppoints$function$
;

-- DROP FUNCTION public.st_dumprings(geometry);

CREATE OR REPLACE FUNCTION public.st_dumprings(geometry)
 RETURNS SETOF geometry_dump
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_dump_rings$function$
;

-- DROP FUNCTION public.st_dumpsegments(geometry);

CREATE OR REPLACE FUNCTION public.st_dumpsegments(geometry)
 RETURNS SETOF geometry_dump
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_dumpsegments$function$
;

-- DROP FUNCTION public.st_dwithin(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_dwithin(geom1 geometry, geom2 geometry, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$LWGEOM_dwithin$function$
;

-- DROP FUNCTION public.st_dwithin(geography, geography, float8, bool);

CREATE OR REPLACE FUNCTION public.st_dwithin(geog1 geography, geog2 geography, tolerance double precision, use_spheroid boolean DEFAULT true)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$geography_dwithin$function$
;

-- DROP FUNCTION public.st_dwithin(text, text, float8);

CREATE OR REPLACE FUNCTION public.st_dwithin(text, text, double precision)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_DWithin($1::public.geometry, $2::public.geometry, $3);  $function$
;

-- DROP FUNCTION public.st_endpoint(geometry);

CREATE OR REPLACE FUNCTION public.st_endpoint(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_endpoint_linestring$function$
;

-- DROP FUNCTION public.st_envelope(geometry);

CREATE OR REPLACE FUNCTION public.st_envelope(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_envelope$function$
;

-- DROP FUNCTION public.st_equals(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_equals(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$ST_Equals$function$
;

-- DROP FUNCTION public.st_estimatedextent(text, text, text, bool);

CREATE OR REPLACE FUNCTION public.st_estimatedextent(text, text, text, boolean)
 RETURNS box2d
 LANGUAGE c
 STABLE STRICT
AS '$libdir/postgis-3', $function$gserialized_estimated_extent$function$
;

-- DROP FUNCTION public.st_estimatedextent(text, text, text);

CREATE OR REPLACE FUNCTION public.st_estimatedextent(text, text, text)
 RETURNS box2d
 LANGUAGE c
 STABLE STRICT
AS '$libdir/postgis-3', $function$gserialized_estimated_extent$function$
;

-- DROP FUNCTION public.st_estimatedextent(text, text);

CREATE OR REPLACE FUNCTION public.st_estimatedextent(text, text)
 RETURNS box2d
 LANGUAGE c
 STABLE STRICT
AS '$libdir/postgis-3', $function$gserialized_estimated_extent$function$
;

-- DROP FUNCTION public.st_expand(box2d, float8, float8);

CREATE OR REPLACE FUNCTION public.st_expand(box box2d, dx double precision, dy double precision)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX2D_expand$function$
;

-- DROP FUNCTION public.st_expand(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_expand(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_expand$function$
;

-- DROP FUNCTION public.st_expand(box2d, float8);

CREATE OR REPLACE FUNCTION public.st_expand(box2d, double precision)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX2D_expand$function$
;

-- DROP FUNCTION public.st_expand(geometry, float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_expand(geom geometry, dx double precision, dy double precision, dz double precision DEFAULT 0, dm double precision DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_expand$function$
;

-- DROP FUNCTION public.st_expand(box3d, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_expand(box box3d, dx double precision, dy double precision, dz double precision DEFAULT 0)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_expand$function$
;

-- DROP FUNCTION public.st_expand(box3d, float8);

CREATE OR REPLACE FUNCTION public.st_expand(box3d, double precision)
 RETURNS box3d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$BOX3D_expand$function$
;

-- DROP AGGREGATE public.st_extent(geometry);

CREATE OR REPLACE AGGREGATE public.st_extent(public.geometry) (
	SFUNC = public.st_combinebbox,
	STYPE = box3d,
	FINALFUNC = public.box2d,
	FINALFUNC_MODIFY = READ_ONLY
);

-- DROP FUNCTION public.st_exteriorring(geometry);

CREATE OR REPLACE FUNCTION public.st_exteriorring(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_exteriorring_polygon$function$
;

-- DROP FUNCTION public.st_filterbym(geometry, float8, float8, bool);

CREATE OR REPLACE FUNCTION public.st_filterbym(geometry, double precision, double precision DEFAULT NULL::double precision, boolean DEFAULT false)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$LWGEOM_FilterByM$function$
;

-- DROP FUNCTION public.st_findextent(text, text, text);

CREATE OR REPLACE FUNCTION public.st_findextent(text, text, text)
 RETURNS box2d
 LANGUAGE plpgsql
 STABLE PARALLEL SAFE STRICT
AS $function$
DECLARE
	schemaname alias for $1;
	tablename alias for $2;
	columnname alias for $3;
	myrec RECORD;
BEGIN
	FOR myrec IN EXECUTE 'SELECT public.ST_Extent("' || columnname || '") As extent FROM "' || schemaname || '"."' || tablename || '"' LOOP
		return myrec.extent;
	END LOOP;
END;
$function$
;

-- DROP FUNCTION public.st_findextent(text, text);

CREATE OR REPLACE FUNCTION public.st_findextent(text, text)
 RETURNS box2d
 LANGUAGE plpgsql
 STABLE PARALLEL SAFE STRICT
AS $function$
DECLARE
	tablename alias for $1;
	columnname alias for $2;
	myrec RECORD;

BEGIN
	FOR myrec IN EXECUTE 'SELECT public.ST_Extent("' || columnname || '") As extent FROM "' || tablename || '"' LOOP
		return myrec.extent;
	END LOOP;
END;
$function$
;

-- DROP FUNCTION public.st_flipcoordinates(geometry);

CREATE OR REPLACE FUNCTION public.st_flipcoordinates(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_FlipCoordinates$function$
;

-- DROP FUNCTION public.st_force2d(geometry);

CREATE OR REPLACE FUNCTION public.st_force2d(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_2d$function$
;

-- DROP FUNCTION public.st_force3d(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_force3d(geom geometry, zvalue double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Force3DZ($1, $2)$function$
;

-- DROP FUNCTION public.st_force3dm(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_force3dm(geom geometry, mvalue double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_3dm$function$
;

-- DROP FUNCTION public.st_force3dz(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_force3dz(geom geometry, zvalue double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_3dz$function$
;

-- DROP FUNCTION public.st_force4d(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_force4d(geom geometry, zvalue double precision DEFAULT 0.0, mvalue double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_4d$function$
;

-- DROP FUNCTION public.st_forcecollection(geometry);

CREATE OR REPLACE FUNCTION public.st_forcecollection(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_collection$function$
;

-- DROP FUNCTION public.st_forcecurve(geometry);

CREATE OR REPLACE FUNCTION public.st_forcecurve(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_force_curve$function$
;

-- DROP FUNCTION public.st_forcepolygonccw(geometry);

CREATE OR REPLACE FUNCTION public.st_forcepolygonccw(geometry)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$ SELECT public.ST_Reverse(public.ST_ForcePolygonCW($1)) $function$
;

-- DROP FUNCTION public.st_forcepolygoncw(geometry);

CREATE OR REPLACE FUNCTION public.st_forcepolygoncw(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_clockwise_poly$function$
;

-- DROP FUNCTION public.st_forcerhr(geometry);

CREATE OR REPLACE FUNCTION public.st_forcerhr(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_clockwise_poly$function$
;

-- DROP FUNCTION public.st_forcesfs(geometry, text);

CREATE OR REPLACE FUNCTION public.st_forcesfs(geometry, version text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_force_sfs$function$
;

-- DROP FUNCTION public.st_forcesfs(geometry);

CREATE OR REPLACE FUNCTION public.st_forcesfs(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_force_sfs$function$
;

-- DROP FUNCTION public.st_frechetdistance(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_frechetdistance(geom1 geometry, geom2 geometry, double precision DEFAULT '-1'::integer)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_FrechetDistance$function$
;

-- DROP FUNCTION public.st_fromflatgeobuf(anyelement, bytea);

CREATE OR REPLACE FUNCTION public.st_fromflatgeobuf(anyelement, bytea)
 RETURNS SETOF anyelement
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$pgis_fromflatgeobuf$function$
;

-- DROP FUNCTION public.st_fromflatgeobuftotable(text, text, bytea);

CREATE OR REPLACE FUNCTION public.st_fromflatgeobuftotable(text, text, bytea)
 RETURNS void
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$pgis_tablefromflatgeobuf$function$
;

-- DROP FUNCTION public.st_generatepoints(geometry, int4, int4);

CREATE OR REPLACE FUNCTION public.st_generatepoints(area geometry, npoints integer, seed integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_GeneratePoints$function$
;

-- DROP FUNCTION public.st_generatepoints(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_generatepoints(area geometry, npoints integer)
 RETURNS geometry
 LANGUAGE c
 PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_GeneratePoints$function$
;

-- DROP FUNCTION public.st_geogfromtext(text);

CREATE OR REPLACE FUNCTION public.st_geogfromtext(text)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_from_text$function$
;

-- DROP FUNCTION public.st_geogfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_geogfromwkb(bytea)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geography_from_binary$function$
;

-- DROP FUNCTION public.st_geographyfromtext(text);

CREATE OR REPLACE FUNCTION public.st_geographyfromtext(text)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_from_text$function$
;

-- DROP FUNCTION public.st_geohash(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_geohash(geom geometry, maxchars integer DEFAULT 0)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_GeoHash$function$
;

-- DROP FUNCTION public.st_geohash(geography, int4);

CREATE OR REPLACE FUNCTION public.st_geohash(geog geography, maxchars integer DEFAULT 0)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_GeoHash$function$
;

-- DROP FUNCTION public.st_geomcollfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_geomcollfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE
	WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'GEOMETRYCOLLECTION'
	THEN public.ST_GeomFromText($1,$2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_geomcollfromtext(text);

CREATE OR REPLACE FUNCTION public.st_geomcollfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE
	WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'GEOMETRYCOLLECTION'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_geomcollfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_geomcollfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE
	WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'GEOMETRYCOLLECTION'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_geomcollfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_geomcollfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE
	WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'GEOMETRYCOLLECTION'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_geometricmedian(geometry, float8, int4, bool);

CREATE OR REPLACE FUNCTION public.st_geometricmedian(g geometry, tolerance double precision DEFAULT NULL::double precision, max_iter integer DEFAULT 10000, fail_if_not_converged boolean DEFAULT false)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 5000
AS '$libdir/postgis-3', $function$ST_GeometricMedian$function$
;

-- DROP FUNCTION public.st_geometryfromtext(text);

CREATE OR REPLACE FUNCTION public.st_geometryfromtext(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_from_text$function$
;

-- DROP FUNCTION public.st_geometryfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_geometryfromtext(text, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_from_text$function$
;

-- DROP FUNCTION public.st_geometryn(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_geometryn(geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_geometryn_collection$function$
;

-- DROP FUNCTION public.st_geometrytype(geometry);

CREATE OR REPLACE FUNCTION public.st_geometrytype(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geometry_geometrytype$function$
;

-- DROP FUNCTION public.st_geomfromewkb(bytea);

CREATE OR REPLACE FUNCTION public.st_geomfromewkb(bytea)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOMFromEWKB$function$
;

-- DROP FUNCTION public.st_geomfromewkt(text);

CREATE OR REPLACE FUNCTION public.st_geomfromewkt(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$parse_WKT_lwgeom$function$
;

-- DROP FUNCTION public.st_geomfromgeohash(text, int4);

CREATE OR REPLACE FUNCTION public.st_geomfromgeohash(text, integer DEFAULT NULL::integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE COST 50
AS $function$ SELECT CAST(public.ST_Box2dFromGeoHash($1, $2) AS geometry); $function$
;

-- DROP FUNCTION public.st_geomfromgeojson(json);

CREATE OR REPLACE FUNCTION public.st_geomfromgeojson(json)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_GeomFromGeoJson($1::text)$function$
;

-- DROP FUNCTION public.st_geomfromgeojson(jsonb);

CREATE OR REPLACE FUNCTION public.st_geomfromgeojson(jsonb)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_GeomFromGeoJson($1::text)$function$
;

-- DROP FUNCTION public.st_geomfromgeojson(text);

CREATE OR REPLACE FUNCTION public.st_geomfromgeojson(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geom_from_geojson$function$
;

-- DROP FUNCTION public.st_geomfromgml(text, int4);

CREATE OR REPLACE FUNCTION public.st_geomfromgml(text, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geom_from_gml$function$
;

-- DROP FUNCTION public.st_geomfromgml(text);

CREATE OR REPLACE FUNCTION public.st_geomfromgml(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public._ST_GeomFromGML($1, 0)$function$
;

-- DROP FUNCTION public.st_geomfromkml(text);

CREATE OR REPLACE FUNCTION public.st_geomfromkml(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geom_from_kml$function$
;

-- DROP FUNCTION public.st_geomfrommarc21(text);

CREATE OR REPLACE FUNCTION public.st_geomfrommarc21(marc21xml text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 500
AS '$libdir/postgis-3', $function$ST_GeomFromMARC21$function$
;

-- DROP FUNCTION public.st_geomfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_geomfromtext(text, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_from_text$function$
;

-- DROP FUNCTION public.st_geomfromtext(text);

CREATE OR REPLACE FUNCTION public.st_geomfromtext(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_from_text$function$
;

-- DROP FUNCTION public.st_geomfromtwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_geomfromtwkb(bytea)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOMFromTWKB$function$
;

-- DROP FUNCTION public.st_geomfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_geomfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_SetSRID(public.ST_GeomFromWKB($1), $2)$function$
;

-- DROP FUNCTION public.st_geomfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_geomfromwkb(bytea)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_from_WKB$function$
;

-- DROP FUNCTION public.st_gmltosql(text);

CREATE OR REPLACE FUNCTION public.st_gmltosql(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public._ST_GeomFromGML($1, 0)$function$
;

-- DROP FUNCTION public.st_gmltosql(text, int4);

CREATE OR REPLACE FUNCTION public.st_gmltosql(text, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geom_from_gml$function$
;

-- DROP FUNCTION public.st_hasarc(geometry);

CREATE OR REPLACE FUNCTION public.st_hasarc(geometry geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_has_arc$function$
;

-- DROP FUNCTION public.st_hausdorffdistance(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_hausdorffdistance(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$hausdorffdistance$function$
;

-- DROP FUNCTION public.st_hausdorffdistance(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_hausdorffdistance(geom1 geometry, geom2 geometry, double precision)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$hausdorffdistancedensify$function$
;

-- DROP FUNCTION public.st_hexagon(float8, int4, int4, geometry);

CREATE OR REPLACE FUNCTION public.st_hexagon(size double precision, cell_i integer, cell_j integer, origin geometry DEFAULT '010100000000000000000000000000000000000000'::geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Hexagon$function$
;

-- DROP FUNCTION public.st_hexagongrid(in float8, in geometry, out geometry, out int4, out int4);

CREATE OR REPLACE FUNCTION public.st_hexagongrid(size double precision, bounds geometry, OUT geom geometry, OUT i integer, OUT j integer)
 RETURNS SETOF record
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_ShapeGrid$function$
;

-- DROP FUNCTION public.st_interiorringn(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_interiorringn(geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_interiorringn_polygon$function$
;

-- DROP FUNCTION public.st_interpolatepoint(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_interpolatepoint(line geometry, point geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_InterpolatePoint$function$
;

-- DROP FUNCTION public.st_intersection(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_intersection(geom1 geometry, geom2 geometry, gridsize double precision DEFAULT '-1'::integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Intersection$function$
;

-- DROP FUNCTION public.st_intersection(text, text);

CREATE OR REPLACE FUNCTION public.st_intersection(text, text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$ SELECT public.ST_Intersection($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_intersection(geography, geography);

CREATE OR REPLACE FUNCTION public.st_intersection(geography, geography)
 RETURNS geography
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$SELECT public.geography(public.ST_Transform(public.ST_Intersection(public.ST_Transform(public.geometry($1), public._ST_BestSRID($1, $2)), public.ST_Transform(public.geometry($2), public._ST_BestSRID($1, $2))), public.ST_SRID($1)))$function$
;

-- DROP FUNCTION public.st_intersects(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_intersects(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$ST_Intersects$function$
;

-- DROP FUNCTION public.st_intersects(text, text);

CREATE OR REPLACE FUNCTION public.st_intersects(text, text)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_Intersects($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_intersects(geography, geography);

CREATE OR REPLACE FUNCTION public.st_intersects(geog1 geography, geog2 geography)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$geography_intersects$function$
;

-- DROP FUNCTION public.st_inversetransformpipeline(geometry, text, int4);

CREATE OR REPLACE FUNCTION public.st_inversetransformpipeline(geom geometry, pipeline text, to_srid integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public.postgis_transform_pipeline_geometry($1, $2, FALSE, $3)$function$
;

-- DROP FUNCTION public.st_isclosed(geometry);

CREATE OR REPLACE FUNCTION public.st_isclosed(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_isclosed$function$
;

-- DROP FUNCTION public.st_iscollection(geometry);

CREATE OR REPLACE FUNCTION public.st_iscollection(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$ST_IsCollection$function$
;

-- DROP FUNCTION public.st_isempty(geometry);

CREATE OR REPLACE FUNCTION public.st_isempty(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_isempty$function$
;

-- DROP FUNCTION public.st_ispolygonccw(geometry);

CREATE OR REPLACE FUNCTION public.st_ispolygonccw(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_IsPolygonCCW$function$
;

-- DROP FUNCTION public.st_ispolygoncw(geometry);

CREATE OR REPLACE FUNCTION public.st_ispolygoncw(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_IsPolygonCW$function$
;

-- DROP FUNCTION public.st_isring(geometry);

CREATE OR REPLACE FUNCTION public.st_isring(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$isring$function$
;

-- DROP FUNCTION public.st_issimple(geometry);

CREATE OR REPLACE FUNCTION public.st_issimple(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$issimple$function$
;

-- DROP FUNCTION public.st_isvalid(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_isvalid(geometry, integer)
 RETURNS boolean
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT (public.ST_isValidDetail($1, $2)).valid$function$
;

-- DROP FUNCTION public.st_isvalid(geometry);

CREATE OR REPLACE FUNCTION public.st_isvalid(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$isvalid$function$
;

-- DROP FUNCTION public.st_isvaliddetail(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_isvaliddetail(geom geometry, flags integer DEFAULT 0)
 RETURNS valid_detail
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$isvaliddetail$function$
;

-- DROP FUNCTION public.st_isvalidreason(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_isvalidreason(geometry, integer)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$
	SELECT CASE WHEN valid THEN 'Valid Geometry' ELSE reason END FROM (
		SELECT (public.ST_isValidDetail($1, $2)).*
	) foo
	$function$
;

-- DROP FUNCTION public.st_isvalidreason(geometry);

CREATE OR REPLACE FUNCTION public.st_isvalidreason(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$isvalidreason$function$
;

-- DROP FUNCTION public.st_isvalidtrajectory(geometry);

CREATE OR REPLACE FUNCTION public.st_isvalidtrajectory(geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_IsValidTrajectory$function$
;

-- DROP FUNCTION public.st_largestemptycircle(in geometry, in float8, in geometry, out geometry, out geometry, out float8);

CREATE OR REPLACE FUNCTION public.st_largestemptycircle(geom geometry, tolerance double precision DEFAULT 0.0, boundary geometry DEFAULT '0101000000000000000000F87F000000000000F87F'::geometry, OUT center geometry, OUT nearest geometry, OUT radius double precision)
 RETURNS record
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_LargestEmptyCircle$function$
;

-- DROP FUNCTION public.st_length(geography, bool);

CREATE OR REPLACE FUNCTION public.st_length(geog geography, use_spheroid boolean DEFAULT true)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_length$function$
;

-- DROP FUNCTION public.st_length(geometry);

CREATE OR REPLACE FUNCTION public.st_length(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_length2d_linestring$function$
;

-- DROP FUNCTION public.st_length(text);

CREATE OR REPLACE FUNCTION public.st_length(text)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$ SELECT public.ST_Length($1::public.geometry);  $function$
;

-- DROP FUNCTION public.st_length2d(geometry);

CREATE OR REPLACE FUNCTION public.st_length2d(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_length2d_linestring$function$
;

-- DROP FUNCTION public.st_length2dspheroid(geometry, spheroid);

CREATE OR REPLACE FUNCTION public.st_length2dspheroid(geometry, spheroid)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_length2d_ellipsoid$function$
;

-- DROP FUNCTION public.st_lengthspheroid(geometry, spheroid);

CREATE OR REPLACE FUNCTION public.st_lengthspheroid(geometry, spheroid)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_length_ellipsoid_linestring$function$
;

-- DROP FUNCTION public.st_letters(text, json);

CREATE OR REPLACE FUNCTION public.st_letters(letters text, font json DEFAULT NULL::json)
 RETURNS geometry
 LANGUAGE plpgsql
 IMMUTABLE PARALLEL SAFE COST 250
AS $function$
DECLARE
  letterarray text[];
  letter text;
  geom geometry;
  prevgeom geometry = NULL;
  adjustment float8 = 0.0;
  position float8 = 0.0;
  text_height float8 = 100.0;
  width float8;
  m_width float8;
  spacing float8;
  dist float8;
  wordarr geometry[];
  wordgeom geometry;
  -- geometry has been run through replace(encode(st_astwkb(geom),'base64'), E'\n', '')
  font_default_height float8 = 1000.0;
  font_default json = '{
  "!":"BgACAQhUrgsTFOQCABQAExELiwi5AgAJiggBYQmJCgAOAg4CDAIOBAoEDAYKBgoGCggICAgICAgGCgYKBgoGCgQMBAoECgQMAgoADAIKAAoADAEKAAwBCgMKAQwDCgMKAwoFCAUKBwgHBgcIBwYJBgkECwYJBAsCDQILAg0CDQANAQ0BCwELAwsDCwUJBQkFCQcHBwcHBwcFCQUJBQkFCQMLAwkDCQMLAQkACwEJAAkACwIJAAsCCQQJAgsECQQJBAkGBwYJCAcIBQgHCAUKBQoDDAUKAQwDDgEMAQ4BDg==",
  "&":"BgABAskBygP+BowEAACZAmcAANsCAw0FDwUNBQ0FDQcLBw0HCwcLCQsJCwkLCQkJCwsJCwkLCQ0HCwcNBw8HDQUPBQ8DDwMRAw8DEQERAREBEQERABcAFQIXAhUCEwQVBBMGEwYTBhEIEQgPChEKDwoPDA0MDQwNDgsOCRAJEAkQBxAHEgUSBRQFFAMUAxQBFgEWARgAigEAFAISABICEgQQAhAEEAQQBg4GEAoOCg4MDg4ODgwSDgsMCwoJDAcMBwwFDgUMAw4DDgEOARABDgEQARIBEAASAHgAIAQeBB4GHAgaChoMGA4WDhYQFBISEhISDhQQFAwWDBYKFgoYBhgIGAQYBBgCGgAaABgBGAMYAxYHFgUWCRYJFAsUCxIPEg0SERARDhMOFQwVDBcIGQYbBhsCHQIfAR+dAgAADAAKAQoBCgEIAwgFBgUGBQYHBAUEBwQHAgcCBwIHAAcABwAHAQcBBwMHAwUDBwUFBQUHBQUBBwMJAQkBCQAJAJcBAAUCBQAFAgUEBQIDBAUEAwQDBgMEAQYDBgEGAAgBBgAKSeECAJ8BFi84HUQDQCAAmAKNAQAvExMx",
  "\"":"BgACAQUmwguEAgAAkwSDAgAAlAQBBfACAIACAACTBP8BAACUBA==",
  "''":"BgABAQUmwguEAgAAkwSDAgAAlAQ=",
  "(":"BgABAUOQBNwLDScNKw0rCysLLwsxCTEJMwc1BzcHNwM7AzsDPwE/AEEANwI1AjMEMwIzBjEGLwYvCC0ILQgrCCkKKQonCicMJbkCAAkqCSoHLAksBywFLgcuBS4FMAMwAzADMgEwATQBMgA0ADwCOgI6BDoEOAY4BjYINgg2CjQKMgoyCjIMMAwwDi7AAgA=",
  ")":"BgABAUMQ3Au6AgAOLQwvDC8KMQoxCjEKMwg1CDUGNQY3BDcEOQI5AjkAOwAzATEBMQExAy8DLwMvBS8FLQctBS0HKwktBykJKwkpswIADCYKKAooCioIKggsCC4ILgYwBjAGMgQ0AjQCNAI2ADgAQgFAAz4DPAM8BzgHOAc2CTQJMgsyCzALLg0sDSoNKg==",
  "+":"BgABAQ3IBOwGALcBuAEAANUBtwEAALcB0wEAALgBtwEAANYBuAEAALgB1AEA",
  "/":"BgABAQVCAoIDwAuyAgCFA78LrQIA",
  "4":"BgABAhDkBr4EkgEAEREApwJ/AADxARIR5QIAEhIA9AHdAwAA7ALIA9AG6gIAEREA8QYFqwIAAIIDwwH/AgABxAEA",
  "v":"BgABASDmA5AEPu4CROwBExb6AgAZFdMC0wgUFaECABIU0wLWCBcW+AIAExVE6wEEFQQXBBUEFwQVBBUEFwQVBBUEFwQVBBUEFwQXBBUEFwYA",
  ",":"BgABAWMYpAEADgIOAgwCDgQMBAoGDAYKBgoICAgICAgICAoGCgYKBAoEDAQKBAoCDAIKAgwCCgAKAAwACgEMAQoBCgMMAwoDCgUKBQgFCgUIBwYJCAcGCQYJBAsGCQQLAg0CCwINAg0AAwABAAMAAwADAQMAAwADAAMBBQAFAQcBBwEHAwcBCQMJAQsDCwMLAw0FDQMNBQ8FDwURBxMFEwkTBxcJFwkXswEAIMgBCQYJBgkGBwYJCAcIBQgHCgUKBQoFDAEMAwwBDgEOABA=",
  "-":"BgABAQUq0AMArALEBAAAqwLDBAA=",
  ".":"BgABAWFOrAEADgIOAg4CDgQMBAoGDAYKBgoICAgKCAgIBgoGCgYKBgoEDAQKBAwECgIMAAwCDAAMAAwBCgAMAQoDDAMKAwoDCgUKBQgFCgUIBwgJBgcICQYJBgsGCQQLAg0CDQINAA0ADQENAQ0BCwMNAwkFCwUJBQkHBwcJBwUHBwkFCQUJBQkDCwMJAwsDCQELAAsBCwALAAsCCQALAgkECwQJBAkECQYJBgcGBwgJBgcKBQgHCgUKBQwFCgEOAwwBDgEOAA4=",
  "0":"BgABAoMB+APaCxwAHAEaARoDFgMYBRYFFAcUBxIJEgkQCRALEAsOCwwNDA0MDQoPCg0IDwgPBhEGDwYRBA8EEQIRAhMCEQITABMA4QUAEQETAREBEQMRAxEFEQURBREHDwkPBw8JDwsNCw0LDQ0NDQsNCw8JEQkRCREJEwcTBxUFFQUVAxUDFwEXARkAGQAZAhcCFwQXBBUGEwYTCBMIEQoRCg8KDwoPDA0MDQ4NDgsOCQ4JEAkQBxAHEAUSBRIDEgMSAxIDEgESARQAEgDiBQASAhQCEgISBBIEEgYSBhIGEggQChAIEAoQDBAMDgwODg4ODA4MEgwQChIKEggUCBQIFgYWBBYGGAQYAhgCGgILZIcDHTZBEkMRHTUA4QUeOUITRBIePADiBQ==",
  "2":"BgABAWpUwALUA44GAAoBCAEKAQgDBgMGBQYFBgUEBwQFBAUCBwIHAgUABwAHAAUBBwMFAQcFBQMHBQUHBQcFBwMJAwkBCQELAQsAC68CAAAUAhIAFAISBBQCEgQUBBIEEgYUCBIGEAgSChAKEAoQDBAMDg4ODgwQDBIMEgoSChQIFggWCBgGGAQaAhwCHAIWABQBFgEUARQDFAMSAxQFEgUSBxIHEAkQCRALDgsODQ4NDA8KDwwRCBMKEwgTBhUGFwQXBBcEGwAbABsAHQEftwPJBdIDAACpAhIPzwYAFBIArgI=",
  "1":"BgABARCsBLALAJ0LEhERADcA2QEANwATABQSAOYIpwEAALgCERKEBAASABER",
  "3":"BgABAZ0B/gbEC/sB0QQOAwwBDAMMAwwFCgMKBQoFCgUIBwoFCAcICQgJBgkICQYLCAsECwYLBA0GDwINBA8CDwQRAhECEQITABUCFQAVAH0AEQETAREBEQETAxEDEQURBREFDwcRBw8JDwkNCQ8LDQsNDQsNCw0LDwsPCREJEQcRBxMFFQUVBRUDFwEXARkAGQAZAhkCFwQVBBUEEwYTCBEIEQgRCg0MDwoNDA0OCw4LDgkQCRAHEAkQBRAFEgUSAxIDFAMSAxYBFAEWARYAFqQCAAALAgkCCQQHAgcGBwYHBgUIBQYDCAMIAwYDCAEIAQgACAAIAAgCCAIIAgYCCAQIBAgGBgYEBgQIBAoCCgAKAAwAvAEABgEIAAYBBgMGAwQDBgMEBQQDBAUCBQQFAgUABwIFAJkBAACmAaIB3ALbAgAREQDmAhIRggYA",
  "5":"BgABAaAB0APgBxIAFAESABIBEgMSARADEgMQAxIFEAcOBRAHDgkOCQ4JDgsMCwwLCgsKDQoPCA0IDwgPBhEEEwYTAhMEFwIXABcAiQIAEwETABEBEQMTAxEDDwMRBQ8FDwUPBw8JDQcNCQ0LDQsLCwsNCw0JDwkPCREHEQcTBxMFEwMVAxcDGQEZARkAFwAVAhUCFQQTBBMGEwYRCBEIDwoPCg8KDQwNDA0MCw4LDgkOCRAJEAcOBxAHEgUQBRIDEAMSAxIBEgEUARIAFLgCAAAFAgUABQIFBAUCBQQDBAUEAwYDBgMIAwgBCAEIAQoACAAIAgYACAQGAgQEBgQEBAQGBAQCBgIGAgYCBgIIAAYA4AEABgEIAAYBBgMGAQQDBgMEAwQFBAMCBQQFAgUABwIFAPkBAG+OAQCCBRESAgAAAuYFABMRAK8CjQMAAJ8BNgA=",
  "7":"BgABAQrQBsILhQOvCxQR7wIAEhK+AvYIiwMAAKgCERKwBgA=",
  "6":"BgABAsYBnAOqBxgGFgYYBBYEFgIWABQBFgEUAxQDFAUUBRIFEAcSCRAJEAkOCw4NDgsMDQoPCg8KDwgRCBEGEQYRBBMCEwITAhUAkwIBAAERAREBEQEPAxEFEQMPBREFDwcPBw8HDwkNCQ0LDQsNCwsNCw0LDQkPCQ8JDwcRBxEHEwUTAxMFFQEXAxcBGQAVABUCEwIVBBMEEQYTBhEIEQgPChEKDQoPDA0MDQwNDgsOCxALDgkQCRAHEgcQBxIFEgUSBRIBFAMSARIBFAASAOIFABACEgIQAhIEEAQQBhIGEAYQCBAKEAgOChAMDgwMDA4ODA4MDgwODBAKEAoQChIIEggSBhQGFgYUAhYCGAIYABoAGAEYARYBFgMUBRQFEgUSBxAHEAcQCQ4LDgkMCwwNDA0KDQgPCg0GEQgPBhEEEQQRBBMEEwITAhMCFQIVABWrAgAACgEIAQoBCAEGAwYDBgUGBQQFBAUEBQQFAgUABwIFAAUABwEFAAUBBQMFAwUDBQMFBQMFAwUBBQEHAQkBBwAJAJcBDUbpBDASFi4A4AETLC8SBQAvERUrAN8BFC0yEQQA",
  "8":"BgABA9gB6gPYCxYAFAEUARYBEgMUBRQFEgUSBxIHEAcSCQ4JEAkOCw4LDgsMDQwNCg0KDQoPCg8IDwgPBhEGEQQPBBMCEQIRABMAQwAxAA8BEQEPAREDDwMRAw8FEQUPBxEJDwkPCQ8NDw0PDQ8IBwYHCAcGBwgHBgkGBwYJBgcECQYJBAkGCQQJBAsECwQLBA0CCwINAg8CDwIPAA8AaQATAREBEwERAxEFEQURBREHEQcPBw8JDwkPCw8LDQsNDQ0LCw0LDwsNCQ8JDwcPBw8HEQURAxEFEQMRARMBEwFDABEAEwIRAhEEEQQRBg8GEQgPCA8KDwoPCg0MDQwNDAsOCw4LDgkQCRAJDgkQBxIHEAcSBRADEgMUAxIBFAEUABQAagAOAhAADgIOAg4EDAIOBAwEDAQMBgwECgYMBAoGCAYKBgoGCggKBgoICgYICAoICA0MCwwLDgsOCRAHEAcQBxIFEgUSAxIDEgMSARABEgASADIARAASAhICEgQSAhIGEAYSBhAIEAgQCBAKDgoODA4MDgwMDgwODA4KEAwQCBIKEggSCBQIFAYUBBQEFgQWAhYCGAANT78EFis0EwYANBIYLgC0ARcsMRQFADERGS0AswELogHtAhcuNxA3DRkvALMBGjE6ETYSGDIAtAE=",
  "9":"BgABAsYBpASeBBcFFQUXAxUDFQEVABMCFQITBBMEEwYRBhMGDwgRCg8KDwoNDA0OCwwNDgkQCRAJEAcSBxIFEgUSAxQBFAEUARYAlAICAAISAhICEgQSAhAGEgQQBhIGEAgSCA4IEAoOChAMDAwODAwODA4MEAoOChAKEAgSCBIIFAYUBBQGFgIYBBgCGgAWABYBFAEWAxQDEgUUBRIHEgcQCRIJEAkOCw4LDgsODQwNDA0MDwoPCg8IDwgRCBEGEQYRBhEEEQITAhECEwARAOEFAA8BEQEPAREDDwMPBREFDwUPBw8JDwcNCQ8LDQsLCw0NCw0LDQsNCw8JEQkPCREHEQcTBRMFEwUTARUBFQEXABkAFwIXAhcCFQQTBhMGEQYRCA8IDwgNCg8MCwoLDAsOCQ4JDgkQBxAHEAUQBRIFEgMSAxQDFAEUAxQAFgEWABamAgAACwIJAgkCCQIHBAcEBwYFBgUGAwYDBgMGAQgBBgEIAAgABgIIAgYCBgQGBAYEBgYGBgQIBAgECAIKAgoCCgAMAJgBDUXqBC8RFS0A3wEUKzARBgAwEhYsAOABEy4xEgMA",
  ":":"BgACAWE0rAEADgIOAg4CDgQMBAoGDAYKBgoICAgKCAgIBgoGCgYKBgoEDAQKBAwECgIMAAwCDAAMAAwBCgAMAQoDDAMKAwoDCgUKBQgFCgUIBwgJBgcICQYJBgsGCQQLAg0CDQINAA0ADQENAQ0BCwMNAwkFCwUJBQkHBwcJBwUHBwkFCQUJBQkDCwMJAwsDCQELAAsBCwALAAsCCQALAgkECwQJBAkECQYJBgcGBwgJBgcKBQgHCgUKBQwFCgEOAwwBDgEOAA4BYQDqBAAOAg4CDgIOBAwECgYMBgoGCggICAoICAgGCgYKBgoGCgQMBAoEDAQKAgwADAIMAAwADAEKAAwBCgMMAwoDCgMKBQoFCAUKBQgHCAkGBwgJBgkGCwYJBAsCDQINAg0ADQANAQ0BDQELAw0DCQULBQkFCQcHBwkHBQcHCQUJBQkFCQMLAwkDCwEJAwsACwELAAsACwIJAAsECQILBAkECQQJBgkGBwYHCAkGBwoFCAcKBQoFDAUKAQ4DDAEOAQ4ADg==",
  "x":"BgABARHmAoAJMIMBNLUBNrYBMIQB1AIA9QG/BI4CvwTVAgA5hgFBwAFFxwE1fdUCAI4CwATzAcAE1AIA",
  ";":"BgACAWEslgYADgIOAg4CDgQMBAoGDAYKBgoICAgKCAgIBgoGCgYKBgoEDAQKBAwECgIMAAwCDAAMAAwBCgAMAQoDDAMKAwoDCgUKBQgFCgUIBwgJBgcICQYJBgsGCQQLAg0CDQINAA0ADQENAQ0BCwMNAwkFCwUJBQkHBwcJBwUHBwkFCQUJBQkDCwMJAwsBCQMLAAsBCwALAAsCCQALBAkCCwQJBAkECQYJBgcGBwgJBgcKBQgHCgUKBQwFCgEOAwwBDgEOAA4BYwjxBAAOAg4CDAIOBAwECgYMBgoGCggICAgICAgICgYKBgoECgQMBAoECgIMAgoCDAIKAAoADAAKAQwBCgEKAwwDCgMKBQoFCAUKBQgHBgkIBwYJBgkECwYJBAsCDQILAg0CDQADAAEAAwADAAMBAwADAAMAAwEFAAUBBwEHAQcDBwEJAwkBCwMLAwsDDQUNAw0FDwUPBREHEwUTCRMHFwkXCRezAQAgyAEJBgkGCQYHBgkIBwgFCAcKBQoFCgUMAQwDDAEOAQ4AEA==",
  "=":"BgACAQUawAUA5gHEBAAA5QHDBAABBQC5AgDsAcQEAADrAcMEAA==",
  "B":"BgABA2e2BMQLFgAUARQBFAEUAxIDEgUSBRIFEAcQBxAJDgkOCQ4LDgsMCwwNDA0KDQgNCg0IDwYPBg8GDwQRBBEEEQIRAhMAEwAHAAkABwEHAAkBCQAHAQkBCQEHAQkBCQMJAwcDCQMJAwkFBwUJAwkHCQUHBQkHCQcJBwcHBwkHBwcJBwsHCQUQBQ4FDgcOCQ4JDAkMCwoNCg0IDwgRBhMEFQQXAhcCGwDJAQEvAysFJwklDSMPHREbFRkXFRsTHw8fCyUJJwcrAy0B6wMAEhIAoAsREuYDAAiRAYEElgEAKioSSA1EOR6JAQAA0wEJkAGPBSwSEiwAzAETKikSjwEAAMUCkAEA",
  "A":"BgABAg/KBfIBqQIAN98BEhHzAgAWEuwCngsREvwCABMR8gKdCxIR8QIAFBI54AEFlwGCBk3TA6ABAE3UAwMA",
  "?":"BgACAe4BsgaYCAAZABkBFwEXBRUDEwUTBxEHEQcPCQ8JDQkNCQ0LCwsLCwsLCQsJCwcNBwsHDQcLBQsFDQULAwkFCwMLAwkDCQMBAAABAQABAAEBAQABAAEAAQABAAABAQAAAQEAEwcBAQABAAMBAwADAAUABQAFAAcABwAFAAcABwAFAgcABQAHAAUAW7cCAABcABgBFgAUAhQAFAISAhACEAIQBA4EDgQMBgwGDAYMBgoICgYKCAgKCggICAgKBgoICgYMCAwGDAgOBg4GEAYQBgIAAgIEAAICBAACAgQCBAIKBAoGCAQKBggIBgYICAYIBggGCgQIBAoECAQKAggCCgIKAAgACgAKAAgBCAEKAwgDCAMIAwgFBgMIBQYHBAUGBQQFBAcCBQQHAgcCCQIHAgkCBwAJAgkACQAJAAkBCQAJAQsACQELAQsDCwELAwsDCwMLAwsDCwULAwsFCwMLBV2YAgYECAQKBAwGDAQMBhAIEAYSBhIIEgYUBhIEFgYUBBYEFgQWAhgCFgIYABYAGAAYARgBGAMWBRYHFgcWCRYLFA0IBQYDCAUIBwYFCAcGBwgHBgcICQYJCAkGCQYJCAsGCwYLBgsGDQYNBA0GDQQNBA8EDwQPAg8EEQIRAhEAEQITAWGpBesGAA4CDgIOAg4EDAQKBgwGCgYKCAgICggICAYKBgoGCgYKBAwECgQMBAoCDAAMAgwADAAMAQoADAEKAwwDCgMKAwoFCgUIBQoFCAcICQYHCAkGCQYLBgkECwINAg0CDQANAA0BDQENAQsDDQMJBQsFCQUJBwcHCQcFBwcJBQkFCQUJAwsDCQMLAwkBCwALAQsACwALAgkACwIJBAsECQQJBAkGCQYHBgcICQYHCgUIBwoFCgUMBQoBDgMMAQ4BDgAO",
  "C":"BgABAWmmA4ADAAUCBQAFAgUEBQIDBAUEAwQDBgMEAQYDBgEGAAgBBgDWAgAAwQLVAgATABMCEQITBBEEEQQRBhEIEQgPCA8KDwoNCg0MDQwNDAsOCw4LDgkOCxAHEAkQBxIHEgUSBRIDEgEUARIBFAAUAMIFABQCFAISBBQEEgQSBhIIEggSCBAKEAoQCg4MDgwODA4ODA4MDgwQDA4KEggQChIIEggSBhIGFAQSAhQCEgIUAMYCAADBAsUCAAUABwEFAAUBBQMDAQUDAwMDAwMFAQMDBQEFAAUBBwAFAMEF",
  "L":"BgABAQmcBhISEdkFABIQALQLwgIAAIEJ9AIAAK8C",
  "D":"BgABAkeyBMQLFAAUARIBFAESAxIDEgMSBRIFEAcQBxAHDgkOCQ4LDgsMCwwNDA0KDwoPCg8IDwgRCBEGEwQTBBMEEwIVAhUAFwDBBQAXARcBFwMTAxUDEwUTBxEHEQcPCQ8JDwkNCw0LCwsLDQsNCQ0JDQcPBw8HDwcRBREFEQMRAxEDEwERARMBEwDfAwASEgCgCxES4AMACT6BAxEuKxKLAQAAvwaMAQAsEhIsAMIF",
  "F":"BgABARGABoIJ2QIAAIECsgIAEhIA4QIRErECAACvBBIR5QIAEhIAsgucBQASEgDlAhES",
  "E":"BgABARRkxAuWBQAQEgDlAhES0QIAAP0BtgIAEhIA5wIRFLUCAAD/AfACABISAOUCERLDBQASEgCyCw==",
  "G":"BgABAZsBjgeIAgMNBQ8FDQUNBQ0HCwcNBwsHCwkLCQsJCwsJCwsLCQsJDQkLBw0HDwcNBw8FDwUPAw8DEQMPAxEBEQERARMBEQAXABUCFwIVAhMEFQQTBhMGEwYRCBEIDwoRCg8KDwwNDA0MDQ4LDgkQCRAJEAcQBxIFEgUUBRQDFAMUARYBFgEYAMoFABQCFAASBBQCEgQSBBIEEgYSBhAGEAgQCBAKDgoOCg4MDgwMDgwOChAKEAoSCBIIFAgUBhQEGAYWAhgEGAIaAOoCAAC3AukCAAcABwEFAQUBBQMFAwMFAwUDBQEFAQcBBQEFAQUABwAFAMUFAAUCBwIFAgUCBQQFBAMGBQYDBgUGAwgDBgMIAQgDCAEIAQoBCAEIAAgACgAIAAgCCAIIAggECgQGBAgECAYIBgC6AnEAAJwCmAMAAJcF",
  "H":"BgABARbSB7ILAQAAnwsSEeUCABISAOAE5QEAAN8EEhHlAgASEgCiCxEQ5gIAEREA/QPmAQAAgAQPEOYCABER",
  "I":"BgABAQmuA7ILAJ8LFBHtAgAUEgCgCxMS7gIAExE=",
  "J":"BgABAWuqB7ILALEIABEBEwERAREDEwMRAxEFEQURBw8HEQcPCQ0LDwsNCw0NDQ0LDwsPCxEJEQkTCRMJFQcVBxcFFwMZAxsBGwEbAB8AHQIbAhsEGQYXBhcGFQgTCBMKEwoRDA8KDwwNDA0OCw4LDgkQCRAJEAcQBRIFEgUSAxQDEgESARIBFAESABIAgAEREtoCABERAn8ACQIHBAcEBwYHBgUIBQoDCgMKAwoDDAEKAQwBCgEMAAwACgAMAgoCDAIKBAoECgYKBggGBgYGCAQGBAgCCgAIALIIERLmAgAREQ==",
  "M":"BgACAQRm1gsUABMAAAABE5wIAQDBCxIR5QIAEhIA6gIK5gLVAe0B1wHuAQztAgDhAhIR5QIAEhIAxAsUAPoDtwT4A7YEFgA=",
  "K":"BgABAVXMCRoLBQsDCQMLAwsDCwMLAwsBCwELAQsBCwELAQ0ACwELAAsADQALAg0ACwILAA0CCwILAgsCDQQLBAsECwYNBAsGCwYLCAsGCwgJCgsICQoJCgkMCQwJDAkOCRALEAkQCRKZAdICUQAAiwQSEecCABQSAKALExLoAgAREQC3BEIA+AG4BAEAERKCAwAREdkCzQXGAYUDCA0KDQgJCgkMBwoFDAUMAQwBDgAMAg4CDAQOBAwGDghmlQI=",
  "O":"BgABAoMBsATaCxwAHAEaARoDGgMYBRYFFgcWBxQJEgkSCRILEAsODQ4NDg0MDwoNDA8KDwgPCBEIDwYRBg8GEQQRAhMCEQITABMA0QUAEQETAREBEQMTBREFEQURBxEHDwcRCQ8LDQsPCw0NDQ0NDwsPCw8LEQkTCRMJEwkVBxUHFwUXAxkDGQEbARsAGwAZAhkCGQQXBhcGFQYVCBUIEwoRChEMEQoRDA8MDQ4NDg0OCxAJEAsQCRAHEgcSBxIFFAMSAxIDEgEUARIAEgDSBQASAhQCEgISBBIEEgYSBhIIEggQCBAKEgwODBAMEA4ODg4QDhIMEAwSChQKFAgUCBYIFgYYBBoGGgQcAh4CHgILggGLAylCWxZbFSlBANEFKklcGVwYKkwA0gU=",
  "N":"BgABAQ+YA/oEAOUEEhHVAgASEgC+CxQAwATnBQDIBRMS2AIAExEAzQsRAL8ElgU=",
  "P":"BgABAkqoB5AGABcBFQEVAxMDEwMTBREHEQcRBw8JDwkNCQ0LDQsNCwsNCw0JDQkNCQ8HDwcPBxEFEQURAxEDEQMTAREBEwETAH8AAIMDEhHlAgASEgCgCxES1AMAFAAUARIAFAESAxIDEgMSAxIFEAUQBRAHDgkOCQ4JDgsMCwwNDA0KDQoNCg8IDwgRCBEGEwQTBBUEFQIXAhkAGQCzAgnBAsoCESwrEn8AANUDgAEALBISLgDYAg==",
  "R":"BgABAj9msgsREvYDABQAFAESARQBEgESAxIDEgUSBRAFEAcQBw4JDgkOCQ4LDAsMDQwLCg0KDwoNCA8IDwgPBhEEEwYTAhMEFQIXABcAowIAEwEVARMDEwMTBRMFEQcTBxELEQsRDQ8PDREPEQ0VC8QB/QMSEfkCABQSiQGyA3EAALEDFBHnAgASEgCgCwnCAscFogEALhISLACqAhEsLRKhAQAApQM=",
  "Q":"BgABA4YBvAniAbkB8wGZAYABBQUFAwUFBQUHBQUDBwUFBQcFBQMHBQcDBwUJAwcDCQMJAwkDCQMJAQsDCwMLAQsDCwENAw0BDQEPAA8BDwAPABsAGwIZAhcEGQQXBBUGFQgVCBMIEQoTChEKDwwPDA8ODQ4NDgsQCxAJEAkQBxIHEgUSBRQFFAMUARQDFAEWABYAxgUAEgIUAhICEgQSBBIGEgYSCBIIEAgQChIMDgwQDBAODg4OEA4SDBAMEgoUChQIFAgWCBYGGAQaBhoEHAIeAh4CHAAcARoBGgMaAxgFFgUWBxYHFAkSCRIJEgsQCw4NDg0ODQwPCg0MDwoPCA8IEQgPBhEGDwYRBBECEwIRAhMAEwC7BdgBrwEImQSyAwC6AylAWxZbFSk/AP0BjAK7AQeLAoMCGEc4J0wHVBbvAaYBAEM=",
  "S":"BgABAYMC8gOEBxIFEgUQBxIFEgcSBxIJEgcSCRIJEAkQCRALEAsOCw4NDg0MDQ4PDA0KEQoPChEKEQgRCBMGFQQTBBcCFQAXABkBEwARAREBEQMPAQ8DDwMPAw0DDQUNAw0FCwULBwsFCwUJBwsFCQcHBQkHCQUHBwcHBwUHBwUFBQcHBwUHAwcFEQsRCxMJEwkTBxMFEwUVBRUDFQMVARMBFwEVABUAFQIVAhUCFQQVBBUEEwYVBhMIEwgTCBMIEwgRCBMKEQgRCmK6AgwFDgUMAw4FEAUOBRAFEAUQBRAFEAMSAw4DEAMQAxABEAEOAQ4AEAIMAg4CDgQMBAwGCggKCAoKBgwGDgYQBBACCgAMAAoBCAMKBQgFCAcIBwgJCAsGCQgLCA0IDQgNCA8IDQgPCA8IDwgPChEIDwgPCBEKDwoPDBEMDwwPDg8ODw4NEA0QCxALEgsSCRIHEgcUBRQFGAUYAxgBGgEcAR4CJAYkBiAIIAweDBwQHBAYEhgUFBYUFhQWEBoQGg4aDBwKHAoeBh4GIAQgAiACIgEiASIFIgUiBSAJIgkgCyINZ58CBwQJAgkECwQLAgsECwINBA0CDQQNAg0CDQALAg0ADQANAAsBCwELAQsDCwULBQkFCQcHBwcJBwkFCwMLAw0BDQENAAsCCwQLBAkGCQgJCAkKBwoJCgcMBQoHDAcMBQwF",
  "V":"BgABARG2BM4DXrYEbKwDERL0AgAVEesCnQsSEfsCABQS8QKeCxES8gIAExFuqwNgtQQEAA==",
  "T":"BgABAQskxAv0BgAAtQKVAgAA+wgSEeUCABISAPwImwIAALYC",
  "U":"BgABAW76B7ALAKMIABcBFwMXARUFFQUTBxMHEwkRCREJEQsPDQ0LDw0NDwsPCw8LEQkPCRMJEQcTBxMFEwUVBRUDEwMXARUBFQEXABUAEwIVAhMCFQQTBBUEEwYTBhMIEwgRChEIEQwRDA8MDw4PDg0OCxANEAsSCRIJEgcUBxQHFAMWBRYBGAEYARgApggBAREU9AIAExMAAgClCAALAgkECQQHBAcIBwgHCAUKBQoDCgMKAwwBCgEMAQwADAAMAgoCDAIKAgoECgQKBggGCAYICAYKBAgCCgIMAgwApggAARMU9AIAExM=",
  "X":"BgABARmsCBISEYkDABQSS54BWYICXYkCRZUBEhGJAwAUEtYCzgXVAtIFExKIAwATEVClAVj3AVb0AVKqAREShgMAERHXAtEF2ALNBQ==",
  "W":"BgABARuODcQLERHpAp8LFBHlAgASEnW8A2+7AxIR6wIAFBKNA6ALERKSAwATEdQB7wZigARZ8AIREugCAA8RaKsDYsMDXsoDaqYDExLqAgA=",
  "Y":"BgABARK4BcQLhgMAERHnAvMGAKsEEhHnAgAUEgCsBOkC9AYREoYDABERWOEBUJsCUqICVtwBERI=",
  "Z":"BgABAQmAB8QLnwOBCaADAADBAusGAMgDggmhAwAAwgLGBgA=",
  "`":"BgABAQfqAd4JkQHmAQAOlgJCiAGpAgALiwIA",
  "c":"BgABAW3UA84GBQAFAQUABQEFAwMBBQMDAwMDAwUBAwMFAQUABQEHAAUAnQMABQIFAAUCBQQFAgMEBQQDBAMGAwQBBgMGAQYABgEGAPABABoMAMsCGw7tAQATABMCEwARAhMEEQIPBBEEDwQPBg8IDwYNCA0KDQoNCgsMCwwLDAkOCRAHDgcQBxIFEgUUBRQDFAEWAxgBGAAYAKQDABQCFAISBBQCEgYSBhAGEggQCBAIEAoQCg4MDAwODAwODAwKDgwQCg4IEAgQCBAIEAYSBhIGEgQSAhQCFAIUAOABABwOAM0CGQzbAQA=",
  "a":"BgABApoB8AYCxwF+BwkHCQcJCQkHBwkHBwcJBQkFBwUJBQkFCQMHBQkDCQMJAwcDCQEHAQkBBwEJAQcABwAHAQcABQAHAAUBBQAFABMAEwITAhEEEwQPBBEGDwgPCA0IDwoLCg0KCwwLDAsMCQ4JDgkOBw4HEAcQBRAFEAUSAxADEgESAxIBFAESABQAFAISAhQCEgQSBBIEEgYSBhIIEAgQChAIDgwODA4MDg4MDgwODBAMEAoSCBIKEggUCBQGFgYWBBgEGAIaAhoAcgAADgEMAQoBCgEIAwgDBgUEBQQFBAcCBwIHAgkCCQAJAKsCABcPAMwCHAvCAgAUABYBEgAUARIDFAMQAxIDEAUSBQ4FEAcOCRAJDAkOCwwLDA0MCwoNCg8IDwgPCA8GEQYRBhMEEwIXAhUCFwAZAIMGFwAKmQLqA38ATxchQwgnGiMwD1AMUDYAdg==",
  "b":"BgABAkqmBIIJGAAYARYBFgEUAxQDEgUSBRIFEAcQCQ4HDgkOCw4LDAsMDQoNCg0KDQgPBg8GDwYRBBEEEQQTBBECEwIVAhMAFQD/AgAZARcBFwEXAxUDEwUTBREFEQcPBw8JDwkNCQ0LDQsLCwsNCQ0JDQcPBw8HDwURAxEDEQMTAxMBEwMVARUAFQHPAwAUEgCWCxEY5gIAERkAowKCAQAJOvECESwrEn8AAJsEgAEALBISLgCeAw==",
  "d":"BgABAkryBgDLAXAREQ8NEQ0PDREJDwkRBw8FDwURAw8DDwERAw8BEQEPACMCHwQfCB0MGw4bEhcUFxgVGhEeDSANJAkmBSgDKgEuAIADABYCFAIUAhQCFAQUBBIGEgYSBhAIEAgQCBAKDgoODAwMDAwMDgoOCg4KEAgQCBIGEgYSBhQEFgQWBBYCGAIYAHwAAKQCERrmAgARFwCnCxcADOsCugJGMgDmA3sAKxERLQCfAwolHBUmBSQKBAA=",
  "e":"BgABAqMBigP+AgAJAgkCCQQHBAcGBwYFCAUIBQgDCgMIAQoDCAEKAQoACgAKAAoCCAIKAggECgQIBAgGCAYGBgQIBAoECAIKAAyiAgAAGQEXARcBFwMVBRMFEwURBxEHDwcPCQ8LDQkNCwsNCw0LDQkNBw8JDwcPBQ8FEQURAxEDEwMTAxMBFQAVARcALwIrBCkIJwwlDiESHxQbGBkaFR4TIA0iCyQJKAMqASwAggMAFAIUABIEFAISBBIEEgQSBhIGEAgQCBAIEAoODA4MDgwODgwQDBAKEAoSChIIFAgUCBYGGAQYBhoCGgQcAh4ALgEqAygFJgkkDSANHhEaFRgXFBsSHQ4fDCUIJwQpAi0AGQEXAxcDFQcTBRMJEQkPCw8LDQ0PDQsNDQ8LEQsRCxEJEwkTCRMJEwcTBxUHFQUVBRUHFQUVBRUHFwcVBRUHCs4BkAMfOEUURxEfMwBvbBhAGBwaBiA=",
  "h":"BgABAUHYBJAGAAYBBgAGAQYDBgEEAwYDBAMEBQQDAgUEBQIFAAUCBQB1AAC5BhIT5wIAFhQAlAsRGOYCABEZAKMCeAAYABgBFgEWARQDFAMSBRIFEgUQBxAJDgcOCQ4LDgsMCwwNCg0KDQoNCA8GDwYPBhEEEQQRBBMEEQITAhUCEwAVAO0FFhPnAgAUEgD+BQ==",
  "g":"BgABArkBkAeACQCNCw8ZERkRFxEVExMVERUPFQ8XDRcLGQkZBxsFGwUdAR0BDQALAA0ADQINAAsCDQANAg0CDQILAg0EDQINBA0GDQQNBg0EDQYNCA0GDwgNCA0IDQgPCg0KDwwNDA8MDw4PDqIB7gEQDRALEAkQCQ4JEAcOBw4FDgUOAwwFDgMMAQwBDAEMAQwACgEKAAoACAIIAAgCCAIGAggCBgIGBAYCBgQEAgYEAqIBAQADAAEBAwADAAMABQADAAUAAwAFAAMABQAFAAMABQA3ABMAEwIRAhMCEQQRBBEEEQYRBg8IDwgPCA0KDQoNCg0MCwwLDgsOCQ4JDgkQBxAHEgcSBRIDFAMWAxQBFgEYABgA/gIAFgIWAhQEFgQUBBIGFAgSCBIIEAoSChAKDgwODA4MDg4MDgwODA4KEAgQCBAIEgYSBhIEEgYSBBQCEgIUAhQCOgAQABABDgEQAQ4BEAMOAw4FDgUOBQwFDgcMBQ4HDAkMB4oBUBgACbsCzQYAnAR/AC0RES0AnQMSKy4RgAEA",
  "f":"BgABAUH8A6QJBwAHAAUABwEFAQcBBQEFAwUDBQMDAwMDAwUDAwMFAQUAwQHCAQAWEgDZAhUUwQEAAOMEFhftAgAWFADKCQoSChIKEAoQCg4KDgwOCgwMDAoKDAwMCgwIDAgMCAwIDAYOCAwEDgYMBA4GDAIOBA4CDgQOAg4CDgAOAg4ADgC2AQAcDgDRAhkQowEA",
  "i":"BgACAQlQABISALoIERLqAgAREQC5CBIR6QIAAWELyAoADgIOAgwEDgIKBgwGCgYKCAoGCAgICggIBggGCgYKBAoECgQMBAoCDAIMAgwCDAAMAAwADAEMAQoBDAMKAwoDCgUKBQgFCgUIBwgHCAcICQgJBgkECwQJBA0CCwANAA0ADQELAQ0BCwMJBQsFCQUJBwkFBwcHBwcJBQcFCQUJBQkDCQMLAwkBCwELAQsACwALAAsCCwILAgkCCwIJBAkECQQJBgcGCQYHCAcIBwgHCgUKBQwFCgMMAQwBDgEMAA4=",
  "j":"BgACAWFKyAoADgIOAgwEDgIKBgwGCgYKCAoGCAgICggIBggGCgYKBAoECgQMBAoCDAIMAgwCDAAMAAwADAEMAQoBDAMKAwoDCgUKBQgFCgUIBwgHCAcICQgJBgkECwQJBA0CCwANAA0ADQELAQ0BCwMJBQsFCQUJBwkFBwcHBwcJBQcFCQUJBQkDCQMLAwkBCwELAQsACwALAAsCCwILAgkCCwIJBAkECQQJBgcGCQYHCAcIBwgHCgUKBQwFCgMMAQwBDgEMAA4BO+YCnwwJEQkRCQ8JDwsNCQ0LDQkLCwsJCQsLCQkLBwsHCwcLBwsFCwcNAwsFDQMLBQ0BDQMNAQ0DDQENAQ0ADQENAA0AVwAbDQDSAhoPQgAIAAgABgAIAgYCCAIGAgYEBgQGBAQEBAQEBgQEBAYCBgC4CRES6gIAEREAowo=",
  "k":"BgABARKoA/QFIAC0AYoD5gIAjwK5BJICwwTfAgDDAbIDFwAAnwMSEeUCABISAJILERLmAgAREQCvBQ==",
  "n":"BgABAW1yggmQAU8GBAgEBgQGBgYCCAQGBAYEBgQIAgYECAQGAggEBgIIBAgCCAQIAggCCAIIAgoACAIKAAgCCgAKAgoADAAKAgwAFgAWARQAFAEUAxQDFAMSAxIFEgUQBRIHEAkOBxAJDgsOCwwLDA0MDQoPCA8IEQgRBhEGEwYVBBUEFQIXAhkCGQDtBRQR5QIAFBAA/AUACAEIAQYBCAMGBQQFBgUEBwQFBAcCBwIHAgcCCQIHAAcACQAHAQcABwMHAQUDBwMFAwUFBQUDBQEFAwcBBwAHAPkFEhHjAgASEgDwCBAA",
  "m":"BgABAZoBfoIJigFbDAwMCg4KDggOCA4IDgYQBhAGEAQQBBAEEAISAhACEgAmASQDJAciCyANHhEcFRwXDg4QDBAKEAwQCBAKEggSBhIGEgYSBBQEEgIUAhICFAAUABQBEgEUARIDEgMSAxIFEgUQBxAHEAcQBw4JDgkOCw4LDAsMDQoNCg8KDwgPCBEIEQYRBBMEEwQTAhMCFQAVAP0FEhHlAgASEgCCBgAIAQgBBgEGAwYFBgUEBQQHBAUEBwIHAgcCBwIJAAcABwAJAAcBBwEHAQUBBwMFAwUDBQMDBQMFAwUBBQEHAQcAgQYSEeUCABISAIIGAAgBCAEGAQYDBgUGBQQFBAcEBQQHAgcCBwIHAgkABwAHAAkABwEHAQcBBQEHAwUDBQMFAwMFAwUDBQEFAQcBBwCBBhIR5QIAEhIA8AgYAA==",
  "l":"BgABAQnAAwDrAgASFgDWCxEa6gIAERkA0wsUFw==",
  "y":"BgABAZ8BogeNAg8ZERkRFxEVExMVERUPFQ8XDRcLGQkZBxsFGwUdAR0BDQALAA0ADQINAAsCDQANAg0CDQILAg0EDQINBA0GDQQNBg0EDQYNCA0GDwgNCA0IDQgPCg0KDwwNDA8MDw4PDqIB7gEQDRALEAkQCQ4JEAcOBw4FDgUOAwwFDgMMAQwBDAEMAQwACgEKAAoACAIIAAgCCAIGAggCBgIGBAYCBgQEAgYEAqIBAQADAAEBAwADAAMABQADAAUAAwAFAAMABQAFAAMABQA3ABMAEwIRABECEwQRAg8EEQQPBBEGDwgNCA8IDQgNCg0MDQwLDAkOCw4JDgcQBxAHEgUSBRQFFAMWARgDGAEaABwA9AUTEuQCABEPAP8FAAUCBQAFAgUEBQIDBAUEAwQDBgMEAQYDBgEGAAgBBgCAAQAAvAYREuICABMPAP0K",
  "q":"BgABAmj0A4YJFgAWARQAEgESAxADEAMOAw4FDgUMBQ4HDgcOBwwJDgmeAU4A2QwWGesCABYaAN4DAwADAAMBAwADAAUAAwADAAMABQAFAAUABwAHAQcACQAVABUCFQATAhUCEwQRAhMEEQQRBhEGDwgPCA8IDQoNDA0MCwwLDgkOCRAJEAkQBxIHEgUUBRYDFgMYARoBGgAcAP4CABYCFgIWBBYEFAQSBhQIEggSCBAKEgoQDA4MDgwODg4ODBAMDgwQChIIEAoSCBIGEgYUBhQEFAQWAhYCFgIWAApbkQYSKy4ReAAAjARTEjkRHykJMwDvAg==",
  "p":"BgABAmiCBIYJFgAWARYBFAEWAxQDEgUUBRIFEgcSBxAJEAkQCQ4LDgsOCwwNDA0KDwoPCg8IEQgRCBEGEwQTBhMCFQQVAhUAFQD9AgAbARkBFwMXAxcDEwUTBxMHEQcRCQ8JDQsNCw0LCw0LDQkPCQ0JDwURBxEFEQURAxMDEQMTARUBEwEVARUBFQAJAAcABwAFAAcABQAFAAMAAwADAAUAAwIDAAMAAwIDAADdAxYZ6wIAFhoA2gyeAU0OCgwIDgoMCA4GDgYMBg4GDgQQBBAEEgQUAhQCFgIWAApcoQMJNB8qNxJVEQCLBHgALhISLADwAg==",
  "o":"BgABAoMB8gOICRYAFgEWARQBFgMUAxIDFAUSBRIHEgcQBxAJEAkOCw4LDgsMDQwNCg8KDwoPCg8IEQgRBhMGEwQTBBMCFQIVABcAiwMAFwEVARUDEwMTAxMFEwcRBxEHDwkPCQ8LDQsNCw0NCw0LDwkNCw8HEQkPBxEHEQcRBRMFEwMTAxUDFQEVABUAFQAVAhUCFQITBBMEEwYTBhEGEQgRCA8KDwoPCg0KDQwNDAsOCw4JDgkQCRAJEgcSBxIFFAUUAxQDFgEWARYAFgCMAwAYAhYCFgQUBBQEFAYUCBIIEggQChAKEAwODA4MDg4MDgwQCg4KEgoQChIIEggSBhQGEgYUBBYEFAIWAhYCFgALYv0CHTZBFEMRHTcAjwMcNUITQhIiOACQAw==",
  "r":"BgACAQRigAkQAA8AAAABShAAhAFXDAwODAwKDgoOCBAIDgYQBhAEEAQQBBAEEAISABACEAAQAA4BEAAQARADEAEQAxADEAUSBRIHFAcUCxQLFA0WDVJFsQHzAQsMDQwLCgkICwgLCAkGCQYJBAkGBwIJBAcCBwQHAAcCBwAFAgcABQAHAQUABQEFAQUBBQEDAQUBAwMDAQMDAwEAmwYSEeMCABISAO4IEAA=",
  "u":"BgABAV2KBwGPAVANCQsHDQcNBw0FCwUNBQ0FDQMPAw8DEQMTARMBFQEVABUAFQITABMEEwITBBMEEQQRBhEGDwYRCA8KDQgPCg0MDQwLDAsOCRALDgcQBxIHEgUUBRQFFAMWAxgBGAEYARoA7gUTEuYCABMPAPsFAAcCBwIFBAcCBQYDBgUGAwgDBgMIAQgBCAEIAQoBCAAIAAoACAIIAggCCAIGBAgEBgQGBgYGBAYCBgQIAggACAD6BRES5AIAEREA7wgPAA==",
  "s":"BgABAasC/gLwBQoDCgMMBQ4DDgUOBRAFEAUSBRAHEgcQCRIJEAkSCxALEAsQDRANDg0ODw4PDA8MDwoRChEIEwYTBBcCFQIXABkBGQEXAxcFFQUTBRMHEwcRCREJDwkNCQ8LDQ0LCwsNCw0JDQkPBw8HDwUPBREDEQMRAREDEQETABEBEwARABMADwIRABECEQIRBBMCEwQVBBUEFQYVBhMIFwgVChUKFQxgsAIIAwYDCAMKAQgDCAMKAQoDCgEKAwoBCgMKAQwDCgEKAwoBDAMKAQoBCgEMAQoACgEKAAoBCgAKAQgACgAIAQgABgoECAIKAgoCCgAMAQoBDAUEBwIHBAcEBwIHBAkECQQJBAkECQYLBAkGCwYJBgsGCwYJCAsGCwgJBgsICQgLCAkICwgJCgkKCQoJCgcKCQwHDAcMBwwFDAcMAw4FDAMOAw4BDgMQARAAEAESABIAEgIQAg4CDgIOBA4CDgQMBAwEDAQMBgoECgYKBgoGCgYIBggGCAgIBggGBgYIBgYGBgYGBgYGBAgGBgQIBAYECAQQChIIEggSBhIEEgQSBBQCFAISABQAEgASABIAEgESARIBEAEQAxIDDgMQAxADDgUOBQwDDAMMAwoDCAMIAQYBe6cCAwIDAgUAAwIFAgUCBwIFAgcCBQIHAgUCBwIHAAUCBwIHAgUABwIHAgcABQIHAAcCBwAFAgUABQIFAAUABQIDAAEAAQABAQEAAQEBAQEBAQEBAQEDAQEAAwEBAQMAAwEDAAMBAwADAQMAAwABAQMAAwADAAEAAwIBAAMCAQQDAgE=",
  "t":"BgABAUe8BLACWAAaEADRAhsOaQANAA0ADwINAA0CDQANAg0CDQINBA0CCwYNBA0GCwYNBgsIDQgLCAsKCwgJDAsKCQwJDAkOCQ4HEAcSBxIHEgUUAOAEawAVEQDWAhYTbAAAygIVFOYCABUXAMUCogEAFhQA1QIVEqEBAADzAwIFBAMEBQQDBAMEAwYDBgMGAwYBCAEGAQgBBgEIAAgA",
  "w":"BgABARz8BsAEINYCKNgBERLuAgARD+8B3QgSEc0CABQSW7YCV7UCFBHJAgASEpMC3AgREvACABERmAHxBDDaAVeYAxES7gIAEREo1QE81wIIAA==",
  "z":"BgABAQ6cA9AGuQIAFw8AzAIaC9QFAAAr9wKjBuACABYQAMsCGQyZBgCaA9AG"
   }';
BEGIN

  IF font IS NULL THEN
    font := font_default;
  END IF;

  -- For character spacing, use m as guide size
  geom := ST_GeomFromTWKB(decode(font->>'m', 'base64'));
  m_width := ST_XMax(geom) - ST_XMin(geom);
  spacing := m_width / 12;

  letterarray := regexp_split_to_array(replace(letters, ' ', E'\t'), E'');
  FOREACH letter IN ARRAY letterarray
  LOOP
    geom := ST_GeomFromTWKB(decode(font->>(letter), 'base64'));
    -- Chars are not already zeroed out, so do it now
    geom := ST_Translate(geom, -1 * ST_XMin(geom), 0.0);
    -- unknown characters are treated as spaces
    IF geom IS NULL THEN
      -- spaces are a "quarter m" in width
      width := m_width / 3.5;
    ELSE
      width := (ST_XMax(geom) - ST_XMin(geom));
    END IF;
    geom := ST_Translate(geom, position, 0.0);
    -- Tighten up spacing when characters have a large gap
    -- between them like Yo or To
    adjustment := 0.0;
    IF prevgeom IS NOT NULL AND geom IS NOT NULL THEN
      dist = ST_Distance(prevgeom, geom);
      IF dist > spacing THEN
        adjustment = spacing - dist;
        geom := ST_Translate(geom, adjustment, 0.0);
      END IF;
    END IF;
    prevgeom := geom;
    position := position + width + spacing + adjustment;
    wordarr := array_append(wordarr, geom);
  END LOOP;
  -- apply the start point and scaling options
  wordgeom := ST_CollectionExtract(ST_Collect(wordarr));
  wordgeom := ST_Scale(wordgeom,
                text_height/font_default_height,
                text_height/font_default_height);
  return wordgeom;
END;
$function$
;

-- DROP FUNCTION public.st_linecrossingdirection(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_linecrossingdirection(line1 geometry, line2 geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$ST_LineCrossingDirection$function$
;

-- DROP FUNCTION public.st_lineextend(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_lineextend(geom geometry, distance_forward double precision, distance_backward double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geometry_line_extend$function$
;

-- DROP FUNCTION public.st_linefromencodedpolyline(text, int4);

CREATE OR REPLACE FUNCTION public.st_linefromencodedpolyline(txtin text, nprecision integer DEFAULT 5)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$line_from_encoded_polyline$function$
;

-- DROP FUNCTION public.st_linefrommultipoint(geometry);

CREATE OR REPLACE FUNCTION public.st_linefrommultipoint(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_line_from_mpoint$function$
;

-- DROP FUNCTION public.st_linefromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_linefromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'LINESTRING'
	THEN public.ST_GeomFromText($1,$2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_linefromtext(text);

CREATE OR REPLACE FUNCTION public.st_linefromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'LINESTRING'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_linefromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_linefromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'LINESTRING'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_linefromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_linefromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'LINESTRING'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_lineinterpolatepoint(text, float8);

CREATE OR REPLACE FUNCTION public.st_lineinterpolatepoint(text, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_LineInterpolatePoint($1::public.geometry, $2);  $function$
;

-- DROP FUNCTION public.st_lineinterpolatepoint(geography, float8, bool);

CREATE OR REPLACE FUNCTION public.st_lineinterpolatepoint(geography, double precision, use_spheroid boolean DEFAULT true)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_line_interpolate_point$function$
;

-- DROP FUNCTION public.st_lineinterpolatepoint(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_lineinterpolatepoint(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_line_interpolate_point$function$
;

-- DROP FUNCTION public.st_lineinterpolatepoints(geometry, float8, bool);

CREATE OR REPLACE FUNCTION public.st_lineinterpolatepoints(geometry, double precision, repeat boolean DEFAULT true)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_line_interpolate_point$function$
;

-- DROP FUNCTION public.st_lineinterpolatepoints(text, float8);

CREATE OR REPLACE FUNCTION public.st_lineinterpolatepoints(text, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_LineInterpolatePoints($1::public.geometry, $2);  $function$
;

-- DROP FUNCTION public.st_lineinterpolatepoints(geography, float8, bool, bool);

CREATE OR REPLACE FUNCTION public.st_lineinterpolatepoints(geography, double precision, use_spheroid boolean DEFAULT true, repeat boolean DEFAULT true)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_line_interpolate_point$function$
;

-- DROP FUNCTION public.st_linelocatepoint(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_linelocatepoint(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_line_locate_point$function$
;

-- DROP FUNCTION public.st_linelocatepoint(geography, geography, bool);

CREATE OR REPLACE FUNCTION public.st_linelocatepoint(geography, geography, use_spheroid boolean DEFAULT true)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_line_locate_point$function$
;

-- DROP FUNCTION public.st_linelocatepoint(text, text);

CREATE OR REPLACE FUNCTION public.st_linelocatepoint(text, text)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_LineLocatePoint($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_linemerge(geometry);

CREATE OR REPLACE FUNCTION public.st_linemerge(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$linemerge$function$
;

-- DROP FUNCTION public.st_linemerge(geometry, bool);

CREATE OR REPLACE FUNCTION public.st_linemerge(geometry, boolean)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$linemerge$function$
;

-- DROP FUNCTION public.st_linestringfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_linestringfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'LINESTRING'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_linestringfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_linestringfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'LINESTRING'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_linesubstring(text, float8, float8);

CREATE OR REPLACE FUNCTION public.st_linesubstring(text, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_LineSubstring($1::public.geometry, $2, $3);  $function$
;

-- DROP FUNCTION public.st_linesubstring(geography, float8, float8);

CREATE OR REPLACE FUNCTION public.st_linesubstring(geography, double precision, double precision)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_line_substring$function$
;

-- DROP FUNCTION public.st_linesubstring(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_linesubstring(geometry, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_line_substring$function$
;

-- DROP FUNCTION public.st_linetocurve(geometry);

CREATE OR REPLACE FUNCTION public.st_linetocurve(geometry geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_line_desegmentize$function$
;

-- DROP FUNCTION public.st_locatealong(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_locatealong(geometry geometry, measure double precision, leftrightoffset double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_LocateAlong$function$
;

-- DROP FUNCTION public.st_locatebetween(geometry, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_locatebetween(geometry geometry, frommeasure double precision, tomeasure double precision, leftrightoffset double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_LocateBetween$function$
;

-- DROP FUNCTION public.st_locatebetweenelevations(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_locatebetweenelevations(geometry geometry, fromelevation double precision, toelevation double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_LocateBetweenElevations$function$
;

-- DROP FUNCTION public.st_longestline(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_longestline(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public._ST_LongestLine(public.ST_ConvexHull($1), public.ST_ConvexHull($2))$function$
;

-- DROP FUNCTION public.st_m(geometry);

CREATE OR REPLACE FUNCTION public.st_m(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_m_point$function$
;

-- DROP FUNCTION public.st_makebox2d(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_makebox2d(geom1 geometry, geom2 geometry)
 RETURNS box2d
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX2D_construct$function$
;

-- DROP FUNCTION public.st_makeenvelope(float8, float8, float8, float8, int4);

CREATE OR REPLACE FUNCTION public.st_makeenvelope(double precision, double precision, double precision, double precision, integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_MakeEnvelope$function$
;

-- DROP FUNCTION public.st_makeline(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_makeline(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makeline$function$
;

-- DROP AGGREGATE public.st_makeline(geometry);

-- Aggregate function public.st_makeline(geometry)
-- ERROR: more than one function named "public.st_makeline";

-- DROP FUNCTION public.st_makeline(_geometry);

CREATE OR REPLACE FUNCTION public.st_makeline(geometry[])
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makeline_garray$function$
;

-- DROP FUNCTION public.st_makepoint(float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_makepoint(double precision, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoint$function$
;

-- DROP FUNCTION public.st_makepoint(float8, float8);

CREATE OR REPLACE FUNCTION public.st_makepoint(double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoint$function$
;

-- DROP FUNCTION public.st_makepoint(float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_makepoint(double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoint$function$
;

-- DROP FUNCTION public.st_makepointm(float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_makepointm(double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoint3dm$function$
;

-- DROP FUNCTION public.st_makepolygon(geometry);

CREATE OR REPLACE FUNCTION public.st_makepolygon(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoly$function$
;

-- DROP FUNCTION public.st_makepolygon(geometry, _geometry);

CREATE OR REPLACE FUNCTION public.st_makepolygon(geometry, geometry[])
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoly$function$
;

-- DROP FUNCTION public.st_makevalid(geometry);

CREATE OR REPLACE FUNCTION public.st_makevalid(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MakeValid$function$
;

-- DROP FUNCTION public.st_makevalid(geometry, text);

CREATE OR REPLACE FUNCTION public.st_makevalid(geom geometry, params text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MakeValid$function$
;

-- DROP FUNCTION public.st_maxdistance(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_maxdistance(geom1 geometry, geom2 geometry)
 RETURNS double precision
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public._ST_MaxDistance(public.ST_ConvexHull($1), public.ST_ConvexHull($2))$function$
;

-- DROP FUNCTION public.st_maximuminscribedcircle(in geometry, out geometry, out geometry, out float8);

CREATE OR REPLACE FUNCTION public.st_maximuminscribedcircle(geometry, OUT center geometry, OUT nearest geometry, OUT radius double precision)
 RETURNS record
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MaximumInscribedCircle$function$
;

-- DROP AGGREGATE public.st_memcollect(geometry);

CREATE OR REPLACE AGGREGATE public.st_memcollect(public.geometry) (
	SFUNC = public.st_collect,
	STYPE = geometry
);

-- DROP FUNCTION public.st_memsize(geometry);

CREATE OR REPLACE FUNCTION public.st_memsize(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_mem_size$function$
;

-- DROP AGGREGATE public.st_memunion(geometry);

CREATE OR REPLACE AGGREGATE public.st_memunion(public.geometry) (
	SFUNC = public.st_union,
	STYPE = geometry
);

-- DROP FUNCTION public.st_minimumboundingcircle(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_minimumboundingcircle(inputgeom geometry, segs_per_quarter integer DEFAULT 48)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MinimumBoundingCircle$function$
;

-- DROP FUNCTION public.st_minimumboundingradius(in geometry, out geometry, out float8);

CREATE OR REPLACE FUNCTION public.st_minimumboundingradius(geometry, OUT center geometry, OUT radius double precision)
 RETURNS record
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MinimumBoundingRadius$function$
;

-- DROP FUNCTION public.st_minimumclearance(geometry);

CREATE OR REPLACE FUNCTION public.st_minimumclearance(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MinimumClearance$function$
;

-- DROP FUNCTION public.st_minimumclearanceline(geometry);

CREATE OR REPLACE FUNCTION public.st_minimumclearanceline(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_MinimumClearanceLine$function$
;

-- DROP FUNCTION public.st_mlinefromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_mlinefromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE
	WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'MULTILINESTRING'
	THEN public.ST_GeomFromText($1,$2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mlinefromtext(text);

CREATE OR REPLACE FUNCTION public.st_mlinefromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'MULTILINESTRING'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mlinefromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_mlinefromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'MULTILINESTRING'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mlinefromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_mlinefromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'MULTILINESTRING'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpointfromtext(text);

CREATE OR REPLACE FUNCTION public.st_mpointfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'MULTIPOINT'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpointfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_mpointfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'MULTIPOINT'
	THEN ST_GeomFromText($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpointfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_mpointfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'MULTIPOINT'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpointfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_mpointfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'MULTIPOINT'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpolyfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_mpolyfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'MULTIPOLYGON'
	THEN public.ST_GeomFromText($1,$2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpolyfromtext(text);

CREATE OR REPLACE FUNCTION public.st_mpolyfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'MULTIPOLYGON'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpolyfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_mpolyfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'MULTIPOLYGON'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_mpolyfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_mpolyfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'MULTIPOLYGON'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_multi(geometry);

CREATE OR REPLACE FUNCTION public.st_multi(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_force_multi$function$
;

-- DROP FUNCTION public.st_multilinefromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_multilinefromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'MULTILINESTRING'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_multilinestringfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_multilinestringfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_MLineFromText($1, $2)$function$
;

-- DROP FUNCTION public.st_multilinestringfromtext(text);

CREATE OR REPLACE FUNCTION public.st_multilinestringfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_MLineFromText($1)$function$
;

-- DROP FUNCTION public.st_multipointfromtext(text);

CREATE OR REPLACE FUNCTION public.st_multipointfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_MPointFromText($1)$function$
;

-- DROP FUNCTION public.st_multipointfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_multipointfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1,$2)) = 'MULTIPOINT'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_multipointfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_multipointfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'MULTIPOINT'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_multipolyfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_multipolyfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'MULTIPOLYGON'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_multipolyfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_multipolyfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'MULTIPOLYGON'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_multipolygonfromtext(text);

CREATE OR REPLACE FUNCTION public.st_multipolygonfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_MPolyFromText($1)$function$
;

-- DROP FUNCTION public.st_multipolygonfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_multipolygonfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_MPolyFromText($1, $2)$function$
;

-- DROP FUNCTION public.st_ndims(geometry);

CREATE OR REPLACE FUNCTION public.st_ndims(geometry)
 RETURNS smallint
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_ndims$function$
;

-- DROP FUNCTION public.st_node(geometry);

CREATE OR REPLACE FUNCTION public.st_node(g geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Node$function$
;

-- DROP FUNCTION public.st_normalize(geometry);

CREATE OR REPLACE FUNCTION public.st_normalize(geom geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_Normalize$function$
;

-- DROP FUNCTION public.st_npoints(geometry);

CREATE OR REPLACE FUNCTION public.st_npoints(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_npoints$function$
;

-- DROP FUNCTION public.st_nrings(geometry);

CREATE OR REPLACE FUNCTION public.st_nrings(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_nrings$function$
;

-- DROP FUNCTION public.st_numgeometries(geometry);

CREATE OR REPLACE FUNCTION public.st_numgeometries(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_numgeometries_collection$function$
;

-- DROP FUNCTION public.st_numinteriorring(geometry);

CREATE OR REPLACE FUNCTION public.st_numinteriorring(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_numinteriorrings_polygon$function$
;

-- DROP FUNCTION public.st_numinteriorrings(geometry);

CREATE OR REPLACE FUNCTION public.st_numinteriorrings(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_numinteriorrings_polygon$function$
;

-- DROP FUNCTION public.st_numpatches(geometry);

CREATE OR REPLACE FUNCTION public.st_numpatches(geometry)
 RETURNS integer
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.ST_GeometryType($1) = 'ST_PolyhedralSurface'
	THEN public.ST_NumGeometries($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_numpoints(geometry);

CREATE OR REPLACE FUNCTION public.st_numpoints(geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_numpoints_linestring$function$
;

-- DROP FUNCTION public.st_offsetcurve(geometry, float8, text);

CREATE OR REPLACE FUNCTION public.st_offsetcurve(line geometry, distance double precision, params text DEFAULT ''::text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_OffsetCurve$function$
;

-- DROP FUNCTION public.st_orderingequals(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_orderingequals(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$LWGEOM_same$function$
;

-- DROP FUNCTION public.st_orientedenvelope(geometry);

CREATE OR REPLACE FUNCTION public.st_orientedenvelope(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_OrientedEnvelope$function$
;

-- DROP FUNCTION public.st_overlaps(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_overlaps(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$overlaps$function$
;

-- DROP FUNCTION public.st_patchn(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_patchn(geometry, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.ST_GeometryType($1) = 'ST_PolyhedralSurface'
	THEN public.ST_GeometryN($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_perimeter(geography, bool);

CREATE OR REPLACE FUNCTION public.st_perimeter(geog geography, use_spheroid boolean DEFAULT true)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_perimeter$function$
;

-- DROP FUNCTION public.st_perimeter(geometry);

CREATE OR REPLACE FUNCTION public.st_perimeter(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_perimeter2d_poly$function$
;

-- DROP FUNCTION public.st_perimeter2d(geometry);

CREATE OR REPLACE FUNCTION public.st_perimeter2d(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_perimeter2d_poly$function$
;

-- DROP FUNCTION public.st_point(float8, float8);

CREATE OR REPLACE FUNCTION public.st_point(double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_makepoint$function$
;

-- DROP FUNCTION public.st_point(float8, float8, int4);

CREATE OR REPLACE FUNCTION public.st_point(double precision, double precision, srid integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Point$function$
;

-- DROP FUNCTION public.st_pointfromgeohash(text, int4);

CREATE OR REPLACE FUNCTION public.st_pointfromgeohash(text, integer DEFAULT NULL::integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 50
AS '$libdir/postgis-3', $function$point_from_geohash$function$
;

-- DROP FUNCTION public.st_pointfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_pointfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'POINT'
	THEN public.ST_GeomFromText($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_pointfromtext(text);

CREATE OR REPLACE FUNCTION public.st_pointfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'POINT'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_pointfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_pointfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'POINT'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_pointfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_pointfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'POINT'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_pointinsidecircle(geometry, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_pointinsidecircle(geometry, double precision, double precision, double precision)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_inside_circle_point$function$
;

-- DROP FUNCTION public.st_pointm(float8, float8, float8, int4);

CREATE OR REPLACE FUNCTION public.st_pointm(xcoordinate double precision, ycoordinate double precision, mcoordinate double precision, srid integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_PointM$function$
;

-- DROP FUNCTION public.st_pointn(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_pointn(geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_pointn_linestring$function$
;

-- DROP FUNCTION public.st_pointonsurface(geometry);

CREATE OR REPLACE FUNCTION public.st_pointonsurface(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$pointonsurface$function$
;

-- DROP FUNCTION public.st_points(geometry);

CREATE OR REPLACE FUNCTION public.st_points(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_Points$function$
;

-- DROP FUNCTION public.st_pointz(float8, float8, float8, int4);

CREATE OR REPLACE FUNCTION public.st_pointz(xcoordinate double precision, ycoordinate double precision, zcoordinate double precision, srid integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_PointZ$function$
;

-- DROP FUNCTION public.st_pointzm(float8, float8, float8, float8, int4);

CREATE OR REPLACE FUNCTION public.st_pointzm(xcoordinate double precision, ycoordinate double precision, zcoordinate double precision, mcoordinate double precision, srid integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_PointZM$function$
;

-- DROP FUNCTION public.st_polyfromtext(text);

CREATE OR REPLACE FUNCTION public.st_polyfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1)) = 'POLYGON'
	THEN public.ST_GeomFromText($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_polyfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_polyfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromText($1, $2)) = 'POLYGON'
	THEN public.ST_GeomFromText($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_polyfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_polyfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1, $2)) = 'POLYGON'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_polyfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_polyfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'POLYGON'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_polygon(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_polygon(geometry, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT public.ST_SetSRID(public.ST_MakePolygon($1), $2)
	$function$
;

-- DROP FUNCTION public.st_polygonfromtext(text, int4);

CREATE OR REPLACE FUNCTION public.st_polygonfromtext(text, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_PolyFromText($1, $2)$function$
;

-- DROP FUNCTION public.st_polygonfromtext(text);

CREATE OR REPLACE FUNCTION public.st_polygonfromtext(text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS $function$SELECT public.ST_PolyFromText($1)$function$
;

-- DROP FUNCTION public.st_polygonfromwkb(bytea);

CREATE OR REPLACE FUNCTION public.st_polygonfromwkb(bytea)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1)) = 'POLYGON'
	THEN public.ST_GeomFromWKB($1)
	ELSE NULL END
	$function$
;

-- DROP FUNCTION public.st_polygonfromwkb(bytea, int4);

CREATE OR REPLACE FUNCTION public.st_polygonfromwkb(bytea, integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$
	SELECT CASE WHEN public.geometrytype(public.ST_GeomFromWKB($1,$2)) = 'POLYGON'
	THEN public.ST_GeomFromWKB($1, $2)
	ELSE NULL END
	$function$
;

-- DROP AGGREGATE public.st_polygonize(geometry);

-- Aggregate function public.st_polygonize(geometry)
-- ERROR: more than one function named "public.st_polygonize";

-- DROP FUNCTION public.st_polygonize(_geometry);

CREATE OR REPLACE FUNCTION public.st_polygonize(geometry[])
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$polygonize_garray$function$
;

-- DROP FUNCTION public.st_project(geography, geography, float8);

CREATE OR REPLACE FUNCTION public.st_project(geog_from geography, geog_to geography, distance double precision)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_project_geography$function$
;

-- DROP FUNCTION public.st_project(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_project(geom1 geometry, geom2 geometry, distance double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geometry_project_geometry$function$
;

-- DROP FUNCTION public.st_project(geography, float8, float8);

CREATE OR REPLACE FUNCTION public.st_project(geog geography, distance double precision, azimuth double precision)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$geography_project$function$
;

-- DROP FUNCTION public.st_project(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_project(geom1 geometry, distance double precision, azimuth double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$geometry_project_direction$function$
;

-- DROP FUNCTION public.st_quantizecoordinates(geometry, int4, int4, int4, int4);

CREATE OR REPLACE FUNCTION public.st_quantizecoordinates(g geometry, prec_x integer, prec_y integer DEFAULT NULL::integer, prec_z integer DEFAULT NULL::integer, prec_m integer DEFAULT NULL::integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE COST 250
AS '$libdir/postgis-3', $function$ST_QuantizeCoordinates$function$
;

-- DROP FUNCTION public.st_reduceprecision(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_reduceprecision(geom geometry, gridsize double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_ReducePrecision$function$
;

-- DROP FUNCTION public.st_relate(geometry, geometry, text);

CREATE OR REPLACE FUNCTION public.st_relate(geom1 geometry, geom2 geometry, text)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$relate_pattern$function$
;

-- DROP FUNCTION public.st_relate(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_relate(geom1 geometry, geom2 geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$relate_full$function$
;

-- DROP FUNCTION public.st_relate(geometry, geometry, int4);

CREATE OR REPLACE FUNCTION public.st_relate(geom1 geometry, geom2 geometry, integer)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$relate_full$function$
;

-- DROP FUNCTION public.st_relatematch(text, text);

CREATE OR REPLACE FUNCTION public.st_relatematch(text, text)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_RelateMatch$function$
;

-- DROP FUNCTION public.st_removepoint(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_removepoint(geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_removepoint$function$
;

-- DROP FUNCTION public.st_removerepeatedpoints(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_removerepeatedpoints(geom geometry, tolerance double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_RemoveRepeatedPoints$function$
;

-- DROP FUNCTION public.st_reverse(geometry);

CREATE OR REPLACE FUNCTION public.st_reverse(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_reverse$function$
;

-- DROP FUNCTION public.st_rotate(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_rotate(geometry, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1,  cos($2), -sin($2), 0,  sin($2), cos($2), 0,  0, 0, 1,  0, 0, 0)$function$
;

-- DROP FUNCTION public.st_rotate(geometry, float8, geometry);

CREATE OR REPLACE FUNCTION public.st_rotate(geometry, double precision, geometry)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1,  cos($2), -sin($2), 0,  sin($2),  cos($2), 0, 0, 0, 1, public.ST_X($3) - cos($2) * public.ST_X($3) + sin($2) * public.ST_Y($3), public.ST_Y($3) - sin($2) * public.ST_X($3) - cos($2) * public.ST_Y($3), 0)$function$
;

-- DROP FUNCTION public.st_rotate(geometry, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_rotate(geometry, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1,  cos($2), -sin($2), 0,  sin($2),  cos($2), 0, 0, 0, 1,	$3 - cos($2) * $3 + sin($2) * $4, $4 - sin($2) * $3 - cos($2) * $4, 0)$function$
;

-- DROP FUNCTION public.st_rotatex(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_rotatex(geometry, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1, 1, 0, 0, 0, cos($2), -sin($2), 0, sin($2), cos($2), 0, 0, 0)$function$
;

-- DROP FUNCTION public.st_rotatey(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_rotatey(geometry, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1,  cos($2), 0, sin($2),  0, 1, 0,  -sin($2), 0, cos($2), 0,  0, 0)$function$
;

-- DROP FUNCTION public.st_rotatez(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_rotatez(geometry, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Rotate($1, $2)$function$
;

-- DROP FUNCTION public.st_scale(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_scale(geometry, geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Scale$function$
;

-- DROP FUNCTION public.st_scale(geometry, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_scale(geometry, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Scale($1, public.ST_MakePoint($2, $3, $4))$function$
;

-- DROP FUNCTION public.st_scale(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_scale(geometry, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Scale($1, $2, $3, 1)$function$
;

-- DROP FUNCTION public.st_scale(geometry, geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_scale(geometry, geometry, origin geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Scale$function$
;

-- DROP FUNCTION public.st_scroll(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_scroll(geometry, geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Scroll$function$
;

-- DROP FUNCTION public.st_segmentize(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_segmentize(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_segmentize2d$function$
;

-- DROP FUNCTION public.st_segmentize(geography, float8);

CREATE OR REPLACE FUNCTION public.st_segmentize(geog geography, max_segment_length double precision)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$geography_segmentize$function$
;

-- DROP FUNCTION public.st_seteffectivearea(geometry, float8, int4);

CREATE OR REPLACE FUNCTION public.st_seteffectivearea(geometry, double precision DEFAULT '-1'::integer, integer DEFAULT 1)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_SetEffectiveArea$function$
;

-- DROP FUNCTION public.st_setpoint(geometry, int4, geometry);

CREATE OR REPLACE FUNCTION public.st_setpoint(geometry, integer, geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_setpoint_linestring$function$
;

-- DROP FUNCTION public.st_setsrid(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_setsrid(geom geometry, srid integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_set_srid$function$
;

-- DROP FUNCTION public.st_setsrid(geography, int4);

CREATE OR REPLACE FUNCTION public.st_setsrid(geog geography, srid integer)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_set_srid$function$
;

-- DROP FUNCTION public.st_sharedpaths(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_sharedpaths(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_SharedPaths$function$
;

-- DROP FUNCTION public.st_shiftlongitude(geometry);

CREATE OR REPLACE FUNCTION public.st_shiftlongitude(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_longitude_shift$function$
;

-- DROP FUNCTION public.st_shortestline(text, text);

CREATE OR REPLACE FUNCTION public.st_shortestline(text, text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public.ST_ShortestLine($1::public.geometry, $2::public.geometry);  $function$
;

-- DROP FUNCTION public.st_shortestline(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_shortestline(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_shortestline2d$function$
;

-- DROP FUNCTION public.st_shortestline(geography, geography, bool);

CREATE OR REPLACE FUNCTION public.st_shortestline(geography, geography, use_spheroid boolean DEFAULT true)
 RETURNS geography
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$geography_shortestline$function$
;

-- DROP FUNCTION public.st_simplify(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_simplify(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_simplify2d$function$
;

-- DROP FUNCTION public.st_simplify(geometry, float8, bool);

CREATE OR REPLACE FUNCTION public.st_simplify(geometry, double precision, boolean)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_simplify2d$function$
;

-- DROP FUNCTION public.st_simplifypolygonhull(geometry, float8, bool);

CREATE OR REPLACE FUNCTION public.st_simplifypolygonhull(geom geometry, vertex_fraction double precision, is_outer boolean DEFAULT true)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_SimplifyPolygonHull$function$
;

-- DROP FUNCTION public.st_simplifypreservetopology(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_simplifypreservetopology(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$topologypreservesimplify$function$
;

-- DROP FUNCTION public.st_simplifyvw(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_simplifyvw(geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$LWGEOM_SetEffectiveArea$function$
;

-- DROP FUNCTION public.st_snap(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_snap(geom1 geometry, geom2 geometry, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Snap$function$
;

-- DROP FUNCTION public.st_snaptogrid(geometry, geometry, float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_snaptogrid(geom1 geometry, geom2 geometry, double precision, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_snaptogrid_pointoff$function$
;

-- DROP FUNCTION public.st_snaptogrid(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_snaptogrid(geometry, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_SnapToGrid($1, 0, 0, $2, $2)$function$
;

-- DROP FUNCTION public.st_snaptogrid(geometry, float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_snaptogrid(geometry, double precision, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_snaptogrid$function$
;

-- DROP FUNCTION public.st_snaptogrid(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_snaptogrid(geometry, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_SnapToGrid($1, 0, 0, $2, $3)$function$
;

-- DROP FUNCTION public.st_split(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_split(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Split$function$
;

-- DROP FUNCTION public.st_square(float8, int4, int4, geometry);

CREATE OR REPLACE FUNCTION public.st_square(size double precision, cell_i integer, cell_j integer, origin geometry DEFAULT '010100000000000000000000000000000000000000'::geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_Square$function$
;

-- DROP FUNCTION public.st_squaregrid(in float8, in geometry, out geometry, out int4, out int4);

CREATE OR REPLACE FUNCTION public.st_squaregrid(size double precision, bounds geometry, OUT geom geometry, OUT i integer, OUT j integer)
 RETURNS SETOF record
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$ST_ShapeGrid$function$
;

-- DROP FUNCTION public.st_srid(geography);

CREATE OR REPLACE FUNCTION public.st_srid(geog geography)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_get_srid$function$
;

-- DROP FUNCTION public.st_srid(geometry);

CREATE OR REPLACE FUNCTION public.st_srid(geom geometry)
 RETURNS integer
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_get_srid$function$
;

-- DROP FUNCTION public.st_startpoint(geometry);

CREATE OR REPLACE FUNCTION public.st_startpoint(geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_startpoint_linestring$function$
;

-- DROP FUNCTION public.st_subdivide(geometry, int4, float8);

CREATE OR REPLACE FUNCTION public.st_subdivide(geom geometry, maxvertices integer DEFAULT 256, gridsize double precision DEFAULT '-1.0'::numeric)
 RETURNS SETOF geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Subdivide$function$
;

-- DROP FUNCTION public.st_summary(geometry);

CREATE OR REPLACE FUNCTION public.st_summary(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_summary$function$
;

-- DROP FUNCTION public.st_summary(geography);

CREATE OR REPLACE FUNCTION public.st_summary(geography)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_summary$function$
;

-- DROP FUNCTION public.st_swapordinates(geometry, cstring);

CREATE OR REPLACE FUNCTION public.st_swapordinates(geom geometry, ords cstring)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_SwapOrdinates$function$
;

-- DROP FUNCTION public.st_symdifference(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_symdifference(geom1 geometry, geom2 geometry, gridsize double precision DEFAULT '-1.0'::numeric)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_SymDifference$function$
;

-- DROP FUNCTION public.st_symmetricdifference(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_symmetricdifference(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE sql
AS $function$SELECT ST_SymDifference(geom1, geom2, -1.0);$function$
;

-- DROP FUNCTION public.st_tileenvelope(int4, int4, int4, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_tileenvelope(zoom integer, x integer, y integer, bounds geometry DEFAULT '0102000020110F00000200000093107C45F81B73C193107C45F81B73C193107C45F81B734193107C45F81B7341'::geometry, margin double precision DEFAULT 0.0)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_TileEnvelope$function$
;

-- DROP FUNCTION public.st_touches(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_touches(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$touches$function$
;

-- DROP FUNCTION public.st_transform(geometry, text, int4);

CREATE OR REPLACE FUNCTION public.st_transform(geom geometry, from_proj text, to_srid integer)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public.postgis_transform_geometry($1, $2, proj4text, $3)
	FROM spatial_ref_sys WHERE srid=$3;$function$
;

-- DROP FUNCTION public.st_transform(geometry, int4);

CREATE OR REPLACE FUNCTION public.st_transform(geometry, integer)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$transform$function$
;

-- DROP FUNCTION public.st_transform(geometry, text);

CREATE OR REPLACE FUNCTION public.st_transform(geom geometry, to_proj text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public.postgis_transform_geometry($1, proj4text, $2, 0)
	FROM spatial_ref_sys WHERE srid=public.ST_SRID($1);$function$
;

-- DROP FUNCTION public.st_transform(geometry, text, text);

CREATE OR REPLACE FUNCTION public.st_transform(geom geometry, from_proj text, to_proj text)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public.postgis_transform_geometry($1, $2, $3, 0)$function$
;

-- DROP FUNCTION public.st_transformpipeline(geometry, text, int4);

CREATE OR REPLACE FUNCTION public.st_transformpipeline(geom geometry, pipeline text, to_srid integer DEFAULT 0)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS $function$SELECT public.postgis_transform_pipeline_geometry($1, $2, TRUE, $3)$function$
;

-- DROP FUNCTION public.st_translate(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_translate(geometry, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Translate($1, $2, $3, 0)$function$
;

-- DROP FUNCTION public.st_translate(geometry, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_translate(geometry, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1, 1, 0, 0, 0, 1, 0, 0, 0, 1, $2, $3, $4)$function$
;

-- DROP FUNCTION public.st_transscale(geometry, float8, float8, float8, float8);

CREATE OR REPLACE FUNCTION public.st_transscale(geometry, double precision, double precision, double precision, double precision)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS $function$SELECT public.ST_Affine($1,  $4, 0, 0,  0, $5, 0,
		0, 0, 1,  $2 * $4, $3 * $5, 0)$function$
;

-- DROP FUNCTION public.st_triangulatepolygon(geometry);

CREATE OR REPLACE FUNCTION public.st_triangulatepolygon(g1 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_TriangulatePolygon$function$
;

-- DROP FUNCTION public.st_unaryunion(geometry, float8);

CREATE OR REPLACE FUNCTION public.st_unaryunion(geometry, gridsize double precision DEFAULT '-1.0'::numeric)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_UnaryUnion$function$
;

-- DROP FUNCTION public.st_union(geometry, geometry, float8);

CREATE OR REPLACE FUNCTION public.st_union(geom1 geometry, geom2 geometry, gridsize double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Union$function$
;

-- DROP AGGREGATE public.st_union(geometry, float8);

-- Aggregate function public.st_union(geometry, float8)
-- ERROR: more than one function named "public.st_union";

-- DROP FUNCTION public.st_union(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_union(geom1 geometry, geom2 geometry)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$ST_Union$function$
;

-- DROP FUNCTION public.st_union(_geometry);

CREATE OR REPLACE FUNCTION public.st_union(geometry[])
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000
AS '$libdir/postgis-3', $function$pgis_union_geometry_array$function$
;

-- DROP AGGREGATE public.st_union(geometry);

-- Aggregate function public.st_union(geometry)
-- ERROR: more than one function named "public.st_union";

-- DROP FUNCTION public.st_voronoilines(geometry, float8, geometry);

CREATE OR REPLACE FUNCTION public.st_voronoilines(g1 geometry, tolerance double precision DEFAULT 0.0, extend_to geometry DEFAULT NULL::geometry)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public._ST_Voronoi(g1, extend_to, tolerance, false) $function$
;

-- DROP FUNCTION public.st_voronoipolygons(geometry, float8, geometry);

CREATE OR REPLACE FUNCTION public.st_voronoipolygons(g1 geometry, tolerance double precision DEFAULT 0.0, extend_to geometry DEFAULT NULL::geometry)
 RETURNS geometry
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$ SELECT public._ST_Voronoi(g1, extend_to, tolerance, true) $function$
;

-- DROP FUNCTION public.st_within(geometry, geometry);

CREATE OR REPLACE FUNCTION public.st_within(geom1 geometry, geom2 geometry)
 RETURNS boolean
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 5000 SUPPORT postgis_index_supportfn
AS '$libdir/postgis-3', $function$within$function$
;

-- DROP FUNCTION public.st_wkbtosql(bytea);

CREATE OR REPLACE FUNCTION public.st_wkbtosql(wkb bytea)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_from_WKB$function$
;

-- DROP FUNCTION public.st_wkttosql(text);

CREATE OR REPLACE FUNCTION public.st_wkttosql(text)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 250
AS '$libdir/postgis-3', $function$LWGEOM_from_text$function$
;

-- DROP FUNCTION public.st_wrapx(geometry, float8, float8);

CREATE OR REPLACE FUNCTION public.st_wrapx(geom geometry, wrap double precision, move double precision)
 RETURNS geometry
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$ST_WrapX$function$
;

-- DROP FUNCTION public.st_x(geometry);

CREATE OR REPLACE FUNCTION public.st_x(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_x_point$function$
;

-- DROP FUNCTION public.st_xmax(box3d);

CREATE OR REPLACE FUNCTION public.st_xmax(box3d)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_xmax$function$
;

-- DROP FUNCTION public.st_xmin(box3d);

CREATE OR REPLACE FUNCTION public.st_xmin(box3d)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_xmin$function$
;

-- DROP FUNCTION public.st_y(geometry);

CREATE OR REPLACE FUNCTION public.st_y(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_y_point$function$
;

-- DROP FUNCTION public.st_ymax(box3d);

CREATE OR REPLACE FUNCTION public.st_ymax(box3d)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_ymax$function$
;

-- DROP FUNCTION public.st_ymin(box3d);

CREATE OR REPLACE FUNCTION public.st_ymin(box3d)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_ymin$function$
;

-- DROP FUNCTION public.st_z(geometry);

CREATE OR REPLACE FUNCTION public.st_z(geometry)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_z_point$function$
;

-- DROP FUNCTION public.st_zmax(box3d);

CREATE OR REPLACE FUNCTION public.st_zmax(box3d)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_zmax$function$
;

-- DROP FUNCTION public.st_zmflag(geometry);

CREATE OR REPLACE FUNCTION public.st_zmflag(geometry)
 RETURNS smallint
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$LWGEOM_zmflag$function$
;

-- DROP FUNCTION public.st_zmin(box3d);

CREATE OR REPLACE FUNCTION public.st_zmin(box3d)
 RETURNS double precision
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/postgis-3', $function$BOX3D_zmin$function$
;

-- DROP FUNCTION public.strict_word_similarity(text, text);

CREATE OR REPLACE FUNCTION public.strict_word_similarity(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$strict_word_similarity$function$
;

-- DROP FUNCTION public.strict_word_similarity_commutator_op(text, text);

CREATE OR REPLACE FUNCTION public.strict_word_similarity_commutator_op(text, text)
 RETURNS boolean
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$strict_word_similarity_commutator_op$function$
;

-- DROP FUNCTION public.strict_word_similarity_dist_commutator_op(text, text);

CREATE OR REPLACE FUNCTION public.strict_word_similarity_dist_commutator_op(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$strict_word_similarity_dist_commutator_op$function$
;

-- DROP FUNCTION public.strict_word_similarity_dist_op(text, text);

CREATE OR REPLACE FUNCTION public.strict_word_similarity_dist_op(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$strict_word_similarity_dist_op$function$
;

-- DROP FUNCTION public.strict_word_similarity_op(text, text);

CREATE OR REPLACE FUNCTION public.strict_word_similarity_op(text, text)
 RETURNS boolean
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$strict_word_similarity_op$function$
;

-- DROP FUNCTION public."text"(geometry);

CREATE OR REPLACE FUNCTION public.text(geometry)
 RETURNS text
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT COST 50
AS '$libdir/postgis-3', $function$LWGEOM_to_text$function$
;

-- DROP FUNCTION public.unlockrows(text);

CREATE OR REPLACE FUNCTION public.unlockrows(text)
 RETURNS integer
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	ret int;
BEGIN

	IF NOT LongTransactionsEnabled() THEN
		RAISE EXCEPTION 'Long transaction support disabled, use EnableLongTransaction() to enable.';
	END IF;

	EXECUTE 'DELETE FROM authorization_table where authid = ' ||
		quote_literal($1);

	GET DIAGNOSTICS ret = ROW_COUNT;

	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.update_activities_farm_ids();

CREATE OR REPLACE FUNCTION public.update_activities_farm_ids()
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
DECLARE updated_count integer;
BEGIN
	-- Routine body goes here...
 UPDATE public.activity_details ad 
	 SET farm_id = sf.farm_id::uuid 
	 FROM public.synced_farms sf 
	 WHERE ad.sync_id = sf.sync_id 
		AND ad.farm_id IS NULL;
		
	 GET DIAGNOSTICS updated_count = ROW_COUNT; 
	 RETURN updated_count; 
END; 
$function$
;

-- DROP FUNCTION public.update_balance_area();

CREATE OR REPLACE FUNCTION public.update_balance_area()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Update the `balance_area` column with the calculated area
    NEW.balance_area = trunc(
        (ST_Area(
            ST_GeomFromGeoJSON(
                NEW.balance_sc::json->'features'->0->'geometry'
            )::geography
        ) * 0.000247105)::numeric, 2
    );

    RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.update_bkk_survey_app_data_circle_name();

CREATE OR REPLACE FUNCTION public.update_bkk_survey_app_data_circle_name()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Case 1: Validated or Undocumented
    IF NEW.status IN ('Validated', 'Undocumented')
       AND NEW.partner_id = 'ce2b817d-4c0e-e8db-a147-b08d1602364c' THEN
       
        SELECT g.circle
        INTO NEW.circle_name
        FROM jk_growers_data g
        WHERE g.passbook_no = NEW.passbook_id
          AND g.unit = 1
        LIMIT 1;

    -- Case 2: Discrepent or other
    ELSIF NEW.status IN ('Discrepent', 'other')
       AND NEW.partner_id = 'ce2b817d-4c0e-e8db-a147-b08d1602364c' THEN
       
        SELECT c.circle_name
        INTO NEW.circle_name
        FROM jk_circle_boundries_2025 c
        WHERE ST_Within(NEW.shape, c.geom)
        LIMIT 1;
    END IF;

    -- If no match found in either case, circle_name just stays NULL
    RETURN NEW;
END;
$function$
;

-- DROP FUNCTION public.update_farm_ndvi_ndmi();

CREATE OR REPLACE FUNCTION public.update_farm_ndvi_ndmi()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
update farm_ndvi
set val = 1
from (select distinct on (date, farm_crop_id) *
from farm_ndvi
order by farm_crop_id) as sq
where farm_ndvi.farm_crop_id = sq.farm_crop_id and farm_ndvi.date = sq.date
and farm_ndvi.image_id = sq.image_id;

delete from farm_ndvi
where (ndvi_avg = 0 and ndvi_max = 0);

delete from farm_ndmi
where (ndmi_avg = 1 and ndmi_max = 1);

delete from farm_ndvi
where (ndvi_avg is null);

delete from farm_ndmi
where (ndmi_avg = 0 and ndmi_max = 0);

delete from farm_ndmi
where (ndmi_avg is null);

update farm_ndmi
set val = 1
from (select distinct on (date, farm_crop_id) *
from farm_ndmi
order by farm_crop_id) as sq
where farm_ndmi.farm_crop_id = sq.farm_crop_id and farm_ndmi.date = sq.date
and farm_ndmi.image_id = sq.image_id;


RETURN;
END;
$function$
;

-- DROP FUNCTION public.updategeometrysrid(varchar, varchar, varchar, varchar, int4);

CREATE OR REPLACE FUNCTION public.updategeometrysrid(catalogn_name character varying, schema_name character varying, table_name character varying, column_name character varying, new_srid_in integer)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	myrec RECORD;
	okay boolean;
	cname varchar;
	real_schema name;
	unknown_srid integer;
	new_srid integer := new_srid_in;

BEGIN

	-- Find, check or fix schema_name
	IF ( schema_name != '' ) THEN
		okay = false;

		FOR myrec IN SELECT nspname FROM pg_namespace WHERE text(nspname) = schema_name LOOP
			okay := true;
		END LOOP;

		IF ( okay <> true ) THEN
			RAISE EXCEPTION 'Invalid schema name';
		ELSE
			real_schema = schema_name;
		END IF;
	ELSE
		SELECT INTO real_schema current_schema()::text;
	END IF;

	-- Ensure that column_name is in geometry_columns
	okay = false;
	FOR myrec IN SELECT type, coord_dimension FROM public.geometry_columns WHERE f_table_schema = text(real_schema) and f_table_name = table_name and f_geometry_column = column_name LOOP
		okay := true;
	END LOOP;
	IF (NOT okay) THEN
		RAISE EXCEPTION 'column not found in geometry_columns table';
		RETURN false;
	END IF;

	-- Ensure that new_srid is valid
	IF ( new_srid > 0 ) THEN
		IF ( SELECT count(*) = 0 from spatial_ref_sys where srid = new_srid ) THEN
			RAISE EXCEPTION 'invalid SRID: % not found in spatial_ref_sys', new_srid;
			RETURN false;
		END IF;
	ELSE
		unknown_srid := public.ST_SRID('POINT EMPTY'::public.geometry);
		IF ( new_srid != unknown_srid ) THEN
			new_srid := unknown_srid;
			RAISE NOTICE 'SRID value % converted to the officially unknown SRID value %', new_srid_in, new_srid;
		END IF;
	END IF;

	IF postgis_constraint_srid(real_schema, table_name, column_name) IS NOT NULL THEN
	-- srid was enforced with constraints before, keep it that way.
		-- Make up constraint name
		cname = 'enforce_srid_'  || column_name;

		-- Drop enforce_srid constraint
		EXECUTE 'ALTER TABLE ' || quote_ident(real_schema) ||
			'.' || quote_ident(table_name) ||
			' DROP constraint ' || quote_ident(cname);

		-- Update geometries SRID
		EXECUTE 'UPDATE ' || quote_ident(real_schema) ||
			'.' || quote_ident(table_name) ||
			' SET ' || quote_ident(column_name) ||
			' = public.ST_SetSRID(' || quote_ident(column_name) ||
			', ' || new_srid::text || ')';

		-- Reset enforce_srid constraint
		EXECUTE 'ALTER TABLE ' || quote_ident(real_schema) ||
			'.' || quote_ident(table_name) ||
			' ADD constraint ' || quote_ident(cname) ||
			' CHECK (st_srid(' || quote_ident(column_name) ||
			') = ' || new_srid::text || ')';
	ELSE
		-- We will use typmod to enforce if no srid constraints
		-- We are using postgis_type_name to lookup the new name
		-- (in case Paul changes his mind and flips geometry_columns to return old upper case name)
		EXECUTE 'ALTER TABLE ' || quote_ident(real_schema) || '.' || quote_ident(table_name) ||
		' ALTER COLUMN ' || quote_ident(column_name) || ' TYPE  geometry(' || public.postgis_type_name(myrec.type, myrec.coord_dimension, true) || ', ' || new_srid::text || ') USING public.ST_SetSRID(' || quote_ident(column_name) || ',' || new_srid::text || ');' ;
	END IF;

	RETURN real_schema || '.' || table_name || '.' || column_name ||' SRID changed to ' || new_srid::text;

END;
$function$
;

-- DROP FUNCTION public.updategeometrysrid(varchar, varchar, int4);

CREATE OR REPLACE FUNCTION public.updategeometrysrid(character varying, character varying, integer)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	ret  text;
BEGIN
	SELECT public.UpdateGeometrySRID('','',$1,$2,$3) into ret;
	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.updategeometrysrid(varchar, varchar, varchar, int4);

CREATE OR REPLACE FUNCTION public.updategeometrysrid(character varying, character varying, character varying, integer)
 RETURNS text
 LANGUAGE plpgsql
 STRICT
AS $function$
DECLARE
	ret  text;
BEGIN
	SELECT public.UpdateGeometrySRID('',$1,$2,$3,$4) into ret;
	RETURN ret;
END;
$function$
;

-- DROP FUNCTION public.uuid_generate_v1();

CREATE OR REPLACE FUNCTION public.uuid_generate_v1()
 RETURNS uuid
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_generate_v1$function$
;

-- DROP FUNCTION public.uuid_generate_v1mc();

CREATE OR REPLACE FUNCTION public.uuid_generate_v1mc()
 RETURNS uuid
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_generate_v1mc$function$
;

-- DROP FUNCTION public.uuid_generate_v3(uuid, text);

CREATE OR REPLACE FUNCTION public.uuid_generate_v3(namespace uuid, name text)
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_generate_v3$function$
;

-- DROP FUNCTION public.uuid_generate_v4();

CREATE OR REPLACE FUNCTION public.uuid_generate_v4()
 RETURNS uuid
 LANGUAGE c
 PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_generate_v4$function$
;

-- DROP FUNCTION public.uuid_generate_v5(uuid, text);

CREATE OR REPLACE FUNCTION public.uuid_generate_v5(namespace uuid, name text)
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_generate_v5$function$
;

-- DROP FUNCTION public.uuid_nil();

CREATE OR REPLACE FUNCTION public.uuid_nil()
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_nil$function$
;

-- DROP FUNCTION public.uuid_ns_dns();

CREATE OR REPLACE FUNCTION public.uuid_ns_dns()
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_ns_dns$function$
;

-- DROP FUNCTION public.uuid_ns_oid();

CREATE OR REPLACE FUNCTION public.uuid_ns_oid()
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_ns_oid$function$
;

-- DROP FUNCTION public.uuid_ns_url();

CREATE OR REPLACE FUNCTION public.uuid_ns_url()
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_ns_url$function$
;

-- DROP FUNCTION public.uuid_ns_x500();

CREATE OR REPLACE FUNCTION public.uuid_ns_x500()
 RETURNS uuid
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/uuid-ossp', $function$uuid_ns_x500$function$
;

-- DROP FUNCTION public.v2_ndvi_difference(varchar, date);

CREATE OR REPLACE FUNCTION public.v2_ndvi_difference(id character varying, dat date)
 RETURNS TABLE(difference text)
 LANGUAGE plpgsql
AS $function$
DECLARE
  current_ndvi Double PRECISION;
  previous_ndvi Double PRECISION;
  ndvi_difference Double Precision;
  current_cloud_cover Double Precision;
  previous_cloud_cover Double Precision;
  difference TEXT;
BEGIN
  WITH ndvi_averages AS (
    SELECT 
      date, 
      cloud_cover as current_cloud, 
      lag(cloud_cover) over (order by date) as previous_cloud, 
      ndvi_avg AS cur_ndvi, 
      lag(ndvi_avg) OVER (ORDER BY date) AS pre_ndvi  
    FROM 
      farm_ndvi_v2 
    WHERE 
      farm_crop_id = id 
    ORDER BY 
      date
  ), differences AS (
    SELECT 
	  cur_ndvi as cn,
	  pre_ndvi as pn,
      Round((((cur_ndvi - pre_ndvi) / pre_ndvi) * 100)::numeric,2) AS dif, 
      current_cloud as cc, 
      previous_cloud as pc
    FROM 
      ndvi_averages 
    WHERE 
      date = dat
  ) 
  SELECT cn, pn,
    dif, cc, pc 
  INTO 
    current_ndvi, previous_ndvi, ndvi_difference, current_cloud_cover, previous_cloud_cover
  FROM 
    differences;

  IF ndvi_difference IS NOT NULL AND ndvi_difference > 0  AND current_ndvi >0.25 AND (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := '. Compared to the previous NDVI image, the average vegetation in the field has increased by ' || ABS(ndvi_difference) || '%.';
  ELSIF ndvi_difference IS NOT NULL AND ndvi_difference < 0 AND previous_ndvi > 0.25 And (current_cloud_cover IS NULL OR current_cloud_cover = 0) AND (previous_cloud_cover IS NULL OR previous_cloud_cover = 0) THEN 
     difference := '. Compared to the previous NDVI image, the average vegetation in the field has decreased by ' || ABS(ndvi_difference) || '% .';
  ELSE 
     difference := '';
  END IF;

  RETURN QUERY SELECT difference;
END;
$function$
;

-- DROP FUNCTION public.v3_farm_ndvi_legend_fn(varchar, date);

CREATE OR REPLACE FUNCTION public.v3_farm_ndvi_legend_fn(id character varying, dat date)
 RETURNS TABLE(description text, area numeric, percentage numeric)
 LANGUAGE plpgsql
AS $function$ 
Begin
return query
With vegetation_data as  (
	SELECT 'High Vegetation' AS Description, ROUND((((f.range_050_055/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_055_060/100) * (st_area(b.geom::geography)*0.000247105))+((f.range_060_065/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_065_070/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_070_075/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_075_080/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_080_085/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_085_090/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_090_095/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_095_1/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_050_055 + f.range_055_060 + f.range_060_065 + f.range_065_070 + f.range_070_075 + f.range_075_080 + f.range_080_085 + f.range_085_090 + f.range_090_095 + f.range_095_1)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL
			
SELECT 'Medium Vegetation' AS Description, ROUND((((f.range_030_035/100) * (st_area(b.geom::geography)*0.000247105)) +((f.range_035_040/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_040_045/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_045_050/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_030_035 + f.range_035_040 + f.range_040_045 + f.range_045_050)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
	
SELECT 'Low Vegetation' AS Description, ROUND((((f.range_01_015/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_015_020/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_020_025/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_025_030/100) * (st_area(b.geom::geography)*0.000247105))) ::numeric,2) AS "area", ROUND((f.range_01_015 + f.range_015_020 + f.range_020_025 + f.range_025_030) ::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
	
	UNION ALL 
	

SELECT 'No Vegetation' AS Description,  ROUND((((f.range_less_0/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_0_005/100) * (st_area(b.geom::geography)*0.000247105)) + ((f.range_005_01/100) * (st_area(b.geom::geography)*0.000247105)))::numeric,2) AS "area", ROUND((f.range_less_0 + f.range_0_005 + f.range_005_01)::numeric,2) AS "percentage"
	FROM farm_ndvi_v3 f
	INNER JOIN vi_log b ON f.farm_id = b.farm_id
	WHERE f.farm_id = id
  	AND f.image_date = dat
--   	AND f.val = 1
) select * from vegetation_data;
End;
$function$
;

-- DROP FUNCTION public.wheat_narration(varchar, varchar, int4, date);

CREATE OR REPLACE FUNCTION public.wheat_narration(id character varying, crop_name character varying, crop_age integer, dat date)
 RETURNS TABLE(narration text)
 LANGUAGE plpgsql
AS $function$ 
begin 
  IF crop_name = 'Wheat' THEN
    IF crop_age >= 7 AND crop_age < 20 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Germination' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Germination' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_02_to_03 + f.range_03_to_04)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Germination' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_04_to_05 + f.range_05_to_06 + f.range_06_to_07 + f.range_07_to_08 + f.range_08_to_09 + f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ) , max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
    ELSIF crop_age >= 21 AND crop_age < 35 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Tillering' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02 + f.range_02_to_03)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Tillering' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_03_to_04 + f.range_04_to_05)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Tillering' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_05_to_06 + f.range_06_to_07 + f.range_07_to_08 + f.range_08_to_09 + f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ), max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
	ELSIF crop_age >= 35 AND crop_age < 50 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Stem Elongation' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02 + f.range_02_to_03 + f.range_03_to_04)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Stem Elongation' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_04_to_05 + f.range_05_to_06)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Stem Elongation' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_06_to_07 + f.range_07_to_08 + f.range_08_to_09 + f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ) , max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
	ELSIF crop_age >= 50 AND crop_age < 65 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Booting' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02 + f.range_02_to_03 + f.range_03_to_04 + f.range_04_to_05)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Booting' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_05_to_06 + f.range_06_to_07)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Booting' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_07_to_08 + f.range_08_to_09 + f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ), max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
	ELSIF crop_age >= 65 AND crop_age < 80 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Heading' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02 + f.range_02_to_03 + f.range_03_to_04 + f.range_04_to_05 + f.range_05_to_06)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Heading' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_06_to_07 + f.range_07_to_08)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Heading' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_08_to_09 + f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ) , max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1; 
	ELSIF crop_age >= 80 AND crop_age < 95 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Grain Filling' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02 + f.range_02_to_03 + f.range_03_to_04 + f.range_04_to_05 + f.range_05_to_06 + f.range_06_to_07)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Grain Filling' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_07_to_08 + f.range_08_to_09)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Grain Filling' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ), max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
	ELSIF crop_age >= 95 AND crop_age < 105 THEN
	return query
      WITH vegetation_data As (
        SELECT 'Ripening' as stage,
          'Stressed Vegetation' AS Description,
          ROUND((((f.range_less_then_0/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_0_to_01/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_01_to_02/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_02_to_03/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_03_to_04/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_04_to_05/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_less_then_0 + f.range_0_to_01 + f.range_01_to_02 + f.range_02_to_03 + f.range_03_to_04 + f.range_04_to_05)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
          UNION ALL
        SELECT 'Ripening' as stage,
          'Moderate Vegetation' AS Description,
          ROUND((((f.range_05_to_06/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_06_to_07/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_05_to_06 + f.range_06_to_07)::numeric, 2) AS "percentage"
		  FROM farm_ndvi_v2 f
	      INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	        
		  UNION ALL
        SELECT 'Ripening' as stage,
          'Healthy Vegetation' AS Description,
          ROUND((((f.range_07_to_08/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_08_to_09/100) * (st_area(b.shape::geography)*0.000247105)) + ((f.range_09_to_1/100) * (st_area(b.shape::geography)*0.000247105)))::numeric, 2) AS "area",
          ROUND((f.range_07_to_08 + f.range_08_to_09 + f.range_09_to_1)::numeric, 2) AS "percentage"
          FROM farm_ndvi_v2 f
		  INNER JOIN bkk_faf_farms_v2_mat_vw b ON f.farm_crop_id = b.farm_crop_id
	      WHERE f.farm_crop_id = id
	      AND f.date = dat
	      AND f.val = 1	
      ) , max_vegetation_text as (select CONCAT(
    	  'The crop is currently in the ',
           stage,
           ' stage. Currently, ',
           percentage,
           '% (',
           area,
           ' acres) are ', description
           ) AS vegetation_text from vegetation_data
           WHERE percentage = (SELECT MAX(percentage) FROM vegetation_data)
	 ), other_vegetation as (
		    select CONCAT(
    		', ',
   		    percentage,
			'% (',
			area,
			' acres)'
    		' are ',
   		    description
  		    ) AS other_vegetation_text from vegetation_data
  		    WHERE percentage >0 and percentage not in (SELECT MAX(percentage) FROM vegetation_data) order by percentage desc),
  	other_vegetation_text as(
  		    SELECT STRING_AGG(other_vegetation_text, ', ') AS vegetation_text
		    FROM other_vegetation
			)
		select concat(m.vegetation_text, l.vegetation_text) as advisory from
		max_vegetation_text m
		inner join
		other_vegetation_text l on 1=1;
	ELSE
	    RAISE NOTICE 'Not available';
    END IF;
  ELSE
    RAISE NOTICE 'Not available';
  END IF;
END $function$
;

-- DROP FUNCTION public.word_similarity(text, text);

CREATE OR REPLACE FUNCTION public.word_similarity(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$word_similarity$function$
;

-- DROP FUNCTION public.word_similarity_commutator_op(text, text);

CREATE OR REPLACE FUNCTION public.word_similarity_commutator_op(text, text)
 RETURNS boolean
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$word_similarity_commutator_op$function$
;

-- DROP FUNCTION public.word_similarity_dist_commutator_op(text, text);

CREATE OR REPLACE FUNCTION public.word_similarity_dist_commutator_op(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$word_similarity_dist_commutator_op$function$
;

-- DROP FUNCTION public.word_similarity_dist_op(text, text);

CREATE OR REPLACE FUNCTION public.word_similarity_dist_op(text, text)
 RETURNS real
 LANGUAGE c
 IMMUTABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$word_similarity_dist_op$function$
;

-- DROP FUNCTION public.word_similarity_op(text, text);

CREATE OR REPLACE FUNCTION public.word_similarity_op(text, text)
 RETURNS boolean
 LANGUAGE c
 STABLE PARALLEL SAFE STRICT
AS '$libdir/pg_trgm', $function$word_similarity_op$function$
;
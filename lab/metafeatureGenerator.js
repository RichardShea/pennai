var spawn = require("child_process").spawn;

/**
* Generate metafeatures for a given data file
* For now, return dummy data
*/
function generateFeatures(file) {
    return {
		"class_prob_max" : 0.760718234,
		"class_prob_mean" : 0.5,
		"class_prob_median" : 0.5,
		"class_prob_min" : 0.239281766,
		"class_prob_std" : 0.368711263,
		"corr_with_dependent_abs_25p" : null,
		"corr_with_dependent_abs_75p" : null,
		"corr_with_dependent_abs_kurtosis" : null,
		"corr_with_dependent_abs_max" : null,
		"corr_with_dependent_abs_mean" : null,
		"corr_with_dependent_abs_median" : null,
		"corr_with_dependent_abs_min" : null,
		"corr_with_dependent_abs_skew" : null,
		"corr_with_dependent_abs_std" : null,
		"diversity_fraction" : 0.866843729,
		"entropy_dependent" : 0.550250619,
		"kurtosis_kurtosis" : 4.713303895,
		"kurtosis_max" : 152.6930963,
		"kurtosis_mean" : 36.30641616,
		"kurtosis_median" : 6.057848212,
		"kurtosis_min" : -0.184268741,
		"kurtosis_skew" : 2.1613243,
		"kurtosis_std" : 58.60105231,
		"n_categorical" : 9,
		"n_classes" : 2,
		"n_columns" : 15,
		"n_numerical" : 5,
		"n_rows" : 48842,
		"pca_fraction_95" : 0.008196721,
		"ratio_rowcol" : 3256.133333,
		"skew_kurtosis" : 2.452186933,
		"skew_max" : 11.894659,
		"skew_mean" : 3.739937941,
		"skew_median" : 1.438891879,
		"skew_min" : 0.238749657,
		"skew_skew" : 1.643260735,
		"skew_std" : 4.355885528,
		"symbols_kurtosis" : 4.785618776,
		"symbols_max" : 42,
		"symbols_mean" : 13.11111111,
		"symbols_min" : 2,
		"symbols_skew" : 2.017283225,
		"symbols_std" : 11.98378534,
		"symbols_sum" : 118,
		"dataset" : "adult"
    }
};

module.exports = {
	generateFeatures: generateFeatures
};
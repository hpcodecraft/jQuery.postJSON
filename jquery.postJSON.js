/**
 * jQuery postJSON plugin
 * written by Volker Wieban
 * http://squidpeople.com
 *	
 * an equivalent to jQuerys built-in getJSON
 * makes a POST request and returns JSON data
 *
 */

(function($) {

	$.postJSON = function(url, data, success) {
		return $.ajax({
		  type: 'POST',
		  url: url,
		  data: data,
		  success: success,
		  dataType: 'json'
		});
	};

})(jQuery);
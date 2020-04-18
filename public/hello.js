$(document).ready(function () {
    $.ajax({
        url: "https://corona.lmao.ninja/v2/countries/Canada?yesterday=true&strict=true",
        success: function (data) {
            $("#country").append(data.country);
            $("#cases").append(data.cases);
            $("#todayCases").append(data.todayCases);
            $("#deaths").append(data.deaths);
            $("#todayDeaths").append(data.todayDeaths);
            $("#recovered").append(data.recovered);
            $("#active").append(data.active);
            $("#critical").append(data.critical);
            $("#tests").append(data.tests);

            // api doc https://corona.lmao.ninja/docs/#/

            // $("#flag").append(data.countryInfo['lat']); This is how you display something in an array

            // Cases last 30 days in BC
            // https://corona.lmao.ninja/v2/historical/Canada/British%20Columbia?lastdays=30

            // website for js
            // https://www.websparrow.org/web/how-to-consume-restful-web-service-using-jquery

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
        }
    });

    $.ajax({
    	url: "https://corona.lmao.ninja/v2/historical/Canada/British%20Columbia?lastdays=30",
    	success: function (data) {
    		$("#province").append(data.province);
    		$("#prov-cases").append(data.timeline.cases['3/19/20']);
    	},
    	/*
    	success: function display(data) {
            $.each(data, function(key,value) {
            	$("#prov-cases").append(key + value.data.timeline.cases);
    			
    		});
    	},
    	*/
    	error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
        }
    });

});
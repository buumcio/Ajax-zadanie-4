var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var prefix = "https://cors-anywhere.herokuapp.com/";

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });

    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item){
            var name = $('<li>').text('The country name: ' + item.name).appendTo(countriesList);
            var capital = $('<li>').text('The capitol city: ' + item.capital).appendTo(countriesList);
            var region = $('<li>').text('The regon of this country: ' + item.region).appendTo(countriesList);
        });

    }

}
document.getElementById("chartdiv_2");
//[Dashboard Javascript]

//Project:	Master Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)

am4core.ready(function () {
    const data = {
        "municipios": [
            {
                "id": 1,
                "X": 1,
                "state": 26001,
                "date": "28/03/2020",
                "mean": 1.240879975,
                "ML": 1.193728284,
                "Low_90": 0.743316586,
                "High_90": 1.715287822,
                "Low_50": 0.996859823,
                "High_50": 1.322319516,
                "sd": 0.325459693,
                "pendiente": 0,
                "sma_7": 1.239843619,
                "sma_14": 1.238563546
            },
            {
                "id": 2,
                "X": 2,
                "state": 26001,
                "date": "29/03/2020",
                "mean": 1.241959091,
                "ML": 1.189315697,
                "Low_90": 0.68885966,
                "High_90": 1.718712705,
                "Low_50": 1.016452773,
                "High_50": 1.340372573,
                "sd": 0.3239198,
                "pendiente": 0.000148051,
                "sma_7": 1.23999167,
                "sma_14": 1.238729005
            },
            {
                "id": 3,
                "X": 3,
                "state": 26001,
                "date": "30/03/2020",
                "mean": 1.241686344,
                "ML": 1.187878867,
                "Low_90": 0.753115753,
                "High_90": 1.77895026,
                "Low_50": 0.982965094,
                "High_50": 1.312231659,
                "sd": 0.329266564,
                "pendiente": 0.00030221,
                "sma_7": 1.24029388,
                "sma_14": 1.238971544
            },
            {
                "id": 4,
                "X": 4,
                "state": 26001,
                "date": "31/03/2020",
                "mean": 1.239346912,
                "ML": 1.184342427,
                "Low_90": 0.768152091,
                "High_90": 1.802894766,
                "Low_50": 0.980346613,
                "High_50": 1.311353529,
                "sd": 0.331006916,
                "pendiente": 0.000263246,
                "sma_7": 1.240557127,
                "sma_14": 1.239194601
            },
            {
                "id": 5,
                "X": 5,
                "state": 26001,
                "date": "01/04/2020",
                "mean": 1.237899127,
                "ML": 1.180690173,
                "Low_90": 0.746246249,
                "High_90": 1.771872869,
                "Low_50": 0.976877487,
                "High_50": 1.310046866,
                "sd": 0.333169379,
                "pendiente": -0.000071,
                "sma_7": 1.240486169,
                "sma_14": 1.239250556
            },
            {
                "id": 6,
                "X": 6,
                "state": 26001,
                "date": "02/04/2020",
                "mean": 1.238333677,
                "ML": 1.185310128,
                "Low_90": 0.771931298,
                "High_90": 1.830186385,
                "Low_50": 0.972399024,
                "High_50": 1.300980527,
                "sd": 0.328581503,
                "pendiente": -0.000277785,
                "sma_7": 1.240208384,
                "sma_14": 1.239203097
            },
            {
                "id": 7,
                "X": 7,
                "state": 26001,
                "date": "03/04/2020",
                "mean": 1.23880021,
                "ML": 1.18448512,
                "Low_90": 0.709209061,
                "High_90": 1.78871113,
                "Low_50": 0.997368672,
                "High_50": 1.331321375,
                "sd": 0.333952703,
                "pendiente": -0.000215706,
                "sma_7": 1.239992678,
                "sma_14": 1.239186678
            },
            {
                "id": 8,
                "X": 8,
                "state": 26001,
                "date": "04/04/2020",
                "mean": 1.238622504,
                "ML": 1.184004032,
                "Low_90": 0.645490537,
                "High_90": 1.74923682,
                "Low_50": 1.004600469,
                "High_50": 1.341511262,
                "sd": 0.336910793,
                "pendiente": -0.000149058,
                "sma_7": 1.239843619,
                "sma_14": 1.239203583
            },
            {
                "id": 9,
                "X": 9,
                "state": 26001,
                "date": "05/04/2020",
                "mean": 1.239154424,
                "ML": 1.183360056,
                "Low_90": 0.716073699,
                "High_90": 1.835658235,
                "Low_50": 1.007512048,
                "High_50": 1.358439616,
                "sd": 0.350927568,
                "pendiente": -0.000322496,
                "sma_7": 1.239521124,
                "sma_14": 1.239207794
            },
            {
                "id": 10,
                "X": 10,
                "state": 26001,
                "date": "06/04/2020",
                "mean": 1.237341418,
                "ML": 1.184676622,
                "Low_90": 0.735118583,
                "High_90": 1.883005327,
                "Low_50": 1.008649659,
                "High_50": 1.361068626,
                "sd": 0.352418966,
                "pendiente": -0.000400667,
                "sma_7": 1.239120457,
                "sma_14": 1.239249999
            },
            {
                "id": 11,
                "X": 11,
                "state": 26001,
                "date": "07/04/2020",
                "mean": 1.237261345,
                "ML": 1.180654347,
                "Low_90": 0.722378916,
                "High_90": 1.862929589,
                "Low_50": 0.940909894,
                "High_50": 1.296557636,
                "sd": 0.355647742,
                "pendiente": -0.000620704,
                "sma_7": 1.238499753,
                "sma_14": 1.239162705
            },
            {
                "id": 12,
                "X": 12,
                "state": 26001,
                "date": "08/04/2020",
                "mean": 1.235531027,
                "ML": 1.182982363,
                "Low_90": 0.65007498,
                "High_90": 1.760298356,
                "Low_50": 0.98965889,
                "High_50": 1.343502586,
                "sd": 0.353843696,
                "pendiente": -0.000297938,
                "sma_7": 1.238201815,
                "sma_14": 1.23906969
            },
            {
                "id": 13,
                "X": 13,
                "state": 26001,
                "date": "09/04/2020",
                "mean": 1.238258739,
                "ML": 1.184823336,
                "Low_90": 0.716392107,
                "High_90": 1.819845111,
                "Low_50": 0.996165596,
                "High_50": 1.349331713,
                "sd": 0.353166117,
                "pendiente": -0.0003383,
                "sma_7": 1.237863515,
                "sma_14": 1.238853082
            },
            {
                "id": 14,
                "X": 14,
                "state": 26001,
                "date": "10/04/2020",
                "mean": 1.234814846,
                "ML": 1.180310706,
                "Low_90": 0.649342125,
                "High_90": 1.794936173,
                "Low_50": 0.962161801,
                "High_50": 1.314140514,
                "sd": 0.351978713,
                "pendiente": -0.0000107,
                "sma_7": 1.23785281,
                "sma_14": 1.23883131
            },
            {
                "id": 15,
                "X": 15,
                "state": 26001,
                "date": "11/04/2020",
                "mean": 1.232806128,
                "ML": 1.182492978,
                "Low_90": 0.64978013,
                "High_90": 1.788770787,
                "Low_50": 0.93771184,
                "High_50": 1.293999248,
                "sd": 0.356287408,
                "pendiente": -0.000569338,
                "sma_7": 1.237283472,
                "sma_14": 1.238563546
            },
            {
                "id": 16,
                "X": 16,
                "state": 26001,
                "date": "12/04/2020",
                "mean": 1.229279772,
                "ML": 1.178694533,
                "Low_90": 0.768732793,
                "High_90": 1.91326106,
                "Low_50": 0.937528678,
                "High_50": 1.285219009,
                "sd": 0.347690332,
                "pendiente": -0.000830911,
                "sma_7": 1.236452561,
                "sma_14": 1.237986842
            },
            {
                "id": 17,
                "X": 17,
                "state": 26001,
                "date": "13/04/2020",
                "mean": 1.225467663,
                "ML": 1.180624105,
                "Low_90": 0.642861107,
                "High_90": 1.761058887,
                "Low_50": 0.939462212,
                "High_50": 1.292599475,
                "sd": 0.353137262,
                "pendiente": -0.001410665,
                "sma_7": 1.235041896,
                "sma_14": 1.237081177
            },
            {
                "id": 18,
                "X": 18,
                "state": 26001,
                "date": "14/04/2020",
                "mean": 1.22586988,
                "ML": 1.181779723,
                "Low_90": 0.701431921,
                "High_90": 1.787404409,
                "Low_50": 0.945730139,
                "High_50": 1.303583883,
                "sd": 0.357853744,
                "pendiente": -0.001696251,
                "sma_7": 1.233345646,
                "sma_14": 1.235922699
            },
            {
                "id": 19,
                "X": 19,
                "state": 26001,
                "date": "15/04/2020",
                "mean": 1.225086387,
                "ML": 1.178452469,
                "Low_90": 0.666819672,
                "High_90": 1.786112574,
                "Low_50": 0.952463313,
                "High_50": 1.313693563,
                "sd": 0.361230249,
                "pendiente": -0.001627352,
                "sma_7": 1.231718294,
                "sma_14": 1.234960054
            },
            {
                "id": 20,
                "X": 20,
                "state": 26001,
                "date": "16/04/2020",
                "mean": 1.225237903,
                "ML": 1.174335431,
                "Low_90": 0.664646944,
                "High_90": 1.784719838,
                "Low_50": 0.948095169,
                "High_50": 1.306972363,
                "sd": 0.358877194,
                "pendiente": -0.001492091,
                "sma_7": 1.230226202,
                "sma_14": 1.234044859
            },
            {
                "id": 21,
                "X": 21,
                "state": 26001,
                "date": "17/04/2020",
                "mean": 1.222289928,
                "ML": 1.171638788,
                "Low_90": 0.667250814,
                "High_90": 1.816445474,
                "Low_50": 0.96525794,
                "High_50": 1.315879383,
                "sd": 0.350621443,
                "pendiente": -0.00186012,
                "sma_7": 1.228366083,
                "sma_14": 1.233109446
            },
            {
                "id": 22,
                "X": 22,
                "state": 26001,
                "date": "18/04/2020",
                "mean": 1.218804697,
                "ML": 1.1725807,
                "Low_90": 0.619446011,
                "High_90": 1.75374299,
                "Low_50": 0.987892018,
                "High_50": 1.33401799,
                "sd": 0.346125972,
                "pendiente": -0.001789274,
                "sma_7": 1.226576809,
                "sma_14": 1.23193014
            },
            {
                "id": 23,
                "X": 23,
                "state": 26001,
                "date": "19/04/2020",
                "mean": 1.216207864,
                "ML": 1.173004502,
                "Low_90": 0.69004373,
                "High_90": 1.816208645,
                "Low_50": 0.947749282,
                "High_50": 1.28422109,
                "sd": 0.336471809,
                "pendiente": -0.002000204,
                "sma_7": 1.224576604,
                "sma_14": 1.230514583
            },
            {
                "id": 24,
                "X": 24,
                "state": 26001,
                "date": "20/04/2020",
                "mean": 1.215894376,
                "ML": 1.170714323,
                "Low_90": 0.645318772,
                "High_90": 1.769852438,
                "Low_50": 0.944400364,
                "High_50": 1.284725373,
                "sd": 0.340325009,
                "pendiente": -0.001867415,
                "sma_7": 1.222709189,
                "sma_14": 1.228875543
            },
            {
                "id": 25,
                "X": 25,
                "state": 26001,
                "date": "21/04/2020",
                "mean": 1.212480748,
                "ML": 1.171211892,
                "Low_90": 0.65250505,
                "High_90": 1.770680824,
                "Low_50": 1.012957697,
                "High_50": 1.347919088,
                "sd": 0.334961391,
                "pendiente": -0.001367612,
                "sma_7": 1.221341577,
                "sma_14": 1.227343611
            },
            {
                "id": 26,
                "X": 26,
                "state": 26001,
                "date": "22/04/2020",
                "mean": 1.209697195,
                "ML": 1.163195585,
                "Low_90": 0.65857527,
                "High_90": 1.799335157,
                "Low_50": 1.00442356,
                "High_50": 1.347225242,
                "sd": 0.342801683,
                "pendiente": -0.001912733,
                "sma_7": 1.219428843,
                "sma_14": 1.225573569
            },
            {
                "id": 27,
                "X": 27,
                "state": 26001,
                "date": "23/04/2020",
                "mean": 1.205841243,
                "ML": 1.16355049,
                "Low_90": 0.637362582,
                "High_90": 1.777959936,
                "Low_50": 0.981008377,
                "High_50": 1.329651616,
                "sd": 0.348643239,
                "pendiente": -0.002198456,
                "sma_7": 1.217230387,
                "sma_14": 1.223728295
            },
            {
                "id": 28,
                "X": 28,
                "state": 26001,
                "date": "24/04/2020",
                "mean": 1.205591095,
                "ML": 1.164332541,
                "Low_90": 0.596342276,
                "High_90": 1.728578598,
                "Low_50": 0.931119825,
                "High_50": 1.274815415,
                "sd": 0.343695589,
                "pendiente": -0.002770951,
                "sma_7": 1.214459436,
                "sma_14": 1.221412759
            },
            {
                "id": 29,
                "X": 29,
                "state": 26001,
                "date": "25/04/2020",
                "mean": 1.205550372,
                "ML": 1.1624471,
                "Low_90": 0.589499944,
                "High_90": 1.721403686,
                "Low_50": 0.934735278,
                "High_50": 1.27692158,
                "sd": 0.342186302,
                "pendiente": -0.002385548,
                "sma_7": 1.212073888,
                "sma_14": 1.219325349
            },
            {
                "id": 30,
                "X": 30,
                "state": 26001,
                "date": "26/04/2020",
                "mean": 1.203855251,
                "ML": 1.164622616,
                "Low_90": 0.653417369,
                "High_90": 1.743691457,
                "Low_50": 0.944906375,
                "High_50": 1.278319602,
                "sd": 0.333413226,
                "pendiente": -0.001893475,
                "sma_7": 1.210180413,
                "sma_14": 1.217378509
            },
            {
                "id": 31,
                "X": 31,
                "state": 26001,
                "date": "27/04/2020",
                "mean": 1.20374109,
                "ML": 1.164008984,
                "Low_90": 0.640495142,
                "High_90": 1.749609844,
                "Low_50": 0.939835549,
                "High_50": 1.272762543,
                "sd": 0.332926994,
                "pendiente": -0.001764659,
                "sma_7": 1.208415754,
                "sma_14": 1.215562472
            },
            {
                "id": 32,
                "X": 32,
                "state": 26001,
                "date": "28/04/2020",
                "mean": 1.202329575,
                "ML": 1.164291978,
                "Low_90": 0.578754711,
                "High_90": 1.717610937,
                "Low_50": 0.934247133,
                "High_50": 1.270448557,
                "sd": 0.336201425,
                "pendiente": -0.001736184,
                "sma_7": 1.206679571,
                "sma_14": 1.214010574
            },
            {
                "id": 33,
                "X": 33,
                "state": 26001,
                "date": "29/04/2020",
                "mean": 1.201254238,
                "ML": 1.166108789,
                "Low_90": 0.651313685,
                "High_90": 1.763520292,
                "Low_50": 0.913943726,
                "High_50": 1.253823561,
                "sd": 0.339879835,
                "pendiente": -0.001450168,
                "sma_7": 1.205229403,
                "sma_14": 1.212329123
            },
            {
                "id": 34,
                "X": 34,
                "state": 26001,
                "date": "30/04/2020",
                "mean": 1.201100969,
                "ML": 1.156551964,
                "Low_90": 0.579764782,
                "High_90": 1.73494,
                "Low_50": 0.928423105,
                "High_50": 1.264537321,
                "sd": 0.336114215,
                "pendiente": -0.001206137,
                "sma_7": 1.204023266,
                "sma_14": 1.210626827
            },
            {
                "id": 35,
                "X": 35,
                "state": 26001,
                "date": "01/05/2020",
                "mean": 1.196651645,
                "ML": 1.157587214,
                "Low_90": 0.592487702,
                "High_90": 1.744822164,
                "Low_50": 0.925126958,
                "High_50": 1.264419068,
                "sd": 0.33929211,
                "pendiente": -0.000677182,
                "sma_7": 1.203346084,
                "sma_14": 1.20890276
            }
        ]
    }
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv_2", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_region_mexico_sonHigh;

    /*   chart.geodataSource.url = "https://api.jsonstorage.net/v1/json/13133156-7836-464d-a0e9-6877c9fd42b9?apiKey=8c1775a1-23a2-4d93-b95a-edbe7c06b8f3";
      chart.geodataSource.events.on("parseended", function (ev) {
          var data = [];
          for (var i = 0; i < ev.target.data.municipios.length; i++) {
              data.push({
                  id: ev.target.data.municipios[i].id,
                  value: Math.round(Math.random() * 10000)
              })
          }
          polygonSeries.data = data;
      }) */

    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();

    // Add button
    var zoomOut = chart.tooltipContainer.createChild(am4core.ZoomOutButton);
    zoomOut.align = "right";
    zoomOut.valign = "top";
    zoomOut.margin(20, 20, 20, 20);
    zoomOut.events.on("hit", function () {
        if (currentSeries) {
            currentSeries.hide();
        }
        chart.goHome();
        zoomOut.hide();
        currentSeries = regionalSeries.SON.series;
        currentSeries.show();
    });
    zoomOut.hide();


    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.calculateVisualCenter = true;

    // Configure series
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(1).brighten(1),
        max: chart.colors.getIndex(1).brighten(-0.3)
    });

    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.width = am4core.percent(25);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;
    heatLegend.valign = "bottom";

    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "Little";
    minRange.label.color = am4core.color("#ffffff");
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "A lot!";
    maxRange.label.color = am4core.color("#ffffff");

    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
        return "";
    });


    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{COUNTY} {id} {STATE} {value}";
    polygonTemplate.fill = chart.colors.getIndex(0);

    var countryHoverColor = am4core.color("#1b1b1b");

    var polygonHoverState = polygonTemplate.states.create("hover");
    polygonHoverState.transitionDuration = 1400;
    polygonHoverState.properties.fill = countryHoverColor;

    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);

    // Load data when map polygons are ready
    chart.events.on("ready", loadStores);

    // Loads store data
    function loadStores() {
        var loader = new am4core.DataSource();
        loader.url = "https://api.jsonstorage.net/v1/json/13133156-7836-464d-a0e9-6877c9fd42b9?apiKey=8c1775a1-23a2-4d93-b95a-edbe7c06b8f3";
        loader.events.on("parseended", function (ev) {
            setupStores(ev.target.data);
        });
        loader.load();
    }

    function createSeries(heatfield) {
        var series = chart.series.push(new am4maps.MapImageSeries());
        series.dataFields.value = heatfield;

        var template = series.mapImages.template;
        template.verticalCenter = "middle";
        template.horizontalCenter = "middle";
        template.propertyFields.latitude = "lat";
        template.propertyFields.longitude = "long";
        template.tooltipText = "{name}:\n[bold]{stores} stores[/]";

        var circle = template.createChild(am4core.Circle);
        circle.radius = 10;
        circle.fillOpacity = 0.7;
        circle.verticalCenter = "middle";
        circle.horizontalCenter = "middle";
        circle.nonScaling = true;

        var label = template.createChild(am4core.Label);
        label.text = "{stores}";
        label.fill = am4core.color("#fff");
        label.verticalCenter = "middle";
        label.horizontalCenter = "middle";
        label.nonScaling = true;

        var heat = series.heatRules.push({
            target: circle,
            property: "radius",
            min: 10,
            max: 30
        });
    }

    var regionalSeries = {};
    var currentSeries;

    function setupStores(data) {

        // Init country-level series
        regionalSeries.US = {
            markerData: [],
            series: createSeries("stores")
        };

        // Set current series
        currentSeries = regionalSeries.US.series;

        // Process data
        am4core.array.each(data.municipios, function (store) {

            // Get store data
            var store = {
                state: store.state,
                /*                 long: am4core.type.toNumber(store.LNGTD_I),
                                lat: am4core.type.toNumber(store.LATTD_I),
                                location: store.co_loc_n,
                                city: store.mail_city_n,
                                count: am4core.type.toNumber(store.count) */
            };

            // Process state-level data
            if (regionalSeries[store.state] == undefined) {
                var statePolygon = polygonSeries.getPolygonById("US-" + store.state);
                if (statePolygon) {

                    // Add state data
                    regionalSeries[store.state] = {
                        target: store.state,
                        type: "state",
                        name: statePolygon.dataItem.dataContext.name,
                        count: store.count,
                        stores: 1,
                        lat: statePolygon.visualLatitude,
                        long: statePolygon.visualLongitude,
                        state: store.state,
                        markerData: []
                    };
                    regionalSeries.US.markerData.push(regionalSeries[store.state]);

                }
                else {
                    // State not found
                    return;
                }
            }
            else {
                regionalSeries[store.state].stores++;
                regionalSeries[store.state].count += store.count;
            }

            // Process city-level data
            if (regionalSeries[store.city] == undefined) {
                regionalSeries[store.city] = {
                    target: store.city,
                    type: "city",
                    name: store.city,
                    count: store.count,
                    stores: 1,
                    lat: store.lat,
                    long: store.long,
                    state: store.state,
                    markerData: []
                };
                regionalSeries[store.state].markerData.push(regionalSeries[store.city]);
            }
            else {
                regionalSeries[store.city].stores++;
                regionalSeries[store.city].count += store.count;
            }

            // Process individual store
            regionalSeries[store.city].markerData.push({
                name: store.location,
                count: store.count,
                stores: 1,
                lat: store.lat,
                long: store.long,
                state: store.state
            });

        });

        regionalSeries.US.series.data = regionalSeries.US.markerData;
    }

}); // end am4core.ready()
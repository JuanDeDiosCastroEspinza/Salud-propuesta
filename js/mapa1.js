
$(function () {
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv1", am4charts.XYChart);

// Add data
chart.data = [ {
  "date": "2012-07-27",
  "value": 13
}, {
  "date": "2012-07-28",
  "value": 11
}, {
  "date": "2012-07-29",
  "value": 15
}, {
  "date": "2012-07-30",
  "value": 16
}, {
  "date": "2012-07-31",
  "value": 18
}, {
  "date": "2012-08-01",
  "value": 13
}, {
  "date": "2012-08-02",
  "value": 22
}, {
  "date": "2012-08-03",
  "value": 23
}, {
  "date": "2012-08-04",
  "value": 20
}, {
  "date": "2012-08-05",
  "value": 17
}, {
  "date": "2012-08-06",
  "value": 16
}, {
  "date": "2012-08-07",
  "value": 18
}, {
  "date": "2012-08-08",
  "value": 21
}, {
  "date": "2012-08-09",
  "value": 26
}, {
  "date": "2012-08-10",
  "value": 24
}, {
  "date": "2012-08-11",
  "value": 29
}, {
  "date": "2012-08-12",
  "value": 32
}, {
  "date": "2012-08-13",
  "value": 18
}, {
  "date": "2012-08-14",
  "value": 24
}, {
  "date": "2012-08-15",
  "value": 22
}, {
  "date": "2012-08-16",
  "value": 18
}, {
  "date": "2012-08-17",
  "value": 19
}, {
  "date": "2012-08-18",
  "value": 14
}, {
  "date": "2012-08-19",
  "value": 15
}, {
  "date": "2012-08-20",
  "value": 12
}, {
  "date": "2012-08-21",
  "value": 8
}, {
  "date": "2012-08-22",
  "value": 9
}, {
  "date": "2012-08-23",
  "value": 8
}, {
  "date": "2012-08-24",
  "value": 7
}, {
  "date": "2012-08-25",
  "value": 5
}, {
  "date": "2012-08-26",
  "value": 11
}, {
  "date": "2012-08-27",
  "value": 13
}, {
  "date": "2012-08-28",
  "value": 18
}, {
  "date": "2012-08-29",
  "value": 20
}, {
  "date": "2012-08-30",
  "value": 29
}, {
  "date": "2012-08-31",
  "value": 33
}, {
  "date": "2012-09-01",
  "value": 42
}, {
  "date": "2012-09-02",
  "value": 35
}, {
  "date": "2012-09-03",
  "value": 31
}, {
  "date": "2012-09-04",
  "value": 47
}, {
  "date": "2012-09-05",
  "value": 52
}, {
  "date": "2012-09-06",
  "value": 46
}, {
  "date": "2012-09-07",
  "value": 41
}, {
  "date": "2012-09-08",
  "value": 43
}, {
  "date": "2012-09-09",
  "value": 40
}, {
  "date": "2012-09-10",
  "value": 39
}, {
  "date": "2012-09-11",
  "value": 34
}, {
  "date": "2012-09-12",
  "value": 29
}, {
  "date": "2012-09-13",
  "value": 34
}, {
  "date": "2012-09-14",
  "value": 37
}, {
  "date": "2012-09-15",
  "value": 42
}, {
  "date": "2012-09-16",
  "value": 49
}, {
  "date": "2012-09-17",
  "value": 46
}, {
  "date": "2012-09-18",
  "value": 47
}, {
  "date": "2012-09-19",
  "value": 55
}, {
  "date": "2012-09-20",
  "value": 59
}, {
  "date": "2012-09-21",
  "value": 58
}, {
  "date": "2012-09-22",
  "value": 57
}, {
  "date": "2012-09-23",
  "value": 61
}, {
  "date": "2012-09-24",
  "value": 59
}, {
  "date": "2012-09-25",
  "value": 67
}, {
  "date": "2012-09-26",
  "value": 65
}, {
  "date": "2012-09-27",
  "value": 61
}, {
  "date": "2012-09-28",
  "value": 66
}, {
  "date": "2012-09-29",
  "value": 69
}, {
  "date": "2012-09-30",
  "value": 71
}, {
  "date": "2012-10-01",
  "value": 67
}, {
  "date": "2012-10-02",
  "value": 63
}, {
  "date": "2012-10-03",
  "value": 46
}, {
  "date": "2012-10-04",
  "value": 32
}, {
  "date": "2012-10-05",
  "value": 21
}, {
  "date": "2012-10-06",
  "value": 18
}, {
  "date": "2012-10-07",
  "value": 21
}, {
  "date": "2012-10-08",
  "value": 28
}, {
  "date": "2012-10-09",
  "value": 27
}, {
  "date": "2012-10-10",
  "value": 36
}, {
  "date": "2012-10-11",
  "value": 33
}, {
  "date": "2012-10-12",
  "value": 31
}, {
  "date": "2012-10-13",
  "value": 30
}, {
  "date": "2012-10-14",
  "value": 34
}, {
  "date": "2012-10-15",
  "value": 38
}, {
  "date": "2012-10-16",
  "value": 37
}, {
  "date": "2012-10-17",
  "value": 44
}, {
  "date": "2012-10-18",
  "value": 49
}, {
  "date": "2012-10-19",
  "value": 53
}, {
  "date": "2012-10-20",
  "value": 57
}, {
  "date": "2012-10-21",
  "value": 60
}, {
  "date": "2012-10-22",
  "value": 61
}, {
  "date": "2012-10-23",
  "value": 69
}, {
  "date": "2012-10-24",
  "value": 67
}, {
  "date": "2012-10-25",
  "value": 72
}, {
  "date": "2012-10-26",
  "value": 77
}, {
  "date": "2012-10-27",
  "value": 75
}, {
  "date": "2012-10-28",
  "value": 70
}, {
  "date": "2012-10-29",
  "value": 72
}, {
  "date": "2012-10-30",
  "value": 70
}, {
  "date": "2012-10-31",
  "value": 72
}, {
  "date": "2012-11-01",
  "value": 73
}, {
  "date": "2012-11-02",
  "value": 67
}, {
  "date": "2012-11-03",
  "value": 68
}, {
  "date": "2012-11-04",
  "value": 65
}, {
  "date": "2012-11-05",
  "value": 71
}, {
  "date": "2012-11-06",
  "value": 75
}, {
  "date": "2012-11-07",
  "value": 74
}, {
  "date": "2012-11-08",
  "value": 71
}, {
  "date": "2012-11-09",
  "value": 76
}, {
  "date": "2012-11-10",
  "value": 77
}, {
  "date": "2012-11-11",
  "value": 81
}, {
  "date": "2012-11-12",
  "value": 83
}, {
  "date": "2012-11-13",
  "value": 80
}, {
  "date": "2012-11-14",
  "value": 81
}, {
  "date": "2012-11-15",
  "value": 87
}, {
  "date": "2012-11-16",
  "value": 82
}, {
  "date": "2012-11-17",
  "value": 86
}, {
  "date": "2012-11-18",
  "value": 80
}, {
  "date": "2012-11-19",
  "value": 87
}, {
  "date": "2012-11-20",
  "value": 83
}, {
  "date": "2012-11-21",
  "value": 85
}, {
  "date": "2012-11-22",
  "value": 84
}, {
  "date": "2012-11-23",
  "value": 82
}, {
  "date": "2012-11-24",
  "value": 73
}, {
  "date": "2012-11-25",
  "value": 71
}, {
  "date": "2012-11-26",
  "value": 75
}, {
  "date": "2012-11-27",
  "value": 79
}, {
  "date": "2012-11-28",
  "value": 70
}, {
  "date": "2012-11-29",
  "value": 73
}, {
  "date": "2012-11-30",
  "value": 61
}, {
  "date": "2012-12-01",
  "value": 62
}, {
  "date": "2012-12-02",
  "value": 66
}, {
  "date": "2012-12-03",
  "value": 65
}, {
  "date": "2012-12-04",
  "value": 73
}, {
  "date": "2012-12-05",
  "value": 79
}, {
  "date": "2012-12-06",
  "value": 78
}, {
  "date": "2012-12-07",
  "value": 78
}, {
  "date": "2012-12-08",
  "value": 78
}, {
  "date": "2012-12-09",
  "value": 74
}, {
  "date": "2012-12-10",
  "value": 73
}, {
  "date": "2012-12-11",
  "value": 75
}, {
  "date": "2012-12-12",
  "value": 70
}, {
  "date": "2012-12-13",
  "value": 77
}, {
  "date": "2012-12-14",
  "value": 67
}, {
  "date": "2012-12-15",
  "value": 62
}, {
  "date": "2012-12-16",
  "value": 64
}, {
  "date": "2012-12-17",
  "value": 61
}, {
  "date": "2012-12-18",
  "value": 59
}, {
  "date": "2012-12-19",
  "value": 53
}, {
  "date": "2012-12-20",
  "value": 54
}, {
  "date": "2012-12-21",
  "value": 56
}, {
  "date": "2012-12-22",
  "value": 59
}, {
  "date": "2012-12-23",
  "value": 58
}, {
  "date": "2012-12-24",
  "value": 55
}, {
  "date": "2012-12-25",
  "value": 52
}, {
  "date": "2012-12-26",
  "value": 54
}, {
  "date": "2012-12-27",
  "value": 50
}, {
  "date": "2012-12-28",
  "value": 50
}, {
  "date": "2012-12-29",
  "value": 51
}, {
  "date": "2012-12-30",
  "value": 52
}, {
  "date": "2012-12-31",
  "value": 58
}, {
  "date": "2013-01-01",
  "value": 60
}, {
  "date": "2013-01-02",
  "value": 67
}, {
  "date": "2013-01-03",
  "value": 64
}, {
  "date": "2013-01-04",
  "value": 66
}, {
  "date": "2013-01-05",
  "value": 60
}, {
  "date": "2013-01-06",
  "value": 63
}, {
  "date": "2013-01-07",
  "value": 61
}, {
  "date": "2013-01-08",
  "value": 60
}, {
  "date": "2013-01-09",
  "value": 65
}, {
  "date": "2013-01-10",
  "value": 75
}, {
  "date": "2013-01-11",
  "value": 77
}, {
  "date": "2013-01-12",
  "value": 78
}, {
  "date": "2013-01-13",
  "value": 70
}, {
  "date": "2013-01-14",
  "value": 70
}, {
  "date": "2013-01-15",
  "value": 73
}, {
  "date": "2013-01-16",
  "value": 71
}, {
  "date": "2013-01-17",
  "value": 74
}, {
  "date": "2013-01-18",
  "value": 78
}, {
  "date": "2013-01-19",
  "value": 85
}, {
  "date": "2013-01-20",
  "value": 82
}, {
  "date": "2013-01-21",
  "value": 83
}, {
  "date": "2013-01-22",
  "value": 88
}, {
  "date": "2013-01-23",
  "value": 85
}, {
  "date": "2013-01-24",
  "value": 85
}, {
  "date": "2013-01-25",
  "value": 80
}, {
  "date": "2013-01-26",
  "value": 87
}, {
  "date": "2013-01-27",
  "value": 84
}, {
  "date": "2013-01-28",
  "value": 83
}, {
  "date": "2013-01-29",
  "value": 84
}, {
  "date": "2013-01-30",
  "value": 81
} ];

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 50;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.strokeWidth = 3;
series.fillOpacity = 0.5;

// Add vertical scrollbar
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.marginLeft = 0;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";
chart.cursor.lineX.disabled = true;

}); // end am4core.ready()]




/////////////////////////////////////////////mapa2/////////////////////////////////////////////////////////////////////////////////////////
  
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
var chart = am4core.create("chartdiv3", am4charts.XYChart);
chart.paddingRight = 20;

chart.data = generateChartData();

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.baseInterval = {
  "timeUnit": "minute",
  "count": 1
};
dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.title.text = "Unique visitors";

var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.dateX = "date";
series.dataFields.valueY = "visits";
series.tooltipText = "Visits: [bold]{valueY}[/]";
series.fillOpacity = 0.3;


chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);


dateAxis.start = 0.8;
dateAxis.keepSelection = true;



function generateChartData() {
    var chartData = [];
    // current date
    var firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 500);

    // and generate 500 data items
    var visits = 500;
    for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        // add data item to the array
        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}

}); // end am4core.ready()




////////////////////////////////////////////mapa3//////////////////////////////////////////////////////

am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv4", am4charts.XYChart);

// Add data
chart.data = [ {
  "year": "2003",
  "europe": 2.5,
  "namerica": 2.5,
  "asia": 2.1,
  "lamerica": 1.2,
  "meast": 0.2,
  "africa": 0.1
}, {
  "year": "2004",
  "europe": 2.6,
  "namerica": 2.7,
  "asia": 2.2,
  "lamerica": 1.3,
  "meast": 0.3,
  "africa": 0.1
}, {
  "year": "2005",
  "europe": 2.8,
  "namerica": 2.9,
  "asia": 2.4,
  "lamerica": 1.4,
  "meast": 0.3,
  "africa": 0.1
} ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.title.text = "Local country offices";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "Expenditure (M)";

// Create series
function createSeries(field, name, stacked) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "year";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
  series.stacked = stacked;
  series.columns.template.width = am4core.percent(95);
}

createSeries("europe", "Europe", false);
createSeries("namerica", "North America", true);
createSeries("asia", "Asia", false);
createSeries("lamerica", "Latin America", true);
createSeries("meast", "Middle East", true);
createSeries("africa", "Africa", true);

// Add legend
chart.legend = new am4charts.Legend();

}); // end am4core.ready()


////////////////////////////////////////////mapa5//////////////////////////////////////////////////////


am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv5", am4charts.XYChart);
  
  //
  
  // Increase contrast by taking evey second color
  chart.colors.step = 2;
  
  // Add data
  chart.data = generateChartData();
  
  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 50;
  
  // Create series
  function createAxisAndSeries(field, name, opposite, bullet) {
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    if(chart.yAxes.indexOf(valueAxis) != 0){
      valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
    }
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.tensionX = 0.8;
    series.showOnInit = true;
    
    var interfaceColors = new am4core.InterfaceColorSet();
    
    switch(bullet) {
      case "triangle":
        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.width = 12;
        bullet.height = 12;
        bullet.horizontalCenter = "middle";
        bullet.verticalCenter = "middle";
        
        var triangle = bullet.createChild(am4core.Triangle);
        triangle.stroke = interfaceColors.getFor("background");
        triangle.strokeWidth = 2;
        triangle.direction = "top";
        triangle.width = 12;
        triangle.height = 12;
        break;
      case "rectangle":
        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.width = 10;
        bullet.height = 10;
        bullet.horizontalCenter = "middle";
        bullet.verticalCenter = "middle";
        
        var rectangle = bullet.createChild(am4core.Rectangle);
        rectangle.stroke = interfaceColors.getFor("background");
        rectangle.strokeWidth = 2;
        rectangle.width = 10;
        rectangle.height = 10;
        break;
      default:
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = interfaceColors.getFor("background");
        bullet.circle.strokeWidth = 2;
        break;
    }
    
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.opposite = opposite;
  }
  
  createAxisAndSeries("visits", "Visits", false, "circle");
  createAxisAndSeries("views", "Views", true, "triangle");
  createAxisAndSeries("hits", "Hits", true, "rectangle");
  
  // Add legend
  chart.legend = new am4charts.Legend();
  
  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  
  // generate some random data, quite different range
  function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);
    firstDate.setHours(0, 0, 0, 0);
  
    var visits = 1600;
    var hits = 2900;
    var views = 8700;
  
    for (var i = 0; i < 15; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      var newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
  
      visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
      hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
      views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
  
      chartData.push({
        date: newDate,
        visits: visits,
        hits: hits,
        views: views
      });
    }
    return chartData;
  }
  
  }); // end am4core.ready()

  ////////////////////////////////////////////mapa6//////////////////////////////////////////////////////


  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv6", am4charts.XYChart);
    
    // Add percent sign to all numbers
    chart.numberFormatter.numberFormat = "#.#'%'";
    
    // Add data
    chart.data = [{
        "country": "USA",
        "year2004": 3.5,
        "year2005": 4.2
    }, {
        "country": "UK",
        "year2004": 1.7,
        "year2005": 3.1
    }, {
        "country": "Canada",
        "year2004": 2.8,
        "year2005": 2.9
    }, {
        "country": "Japan",
        "year2004": 2.6,
        "year2005": 2.3
    }, {
        "country": "France",
        "year2004": 1.4,
        "year2005": 2.1
    }, {
        "country": "Brazil",
        "year2004": 2.6,
        "year2005": 4.9
    }];
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.title.fontWeight = 800;
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "year2004";
    series.dataFields.categoryX = "country";
    series.clustered = false;
    series.tooltipText = "GDP grow in {categoryX} (2004): [bold]{valueY}[/]";
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "year2005";
    series2.dataFields.categoryX = "country";
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(50);
    series2.tooltipText = "GDP grow in {categoryX} (2005): [bold]{valueY}[/]";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
    
    }); // end am4core.ready()







     ////////////////////////////////////////////mapa7//////////////////////////////////////////////////////

   
    

    

  
    am4core.ready(function() {
    
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      
      
      var container = am4core.create("chartdiv7", am4core.Container);
      container.width = am4core.percent(100);
      container.height = am4core.percent(100);
      container.layout = "vertical";
      
      createBulletChart(container, "solid");
      createBulletChart(container, "gradient");
      
      /* Create ranges */
      function createRange(axis, from, to, color) {
        var range = axis.axisRanges.create();
        range.value = from;
        range.endValue = to;
        range.axisFill.fill = color;
        range.axisFill.fillOpacity = 0.8;
        range.label.disabled = true;
        range.grid.disabled = true;
      }
      
      /* Create bullet chart with specified color type for background */
      function createBulletChart(parent, colorType) {
        var colors = ["#19d228", "#b4dd1e", "#f4fb16", "#f6d32b", "#fb7116"];
      
        /* Create chart instance */
        var chart = container.createChild(am4charts.XYChart);
        chart.paddingRight = 25;
      
        /* Add data */
        chart.data = [{
          "category": "Evaluation",
          "value": 65,
          "target": 78
        }];
      
        /* Create axes */
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.grid.template.disabled = true;
      
        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minGridDistance = 30;
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        valueAxis.numberFormatter.numberFormat = "#'%'";
        valueAxis.renderer.baseGrid.disabled = true;
      
        /* 
          In order to create separate background colors for each range of values, 
          you have to create multiple axisRange objects each with their own fill color 
        */
        if (colorType === "solid") {
          var start = 0, end = 20;
          for (var i = 0; i < 5; ++i) {
            createRange(valueAxis, start, end, am4core.color(colors[i]));
            start += 20;
            end += 20;
          }
        }
        /*
          In order to create a gradient background, only one axisRange object is needed
          and a gradient object can be assigned to the axisRange's fill property. 
        */
        else if (colorType === "gradient") {
          var gradient = new am4core.LinearGradient();
          for (var i = 0; i < 5; ++i) {
            // add each color that makes up the gradient
            gradient.addColor(am4core.color(colors[i]));
          }
          createRange(valueAxis, 0, 100, gradient);
        }
      
        /* Create series */
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = "value";
        series.dataFields.categoryY = "category";
        series.columns.template.fill = am4core.color("#000");
        series.columns.template.stroke = am4core.color("#fff");
        series.columns.template.strokeWidth = 1;
        series.columns.template.strokeOpacity = 0.5;
        series.columns.template.height = am4core.percent(25);
        series.tooltipText = "{value}"
      
      
        var series2 = chart.series.push(new am4charts.StepLineSeries());
        series2.dataFields.valueX = "target";
        series2.dataFields.categoryY = "category";
        series2.strokeWidth = 3;
        series2.noRisers = true;
        series2.startLocation = 0.15;
        series2.endLocation = 0.85;
        series2.tooltipText = "{valueX}"
        series2.stroke = am4core.color("#000");
      
        chart.cursor = new am4charts.XYCursor()
        chart.cursor.lineX.disabled = true;
        chart.cursor.lineY.disabled = true;
      
        valueAxis.cursorTooltipEnabled = false;
        chart.arrangeTooltips = false;
      }
      
      }); // end am4core.ready()
  

      ////////////////////////////////////////////mapa8//////////////////////////////////////////////////////


      
    
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv8", am4charts.XYChart);
    
    
    // Add data
    chart.data = [{
      "year": "2016",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 0.3,
      "meast": 0.2,
      "africa": 0.1
    }, {
      "year": "2017",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 0.3,
      "meast": 0.3,
      "africa": 0.1
    }, {
      "year": "2018",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 0.3,
      "meast": 0.3,
      "africa": 0.1
    }];
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;
    
    // Create series
    function createSeries(field, name) {
      
      // Set up series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = true;
      
      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
      
      // Add label
      var labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;
      
      return series;
    }
    
    createSeries("europe", "Europe");
    createSeries("namerica", "North America");
    createSeries("asia", "Asia-Pacific");
    createSeries("lamerica", "Latin America");
    createSeries("meast", "Middle-East");
    createSeries("africa", "Africa");
    
    // Legend
    chart.legend = new am4charts.Legend();
    
    }); // end am4core.ready()
    
 ////////////////////////////////////////////mapa9//////////////////////////////////////////////////////


      
    
 am4core.ready(function() {
    
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv9", am4charts.XYChart);
  
  
  // Add data
  chart.data = [{
    "year": "2016",
    "europe": 2.5,
    "namerica": 2.5,
    "asia": 2.1,
    "lamerica": 0.3,
    "meast": 0.2,
    "africa": 0.1
  }, {
    "year": "2017",
    "europe": 2.6,
    "namerica": 2.7,
    "asia": 2.2,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }, {
    "year": "2018",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
  }];
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = true;
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;
  
  // Create series
  function createSeries(field, name) {
    
    // Set up series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.name = name;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.sequencedInterpolation = true;
    
    // Make it stacked
    series.stacked = true;
    
    // Configure columns
    series.columns.template.width = am4core.percent(60);
    series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
    
    // Add label
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
    labelBullet.label.hideOversized = true;
    
    return series;
  }
  
  createSeries("europe", "Europe");
  createSeries("namerica", "North America");
  createSeries("asia", "Asia-Pacific");
  createSeries("lamerica", "Latin America");
  createSeries("meast", "Middle-East");
  createSeries("africa", "Africa");
  
  // Legend
  chart.legend = new am4charts.Legend();
  
  }); // end am4core.ready()


 ////////////////////////////////////////////mapa10//////////////////////////////////////////////////////


 am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv10", am4charts.PieChart);
  
  // Add data
  chart.data = [ {
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czechia",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }
  ];
  
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeOpacity = 1;
  
  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  
  chart.hiddenState.properties.radius = am4core.percent(0);
  
  
  }); // end am4core.ready()
  




 ////////////////////////////////////////////mapa11//////////////////////////////////////////////////////

 
 am4core.ready(function() {
    
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv11", am4charts.XYChart);
  
  // Add data
  chart.data = [
    {date:new Date(2019,5,12), value1:25, value2:30, value3:25, value4:20, previousDate:new Date(2019, 5, 5)},
    {date:new Date(2019,5,13), value1:60, value2:51, value3:40, value4:25, previousDate:new Date(2019, 5, 6)},
    {date:new Date(2019,5,14), value1:56, value2:58, value3:28, value4:25, previousDate:new Date(2019, 5, 7)},
    {date:new Date(2019,5,15), value1:52, value2:53, value3:55, value4:30, previousDate:new Date(2019, 5, 8)},
    {date:new Date(2019,5,16), value1:48, value2:44, value3:51, value4:25, previousDate:new Date(2019, 5, 9)},
    {date:new Date(2019,5,17), value1:47, value2:42, value3:40, value4:25, previousDate:new Date(2019, 5, 10)},
    {date:new Date(2019,5,18), value1:59, value2:55, value3:50, value4:30, previousDate:new Date(2019, 5, 11)},
    {date:new Date(2019,5,19), value1:20, value2:30, value3:40, value4:25, previousDate:new Date(2019, 5, 12)},
    {date:new Date(2019,5,20), value1:53, value2:51, value3:51, value4:25, previousDate:new Date(2019, 5, 13)},
    {date:new Date(2019,5,21), value1:56, value2:58, value3:28, value4:25, previousDate:new Date(2019, 5, 14)},
    {date:new Date(2019,5,22), value1:52, value2:53, value3:55, value4:40, previousDate:new Date(2019, 5, 15)},
    {date:new Date(2019,5,23), value1:48, value2:44, value3:51, value4:25, previousDate:new Date(2019, 5, 16)},
    {date:new Date(2019,5,24), value1:47, value2:42, value3:40, value4:30, previousDate:new Date(2019, 5, 17)},
    {date:new Date(2019,5,25), value1:59, value2:55, value3:50, value4:25, previousDate:new Date(2019, 5, 18)}
  ]
  
  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 50;
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value1";
  series.dataFields.dateX = "date";
  series.strokeWidth = 2;
  series.minBulletDistance = 10;
  series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
  series.tooltip.pointerOrientation = "vertical";
  


     // Create series
     var series3 = chart.series.push(new am4charts.LineSeries());
     series3.dataFields.valueY = "value3";
     series3.dataFields.dateX = "date";
     series3.strokeWidth = 2;
     series3.minBulletDistance = 10;
     series3.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
     series3.tooltip.pointerOrientation = "vertical";

  

     // Create series
     var series2 = chart.series.push(new am4charts.LineSeries());
     series2.dataFields.valueY = "value2";
     series2.dataFields.dateX = "date";
     series2.strokeWidth = 2;
     series2.minBulletDistance = 10;
     series2.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
     series2.tooltip.pointerOrientation = "vertical";

        // Create series
        var series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = "value4";
        series4.dataFields.dateX = "date";
        series4.strokeWidth = 2;
        series4.minBulletDistance = 10;
        series4.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
        series4.tooltip.pointerOrientation = "vertical";

  
  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = dateAxis;
  
  }); // end am4core.ready()
 
 
 ////////////////////////////////////////////mapa12//////////////////////////////////////////////////////

 am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  var chart = am4core.create("chartdiv12", am4charts.XYChart);
  chart.padding(0, 15, 0, 15);
  chart.colors.step = 3;
  
  var data = [];
  var price1 = 1000;
  var price2 = 2000;
  var price3 = 3000;
  var quantity = 1000;
  for (var i = 15; i < 3000; i++) {
    price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
    price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
    price3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
  
    if (price1 < 100) {
      price1 = 100;
    }
  
    if (price2 < 100) {
      price2 = 100;
    }
  
    if (price3 < 100) {
      price3 = 100;
    }    
  
    quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 500);
  
    if (quantity < 0) {
      quantity *= -1;
    }
    data.push({ date: new Date(2000, 0, i), price1: price1, price2:price2, price3:price3, quantity: quantity });
  }
  
  
  chart.data = data;
  // the following line makes value axes to be arranged vertically.
  chart.leftAxesContainer.layout = "vertical";
  
  // uncomment this line if you want to change order of axes
  //chart.bottomAxesContainer.reverseOrder = true;
  
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.ticks.template.length = 8;
  dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
  dateAxis.renderer.grid.template.disabled = true;
  dateAxis.renderer.ticks.template.disabled = false;
  dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
  dateAxis.renderer.minLabelPosition = 0.01;
  dateAxis.renderer.maxLabelPosition = 0.99;
  dateAxis.keepSelection = true;
  
  dateAxis.groupData = true;
  dateAxis.minZoomCount = 5;
  
  // these two lines makes the axis to be initially zoomed-in
  // dateAxis.start = 0.7;
  // dateAxis.keepSelection = true;
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.zIndex = 1;
  valueAxis.renderer.baseGrid.disabled = true;
  // height of axis
  valueAxis.height = am4core.percent(65);
  
  valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
  valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
  valueAxis.renderer.inside = true;
  valueAxis.renderer.labels.template.verticalCenter = "bottom";
  valueAxis.renderer.labels.template.padding(2, 2, 2, 2);
  
  //valueAxis.renderer.maxLabelPosition = 0.95;
  valueAxis.renderer.fontSize = "0.8em"
  
  var series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.dateX = "date";
  series1.dataFields.valueY = "price1";
  series1.dataFields.valueYShow = "changePercent";
  series1.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
  series1.name = "Hermosillo";
  series1.tooltip.getFillFromObject = false;
  series1.tooltip.getStrokeFromObject = true;
  series1.tooltip.background.fill = am4core.color("#fff");
  series1.tooltip.background.strokeWidth = 2;
  series1.tooltip.label.fill = series1.stroke;
  
  var series2 = chart.series.push(new am4charts.LineSeries());
  series2.dataFields.dateX = "date";
  series2.dataFields.valueY = "price2";
  series2.dataFields.valueYShow = "changePercent";
  series2.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
  series2.name = "Obregon";
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.getStrokeFromObject = true;
  series2.tooltip.background.fill = am4core.color("#fff");
  series2.tooltip.background.strokeWidth = 2;
  series2.tooltip.label.fill = series2.stroke;
  
  var series3 = chart.series.push(new am4charts.LineSeries());
  series3.dataFields.dateX = "date";
  series3.dataFields.valueY = "price3";
  series3.dataFields.valueYShow = "changePercent";
  series3.tooltipText = "{name}: {valueY.changePercent.formatNumber('[#0c0]+#.00|[#c00]#.##|0')}%";
  series3.name = "Nogales";
  series3.tooltip.getFillFromObject = false;
  series3.tooltip.getStrokeFromObject = true;
  series3.tooltip.background.fill = am4core.color("#fff");
  series3.tooltip.background.strokeWidth = 2;
  series3.tooltip.label.fill = series3.stroke;
  
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.tooltip.disabled = true;
  // height of axis
  valueAxis2.height = am4core.percent(35);
  valueAxis2.zIndex = 3
  // this makes gap between panels
  valueAxis2.marginTop = 30;
  valueAxis2.renderer.baseGrid.disabled = true;
  valueAxis2.renderer.inside = true;
  valueAxis2.renderer.labels.template.verticalCenter = "bottom";
  valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
  //valueAxis.renderer.maxLabelPosition = 0.95;
  valueAxis2.renderer.fontSize = "0.8em";
  
  valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
  valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
  
  var volumeSeries = chart.series.push(new am4charts.StepLineSeries());
  volumeSeries.fillOpacity = 1;
  volumeSeries.fill = series1.stroke;
  volumeSeries.stroke = series1.stroke;
  volumeSeries.dataFields.dateX = "date";
  volumeSeries.dataFields.valueY = "quantity";
  volumeSeries.yAxis = valueAxis2;
  volumeSeries.tooltipText = "Navojoa {valueY.value}";
  volumeSeries.name = "Series 2";
  // volume should be summed
  volumeSeries.groupFields.valueY = "sum";
  volumeSeries.tooltip.label.fill = volumeSeries.stroke;
  chart.cursor = new am4charts.XYCursor();
  
  var scrollbarX = new am4charts.XYChartScrollbar();
  scrollbarX.series.push(series1);
  scrollbarX.marginBottom = 20;
  var sbSeries = scrollbarX.scrollbarChart.series.getIndex(0);
  sbSeries.dataFields.valueYShow = undefined;
  chart.scrollbarX = scrollbarX;
  
  // Add range selector
  var selector = new am4plugins_rangeSelector.DateAxisRangeSelector();
  selector.container = document.getElementById("controls");
  selector.axis = dateAxis;
  
  }); // end am4core.ready()


  ////////////////////////////////////////////mapa13//////////////////////////////////////////////////////



});
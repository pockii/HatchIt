import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './chart.css';

am4core.useTheme(am4themes_animated);

export default class Chart extends Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.PieChart);

        // Add data
        chart.data = this.props.data;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "totalHappinessGained";
        pieSeries.dataFields.category = "event";
        pieSeries.labels.template.disabled = true;

        chart.legend = new am4charts.Legend();
        chart.legend.scrollable = true;

        chart.radius = am4core.percent(85);
        chart.responsive.enabled = true;

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div>
                <script src="https://www.amcharts.com/lib/4/core.js"></script>
                <script src="https://www.amcharts.com/lib/4/charts.js"></script>
                <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
                <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
            </div>
        );
    }
}

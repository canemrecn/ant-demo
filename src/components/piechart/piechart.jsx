// DemoPie.jsx
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HC_accessibility from 'highcharts/modules/accessibility';

// Erişilebilirlik modülünü Highcharts'a dahil et
HC_accessibility(Highcharts);

const DemoPie = () => {
  useEffect(() => {
    // Grafik için benzersiz bir container ID'si kullanın
    Highcharts.chart('demopie-container', {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        valueSuffix: '%'
      },
      subtitle: {
        text: ''
      },
      accessibility: {
        enabled: false // Erişilebilirlik uyarısını devre dışı bırakır
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
            enabled: true,
            distance: 20
          }, {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7
            },
            filter: {
              property: 'percentage',
              operator: '>',
              value: 10
            }
          }]
        }
      },
      series: [{
        name: 'Yüzde',
        colorByPoint: true,
        data: [{
          name: 'Çürük',
          y: 55.02
        }, {
          name: 'Olgun',
          sliced: true,
          selected: true,
          y: 26.71
        }, {
        }, {
          name: 'Ham',
          y: 15.5
        }, {
        }]
      }]
    });
  }, []);



  

  return <div id="demopie-container"></div>;
};

export default DemoPie;

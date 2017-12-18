<template>
  <div ref="wordsSpecsPlot" data-aos="fade" class="graph"></div>
</template>

<script>
  import Plotly from 'plotly.js/dist/plotly.min';

  export default {
    name: 'words-specs-plot',
    mounted() {
      const data = [{
        x: [-15.0798692703, -16.1663627625, -13.8213100433, -12.3239746094, -12.7688102722, -12.4210414886, -9.60292243958, -11.1745100021, -10.5744829178, -14.4207210541, -15.4991512299, -14.1209821701, -13.1420278549, -13.3476858139, -12.5964832306, -12.4086589813, -12.3430404663, -11.7606019974, -14.9298839569, -12.91588974, -12.3357686996, -10.4860200882, -12.143371582, -13.0557146072, -12.4977226257, -16.9342079163, -12.6129179001, -9.54319000244, -14.7307853699, -12.4704494476, -12.6950998306, -12.3738069534, -16.1219825745, -14.9163007736, -12.6794662476, -12.8089475632, -13.9523096085, -11.7091884613, -12.0751676559, -17.2274093628, -19.4272613525, -13.9891080856, -17.2188072205, -16.9548244476, -14.9710111618, -13.3332014084, -13.5277462006, -13.005906105, -14.3005933762, -13.1932764053, -10.9946269989, -12.871796608, -12.2501487732, -11.0390987396, -12.8147602081, -12.8654851913, -11.8669595718, -13.1950073242, -13.1455287933, -9.99597930908, -11.1847143173, -12.0575265884, -13.0641880035, -12.838227272, -13.6822900772, -12.1006526947, -19.4251728058, -14.0149869919, -13.032784462, -13.7184295654, -10.7620420456, -12.0815010071, -13.1637468338, -9.56863498688, -13.7260560989, -12.7165260315, -10.9832649231, -11.8318719864, -12.0000782013, -11.5589160919, -9.89918136597, -18.2923774719, -14.3723831177, -13.1206903458, -11.1070041656, -14.6390504837, -12.2479028702, -11.3084335327, -11.3780059814, -14.9519386292, -11.2684431076, -11.2149600983, -10.3702220917, -11.0595779419, -11.8156166077, -13.2534341812, -13.4473562241, -13.8260602951, -12.9782018661, -11.1173601151, -10.7610712051, -14.8766345978, -11.6040496826, -11.666727066, -10.5482292175],
        y: [59.4366874695, 58.2784805298, 55.9402618408, 62.5308952332, 60.9957733154, 58.7715301514, 57.9858322144, 56.8904914856, 60.834400177, 61.6671829224, 61.0707702637, 53.462726593, 52.5293769836, 59.5665550232, 62.2662086487, 62.6168556213, 61.5174369812, 56.0301704407, 59.5022964478, 54.1605644226, 61.0838279724, 62.0597572327, 60.3727760315, 60.1433906555, 62.9652824402, 60.8782997131, 60.3412971497, 58.3854484558, 59.5883522034, 62.9669570923, 61.5741844177, 61.6893463135, 55.385433197, 52.5361557007, 60.8558502197, 61.3426208496, 61.957862854, 60.8451919556, 56.9429588318, 60.8216552734, 55.8651695251, 62.2076072693, 60.7383956909, 60.8234024048, 52.4347839355, 62.7629966736, 61.230052948, 62.4090690613, 58.114528656, 61.3484382629, 56.8021125793, 59.1004104614, 57.4469566345, 57.7360343933, 57.3678512573, 57.1427574158, 58.7974510193, 60.0126686096, 60.687713623, 57.0733909607, 55.8729553223, 62.0855903625, 62.2268867493, 61.9994125366, 56.0847358704, 57.7564697266, 55.8702430725, 59.9443435669, 60.9181594849, 59.7193374634, 56.3488540649, 61.4932785034, 62.0819664001, 57.1061859131, 62.0814743042, 52.3403434753, 58.5018119812, 60.5229148865, 58.7560920715, 58.376663208, 56.3249282837, 60.391544342, 61.5535011292, 61.5498123169, 56.8339271545, 61.611492157, 57.8582687378, 56.7366600037, 58.9360160828, 52.4202308655, 61.2749938965, 59.6940193176, 55.394443512, 53.6035575867, 58.8022384644, 59.9105567932, 57.8715820312, 55.9300041199, 61.3301467896, 59.4595565796, 58.9571990967, 57.6947097778, 56.2330627441, 57.6994361877, 56.8246116638],
        marker: {
          size: 3,
          symbol: 'dot'
        },
        mode: 'markers',
        type: 'scatter',
      }];

      Plotly.newPlot(this.$refs.wordsSpecsPlot, data, {
        title: 'Computer specifications words cluster',
        xaxis: {
          title: "X",
          tickformat: ".2f"
        },
        yaxis: {
          title: "Y",
          tickformat: ".2f"
        },
        margin: {
          t: 30,
          b: 40
        },
        annotations: [
          {
            x: -15.0748692703,
            y: 59.4416874695,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'window',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -16.1613627625,
            y: 58.2834805298,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'driver',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.8163100433,
            y: 55.9452618408,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'requirement',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.3189746094,
            y: 62.5358952332,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'amd',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.7638102722,
            y: 61.0007733154,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'videocard',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.4160414886,
            y: 58.7765301514,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'xp',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -9.59792243958,
            y: 57.9908322144,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'computer',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.1695100021,
            y: 56.8954914856,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'videocards',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.5694829178,
            y: 60.839400177,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'cpu',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.4157210541,
            y: 61.6721829224,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'gigabyte',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -15.4941512299,
            y: 61.0757702637,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'harddrive',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.1159821701,
            y: 53.467726593,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'resolution',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.1370278549,
            y: 52.5343769836,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '720',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.3426858139,
            y: 59.5715550232,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'laptop',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.5914832306,
            y: 62.2712086487,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'evga',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.4036589813,
            y: 62.6218556213,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'gtx',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.3380404663,
            y: 61.5224369812,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '580',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.7556019974,
            y: 56.0351704407,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '1920',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.9248839569,
            y: 59.5072964478,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'windows',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.91088974,
            y: 54.1655644226,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'monitor',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.3307686996,
            y: 61.0888279724,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '560ti',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.4810200882,
            y: 62.0647572327,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'maxed',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.138371582,
            y: 60.3777760315,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'dx11',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.0507146072,
            y: 60.1483906555,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'compliant',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.4927226257,
            y: 62.9702824402,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'ati',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -16.9292079163,
            y: 60.8832997131,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'card',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.6079179001,
            y: 60.3462971497,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'directx',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -9.53819000244,
            y: 58.3904484558,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'bsod',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.7257853699,
            y: 59.5933522034,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'vista',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.4654494476,
            y: 62.9719570923,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'nvidia',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.6900998306,
            y: 61.5791844177,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '460',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.3688069534,
            y: 61.6943463135,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'overclocked',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -16.1169825745,
            y: 55.390433197,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '2000',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.9113007736,
            y: 52.5411557007,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '480p',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.6744662476,
            y: 60.8608502197,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'gtx460',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.8039475632,
            y: 61.3476208496,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'gtx560ti',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.9473096085,
            y: 61.962862854,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '2gb',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.7041884613,
            y: 60.8501919556,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'gfx',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.0701676559,
            y: 56.9479588318,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'rig',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -17.2224093628,
            y: 60.8266552734,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'memory',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -19.4222613525,
            y: 55.8701695251,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'compatible',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.9841080856,
            y: 62.2126072693,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'mb',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -17.2138072205,
            y: 60.7433956909,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '1019',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -16.9498244476,
            y: 60.8284024048,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'cardi',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.9660111618,
            y: 52.4397839355,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'hdtv',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.3282014084,
            y: 62.7679966736,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'processor',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.5227462006,
            y: 61.235052948,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '4mb',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.000906105,
            y: 62.4140690613,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'ram',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.2955933762,
            y: 58.119528656,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '1mb',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.1882764053,
            y: 61.3534382629,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '128',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.9896269989,
            y: 56.8071125793,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'cf',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.866796608,
            y: 59.1054104614,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'cache',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.2451487732,
            y: 57.4519566345,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'dual',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.0340987396,
            y: 57.7410343933,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'crossfire',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.8097602081,
            y: 57.3728512573,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'specification',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.8604851913,
            y: 57.1477574158,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'spec',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.8619595718,
            y: 58.8024510193,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '2x',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.1900073242,
            y: 60.0176686096,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'win98',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.1405287933,
            y: 60.692713623,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'winxp',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -9.99097930908,
            y: 57.0783909607,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '196',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.1797143173,
            y: 55.8779553223,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'ultra',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.0525265884,
            y: 62.0905903625,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'p4',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.0591880035,
            y: 62.2318867493,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '64mb',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.833227272,
            y: 62.0044125366,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'agp',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.6772900772,
            y: 56.0897358704,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'requirments',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.0956526947,
            y: 57.7614697266,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '300mhz',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -19.4201728058,
            y: 55.8752430725,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'compatibility',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.0099869919,
            y: 59.9493435669,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '64bit',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.027784462,
            y: 60.9231594849,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '32bit',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.7134295654,
            y: 59.7243374634,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'o',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.7570420456,
            y: 56.3538540649,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'ran',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.0765010071,
            y: 61.4982785034,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'quad',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.1587468338,
            y: 62.0869664001,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '256',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -9.56363498688,
            y: 57.1111859131,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'byte',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.7210560989,
            y: 62.0864743042,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'meg',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.7115260315,
            y: 52.3453434753,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'inch',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.9782649231,
            y: 58.5068119812,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'tm',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.8268719864,
            y: 60.5279148865,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'fx',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.9950782013,
            y: 58.7610920715,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '2100',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.5539160919,
            y: 58.381663208,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'tnt',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -9.89418136597,
            y: 56.3299282837,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'equivalent',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -18.2873774719,
            y: 60.396544342,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '59',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.3673831177,
            y: 61.5585011292,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'megabyte',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.1156903458,
            y: 61.5548123169,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'vram',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.1020041656,
            y: 56.8389271545,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'voodoo2',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.6340504837,
            y: 61.616492157,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'gb',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.2429028702,
            y: 57.8632687378,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'onboard',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.3034335327,
            y: 56.7416600037,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'voodoo5',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.3730059814,
            y: 58.9410160828,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'saphire',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.9469386292,
            y: 52.4252308655,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'lcd',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.2634431076,
            y: 61.2799938965,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '450',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.2099600983,
            y: 59.6990193176,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'x2',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.3652220917,
            y: 55.399443512,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'mac',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.0545779419,
            y: 53.6085575867,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'processing',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.8106166077,
            y: 58.8072384644,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'mah',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.2484341812,
            y: 59.9155567932,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'cdrom',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.4423562241,
            y: 57.8765820313,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'operating',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -13.8210602951,
            y: 55.9350041199,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'minimum',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -12.9732018661,
            y: 61.3351467896,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '7800',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.1123601151,
            y: 59.4645565796,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'x4',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.7560712051,
            y: 58.9621990967,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'chip',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -14.8716345978,
            y: 57.6997097778,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '01',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.5990496826,
            y: 56.2380627441,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'jaggedy',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -11.661727066,
            y: 57.7044361877,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: '9000',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          },
          {
            x: -10.5432292175,
            y: 56.8296116638,
            align: 'left',
            font: {
              color: '#262626',
              size: 11.0
            },
            opacity: 1,
            showarrow: false,
            text: 'equivelent',
            xanchor: 'left',
            xref: 'x1',
            yanchor: 'bottom',
            yref: 'y1'
          }
        ],
      }, {
        displayModeBar: false
      });
    }
  }
</script>

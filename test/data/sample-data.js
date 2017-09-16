/*
You only have to add non-default parameters here!
*/

const curTime = new Date().getTime();
const sampleData = {};
sampleData.navtiming = {
  injectJS: {
    timing: {
      navigationStart: curTime,
      unloadEventStart: curTime + 400,
      unloadEventEnd: curTime + 401,
      redirectStart: 0,
      redirectEnd: 0,
      fetchStart: curTime,
      domainLookupStart: curTime,
      domainLookupEnd: curTime,
      connectStart: curTime,
      connectEnd: curTime,
      secureConnectionStart: 0,
      requestStart: curTime + 9,
      responseStart: curTime + 594,
      responseEnd: curTime + 638,
      domLoading: curTime + 650,
      domInteractive: curTime + 1175,
      domContentLoadedEventStart: curTime + 1175,
      domContentLoadedEventEnd: curTime + 1245,
      domComplete: curTime + 1735,
      loadEventStart: curTime + 1735,
      loadEventEnd: curTime + 1742
    },
    resources: [
      { name: 'https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons', entryType: 'resource', startTime: 663.8050000000001, duration: 90.68500000000006, initiatorType: 'link', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 663.8050000000001, domainLookupStart: 663.8050000000001, domainLookupEnd: 663.8050000000001, connectStart: 663.8050000000001, connectEnd: 663.8050000000001, secureConnectionStart: 0, requestStart: 671, responseStart: 747.99, responseEnd: 754.4900000000001, transferSize: 2252, encodedBodySize: 2160, decodedBodySize: 23889 },
      { name: 'https://developers.google.com/_static/66ebbcad58/css/devsite-google-blue.css', entryType: 'resource', startTime: 663.9300000000001, duration: 28.430000000000064, initiatorType: 'link', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 663.9300000000001, domainLookupStart: 663.9300000000001, domainLookupEnd: 663.9300000000001, connectStart: 663.9300000000001, connectEnd: 663.9300000000001, secureConnectionStart: 0, requestStart: 672.3050000000001, responseStart: 686.67, responseEnd: 692.3600000000001, transferSize: 25837, encodedBodySize: 25723, decodedBodySize: 176010 },
      { name: 'https://developers.google.com/_static/66ebbcad58/js/jquery-bundle.js', entryType: 'resource', startTime: 664.0400000000001, duration: 83.755, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.0400000000001, domainLookupStart: 664.0400000000001, domainLookupEnd: 664.0400000000001, connectStart: 664.0400000000001, connectEnd: 664.0400000000001, secureConnectionStart: 0, requestStart: 673.3100000000001, responseStart: 691.79, responseEnd: 747.7950000000001, transferSize: 31613, encodedBodySize: 31490, decodedBodySize: 88412 },
      { name: 'https://developers.google.com/web/images/web-fundamentals-icon192x192.png', entryType: 'resource', startTime: 664.12, duration: 435.6250000000001, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.12, domainLookupStart: 664.12, domainLookupEnd: 664.12, connectStart: 664.12, connectEnd: 664.12, secureConnectionStart: 0, requestStart: 942.71, responseStart: 1097.385, responseEnd: 1099.7450000000001, transferSize: 10304, encodedBodySize: 10209, decodedBodySize: 10209 },
      { name: 'https://lh5.googleusercontent.com/-pn324DdbQwI/AAAAAAAAAAI/AAAAAAAAAB0/4VUTR9AI6gs/photo.jpg?sz=64', entryType: 'resource', startTime: 664.2, duration: 318.24, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.2, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 982.44, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://developers.google.com/web/fundamentals/performance/images/oce.png', entryType: 'resource', startTime: 664.2750000000001, duration: 437.96000000000004, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.2750000000001, domainLookupStart: 664.2750000000001, domainLookupEnd: 664.2750000000001, connectStart: 664.2750000000001, connectEnd: 664.2750000000001, secureConnectionStart: 0, requestStart: 944.6450000000001, responseStart: 1100.8500000000001, responseEnd: 1102.2350000000001, transferSize: 1929, encodedBodySize: 1857, decodedBodySize: 1857 },
      { name: 'https://developers.google.com/web/fundamentals/performance/images/crp.png', entryType: 'resource', startTime: 664.42, duration: 473.21000000000015, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.42, domainLookupStart: 664.42, domainLookupEnd: 664.42, connectStart: 664.42, connectEnd: 664.42, secureConnectionStart: 0, requestStart: 945.6850000000001, responseStart: 1133.4950000000001, responseEnd: 1137.63, transferSize: 723, encodedBodySize: 587, decodedBodySize: 587 },
      { name: 'https://developers.google.com/web/fundamentals/performance/images/rend.png', entryType: 'resource', startTime: 664.575, duration: 447.9000000000001, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.575, domainLookupStart: 664.575, domainLookupEnd: 664.575, connectStart: 664.575, connectEnd: 664.575, secureConnectionStart: 0, requestStart: 946.9250000000002, responseStart: 1110.8100000000002, responseEnd: 1112.4750000000001, transferSize: 1618, encodedBodySize: 1547, decodedBodySize: 1547 },
      { name: 'https://developers.google.com/web/fundamentals/performance/images/low.png', entryType: 'resource', startTime: 664.6800000000001, duration: 536.1399999999999, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.6800000000001, domainLookupStart: 664.6800000000001, domainLookupEnd: 664.6800000000001, connectStart: 664.6800000000001, connectEnd: 664.6800000000001, secureConnectionStart: 0, requestStart: 980.6550000000001, responseStart: 1198.3300000000002, responseEnd: 1200.82, transferSize: 777, encodedBodySize: 705, decodedBodySize: 705 },
      { name: 'https://developers.google.com/web/fundamentals/performance/images/prpl.png', entryType: 'resource', startTime: 664.76, duration: 681.54, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.76, domainLookupStart: 664.76, domainLookupEnd: 664.76, connectStart: 664.76, connectEnd: 664.76, secureConnectionStart: 0, requestStart: 1021.1300000000001, responseStart: 1343.9350000000002, responseEnd: 1346.3, transferSize: 605, encodedBodySize: 398, decodedBodySize: 398 },
      { name: 'https://www.gstatic.com/images/icons/material/product/2x/chrome_chromium_64dp.png', entryType: 'resource', startTime: 664.835, duration: 317.47, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.835, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 982.3050000000001, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://developers.google.com/site-assets/logo-github.svg', entryType: 'resource', startTime: 664.91, duration: 572.195, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.91, domainLookupStart: 664.91, domainLookupEnd: 664.91, connectStart: 664.91, connectEnd: 664.91, secureConnectionStart: 0, requestStart: 1104.1000000000001, responseStart: 1235.13, responseEnd: 1237.105, transferSize: 734, encodedBodySize: 661, decodedBodySize: 1165 },
      { name: 'https://developers.google.com/site-assets/logo-twitter.svg', entryType: 'resource', startTime: 664.9900000000001, duration: 578.7300000000001, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 664.9900000000001, domainLookupStart: 664.9900000000001, domainLookupEnd: 664.9900000000001, connectStart: 664.9900000000001, connectEnd: 664.9900000000001, secureConnectionStart: 0, requestStart: 1105.67, responseStart: 1241.91, responseEnd: 1243.7200000000003, transferSize: 890, encodedBodySize: 783, decodedBodySize: 1275 },
      { name: 'https://www.gstatic.com/images/icons/material/product/2x/youtube_64dp.png', entryType: 'resource', startTime: 665.07, duration: 317.26, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.07, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 982.33, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://developers.google.com/_static/66ebbcad58/images/redesign-14/lockup-color-knockout.png', entryType: 'resource', startTime: 665.1600000000001, duration: 466.47, initiatorType: 'img', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.1600000000001, domainLookupStart: 665.1600000000001, domainLookupEnd: 665.1600000000001, connectStart: 665.1600000000001, connectEnd: 665.1600000000001, secureConnectionStart: 0, requestStart: 1115.19, responseStart: 1129.52, responseEnd: 1131.63, transferSize: 4888, encodedBodySize: 4840, decodedBodySize: 4840 },
      { name: 'https://www.gstatic.com/feedback/api.js', entryType: 'resource', startTime: 665.2450000000001, duration: 317.095, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.2450000000001, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 982.3400000000001, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://developers.google.com/_static/66ebbcad58/js/jquery_ui-bundle.js', entryType: 'resource', startTime: 665.325, duration: 113.76499999999999, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.325, domainLookupStart: 665.325, domainLookupEnd: 665.325, connectStart: 665.325, connectEnd: 665.325, secureConnectionStart: 0, requestStart: 757.8900000000001, responseStart: 773.8000000000001, responseEnd: 779.09, transferSize: 65394, encodedBodySize: 65292, decodedBodySize: 241692 },
      { name: 'https://developers.google.com/_static2/66ebbcad58/jsi18n/', entryType: 'resource', startTime: 665.39, duration: 266.1650000000001, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.39, domainLookupStart: 665.39, domainLookupEnd: 665.39, connectStart: 665.39, connectEnd: 665.39, secureConnectionStart: 0, requestStart: 782.1300000000001, responseStart: 930.0100000000001, responseEnd: 931.5550000000001, transferSize: 894, encodedBodySize: 746, decodedBodySize: 2372 },
      { name: 'https://developers.google.com/_static/66ebbcad58/js/script_foot_closure.js', entryType: 'resource', startTime: 665.45, duration: 299.31500000000005, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.45, domainLookupStart: 665.45, domainLookupEnd: 665.45, connectStart: 665.45, connectEnd: 665.45, secureConnectionStart: 0, requestStart: 936.97, responseStart: 950.13, responseEnd: 964.7650000000001, transferSize: 80062, encodedBodySize: 80011, decodedBodySize: 238331 },
      { name: 'https://developers.google.com/_static/66ebbcad58/js/script_foot.js', entryType: 'resource', startTime: 665.51, duration: 310.34000000000015, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 665.51, domainLookupStart: 665.51, domainLookupEnd: 665.51, connectStart: 665.51, connectEnd: 665.51, secureConnectionStart: 0, requestStart: 941.2950000000001, responseStart: 963.0150000000001, responseEnd: 975.8500000000001, transferSize: 56859, encodedBodySize: 56808, decodedBodySize: 183285 },
      { name: 'https://www.gstatic.com/og/_/js/k=og.og.en_US.H1sL-BDMepc.O/rt=j/m=ld,gl,is,id,nb,nw,sb,sd,p,vd,awd,st,lod,eld,ip,dp,cpd,drt,bd,bg/exm=bt,base,bn,bu,cp,el,lo,sbi,ni,sf,up,dd,aw,iw,if,gi,vi,pi,eq,uc/d=1/ed=1/rs=AA2YrTsrOov6DXFSjVrH2K9IEiNfi6Tl_A', entryType: 'resource', startTime: 894.85, duration: 124.44500000000005, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 894.85, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 1019.2950000000001, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://fonts.gstatic.com/s/roboto/v16/CWB0XYA8bzo0kSThX0UTuA.woff2', entryType: 'resource', startTime: 951.235, duration: 42.90000000000009, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 951.235, domainLookupStart: 951.235, domainLookupEnd: 951.235, connectStart: 951.235, connectEnd: 951.235, secureConnectionStart: 0, requestStart: 965.08, responseStart: 991.6150000000001, responseEnd: 994.1350000000001, transferSize: 14630, encodedBodySize: 14600, decodedBodySize: 14600 },
      { name: 'https://fonts.gstatic.com/s/roboto/v16/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2', entryType: 'resource', startTime: 951.59, duration: 59.69000000000017, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 951.59, domainLookupStart: 951.59, domainLookupEnd: 951.59, connectStart: 951.59, connectEnd: 951.59, secureConnectionStart: 0, requestStart: 970.365, responseStart: 1005.4300000000001, responseEnd: 1011.2800000000002, transferSize: 14779, encodedBodySize: 14748, decodedBodySize: 14748 },
      { name: 'https://fonts.gstatic.com/s/materialicons/v29/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2', entryType: 'resource', startTime: 952.0750000000002, duration: 60.469999999999914, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 952.0750000000002, domainLookupStart: 952.0750000000002, domainLookupEnd: 952.0750000000002, connectStart: 952.0750000000002, connectEnd: 952.0750000000002, secureConnectionStart: 0, requestStart: 972.825, responseStart: 1007.4050000000001, responseEnd: 1012.5450000000001, transferSize: 48666, encodedBodySize: 48636, decodedBodySize: 48636 },
      { name: 'https://fonts.gstatic.com/s/roboto/v16/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2', entryType: 'resource', startTime: 953.3950000000001, duration: 58.94999999999993, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 953.3950000000001, domainLookupStart: 953.3950000000001, domainLookupEnd: 953.3950000000001, connectStart: 953.3950000000001, connectEnd: 953.3950000000001, secureConnectionStart: 0, requestStart: 974.6000000000001, responseStart: 1007.8250000000002, responseEnd: 1012.345, transferSize: 14710, encodedBodySize: 14680, decodedBodySize: 14680 },
      { name: 'https://developers.google.com/_static/66ebbcad58/images/redesign-14/nav-status-experimental.svg', entryType: 'resource', startTime: 956.1600000000001, duration: 58.07000000000005, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 956.1600000000001, domainLookupStart: 956.1600000000001, domainLookupEnd: 956.1600000000001, connectStart: 956.1600000000001, connectEnd: 956.1600000000001, secureConnectionStart: 0, requestStart: 981.0600000000001, responseStart: 1009.385, responseEnd: 1014.2300000000001, transferSize: 304, encodedBodySize: 236, decodedBodySize: 285 },
      { name: 'https://fonts.gstatic.com/s/roboto/v16/vPcynSL0qHq_6dX7lKVByfesZW2xOQ-xsNqO47m55DA.woff2', entryType: 'resource', startTime: 1056.84, duration: 17.595000000000027, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1056.84, domainLookupStart: 1056.84, domainLookupEnd: 1056.84, connectStart: 1056.84, connectEnd: 1056.84, secureConnectionStart: 0, requestStart: 1060.27, responseStart: 1072.97, responseEnd: 1074.435, transferSize: 16235, encodedBodySize: 16204, decodedBodySize: 16204 },
      { name: 'https://fonts.gstatic.com/s/roboto/v16/Hgo13k-tfSpn0qi1SFdUfVtXRa8TVwTICgirnJhmVJw.woff2', entryType: 'resource', startTime: 1057.04, duration: 20.950000000000045, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1057.04, domainLookupStart: 1057.04, domainLookupEnd: 1057.04, connectStart: 1057.04, connectEnd: 1057.04, secureConnectionStart: 0, requestStart: 1060.8600000000001, responseStart: 1075.7250000000001, responseEnd: 1077.99, transferSize: 14726, encodedBodySize: 14696, decodedBodySize: 14696 },
      { name: 'https://fonts.gstatic.com/s/roboto/v16/oHi30kwQWvpCWqAhzHcCSBJtnKITppOI_IvcXXDNrsc.woff2', entryType: 'resource', startTime: 1076.4550000000002, duration: 20.009999999999764, initiatorType: 'css', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1076.4550000000002, domainLookupStart: 1076.4550000000002, domainLookupEnd: 1076.4550000000002, connectStart: 1076.4550000000002, connectEnd: 1076.4550000000002, secureConnectionStart: 0, requestStart: 1079.9650000000001, responseStart: 1094.4900000000002, responseEnd: 1096.465, transferSize: 9944, encodedBodySize: 9920, decodedBodySize: 9920 },
      { name: 'https://developers.google.com/_s/getsuggestions?hl=en&p=%2Fweb%2F&s=devsite&c=2', entryType: 'resource', startTime: 1211.2, duration: 350.2500000000002, initiatorType: 'xmlhttprequest', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1211.2, domainLookupStart: 1211.2, domainLookupEnd: 1211.2, connectStart: 1211.2, connectEnd: 1211.2, secureConnectionStart: 0, requestStart: 1215.765, responseStart: 1557.5100000000002, responseEnd: 1561.4500000000003, transferSize: 30568, encodedBodySize: 30512, decodedBodySize: 165049 },
      { name: 'https://developers.google.com/_s/getsuggestions?hl=en&s=devsite&c=1', entryType: 'resource', startTime: 1211.63, duration: 196.3800000000001, initiatorType: 'xmlhttprequest', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1211.63, domainLookupStart: 1211.63, domainLookupEnd: 1211.63, connectStart: 1211.63, connectEnd: 1211.63, secureConnectionStart: 0, requestStart: 1216.31, responseStart: 1401.89, responseEnd: 1408.0100000000002, transferSize: 4163, encodedBodySize: 4094, decodedBodySize: 18263 },
      { name: 'https://developers.google.com/_s/getsuggestions?hl=en&p=%2Fweb%2F&s=devsite&c=3', entryType: 'resource', startTime: 1211.97, duration: 164.2800000000002, initiatorType: 'xmlhttprequest', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1211.97, domainLookupStart: 1211.97, domainLookupEnd: 1211.97, connectStart: 1211.97, connectEnd: 1211.97, secureConnectionStart: 0, requestStart: 1216.6750000000002, responseStart: 1373.4, responseEnd: 1376.2500000000002, transferSize: 87, encodedBodySize: 33, decodedBodySize: 13 },
      { name: 'https://developers.google.com/_s/getsuggestions?hl=en&s=cloud&c=1', entryType: 'resource', startTime: 1212.2300000000002, duration: 146.7449999999999, initiatorType: 'xmlhttprequest', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1212.2300000000002, domainLookupStart: 1212.2300000000002, domainLookupEnd: 1212.2300000000002, connectStart: 1212.2300000000002, connectEnd: 1212.2300000000002, secureConnectionStart: 0, requestStart: 1218.52, responseStart: 1357.1950000000002, responseEnd: 1358.9750000000001, transferSize: 1052, encodedBodySize: 942, decodedBodySize: 3832 },
      { name: 'https://developers.google.com/profile/userhistory', entryType: 'resource', startTime: 1215.75, duration: 195.07500000000027, initiatorType: 'xmlhttprequest', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1215.75, domainLookupStart: 1215.75, domainLookupEnd: 1215.75, connectStart: 1215.75, connectEnd: 1215.75, secureConnectionStart: 0, requestStart: 1219.875, responseStart: 1408.38, responseEnd: 1410.8250000000003, transferSize: 444, encodedBodySize: 336, decodedBodySize: 949 },
      { name: 'https://apis.google.com/_/scs/abc-static/_/js/k=gapi.gapi.en.ellQXbSf-LI.O/m=gapi_iframes,googleapis_client,plusone/rt=j/sv=1/d=1/ed=1/am=AAg/rs=AHpOoo9jm0At0b0B7I7G3MSvlepU00mZfA/cb=gapi.loaded_0', entryType: 'resource', startTime: 1378.94, duration: 23.924999999999955, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1378.94, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 1402.865, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://ogs.google.com/u/0/_/og/botguard/get?rt=j&sourceid=331', entryType: 'resource', startTime: 1412.97, duration: 71.46500000000015, initiatorType: 'xmlhttprequest', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1412.97, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 1484.4350000000002, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://www.google.com/js/bg/2tj_Yt5eAEN1YazL-za5nq2m-sVEuK50_GPDTIKqlPM.js', entryType: 'resource', startTime: 1537.6450000000002, duration: 28.585000000000036, initiatorType: 'script', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1537.6450000000002, domainLookupStart: 0, domainLookupEnd: 0, connectStart: 0, connectEnd: 0, secureConnectionStart: 0, requestStart: 0, responseStart: 0, responseEnd: 1566.2300000000002, transferSize: 0, encodedBodySize: 0, decodedBodySize: 0 },
      { name: 'https://developers.google.com/_static/66ebbcad58/images/favicon.png', entryType: 'resource', startTime: 1790.8200000000002, duration: 22.264999999999873, initiatorType: '', workerStart: 0, redirectStart: 0, redirectEnd: 0, fetchStart: 1790.8200000000002, domainLookupStart: 1790.8200000000002, domainLookupEnd: 1790.8200000000002, connectStart: 1790.8200000000002, connectEnd: 1790.8200000000002, secureConnectionStart: 0, requestStart: 1796.6950000000002, responseStart: 1811.4450000000002, responseEnd: 1813.085, transferSize: 1073, encodedBodySize: 905, decodedBodySize: 905 }
    ],
    visualCompleteTime: 2393,
    url: 'https://developers.google.com/web/fundamentals/performance/'
  },
  sla: {
    pageLoadTime: '2000'
  }
};

sampleData.usertiming = {
  injectJS: {
    measureArray: [
      {
        name: 'test',
        entryType: 'measure',
        startTime: 240,
        duration: 345
      }
    ],
    url: 'https://developers.google.com/web/fundamentals/performance/',
    marks: [
      {
        name: 'test_start',
        entryType: 'mark',
        startTime: 240,
        duration: 0
      },
      {
        name: 'test_stop',
        entryType: 'mark',
        startTime: 585,
        duration: 0
      }
    ]
  },
  sla: {
    pageLoadTime: '1000'
  }
};

sampleData.apitiming = {
  timing: {
    startTime: curTime,
    endTime: curTime + (Math.floor(Math.random() * 500) + 50)
  },
  url: 'http://some-api.api.com/api',
  sla: {
    pageLoadTime: '500'
  }
};

module.exports = sampleData;

(()=>{"use strict";var e={m:{},u:e=>e+".index.js"};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),(()=>{var c;e.g.importScripts&&(c=e.g.location+"");var t=e.g.document;if(!c&&t&&(t.currentScript&&(c=t.currentScript.src),!c)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!c||!/^http(s?):/.test(c));)c=a[r--].src}if(!c)throw new Error("Automatic publicPath is not supported in this browser");c=c.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=c})(),e.b=document.baseURI||self.location.href;const c={};c.current||(c.current=new Worker(new URL(e.p+e.u(630),e.b),{type:void 0})),window.doSpeech=!1,c.current.addEventListener("message",(e=>{switch(e.data.status){case"error":window.onSpeechResponse(null),window.doSpeech=!1;break;case"complete":const c=URL.createObjectURL(e.data.output);window.onSpeechResponse(c),window.doSpeech=!1}})),window.SPEAKERS={"US female 1":"cmu_us_slt_arctic-wav-arctic_a0001","US female 2":"cmu_us_clb_arctic-wav-arctic_a0001","US male 1":"cmu_us_bdl_arctic-wav-arctic_a0003","US male 2":"cmu_us_rms_arctic-wav-arctic_a0003","Canadian male":"cmu_us_jmk_arctic-wav-arctic_a0002","Scottish male":"cmu_us_awb_arctic-wav-arctic_b0002","Indian male":"cmu_us_ksp_arctic-wav-arctic_a0007"},window.handleGenerateSpeech=(e,t="cmu_us_slt_arctic-wav-arctic_a0001")=>{window.doSpeech=!0,c.current.postMessage({text:e,speaker_id:t})},window.onSpeechResponse=e=>console.log(e)})();
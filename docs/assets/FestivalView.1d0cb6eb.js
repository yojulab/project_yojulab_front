import{d as c,e as f,c as p,b as t,h as l,v as n,o as v,u}from"./index.cec6b817.js";import{a as _}from"./index.becf6c0c.js";const g={class:"row"},b={class:"col-6"},y={class:"form-floating mb-3"},x=t("label",{class:"form-label",for:"festivalName"},"\uCD95\uC81C\uBA85",-1),C={class:"form-floating mb-3"},h=t("label",{class:"form-label",for:"eventstartdate"},"\uC2DC\uC791\uC77C",-1),N={class:"form-floating mb-3"},Y=t("label",{class:"form-label",for:"eventenddate"},"\uC885\uB8CC\uC77C",-1),w={class:"form-floating mb-3"},S=t("label",{class:"form-label",for:"tel"},"\uC5F0\uB77D\uCC98",-1),I={class:"form-floating mb-3"},V=t("label",{class:"form-label",for:"addr1"},"\uC9C0\uC5ED",-1),B={class:"form mb-3"},U=t("label",{class:"form-label",for:"overview"},"\uC0C1\uC138 \uC815\uBCF4",-1),k={class:"col-6"},z=["src"],M=["src"],T={__name:"FestivalView",setup(O){const i=u(),e=c({detailCommon:{contenttypeid:"",booktour:"",createdtime:"",homepage:"",modifiedtime:"",tel:"",telname:"",title:"",firstimage:"",firstimage2:"",areacode:"",sigungucode:"",cat1:"",cat2:"",cat3:"",addr1:"",addr2:"",zipcode:"",mapx:"",mapy:"",mlevel:"",overview:"",contentid:""},detailIntro:{eventstartdate:"",eventenddate:""}});function m(){console.log(`getDetailContent() - route.params : ${JSON.stringify(i.params)}`);const r=i.params.contentid,o=i.params.contenttypeid,a={serviceKey:"BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg==",MobileOS:"ETC",MobileApp:"AppTest",_type:"json",defaultYN:"Y",firstImageYN:"Y",areacodeYN:"Y",catcodeYN:"Y",addrinfoYN:"Y",mapinfoYN:"Y",overviewYN:"Y",contentId:r,contentTypeId:o};_.get("https://apis.data.go.kr/B551011/KorService/detailCommon",{params:a}).then(function(d){const s=d.data.response;console.log(`axios : ${JSON.stringify(s)}`),s.header.resultCode=="0000"?(e.detailCommon=s.body.items.item[0],console.log(`axios : ${JSON.stringify(e.detailCommon)}`)):alert(`${JSON.stringify(s.header)}`)}).catch(function(d){console.log(d)})}return f(()=>{m()}),(r,o)=>(v(),p("div",g,[t("div",b,[t("div",y,[l(t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"festivalName","onUpdate:modelValue":o[0]||(o[0]=a=>e.detailCommon.title=a)},null,512),[[n,e.detailCommon.title]]),x]),t("div",C,[l(t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"eventstartdate","onUpdate:modelValue":o[1]||(o[1]=a=>e.detailIntro.eventstartdate=a)},null,512),[[n,e.detailIntro.eventstartdate]]),h]),t("div",N,[l(t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"eventenddate","onUpdate:modelValue":o[2]||(o[2]=a=>e.detailIntro.eventenddate=a)},null,512),[[n,e.detailIntro.eventenddate]]),Y]),t("div",w,[l(t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"tel","onUpdate:modelValue":o[3]||(o[3]=a=>e.detailCommon.tel=a)},null,512),[[n,e.detailCommon.tel]]),S]),t("div",I,[l(t("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"addr1","onUpdate:modelValue":o[4]||(o[4]=a=>e.detailCommon.addr1=a)},null,512),[[n,e.detailCommon.addr1]]),V]),t("div",B,[U,l(t("textarea",{name:"",class:"form-control",id:"overview",rows:"10",readonly:"","onUpdate:modelValue":o[5]||(o[5]=a=>e.detailCommon.overview=a)},`
        `,512),[[n,e.detailCommon.overview]])])]),t("div",k,[t("img",{alt:"",src:e.detailCommon.firstimage},null,8,z),t("img",{alt:"",src:e.detailCommon.firstimage2},null,8,M)])]))}};export{T as default};
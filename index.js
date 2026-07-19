import{a as c,S as u,i as f}from"./assets/vendor-BGqwtSVv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="56762760-0b1ca4d58f75edda673894a64";function m(s){return c.get("https://pixabay.com/api/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.log(t),[]))}const a=document.querySelector(".gallery"),l=document.querySelector(".loader");function p(s){const t=s.map(o=>`<li class="gallery-item">
<a href="${o.largeImageURL}">
<img src="${o.webformatURL}" alt="${o.tags}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${o.likes}</p>
</li>
<li class="image-info-item">Views
<p>${o.views}</p>
</li>
<li class="image-info-item">Comments
<p>${o.comments}</p>
</li>
<li class="image-info-item">Downloads
<p>${o.downloads}</p>
</li>
</ul>
</li>`).join("");a.innerHTML=t,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){a.innerHTML=""}function y(){l.classList.add("load")}function h(){l.classList.remove("load")}const L=document.querySelector("form"),w=document.querySelector('input[type="text"]');L.addEventListener("submit",b);function b(s){s.preventDefault(),y();const t=w.value.trim();t&&m(t).then(i=>{if(i.length)g(),h(),p(i);else{S();return}}).catch(i=>console.log(i))}function S(){f.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}
//# sourceMappingURL=index.js.map

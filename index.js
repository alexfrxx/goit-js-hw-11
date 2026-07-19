import{a as f,S as d,i as m}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="56762760-0b1ca4d58f75edda673894a64";function g(i){return f.get("https://pixabay.com/api/",{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.log(r),[]))}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(i){const r=i.map(t=>`<li class="gallery-item">
<a href="${t.largeImageURL}">
<img src="${t.webformatURL}" alt="${t.tags}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${t.likes}</p>
</li>
<li class="image-info-item">Views
<p>${t.views}</p>
</li>
<li class="image-info-item">Comments
<p>${t.comments}</p>
</li>
<li class="image-info-item">Downloads
<p>${t.downloads}</p>
</li>
</ul>
</li>`).join("");c.innerHTML=r,w.refresh()}function y(){c.innerHTML=""}function L(){u.classList.add("load")}function n(){u.classList.remove("load")}let w=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const b=document.querySelector("form"),S=document.querySelector('input[type="text"]');b.addEventListener("submit",q);function q(i){i.preventDefault(),y(),L();const r=S.value.trim();r&&g(r).then(t=>{if(t.length)n(),h(t);else{n(),l();return}}).catch(t=>{n(),l()})}function l(){m.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}
//# sourceMappingURL=index.js.map

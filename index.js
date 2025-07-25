import{S as d,a as m,i as l}from"./assets/vendor-DjXSMEpH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),u=new d(".gallery a",{captionsData:"alt",captionDelay:250});function f(o){const s=o.map(t=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${t.likes}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${t.views}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${t.comments}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${t.downloads}</p>
                </li>
            </ul>
        </li>
  `).join("");n.insertAdjacentHTML("beforeend",s),u.refresh()}function p(){n.innerHTML="",u.refresh()}function h(){c.classList.add("is-visible")}function y(){c.classList.remove("is-visible")}const g="https://pixabay.com/api/",L="51328108-e5351328d4cc0773f2b3617f5",b=async o=>(await m.get(g,{params:{key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data,w=document.querySelector(".form");w.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(!s){l.error({title:"Error",message:"Please enter a search term!",position:"topRight",color:"red",timeout:5e3});return}p(),h();try{const i=(await b(s)).hits;i.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",timeout:5e3}):f(i)}catch{l.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight",color:"red",timeout:5e3})}finally{y()}});
//# sourceMappingURL=index.js.map

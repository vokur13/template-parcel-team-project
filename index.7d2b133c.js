!function(){var t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}};if(t.any()){var e=function(t){var e=n[t];e.addEventListener("click",(function(){e.parentElement.classList.toggle("_active")}))};document.body.classList.add("_touch");var n=document.querySelectorAll(".menu__arrow");if(n.length>0)for(var r=0;r<n.length;r+=1)e(r)}else document.body.classList.add("_pc");var o=document.querySelectorAll(".menu__link[data-goto]");if(o.length>0){function a(t){var e=t.target;if(e.dataset.goto&&document.querySelector(e.dataset.goto)){var n=document.querySelector(e.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;window.scrollTo({top:n,behavior:"smooth"}),t.preventDefault()}}o.forEach((function(t){t.addEventListener("click",a)}))}}();
//# sourceMappingURL=index.7d2b133c.js.map

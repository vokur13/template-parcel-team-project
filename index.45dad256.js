console.clear();[].slice.call(document.querySelectorAll(".nav-expand")).forEach((e=>{e.querySelector(".nav-link").addEventListener("click",(()=>e.classList.add("active"))),e.querySelector(".nav-back-link").addEventListener("click",(()=>e.classList.remove("active")))}));document.getElementById("ham").addEventListener("click",(function(){document.body.classList.toggle("nav-is-toggled")}));
//# sourceMappingURL=index.45dad256.js.map

(function(){
  const key='pref-theme';
  const btn=document.querySelector('#theme-toggle');
  const setTheme=(t)=>{ document.documentElement.dataset.theme=t; localStorage.setItem(key,t); };
  const saved=localStorage.getItem(key);
  if(saved) setTheme(saved);
  btn?.addEventListener('click',()=>{
    const next=(document.documentElement.dataset.theme==='dark')?'light':'dark';
    setTheme(next);
  });
})();

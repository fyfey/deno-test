addEventListener("fetch", async (event) => {
  const quote = await fetch("https://quotes.rest/qod?language=en").then(r => r.json());
  const response = new Response(`<h1>Quote of the day:</h1><p>${quote.contents.quotes[0].quote}</p>`, {
    headers: { "content-type": "text/html; charset=utf8" },
  });
  event.respondWith(response);
});



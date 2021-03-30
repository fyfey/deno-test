addEventListener("fetch", async (event) => {
  const quote = await fetch("https://quotes.rest/qod?language=en").then(r => r.json());
  const response = new Response(quote.contents.quotes[0].quote, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});



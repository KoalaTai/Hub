export async function fetchFromPerplexity(query) {
  const response = await fetch('/api/perplexity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data;
}

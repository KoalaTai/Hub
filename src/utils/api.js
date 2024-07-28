export async function simpleFetch() {
  const response = await fetch('/api/simple');
  const data = await response.json();
  return data;
}

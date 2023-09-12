

export const fetchDataSSG = async (url) => {
  const res = await fetch(url, { cache: 'force-cache' })
  const data = await res.json();
  return data;
}

export const fetchDataISR = async (url, interval) => {
  const res = await fetch(url, { next: { revalidate: interval } })
  const data = await res.json();
  return data;
}

export const fetchDataSSR = async (url) => {
  const res = await fetch(url, { cache: 'no-store' })
  const data = await res.json();
  return data;
}
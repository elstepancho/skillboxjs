export async function fetchEpisodes() {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    return data.results;
}

export async function fetchEpisodeDetails(episodeId) {
    const response = await fetch(`https://swapi.dev/api/films/${episodeId}/`);
    const data = await response.json();
    return data;
}

export async function fetchResource(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

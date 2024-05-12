import { fetchEpisodeDetails, fetchResource } from './api.js';

async function renderEpisodeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const episodeId = urlParams.get('episodeId');
    const episodeDetails = await fetchEpisodeDetails(episodeId);
    const episodeTitle = document.getElementById('episode-title');
    const episodeOpeningCrawl = document.getElementById('episode-opening-crawl');
    const planetList = document.getElementById('planet-list');
    const speciesList = document.getElementById('species-list');

    episodeTitle.textContent = `${episodeDetails.title} (Episode ${episodeDetails.episode_id})`;
    episodeOpeningCrawl.textContent = episodeDetails.opening_crawl;

    const planetPromises = episodeDetails.planets.map(url => fetchResource(url));
    const speciesPromises = episodeDetails.species.map(url => fetchResource(url));

    const [planets, species] = await Promise.all([Promise.all(planetPromises), Promise.all(speciesPromises)]);

    planets.forEach(planet => {
        const listItem = document.createElement('li');
        listItem.textContent = planet.name;
        planetList.appendChild(listItem);
    });

    species.forEach(species => {
        const listItem = document.createElement('li');
        listItem.textContent = species.name;
        speciesList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', renderEpisodeDetails);

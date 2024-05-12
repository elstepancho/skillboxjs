import { fetchEpisodes } from './api.js';

async function renderEpisodes() {
    const episodes = await fetchEpisodes();
    const episodeList = document.getElementById('episode-list');

    episodes.forEach(episode => {
        const episodeDiv = document.createElement('div');
        episodeDiv.classList.add('episode');
        episodeDiv.innerHTML = `
            <div class="episodeBlock">
                <h2>Episode ${episode.episode_id}: ${episode.title}</h2>
                <p>${episode.release_date}</p>
                <p>Director: ${episode.director}</p>
                <p>Producer: ${episode.producer}</p>
            </div>
        `;
        episodeList.appendChild(episodeDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderEpisodes);
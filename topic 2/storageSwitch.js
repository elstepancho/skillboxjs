import localStorageStorage from './localStorageStorage.js';
import apiStorage from './apiStorage.js';

let currentStorage = localStorageStorage;

export function switchStorage() {
    currentStorage = currentStorage === localStorageStorage ? apiStorage : localStorageStorage;
}

export function getCurrentStorage() {
    return currentStorage;
}

export function saveData(data) {
    currentStorage.save(data);
}

export function loadData() {
    return currentStorage.load();
}
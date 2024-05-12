const apiUrl = 'https://api.example.com/todos';

const apiStorage = {
    save: async function(data) {
        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Ошибка сохранения данных');
            }
        } catch (error) {
            console.error(error);
        }
    },
    load: async function() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
};

export default apiStorage;
export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
});

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    query
});

export const rowDelete = (id) => ({
    type: 'DELETE_ROW',
    id
});

export const addBirth = (data) => ({
    type: 'ADD_BIRTH',
    data
});
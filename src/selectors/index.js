import {createSelector} from 'reselect'
import {compareDates, getYearOfNextBirthday, getDate} from '../utils'

export const getData = (state) => state.data;

export const getFilter = (state) => state.filter;

export const getSearchQuery = (state) => state.search;

export const getPropsFilter = (state, filter) => filter;

export const getRouter = (state) => state.router;

export const getNotification = (state) => state.notification;

export const getBirthDates = createSelector(getData, (data) => {
    return data.filter( item => {
        if (!getDate(item.date)) return item;
    });
});

export const getDataNoBirth = createSelector(
    getData,
    (data) => {
        return data.filter( item => {
            if (getDate(item.date)) return item;
        });
    }
);

export const getActiveFilter = createSelector(getFilter, getPropsFilter, (filter, propsFilter) => {
    return filter === propsFilter;
});

export const getDataWithFilter = createSelector(getDataNoBirth, getFilter, (data, filter) => {
    return data.filter( item => {
        if (item.filter.includes(filter)) return item;
    });
});

export const getDataWithSearchAndFilter = createSelector(
    getSearchQuery,
    getDataWithFilter,
    (query, data) => {
        return data.filter( item => {
            if (item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) return item;
        });
    }
);

export const getStructuredData = createSelector(
    getDataWithSearchAndFilter,
    (data) => {
        data.sort(compareDates);

        const obj = {};
        let month = '';
        data.forEach( item => {
            let year = getYearOfNextBirthday(item.date);
            if (item.date.format("MMMM " + year) !== month) {
                month = item.date.format("MMMM " + year);
                obj[month] = [];
            }
            obj[month].push(item);
        });

        return obj;
    }
);

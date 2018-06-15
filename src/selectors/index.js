import {createSelector} from 'reselect'

export const getDates = (state) => state.dates;

export const getFilter = (state) => state.filter;

export const getPropsFilter = (state, filter) => filter;

export const getActiveFilter = createSelector(getFilter, getPropsFilter, (filter,propsFilter) => {
    return filter === propsFilter;
});

export const getDatesWithFilter = createSelector(getDates, getFilter, (dates, filter) => {
    let obj = {};
    Object.keys(dates).map( (date) => {
        let arr = [];
        for (let i = 0; i < dates[date].length; i++) {
            if (dates[date][i].filter.includes(filter)) arr.push(dates[date][i]);
        }
        if (arr.length) obj[date] = arr;
    });
    return obj;
}
);
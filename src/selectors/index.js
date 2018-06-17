import {createSelector} from 'reselect'

export const getDates = (state) => state.dates;

export const getFilter = (state) => state.filter;

export const getSearchQuery = (state) => state.search;

export const getPropsFilter = (state, filter) => filter;

const wasBirthThisYear = (date) => {
    const currDate = new Date();

    return currDate > date;
};

const getDate = (date) => {
    const MSEC_PER_DAY = 86400000;
    const birthDate = new Date();
    birthDate.setMonth(date.month - 1);
    birthDate.setDate(date.day);

    wasBirthThisYear(birthDate) ? birthDate.setFullYear(birthDate.getFullYear() + 1) : birthDate.setFullYear(birthDate.getFullYear());

    const today = new Date();

    return Math.round(Math.abs((birthDate.getTime() - today.getTime()) / (MSEC_PER_DAY)));
};

export const getBirthDates = createSelector(getDates, (dates) => {
    let birthToday = [];

    Object.keys(dates).forEach((date) => {
        for (let i = 0; i < dates[date].length; i++) {
            if (!getDate(dates[date][i].date))
                birthToday.push(dates[date][i]);
        }
    });

    return birthToday;
});

export const getDatesNoBirth = createSelector(
    getDates,
    (dates) => {
        let datesNoBirth = {};

        Object.keys(dates).forEach((date) => {
            for (let i = 0; i < dates[date].length; i++) {
                if (getDate(dates[date][i].date)) {
                    if (!datesNoBirth[date]) datesNoBirth[date] = [];
                    datesNoBirth[date].push(dates[date][i]);
                }
            }
        });

        return datesNoBirth;
    }
);

export const getActiveFilter = createSelector(getFilter, getPropsFilter, (filter, propsFilter) => {
    return filter === propsFilter;
});

export const getDatesWithFilter = createSelector(getDatesNoBirth, getFilter, (dates, filter) => {
    let obj = {};
    Object.keys(dates).forEach((date) => {
        let arr = [];
        for (let i = 0; i < dates[date].length; i++) {
            if (dates[date][i].filter.includes(filter)) arr.push(dates[date][i]);
        }
        if (arr.length) obj[date] = arr;
    });
    return obj;
});

export const getDatesWithSearchAndFilter = createSelector(
    getSearchQuery,
    getDatesWithFilter,
    (query, dates) => {
        let obj = {};

        Object.keys(dates).forEach((date) => {
            let arr = [];
            for (let i = 0; i < dates[date].length; i++) {
                if (dates[date][i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) arr.push(dates[date][i]);
            }
            if (arr.length) obj[date] = arr;
        });

        return obj;
    }
);

export const getDaysToBirthday = createSelector(
    getDatesWithFilter,
    (dates) => {
        let daysLeft = {};

        Object.keys(dates).forEach((date) => {
            for (let i = 0; i < dates[date].length; i++) {
                if (!daysLeft[date]) daysLeft[date] = [];
                daysLeft[date].push(getDate(dates[date][i].date));
            }
        });

        return daysLeft;
    }
);
import moment from 'moment'

export const compareDates = (a, b) => {
    if (getDate(a.date) > getDate(b.date)) return 1;
    if (getDate(a.date) < getDate(b.date)) return -1;
};

export const getYearOfNextBirthday = (date) => {
    const end = moment().set('month', date.get('month')).set('date', date.get('date'));

    return end.diff(moment(),'days') < 0 ? moment().get('year') + 1 : moment().get('year');
};

export const getDate = (date) => {
    const start = moment();
    const end = moment().set('month', date.get('month')).set('date', date.get('date'));

    return end.diff(start,'days') < 0 ? end.set('year', end.get('year') + 1).diff(start,'days') : end.diff(start,'days');
};
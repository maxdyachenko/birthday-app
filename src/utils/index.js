import moment from 'moment'
import {zodiacSigns} from './constants'

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

export const getZodiacSign = (date) => {
    const day = date.date();
    const month = date.month();

    if((month === 1 && day <= 20) || (month === 12 && day >=22)) {
        return zodiacSigns.capricorn;
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
        return zodiacSigns.aquarius;
    } else if((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return zodiacSigns.pisces;
    } else if((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
        return zodiacSigns.aries;
    } else if((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
        return zodiacSigns.taurus;
    } else if((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return zodiacSigns.gemini;
    } else if((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return zodiacSigns.cancer;
    } else if((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
        return zodiacSigns.leo;
    } else if((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
        return zodiacSigns.virgo;
    } else if((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
        return zodiacSigns.libra;
    } else if((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
        return zodiacSigns.scorpio;
    } else if((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
        return zodiacSigns.sagittarius;
    }
};
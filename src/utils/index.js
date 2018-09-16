import moment from 'moment';
import {zodiacSigns} from '../constants/zodiacSigns';

export const compareDates = (a, b) => {
  if (getDate(a.date) > getDate(b.date)) return 1;
  if (getDate(a.date) < getDate(b.date)) return -1;
};

export const getYearOfNextBirthday = date => {
  const end = moment()
    .set('month', date.get('month'))
    .set('date', date.get('date'));

  return end.diff(moment(), 'days') < 0
    ? moment().get('year') + 1
    : moment().get('year');
};

export const getDate = date => {
  const start = moment();
  const end = moment()
    .set('month', date.get('month'))
    .set('date', date.get('date'));

  return end.diff(start, 'days') < 0
    ? end.set('year', end.get('year') + 1).diff(start, 'days')
    : end.diff(start, 'days');
};

export const getZodiacSign = date => {
  const day = date.date();
  const month = date.month();

  if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
    return zodiacSigns.capricorn;
  }
  if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
    return zodiacSigns.aquarius;
  }
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return zodiacSigns.pisces;
  }
  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    return zodiacSigns.aries;
  }
  if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    return zodiacSigns.taurus;
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return zodiacSigns.gemini;
  }
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return zodiacSigns.cancer;
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
    return zodiacSigns.leo;
  }
  if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
    return zodiacSigns.virgo;
  }
  if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
    return zodiacSigns.libra;
  }
  if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    return zodiacSigns.scorpio;
  }
  if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
};

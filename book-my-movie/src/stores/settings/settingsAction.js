import settings from './settingsConstant';

export const getDays = () => ({
	type: settings.GET_DAYS,
});

export const getTiming = () => ({
	type: settings.GET_TIMING,
});

const getLoading = (state => state.cardsSlice.loading);

const getApiInfo = (state => state.cardsSlice.apiInfo);

const getApiError = (state => state.cardsSlice.apiError);

const getLessonsTitles = (state => state.cardsSlice.lessonsTitles);

const getCardsInLessons = (state => state.cardsSlice.cardsInLesson);

const getCards = (state => state.cardsSlice.cards);

const getLessonMode = (state => state.cardsSlice.lessonMode);

const getThemeSelector = (state => state.themeSlice.theme);




export { getLoading, getApiInfo, getApiError, getCardsInLessons, getCards, getLessonsTitles, getLessonMode, getThemeSelector };
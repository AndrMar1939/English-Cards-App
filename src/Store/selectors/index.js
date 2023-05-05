const getLoading = (state=>state.cardsStore.loading);

const getApiInfo = (state=>state.cardsStore.apiInfo);

const getApiError = (state=>state.cardsStore.apiError);

const getCardsInLessons = (state=>state.cardsStore.cardsInLesson);

const getCards = (state=>state.cardsStore.cards);


export {getLoading, getApiInfo, getApiError, getCardsInLessons, getCards};
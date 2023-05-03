const getLoading = (state=>state.cardsStore.loading);

const getActiveLesson = (state=>state.cardsStore.activeLesson);

const getLessons = (state=>state.cardsStore.lessons);

const getCardsInLessons = (state=>state.cardsStore.cardsInLesson);

export {getLoading, getActiveLesson, getLessons, getCardsInLessons};
const getLoading = (state=>state.cardsStore.loading);

const getActiveLesson = (state=>state.cardsStore.activeLesson);

const getLessons = (state=>state.cardsStore.lessons);

export {getLoading, getActiveLesson, getLessons};
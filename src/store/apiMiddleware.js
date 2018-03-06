const apiMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  const { url } = action.meta;
  const fetchOptions = { ...action.meta };

  fetch(url, fetchOptions)
    .then(res => res.json())
    .then(json => {
      if (typeof action.meta.onSuccess === 'function') {
        action.meta.onSuccess(json);
      }
      return json;
    })
    .then(json => {
      let newAction = { ...action, payload: json.dateString };
      delete newAction.meta;
      store.dispatch(newAction);
    });
};

export default apiMiddleware;

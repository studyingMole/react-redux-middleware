export default function({ dispatch }) {
  return next => action => {
    // if the action does not have a payloa
    // or, the payload does not have a .tehn property
    // we don't cxare about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // make sure the actions promise resolves
    action.payload
      .then(function(response) {
        // create a new action with the old type, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  }
}

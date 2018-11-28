export default store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('[CrashReportMiddleware] Caught an exception: ', err);
    // captureExeception
    throw err;
  }
};

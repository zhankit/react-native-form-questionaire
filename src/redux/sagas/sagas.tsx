import { put, takeLatest, all } from 'redux-saga/effects';


export function* helloSaga() {
  console.log('Hello Sagas!')
}

function* fetchJokes() {
  const json = yield fetch('https://official-joke-api.appspot.com/random_joke')
        .then( (response: any) => {
          console.log('response', response);
          response.json();
      } );    
  yield put({ type: "JOKE_RECEIVED", json: Object.keys(json) });
}

function* actionWatcher() {
     yield takeLatest('GET_JOKES', fetchJokes)
}

export default function* rootSaga() {
   yield all([
    helloSaga(),  
    actionWatcher(),
  ]);
}
const { Observable } = require('rxjs');

// const promise = asyncFunc();
// promise.then(result => {
//     console.log(result);
// });


// function asyncTask(i) {
//     return new Promise(resolve => resolve(i + 1));
// }
// async function runAsyncTasks() {
//     const res1 = await asyncTask(0);
//     const res2 = await asyncTask(res1);
//     const res3 = await asyncTask(res2);
//     return "Everything done"
// }
// runAsyncTasks().then(result => console.log(result));


// function asyncTask(i) {
//     return new Promise(resolve => resolve(i + 1));
// }
// function runAsyncTasks() {
//     return asyncTask(0)
//         .then(res1 => { return asyncTask(res1); })
//         .then(res2 => { return asyncTask(res2); })
//         .then(res3 => { return "Everything done"; });
// }
// runAsyncTasks().then(result => console.log(result));

// Creation
// const observable = new Observable(observer => {
//   for (let i = 0; i < 3; i++) {
//     observer.next(i);
//   }
// });
// Usage
// observable.subscribe(value => console.log(value));


// new Promise(executorFunc);
// function executorFunc(resolve) {
//     // Some code...
//     resolve(value);
// }


// new Observable(subscriberFunc);
// function subscriberFunc(observer) {
//     // Some code...
//     observer.next(value);
// }


// // Creation
// const promise = new Promise(executorFunc);
// function executorFunc(resolve, reject) {
//     const value = Math.random();
//     if (value <= 1/3.0)
//         resolve(value);
//     else if (value <= 2/3.0)
//         reject("Value <= 2/3 (reject)");
//     else
//         throw "Value > 2/3 (throw)"
// }
// // Usage
// promise.then(onFulfilled).catch(onRejected);
// function onFulfilled(value) {
//     console.log("Got value: " + value);
// }
// function onRejected(error) {
//     console.log("Caught error: " + error);
// }


// // Creation
// const promise = new Promise((resolve, reject) => {
//     const value = Math.random();
//     if (value <= 1/3.0)
//         resolve(value);
//     else if (value <= 2/3.0)
//         reject("Value <= 2/3 (reject)");
//     else
//         throw "Value > 2/3 (throw)"
// });
// // Usage
// promise
//     .then(value => console.log("Got value: " + value))
//     .catch(error => console.log("Caught error: " + error));


// // Creation
// const observable = new Observable(subscriberFunc);
// function subscriberFunc(observer) {
//     const value = Math.random();
//     if (value <= 1/3.0)
//         observer.next(value);
//     else if (value <= 2/3.0)
//         observer.error("Value <= 2/3 (error)");
//     else
//         throw "Value > 2/3 (throw)"
//     observer.complete();
// }
// // Usage
// observable.subscribe(nextFunc, errorFunc, completeFunc);
// function nextFunc(value) {
//     console.log("Got value: " + value);
// }
// function errorFunc(error) {
//     console.log("Caught error: " + error);
// }
// function completeFunc() {
//     console.log("Completed");
// }


// // Creation
// const observable = new Observable(observer => {
//     const value = Math.random();
//     if (value <= 1/3.0)
//         observer.next(value);
//     else if (value <= 2/3.0)
//         observer.error("Value <= 2/3 (error)");
//     else
//         throw "Value > 2/3 (throw)"
//     observer.complete();
// });
// // Usage
// observable.subscribe({
//     next(value) { console.log("Got value: " + value) },
//     error(err) { console.log("Caught error: " + err) },
//     complete() { console.log("Completed"); }
// });


// const promise = new Promise(resolve => {
//     resolve(1);
//     resolve(2);
//     resolve(3);
// });
// promise.then(result => console.log(result));


// const observable = new Observable(observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
// });
// observable.subscribe(result => console.log(result));


// const promise = new Promise(resolve => {
//     console.log("- Executing");
//     resolve();
// });
// console.log("- Subscribing");
// promise.then(() => console.log("- Handling result"));


// const observable = new Observable(observer => {
//     console.log("- Executing");
//     observer.next();
// });
// console.log("- Subscribing");
// observable.subscribe(() => console.log("- Handling result"));


// const promise = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("Async task done");
//         resolve();
//     }, 2000);
// });
// promise.then(() => console.log("Handler"));
// // Oops, can't prevent handler from being executed anymore.


// const observable = new Observable(observer => {
//     setTimeout(() => {
//         console.log("Async task done");
//         observer.next();
//     }, 2000);
// });
// subscription = observable.subscribe(() => console.log("Handler"));
// subscription.unsubscribe();


// const promise = new Promise(resolve => {
//     console.log("Executing...");
//     resolve(Math.random());
// });
// promise.then(result => console.log(result));
// promise.then(result => console.log(result));


// const observable = new Observable(observer => {
//     console.log("Executing...");
//     observer.next(Math.random());
// });
// observable.subscribe(result => console.log(result));
// observable.subscribe(result => console.log(result));


// console.log("- Creating promise");
// const promise = new Promise(resolve => {
//     console.log("- Promise running");
//     resolve(1);
// });
// console.log("- Registering handler");
// promise.then(result => console.log("- Handling result: " + result));
// console.log("- Exiting main");


console.log("- Creating observable");
const observable = new Observable(observer => {
    console.log("- Observable running");
    observer.next(1);
});
console.log("- Registering handler");
observable.subscribe(v => console.log("- Handling result: " + v));
console.log("- Exiting main");

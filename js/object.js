// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);

// Короткі властивості
// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25


// /* звернення до властивостей через квадратні дужки*/ 
// const inutName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inutName]: inputValue,
// }
// ссочний тип

// const a = { x: 1, y: 2 }
// const b = a;
 
// console.log(b === a);
// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);

// const playlist = {
//   name: 'my super playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   // getName: function () {
//   //   console.log('Aha thi is getName ;)');
//   // }, Метод обєкта 
//   getName() {
//     console.log('Aha thi is getName ;)');
//   },
// };

// playlist.getName(5);

// const playlist = {
//   name: 'my super playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
//   // getName: function () {
//   //   console.log('Aha thi is getName ;)');
//   // }, Метод обєкта 
//   changeName(newName) {
//     //
//     console.log('this');
//     this.name = newName;
//   },
//   addrTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
//     updateRating(newRating) {
//     this.rating = newRAting;
//   },
//   detTrackCount() {
//     return this.tracks.length;
//     }
// };

// playlist.changeName('New name');

// console.log(playlist);
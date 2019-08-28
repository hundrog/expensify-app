console.log('App.js is running'); // var template = <h1 id="some_id">This is JSX form app.js!</h1>;

var template = React.createElement("h1", {
  id: "some_id"
}, "This is JSX form app.js!");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
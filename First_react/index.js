//console.log('Hello World!')

const p = React.createElement('p', {},'Hello from React!');

const div = React.createElement('div', {}, p);

const appDiv = document.getElementById('app');

ReactDOM.render(
    div, 
    appDiv
);
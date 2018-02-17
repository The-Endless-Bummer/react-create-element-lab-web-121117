import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const list = React.createElement('ul', {className: 'my-interests'},
      [
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Movies'),
        React.createElement('li', {}, 'Ice cream')
      ]
    )
const meInReact = React.createElement('div', {className: 'me'}, [title, paragraph, list]);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

// const meInReact =
//   React.createElement('div', {className: 'me'},
//     React.createElement('h1', {}, 'An Awesome Person'),
//     React.createElement('p', {}, 'Who is learning React'),
//     React.createElement('ul', {className: 'my-interests'},
//       [
//         React.createElement('li', {}, 'JavaScript'),
//         React.createElement('li', {}, 'React'),
//         React.createElement('li', {}, 'Movies'),
//         React.createElement('li', {}, 'Ice Cream')
//       ]
//     )
//   );
//
// ReactDOM.render(
//   meInReact,
//   document.getElementById('global')
// );

// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
//
//   <ul class="my-interests">
//     <li>JavaScript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice cream</li>
//   </ul>
// </div>

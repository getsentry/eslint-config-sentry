# disallow react hooks (no-react-hooks)

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
This rule prevents them from being used.


## Rule Details

This rule aims to prevent introduction of another generation/style of code to the codebase.

Examples of **correct** code for this rule:

```js
import React from 'react';

class Test extends React.Component {
  state = {
    burger: ''
  }
  
  componentDidMount() {

  }

  // ...

  render() {
    return <h1>{this.state.burger}</h1>
  }
};
```

Examples of **incorrect** code for this rule:

```js
import React, {useState} from 'react';

const Test = props => {
  const [burger, setBurger] = useState('');
  const {useRef} = React;
  const something = useRef();

  React.useEffect(() => {
    //
  }, []);


  return (
    <h1>{burger}</h1>
  );
};
```

## When Not To Use It

If you want to be able to use React Hooks.

## Further Reading

* https://reactjs.org/docs/hooks-intro.html


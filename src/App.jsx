import { useState, useEffect } from 'react';
import './App.css';
import Previewer from './components/Previewer';
import Editor from './components/Editor';
import { ImEmbed2 } from 'react-icons/im';
import { BiArrowToTop } from 'react-icons/bi';

// set starter text
const placeHolder = `
<h1 align="center">Welcome to my React Markdown Previewer!</h1>

![TypeToPc](https://www.svgrepo.com/show/39226/code.svg)
## You can move and resize the editor section.
### Try to turn on the move and resize buttons in the top right corner and move the editor around the page.
${'```'}
const LetsWriteMarkDown = () => { 
    return StyledText;
}
${'```'}
You can make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~. There's also [links](https://dor-plaut-home-page.netlify.app/), and
> Block Quotes!

Also inline code ${'`<MarkDown/>`'}.  And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;

function App() {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(placeHolder);
  }, []);

  return (
    <main>
      <div id="header"></div>
      <div className="background">
        <ImEmbed2 className="backgroundIcon one" />
        <ImEmbed2 className="backgroundIcon tow" />
        <ImEmbed2 className="backgroundIcon three" />
        <div className="hidden-spacer"></div>
        <div className="container previewer">
          <Previewer input={input}></Previewer>
        </div>
        <Editor setInput={setInput} input={input} placeHolder={placeHolder} />
        <div className="upBtn">
          <a href="#header">
            <BiArrowToTop className="toTopBtn" />
          </a>
        </div>
        <footer>
          <p>
            build by{' '}
            <a href="https://dor-plaut-home-page.netlify.app/" target="blank">
              Dor Plaut
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;

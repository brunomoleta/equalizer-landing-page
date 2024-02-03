import { Component, ReactNode } from 'react';
import Styled from 'styled-components';

const Font = Styled.h1`
  font-family:'IBM Plex Sans', sans-serif;
`

const Font2 = Styled.h1`
  font-family:'IBM Plex Sans';
  font-style:normal;
  font-weight:400;
  font-size:40px;
  line-height:34px;
`
const Font3 = Styled.h1`
  font-family:'IBM Plex Sans' ; 
  font-styled:normal;
  font-weight:700;
  font-size:77px;
  line-height:88px;
`

const Font4 = Styled(Font3)`
font-family:'IBM Plex Sans';
`


export default class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <Font>Hello new project</Font>
        <Font2>Hello new project</Font2>
        <Font3>Lorem Ipsum Dolor Sit</Font3>
        <Font4>Lorem Ipsum Dolor Sit</Font4>
      </div>
    )
  }
}


import React from 'react';
import ReactDOM from 'react-dom';
import Block from './components/Block';

function App(props) {

    let imageStyle = {
        width: '100%'
    }

    let textStyle = {
        color: 'pink',
        paddingLeft: '10%',
        paddingRight: '10%'
    }

    return (
        <main>
        	<Block>
            	<h2 style={textStyle}>A Block component</h2>            	
            	<h4 style={textStyle}>hello this is some content in this block</h4>
                <img style={imageStyle} src='/public/fantasy.png' />         	
            </Block>
        </main>
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));

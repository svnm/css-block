import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './Block.css'
import block from '../../../lib/block.css' //import block from 'css-block'
Object.assign(styles, block)

class Block extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  render() {

  	let block = (
	  <div className={styles.block}>
        	<div className={styles.content}>
            {this.props.children}
          </div>
      </div>
  	)

    return (
	     block
    );
  }
};

export default CSSModules(Block, styles, {allowMultiple: true} )

"use strict";

import React from 'react';
// import ReactDOM from 'react-dom';

// const Shortcut = require('./shortcut');
// const KeyCodeMap = require('./shortcut/key_code_map');

// const selectRectangleWrap = document.createElement('div');

// const SelectRectangle = props => (
//     <div className="select-rectangle" style={props.style}></div>
// )

// class Selector extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {count: props.initialCount};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   //static defaultProps = {
//   //  name: 'Mary'  //定义defaultprops的另一种方式
//   //}

//   //static propTypes = {
//     //name: React.PropTypes.string
//   //}

//   handleClick() {
//     //点击事件的处理函数
//   }

//   render() {
//     return <div className="select-rectangle" style={props.style}></div>;
//   }
// }

// // Selector.propTypes = {
// //   name: React.PropTypes.string
// // };

// // Selector.defaultProps = {
// //   name: 'Selector'
// // };
// export default Selector;

const Selector = ({
    style
}) => {
    return (
        <div className="select-rectangle" style={style}></div>
    )
}

Selector.propTypes = {
    style: PropTypes.string.isRequired
}


export default Selector;
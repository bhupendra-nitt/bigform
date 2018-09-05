import React from 'react';
import { getList } from './helper.js'

export default class BigList extends React.Component {
  constructor() {
    super();
    this.state = {
      renderedList: [],
      entireList: getList(),
      currentIndex: 0
    };

    this._handleScroll = this._handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this._handleScroll);
    if(this.state.entireList){
      this.setState({renderedList: this.state.entireList.slice(0, 50), currentIndex: 50});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }

  isComponentVisible = () => {
    const html = document.documentElement;
    const { once } = this.props;
    const boundingClientRect = this.nodeRef.getBoundingClientRect();
    const windowWidth = window.innerWidth || html.clientWidth;
    const windowHeight = window.innerHeight || html.clientHeight;
    
    const isVisible = this.isVisible(boundingClientRect, windowWidth, windowHeight);
    
    if (isVisible && once) {
      this.removeListener();
    }
    
    this.setState({ isVisible });
  }
  
  _handleScroll(){
    console.log('scroll');
    const { renderedList, entireList } = this.state;
    if(renderedList.length !== entireList.length) {
     const newArray = this.state.entireList.slice(this.state.currentIndex, 50);
      this.setState({
        currentIndex: this.state.currentIndex + 50,
        renderedList: renderedList.push(newArray)
      });
    }
  }

  render() {
    return <div>
      {
        this.state.renderedList.map(element => {
          return <div key={element.id}>
            {element.data.textArea.value} hllo
          </div>
        })
      }
    </div>
  }
}
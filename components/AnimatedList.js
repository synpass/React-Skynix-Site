import React, {Component} from 'react'
import { PropTypes } from 'prop-types';

export default class AnimatedList extends Component {

    state = {
        listOffset: 0
    }
    animationStarted = false
    listRef = React.createRef()

    animate = () => {

        const lineHeight = 38;

        const scroll = (add, timer) => {

            if (document.hidden) return

            if (add) {

                this.setState(state => ({ listOffset:  state.listOffset + lineHeight }))

                if (this.state.listOffset >= (this.props.list.length - 5) * lineHeight) {
                    clearInterval(timer)
                    let interval = setInterval(() => scroll(false, interval), 1500)
                }
            } else {

                this.setState(state => ({ listOffset:  state.listOffset - lineHeight }))

                if (this.state.listOffset <= 0) {
                    clearInterval(timer)
                    let interval = setInterval(() => scroll(true, interval), 1500)
                }
            }
        }

        let startLoop = setInterval(() => scroll(true, startLoop), 1500)

    }

    componentDidMount () {
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if(!this.listRef.current) return;
        const rect = this.listRef.current.getBoundingClientRect()
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const InView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);

        if (InView && !this.animationStarted) {
            this.animationStarted = true;
            this.animate();
        }
    }



    render() {
        const { list } = this.props

        return (
            <div className="animated-list" ref={this.listRef}>
                <ul className="animated-list__ul" style={{'bottom': this.state.listOffset}}>
                    {list.map((item, index) => (
                        <li key={`systems-${index}`} className="animated-list__item">
                            {item}
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}


AnimatedList.propsTypes = {
    list: PropTypes.array
}

AnimatedList.defaultProps = {
    list: []
    }

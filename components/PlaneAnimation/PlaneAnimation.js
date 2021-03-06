import React, { Component } from 'react'
import SuccessAnimation from '../SuccessAnimation/SuccessAnimation';

export default class PlaneAnimation extends Component {

    canvasRef = React.createRef()
    sectionRef = React.createRef()
    animationStarted = false

    state = {
        animationFinished: false
    }

    onScroll = () => {
        if (!this.sectionRef || !this.sectionRef.current) return

        const rect = this.sectionRef.current.getBoundingClientRect();
        if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth) &&
        !this.animationStarted
        ) {
            this.animationStarted = true
            this.animate();
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.onScroll)
    }

    animate () {
        const { canvasRef } = this
        
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        const context = canvasRef.current.getContext('2d')
        const planeCanvas = document.createElement('canvas')
        const planeCtx = planeCanvas.getContext('2d')
        const underlineCanvas = document.createElement('canvas')
        const underlineCtx = underlineCanvas.getContext('2d')
        

        planeCanvas.width = screenWidth
        planeCanvas.height = screenHeight
        underlineCanvas.width = screenWidth
        underlineCanvas.height = screenHeight
        canvasRef.current.width = screenWidth
        canvasRef.current.height = screenHeight

        underlineCtx.fillStyle = "#223fd5"

        const image = new Image()
        image.src = '/static/images/paper-plane.svg'

        const plane = {
            x: 0,
            y: 70,
            image,
            ctx: planeCtx
        }
        image.onload = () =>  this.draw(context, plane, underlineCtx)
       
    }

    draw (ctx, plane, lineCtx) {
        const planeSize = 75
        const screen = window.innerWidth
        const screenHeight = window.innerHeight
        let flyingRange = screen - planeSize
        const speed = screen / 100 * 0.3

        plane.ctx.clearRect(0, 0, screen, screenHeight)
        ctx.clearRect(0, 0, screen, screenHeight)

        if (plane.x > 110 && plane.x < 550) {
            lineCtx.beginPath()
            lineCtx.rect(plane.x, plane.y, speed, 2)
            lineCtx.fill();
        }
        
        ctx.drawImage(lineCtx.canvas, 0, 0)

        if (screen > 1200) {
            flyingRange = 1200
        }


        if (plane.x >= flyingRange - planeSize) {
            this.setState({animationFinished: true})
            return
        }
        
        
        plane.ctx.drawImage(plane.image, plane.x, plane.y, 75, 75)
        ctx.drawImage(plane.ctx.canvas, 0, 0)
        
        plane.x += speed
        requestAnimationFrame(() => {
            this.draw(ctx, plane, lineCtx)
        })
    }

    render () {
            
        return (
            <>
            <canvas ref={this.canvasRef} className="plane-animation-canvas"></canvas>
            <div className="plane-animation" ref={this.sectionRef}>

               {this.state.animationFinished ? 
                    <SuccessAnimation/ >
                : null }
            <img className="plane-animation__img-iphone" src="/static/images/iphone.svg" /> 

            </div>
            </>
        )
    }
}

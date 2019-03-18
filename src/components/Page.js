import React from 'react';
import CardBody from "./Card";
import images from "./images";
import shuffle from 'shuffle-array';
import "./page.css";



let clickedImages = [];

class Page extends React.Component {
    state = {
        currentScore: 0,
        topScore: 0,
        images: images,
        status: <h3 className="text-primary">Click an image to begin!</h3>,
        hoveredImage: "",
        animation: ""
       

    }


    handleHover = image => {
        this.setState({hoveredImage: image})
    }

    mouseLeave = ()=> {
        this.setState({hoveredImage: ""})
    }

    



    handleClick = theImage => {



        if (clickedImages.includes(theImage)) {
            this.setState({status: <h3 className="text-danger">You guessed incorrectly!</h3>})
            this.setState({ currentScore: 0 });
            this.setState({animation: "shake"})
            clickedImages = [];
        } else {
            clickedImages.push(theImage);
            this.setState({animation: " "})
            this.setState({status: <h3 className="text-success"><strong>You guessed correctly {clickedImages.length} times in a row!</strong></h3>})           
            this.setState({ currentScore: clickedImages.length });
            if (clickedImages.length >= this.state.topScore) {
                this.setState({ topScore: clickedImages.length })
            }
        }
        
        this.setState({ images: shuffle(images) })

    }


    render() {
        return (<>
            <nav className="navbar navbar-white bg-white fixed-top py-4">
               <a href="/" className="text-decoration-none"><h1 className="text-primary">Clicky Game</h1></a>
                {this.state.status}

                <h2 className="text-primary">Score: {this.state.currentScore} |Top Score: {this.state.topScore}</h2>
            </nav>
            <div className="jumbotron bg-primary jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-1 text-white text-center"><strong>Clicky Game</strong></h1>
                    <h3 className="text-center text-white">Click on an image to earn points, but don't click on any more than once!</h3>
                </div>
            </div>
            <div className={`container bg-dark pt-3 ${this.state.animation}`}>
                <div className="row">

                    {this.state.images.map(image => <div className="col-3" >
                        <CardBody hover={this.state.hoveredImage} mouseLeave={this.mouseLeave} handleHover={this.handleHover} image={image} handleClick={this.handleClick} />
                    </div>)}
                </div>
            </div>
        </>
        );
    }
}


export default Page;
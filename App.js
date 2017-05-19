import React, {Component} from 'react';
import Modal from "./Modal";

class App extends Component {

    constructor(props){
        super(props);

        //Here we set the initial state
        this.state = { isOpen: false };
    }

    componentDidMount() {
        // Here we will listen to "keydown" and act only if the key was "ESC"
        document.addEventListener('keydown', (e) => {
            // check if the keyCode === 27
            if(e.keyCode === 27) {
                this.handleOnClose();
            }
        });
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleOnCloseModal);
    }

    //Here we will set state to boolean, true - add modal, false - there is no modal in a DOM
    handleOnOpen = () => {
        this.setState({
            isOpen: true,
        })
    };

    handleOnClose = () => {
        this.setState({
            isOpen: false,
        });
    };

    handleOnCloseModal = (e) => {
        e.stopPropagation();
    };

    render() {

        const tekst = (<p>Lorem ipsum dolor sit amet, te vidit appetere vim. Cu vis ullum euripidis comprehensam,
            equidem omittam menandriquo at. Noster aperiri mei ad. At alia aperiam consequat nam, omnis novum docendi per at.
            Assum deleniti vulputatepri in, nominati iudicabit scripserit cu usu, est justo equidem imperdiet ea.</p>);

        return (
            <div>
                <button onClick={this.handleOnOpen}>MODALA</button>
                <Modal onOpen={this.state.isOpen}
                       onClose={this.handleOnClose}
                       onCloseModal={this.handleOnCloseModal}>
                    {tekst}
                    {tekst}
                    {tekst}
                </Modal>
            </div>
        );
    }
}

export default App;


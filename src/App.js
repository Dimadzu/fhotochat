import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import { Image } from './component/Galery';
import { Formfeedback } from './component/Formfeedback';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            allPhoto: [],
            objectfoto: {}

        };
    }
    componentDidMount = () => {
        this.getPhoto();
    }
    getPhoto = () => {
        fetch(
                `https://boiling-refuge-66454.herokuapp.com/images`
            )
            .then(response => {
                return response.json();
            })
            .then(photo => {
                    this.setState({
                        allPhoto: photo
                    })
                }

            )
    }

    showModal = (id) => {
        fetch(
                `https://boiling-refuge-66454.herokuapp.com/images/${id}`
            )
            .then(response => {
                return response.json();
            })
            .then(bigFhoto => {
                this.setState({
                    objectfoto: bigFhoto
                })
            })
        document.body.classList.add('notScrollable');
        document.getElementById('cover').classList.remove('hidden');
        document.getElementById('form-feedback').classList.remove('hidden');


    }
    closeModal = () => {
        document.body.classList.remove('notScrollable');
        document.getElementById('cover').classList.add('hidden');
        document.getElementById('form-feedback').classList.add('hidden');
    }


    render() {
        return ( < div className = 'container' >
            <
            header className = 'header' > < /header>  <
            div className = 'container_wraper' >
            <
            Image allPhoto = { this.state.allPhoto }
            showModal = { this.showModal }
            />  <
            Formfeedback objectfoto = { this.state.objectfoto } > < /Formfeedback>

            <
            /div>  <
            footer className = 'footer' > < /footer> <
            div className = "cover hidden"
            id = "cover" > < /div> </div >

        )
    }
}
export default App;
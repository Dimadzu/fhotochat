import React from 'react';
import '../App';
import close from '../image/close.png';
export class Formfeedback extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''

        };
        this.closeModal=()=>{
            document.body.classList.remove('notScrollable');
            document.getElementById('cover').classList.add('hidden');
            document.getElementById('form-feedback').classList.add('hidden');
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

    
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event){
        event.preventDefault();
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${this.props.objectfoto.id}/comments`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:'user',
                comment:this.state.value
            }),
          })
            .then((response) => {
              console.log('response', response.status)
        
            })
        
      }
    render() {
        const{objectfoto}= this.props;
        return ( 
          <div className = "form-feedback hidden" id="form-feedback">
              <img className='close'src={close} alt="" onClick={this.closeModal}/>
              <img className='bigImage' src={objectfoto.url}></img>
              <p>{objectfoto.comments}</p>
              <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <br></br>
                    <label>Your feedback: </label>
                    <textarea id="text-feedback" required placeholder='Оставьте отзыв' value={this.state.value} onChange={this.handleChange}></textarea>
                    <br></br>
                    <br></br>
                    <button className="button invalid" id="send" type="submit">SEND</button>
                </form>

          </div>
        
        )
    }
}

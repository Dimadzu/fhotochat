import React from 'react';
import '../App';
import close from '../image/close.png';
export class Formfeedback extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

    
    }
    closeModal=()=>{
      this.setState({value: ' '})
      document.querySelector(".putValue").innerHTML=this.state.value;
      document.querySelector(".statusCode").innerHTML="";
      document.body.classList.remove('notScrollable');
      document.getElementById('cover').classList.add('hidden');
      document.getElementById('form-feedback').classList.add('hidden');
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
              document.querySelector(".putValue").innerHTML=this.state.value;
              document.querySelector(".statusCode").innerHTML="статус отправки запроса на сервер :"+response.status;
    
            })
          

          }
      
    render() {
        const{objectfoto}= this.props;
        return ( 
          <div className = "form-feedback hidden" id="form-feedback">
              <img className='close'src={close} alt="" onClick={this.closeModal}/>
              <img className='bigImage' src={objectfoto.url}></img>
              <form onSubmit={this.handleSubmit}>
                    <p className='statusCode'></p>
                    <p className='putValue'></p>
                    <label>Your comment: </label>
                    <textarea id="text-feedback" required placeholder='Оставьте отзыв' value={this.state.value} onChange={this.handleChange}></textarea>
                    <button className="button" id="send" type="submit">SEND</button>
                </form>

          </div>
        
        )
    }
}

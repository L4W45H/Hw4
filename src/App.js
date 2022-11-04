import { useState } from 'react';
import './App.css';

function App() {
  
  const [data,setData] = useState({
    name:'',
    email:'',
    password:''
  });

  const [error,setError]=useState({
    name: ''
  });

  const handleChange = (e) => {
    const {value, name} = e.target;
    setData((state) => ({
      ...state,
      [name]:value
    }));
  }


    const handleClick = () => {
      console.log('Data: ', data);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (data.password.length <6) {
        setError((state) => ({
          name: 'min 6 char'
        }));
        return;
        
      }
      if (data.password.length >10) {
        setError((state) => ({
          name: 'max 10 char'
        }));
        return;
      }
    
      else {
        setError((state) => ({
          name: ''
        }));
      
      }
      
      handleClick();
    }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input onChange={handleChange} name='name' value={data.name}/>
          </label>
          <hr/>
          <label>
            Email:
            <input onChange={handleChange} name='email' value={data.email}/>
          </label>
          <hr/>
          <label>
            Password:
            <input onChange={handleChange} name='password' value={data.password}/>
          </label>
          {!!error.name && (
            <div><i>{error.name}</i></div>
          )}
          <hr/>
         <div>
          <button >sumbit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;

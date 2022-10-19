import pic from './Images/image1.jpg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>LIFE QUOTES</h2>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><div class="content"><p>Keep smiling, because life is a beautiful thing and there's so much to smile about.</p>
        <p>Life is a long lesson in humility.</p>
            <footer>
        <button className='button'>To be continue</button>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;








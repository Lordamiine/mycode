import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     

      <nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      &nbsp; BILLING APP
    </a>
  </div>
</nav>


      <header className="App-header">
      <div className='container'>
      <form class="row g-3">
      <div class="col-12">
    <h1 className='text-black'>New bill</h1>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="email" class="form-control" id="name"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="password" class="form-control" id="email"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="address2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="city"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="state" class="form-select">
      <option selected >Choose</option>
      <option>Casablanca-Settat</option>
      <option>Rabat-Salé</option>
      <option>Daraa - Tafilalt</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-2 ">
    <label for="inputZip" class="form-label">TOTAL</label>
    <div class="input-group mb-3">
    <input type="number" class="form-control" id="total"/><span class="input-group-text">Dh</span>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-info">SUBMIT</button>
  </div>
</form>
</div>
      </header>
    </div>

  );
}

export default App;

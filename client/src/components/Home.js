import "./style.css";

function Home() {
  return (
    <div class="Home">
      <div className="signin_card">
        <form>
          <h1>Sign In</h1>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" />
          </div>
          <button type="submit" class="btn btn-default">
            Sign In
          </button>
        </form>
      </div>
      <div className="signin_card">
        <form>
          <div class="form-group">
            <h1>Sign Up</h1>
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="email">Name:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="email">Age</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" />
          </div>
          <button type="submit" class="btn btn-default">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

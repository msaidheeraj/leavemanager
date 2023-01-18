export function Login1() {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: "flex",
          
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <div className="row">
          <form className="col col-6">
            <div class="mb-3">
              <label for="username" className="form-label">
                User Name
              </label>
              <input type="text" className="form-control" id="userName"></input>
            </div>
            <div class="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
              ></input>
            </div>
            <div class="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

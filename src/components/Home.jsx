function Home()
{
    return(
        <>
        <div className="jumbotron">
      <h1 className="display-4">Welcome to Movie Rating App</h1>
      <p className="lead">This is a simple app add movie rating bla bla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fugit suscipit rem. Commodi inventore tempora, sit incidunt libero sint esse sequi? Dolor minima harum iusto beatae tempora impedit reprehenderit nam.</p>
      <hr className="my-4"/>
      <p>Choose below options to add or view reviews</p>
      <p className="lead">
      <a className="btn btn-primary btn-lg m-2" href="/addreview" role="button">Add Reviews</a>
      <a className="btn btn-warning btn-lg m-2" href="/viewreviews" role="button">View Reviews</a>
  </p>
</div>
        </>
    )
}

export default Home;
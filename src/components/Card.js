import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
            <div class="card" style={{Width: "18rem;"}}>
  <img src="frnd.jpg" class="card-img-top" alt="test"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react';

const Skills = () => {
  const styles = {
    width: '200px'
  }

return(
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h6>Profile > Skills</h6>
          <hr />
          <div className="card-group">
            <div>
              <div className="skill-div d-flex flex-column justiy-content-center align-items-center">
                <img src="/images/badge.png" className="skill-img"  alt="skill badge"/>
                <i className="fab fa-js-square skill-icon mx-auto"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Skills Card" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Skills Card" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Skills Card" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Skills Card" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            
          </div>

        </div>
      </div>
    </div>
  </div>
)
}

export default Skills;
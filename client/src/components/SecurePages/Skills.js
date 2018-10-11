import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'



const Skills = () => {
  const styles = {
    width: '200px'
  }

return(
  <div>
    <Navbar
      imageSrc={"../images/mycompany.png"}
      imageAlt={"My Company Logo"}
      navLinks={["home", "profile", "signout"]}
      signIn={false}
      userName={"Dan"}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-9">
          <h6>Profile > Skills</h6>
          <hr />
          <div className="card-group">
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">jQuery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet</p>
              </div> 
            </div>
            <div className="card" style={styles}>
              <img class="card-img-top" src="../images/hundred.png" alt="Card image cap" />
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
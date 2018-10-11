import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'

const Awards = () => (
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
          <h6>Profile > Awards</h6>
          <hr />
          <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Gift</th>
      <th scope="col">Date</th>
      <th scope="col">Vale / Location</th>
      <th scope="col">Reason</th>
      <th scope="col">Given To</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src="../images/movie50.png" alt="movie"></img></td>
      <td>10/01/18</td>
      <td>$25 <br /> Regal Movies</td>
      <td>Top Sales Performance</td>
      <td>Leanne Graham</td>
      <td>Not Yet Claimed</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img src="../images/movie50.png" alt="movie"></img></td>
      <td>10/01/18</td>
      <td>$25 <br /> Regal Movies</td>
      <td>Top Sales Performance</td>
      <td>Leanne Graham</td>
      <td>Not Yet Claimed</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><img src="../images/movie50.png" alt="movie"></img></td>
      <td>10/01/18</td>
      <td>$25 <br /> Regal Movies</td>
      <td>Top Sales Performance</td>
      <td>Leanne Graham</td>
      <td>Not Yet Claimed</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><img src="../images/movie50.png" alt="movie"></img></td>
      <td>10/01/18</td>
      <td>$25 <br /> Regal Movies</td>
      <td>Top Sales Performance</td>
      <td>Leanne Graham</td>
      <td>Not Yet Claimed</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td><img src="../images/movie50.png" alt="movie"></img></td>
      <td>10/01/18</td>
      <td>$25 <br /> Regal Movies</td>
      <td>Top Sales Performance</td>
      <td>Leanne Graham</td>
      <td>Not Yet Claimed</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td><img src="../images/movie50.png" alt="movie"></img></td>
      <td>10/01/18</td>
      <td>$25 <br /> Regal Movies</td>
      <td>Top Sales Performance</td>
      <td>Leanne Graham</td>
      <td>Not Yet Claimed</td>
    </tr>

  </tbody>
</table>


        </div>
      </div>
    </div>
  </div>
)

export default Awards;
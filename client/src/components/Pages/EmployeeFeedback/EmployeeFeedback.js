import React, { Component } from "react";
import Jumbotron from "../../Elements/Jumbotron";


class EmployeeFeedback extends Component {

    state = {
        feedback: [],

    }

    render() {
        return (
            <div className="container-fluid">
            <Jumbotron />
            <div className="row">
            <div className= "col-lg-12">
             <h1> EmployeeFeedback</h1>
            <span><h3>Please try to answer these questions as truthfully as possible. Thank you.</h3></span>
            </div>
            </div>

            <div className="row">
            <div className= "col-lg-12">
            <form>
            <div class="form-group">
            <label for="exampleFormControlSelect1"><p>1. Has a manager given you any recognition in the past month?</p></label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Yes, absolutely.</option>
              <option>Yes, somewhat.</option>
              <option>I don't remember</option>
              <option> No, not really.</option>
              <option>Not at all.</option>
            </select>
            </div>

     <div class="form-group">
    <label for="exampleFormControlSelect1"><p>2. On a scale of 1 to 10-10 being the best, how good is your direct supervisor at recognizing your contributions at work?</p></label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>

    <div class="form-group">
    <label for="exampleFormControlSelect1"><p>3.On a scale of 1 to 10-10 being the best, How well does your supervisor support your developmental goals?</p></label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>

    <div class="form-group">
    <label for="exampleFormControlSelect1"><p>4. On a scale of 1 to 10-10 being the best, Do you feel comfortable providing upward feedback to your supervisor?</p></label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>

     <div class="form-group">
            <label for="exampleFormControlSelect1"><p>5. Do you feel respected by your direct supervisor?</p></label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Yes, absolutely.</option>
              <option>Yes, somewhat.</option>
              <option>I don't remember</option>
              <option> No, not really.</option>
              <option>Not at all.</option>
            </select>
            </div>

     <div class="form-group">
    <label for="exampleFormControlSelect1"><p>6. On a scale of 1 to 10-10 being the best, how happy are you at work?</p></label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>

    <div class="form-group">
            <label for="exampleFormControlSelect1"><p>7. Do you feel like your role here has a purpose?</p></label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Yes, absolutely.</option>
              <option>Yes, somewhat.</option>
              <option>I don't remember</option>
              <option> No, not really.</option>
              <option>Not at all.</option>
            </select>
            </div>


              <div class="form-group">
            <label for="exampleFormControlSelect1"><p>8. Have you accomplished your goals in the last six months?</p></label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Yes, absolutely.</option>
              <option>Yes, somewhat.</option>
              <option>I don't remember</option>
              <option> No, not really.</option>
              <option>Not at all.</option>
            </select>
            </div>

    <div class="form-group">
    <label for="exampleFormControlSelect1"><p>9. On a scale of 1 to 10-10 being the best, how well do you feel like you're progressing professionally at this organization? </p></label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
    </div>

     <div class="form-group">
    <label for="exampleFormControlTextarea1">10. What kind of training would you like to receive to help you accomplish your career goals?</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
    </div>

        )
}
}

export default EmployeeFeedback; 

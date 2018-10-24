import React, { Component } from "react";
import Jumbotron from "../../Elements/Jumbotron";


class Feedback extends Component {

    state = {
        feedback: [],

    }

    render() {
        return (
            <div className="container-fluid">
            <Jumbotron />
            <div className="row">
            <div className= "col-lg-12">
             <h1> Employee Feedback</h1>
            <span><h3>Please try to answer these questions as truthfully as possible. Thank you.</h3></span>
            </div>
            </div>

            <div className="row">
            <div className= "col-lg-12">
            <form>
            <div class="form-group">
            <label for="q1"><p>1. On a scale of 1 to 10-10 being the best, Has a manager given you any recognition in the past month?</p></label>
            <select class="form-control" id="q1">
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
    <label for="q2"><p>2. On a scale of 1 to 10-10 being the best, how good is your direct supervisor at recognizing your contributions at work?</p></label>
    <select class="form-control" id="q2">
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
    <label for="q3"><p>3.On a scale of 1 to 10-10 being the best, how well does your supervisor support your developmental goals?</p></label>
    <select class="form-control" id="q3">
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
    <label for="q4"><p>4. On a scale of 1 to 10-10 being the best, Do you feel comfortable providing upward feedback to your supervisor?</p></label>
    <select class="form-control" id="q4">
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
            <label for="q5"><p>5. On a scale of 1 to 10-10 being the best, do you feel respected by your direct supervisor?</p></label>
            <select class="form-control" id="q5">
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
    <label for="q6"><p>6. On a scale of 1 to 10-10 being the best, how happy are you at work?</p></label>
    <select class="form-control" id="q6">
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
            <label for="q7"><p>7. On a scale of 1 to 10-10, do you feel like your role here has a purpose?</p></label>
            <select class="form-control" id="q7">
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
            <label for="q8"><p>8. Have you accomplished your goals in the last six months?</p></label>
            <select class="form-control" id="q8">
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
    <label for="q9"><p>9. On a scale of 1 to 10-10 being the best, how well do you feel like you're progressing professionally at this organization? </p></label>
    <select class="form-control" id="q9">
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
    <label for="q10">10. What kind of training would you like to receive to help you accomplish your career goals?</label>
    <textarea class="form-control" id="q10" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
    </div>

        )
}
}

export default Feedback; 

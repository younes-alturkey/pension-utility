import React from 'react';
import './Calculator.css'


class Calculator extends React.Component {

  onBSalaryChange = (event) => {
    this.setState(this.props.setBSalary(event.target.value))
  }

  onDOBChange = (event) => {
    this.setState(this.props.setDOB(event.target.value))
  }

  onSubmitInput = () => {
    this.props.onRouteChange('rep')
  }

  render() {
    return(
      <div className="pt5">
        <div className='br3 k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
          <h1 style={{fontFamily: 'Calibri'}} className="b f3">Irfan Award Quick-Tool<p style={{textAlign: "center"}} className="f6 ma3 gray">This automated tool generates an estimate figure of the final Irfan Award.</p></h1>
        </div>
        <article className='Pattern br3 black k-10 mv3 w-80 w-80 w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="input" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <label style={{fontFamily: 'Calibri'}} className="db fw6 lh-copy f6 black b">Basic Salary</label>
                  <input
                    style={{fontFamily: 'Calibri'}}
                    onChange={this.onBSalaryChange}
                    placeholder="10000"
                    className="pa2 b black ba bg-transparent hover-bg-black hover-white w-100 ba b--near-black"
                    type="text"/>
                  </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6 black b" style={{fontFamily: 'Calibri'}}>Date of Birth</label>
                  <input
                    style={{fontFamily: 'Calibri'}}
                    onChange={this.onDOBChange}
                    className="b pa2 input-reset ba bg-transparent hover-black w-100 ba b--near-black"
                    type="date"
                    name="date"
                    id="date-of-birth"/>
                  </div>
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitInput}
                  className="b pa3 pv1 pt7 w3-button w3-round w3-hover-green grow pointer f4"
                  type="submit"
                  id="submitButton"
                  value="Generate Report"/>
                <div
                  style={{fontSize: "0.8rem", textAlign: "justify"}}
                  className="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow">
                  <p>Not affiliated nor endorsed by <a className="dim hover-black b link" href="https://www.sidf.gov.sa/en/Pages/Home.aspx" target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none"}}>Saudi Industrial Development Fund.</a></p>
                </div>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Calculator;

import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Link, Image } from '@react-pdf/renderer'
import './Report.css';
import hage from './hage.png';
import retirelogo from './retirelogo.png';
import gosi from './gosi.png';
import hc from './hc.png';
import award from './award.png';
import salary from './salary.png';
import applogo from './applogo.png';
import vialogo from './vialogo.png';
import veslogo from './veslogo.png';
import gtulogo from './gtulogo.png';

const styles = StyleSheet.create({

  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
    textAlign: "center"
  },
  img: {
    width: '50%',
    height: 100,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Courier',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    borderStyle: 'groove',
    borderWidth: 2,

  },
  body: {
    fontWeight: 'bold',
    fontFamily: 'Courier',
    fontSize: 20,
    paddingTop: 15,
    textAlign: "left"
  },
  imp: {
    color: '#02894C',
    fontWeight: 'bold',
    fontFamily: "Courier",
    fontSize: 18,
    paddingTop: 15,
    textAlign: "justify"
  },
  impC: {
    color: '#02894C',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 15,
    textAlign: "justify"
  },
  footer: {
    fontFamily: "Courier",
    fontSize: 12,
    paddingTop: 40,
  },
  date: {
    fontFamily: "Courier",
    fontSize: 9,
    paddingBottom: 10,
    textAlign: "left"
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#02894C',
  }
});

class Report extends React.Component {

  onBack = () => {
    this.props.onRouteChange('cal');
  }

  getTodaysDate = () => {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  calculateHAge = () => {
    const age = Math.round((Date.parse(this.getTodaysDate()) - Date.parse(this.props.state.dob))/30550000000);
    return isNaN(age) ? 0 : age;
  }

  calculateHAgeAcu = () => {
    const rawAge = ((Date.parse(this.getTodaysDate()) - Date.parse(this.props.state.dob))/30550000000);
    const age = Math.round((rawAge) * 100) / 100;
    return isNaN(age) ? 0 : age;
  }

  performCalculations = () => {
    let result = {
      bs: this.props.state.bs,
      dob: this.props.state.dob,
      age: 0,
      ytr: 0,
      acuYTR: 0,
      vesm: 0,
      gosiSalary: 0,
      gosiSalarystr: '',
      gosiCont: 0,
      gosiContstr: '',
      via: 0,
      viastr: '',
      gtu: 0,
      gtustr: '',
      ia: 0,
      viaGtu: 0,
      medCov: 0
    };

    const age = this.calculateHAge();
    result.age = age;

    const ytr = 60 - age;
    result.ytr = ytr;

    const acuYTR = Math.round(((60 - this.calculateHAgeAcu()) + Number.EPSILON) * 100) / 100;
    result.acuYTR = acuYTR;
    let vesm = 0;
    if (acuYTR > 1 && acuYTR < 1.9999999999) {
      vesm = 12
    } else if (acuYTR > 2 && acuYTR < 2.9999999999) {
      vesm = 13;
    } else if (acuYTR > 3 && acuYTR < 3.9999999999) {
      vesm = 14;
    } else if (acuYTR > 4 && acuYTR < 4.9999999999) {
      vesm = 15;
    } else if (acuYTR > 5 && acuYTR < 5.9999999999) {
      vesm = 16;
    } else if (acuYTR > 6 && acuYTR < 6.9999999999) {
      vesm = 17;
    } else if (acuYTR > 7 && acuYTR < 7.9999999999) {
      vesm = 18;
    } else if (acuYTR > 8 && acuYTR < 8.9999999999) {
      vesm = 19;
    } else if (acuYTR > 9 && acuYTR < 9.9999999999) {
      vesm = 20;
    } else if (acuYTR > 10 && acuYTR < 10.9999999999) {
      vesm = 21;
    } else if (acuYTR > 11 && acuYTR < 11.9999999999) {
      vesm = 22;
    } else if (acuYTR > 12 && acuYTR < 12.9999999999) {
      vesm = 23;
    } else if (acuYTR > 13 && acuYTR < 13.9999999999) {
      vesm = 24;
    } else if (acuYTR > 14 && acuYTR < 14.9999999999) {
      vesm = 25;
    } else if (acuYTR > 15 && acuYTR < 15.9999999999) {
      vesm = 26;
    } else if (acuYTR > 16 && acuYTR < 16.9999999999) {
      vesm = 27;
    } else if (acuYTR > 17 && acuYTR < 17.9999999999) {
      vesm = 28;
    } else if (acuYTR > 18 && acuYTR < 18.9999999999) {
      vesm = 29;
    } else if (acuYTR > 19 && acuYTR < 19.9999999999) {
      vesm = 30;
    } else if (acuYTR > 20 && acuYTR < 20.9999999999) {
      vesm = 31;
    } else if (acuYTR > 21 && acuYTR < 21.9999999999) {
      vesm = 32;
    } else if (acuYTR > 22 && acuYTR < 22.9999999999) {
      vesm = 33;
    } else if (acuYTR > 23 && acuYTR < 23.9999999999) {
      vesm = 34;
    } else if (acuYTR > 24 && acuYTR < 24.9999999999) {
      vesm = 35;
    } else if (acuYTR > 25 && acuYTR < 25.9999999999) {
      vesm = 36;
    } else if (acuYTR > 26) {
      vesm = 36;
    } else {
      vesm = 0;
    }
    result.vesm = vesm;
    const gosiSalary = isNaN(this.props.state.bs * 1.25) ? 0 : this.props.state.bs * 1.25;
    result.gosiSalary = gosiSalary;
    let gosiSalarystr = '';
    const gosiSalaryL = gosiSalary.toString().length;
    if(gosiSalary > 999999) {
      gosiSalarystr = gosiSalary.toString().substring(0,1) + "," + gosiSalary.toString().substring(1,4) + "," + gosiSalary.toString().substring(4,gosiSalaryL);
    } else if(gosiSalary > 99999) {
      gosiSalarystr = gosiSalary.toString().substring(0,3) + "," + gosiSalary.toString().substring(3,gosiSalaryL);
    } else if (gosiSalary > 9999) {
      gosiSalarystr = gosiSalary.toString().substring(0,2) + "," + gosiSalary.toString().substring(2,gosiSalaryL);
    } else if (gosiSalary > 999) {
      gosiSalarystr = gosiSalary.toString().substring(0,1) + "," + gosiSalary.toString().substring(1,gosiSalaryL);
    } else {
      gosiSalarystr = gosiSalary.toString();
    }
    result.gosiSalarystr = gosiSalarystr;
    const gosiCont = Math.round(((gosiSalary * 0.09) + Number.EPSILON) * 100) / 100;
    result.gosiCont = gosiCont;
    let gosiContstr = '';
    const gosiContL = gosiCont.toString().length;
    if(gosiCont > 999999) {
      gosiContstr = gosiSalary.toString().substring(0,1) + "," + gosiSalary.toString().substring(1,4) + "," + gosiSalary.toString().substring(4,gosiSalaryL);
    } else if(gosiCont > 99999) {
      gosiContstr = gosiCont.toString().substring(0,3) + "," + gosiCont.toString().substring(3,gosiContL);
    } else if (gosiCont > 9999) {
      gosiContstr = gosiCont.toString().substring(0,2) + "," + gosiCont.toString().substring(2,gosiContL);
    } else if (gosiCont > 999) {
      gosiContstr = gosiCont.toString().substring(0,1) + "," + gosiCont.toString().substring(1,gosiContL);
    } else {
      gosiContstr = gosiCont.toString();
    }
    result.gosiContstr = gosiContstr;
    const via = Math.round(((this.props.state.bs * vesm) + Number.EPSILON) * 100) / 100;
    result.via = via;
    let viastr = '';
    const viaL = via.toString().length;
    if(via > 999999) {
      viastr = gosiSalary.toString().substring(0,1) + "," + gosiSalary.toString().substring(1,4) + "," + gosiSalary.toString().substring(4,gosiSalaryL);
    } else if(via > 99999) {
      viastr = via.toString().substring(0,3) + "," + via.toString().substring(3,viaL);
    } else if (via > 9999) {
      viastr = via.toString().substring(0,2) + "," + via.toString().substring(2,viaL);
    } else if (via > 999) {
      viastr = via.toString().substring(0,1) + "," + via.toString().substring(1,viaL);
    } else {
      viastr = gosiCont.toString();
    }
    result.viastr = viastr;
    let gtu = 0;
    if (acuYTR >= 3) {
      gtu = Math.round(((36 * gosiCont) + Number.EPSILON) * 100) / 100;
    } else {
      gtu = Math.round(((acuYTR * 12 * gosiCont) + Number.EPSILON) * 100) / 100;
    }
    result.gtu = gtu;
    let gtustr = '';
    const gtuL = gtu.toString().length;
    if(gtu > 999999) {
      gtustr = gosiSalary.toString().substring(0,1) + "," + gosiSalary.toString().substring(1,4) + "," + gosiSalary.toString().substring(4,gosiSalaryL);
    } else if(gtu > 99999) {
      gtustr = gtu.toString().substring(0,3) + "," + gtu.toString().substring(3,gtuL);
    } else if (gtu > 9999) {
      gtustr = gtu.toString().substring(0,2) + "," + gtu.toString().substring(2,gtuL);
    } else if (gtu > 999) {
      gtustr = gtu.toString().substring(0,1) + "," + gtu.toString().substring(1,gtuL);
    } else {
      gtustr = gosiCont.toString();
    }
    result.gtustr = gtustr;
    let ia = 0;
    const viaGtu = via + gtu;
    if(viaGtu > 0 && viaGtu < 300000) {
      ia = 300000;
    } else if (viaGtu > 300000 && viaGtu < 700000) {
      ia = Math.round((viaGtu + Number.EPSILON) * 100) / 100;
    } else if (viaGtu > 700000) {
      ia = 700000;
    }
    result.ia = ia;
    const medCov = 5;
    result.medCov = medCov;

    return result;
  }

  GeneratePDF = () => {
    const { bs, dob, age, ytr, gosiSalarystr, gosiContstr, ia, medCov, vesm, viastr, gtustr } = this.performCalculations();
    const now = new Date().toString();
    const date = now.substring(8,10) + "-" + now.substring(4,7).toUpperCase() + "-" + now.substring(11,15);
    const time = now.substring(16,18) + "-" + now.substring(19,21) + "-" + now.substring(22,24);
    const fileName = `Irfan_Check_Report-DATE-${date}-TIME-${time}`;
    return (
      <div className="b pa3 ml1 pv1 input-reset ba b--black black w3-red w3-hover-red bg-transparent grow pointer f6 dib">
        <PDFDownloadLink document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Image style={styles.img} src={applogo}></Image>
                <Text style={styles.date}>DATE: {now.substring(8,10)}-{now.substring(4,7).toUpperCase()}-{now.substring(11,15)}</Text>
                <Text style={styles.date}>TIME: {now.substring(16,18)}:{now.substring(19,21)}:{now.substring(22,24)} AST</Text>
                <Text style={styles.heading}>Irfan Check Report</Text>
                <Text style={styles.body}>Basic Salary-:</Text>
                <Text style={styles.imp}>{bs === 0 ? "no salary entered" : bs + " SAR"}</Text>
                <Text style={styles.body}>Date of Birth-:</Text>
                <Text style={styles.imp}>{dob == null ? "no birth date entered" : dob}</Text>
                <Text style={styles.body}>Basic Info Summary-:</Text>
                <Text style={styles.imp}>The subject is <Text style={styles.impC}>{age} years old</Text> by Hijri calendar, and is therefore expected to work for <Text style={styles.impC}>{ytr} more years</Text>. The calculated VES index is <Text style={styles.impC}>{vesm}</Text>, and the GOSI-Eligible Salary for the given subject is estimated to be <Text style={styles.impC}>{gosiSalarystr} SAR
                </Text>, and the Monthly GOSI Deductible is estimated to be <Text style={styles.impC}>{gosiContstr} SAR per month</Text>. Finally, the computed VES Incentive Award is <Text style={styles.impC}>{viastr} SAR</Text> and GOSI Contributions Top Up (9%) of <Text style={styles.impC}>{gtustr} SAR</Text>.</Text>
                <Text style={styles.body}>Irfan Benefits-:</Text>
                <Text style={styles.imp}>The subject estimated Irfan Award per standard calculations is <Text style={styles.impC}>{ia.toString().substring(0,3) + "," + ia.toString().substring(3,ia.toString().length)} SAR</Text>. Lastly, the subject is entitled to <Text style={styles.impC}>{medCov} years</Text> of Medical Coverage.</Text>
                <Text style={styles.footer}>This report was generated using <Link style={styles.link} src="https://sidfves.info/">Irfan Check Quick-Tool</Link> ©.</Text>
              </View>
            </Page>
          </Document>
        } fileName={fileName}>
          {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Generate PDF')}
        </PDFDownloadLink>
      </div>
    )
  }

  render() {
    const { age, ytr, gosiSalarystr, gosiContstr, ia, medCov, vesm, viastr, gtustr } = this.performCalculations();
    return (
      <div className="pt5">
        <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
          <h1 className="b f3">Your Information</h1><br/>
        </div>
        <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <ul className="w3-ul w3-card-2 w3-center" style={{ width: "100%" }}>
              <li>
                <h6 className="f4 grow">
                  <img src={hage} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Hijri Age &#8594;  <strong>{age} yrs</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={retirelogo} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Years to Retirement &#8594;  <strong>{isNaN(ytr) ? "0 yrs" : age > 0 ? ytr > 0 ? ytr + " yrs" : "retired" : "0 yrs"}</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={veslogo} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">VES Multiples &#8594;  <strong>{age > 0 ? vesm : 0}</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={salary} alt="" className="w3-bar-item w3-square" style={{ width:"70px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">GOSI-Eligible Salary &#8594;  <strong>{gosiSalarystr} &#65020;</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={gosi} alt="" className="w3-bar-item w3-square" style={{ width:"70px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Monthly GOSI Cut &#8594;  <strong>{gosiContstr} &#65020;</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={vialogo} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">VES Incentive Award &#8594;  <strong>{vesm <= 0 ? "0" : viastr} &#65020;</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={gtulogo} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">GOSI Top Up (9%) &#8594;  <strong>{gtustr} &#65020;</strong></span>
                </h6>
              </li>
            </ul>
        </div>
        <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
          <h1 className="b f3">Your Irfan Benefits</h1>
        </div>
        <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <ul className="w3-ul w3-card-2 w3-center" style={{ width: "100%" }}>
              <li>
                <h6 className="f4 grow">
                  <img src={award} alt="" className="w3-bar-item w3-square" style={{ width:"70px" }}/>
                    <br/>
                    <span style={{fontSize: "1rem", textAlign: "justify"}} className="w3-bar-item">Irfan Award &#8594;  <strong>{ia > 0 ? ia.toString().substring(0,3) + "," + ia.toString().substring(3,ia.length) : ia} &#65020;</strong></span>
                </h6>
              </li>
              <li>
                <h6 className="f4 grow">
                  <img src={hc} alt="" className="w3-bar-item w3-square" style={{ width:"60px" }}/>
                    <br/>
                    <span  style={{fontSize: "1rem", textAlign: "justify"}}className="w3-bar-item">Medical Coverage &#8594;  <strong>{ia > 0 ? medCov : 0} yrs</strong></span>
                </h6>
              </li>
              <li>
                <div
                  style={{fontSize: "0.8rem", textAlign: "justify"}}
                  className="b w3-panel w3-pale-red w3-leftbar w3-border-red">
                  <p>Please, note that any estimate figures generated by this tool are not final. Refer to the official and approved applications.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <h1 className="b f3">Options</h1>
          </div>
          <div className='br3 black k-10 mv3 w-80 w-80-m w-50-l mw7 shadow-1 center w3-border-green w3-leftbar w3-rightbar w3-white'>
            <div className="ma2 pa2 w-100">
              <div
                style={{fontSize: "0.8rem", textAlign: "justify"}}
                className="b w3-panel w3-pale-green w3-leftbar w3-border-green">
                <p>Please, note that this tool is secured with an SSL encryption, and runs completely offline on your device.</p>
              </div>
              <input
                onClick={this.onBack}
                className="b pa3 pv1 mr2 input-reset ba b--black black bg-hover-white bg-transparent grow pointer f6 dib"
                type="submit"
                value="&#8592;"/>
                {this.GeneratePDF()}
            </div>
          </div>
      </div>
    );
  }
}

export default Report;

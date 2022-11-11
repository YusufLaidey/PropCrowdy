import React from 'react'

import styled from 'styled-components'

import chart from "../images/chart.svg"
import smile from "../images/smile.svg"
import smile1 from "../images/smile1.svg"
import Icon from '../images/Icon.svg'
import WhatApp from '../images/WhatsApp 1.svg'
import Ellipse1 from '../images/Ellipse1.svg'
import Ellipse2 from '../images/Ellipse2.svg'
import Ellipse3 from '../images/Ellipse3.svg'
import arrow from '../images/arrow.svg'
import googleplay from '../images/googleplay.svg'
import Iconmaterial from '../images/Iconmaterial.svg'
import search from '../images/search.svg'
// import searchicon from '../images/searchicon.svg'
// import moneybill from '../images/moneybill.svg'
// import trendingup from '../images/trendingup.svg'

const Body = () => {
  return (
    <Style>
        <div className='div1'>
            <div className='div'>
                <p className='real'>Real Estate Investment Oppotunities For Property Development</p>
                <p className='prop'>PropCrowdy is a crowdfunding investment platform that empowers Nigerians to make smart investments in real estate</p>
                <div className='div1'>
                    <button className='button'>Get Started</button>
                    <div className='round'>
                      <p className='p'></p>
                    </div>
                    <p className='seee'>See How It Works</p>
                </div>
            </div>
            <div className='background'>
              <div>
                <img src={smile} alt="Iconbootstrap" className="smile"/>
                <div className='smilebackground'>
                  <img src={smile1} alt="Iconbootstrap" className="smile1"/>
                  <div>
                    <button className='pricebackground'>+ ₦28,900</button>
                    <p className='para'>Received from Investment</p>
                  </div>
                </div>
                <div>
                  <img src={chart} alt="Iconbootstrap" className="chart"/>
                </div>
              </div>
            </div>
        </div>
        <div className='div1'>
          <div>
            <img src={Icon} alt="Iconbootstrap" className="icon"/>
          </div>
          <div>
            <img src={WhatApp} alt="Iconbootstrap" className="whatsapp"/>
          </div>
        </div>
        <div className='div1'>
          <div className='background2'>
            <div>
              <p className='investors'>20,000+ Investors</p>
            </div>
            <div className='div1'>
              <img src={Ellipse1} alt="Iconbootstrap" className="ellipse"/>
              <div>
                <p className='emeka'>Emaka Ndusi</p>
                <p className='in'>Investor</p>
              </div>
            </div>
            <div className='div1'>
              <img src={Ellipse2} alt="Iconbootstrap" className="ellipse2"/>
              <div>
                <p className='titi'>Titilayo Otunba</p>
                <p className='in'>Investor</p>
              </div>
            </div>
            <div className='div1'>
              <img src={Ellipse3} alt="Iconbootstrap" className="ellipse3"/>
              <div>
                <p className='titi'>Hassain Omarn</p>
                <p className='in'>Investor</p>
              </div>
            </div>
            <div className='div1'>
              <p className='see'>See More</p>
              <img src={arrow} alt="Iconbootstrap" className="arrow"/>
            </div>
          </div>
          <div className='backgroundd'>
            <img src={smile1} alt="Iconbootstrap" className="smile2"/>
            <p className='ade'>Ade Mikel</p>
            <p className='invest'>Investor</p>
            <button className='divvv'>Join Our Investors Network</button>
          </div>
          <div>
            <p className='join'>Join Real Estate Investors investing realtime</p>
            <p className='crow'>PropCrowdy is a crowdfunding investment platform that empowers Nigerians to make smart investments in real estate</p>
            <img src={googleplay} alt="Iconbootstrap" className="google"/>
          </div>
        </div>
        <div>
          <p className='as'>As an Investor</p>
          <p className='get'>Get access to investment opportunities while getting expert advice on your investment choices. Our investment oppotunities are regulated by appropriate authorities, investors need not worry as their investment are safe and secure.</p>
        </div>
        <div className='div1'>
          <div className='background3'>
            <div className='inner'>
              <div className='div1'>
                <div>
                  <img src={Ellipse3} alt="Iconbootstrap" className="ellipse3i"/>
                </div>
                <div className='innerrr'>
                  <p className='price'>+ ₦180,900</p>
                  <p className='inn'>Investor</p>
                </div>
              </div>
            </div>
            <div className='inner'>
            <div className='div1'>
                <div>
                  <img src={Ellipse2} alt="Iconbootstrap" className="ellipse3i"/>
                </div>
                <div className='innerrr'>
                  <p className='price'>+ ₦840,900</p>
                  <p className='inn'>Investor</p>
                </div>
              </div>
            </div>
            <div className='inner'>
            <div className='div1'>
                <div>
                  <img src={Ellipse1} alt="Iconbootstrap" className="ellipse3i"/>
                </div>
                <div className='innerrr'>
                  <p className='price'>+ ₦680,900</p>
                  <p className='inn'>Investor</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='div1'>
              <div className='background4'>
                <img src={Iconmaterial} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Set Up Your Account</p>
                <p className='easily'>Easily sign up with your social media account or create an account with your email</p>
              </div>
              <div className='background4i'>
                <img src={search} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Search Opportunities</p>
                <p className='easily'>Select a project opportunity and invest, get monthly updates on your dashboard.</p>
              </div>
            </div>
            <div className='div1'>
              <div className='background4'>
                <img src={search} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Fund A Project</p>
                <p className='easily'>Your return on Investment is deposited into your account at the end of the cycle.</p>
              </div>
              <div className='background4i'>
                <img src={search} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Get Returns</p>
                <p className='easily'>Follow up with trends on your dashboard and monitor your investments</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className='as'>As a Developer</p>
          <p className='get'>As a developer looking to crowd found a building project you can gain access to investors on PropCrowdy in few steps. Create a company profile, complete our verification and review processes. Only for Nigerian Registerd Companies.</p>
        </div>
        <div className='div1'>
          <div className='background5'>
            <p className='developer'>Developer</p>
            <div className='div1'>
              <p className='offer'>Offer Document</p>
              <p className='verified'>Verified</p>
            </div>
            <form></form>
          </div>
          <div>
          <div>
            <div className='div1'>
              <div className='background4'>
                <img src={Iconmaterial} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Set Up Your Account</p>
                <p className='easily'>Easily sign up with your social media account or create an account with your email</p>
              </div>
              <div className='background4i'>
                <img src={search} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Search Opportunities</p>
                <p className='easily'>Select a project opportunity and invest, get monthly updates on your dashboard.</p>
              </div>
            </div>
            <div className='div1'>
              <div className='background4'>
                <img src={search} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Fund A Project</p>
                <p className='easily'>Your return on Investment is deposited into your account at the end of the cycle.</p>
              </div>
              <div className='background4i'>
                <img src={search} alt="Iconbootstrap" className="Iconmaterial"/>
                <p className='setup'>Get Returns</p>
                <p className='easily'>Follow up with trends on your dashboard and monitor your investments</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </Style>
  )
}

export default Body


const Style = styled.button`
.div {
  margin-left: 191px;
  margin-top: 164px;
}

.div1 {
  display: flex;
}

.real {
  height: 174px;
  width: 646px;
  border-radius: nullpx;
  font-family: Tiempos Headline;
  font-size: 45px;
  font-weight: 900;
  line-height: 58px;
  letter-spacing: 0px;
  text-align: left;
  color: #050505;
}

.prop {
  height: 90px;
  width: 446px;
  left: 172px;
  top: 464px;
  border-radius: nullpx;
  font-family: Apercu Pro;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #000000;
}

.button {
  height: 60px;
  width: 162px;
  left: 0px;
  top: 0px;
  border-radius: 47px;
  border-color: #FF0000;
  background-color: #FF0000;
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  text-align: center;
  text-transform: capitalize;
}

.round {
  height: 60px;
  width: 60px;
  left: 384px;
  top: 587px;
  border-radius: 47px;
  background-color: #22D497;
  margin-left: 51px;
}

.p {
  position: absolute;
  width: 25px;
  height: 25px;
  background: #FFFFFF;
  border-radius: 2px;
  transform: rotate(90deg);
  margin-left: 17px;
  margin-top: 18px;
}

.seee {
  height: 30px;
  width: 130px;
  font-family: Apercu Pro;
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #FF0000;
  margin-left: 11px;
}

.background {
  height: 485px;
  width: 462px;
  border-radius: 20px;
  background-color: #F5F6F8;
  margin-top: 132px;
}

.smile {
  height: 549px;
  width: 330px;
  margin-top: -66px;
  margin-left: 146px;
}

.smilebackground {
  height: 85px;
  width: 286px;
  border-radius: 10px;
  margin-top: -422px;
  display: flex;
  background: #FFFFFFCC;
  margin-left: -100px;
}

.pricebackground {
  height: 26px;
  width: 86px;
  border-radius: 30px;
  background-color: #FF0000;
  font-family: Apercu Pro;
  font-size: 15px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  border-color: #FF0000;
  color: #060606;
  margin-left: -34px;
  margin-top: 16px;
}

.smile1 {
  width: 54px;
  height: 54px;
  margin-top: 16px;
  margin-left: 19px;
}

.para {
  width: 158px;
  height: 30px;
  font-family: Apercu Pro;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #757095;
  margin-left: 24px;
}

.div2 {
  margin-left: 14px;
}

.chart {
  width: 643px;
  height: 368px;
  border-radius: 10px;
  margin-top: 114px;
  margin-left: -470px;
}

.icon {
  height: 80px;
  width: 80px;
  margin-left: 440px;
  margin-top: 91px;
  overflow: visible; 
}

.whatsapp {
  height: 96px;
  width: 95px;
  margin-left: 707px;
  margin-top: 37px;
}

.background2 {
  height: 388px;
  width: 342px;
  border-radius: 16px;
  background: #FFFFFF;
  margin-top: -10px;
  margin-left: 136px;
  overflow: visible;
}

.divvv {
  height: 42px;
  width: 228px;
  border-radius: 6px;
  background: #FF0000;
  border-color: #FF0000;
  margin-left: 6px;
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  color: #FFFFFF;

}

.backgroundd{
  height: 318px;
  width: 330px;
  border-radius: 22px;
  background: #FFFFFF;
  margin-left: -70px;
  margin-top: 90px;
}

.investors {
  height: 31px;
  width: 214px;
  font-family: Tiempos Headline;
  font-size: 24px;
  font-weight: 900;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
  color: #070707;
  margin-top: 30px;
  margin-left: 34px;
}

.ellipse {
  height: 50px;
  width: 50px;
  margin-top: -4px;
  margin-left: 34px;
}

.ellipse2 {
  margin-top: 20px;
  margin-left: 34px;
}

.ellipse3 {
  margin-top: 20px;
  margin-left: 34px;
}

.emeka {
  height: 22px;
  width: 113px;
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #111235;
  margin-left: 17px;
  margin-top: 4px;
}

.in {
  height: 15px;
  width: 44px;
  font-family: Apercu Pro;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #6C6C6C;
  margin-top: -10px;
  margin-left: 17px;
}

.titi {
  height: 22px;
  width: 133px;
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #111235;
  margin-left: 17px;
  margin-top: 32px;
}

.see {
  height: 22px;
  width: 77px;
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #FF6160;
  margin-left: 37px;
  margin-top: 18px;
}

.arrow {
  height: 10px;
  width: 17px;
  margin-top: 26px;
}

.background3 {
  height: 318px;
  width: 330px;
  border-radius: 22px;
  background: #FFFFFF;
}

.smile2 {
  height: 100px;
  width: 100px;
  margin-top: 32px;
  margin-left: 12px;
}

.ade {
  height: 25px;
  width: 100px;
  font-family: Apercu Pro;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: #111235;
  margin-top: 32px;
  margin-left: 122px;
  }

.invest {
  height: 17px;
  width: 51px;
  font-family: Apercu Pro;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #6C6C6C;
  margin-top: 8px;
  margin-left: 140px;
}

.join {
  height: 73px;
  width: 411px;
  font-family: Tiempos Headline;
  font-size: 30px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0px;
  text-align: left;
  color: #050505;
  margin-top: 48px;
  margin-left: 143px;
}

.crow {
  height: 47px;
  width: 406px;
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-top: 20px;
  margin-left: 143px;
}

.google {
  height: 56px;
  width: 358px;
  margin-top: 37px;
  margin-left: 93px;
}

.as {
  height: 42px;
  width: 511px;
  font-family: Tiempos Headline;
  font-size: 30px;
  font-weight: 900;
  line-height: 39px;
  letter-spacing: 0px;
  text-align: left;
  color: #050505;
  margin-left: 153px;
  margin-top: 173px;
}

.get {
  height: 74px;
  width: 845px;
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-left: 153px;
}

.background3 {
  height: 407px;
  width: 531px;
  border-radius: 20px;
  background: #F5F6F8;
  margin-left: 153px;
}

.background4 {
  height: 206px;
  width: 221px;
  border-radius: 13px;
  background: #D9D9D966;
  margin-left: 163px;
  margin-bottom: 15px;
}

.background4i {
  height: 206px;
  width: 221px;
  border-radius: 13px;
  background: #D9D9D966;
  margin-left: 20px;
}

.inner {
  height: 85px;
  width: 433px;
  border-radius: 10px;
  background: #FFFFFF;
  margin-top: 41px;
  margin-left: 47px;
}

.ellipse3i {
  height: 54px;
  width: 54px;
  margin-top: 16px;
  margin-left: 16px;
}

.innerrr {
  height: 26px;
  width: 86px;
  border-radius: 30px;
  margin-top: 16px;
  margin-left: 14px;
  background: #3734A9;
}

.price {
  height: 14px;
  width: 76px;
  font-family: Apercu Pro;
  font-size: 15px;
  font-weight: bold;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #060606;
  margin-top: 8px;
  margin-left: 5px;
}

.inn {
  height: 17px;
  width: 51px;
  font-family: Apercu Pro;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #6C6C6C;
}

.Iconmaterial{
  height: 70.91426086425781px;
  width: 70.91426086425781px;
  margin-top: 21.87px;
}

.setup {
  height: 34px;
  width: 203px;
  font-family: Apercu Pro;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  color: #050505;
}

.easily {
  height: 44px;
  width: 186px;
  font-family: Apercu Pro;
  font-size: 10px;
  font-style: italic;
  margin-left: 16px;
  margin-top: -20px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: center;
  color: #000000;
}

.background5 {
  height: 492px;
  width: 404px;
  background: #F3F7FA;
  margin-left: 153px;
}

.developer {
  height: 31px;
  width: 105px;
  font-family: Manrope;
  font-size: 22px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  margin-top: 47px;
  margin-left: 36px;
}

.offer {
  height: 35px;
  width: 211px;
  font-family: Apercu Pro;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-left: 36px;
  margin-top: 10px;
}

.verified{
  height: 16px;
  width: 46px;
  font-family: Apercu Pro;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #FF0000;
  margin-left: -10px;
}
`
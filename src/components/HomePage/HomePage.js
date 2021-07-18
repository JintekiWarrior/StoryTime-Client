import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import './HomePage.scss'

const HomePage = () => {
  return (
    <Fragment>
      <h1>Story Time</h1>
      <div id="home-page-main-image"></div>
      <hr id="incline-line"></hr>
      <div className="begin-writing-container">
        <Nav.Link className='begin-writing-link' href='/#/sign-in'>Begin Writing</Nav.Link>
        <q className="home-quote">
          There is nothing to writing. All you do is sit down at a typewriter and bleed.
        </q>
        <p className="home-quote">- Ernest Hemingway</p>
      </div>
      <hr id="incline-line-2"></hr>
      <div className="begin-writing-container">
        <Nav.Link className='begin-writing-link' href='/#/sign-in'>Show Stories</Nav.Link>
        <q className="home-quote">
          Dont walk behind me; I may not lead. Dont walk in front of me
          I may not follow. Just walk beside me and be my friend.
        </q>
        <p className="home-quote">- Albert Camus</p>
      </div>
      <hr id="incline-line"></hr>
    </Fragment>
  )
}

export default HomePage

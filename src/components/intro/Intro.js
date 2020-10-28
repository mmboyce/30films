import React from 'react';
import './Intro.css';

export default function Intro() {
  return (
    <>
      <h1 className="display-2">30Films</h1>
      <p>
        This questionnaire is inspired by the
        {' '}
        <a href="https://i.imgur.com/O1VO4iO.png" className="intro-link font-weight-bold">30 Day Movie challenge</a>
        {' '}
        created by Instagram users
        {' '}
        <a href="https://www.instagram.com/itsraininghan/" className="intro-link font-weight-bold">@itsraininghan</a>
        ,
        {' '}
        <a href="https://www.instagram.com/hostile_0/" className="intro-link font-weight-bold">@hostile_0</a>
        , and
        {' '}
        <a href="https://www.instagram.com/cryscries/" className="intro-link font-weight-bold">@cryscries</a>
        .
      </p>
      <p>
        After filling out your responses, share your results with friends!
      </p>
      <p className="small font-italic">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
    </>
  );
}

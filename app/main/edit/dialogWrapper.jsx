"use client"
import ProfileDialog from '@components/ProfileDialog';
import React from 'react'
import { connect } from 'react-redux';
//wrapper to use states in server component so i dont have to make layout.jsx a client component
function dialogWrapper(props) {
  return (
    <>
    {props.showProfileDialog && <ProfileDialog/>}
    </>
  )
}

const mapStateToProps = (state) => ({
    showProfileDialog: state.showProfileDialog,
  });
  

  
  export default connect(mapStateToProps, null)(dialogWrapper);
  
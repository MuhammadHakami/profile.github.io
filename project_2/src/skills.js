import React, { Component } from 'react'

export default class skills extends Component {
  render() {
      const pro=this.props.skillsPro.map((item,index)=>{
          return <img className='col-md-3 skill-img col-sm-6 mt-1' src={process.env.PUBLIC_URL+"/assets/"+item} key={index} alt=""/>
      })
      const fam=this.props.skillsFam.map((item,index)=>{
        return <img className='col-md-3 skill-img col-sm-6 mt-1' src={process.env.PUBLIC_URL+"/assets/"+item} key={index} alt=""/>
    })
    return (
      <div>
        <h5 className='mt-5 center-text'>Proficient:</h5>
        {pro}
        <h5 className='mt-5'>Familiar:</h5>
        {fam}
      </div>
    )
  }
}

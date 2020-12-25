import { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class extends Component {

  render () {
    return (
      <div className='item'>
        <div>
          <Link href='/'>
            <a>Back Home</a>
          </Link>
        </div>
        {/* <h1>{this.props.item.title}</h1> */}
        <h2>
          {/* {this.props.item.subtitle} - {this.props.item.seller} */}
        </h2>
      </div>
    )
  }
}
import React from 'react'

const Grid = (props) => {
    const {
        sm='',
        md='2',
        lg='3',
        def='1'
    }=props
  return (
    <div className={`grid grid-cols-${def} ${sm? `sm:grid-cols-${sm}` : ''} md:grid-cols-${md} lg:grid-cols-${lg} ${props.className?props.className:''}`}>{props.children}</div>
  )
}

export default Grid
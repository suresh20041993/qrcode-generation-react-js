  import React from 'react'
  import propTypes from 'prop-types';


   const Student = (props) => {
    return (
      <div className="student">
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isMarriage</th>
                <td>{props.isMarried? "yes":"No"}</td>
            </tr>
            </tbody> 
        </table>
      </div> 
    )
  }

  export default Student

  Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isMarried: propTypes.bool,
  }

  Student.defaultProps = {
    name: "No Name",
    age: 0,
    isMarried: false,
  }
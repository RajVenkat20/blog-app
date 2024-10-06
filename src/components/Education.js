const Education = ({ degree, university, yearRange, coursework }) => {
    return (
      <>
        <div className="outermost-div">
          <div className="second-div">
            <div className="column left-column">
              <p><b>{degree} <br/></b></p>
              <span className="univName">{university}</span>
            </div>
            <div className="column right-column">
              <p>{yearRange}</p>
            </div>
          </div>
          <div className="coursework">
            <p><b>Relevant Coursework</b>: <span style={{ fontStyle: 'italic' }}>{coursework}</span></p>
          </div>
        </div>
      </>
    );
}

export default Education;
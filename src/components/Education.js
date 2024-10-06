const Education = ({ degree, university, yearRange, coursework }) => {
    return (
      <>
        <div class="outermost-div">
          <div class="second-div">
            <div class="column left-column">
              <p><b>{degree} <br/></b></p>
              <span className="univName">{university}</span>
            </div>
            <div class="column right-column">
              <p>{yearRange}</p>
            </div>
          </div>
          <div class="coursework">
            <p><b>Relevant Coursework</b>: <span style={{ fontStyle: 'italic' }}>{coursework}</span></p>
          </div>
        </div>
        
      </>
    );
}

export default Education;
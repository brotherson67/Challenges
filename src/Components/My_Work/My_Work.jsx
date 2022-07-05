import "./My_Work.css";

function My_Work() {
  return (
    <div class="workSection">
      <div class="emptyDiv"></div>
      {/* <!-- create carousel here to display different projects and their UIs--> */}
      <div id="work" class="work">
        <a
          href="https://plaindemon.github.io/weather-trails/"
          class="firstWork"
        >
          <div>
            <h2>My First App</h2>
          </div>
        </a>

        <div class="persProj" id="budget_tracker">
          <h3>
            <a href="https://github.com/brotherson67/tightwad_tracker">
              Budget-tracker
            </a>
          </h3>
          <p>This is a simple application that I built using ReactJS. </p>
        </div>

        <div class="persProj" id="MVC_Blog">
          <h3>
            <a href="https://brotherson67.github.io/MVC_Blog/">
              MVC Backend Blog App
            </a>
          </h3>
        </div>

        <div class="persProj" id="note_taker">
          <h3>
            <a href="https://brotherson67.github.io/noteApp/">
              Note Taking App
            </a>
          </h3>
        </div>

        <div class="persProj" id="employee_tracker">
          <h3>
            <a href="https://brotherson67.github.io/employeeTracker/">
              Employee Tracker App
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default My_Work;

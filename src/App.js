import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import {  createElement } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
// import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import Container from "@mui/material/Container";

function App() {
  const data = [
    {
      Id: 1,
      Subject: "Meeting1",
      StartTime: new Date(2023, 0, 15, 8, 0),
      EndTime: new Date(2023, 0, 15, 8, 30),
      IsAllDay: false,
      Status: "Completed",
      Priority: "High",
    },
    {
      Id: 2,
      Subject: "Meetin2",
      StartTime: new Date(2023, 0, 17, 10, 0),
      EndTime: new Date(2023, 0, 17, 12, 30),
      IsAllDay: false,
      Status: "Completed",
      Priority: "High",
    },
  ];

  function onPopupOpen(args) {
    if (args.type === "Editor") {
      if (!args.element.querySelector(".custom-field-row")) {
        let row = createElement("div", { className: "custom-field-row" });
        let formElement = args.element.querySelector(".e-schedule-form");
        formElement.firstChild.insertBefore(
          row,
          formElement.firstChild.firstChild
        );
        let container = createElement("div", {
          className: "custom-field-container",
        });
        let inputEle = createElement("input", {
          className: "e-field",
          attrs: { name: "EventOwner" },
        });
        container.appendChild(inputEle);
        row.appendChild(container);
        let drowDownList = new DropDownList({
          dataSource: [
            { text: "Taha", value: "taha" },
            { text: "Ali", value: "ali" },
            { text: "Ahmed", value: "ahmed" },
            { text: "Farhan", value: "farhan" },
          ],
          fields: { text: "text", value: "value" },
          value: args.data.EventOwner,
          floatLabelType: "Always",
          placeholder: "Event Owner",
        });
        drowDownList.appendTo(inputEle);
        inputEle.setAttribute("name", "EventOwner");
      }
    }
  }
  return (
    <>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <h1>Calendar</h1>
        </div>
        <ScheduleComponent
          height="550px"
          // ref={schedule => scheduleObj = schedule}
          eventSettings={{ dataSource: data }}
          popupOpen={onPopupOpen}
          // editorTemplate={editorTemplate}
          showQuickInfo={false}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </Container>
    </>
  );
}

export default App;

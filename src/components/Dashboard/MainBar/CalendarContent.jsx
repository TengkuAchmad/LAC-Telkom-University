// LIBRARY IMPORT
import { Calendar } from "antd";

const CalendarContent = () => {
  const headerrender = ({ value }) => {
    const year = value.year();
    const month = value.month() + 1;

    return (
      <div className="calendar-header mb-3">
        <span>{`${value.format("MMM")} ${year}`}</span>
      </div>
    );
  };

  return (
    <>
      <div className="card-date mt-5">
        <Calendar fullscreen={false} headerRender={headerrender}/>
      </div>
    </>
  );
};

export default CalendarContent;

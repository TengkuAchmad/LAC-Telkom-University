import DashboardContent from "../Dashboard/DashboardContent";

const ContentBar = (props) => {
  return (
    <>
      <section id="content-bar">
        {props.context == "dashboard" ? (
          <>
            <DashboardContent />
          </>
        ) : null}
      </section>
    </>
  );
};
export default ContentBar;

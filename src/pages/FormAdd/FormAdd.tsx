import "./FormAdd.scss";
import Form from "../../components/Form/Form";

function FormAdd() {
  return (
    <section className="form-add-section">  
      <h1>Add Team</h1>
      <Form action="http://localhost:8080/teams" method="POST" typeForm="Add" teamData={null}/>
    </section>
  );
}

export default FormAdd;

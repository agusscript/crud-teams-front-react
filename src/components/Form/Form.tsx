import "./Form.scss";
import Team from "../../entities/Team";

type FormType = {
  action: string;
  method: string;
  typeForm: string;
  teamData: Team | null;
};

function Form({ action, method, typeForm, teamData }: FormType) {
  return (
    <form action={action} method={method} encType="multipart/form-data" className="form">
      <label htmlFor="name">Name *</label>
      <input type="text" id="name" name="name" defaultValue={teamData?.name} />

      <label htmlFor="shortName">Short Name *</label>
      <input
        type="text"
        id="shortName"
        name="shortName"
        defaultValue={teamData?.shortName}
      />

      <label htmlFor="tla">Initials *</label>
      <input type="text" name="tla" id="tla" defaultValue={teamData?.tla} />

      <label htmlFor="country">Country *</label>
      <input type="text" name="country" id="country" defaultValue={teamData?.area.name} />

      <label htmlFor="founded">Founded Date *</label>
      <input type="text" name="founded" id="founded" defaultValue={teamData?.founded} />

      <label htmlFor="address">Address</label>
      <input type="text" name="address" id="address" defaultValue={teamData?.address} />

      <label htmlFor="venue">Stadium Name</label>
      <input type="text" name="venue" id="venue" defaultValue={teamData?.venue} />

      <label htmlFor="clubColors">Club Colors</label>
      <input
        type="text"
        name="clubColors"
        id="clubColors"
        defaultValue={teamData?.clubColors}
      />

      <label htmlFor="website">Website</label>
      <input type="text" name="website" id="website" defaultValue={teamData?.website} />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" defaultValue={teamData?.email} />

      <label htmlFor="phone">Phone</label>
      <input type="text" name="phone" id="phone" defaultValue={teamData?.phone} />

      <label htmlFor="image">Image</label>
      <input type="file" name="image" id="image" />

      <button className="main-btn" type="submit">
        {typeForm} Team
      </button>
    </form>
  );
}

export default Form;

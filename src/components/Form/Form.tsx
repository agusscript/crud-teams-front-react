import "./Form.scss";
import Team from "../../entities/Team";

type FormType = {
  typeForm: string;
  teamData: Team | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Form({ typeForm, teamData, onSubmit, onChange }: FormType) {
  return (
    <form
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="form"
    >
      <label htmlFor="name">Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={teamData?.name}
        onChange={onChange}
      />

      <label htmlFor="shortName">Short Name *</label>
      <input
        type="text"
        id="shortName"
        name="shortName"
        defaultValue={teamData?.shortName}
        onChange={onChange}
      />

      <label htmlFor="tla">Initials *</label>
      <input
        type="text"
        name="tla"
        id="tla"
        defaultValue={teamData?.tla}
        onChange={onChange}
      />

      <label htmlFor="country">Country *</label>
      <input
        type="text"
        name="country"
        id="country"
        defaultValue={teamData?.area.name}
        onChange={onChange}
      />

      <label htmlFor="founded">Founded Date *</label>
      <input
        type="text"
        name="founded"
        id="founded"
        defaultValue={teamData?.founded}
        onChange={onChange}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        defaultValue={teamData?.address}
        onChange={onChange}
      />

      <label htmlFor="venue">Stadium Name</label>
      <input
        type="text"
        name="venue"
        id="venue"
        defaultValue={teamData?.venue}
        onChange={onChange}
      />

      <label htmlFor="clubColors">Club Colors</label>
      <input
        type="text"
        name="clubColors"
        id="clubColors"
        defaultValue={teamData?.clubColors}
        onChange={onChange}
      />

      <label htmlFor="website">Website</label>
      <input
        type="text"
        name="website"
        id="website"
        defaultValue={teamData?.website}
        onChange={onChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        defaultValue={teamData?.email}
        onChange={onChange}
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        defaultValue={teamData?.phone}
        onChange={onChange}
      />

      <label htmlFor="image">Image</label>
      <input type="file" name="image" id="image" />

      <button className="main-btn" type="submit">
        {typeForm} Team
      </button>
    </form>
  );
}

export default Form;

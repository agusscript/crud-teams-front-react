import "./Form.scss";
import Team from "../../entities/Team";
import { useForm } from "react-hook-form";

type FormProps = {
  typeForm: string;
  teamData: Team | null;
  onSubmit: (team: Team) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Form({ typeForm, teamData, onSubmit, onChange }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Team>();

  const errorReqField = "This field can't be empty";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="name">Name *</label>
      <input
        type="text"
        id="name"
        defaultValue={teamData?.name}
        {...register("name", {
          required: errorReqField,
        })}
        placeholder={errors.name?.message}
        name="name"
        onChange={onChange}
      />

      <label htmlFor="shortName">Short Name *</label>
      <input
        type="text"
        id="shortName"
        defaultValue={teamData?.shortName}
        {...register("shortName", {
          required: errorReqField,
        })}
        placeholder={errors.shortName?.message}
        name="shortName"
        onChange={onChange}
      />

      <label htmlFor="tla">Initials *</label>
      <input
        type="text"
        id="tla"
        defaultValue={teamData?.tla}
        {...register("tla", {
          required: errorReqField,
        })}
        placeholder={errors.tla?.message}
        name="tla"
        onChange={onChange}
      />

      <label htmlFor="country">Country *</label>
      <input
        type="text"
        id="country"
        defaultValue={teamData?.area.name}
        {...register("country", {
          required: errorReqField,
        })}
        placeholder={errors.country?.message}
        name="country"
        onChange={onChange}
      />

      <label htmlFor="founded">Founded Date *</label>
      <input
        type="text"
        id="founded"
        defaultValue={teamData?.founded}
        {...register("founded", {
          required: errorReqField,
        })}
        placeholder={errors.founded?.message}
        name="founded"
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

      <label htmlFor="venue">Stadium Name *</label>
      <input
        type="text"
        id="venue"
        defaultValue={teamData?.venue}
        {...register("venue", {
          required: errorReqField,
        })}
        placeholder={errors.venue?.message}
        name="venue"
        onChange={onChange}
      />

      <label htmlFor="clubColors">Club Colors *</label>
      <input
        type="text"
        id="clubColors"
        defaultValue={teamData?.clubColors}
        {...register("clubColors", {
          required: errorReqField,
        })}
        placeholder={errors.clubColors?.message}
        name="clubColors"
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

      <label htmlFor="email">Email *</label>
      <input
        type="text"
        id="email"
        defaultValue={teamData?.email}
        {...register("email", {
          required: errorReqField,
        })}
        placeholder={errors.email?.message}
        name="email"
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

      <label htmlFor="crestUrl">Image Url</label>
      <input
        type="text"
        name="crestUrl"
        id="crestUrl"
        defaultValue={teamData?.crestUrl}
        onChange={onChange}
      />

      <button className="main-btn" type="submit">
        {typeForm} Team
      </button>
    </form>
  );
}

export default Form;

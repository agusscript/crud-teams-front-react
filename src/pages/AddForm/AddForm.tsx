import "./AddForm.scss";

function AddForm() {
  return (
    <section className="add-form-section">
      <h1>Add Team</h1>

      <form action="/teams" method="post" className="form-add">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="shortName">Short Name</label>
        <input type="text" id="shortName" name="shortName" />

        <label htmlFor="tla">Initials</label>
        <input type="text" name="tla" id="tla" />

        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" />

        <label htmlFor="founded">Founded Date</label>
        <input type="text" name="founded" id="founded" />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />

        <label htmlFor="venue">Stadium Name</label>
        <input type="text" name="venue" id="venue" />

        <label htmlFor="clubColors">Club Colors</label>
        <input type="text" name="clubColors" id="clubColors" />

        <label htmlFor="website">Website</label>
        <input type="text" name="website" id="website" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />

        <button className="main-btn" type="submit">
          Add Team
        </button>
      </form>
    </section>
  );
}

export default AddForm;

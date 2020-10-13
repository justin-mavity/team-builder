import React from "react";

function TeamForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    // prevent the browser from reloading
    evt.preventDefault();
    // the 'submit' callback coming in from props
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/* Text inputs */}
        <label>
          Member Name:
          <input
            type="text"
            name="memberName"
            onChange={onChange}
            value={values.memberName}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        {/* DropDown menu */}
        <label>
          Role:
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">---select role---</option>
            <option value="backend engineer">Backend Enigneer</option>
            <option value="frontend Engineer">Frontend Enigneer</option>
            <option value="designer">Designer</option>
          </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
export default TeamForm;

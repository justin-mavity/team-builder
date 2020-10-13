import React from "react";

function Member(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your team member list...</h3>;
  }

  return (
    <div className="member-contanier">
      <h2>Name: {details.memberName}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
export default Member;

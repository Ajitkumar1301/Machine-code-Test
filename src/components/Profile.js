const Profile = ({ data, setData, err }) => {
  const { name, age } = data;

  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {err.name && <div className="error-msg">{err?.name}</div>}
      </div>
      <div>
        <label>age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      {err.age && <div className="error-msg">{err?.age}</div>}
    </div>
  );
};

export default Profile;

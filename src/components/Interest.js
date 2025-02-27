const Interest = ({ data, setData, err }) => {
  const { interests } = data;
  const handleCheckboxChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((ele) => ele !== e.target.name),
    }));
  };

  console.log(data);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="music"
          checked={interests?.includes("music")}
          onChange={(e) => handleCheckboxChange(e)}
        />
        <label>Music</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={interests?.includes("sports")}
          name="sports"
          onChange={(e) => handleCheckboxChange(e)}
        />
        <label>Sports</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="reading"
          onChange={(e) => handleCheckboxChange(e)}
          checked={interests?.includes("reading")}
        />
        <label>reading</label>
      </div>
      {err?.interest && <div className="error-msg">{err?.interest}</div>}
    </div>
  );
};

export default Interest;

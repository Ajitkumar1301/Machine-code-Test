import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    age: 0,
    interests: ["reading", "music"],
    theme: "dark",
  });

  const Tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age not valid";
        }
        setError(err);
        return err.age || err.name ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interest = "ADD Atleast one Interest";
        }
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponet = Tabs[activeTab].component;

  const PrevTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  const NextTab = () => {
    Tabs[activeTab].validate() && setActiveTab((prev) => prev + 1);
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <>
      <div className="headerContainer">
        {Tabs.map((tab, i) => (
          <div
            key={i}
            className="tab-head"
            onClick={() => Tabs[activeTab].validate() && setActiveTab(i)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="bodyContainer">
        <ActiveTabComponet data={data} setData={setData} err={error} />
      </div>
      <div className="buttonComponet">
        {activeTab > 0 && <button onClick={PrevTab}>prev</button>}
        {activeTab < Tabs.length - 1 && (
          <button onClick={NextTab}>Next </button>
        )}

        {activeTab === Tabs.length - 1 && (
          <button onClick={() => handleSubmit}>Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;

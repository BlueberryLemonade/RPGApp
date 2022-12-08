import ChampionList from "./ChampionList";
import ChampionForm from "./ChampionForm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ChampionMenu = props => {

  const fetchURL = 'http://localhost:8080/api/champions/';

  const [selectedChampId, setSelectedChampId] = useState("");
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const request = await axios.get(fetchURL)
        .then(response => {
          setChampions(response.data);

        })
        .then(setUpdated(false))
        .finally(setLoading(false));

      return request;
    }
    fetchData();
  }, [updated]);

  const changeHandler = () => {
    setUpdated(true);
  }

  /*
    const deleteHandler = (championId) => {
  
      setChampions(prevChampions => {
        const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
        return updatedChampions;
      })
    };
  */

  const formAndList = () => {

    if (loading) {
      return <p>Loading...</p>
    }

    const selectionHandler = (selectionFromList) => {
      setSelectedChampId(selectionFromList);
    }

    return (
      <div>
        <ChampionList champions={champions} onChange={changeHandler} onSelected={selectionHandler} selection={selectedChampId} />
        <ChampionForm onChange={changeHandler} />
        <Link to="/"><button>Close Menu</button></Link>
      </div>
    );
  };
  return (
    <div>
      {formAndList()}
    </div>
  )

};


export default ChampionMenu;
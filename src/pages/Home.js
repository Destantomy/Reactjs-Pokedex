import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';
import { Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visiblePokemonCount, setVisiblePokemonCount] = useState(9);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for (let x = 1; x <= 500; x++) {
            pokemonArray.push(await getPokemon(x));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false)
    }

    const getPokemon = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    const loadMorePokemon = () => {
        setVisiblePokemonCount(prevCount => prevCount + 9);
    };

  return (
    <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Row>
                        {pokemon.slice(0, visiblePokemonCount).map((p) => (
                            <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Pokemon pokemon={p.data} />
                            </Col>
                        ))}
                    </Row>
                    {visiblePokemonCount < pokemon.length && (
                        <div className="d-flex justify-content-center my-3">
                            <Button className='bg-dark' style={{border: 'none'}} onClick={loadMorePokemon}>Load More</Button>
                        </div>
                    )}
                </>
            )}
        </div>
  )
}

export default Home

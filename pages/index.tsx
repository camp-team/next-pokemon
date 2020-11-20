import { useState } from 'react';
import Layout from '../components/Layout';
import { Pokemon } from '../interfaces/pokemon';
import style from '../components/Pokemon.module.css';

const IndexPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    {
      name: 'ピカチュウ',
      life: 100,
    },
    {
      name: 'フシギバナ',
      life: 100,
    },
    {
      name: 'ヒトカゲ',
      life: 100,
    },
  ]);

  const atack = (index: number) => {
    pokemons[index].life -= 10;
    setPokemons([...pokemons]);
  };

  const heal = (index: number) => {
    pokemons[index].life += 10;
    setPokemons([...pokemons]);
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <p>{pokemon.name}</p>
            <div className={style.life}>
              <div
                className={`${style.life__body} ${
                  pokemon.life < 30 && style.denger
                }`}
                style={{ transform: 'scaleX(' + pokemon.life / 100 + ')' }}
              ></div>
            </div>
            <button disabled={pokemon.life < 10} onClick={() => atack(index)}>
              攻撃
            </button>
            <button disabled={pokemon.life > 90} onClick={() => heal(index)}>
              回復
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

import { useContext, useState } from 'react';
import UserActions from '../Interactions/UserActions/UserActions';
import Statistics from '../Interactions/Statistics/Statistics';
import { RegisteredContext } from '../../UserInteractions/contexts/RegisteredContext';
import styles from './Geographical.module.css';

export default function Geographical () {
    const {accessToken, loggedEmail} = useContext(RegisteredContext);
    const {sun, setSun} = useState ([]);
    const {wind, setWind} = useState([]);
    const {clouds, setClouds} = useState ([]);
    const {rain, setRain} = useState([]);
    const {snow, setSnow} = useState ([]);
    const {warm, setWarm} = useState([]);
    const {cold, setCold} = useState ([]);
    const {dry, setDry} = useState([]);
    const {wet, setWet} = useState ([]);
    const {plants, setPlants} = useState([]);
    const {animals, setAnimals} = useState ([]);

    return (
        <div className={styles['geographical']}>            
            <h2 className={styles['title']}>Climate and Nature</h2>
            <div>
                <h2>Sun</h2>
                <p>
                    Sun gives serotonin, light, warmness, vitamine D. It protects
                    us from melancholy, cold, viruses, rachitis, alergies. It helps 
                    us read, write, learn new things, know nature, it helps plants grow 
                    and give us fresh air, vegetables and fruits.
                </p>
                {accessToken
                    ? <UserActions setComment={setSun} /> 
                    : <Statistics comments={sun} />
                }
            </div>
            <div>
                <h2>Wind</h2>
                <p>
                    Wind helps plants spread, birds fly and bring dry air.
                </p>
                {accessToken
                    ? <UserActions setComment={setWind} /> 
                    : <Statistics comments={wind} />
                }
            </div>
            <div>
                <h2>Clouds</h2>
                <p>
                    They calm people down, bring water to the Earth, and balance 
                    the sun.
                </p>
                {accessToken
                    ? <UserActions setComment={setClouds} /> 
                    : <Statistics comments={clouds} />
                }
            </div>
            <div>
                <h2>Rain</h2>
                <p>
                    Rain brings life to plants, animals, all living creatures.
                </p>
                {accessToken
                    ? <UserActions setComment={setRain} /> 
                    : <Statistics comments={rain} />
                }
            </div>
            <div>
                <h2>Snow</h2>
                <p>
                    Snow makes home for seeds in winter so that they could not 
                    freeze. It gives a lot of beauty and joy to children.
                </p>
                {accessToken
                    ? <UserActions setComment={setSnow} /> 
                    : <Statistics comments={snow} />
                }
            </div>
            <div>
                <h2>Warm</h2>
                <p>
                    Warm gives strength to lots of good bacteries, blood cells, 
                    bones. Hot kills lots of bad bacteries and helps body get rid 
                    of garbage like viruses.
                </p>
                {accessToken
                    ? <UserActions setComment={setWarm} /> 
                    : <Statistics comments={warm} />
                }
            </div>
            <div>
                <h2>Cold</h2>
                <p>
                    It helps us understand how much we love sun, but kill some 
                    other bacteries because they are lots of types.
                </p>
                {accessToken
                    ? <UserActions setComment={setCold} /> 
                    : <Statistics comments={cold} />
                }
            </div>
            <div>
                <h2>Dry</h2>
                <p>
                    Helps alergies and astma.
                </p>
                {accessToken
                    ? <UserActions setComment={setDry} /> 
                    : <Statistics comments={dry} />
                }
            </div>
            <div>
                <h2>Wet</h2>
                <p>
                    Keeps bacterial life.
                </p>
                {accessToken
                    ? <UserActions setComment={setWet} /> 
                    : <Statistics comments={wet} />
                }
            </div>
            <div>
                <h2>Plants</h2>
                <p>
                    They are food, bring air, beauty, trees make shadow, sometimes give 
                    water, feed bugs etc.
                </p>
                {accessToken
                    ? <UserActions setComment={setPlants} /> 
                    : <Statistics comments={plants} />
                }
            </div>
            <div>
                <h2>Animals</h2>
                <p>
                    Some are friends, some have proteins, they are very big part of living 
                    creatures in the world and take active place in the circle of life. Some of 
                    them are even family and humans need to learn from them how to be happy 
                    with no reason!!!
                </p>
                {accessToken
                    ? <UserActions setComment={setAnimals} /> 
                    : <Statistics comments={animals} />
                }
            </div>
        </div>
    );
}
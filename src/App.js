import * as React from 'react';
import './App.css';

import Select from 'react-select'

import styles from './styles.css'

const options = [
    {value: 'General', label: 'General'},
    {value: 'Sports', label: 'Sports'},
    {value: 'Technology', label: 'Technology'}
]
const App = () => (<>
        <button className={styles.button}>New Article</button>
        <div className="App">
            <div>Headline: <input className={styles.menuItem}/></div>
            <div className={styles.topicContainer}>Topic: <Select options={options} placeholder=""
                                                                  className={styles.menuItem}/></div>
            <div>D.O.P: <input className={styles.menuItem}/></div>
            <div>Article: <textarea name="Text1" cols="40" rows="5" className={styles.textArea}/></div>
        </div>
        <button className={styles.submit}>Submit</button>
    </>
);

export default App;

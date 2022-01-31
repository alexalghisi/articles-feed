import React from 'react';
import './App.css';

import Select from 'react-select'

import style from "./styles/styles.module.css";

const options = [
    {value: 'General', label: 'General'},
    {value: 'Sports', label: 'Sports'},
    {value: 'Technology', label: 'Technology'}
];

const App = () => {

    const onNewArticle = React.useCallback(() => {
        window.location.reload();
    }, []);

    return (<div className={style.container}>
            <div className="App">
                <button className={style.newArticleButton} onClick={onNewArticle}>New Article</button>
                <div className={style.menuItem}>Headline: <input/></div>
                <div className={style.menuItem}>Topic: <Select options={options} placeholder=''
                                                               className={style.dropDown}/></div>
                <div className={style.menuItem}>D.O.P: <input/></div>
                <div className={style.title}>Article: <textarea name="Text1" cols="40" rows="5"
                                                                className={style.textArea} maxLength="200"
                                                                width="200px"/>
                </div>
                <button className={style.submit}>Submit</button>
            </div>
        </div>
    );
}
export default App;

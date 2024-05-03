import css from './Options.module.css';
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div className={css["options"]}>
            <button onClick={() => { updateFeedback("good") }} className={css["btn"]}>good</button>
            <button onClick={() => { updateFeedback("neutral") }} className={css["btn"]}>neutral</button>
            <button onClick={() => { updateFeedback("bad") }} className={css["btn"]}>bad</button>
            {totalFeedback > 0 && (<button onClick={() => { resetFeedback() }} className={css["btn"]}>reset</button>)}
        </div>
        
    );
};

export default Options;
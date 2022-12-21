import PropTypes from "prop-types";
export default function FeedbackOptions({mas,onLeaveFeedback}) {

        return <div>{mas.map((mas,i)=><button key={i} type="button" name={mas} onClick={onLeaveFeedback}>{mas}</button>)}</div>
 
}
FeedbackOptions.propTypes ={
   onLeaveFeedback:  PropTypes.func,
   mas: PropTypes.arrayOf(PropTypes.string.isRequired),
}

import Countdown from 'react-countdown';

const style = {
  display: 'inline-block',
  fontWeight: 600,
  marginLeft: '10px'
};

const Completionist = () => <span style={style}>Bid is over!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span style={style}>
        {hours}: {minutes}: {seconds}
      </span>
    );
  }
};

const BidCountdown = props => {
  return <Countdown date={Date.now() + 5000} renderer={renderer} />;
};

export default BidCountdown;

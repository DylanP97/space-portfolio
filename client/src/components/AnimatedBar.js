import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedBar({value}) {
  return <ProgressBar animated now={value} />;
}

export default AnimatedBar;


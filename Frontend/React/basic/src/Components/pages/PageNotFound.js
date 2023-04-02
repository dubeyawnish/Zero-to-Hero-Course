import {Button} from 'react-bootstrap';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className='hide-navbar'>
    <h1 className='p-3'>This page does not exist</h1>
    <button type="button" class="btn btn-primary">Normal Bootstrap</button>
    <Button  className="m-3"variant="primary">React-Bootstrap</Button>
    <a href='/'>Home</a>
    </div>
  )
}

export default PageNotFound;

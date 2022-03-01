import 'bootstrap/dist/css/bootstrap.min.css'
import { h1 } from 'react-bootstrap'

const TextHeader = (props) => <h1 style={{marginTop: 5}}> {props.text} </h1>

const TextBody = () => {
    return (
        <TextHeader text='fuck' />
    )
}

export default TextBody
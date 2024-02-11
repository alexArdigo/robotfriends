import './style.scss';

type Props = {
    children: JSX.Element
}
const Scroll = ({children}: Props) => {
        return (
            <div className='Scroll'>
                {children}
            </div>
        ) 
}

export default Scroll
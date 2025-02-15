import './profilepage.scss';
import List from '../../components/list/list' 
function Profilepage(){
    return (
        <div className='profilePage'>
            <div className="wrapper">
                <div className="title">
                    <h1>Informazioni utente</h1>
                    <button>Modifica Profilo</button>
                </div>
                <div className="info">
                    <span>Foto Profilo <img src="/menu.png" alt="" /></span>
                    <span>Nome utente: John Doe</span>
                    <span>Email utente: blabla@gmail.com</span>
                </div>
                <div className="title">
                    <h1>Immobili caricati</h1>
                    <button>Aggiungi nuova inserzione</button>
                </div>
                <List/>
                <div className="title">
                    <h1>Immobili Salvati</h1>
                </div>
                <List/>
            </div>
        </div>
    )
}

export default Profilepage
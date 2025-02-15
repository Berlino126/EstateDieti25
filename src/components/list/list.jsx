import './list.scss'
import Build from '../Build/Build'
import {listData} from '../../lib/dummydata'
function List(){
    return (
        <div className="list">
            {listData.map(item=>(
                <Build key = {item.id} item ={item}></Build>
            ))}
        </div>
    )
}
export default List;
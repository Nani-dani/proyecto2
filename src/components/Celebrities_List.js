import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celSlices';
import './estilos.css';
const Celebrities_List = ({ celebrities }) => {

    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)

    function handleAdd(celid) {

        const celebrity = celebrities.find(c => c.birthday === celid);

        if (celebrities_List.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));
        } else {
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);

    }


    return (

        <div>
            <div>
                <h5>Celebrities_List</h5>
                </div>
            <div> {celebrities.map(c => {

                return (

                    <div class="card" id="divcar" >
                        
 
                        <div class="card-body">
                            <h2 class="card-title">{c.name}</h2>
                            <h4 class="card-text">{c.age}</h4>
                            <div class="card-text"> {c.occupation} </div>

                            <button class="btn btn-primary" onClick={() => handleAdd(c.birthday)}>Agregar a Celebridades Favoritas</button>
                        </div>

                    </div>)


            }

            )}
            </div>
        </div>)

}


export default Celebrities_List


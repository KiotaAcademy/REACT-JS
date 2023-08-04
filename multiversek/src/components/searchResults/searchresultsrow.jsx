import './searchresults.css'

export default function SearchResultRow({house}){
    function setActive(){

    }
    return (
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
    )
}
import {useState, useEffect} from 'react'
import Layouts from "../Components/Layouts";
import Navbar from "../Components/Navbar";
import axios from 'axios';
import { data } from 'autoprefixer';

export default function Flutter() {
    const [flut, setFlut] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        axios.get('https://mydbblog.herokuapp.com/flutterblog')
        .then(res => {
            let response = res.data;
            setFlut(response);
            setLoading(false);
        }, [2000])
        }) 
        alert('Masih keadaan Beta Test\nMakanya Text ngacak wkkwwk')
    }, [])
    return(
        <>
            <Layouts title="Learn Flutter"/> 
            <Navbar/>
            <div className="flex justify-center flex-column mt-10">
            {loading && <h5 className ="text-center text-white text-2xl">Loading bentar gan...</h5>}
            {flut.map((datas) => (
                <div key={datas.id}>
                    <main className="text-white">
                        <p className="px-20 mx-20 text-center text-2xl">{datas.title}</p>
                        <p className="mx-20 font-bold mt-10 text-gray-50 text-xs">{datas.author}</p>
                        <p className="px-20 mx-20 mt-10">{datas.text}</p>
                        
                        
                    </main>
                </div>
            ))}
            </div>
        </>
    )

}
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading';
const ContactList = () => {

    let [number, setNumber] = useState(12);
    let [loading, setLoading] = useState(false)

    const url = `https://randomuser.me/api/?results=${number}`
    const { isLoading, error, data, refetch } = useQuery("contactLsit", () => fetch(url).then(res => res.json()))

    console.log(data)

    function load() {

        setLoading(false)
        refetch()
    }

    const handleLoad = () => {

        setNumber(number + 12)
        refetch()
        setLoading(true)

        setTimeout(load, 3000);
    }

    console.log(number)

    return (
        <div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-2'>




                {
                    data?.results?.map(user => <div class="card w-full bg-base-100 shadow-xl"
                        data-aos="zoom-in"
                    >
                        <figure class="px-10 pt-10">
                            <img src={user?.picture?.medium} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{user?.name?.fisrt} {" "}{user?.name?.last}</h2>
                            <p> Cell : {user?.cell}</p>
                            <p> Email : {user?.email}</p>

                        </div>
                    </div>)
                }




            </div>

            {
                isLoading && <Loading></Loading>
            }

            {
                loading && <div className='flex justify-center items-center'>
                    <button class="btn btn-square loading"></button>
                </div>
            }


            {
                (!loading) && <div className='flex justify-center items-center mt-3'>

                    <button className='btn btn-error btn-sm' onClick={() => handleLoad()}>Load More</button>
                </div>
            }



        </div>
    );
};

export default ContactList;
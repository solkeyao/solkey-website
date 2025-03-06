import './index.css';

export default function Parcerios(){
    return (
        <section className='d-section' id='parceiros'>
            <h1 className='text-center'>Parceiros & Marcas</h1>
            <ul className='parc_list'>
                <li className='parc_item'>
                    <img  width='120px' src="/assets/parc_conta_it.png" alt="" />
                </li>
                <li className='parc_item'>
                    <img  width='70px' src="/assets/tarcas.png" alt="" />
                </li>

                <li className='parc_item'>
                    <img  width='70px' src="/assets/keypay.png" alt="" />
                </li>
                <li className='parc_item'>
                    <img  width='80px' src="/assets/interexpress.png" alt="" />
                </li>

                <li className='parc_item'>
                    <img  width='100px' src="/assets/voice_angola.png" alt="" />
                </li>
            </ul>
        </section>
    );
}
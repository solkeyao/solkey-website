import './index.css';

export default function Projectos(){
    return (
        <section className='d-section projectos' id='projectos'>
            <h1 className='text-center'>Projectos</h1>
            <div className='proj_grid'>
                <a   href="https://mimbu.net" target='_blank' className='proj_item'>
                    <img src="/assets/mimbu_1.jpeg" alt="Icon Mimbu" />
                    <span className='proj_item_link'>Clique para ver</span>
                </a>
            </div>
        </section>
    );
}